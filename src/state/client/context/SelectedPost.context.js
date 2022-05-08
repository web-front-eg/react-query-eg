import constate from 'constate';
import { useState } from 'react';

export const [SelectPostContextProvider, useSelectedPostCtx] = constate(() => {
  const [selectedPost, setSelectedPost] = useState(null);

  return {
    selectedPost,
    setSelectedPost
  };
});
