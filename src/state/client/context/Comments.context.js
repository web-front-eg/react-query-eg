import constate from 'constate';
import { useState } from 'react';

export const [CommentsContextProvider, useCommentsCtx] = constate(() => {
  const [comments, setComments] = useState([]);

  return {
    comments,
    setComments
  };
});
