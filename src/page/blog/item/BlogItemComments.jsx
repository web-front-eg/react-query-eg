import PropTypes from 'prop-types';

const BlogItemComments = ({ comments }) => {
  if (!comments) {
    return null;
  }

  return (
    <ul>
      {comments.map(comment => {
        const { id, email, body } = comment;
        return (
          <li key={id}>
            {email}: {body}
          </li>
        );
      })}
    </ul>
  );
};

BlogItemComments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  )
};

export default BlogItemComments;
