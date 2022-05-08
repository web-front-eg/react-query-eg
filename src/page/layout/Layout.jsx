import Footer from '../footer/Footer';
import Separator from '../../component/ui/Separator';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <Footer />
      <Separator additionalStyle='my-3' />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
