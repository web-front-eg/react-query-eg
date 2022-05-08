// import { createContext, useState } from 'react';

// const defaultValue = {
//   pagePos: 0,
//   setPagePos: () => console.log('setPagePos() called'),
//   onClickNextPage: () => console.log('onClickNextPage() called'),
//   onClickPreviousPage: () => console.log('onClickPreviousPage() called')
// };

// export const PagePositionContext = createContext(defaultValue);

// const PagePositionContextWrapper = ({ children }) => {
//   // states
//   const [pagePos, setPagePos] = useState(0);
//   const onClickNextPage = () => setPagePos(prv => prv + 1);
//   const onClickPreviousPage = () => setPagePos(prv => prv - 1);

//   // wrapper
//   return (
//     <PagePositionContext.Provider
//       value={{ pagePos, setPagePos, onClickNextPage, onClickPreviousPage }}
//     >
//       {children}
//     </PagePositionContext.Provider>
//   );
// };

// export default PagePositionContextWrapper;

import { useState } from 'react';
import constate from 'constate';

const from = () => {
  const [pagePos, setPagePos] = useState(0);
  const onClickNextPage = () => setPagePos(prv => prv + 1);
  const onClickPreviousPage = () => setPagePos(prv => prv - 1);

  return {
    pagePos,
    setPagePos,
    onClickNextPage,
    onClickPreviousPage
  };
};

export const [
  PagePositionContextProvider,
  useGetPagePos,
  useSetPagePos,
  useOnClickNextPage,
  useOnClickPreviousPage
] = constate(
  from,
  from => from.pagePos,
  from => from.setPagePos,
  from => from.onClickNextPage,
  from => from.onClickPreviousPage
);
