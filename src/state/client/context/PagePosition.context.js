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

import { useState, useCallback } from 'react';
import constate from 'constate';

export const [PagePositionContextProvider, usePagePositionCtx] = constate(() => {
  const [pagePos, setPagePos] = useState(0);
  const onClickNextPage = useCallback(() => setPagePos(x => x + 1), []);
  const onClickPreviousPage = useCallback(() => setPagePos(x => x - 1), []);

  return {
    pagePos,
    setPagePos,
    onClickNextPage,
    onClickPreviousPage
  };
});
