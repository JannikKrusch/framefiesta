import classNames from "classnames";
import "./CustomButton.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

interface ButtonProps {
  label: string;
  notLast?: boolean;
  active?: boolean;
  onlyText?: boolean;
  href?: string;
  isSubit?: boolean;
  loading?: boolean;
  hidden?: boolean;
  method?: () => void;
}

function CustomButton(props: ButtonProps): JSX.Element {
  function handleClick() {
    if (props?.method) {
      props.method();
    }
  }

  const buttonClasses = classNames(
    "button",
    { active: props.active },
    { notLast: props.notLast },
    { last: !props.notLast },
    { text: props.onlyText },
    { hidden: props.hidden }
  );

  return (
    <Button
      type={props.isSubit ? "submit" : "button"}
      href={props.href}
      className={buttonClasses}
      onClick={handleClick}
    >
      {props.loading ? "Loading" : props.label}
    </Button>
  );
}

export default CustomButton;
