import classNames from "classnames";
import "./CustomButton.css";
import { Button } from "react-bootstrap";

interface ButtonProps {
  label: string;
  notLast?: boolean;
  active?: boolean;
  onlyText?: boolean;
  href?: string;
  isSubmit?: boolean;
  loading?: boolean;
  hidden?: boolean;
  disabled?: boolean;
  danger?: boolean;
  method?: (() => void) | (() => Promise<void>);
}

export function CustomButton(props: ButtonProps): JSX.Element {
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
    { hidden: props.hidden },
    { danger: props.danger }
  );

  return (
    <Button
      disabled={props.disabled}
      type={props.isSubmit ? "submit" : "button"}
      href={props.href}
      className={buttonClasses}
      onClick={handleClick}
    >
      {props.loading ? "Loading" : props.label}
    </Button>
  );
}
