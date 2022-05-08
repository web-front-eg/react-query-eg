import constate from 'constate';
import * as Network from './Posts.network';
import useQuery from 'react-query';

const from = () => {
  const { data, isError, error, isLoading } = useQuery(
    'posts',
    Network.fetchPosts
  );

  const onClick_deletePost = () => {};
  const onClick_updateTitle = () => {};

  return {
    data,
    isError,
    error,
    isLoading,
    onClick_deletePost,
    onClick_updateTitle
  };
};

export const [
  PostsContextProvider,
  usePosts,
  useOnClickDeletePost,
  useOnClickUpdateTitle
] = constate(
  from,
  from => ({
    posts: from.posts,
    isError: from.isError,
    error: from.error,
    isLoading: from.isLoading
  }),
  from => from.onClick_deletePost,
  from => from.onClick_updateTitle
);
