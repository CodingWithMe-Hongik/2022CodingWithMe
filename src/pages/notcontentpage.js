import Layout from "../components/UI/Layout";
import RowLayout from "../components/UI/RowLayout";
import SideBar from "../components/NotContents/SideBar/SideBar";
import LinkContainer from "../components/NotContents/Links/LinkContainer";

const NotContentPage = () => {
  return (
    <Layout>
      <RowLayout>
        <SideBar />
        <LinkContainer />
      </RowLayout>
    </Layout>
  );
};
export default NotContentPage;
