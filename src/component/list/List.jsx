/* eslint-disable */
import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";
import styles from "./List.module.css";

const List = ({updateSelectedData, rows, selectedCurrency, onOrderClick }) => {

  const callUpdateSelectedData =(data)=>{
    updateSelectedData(data)

  }
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {selectedCurrency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr  key={row["&id"]}  onClick={()=>{ 
            console.log("index : ",index);
            updateSelectedData(row, index )}}  >
            <ListRowCell styles={{ backgroundColor: 'lightgrey' }}> {row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[selectedCurrency]}</ListRowCell>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;