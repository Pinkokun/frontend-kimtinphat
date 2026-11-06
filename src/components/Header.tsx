import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 mb-10 border-b border-white/10">
      <div className="text-2xl font-bold text-blue-400">KIM TÍN PHÁT</div>
      <nav className="space-x-8 text-sm font-medium">
        <Link to="/" className="hover:text-blue-400 transition-colors">Trang chủ</Link>
        <Link to="/gioi-thieu" className="hover:text-blue-400 transition-colors">Giới thiệu</Link>
        <Link to="/dich-vu" className="hover:text-blue-400 transition-colors">Dịch vụ</Link>
        <Link to="/du-an" className="hover:text-blue-400 transition-colors">Dự án</Link>
        <Link to="/san-pham" className="hover:text-blue-400 transition-colors">Sản phẩm</Link>\
      <Link to="/tin-tuc" className="hover:text-blue-400 transition-colors">Tin tức</Link>
      </nav>
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold">
        YÊU CẦU TƯ VẤN
      </button>
    </header>
  );
}