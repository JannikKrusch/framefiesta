import classNames from "classnames";
import "./CustomButton.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

interface ButtonProps {
  label: string;
  notLast: boolean;
  isActive: boolean;
  onlyText?: boolean;
  href?: string;
  isSubit?: boolean;
  loading?: boolean;
  method: () => void;
}

function CustomButton(props: ButtonProps) {
  const [loading, setLoading] = useState<boolean>(false);

  function handleClick() {
    setLoading(true);
    props.method();
    setLoading(false);
  }

  const buttonClasses = classNames(
    "button",
    { active: props.isActive },
    { notLast: props.notLast },
    { text: props.onlyText }
  );
  return (
    <Button
      type={props.isSubit ? "submit" : "button"}
      href={props.href}
      className={buttonClasses}
      onClick={handleClick}
    >
      {props.loading && loading ? "Loading" : props.label}
    </Button>
    // <a href={props.href} className={buttonClasses} onClick={props.method}>
    //   {props.label}
    // </a>
  );
}

export default CustomButton;
