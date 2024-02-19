import css from './ErrorMessage.module.css';
const ErrorMessage = () => {
  return <p className={css.errorText}>Whoops, something went wrong! Please try again.</p>;
};

export default ErrorMessage;
