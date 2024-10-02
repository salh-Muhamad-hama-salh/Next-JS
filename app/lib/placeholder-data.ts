const customers = [
  { id: 1, name: "Customer 1" },
  { id: 2, name: "Customer 2" },
  // ...
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  // ...
];

// Example usage to avoid 'assigned a value but never used' error
console.log(invoices);
