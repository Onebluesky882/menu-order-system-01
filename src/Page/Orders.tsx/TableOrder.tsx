import { useParams } from "react-router-dom";

const TableOrder = () => {
  const { tableNo } = useParams();
  return (
    <div>
      <h1>{tableNo}</h1>
    </div>
  );
};
export default TableOrder;
