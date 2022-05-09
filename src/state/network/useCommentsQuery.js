import * as Network from './Posts.network';
import { useQuery } from 'react-query';

export const useCommentsQuery = commentsId => {
  const { data, isError, error, isLoading } = useQuery(
    ['comments', commentsId],
    () => Network.fetchComments(commentsId),
    {
      enable: !!commentsId
    }
  );

  return {
    comments: data,
    isError,
    error,
    isLoading
  };
};
