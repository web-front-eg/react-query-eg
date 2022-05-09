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

import { useState, useCallback, useMemo } from 'react';
import constate from 'constate';

const MIN_PAGE_POS = 1;
const MAX_PAGE_POS = 10;

export const [
  PagePositionContextProvider,
  usePagePositionCtx,
  usePagePositionStatus
] = constate(
  () => {
    const [pagePos, setPagePos] = useState(1);

    const reachedAtMaxPagePos = useMemo(() => pagePos >= MAX_PAGE_POS, [pagePos]);
    const reachedAtMinPagePos = useMemo(() => pagePos <= MIN_PAGE_POS, [pagePos]);

    const onClickNextPage = useCallback(() => setPagePos(x => x + 1), []);
    const onClickPreviousPage = useCallback(() => setPagePos(x => x - 1), []);

    return {
      reachedAtMaxPagePos,
      reachedAtMinPagePos,
      pagePos,
      setPagePos,
      onClickNextPage,
      onClickPreviousPage
    };
  },
  from => ({
    pagePos: from.pagePos,
    setPagePos: from.setPagePos,
    onClickNextPage: from.onClickNextPage,
    onClickPreviousPage: from.onClickPreviousPage
  }),
  from => ({
    reachedAtMaxPagePos: from.reachedAtMaxPagePos,
    reachedAtMinPagePos: from.reachedAtMinPagePos
  })
);
