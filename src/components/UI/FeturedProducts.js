import { Row } from "antd";
import Product from "./Product";

const FeturedProducts = ({ products }) => {
  return (
    <>
      {" "}
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        #Featured Products
      </h1>
      <Row gutter={[24, 24]}>
        {products?.map((product) => (
          <Product key={product?._id} product={product} />
        ))}
      </Row>
    </>
  );
};

export default FeturedProducts;
