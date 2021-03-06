import Layout from "../components/UI/Layout";
import ContentParagraph from "../components/ContainContents/Contents/ContentParagraph";
import PageLink from "../components/ContainContents/Links/PageLink";
import useGetItems from "../hooks/useGetItems";
import { Fragment, useEffect } from "react";

const MainPage = () => {
  const { loading, error, data, fetchData } = useGetItems();

  let content;

  useEffect(() => {
    fetchData(
      "https://codingwithme-f5889-default-rtdb.firebaseio.com/main/main.json"
    );
  }, []);

  if (loading) {
    content = (
      <p style={{ fontSize: "40px", textAlign: "center" }}>Loading...</p>
    );
  }
  if (error) {
    content = <p style={{ fontSize: "40px", textAlign: "center" }}>Error</p>;
  }
  if (data) {
    content = (
      <Fragment>
        <ContentParagraph data={data?.paragraph} />
        <PageLink data={data?.links} />
      </Fragment>
    );
  }

  return <Layout>{content}</Layout>;
};
export default MainPage;
