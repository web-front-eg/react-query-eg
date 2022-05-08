import Footer from '../footer/Footer';
import Separator from '../../component/ui/Separator';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <Footer />
      <Separator additionalStyle='my-3' />
    </div>
  );
};

export default Layout;
