import "./Error.css";

interface ErrorProps {
  error?: Error;
}

export function Error({ error }: ErrorProps): JSX.Element {
  return (
    <>
      <div className="error-text">
        <p>Error name: </p>
        <p>Error message: </p>
      </div>
    </>
  );
}
