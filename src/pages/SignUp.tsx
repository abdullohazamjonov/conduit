import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function SignUp() {
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
        Sign Up
      </h2>
      <Link to="/login" className="text-green-500 text-xs">
        Have an account?
      </Link>
      <Input placeholder="Username" type="text"/>
      <Input placeholder="Email" type="email"/>
      <Input placeholder="Password" type="password"/>
      <div className="w-80 flex justify-end">
        <Button label="Sign Up" />
      </div>
    </form>
  );
}