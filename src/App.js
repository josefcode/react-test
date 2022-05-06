import { Navbar } from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { About } from './components/pages/About'
import { Contact } from './components/pages/Contact'
import GlobalStyle from './GlobalStyle'
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
