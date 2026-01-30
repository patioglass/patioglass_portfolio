export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[url(/src/assets/header.webp)] bg-no-repeat bg-cover bg-top-left text-white py-20 px-4 min-h-[40vh]">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-2xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-2xl">
            PatioGlass Official Site
          </h1>
          <p className="text-xl md:text-md font-light tracking-wide drop-shadow-lg mb-8">
            ぱちおに関する公式サイトです。「PatioGlass」の活動記録など
          </p>
          
          {/* SNS Links */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <a 
              href="https://x.com/patioglass" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              aria-label="Twitter"
            >
              <span className="text-black text-2xl">𝕏</span>
            </a>
            <a 
              href="https://www.pixiv.net/users/2188539" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              aria-label="Pixiv"
            >
              <span className="text-blue-500 font-bold text-xl">pixiv</span>
            </a>
            <a 
              href="https://www.youtube.com/@PatioGlass_Official_Music" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              aria-label="YouTube"
            >
              <span className="text-red-600 text-2xl">▶</span>
            </a>
            <a 
              href="https://patioglass.fanbox.cc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              aria-label="FANBOX"
            >
              <span className="text-orange-500 font-bold text-sm">FAN</span>
            </a>
          </div>
        </div>
      </section>
      {/* Profile Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0" src="/src/assets/icon.webp" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">ぱちお(patioglass)</h3>
                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">絵・漫画</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">プログラミング</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">音楽</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    「PatioGlass」で活動中。イラストや漫画の制作、Web開発、音楽制作など多岐にわたる分野で活動しています。<br />
                    依頼などございましたらお気軽にご連絡ください。
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a 
              href="https://forms.gle/ca1hva36dk2W5MT7A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-slate-500 to-pink-500 hover:from-slate-600 hover:to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>📝</span>
              <span>ご依頼・お問い合わせ</span>
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section - 4 Grid */}
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 relative pb-3 inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-35 after:h-1 after:bg-gradient-to-r after:from-slate-400 after:to-pink-400 after:rounded-full">やってること</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-gray-800">絵/漫画</h3>
                <p className="text-gray-600 leading-relaxed">
                  イラストや漫画の制作。創作百合中心。 同人誌即売会への参加や各種プラットフォームでの公開も行っています。
                </p>
              </div>
              <div className="max-w-6xl mx-auto mt-6">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                  <a className="group aspect-square relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300" href="https://amzn.to/3M0cQir" target="_blank">
                    <img 
                      src="/src/assets/home_yurikan.webp" 
                      alt="創作百合短編「百合印の缶詰」シリーズ"
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 font-semibold">創作百合短編「百合印の缶詰」シリーズ</p>
                    </div>
                  </a>
                  <a className="group aspect-square relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300" href="https://amzn.to/4k4BATw" target="_blank">
                    <img 
                      src="/src/assets/home_kisetsugirl.webp" 
                      alt="創作百合「キセツガール」シリーズ"
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 font-semibold">創作百合「キセツガール」シリーズ</p>
                    </div>
                  </a>
                  <a className="group aspect-square relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300" href="https://www.pixiv.net/users/2188539" target="_blank">
                    <img 
                      src="/src/assets/home_pixiv.webp" 
                      alt="他二次創作など（pixiv）"
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 font-semibold">他二次創作など（pixiv）</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-gray-800">プログラミング</h3>
                <p className="text-gray-600 leading-relaxed">
                  Web制作中心、他chrome拡張などのアプリ開発。要件定義からデザイン、実装、運用まで対応など要相談。
                </p>
              </div>
              <div className="max-w-6xl mx-auto mt-6">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  <a className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300" href="https://patiopatimon.com/adjustimer/" target="_blank">
                    <img 
                      src="/src/assets/home_adjustimer.webp" 
                      alt="chrome拡張「AdjusTimer」"
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 font-semibold">chrome拡張「AdjusTimer」</p>
                    </div>
                  </a>
                  <a className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300" href="https://docs.google.com/presentation/d/1EFu3dJWTUGNSdKJCvr5Zl40QUZea8nP3gxAgpiG3-hg/edit?usp=sharing" target="_blank">
                    <img 
                      src="/src/assets/home_system.webp" 
                      alt="在庫管理システム開発事例"
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 font-semibold">在庫管理システム開発事例</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-gray-800">音楽</h3>
                <p className="text-gray-600 leading-relaxed">
                  DTMによる音楽制作。GUMIを使ったロック系の曲。しばらく活発ではないですが、いつか動く（と思います）。
                </p>
              </div>
              <div className="max-w-6xl mx-auto mt-6">
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/_CcGFyjWnS0?si=w9LWHYBFbsDFD9oI" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        
      </section>
    </div>
  );
};
