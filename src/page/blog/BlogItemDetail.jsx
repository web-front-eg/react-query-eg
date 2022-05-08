import PropTypes from 'prop-types';
import Button from '../../component/ui/Button';

const BlogItemDetail = ({ selectedPost: { title, body } }) => {
  return (
    <>
      <h3 className='text-blue-400'>{title}</h3>
      <Button onClick={}/>
    </>
  );
};

BlogItemDetail.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired
};

export default BlogItemDetail;
