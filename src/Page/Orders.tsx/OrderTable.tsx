import { useParams } from "react-router-dom";

const OrderTable = () => {
  const { tableNo } = useParams();

  return (
    <div>
      <h1>{tableNo}</h1> <div>hi</div>
    </div>
  );
};
export default OrderTable;
