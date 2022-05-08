// ui component
import Button from '../../../component/ui/Button';

// state
import { useSelectedPostCtx } from '../../../state/client/context/SelectedPost.context';

import { lg } from '../../../dbg/dbg';
import { useCommentsCtx } from '../../../state/client/context/Comments.context';
import { usePostsQuery } from '../../../state/network/usePostsQuery';

import BlogItemComments from './BlogItemComments';

const BlogItemDetail = () => {
  const { selectedPost } = useSelectedPostCtx();
  if (!selectedPost) {
    return null;
  }

  const { onClick_updateTitle, onClick_deletePost } = usePostsQuery();
  const { comments } = useCommentsCtx();

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

export default BlogItemDetail;

// eslint-disable-next-line no-unused-vars
function prettyPrintSelectedPost(post) {
  const { title, userId, body } = post;

  lg('title: ', title);
  lg('userId: ', userId);
  lg('body: ', body);
}
