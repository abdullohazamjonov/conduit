export default function Footer() {
    return (
        <div className="flex gap-2 justify-center items-center py-4 bg-gray-200">
            <span className="text-green-500 font-bold text-2xl">conduit</span>
            <p>
                An interactive learning project from
                <a
                    href="https://github.com/realworld-apps/realworld"
                    target="_blank" className="font-bold px-1"
                >
                    RealWorld.
                </a>
                Code licensed under MIT
            </p>
        </div>
    )
}
