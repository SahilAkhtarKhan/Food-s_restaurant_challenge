import Header from "../Header/Header";

function CheckOutPage() {
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
        <h1>Checkout</h1>
        <h2>Thank you for your order.</h2>
      </div>
    </>
  );
}
export default CheckOutPage;
