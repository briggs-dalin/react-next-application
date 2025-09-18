// Example users
export const users = [
  {
    id: '1',
    username: 'admin',
    role: 'admin',
    password: 'admin123',
    name: 'Admin User',
    email: 'admin@example.com',
  },
];

// Example customers
export const customers = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    image_url: 'https://via.placeholder.com/150',
  },
];

// Example invoices
export const invoices = [
  {
    id: '1',
    customer_id: '1',
    amount: 250,
    status: 'paid',
    date: new Date().toISOString().split('T')[0], // today's date
  },
];

// Example revenue
export const revenue = [
  {
    month: 'Jan',
    revenue: 500,
  },
];