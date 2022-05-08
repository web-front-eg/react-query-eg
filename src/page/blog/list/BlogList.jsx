//#region Imports

// state
import { useSelectedPostCtx } from '../../../state/client/context/SelectedPost.context';
import { usePostsQuery } from '../../../state/network/usePostsQuery';

// component
import StdLoading from '../../../component/ui/StdLoading';
import StdError from '../../../component/ui/StdError';
import BlogItem from '../item/BlogItem';

//#endregion Imports

const BlogList = () => {
  const { setSelectedPost } = useSelectedPostCtx();
  const { posts, isLoading, isError, error } = usePostsQuery();

  if (isLoading) return <StdLoading />;
  if (isError) return <StdError error={error} />;

  const blogItemsJSX = posts?.map(post => <BlogItem key={post.id} data={post} onClick={() => setSelectedPost(post)} />);

  return (
    <div className='w-screen py-4 pl-6'>
      <ul>{blogItemsJSX}</ul>
    </div>
  );
};

export default BlogList;