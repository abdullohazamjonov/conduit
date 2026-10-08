import { HiOutlineUserCircle } from "react-icons/hi";
import Button from "./Button";

export default function Feed() {
  return (
    <div className="mx-50 mt-5 mr-120">
        <section className="border-r border-gray-200 mb-10">
            <div className="px-4 pt-6 pb-10">
                <div className="mb-20">
                    <div className="relative border-b border-gray-300">
                        <h2 className="inline-block pb-4 text-xl text-green-500">
                            Global Feed
                        </h2>

                        <div className="absolute bottom-0 left-0 h-0.5 w-[105px] bg-green-500"></div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <HiOutlineUserCircle size={40} className="text-gray-500"/>
                        <div>
                            <p className=" text-green-500">johndoe</p>
                            <p className=" text-gray-400">10/3/2026</p>
                        </div>
                    </div>
                    <Button label="follow" variant="simple"/>
                </div>
                <div className="mt-5">
                    <h1 className="text-3xl font-bold text-gray-900">
                        How to learn JavaScript Efficiently
                    </h1>
                    <p className="mt-3 text-gray-500">
                        A comprehensive guide to mastering JavaScript from beginner to advanced level
                    </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                    <p className="text-gray-400">
                        Read more
                    </p>
                    <button className="rounded-md border border-green-500 px-4 py-1 text-green-500">
                        ♥ 2
                    </button>
                </div>
                <div className="mt-6 flex gap-2">
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-500">
                        beginners
                    </span>
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-500">
                        javascript
                    </span>
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-500">
                        programming
                    </span>
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-500">
                        webdev
                    </span>
                </div>
            </div>
            <div className="px-4 pb-10">
                <div className="mb-10">
                    <div className="relative border-b border-gray-300"></div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <HiOutlineUserCircle size={40} className="text-gray-500"/>
                        <div>
                            <p className=" text-green-500">janesmith</p>
                            <p className=" text-gray-400">10/3/2026</p>
                        </div>
                    </div>
                    <Button label="follow" variant="simple"/>
                </div>
                <div className="mt-5">
                    <h1 className="text-3xl font-bold text-gray-900">
                        React Hooks: Best Practices and Common Pitfalls
                    </h1>
                    <p className="mt-3 text-gray-500">
                        Essential patterns and anti-patterns when working with React Hooks
                    </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                    <p className="text-gray-400">
                        Read more
                    </p>
                    <button className="rounded-md border border-green-500 px-4 py-1 text-green-500">
                        ♥ 2
                    </button>
                </div>
                <div className="mt-6 flex gap-2">
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-500">
                        beginners
                    </span>
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-500">
                        javascript
                    </span>
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-500">
                        programming
                    </span>
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-500">
                        webdev
                    </span>
                </div>
            </div>
            <div className="px-4 pb-10">
                <div className="mb-10">
                    <div className="relative border-b border-gray-300"> </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <HiOutlineUserCircle size={40} className="text-gray-500"/>
                        <div>
                            <p className=" text-green-500">mikewilson</p>
                            <p className=" text-gray-400">10/3/2026</p>
                        </div>
                    </div>
                    <Button label="follow" variant="simple"/>
                </div>
                <div className="mt-5">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Building Scalable APIs with Node.js
                    </h1>
                    <p className="mt-3 text-gray-500">
                        Architectural patterns and best practices for creating robust backend services
                    </p>
                </div>
                <div className="mt-16 flex items-center justify-between">
                    <p className="text-gray-400">
                        Read more
                    </p>
                    <button className="rounded-md border border-green-500 px-4 py-1 text-green-500">
                        ♥ 1
                    </button>
                </div>
                <div className="mt-6 flex gap-2">
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-500">
                        beginners
                    </span>
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-500">
                        javascript
                    </span>
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-500">
                        programming
                    </span>
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-500">
                        webdev
                    </span>
                </div>
            </div>
            <div className="px-4 pb-10">
                <div className="mb-10">
                    <div className="relative border-b border-gray-300"> </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <HiOutlineUserCircle size={40} className="text-gray-500"/>
                        <div>
                            <p className=" text-green-500">sarahchen</p>
                            <p className=" text-gray-400">10/3/2026</p>
                        </div>
                    </div>
                    <Button label="follow" variant="simple"/>
                </div>
                <div className="mt-5">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Introduction to Machine Learning for Developers
                    </h1>
                    <p className="mt-3 text-gray-500">
                       Getting started with ML concepts and practical applications for software developers
                    </p>
                </div>
                <div className="mt-16 flex items-center justify-between">
                    <p className="text-gray-400">
                        Read more
                    </p>
                    <button className="rounded-md border border-green-500 px-4 py-1 text-green-500">
                        ♥ 1
                    </button>
                </div>
                <div className="mt-6 flex gap-2">
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-500">
                        beginners
                    </span>
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-500">
                        javascript
                    </span>
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-500">
                        programming
                    </span>
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-500">
                        webdev
                    </span>
                </div>
            </div>
            <div>
                <div className="mb-10 mr-5">
                    <div className="relative border-b border-gray-300"></div>
                </div>
                <samp className="p-4 px-5 rounded-4xl bg-green-500 text-white">1</samp>
            </div>
            
        </section>
    </div>
  )
}