import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";

export const Login = () => {
  const [disabledBtn, setDisabledBtn] = useState(true);
  const formRef = useRef();

  const verifyFrom = () => {
    if (
      !formRef.current.email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ||
      formRef.current.password.value.length < 3 ||
      formRef.current.username.value.length < 3
    )
      return setDisabledBtn(true);
    setDisabledBtn(false);
  };

  return (
    <Section variant="flexCol">
      <form
        onChange={verifyFrom}
        ref={formRef}
        className="mx-auto flex w-fit flex-col gap-6 rounded-md bg-purple-200 p-4 backdrop-blur-md"
      >
        <Input
          label="email"
          type="text"
          placeholder="e.g. adam@gmail.com"
          variant="secondary"
        />
        <Input
          label="password"
          type="text"
          placeholder="password"
          variant="secondary"
        />
        <Button variant="primary" disabled={disabledBtn}>
          Login
        </Button>
      </form>
      <Link to="/register">
        <p className="opacity-70">
          Don&apos;t have an account?
          <span className="ml-2 underline">Sign Up</span>
        </p>
      </Link>
    </Section>
  );
};
