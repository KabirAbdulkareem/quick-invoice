import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listInvoices() {
  // const data = await sql`
  //   SELECT invoices.amount, customers.name
  //   FROM invoices
  //   JOIN customers ON invoices.customer_id = customers.id
  //   WHERE invoices.amount = 666;
  // `;

  // const data = await sql`
  //     SELECT customers.name, invoices.amount 
  //     FROM invoices
  //     JOIN customers ON invoices.customer_id = customers.id
  // `;

  /* Renvenue */

  // const customers = await sql`SELECT * FROM customers`;
  // const invoices = await sql`SELECT * FROM invoices`;

  // console.clear();
  // console.log('Customers data:');
  // console.table(customers);

  // let a:number = 3 * 3;
  // console.log('a:', a);

  // console.log('\n\nInvoices data:');
  // console.table(invoices);
  return null;
}

export async function GET() {

  try {
    return Response.json(await listInvoices());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
