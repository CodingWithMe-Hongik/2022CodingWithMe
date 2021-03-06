import Layout from "../components/UI/Layout";
import ContentParagraph from "../components/ContainContents/Contents/ContentParagraph";
import PageLink from "../components/ContainContents/Links/PageLink";
import useGetItems from "../hooks/useGetItems";
import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";

const ContentPage = () => {
  const params = useParams();

  const { loading, error, data, fetchData } = useGetItems();

  useEffect(() => {
    fetchData(
      `https://codingwithme-f5889-default-rtdb.firebaseio.com/main/${params.sortId}.json`
    );
  }, [params]);

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
export default ContentPage;
