import { useMutation } from 'react-query';
import * as Network from '../../../web-api/posts.webapi';

export const useUpdatePostTitleMutate = () => {
  const mutate = useMutation((postId, title) => Network.updatePost(postId, title));
  return mutate;
};
