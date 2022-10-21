import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
    return (
        <Routes>
            <Route path="/Portfolio" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/Portfolio/about" element={<About />} />
                <Route path="/Portfolio/contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}

export default App
