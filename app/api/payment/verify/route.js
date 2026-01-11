// app/api/payment/verify/route.js
// API endpoint to verify payment transaction status

import { NextResponse } from 'next/server';
// Payment gateway integration removed — payments are disabled.
import { promises as fs } from 'fs';
import path from 'path';

export const runtime = 'nodejs';

// Path to orders database
const ORDERS_DB_PATH = path.join(process.cwd(), 'data', 'orders.json');

// Initialize orders database if it doesn't exist
async function initOrdersDB() {
  try {
    await fs.access(ORDERS_DB_PATH);
  } catch {
    const dir = path.dirname(ORDERS_DB_PATH);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(ORDERS_DB_PATH, JSON.stringify({ orders: [] }, null, 2));
  }
}

// Get order by trackId
async function getOrder(trackId) {
  await initOrdersDB();
  const data = JSON.parse(await fs.readFile(ORDERS_DB_PATH, 'utf-8'));
  return data.orders.find((order) => order.trackId === trackId);
}

// Update order status
async function updateOrderStatus(trackId, status, transactionDetails = {}) {
  await initOrdersDB();
  const data = JSON.parse(await fs.readFile(ORDERS_DB_PATH, 'utf-8'));
  
  const orderIndex = data.orders.findIndex((order) => order.trackId === trackId);
  if (orderIndex !== -1) {
    data.orders[orderIndex] = {
      ...data.orders[orderIndex],
      status,
      transactionDetails,
      verifiedAt: new Date().toISOString(),
    };
    await fs.writeFile(ORDERS_DB_PATH, JSON.stringify(data, null, 2));
    return data.orders[orderIndex];
  }
  return null;
}

export async function POST(request) {
  // Payments are disabled — verification is unavailable.
  return NextResponse.json({ success: false, message: 'Payments are disabled' }, { status: 501 });
}
