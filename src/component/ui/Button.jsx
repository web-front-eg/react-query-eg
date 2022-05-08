import PropTypes from 'prop-types';

const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className='border border-black rounded-sm py-1 px-2 bg-white hover:bg-slate-300 active:bg-slate-400 cursor-pointer'
    >
      {text}
    </button>
  );
};

Button.propTyps = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
