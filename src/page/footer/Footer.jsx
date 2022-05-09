import Button from '../../component/ui/Button';
import { usePagePositionCtx } from '../../state/client/context/PagePosition.context';

const Footer = () => {
  const { MAX_PAGE_POS, pagePos, onClickNextPage, onClickPreviousPage } =
    usePagePositionCtx();

  return (
    <div className='flex justify-between'>
      <Button
        text='Previous Page'
        onClick={onClickPreviousPage}
        disabled={pagePos <= 1}
      />
      <p className='text-l font-semibold'>Page {pagePos}</p>
      <Button
        text='Next Page'
        onClick={onClickNextPage}
        disabled={pagePos >= MAX_PAGE_POS}
      />
    </div>
  );
};

export default Footer;
