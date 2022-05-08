//#region imports
// sys
import PropTypes from 'prop-types';

// ui
import Footer from '../footer/Footer';
import Separator from '../../component/ui/Separator';
//#endregion imports

const Layout = ({ children }) => (
  <>
    <div>{children}</div>
    <Footer />
    <Separator additionalStyle='my-3' />
  </>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
