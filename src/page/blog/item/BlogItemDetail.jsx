import PropTypes from 'prop-types';

// ui component
import Button from '../../../component/ui/Button';

import { lg } from '../../../dbg/dbg';

import BlogItemComments from './BlogItemComments';
import { useCommentsFetch } from '../../../state/network/fetch/useCommentsFetch';
import StdError from '../../../component/ui/StdError';
import StdLoading from '../../../component/ui/StdLoading';
import { MutateHandler } from '../../../state/network/mutate';

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
          <MutateHandler mutator={deletePostMutate} additionalStyle='mt-2' />
        </div>
        <div className='flex flex-row'>
          <Button
            text='Update Title'
            onClick={() =>
              updatePostTitleMutate.mutate(selectedPost?.id, 'updated name !!!!')
            }
          />
          <MutateHandler mutator={updatePostTitleMutate} additionalStyle='mt-2' />
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
