
import { Card, Col, Row, Space } from "antd";

import Image from "next/image";
import Link from "next/link";

const FeturedCategory = ({ categories }) => {
  const { Meta } = Card;

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
        #Featured Category
      </h1>
      <Row gutter={[24, 24]}>
        {categories?.map((category) => (
          <Col
            sm={24}
            xs={24}
            md={8}
            key={category._id}
            className="gutter-row "
            span={8}
          >
            <Link href={`category/${category?.path}`}>
              <Card hoverable justify="center" align="middle" style={{ height: '200px' }}>
              <Image
                    src={category?.image}
                    width={100}
                    height={100}
                    responsive
                    alt="category image"
                  />
                <Meta title={category?.label} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FeturedCategory;
