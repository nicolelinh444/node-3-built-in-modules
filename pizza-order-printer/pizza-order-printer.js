/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */

import fs from "fs/promises";

async function pizzaOrderPrinter() {
  // declare variables
  const getOrder = process.argv[2];
  const orderNumber = process.argv[3];

  const file = await fs.readFile("data.json", "utf-8");
  const data = JSON.parse(file);

  // print all orders
  if (getOrder === "getAllOrders") {
    data.forEach((order) => {
      console.log(order);
    });
  }

  // print one order by index
  else if (getOrder === "getOneOrder") {
    console.log(data[orderNumber]);
  } else {
    console.log("Order not found. Please enter a valid order number.");
  }
}

// call function
pizzaOrderPrinter();
