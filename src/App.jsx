import Home from './Home'
import Navbar from './Navbar'
import { useDarkMode } from './context/DarkModeContext';
import Footer from './Footer';
function App() {

  const { darkMode } = useDarkMode();



  return (
    <div className={`App h-[100vh] ${darkMode ? 'bg-neutral-900 text-white border-neutral-700' : 'bg-white text-black border-neutral-400'} transition-colors duration-300`} >
      <Navbar/>
      <div className="content">
        <Home />
        
      </div>
      <Footer />
    </div>
  )
}

export default App
