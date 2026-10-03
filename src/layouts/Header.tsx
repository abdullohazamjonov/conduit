export default function Header() {
    return (
        <div className="mx-50 mr-50 border-b border-gray-300">
            <div className="container m-auto flex justify-between items-center py-3">
                <div className="text-green-500 font-bold text-2xl">Conduit</div>
                <ul className="flex gap-6 text-base ">
                    <li className="cursor-pointer text-gray-500 hover:text-green-500">Home</li>
                    <li className="cursor-pointer text-gray-500 hover:text-green-500">Sign in</li>
                    <li className="cursor-pointer text-gray-500 hover:text-green-500">Sign up</li>
                </ul>
            </div>
        </div>
    )
}

