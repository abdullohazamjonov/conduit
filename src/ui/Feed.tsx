import { HiOutlineUserCircle } from "react-icons/hi";
import Button from "./Button";

export default function Feed() {
  return (
    <div className="border border-red-500">
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <HiOutlineUserCircle size={40} className="text-gray-500"/>
                <div className="flex flex-col">
                    <span className="text-[14px] text-green-500">johndoe</span>
                    <span className="text-[12px] text-gray-400">10/1/2026</span>
                </div>
            </div>
            <Button label="follow" variant="simple"/>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}
