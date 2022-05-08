import PropTypes from 'prop-types';

const Separator = ({ isVertical = false, additionalStyle = '' }) => (
  <>{isVertical ? <div className={'h-auto w-0.5 bg-black ' + additionalStyle} /> : <div className={'w-auto h-0.5 bg-black ' + additionalStyle} />}</>
);

Separator.propTypes = {
  isVertical: PropTypes.bool,
  additionalStyle: PropTypes.string
};

Separator.defaultProps = {
  isVertical: false,
  additionalStyle: ''
};

export default Separator;
