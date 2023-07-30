import { addProductToPcBuilder } from "@/redux/features/pcBuilder/pcBuilderSlice";
import {
  ArrowRightOutlined,
  DisconnectOutlined,
  DollarOutlined,
  FilterOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Card, Col, Image } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Product = ({ product, from }) => {
  const { Meta } = Card;
  const router = useRouter();
  const dispatch = useDispatch();
  const handleAddProductInPcBuilder = () => {
    dispatch(addProductToPcBuilder(product));
    router.push("/pc-builder");
  };
  return (
    <Col
      sm={24}
      xs={24}
      md={8}
      key={product.id}
      className="gutter-row "
      span={8}
    >
      <Card
        hoverable
        style={{ overflow: "hidden" }}
        cover={
          <Image
            src={product?.image}
            width={500}
            height={200}
            responsive
            alt="product image"
            style={{ minWidth: "100%" }}
          />
        }
      >
        <Meta title={product?.productName} />
        <div
          className="line"
          style={{
            height: "5px",
            margin: "20px 0",
            background: "#000",
            width: "100%",
          }}
        ></div>

        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "gray",
            margin: "10px 0px",
            fontSize: "12px",
          }}
        >
          <span>
            <FilterOutlined />
            Category: {product?.category}
          </span>
          <span>
            <DollarOutlined /> ${product?.price}
          </span>
        </p>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "gray",
            margin: "10px 0px",
            fontSize: "12px",
          }}
        >
          <span>
            <DisconnectOutlined /> {product?.status}
          </span>
          <span>
            <StarOutlined /> {product?.averageRating}
          </span>
        </p>

        {from === "category" || !from ? (
          !from ? (
            <Link href={`category/${product.category}/${product._id}`}>
              <p
                style={{
                  fontSize: "15px",
                  marginTop: "20px",
                  backgroundColor: "black",
                  color: "white",
                  width: "100%",
                  padding: "2px 5px ",
                  fontWeight: "300",
                  letterSpacing: "3px",
                  textAlign: "center",
                }}
              >
                product details <ArrowRightOutlined />
              </p>
            </Link>
          ) : (
            <Link href={`${product.category}/${product._id}`}>
              <p
                style={{
                  fontSize: "15px",
                  marginTop: "20px",
                  backgroundColor: "black",
                  color: "white",
                  width: "100%",
                  padding: "2px 5px ",
                  fontWeight: "300",
                  letterSpacing: "3px",
                  textAlign: "center",
                }}
              >
                product details <ArrowRightOutlined />
              </p>
            </Link>
          )
        ) : (
          <p
            onClick={handleAddProductInPcBuilder}
            style={{
              fontSize: "15px",
              marginTop: "20px",
              backgroundColor: "black",
              color: "white",
              width: "100%",
              padding: "2px 5px ",
              fontWeight: "300",
              letterSpacing: "3px",
              textAlign: "center",
            }}
          >
            Add
            <ArrowRightOutlined />
          </p>
        )}
      </Card>
    </Col>
  );
};

export default Product;
