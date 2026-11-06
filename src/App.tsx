import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      {/* Bao bọc toàn bộ web bằng màu nền và padding chung */}
      <main className="min-h-screen bg-[#001b3a] text-white font-sans p-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header nằm ngoài Routes nên trang nào cũng sẽ hiển thị */}
          <Header />
          
          {/* Khu vực nội dung sẽ thay đổi khi bấm vào menu */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu" element={<About />} />
          </Routes>
          
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App