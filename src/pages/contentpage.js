import Layout from "../components/UI/Layout";
import ContentParagraph from "../components/ContainContents/Contents/ContentParagraph";
import PageLink from "../components/ContainContents/Links/PageLink";
import useGetItems from "../hooks/useGetItems";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ContentPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetched, setIsFetched] = useState(true);
  const params = useParams();

  const data = useGetItems(`${params.sortId}`);
  useEffect(() => {
    if (data != null) {
      setIsLoading((prev) => {
        prev = !prev;
      });
    } else {
      setIsFetched((prev) => {
        prev = !prev;
      });
    }
  }, []);

  return (
    <Layout>
      {!isFetched && (
        <Fragment>
          <p style={{ fontSize: "40px" }}>Fail to Fetch Data.</p>
          <p style={{ fontSize: "40px" }}>Please Reload.</p>
        </Fragment>
      )}
      {isFetched && (
        <Fragment>
          {isLoading && <p style={{ fontSize: "40px" }}>Loading ...</p>}
          {!isLoading && (
            <Fragment>
              <ContentParagraph />
              <PageLink />
            </Fragment>
          )}
        </Fragment>
      )}
    </Layout>
  );
};
export default ContentPage;
