import PropTypes from 'prop-types';

// ui component
import Button from '../../../component/ui/Button';

import { lg } from '../../../dbg/dbg';

import BlogItemComments from './BlogItemComments';
import { useCommentsFetch } from '../../../state/network/fetch/useCommentsFetch';
import StdError from '../../../component/ui/StdError';
import StdLoading from '../../../component/ui/StdLoading';

const BlogItemDetail = ({
  selectedPost,
  updatePostTitleMutate,
  deletePostMutate
}) => {
  const { comments, isLoading, isError, error } = useCommentsFetch(selectedPost?.id);

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
      <div>
        <div className='mb-2'>
          <Button
            text='Delete'
            additionalStyle='mr-3'
            onClick={() => deletePostMutate.mutate(selectedPost?.id)}
          />
          <div className='mt-2'>
            {deletePostMutate.isError && (
              <p className='text-red-500'>Error from Delete!</p>
            )}
            {deletePostMutate.isLoading && (
              <p className='text-purple-500'>Loading for Deletion!</p>
            )}
            {deletePostMutate.isSuccess && (
              <p className='text-green-500'>Deleting Post was successful!</p>
            )}
          </div>
        </div>
        <div className='flex flex-row'>
          <Button
            text='Update Title'
            onClick={() =>
              updatePostTitleMutate.mutate(selectedPost?.id, 'updated name !!!!')
            }
          />
          <div className='mt-2'>
            {updatePostTitleMutate.isError && (
              <p className='text-red-500'>Error from Delete!</p>
            )}
            {updatePostTitleMutate.isLoading && (
              <p className='text-purple-500'>Loading for Deletion!</p>
            )}
            {updatePostTitleMutate.isSuccess && (
              <p className='text-green-500'>Deleting Post was successful!</p>
            )}
          </div>
        </div>
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
