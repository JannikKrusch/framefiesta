import classNames from "classnames";
import "./CustomButton.css";

interface ButtonProps {
  label: string;
  notLast: boolean;
  isActive: boolean;
  onlyText?: boolean;
  href?: string;
  method: () => void;
}

function CustomButton(props: ButtonProps) {
  const buttonClasses = classNames(
    "button",
    { active: props.isActive },
    { notLast: props.notLast },
    { text: props.onlyText }
  );
  return (
    <a href={props.href} className={buttonClasses} onClick={props.method}>
      {props.label}
    </a>
  );
}

export default CustomButton;
