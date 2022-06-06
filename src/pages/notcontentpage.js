import Layout from "../components/UI/Layout";
import RowLayout from "../components/UI/RowLayout";
import SideBar from "../components/NotContents/SideBar/SideBar";
import LinkContainer from "../components/NotContents/Links/LinkContainer";
import useGetItems from "../hooks/useGetItems";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NotContentPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetched, setIsFetched] = useState(true);
  const params = useParams();

  const data = useGetItems(`${params.contentId}`);
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
      <RowLayout>
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
                <SideBar />
                <LinkContainer />
              </Fragment>
            )}
          </Fragment>
        )}
      </RowLayout>
    </Layout>
  );
};
export default NotContentPage;
