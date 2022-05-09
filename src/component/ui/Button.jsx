import PropTypes from 'prop-types';

const Button = ({
  onClick,
  text = 'button',
  additionalStyle = '',
  disabled = false
}) => {
  let style =
    'border border-black rounded-sm py-1 px-2' +
    ' ' +
    (disabled
      ? 'bg-gray-400'
      : 'bg-white hover:bg-slate-300 active:bg-slate-400 cursor-pointer' +
        additionalStyle);

  return (
    <button onClick={onClick} disabled={disabled} className={style}>
      {text}
    </button>
  );
};

Button.propTyps = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  additionalStyle: PropTypes.string,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  text: 'button',
  additionalStyle: '',
  disabled: false
};

export default Button;
