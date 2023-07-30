import { useGetProductByIdQuery } from "@/redux/api/api";
import { Breadcrumb, Layout } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';


const { Content } = Layout;

const BreadcrumbLayout = ({ children, route }) => {
  const { query } = useRouter();
  const { category, productId } = query;

  const { data } = useGetProductByIdQuery(productId);
  return (
    <Layout style={{}}>
      <Content style={{ padding: "0 0" ,backgroundColor:"#d8d4d4"}}>
        <Breadcrumb style={{ margin: "0 0",padding:"10px 55px",borderBottom:'1px solid gray', backgroundColor: "white", }}>
          <Breadcrumb.Item>
            <Link href="/"><HomeOutlined /></Link>
          </Breadcrumb.Item>
          
          {route && <Breadcrumb.Item>{route}</Breadcrumb.Item>}
          {category && <Breadcrumb.Item>{category}</Breadcrumb.Item>}
          {productId && data && (
            <Breadcrumb.Item>{data[0]?.productName}</Breadcrumb.Item>
          )}
        </Breadcrumb>
        <Content style={{padding:"0 55px" }}>{children}</Content>
      </Content>
    </Layout>
  );
};

export default BreadcrumbLayout;
