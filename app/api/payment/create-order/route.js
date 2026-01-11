// app/api/payment/create-order/route.js
// API endpoint to create payment order and get payment token

export const runtime = 'nodejs';

// Payment gateway integration removed — payments are disabled.
import { getClientInfo } from '@/shared/utils/getClientInfo';
import { promises as fs } from 'fs';
import path from 'path';

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

// Save order to database
async function saveOrder(order) {
  await initOrdersDB();
  const data = JSON.parse(await fs.readFile(ORDERS_DB_PATH, 'utf-8'));
  data.orders.push(order);
  await fs.writeFile(ORDERS_DB_PATH, JSON.stringify(data, null, 2));
}

export async function POST(request) {
  // Payments are disabled in this build. Return a clear response for callers.
  return new Response(
    JSON.stringify({ success: false, message: 'Payments are disabled' }),
    { status: 501 }
  );
}
