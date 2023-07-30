import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { Input } from "../ui/Input";
// import { ErrorMessage } from "../ui/ErrorMessage";

export const Register = () => {
  const [disabledBtn, setDisabledBtn] = useState(true);
  //   const [error, setError] = useState(false);
  const formRef = useRef();

  const verifyFrom = () => {
    if (
      !formRef.current.email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ||
      formRef.current.password.value.length < 3 ||
      formRef.current.username.value.length < 3
    )
      // return setError(true);
      return setDisabledBtn(true);
    setDisabledBtn(false);
  };

  return (
    <Section variant="flexCol">
      <form
        onChange={verifyFrom}
        ref={formRef}
        className="mx-auto flex w-fit flex-col gap-6 rounded-md p-4 backdrop-blur-md"
      >
        <Input
          label="username"
          type="text"
          placeholder="e.g. adam"
          variant="secondary"
        />
        {/* {error && <ErrorMessage>asdasdadadsasd</ErrorMessage>} */}
        <Input
          label="email"
          type="text"
          placeholder="e.g. adam@gmail.com"
          variant="secondary"
        />
        {/* {error && <ErrorMessage>asdasdadadsasd</ErrorMessage>} */}
        <Input
          label="password"
          type="text"
          placeholder="password"
          variant="secondary"
        />
        {/* {error && <ErrorMessage>asdasdadadsasd</ErrorMessage>} */}
        <Button variant="primary" disabled={disabledBtn}>
          Login
        </Button>
      </form>
      <Link to="/login">
        <p className="opacity-70">
          Have an account?
          <span className="ml-2 underline">Log in</span>
        </p>
      </Link>
    </Section>
  );
};
