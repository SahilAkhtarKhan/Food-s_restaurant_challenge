import { useState } from "react";
import "./App.css";
import FoodItem from "./Components/FoodItem/FoodItem";
import FoodApp from "./Components/FoodApp/FoodApp";
import CheckOutPage from "./Components/ThankYouPage/ThankYouPage";

function App() {
  const [page, setPage] = useState(0);

  if (page === 0) {
    return (
      <>
        <FoodApp pageNum={page} setPageNum={setPage} />
      </>
    );
  } else if (page === 1) {
    return <FoodItem pageNum={page} setPageNum={setPage} />;
  } else if (page === 2) {
    return <CheckOutPage />;
  }
}

export default App;
