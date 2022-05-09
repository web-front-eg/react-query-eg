import Button from '../../component/ui/Button';
import {
  usePagePositionCtx,
  usePagePositionStatus
} from '../../state/client/context/PagePosition.context';

const Footer = () => {
  const { pagePos, onClickNextPage, onClickPreviousPage } = usePagePositionCtx();
  const { reachedAtMaxPagePos, reachedAtMinPagePos } = usePagePositionStatus();

  return (
    <div className='flex justify-between'>
      <Button
        text='Previous Page'
        onClick={onClickPreviousPage}
        disabled={reachedAtMinPagePos}
      />
      <p className='text-l font-semibold'>Page {pagePos}</p>
      <Button
        text='Next Page'
        onClick={onClickNextPage}
        disabled={reachedAtMaxPagePos}
      />
    </div>
  );
};

export default Footer;
