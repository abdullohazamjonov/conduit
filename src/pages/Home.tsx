import Feeds from "../ui/Feeds";

export default function Home() {
  return (
    <div>
      <div className="bg-green-500 text-white py-12 flex flex-col items-center">
        <h1 className="text-5xl font-semibold">conduit</h1>
        <span className="text-white-400">A place to share your knowledge.</span>
      </div>
      <div className="container m-auto">
        <Feeds />
      </div>
    </div>
  )
}