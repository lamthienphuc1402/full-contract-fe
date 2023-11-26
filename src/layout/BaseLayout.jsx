import Footer from "../components/Footer";
import Header from "../components/Header";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
