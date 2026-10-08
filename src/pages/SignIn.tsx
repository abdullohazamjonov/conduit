import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: "admin",
      })
    );
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center py-10 gap-2">
      <h2 className="font-bold text-3xl">
        Sign in
      </h2>
      <Link to="/register" className="text-green-500 text-xs">
        Need an account?
      </Link>
      <Input placeholder="Email" type="email"/>
      <Input placeholder="Password" type="password"/>
      <Button label="Sign In" />
    </form>
  );
}