import PropTypes from 'prop-types';

// ui component
import Button from '../../../component/ui/Button';

import { lg } from '../../../dbg/dbg';

import BlogItemComments from './BlogItemComments';
import { useCommentsQuery } from '../../../state/network/useCommentsQuery';
import StdError from '../../../component/ui/StdError';
import StdLoading from '../../../component/ui/StdLoading';

const BlogItemDetail = ({
  selectedPost
  // onClick_updateTitle,
  // onClick_deletePost
}) => {
  const { comments, isLoading, isError, error } = useCommentsQuery(selectedPost?.id);

  if (!selectedPost) {
    return null;
  }

  if (isLoading) return <StdLoading />;
  if (isError) return <StdError error={error} />;

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
        <Button text='Delete' additionalStyle='mr-3' />
        <Button text='Update Title' />
      </div>

      {/* comments */}
      <BlogItemComments comments={comments} />
    </div>
  );
  // onClick = { onClick_deletePost }
  //onClick={onClick_updateTitle}
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
