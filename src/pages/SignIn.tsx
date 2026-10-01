import Button from "../ui/Button";
import Input from "../ui/Input";

export default function SignIn() {
    return (
        <form className="flex flex-col items-center py-10 gap-2">
            <h2 className="font-bold text-3xl">Sign in</h2>
            <span className="text-green-500 text-xs">Need an account?</span>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button label="Sign In" />
        </form>
    )
}