//#region Imports

// state
import { useSelectedPostCtx } from '../../../state/client/context/SelectedPost.context';
import { usePostsFetch } from '../../../state/network/fetch/usePostsFetch';

// component
import StdLoading from '../../../component/ui/StdLoading';
import StdError from '../../../component/ui/StdError';
import BlogItem from '../item/BlogItem';
import { usePagePositionCtx } from '../../../state/client/context/PagePosition.context';
import { useNextPagePrefetch } from '../../../state/network/prefetch/useNextPagePrefetch';

//#endregion Imports

const BlogList = () => {
  const { setSelectedPost } = useSelectedPostCtx();
  const { pagePos } = usePagePositionCtx();
  const { posts, isLoading, isError, error } = usePostsFetch(pagePos);

  useNextPagePrefetch(pagePos);

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
