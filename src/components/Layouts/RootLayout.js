import {
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
  LaptopOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import DropdownMenu from "../UI/DropdownMenu";
import { useGetCategoriesQuery } from "@/redux/api/api";
import { useSession, signIn, signOut } from "next-auth/react";

const RootLayout = ({ children }) => {
  const { data, isLoading, isError, error } = useGetCategoriesQuery();
  const { data: session } = useSession();
  return (
    <Layout style={{ backgroundColor: "#d8d4d4" }}>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              Rose Computer
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          <DropdownMenu data={data} />
          <Link href="/pc-builder" style={{margin:"0 10px"}}>
          <Button>Build PC</Button>
          </Link>
          {session ? (
              <Button type="primary" onClick={()=>signOut()}>
                LogOut
              </Button>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 0",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          Rose computer
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/rosecomputer">
            <FacebookFilled />
          </Link>
          <Link href="https://twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://rosecomputer.com">
            <GoogleSquareFilled />
          </Link>
          <Link href="https://linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        Rose computer ©2023
      </Footer>
    </Layout>
  );
};
export default RootLayout;
