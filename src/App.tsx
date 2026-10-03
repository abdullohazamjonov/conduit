import Footer from "./layouts/Footer"
import  Header from "./layouts/Header"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Home/>
        <SignIn />
        <SignUp/>
      </main>
      <Footer />
    </div>
  )
}

export default App
