import * as Network from './Posts.network';
import { useQuery } from 'react-query';

export const usePostsQuery = () => {
  const { data, isError, error, isLoading } = useQuery(
    'posts',
    Network.fetchPosts
  );

  return {
    posts: data,
    isError,
    error,
    isLoading
  };
};
