import { Button } from "reactstrap";
import Header from "../Header/Header";

function FoodApp(props) {
  const { pageNum, setPageNum } = props;
  return (
    <>
      <Header />
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Welcome to Food's Kitchen</h1>
        <Button
          style={{
            backgroundColor: "darkblue",
            color: "white",
          }}
          onClick={() => {
            setPageNum(pageNum + 1);
          }}
        >
          GO TO MENU
        </Button>
      </div>
    </>
  );
}

export default FoodApp;
