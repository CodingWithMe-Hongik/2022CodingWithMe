import Layout from "../components/UI/Layout";
import ContentParagraph from "../components/ContainContents/Contents/ContentParagraph";
import PageLink from "../components/ContainContents/Links/PageLink";
import useGetItems from "../hooks/useGetItems";
import { Fragment } from "react";

const MainPage = () => {
  const { loading, error, data } = useGetItems(
    "https://codingwith-3cbaf-default-rtdb.firebaseio.com/main/main.json"
  );

  let content;

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
