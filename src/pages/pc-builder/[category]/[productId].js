import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";
import RootLayout from "@/components/Layouts/RootLayout";
import { useGetProductByIdQuery } from "@/redux/api/api";
import { Avatar, Col, List, Row, Space } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";

const Product = () => {
  const { query } = useRouter();
  const { category, productId } = query;
  const { data, isLoading, isError } = useGetProductByIdQuery(productId);
  let product = [];
  if (data) {
    product = data[0];
  }
  return (
    <>
      <Row style={{ marginTop: "80px", alignItems: "center" }}>
        <Col
          justify="center"
          align="middle"
          md={12}
          style={{ overflow: "hidden" }}
        >
          <Image
            alt="example"
            src={product?.image}
            width={500}
            height={300}
            responsive
          />
        </Col>
        <Col md={12} style={{ paddingLeft: "20px" }}>
          <h1 style={{ fontSize: "30px" }}>{product?.productName}</h1>

          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "100%",
            }}
          ></div>
          <Row gutter={[8, 8]}>
            <Col xs={12}>Price</Col>
            <Col xs={12}>${product?.price}</Col>
            <Col xs={12}>Category</Col>
            <Col xs={12}>{product?.category}</Col>
            <Col xs={12}>Status</Col>
            <Col xs={12}>{product?.status}</Col>
            <Col xs={12}>IndividualRating</Col>
            <Col xs={12}>{product?.individualRating}</Col>
            <Col xs={12}>AverageRating</Col>
            <Col xs={12}>{product?.averageRating}</Col>
            <Col xs={12}>Total Reviews</Col>
            <Col xs={12}>{product?.reviews?.length}</Col>
            <Col style={{ marginTop: "25px" }} xs={24}>
              <h3>Description</h3>
              {product?.description}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[8, 8]} style={{ marginTop: "30px" }}>
        <Col xs={12}>
          {" "}
          <Row gutter={[8, 8]}>
            <Col xs={24}>
              {" "}
              <h1 style={{ fontSize: "30px" }}>#Key Features</h1>
            </Col>
            <Col xs={12}>Brand</Col>
            <Col xs={12}>{product?.keyFeatures?.Brand}</Col>
            <Col xs={12}>Model</Col>
            <Col xs={12}>{product?.keyFeatures?.Model}</Col>
            <Col xs={12}>Specification</Col>
            <Col xs={12}>{product?.keyFeatures?.Specification}</Col>
            <Col xs={12}>Port</Col>
            <Col xs={12}>{product?.keyFeatures?.Port}</Col>
            <Col xs={12}>Type</Col>
            <Col xs={12}>{product?.keyFeatures?.Type}</Col>
            <Col xs={12}>Resolution</Col>
            <Col xs={12}>{product?.keyFeatures?.Resolution}</Col>
            <Col xs={12}>Voltage</Col>
            <Col xs={12}>{product?.keyFeatures?.Voltage}</Col>
          </Row>
        </Col>
        <Col xs={12}>
          <h1 style={{ fontSize: "30px" }}>#Reviews</h1>

          <List
            itemLayout="horizontal"
            dataSource={product?.reviews}
            renderItem={(item, index) => (
              <List.Item
                key={item.title}
                actions={[
                  <Space key="list-vertical-like-o">
                    {React.createElement(StarOutlined)}
                    {item.rating}
                  </Space>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                    />
                  }
                  title={<a href="https://ant.design">{item.user}</a>}
                  description={item.comment}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default Product;
Product.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <BreadcrumbLayout route={"pc-builder"}>{page}</BreadcrumbLayout>
    </RootLayout>
  );
};
