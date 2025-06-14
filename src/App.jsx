import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

// 페이지 컴포넌트 (아직 빈 파일일 수도 있음)
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
       <Home />
       <About />
       <Projects />
      </main>
    </>
  )
}

export default App