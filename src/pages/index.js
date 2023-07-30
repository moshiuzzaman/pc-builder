import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";

import { apiSlice, useGetCategoriesQuery } from "@/redux/api/api";
import FeturedProducts from "@/components/UI/FeturedProducts";
import FeturedCategory from "@/components/UI/FeturedCategory";
import Banner from "@/components/UI/Banner";

const HomePage = ({ products ,categories}) => {
  return (
    <div style={{ padding: "0 55px" }}>
      <Head>
        <title>Rose Computers</title>
        <meta name="description" content="This is Computer shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <FeturedProducts products={products} />
      <FeturedCategory categories={categories} />
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout t>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const categoryRes = await fetch(
    "https://assignment6server.vercel.app/categories"
  );
  const categories = await categoryRes.json();
  const random = Math.floor(Math.random() * 700) + 1;
  const productRes = await fetch(
    `https://assignment6server.vercel.app/products?_start=${random}&_end=${
      random + 6
    }`
  );
  const products = await productRes.json();

  return {
    props: {
      products: products,
      categories: categories,
    },
    revalidate: 10,
  };
};
