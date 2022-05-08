import constate from 'constate';
import { useState } from 'react';

const from = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return {
    selectedPost,
    setSelectedPost
  };
};

export const [
  SelectPostContextProvider,
  useGetSelectedPost,
  useSetSelectedPost
] = constate(
  from,
  from => from.selectedPost,
  from => from.setSelectedPost
);
