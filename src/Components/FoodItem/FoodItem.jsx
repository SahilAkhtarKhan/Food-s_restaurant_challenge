import { useState } from "react";
import { useEffect } from "react";
import Header from "../Header/Header";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import "./FoodItem.css";

function FoodItem(props) {
  const { pageNum, setPageNum } = props;

  const [data, setData] = useState([]);
  const [qty, setQty] = useState([]);

  //fetching API
  const getApiData = async () => {
    const res = await fetch(
      "https://bitbucket.org/punitdiwan/coding-challange/raw/08a0e129e1e3992a6d3d87d737332dc7ca7a79e4/data/feeds.json"
    );
    let apiJsonData = await res.json();
    setData(apiJsonData);
  };

  useEffect(() => {
    let qtyArr = [];
    for (let i = 0; i < data.length; i++) {
      qtyArr.push(0);
    }
    setQty(qtyArr);
  }, [data]);

  //calling API function
  useEffect(() => {
    getApiData();
  }, []);

  // landing to checkout page
  function checkoutPage() {
    setPageNum(pageNum + 1);
  }

  //handling food qty on click
  function handleFoodQty(index, flag) {
    const foodQty = qty[index];
    if (foodQty === 0 && flag == "d") {
      return;
    }
    const newFoodQty = [...qty];
    newFoodQty[index] = flag == "i" ? foodQty + 1 : foodQty - 1;

    setQty(newFoodQty);
  }
  return (
    <>
      <Header />
      <Button className="checkout-btn" onClick={checkoutPage}>
        CheckOut
      </Button>
      <div className="all-cards">
        {data.map((item, index) => {
          return (
            <Card key={index}>
              <img alt="Sample" src={`/assets/images/${item.image}`} />
              <CardBody>
                <CardTitle tag="h4">{item.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="p">
                  Price- {item.price}
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="p">
                  Qty- {qty[index]}
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="p">
                  Cost- {item.price * qty[index]}
                </CardSubtitle>
                <div className="plus-minus-btn">
                  <Button
                    className="plus-btn"
                    id={index}
                    onClick={() => {
                      handleFoodQty(index, "i");
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className="minus-btn"
                    id={index}
                    onClick={() => {
                      handleFoodQty(index, "d");
                    }}
                  >
                    -
                  </Button>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
}
export default FoodItem;
