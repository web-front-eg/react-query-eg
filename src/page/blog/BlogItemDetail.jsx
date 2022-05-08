// ui component
import Button from '../../component/ui/Button';

// state
import { useSelectedPostCtx } from '../../context/SelectedPost.context';

const BlogItemDetail = () => {
  const { selectedPost } = useSelectedPostCtx();
  if (!selectedPost) return null;

  const { title, userId, body } = selectedPost;
  console.log('title: ', title);
  console.log('userId: ', userId);
  console.log('body: ', body);

  return (
    <>
      <p>User ID: {userId}</p>
      <h3 className='text-blue-400'>{title}</h3>
      <p>{body}</p>
      <Button />
    </>
  );
};

export default BlogItemDetail;
