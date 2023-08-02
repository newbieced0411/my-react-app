import PropTypes from 'prop-types';

const ButtonComponent = (props) => {

  const { className, onClick, children } = props;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

ButtonComponent.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};


export default ButtonComponent;
