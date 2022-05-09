import * as Network from '../../page/web-api/posts.webapi';
import { useQuery } from 'react-query';
import { useCallback } from 'react';

export const usePostsQuery = pagePos => {
  const safePagePos = Math.max(1, Math.min(10, pagePos));
  const { data, isError, error, isLoading } = useQuery(['posts', safePagePos], () =>
    Network.fetchPosts(pagePos)
  );

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
