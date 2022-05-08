import BlogItem from './BlogItem';
import { useSetSelectedPost } from '../../context/SelectedPost.context';
import { usePosts } from '../../context/posts/Posts.context';

import StdLoading from '../../component/ui/StdLoading';
import StdError from '../../component/ui/StdError';

const BlogList = () => {
  const setSelectedPost = useSetSelectedPost();

  const { posts, isLoading, isError, error } = usePosts();

  if (isLoading) return <StdLoading />;
  if (isError) return <StdError error={error} />;

  const blogItemsJSX =
    posts.length > 0 &&
    posts.map(post => (
      <BlogItem
        key={post.id}
        data={post}
        onClick={() => setSelectedPost(post)}
      />
    ));

  return (
    <div className='w-screen py-4 pl-6'>
      <ul>{blogItemsJSX}</ul>
    </div>
  );
};

export default BlogList;
