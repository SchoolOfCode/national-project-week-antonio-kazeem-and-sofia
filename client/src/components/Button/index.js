import './Button.css';

const Button = ({ styles, text }) => {
  return <button className={`button ${styles}`}>{text}</button>;
};

export default Button;
