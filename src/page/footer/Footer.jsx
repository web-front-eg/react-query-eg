import Button from '../../component/ui/Button';

const Footer = () => {
  return (
    <div className='flex justify-between'>
      <Button text='Previous Page' />
      <p className='text-l font-semibold'>Page {}</p>
      <Button text='Next Page' />
    </div>
  );
};

export default Footer;
