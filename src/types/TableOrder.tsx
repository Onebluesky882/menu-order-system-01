export type Table = {
  tableNo: "A1" | "A2" | "A3" | "A4" | "A5" | "B1" | "B2" | "B3" | "B4" | "0";
  seat: number;
  status: "AVAILABLE" | "OCCUPIED" | "RESERVED" | "CLEANING";
  position?: "left" | "right";
  customerName?: "";
};

export type TableReserve = Table & { name?: string };
