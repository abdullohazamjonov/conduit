export default function Header() {
    return (
        <div className="border-b border-gray-300">
            <div className="container m-auto flex justify-between items-center py-2">
                <div className="text-green-500 font-medium text-xl">Conduit</div>
                <ul className="flex gap-2 text-xs">
                    <li className="cursor-pointer text-gray-500">Home</li>
                    <li className="cursor-pointer text-gray-500">Sign in</li>
                    <li className="cursor-pointer text-gray-500">Sign up</li>
                </ul>
            </div>
        </div>
    )
}

