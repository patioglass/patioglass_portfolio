export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl md:text-2xl">クリエイティブな制作物をご覧ください</p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Profile</h2>
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-5xl">👤</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Your Name</h3>
                <p className="text-gray-600 mb-4">Web Developer / Designer</p>
                <p className="text-gray-700 leading-relaxed">
                  ここにプロフィールの説明文を記述します。あなたのスキルや経験、興味について簡潔に紹介しましょう。
                  クリエイティブな制作活動を通じて、より良いユーザー体験を提供することを目指しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section - 4 Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Web Development</h3>
              <p className="text-gray-600">
                モダンな技術スタックを使用したWebアプリケーション開発。React、TypeScript、Node.jsなどを活用。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">UI/UX Design</h3>
              <p className="text-gray-600">
                ユーザー中心の直感的なインターフェースデザイン。美しく使いやすいデザインを追求。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Responsive Design</h3>
              <p className="text-gray-600">
                あらゆるデバイスに対応したレスポンシブなデザイン。モバイルファーストのアプローチ。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-orange-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Performance</h3>
              <p className="text-gray-600">
                高速で最適化されたパフォーマンスの実現。ユーザー体験を第一に考えた実装。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
