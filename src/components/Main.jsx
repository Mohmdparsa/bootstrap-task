import Footer from "./Footer";

import MiddleBox from "./MiddleBox";
import MyNavbar from "./MyNavbar";
import ProfileCards from "./ProfileCard";

const Main = () => {
  return (
    <>
      <MyNavbar />

      <div className="container py-5">
        <div className="row justify-content-center">
          <MiddleBox />
        </div>
      </div>
      <ProfileCards />
      <Footer />
    </>
  );
};

export default Main;
