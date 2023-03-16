import Footer from '../Layout/Footer/Footer';
import Navbar from '../Layout/Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
