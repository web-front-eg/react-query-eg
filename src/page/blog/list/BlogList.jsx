//#region Imports

// state
import { useSelectedPostCtx } from '../../../state/client/context/SelectedPost.context';
import { usePostsQuery } from '../../../state/network/usePostsQuery';

// component
import StdLoading from '../../../component/ui/StdLoading';
import StdError from '../../../component/ui/StdError';
import BlogItem from '../item/BlogItem';
import { usePagePositionCtx } from '../../../state/client/context/PagePosition.context';

//#endregion Imports

const BlogList = () => {
  const { setSelectedPost } = useSelectedPostCtx();
  const { pagePos } = usePagePositionCtx();
  const { posts, isLoading, isError, error } = usePostsQuery(pagePos);

  if (isLoading) return <StdLoading />;
  if (isError) return <StdError error={error} />;

  return (
    <div className='w-screen py-4 pl-6'>
      <ul>
        {posts &&
          posts.map(post => (
            <BlogItem
              key={post.id}
              data={post}
              onClick={() => setSelectedPost(post)}
            />
          ))}
      </ul>
    </div>
  );
};

export default BlogList;
