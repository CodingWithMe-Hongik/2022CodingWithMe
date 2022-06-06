import Layout from "../components/UI/Layout";
import ContentParagraph from "../components/ContainContents/Contents/ContentParagraph";
import PageLink from "../components/ContainContents/Links/PageLink";
import HelloWorldIMG from "../img/HelloWorld.png";

const MAIN_DUMMY_DATA = {
  paragraph: [
    {
      title: "",
      url: HelloWorldIMG,
      contents: [
        "코딩윗미에 방문해주셔서 감사합니다.",
        '코딩윗미는 "전공자, 비전공자에 관계없이" 코딩에 관심이 있는 모두를 위해',
        "코딩과 관련된 사이트들을 모아 소개, 추천해드리는 사이트입니다.",
      ],
    },
    {
      title: "코딩공부 더 간편해질 수 없을까?",
      url: "",
      contents: [
        "우리는 정보화 시대에 걸맞게 수많은 코딩 강의들과 사이트들에 노출되어있습니다.",
        "이러한 사이트들이 분야에 따라 나눠져 제공된다면",
        "코딩에 관심있는 사람들이 강의를 선택하고 수강하기에 더 편리한 환경이 되지않을까?",
        "좋은 사이트들을 공유하면 더 많은 사람들이 혜택을 볼 수 있지않을까? 라는 의문에서",
        "이 사이트가 나오게됐습니다.",
      ],
    },
    {
      title: "사이트 가이드",
      url: "",
      contents: [
        "코딩윗미는 분야에 따라 코딩사이트들을 안내합니다.",
        '분야들로는 "프로그래밍 언어, 개발, 보안/네트워크, db, 인공지능/머신러닝/딥러닝,',
        '수학(코딩에 필요한), 기타(커뮤니티 등)"를 제공하고 있으며,',
        "각 분야별로 사이트들이 소개되어있고",
        " 그 중 본인에게 맞는 사이트를 선택, 수강하시면 됩니다.",
        "표기된 사이트들에 대해 일절 광고나 협찬을 받지 않았습니다.",
      ],
    },
  ],
  links: [
    {
      url: "/programmingLan",
      title: "프로그래밍 언어",
      img: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg",
    },
    {
      url: "/development",
      title: "개발",
      img: "https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845_1280.jpg",
    },
    {
      url: "/security",
      title: "보안",
      img: "https://cdn.pixabay.com/photo/2018/05/04/15/49/cyber-security-3374252_1280.jpg",
    },
    {
      url: "/db",
      title: "DB",
      img: "https://cdn.pixabay.com/photo/2017/02/27/12/17/big-data-2103091__340.png",
    },
    {
      url: "/AI",
      title: "인공지능/딥러닝",
      img: "https://w.namu.la/s/c9b951140de72f66425f2f5523cd2a4aa0a796a5c67e4c8363782e249d58f9d4fbbd977b1c6fd8d0fcecf5ee70a146619ee15c502a074c547f931384a97d69e5fd93b443273cdbcb802a086458dced86cb9703e93502633e99f477094bc57aa8",
    },
    {
      url: "/math",
      title: "수학",
      img: "https://cdn.pixabay.com/photo/2016/06/13/07/59/pi-1453836__480.jpg",
    },
    {
      url: "/etc",
      title: "기타",
      img: "https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431__340.jpg",
    },
  ],
};
const MainPage = () => {
  return (
    <Layout>
      <ContentParagraph data={MAIN_DUMMY_DATA.paragraph} />
      <PageLink data={MAIN_DUMMY_DATA.links} />
    </Layout>
  );
};
export default MainPage;
