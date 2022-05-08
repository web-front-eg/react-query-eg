import * as Network from './Posts.network';
import { useQuery } from 'react-query';
import { useCallback } from 'react';

export const usePostsQuery = () => {
  const { data, isError, error, isLoading } = useQuery('posts', Network.fetchPosts);

  const onClick_updateTitle = useCallback(() => {}, []);
  const onClick_deletePost = useCallback(() => {}, []);

  return {
    posts: data,
    isError,
    error,
    isLoading,
    onClick_deletePost,
    onClick_updateTitle
  };
};
