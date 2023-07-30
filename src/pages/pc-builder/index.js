import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";
import RootLayout from "@/components/Layouts/RootLayout";
import BuildPcCategory from "@/components/UI/BuildPcCategory";
import { useGetCategoriesQuery } from "@/redux/api/api";
import { completePcBuilder } from "@/redux/features/pcBuilder/pcBuilderSlice";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PcBuilder = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { totalAmount, categoriesData } = useSelector(
    (state) => state.pcBuilder
  );

  const { data } = useGetCategoriesQuery();
  const categories = data?.slice(0, 6);
  function hasNonNullValue(obj) {
    for (const key in obj) {
      if (obj[key] === null) {
        return false;
      }
    }
    return true;
  }

  // Checking if any value is not null
  const hasNonNullValueInObject = hasNonNullValue(categoriesData);
  const dispatch = useDispatch();
  const handleCompleteBuild = () => {
    messageApi.info("Successfully build pc");
    dispatch(completePcBuilder());
  };

  return (
    <>
      {contextHolder}
      <div
        style={{
          margin: "20px 55px",
          padding: "10px 0",
          backgroundColor: "white",
        }}
      >
        <div className="brand-logo">
          <h1
            style={{
              margin: "10px 10px",
              fontSize: "30px",
              borderBottom: "1px solid gray",
            }}
          >
            Rose Computer
          </h1>
        </div>
        <Row gutter={[8, 8]}>
          <Col md={12}>
            <p
              style={{
                margin: "15px 10px",
              }}
            >
              PC Builder - Build your own PC - RoseCom
            </p>
          </Col>
          <Col
            style={{
              paddingRight: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
            md={12}
          >
            <div
              justify="center"
              align="middle"
              style={{
                backgroundColor: "orange",
                width: "100px",
                borderRadius: "3px",
                display: "inline-block",
              }}
            >
              <p>Total amount</p>
              <p>${totalAmount}</p>
            </div>
            <Button
              type="primary"
              onClick={handleCompleteBuild}
              disabled={!hasNonNullValueInObject}
            >
              Complete Build
            </Button>
          </Col>
        </Row>
        <p
          style={{
            backgroundColor: "gray",
            margin: "10px 10px",
            padding: "3px",
            color: "white",
          }}
        >
          CORE COMPONENTS
        </p>
        {data &&
          categories.map((category) => (
            <BuildPcCategory key={category.path} category={category} />
          ))}
      </div>
    </>
  );
};

export default PcBuilder;
PcBuilder.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <BreadcrumbLayout route={"pc-builder"}>{page}</BreadcrumbLayout>
    </RootLayout>
  );
};
