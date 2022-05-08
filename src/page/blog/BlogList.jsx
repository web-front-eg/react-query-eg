import BlogItem from './BlogItem';
import { useSelectedPostCtx } from '../../context/SelectedPost.context';
import { usePostsQuery } from '../../WebAPI/usePostsQuery';

import StdLoading from '../../component/ui/StdLoading';
import StdError from '../../component/ui/StdError';

const BlogList = () => {
  const { setSelectedPost } = useSelectedPostCtx();
  const { posts, isLoading, isError, error } = usePostsQuery();

  if (isLoading) return <StdLoading />;
  if (isError) return <StdError error={error} />;

  const blogItemsJSX =
    posts &&
    posts.length > 0 &&
    posts.map(post => (
      <BlogItem
        key={post.id}
        data={post}
        onClick={() => {
          console.log('blog item clicked: ', post);
          setSelectedPost(post);
        }}
      />
    ));

  return (
    <div className='w-screen py-4 pl-6'>
      <ul>{blogItemsJSX}</ul>
    </div>
  );
};

export default BlogList;
