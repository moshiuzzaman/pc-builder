import { Button, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteFilled } from "@ant-design/icons";
import { removeProductToPcBuilder } from "@/redux/features/pcBuilder/pcBuilderSlice";

const BuildPcCategory = ({ category }) => {
  const { categoriesData } = useSelector((state) => state.pcBuilder);
  const selectedData = categoriesData[category.path];
  const dispatch = useDispatch();

  const handleRemoveProductFromPcBuilder = () => {
    dispatch(removeProductToPcBuilder(category.path));
  };


  return (
    <div
      style={{ margin: "10px 20px", border: "1px solid #eee", padding: "5px" }}
    >
      <Row gutter={[8, 8]}>
        <Col md={2}>
          <Image
            alt="example"
            src={category?.image}
            width={50}
            height={50}
            responsive
            preview={false}
            style={{
              marginRight: "30px",
              border: "1px solid #eee",
              padding: "3px",
            }}
          />
        </Col>
        <Col md={18}>
          <p>{category.label}</p>
          {categoriesData[category.label]}
          {selectedData ? (
            <div style={{ padding: "10px", border: "1px solid #eee" }}>
              <Row gutter={[8, 8]}>
                <Col md={2}>
                  <Image
                    alt="example"
                    src={selectedData?.image}
                    width={40}
                    height={40}
                    responsive
                    preview={false}
                    style={{
                      marginRight: "30px",
                      border: "1px solid #eee",
                      padding: "3px",
                    }}
                  />
                </Col>
                <Col md={18}>
                  <p>{selectedData.productName}</p>
                  <p> price : {selectedData.price}</p>
                </Col>
              </Row>
            </div>
          ) : (
            <div
              style={{ background: "#eee", height: "20px", marginTop: "5px" }}
            ></div>
          )}
        </Col>
        <Col
          md={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selectedData ? (
            <DeleteFilled
              onClick={handleRemoveProductFromPcBuilder}
              style={{ fontSize: "30px", color: "gray" }}
            />
          ) : (
            <Link href={`pc-builder/${category?.path}`}>
              <Button type="primary">Choose</Button>
            </Link>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default BuildPcCategory;
