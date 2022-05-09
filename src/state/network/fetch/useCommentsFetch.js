import * as Network from '../../../web-api/posts.webapi';
import { useQuery } from 'react-query';

export const useCommentsFetch = commentsId => {
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
