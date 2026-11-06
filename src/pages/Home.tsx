import { useEffect, useState } from 'react'

export default function Home() {
  const [pageData, setPageData] = useState<any>(null)

  useEffect(() => {
    fetch('https://cms-kimtinphat.tranhuunghia2002.workers.dev/api/home-page')
      .then(res => res.json())
      .then(json => {
        if (json.data && json.data.length > 0) {
          setPageData(json.data[0].data)
        }
      })
      .catch(err => console.error("Lỗi khi tải dữ liệu:", err))
  }, [])

  if (!pageData) {
    return <div className="text-center py-20 text-blue-200">Đang tải dữ liệu Trang chủ...</div>
  }

  return (
    <section className="relative w-full rounded-3xl bg-[#002855] border border-blue-900/50 p-12 overflow-hidden flex">
      <div className="relative z-10 w-1/2 pr-10">
        <div className="text-orange-400 text-sm font-bold tracking-widest mb-4">{pageData.span_text}</div>
        <h1 className="text-5xl font-extrabold leading-tight mb-6">{pageData.hero_title}</h1>
        <p className="text-lg text-blue-100 mb-8 leading-relaxed">{pageData.hero_desc}</p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all">
           {pageData.button_hero}→
        </button>
      </div>

      <div className="relative w-1/2 min-h-[400px]">
        <img 
          src={pageData.hero_image} 
          alt="Kim Tín Phát" 
          className="w-full h-full object-cover rounded-xl shadow-2xl"
        />
        <div className="absolute -bottom-6 -left-10 flex gap-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl w-44 text-center">
            <div className="text-5xl font-extrabold text-orange-400 mb-2">{pageData.stat_projects}+</div>
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wide">Dự án hoàn thành</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl w-44 text-center">
            <div className="text-5xl font-extrabold text-orange-400 mb-2">{pageData.stat_experience}+</div>
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wide">Năm kinh nghiệm</div>
          </div>
        </div>
      </div>
    </section>
  )
}