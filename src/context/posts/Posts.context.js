import constate from 'constate';

const from = () => {
  const onClick_deletePost = () => {};
  const onClick_updateTitle = () => {};

  return {
    onClick_deletePost,
    onClick_updateTitle
  };
};

export const [
  PostsContextProvider,
  useOnClickDeletePost,
  useOnClickUpdateTitle
] = constate(
  from,
  from => from.onClick_deletePost,
  from => from.onClick_updateTitle
);
