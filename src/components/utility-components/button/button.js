import "./button.css";

const Button = ({ label, className, onClick, style, children }) => {
  return (
    <div className={className} onClick={onClick} style={style}>
      {label}
      {children}
    </div>
  );
};

export default Button;
