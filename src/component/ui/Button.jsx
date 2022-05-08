import PropTypes from 'prop-types';

const Button = ({ onClick, text = 'button', additionalStyle = '' }) => {
  return (
    <button
      onClick={onClick}
      className={'border border-black rounded-sm py-1 px-2 bg-white hover:bg-slate-300 active:bg-slate-400 cursor-pointer' + ' ' + additionalStyle}
    >
      {text}
    </button>
  );
};

Button.propTyps = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  additionalStyle: PropTypes.string
};

Button.defaultProps = {
  text: 'button',
  additionalStyle: ''
};

export default Button;
