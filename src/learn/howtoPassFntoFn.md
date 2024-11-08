```typescript
const orders = [
  { menuId: 1, amount: 2 },
  { menuId: 2, amount: 4 },
];

function submitOrder(orders: Order[]) {
  //! set data to supabase
  // biss is business logic
  // UI --> Biss: submitOrder
  //
  // Biss --> Integration: sendToSupabase
  //--------------------------------------
  //! get data from supabase
  // Integration --> Biss: getUpdatedTableFromSupabase

  // Biss --> UI: setTableOrder

  // Transform
  const sbOrder = orders
    .filter((order) => order.menuId.toLowerCase() === "")
    .map((order) => ({ ...order, submitTime: new Date() }));

  sendToSupabase(sbOrder);

  //................................................................

  // !get
  const sbTableOrders = getUpdatedTableFromSupabase();

  // Transform
  const tableOrders = sbTableOrders.map((order) => ({
    menuTitle: "".toLowerCase(),
    amount: order.amount,
  }));

  setTableOrder(tableOrders);
}

type Order = {
  menuId: string;
  amount: number;
};

type SBOrder = {
  menuId: string;
  amount: number;
  submitTime: Date;
};

// !pin want : output
// output needs match type
function sendToSupabase(sbOrders: SBOrder[]) {
  // ... do sth to send  =  send to supabase
  // return supabase
  //   .from("orders") // The name of your table in Supabase
  //   .insert(sbOrders) // Inserts the array of orders
  //   .then(({ data, error }) => {
  //     if (error) {
  //       console.error("Error inserting order into Supabase:", error);
  //       return;
  //     }
  //     console.log("Order successfully inserted:", data);
  //   });
}

type SBTableOrder = {
  orderId: string;
  menuId: string;
  amount: number;
  submitTime: Date;
};

type TableOrder = {
  menuTitle: string;
  amount: number;
};

function getUpdatedTableFromSupabase(/* tableNo */): SBTableOrder[] {
  return [];
}

function setTableOrder(tableOrders: TableOrder[]) {}

// ! how to  planning
// Description:  action to push data from FE to BE so we can store permanenet data.
// get cart order from ui => push this to BE <- not practical, planning
// ---
// get cart order from ui => *** => push this to BE <- What need to be done to make it possible, excuting
// get cart order from ui => prepare up data => transform the data => push this to BE => Update UI <- final conclusion, excuting

// get & prepare data from cart order in UI

// ! ภาพใหญ่  --> ลงมา --> ลงมา
```
