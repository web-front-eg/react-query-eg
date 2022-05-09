import Button from '../../component/ui/Button';
import { usePagePositionCtx } from '../../state/client/context/PagePosition.context';

const Footer = () => {
  const { onClickNextPage, onClickPreviousPage } = usePagePositionCtx();

  return (
    <div className='flex justify-between'>
      <Button text='Previous Page' onClick={onClickPreviousPage} />
      <p className='text-l font-semibold'>Page </p>
      <Button text='Next Page' onClick={onClickNextPage} />
    </div>
  );
};

export default Footer;
