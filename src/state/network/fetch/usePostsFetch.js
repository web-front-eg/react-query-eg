import * as Network from '../../../web-api/posts.webapi';
import { useQuery } from 'react-query';

export const usePostsFetch = pagePos => {
  const safePagePos = Math.max(1, Math.min(10, pagePos));
  const { data, isError, error, isLoading } = useQuery(
    ['posts', safePagePos],
    () => Network.fetchPosts(pagePos),
    {
      keepPreviousData: true
    }
  );

  return {
    posts: data,
    isError,
    error,
    isLoading
  };
};
