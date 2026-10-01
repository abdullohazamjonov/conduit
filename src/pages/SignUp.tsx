import Button from "../ui/Button";
import Input from "../ui/Input";

export default function SignUp() {
  return (
    <form className="flex flex-col items-center py-10 gap-2">
      <h2 className="font-bold text-3xl">Sign Up</h2>
      <span className="text-green-500 text-xs">Have an account?</span>
      <Input placeholder="Username" type="text" />
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <div className="w-80 flex justify-end">
        <Button label="Sign Up" />
      </div>
    </form>
  )
}