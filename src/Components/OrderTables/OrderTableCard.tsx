type OrderTableProps = {
  id: string;
  amount: number;
  status: "ORDERED" | "COOKING" | "DONE";
  createdAt: string;
  doneAt?: string;
  name: string;
  image: string;
};

const OrderTableCard = ({
  id,
  amount,
  createdAt,
  status,
  doneAt,
  name,
  image,
}: OrderTableProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "green",
        width: "50px",
      }}
      key={id}
    >
      <p>order id : {id}</p>
      <p>{name}</p>
      <img src={image} alt="" width={20} />
      <p>amount {amount} </p>
      {doneAt !== null && <p>{doneAt}</p>}
      <p>order time : {createdAt}</p>
      <p>status : {status}</p>
    </div>
  );
};
export default OrderTableCard;
