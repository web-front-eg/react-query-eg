import PropTypes from 'prop-types';
import BlogItemCommentItem from './BlogItemCommentItem';

const BlogItemComments = ({ comments }) => (
  <ul className='mt-10'>
    {comments &&
      comments.map(comment => (
        <BlogItemCommentItem key={comment.id} comment={comment} />
      ))}
  </ul>
);

BlogItemComments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  )
};

export default BlogItemComments;
