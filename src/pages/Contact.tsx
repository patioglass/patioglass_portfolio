export const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact</h1>
          <p className="text-gray-600 text-lg">お気軽にお問い合わせください</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <p className="text-gray-700 mb-8 leading-relaxed">
              お仕事のご依頼やお問い合わせは、以下の連絡先よりお気軽にご連絡ください。
              新規プロジェクトのご相談やコラボレーションのお誘いをお待ちしております。
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-2xl">📧</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <a 
                    href="mailto:your-email@example.com"
                    className="text-blue-500 hover:text-blue-700 transition-colors break-all"
                  >
                    your-email@example.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">お仕事のご依頼はこちらへ</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sky-600 text-2xl">🐦</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">Twitter / X</h3>
                  <a 
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    @yourusername
                  </a>
                  <p className="text-gray-500 text-sm mt-1">最新情報はこちらで発信中</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">💼</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">GitHub</h3>
                  <a 
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors break-all"
                  >
                    github.com/yourusername
                  </a>
                  <p className="text-gray-500 text-sm mt-1">ソースコードや活動履歴</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">💼</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors break-all"
                  >
                    linkedin.com/in/yourusername
                  </a>
                  <p className="text-gray-500 text-sm mt-1">ビジネス向けプロフィール</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm text-center">
                通常1-2営業日以内にご返信いたします
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
