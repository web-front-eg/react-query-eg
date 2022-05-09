import { useMutation } from 'react-query';
import * as Network from '../../../web-api/posts.webapi';

export const useDeletePostMutate = () => {
  const mutate = useMutation(postId => Network.deletePost(postId));
  return mutate;
};
