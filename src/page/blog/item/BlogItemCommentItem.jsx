import PropTypes from 'prop-types';

const BlogItemCommentItem = ({ comment: { email, body } }) => (
  <li className='ml-5 mb-4'>
    <p className='text-lg font-bold italic text-pink-500'>{email}</p>
    <p>{body}</p>
  </li>
);

BlogItemCommentItem.propTypes = {
  comment: PropTypes.shape({
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default BlogItemCommentItem;
