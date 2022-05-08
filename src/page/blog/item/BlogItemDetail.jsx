import PropTypes from 'prop-types';

// ui component
import Button from '../../../component/ui/Button';

import { lg } from '../../../dbg/dbg';

import BlogItemComments from './BlogItemComments';

const BlogItemDetail = ({
  selectedPost,
  onClick_updateTitle,
  onClick_deletePost,
  comments
}) => {
  if (!selectedPost) {
    return null;
  }

  const { title, body } = selectedPost;
  // prettyPrintSelectedPost(selectedPost);

  return (
    <div className='flex flex-col'>
      {/* title */}
      <h3 className='text-blue-400 text-xl'>{title}</h3>

      {/* body */}
      <p className='text-lg mb-12'>{body}</p>

      {/* delete, update  */}
      <div className='flex flex-row'>
        <Button text='Delete' additionalStyle='mr-3' onClick={onClick_deletePost} />
        <Button text='Update Title' onClick={onClick_updateTitle} />
      </div>

      {/* comments */}
      <BlogItemComments comments={comments} />
    </div>
  );
};

BlogItemDetail.propTypes = {
  selectedPost: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }),

  onClick_updateTitle: PropTypes.func,
  onClick_deletePost: PropTypes.func,

  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  )
};

export default BlogItemDetail;

// eslint-disable-next-line no-unused-vars
function prettyPrintSelectedPost(post) {
  const { title, userId, body } = post;

  lg('title: ', title);
  lg('userId: ', userId);
  lg('body: ', body);
}
