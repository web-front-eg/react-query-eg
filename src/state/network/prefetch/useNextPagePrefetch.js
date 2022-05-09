import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import * as Network from '../../../web-api/posts.webapi';
import { usePagePositionStatus } from '../../client/context/PagePosition.context';

const useNextPagePrefetch = pagePos => {
  const queryClient = useQueryClient();
  const { isMaxPagePos } = usePagePositionStatus();

  useEffect(() => {
    if (isMaxPagePos) {
      return;
    }

    const nextPage = pagePos + 1;
    queryClient.prefetchQuery(['posts', nextPage], () =>
      Network.fetchPosts(nextPage)
    );
  }, [isMaxPagePos, pagePos, queryClient]);
};

useNextPagePrefetch.propTypes = {
  pagePos: PropTypes.number.isRequired
};

export default useNextPagePrefetch;
