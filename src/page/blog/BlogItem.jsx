import PropTypes from 'prop-types';

const BlogItem = ({ data: { title }, onClick }) => (
  <li
    onClick={onClick}
    className='py-2 text-lg cursor-pointer hover:text-gray-500 active:text-gray-700'
  >
    {title}
  </li>
);

BlogItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func
};

export default BlogItem;
