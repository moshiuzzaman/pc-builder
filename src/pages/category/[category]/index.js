import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";
import RootLayout from "@/components/Layouts/RootLayout";
import Product from "@/components/UI/Product";
import { useGetProductsbyCategoryQuery } from "@/redux/api/api";
import { Pagination, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Category = ({}) => {
  const [curPage, setCurPage] = useState(1);
  const { query } = useRouter();
  const category = query.category;
  const { data, isLoading, isError } = useGetProductsbyCategoryQuery({
    category,
    _page: curPage,
    limit: 12,
  });
  const { data: allProductsOfThisCategory } = useGetProductsbyCategoryQuery({
    category,
    _page: 1,
    limit: 10000,
  });
  useEffect(() => {
    setCurPage(1)
  }, [allProductsOfThisCategory])
  
  return (
    <>
      {" "}
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
          textTransform: "capitalize",
        }}
      >
        {category} Products
      </h1>
      {isLoading && <h1>loading</h1>}
      {data && (
        <Row gutter={[24, 24]}>
          {data?.map((product) => (
            <Product key={product?._id} product={product} from="category" />
          ))}
        </Row>
      )}
      {allProductsOfThisCategory && (
        <div justify="center" align="middle" style={{ marginTop: "20px" }}>
          <Pagination
            current={curPage}
            onChange={(e) => setCurPage(e)}
            total={allProductsOfThisCategory.length}
            defaultPageSize={20}
            hideOnSinglePage={true}
            showSizeChanger={false}
          />
        </div>
      )}
    </>
  );
};
export default Category;

Category.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <BreadcrumbLayout>{page}</BreadcrumbLayout>
    </RootLayout>
  );
};
