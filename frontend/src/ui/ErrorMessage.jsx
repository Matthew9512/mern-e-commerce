function ErrorMessage({ children, style }) {
   return <p className={`text-center text-lg ${style}`}>{children}</p>;
}

export default ErrorMessage;
