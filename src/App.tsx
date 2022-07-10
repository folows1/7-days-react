import Central from "./components/Central";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Ofertas from "./components/Ofertas";

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Header />
      <Newsletter />
      <Central />
      <Ofertas />
    </main>

  )
}

export default App
