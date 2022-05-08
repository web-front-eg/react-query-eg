import * as Network from './Posts.network';
import { useQuery } from 'react-query';

export const useCommentsQuery = () => {
  const { data, isError, error, isLoading } = useQuery('comments', Network.fetchComments);

  return {
    posts: data,
    isError,
    error,
    isLoading
  };
};
