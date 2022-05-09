import * as Network from '../../page/web-api/posts.webapi';
import { useQuery } from 'react-query';

export const useCommentsQuery = commentsId => {
  const { data, isError, error, isLoading } = useQuery(
    ['comments', commentsId],
    () => Network.fetchComments(commentsId)
  );

  return {
    comments: data,
    isError,
    error,
    isLoading
  };
};
