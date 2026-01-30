import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { bioAtom, loadingAtom } from '../store/atoms';

// GAS APIからデータを取得する関数
const fetchBio = async () => {
  // TODO: 実際のGAS APIエンドポイントに置き換える
  // const response = await fetch('YOUR_GAS_API_ENDPOINT');
  // const data = await response.json();
  // return data;
  
  // ダミーデータ（開発用）
  return [
    { id: '1', year: '2024', content: '大手IT企業の新規プロジェクトにフロントエンドエンジニアとして参画' },
    { id: '2', year: '2023', content: 'Webデザインコンテストで優秀賞を受賞' },
    { id: '3', year: '2023', content: 'スタートアップ企業のWebアプリケーション開発を担当' },
    { id: '4', year: '2022', content: 'ECサイトのリニューアルプロジェクトをリード' },
    { id: '5', year: '2022', content: 'オンラインプログラミングスクールで講師として活動開始' },
    { id: '6', year: '2021', content: 'フリーランスWebデベロッパーとして独立' },
    { id: '7', year: '2020', content: 'Web制作会社でフロントエンドエンジニアとして従事' },
    { id: '8', year: '2019', content: '情報系大学を卒業、Webエンジニアとしてキャリアスタート' },
  ];
};

export const Bio = () => {
  const [bio, setBio] = useAtom(bioAtom);
  const [loading, setLoading] = useAtom(loadingAtom);

  useEffect(() => {
    const loadBio = async () => {
      setLoading(true);
      try {
        const data = await fetchBio();
        setBio(data);
      } catch (error) {
        console.error('Failed to fetch bio:', error);
      } finally {
        setLoading(false);
      }
    };

    if (bio.length === 0) {
      loadBio();
    }
  }, [bio.length, setBio, setLoading]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Bio</h1>
          <p className="text-gray-600 text-lg">これまでの活動実績と経歴をご紹介します</p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[47px] top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
                
                <div className="space-y-8">
                  {bio.map((entry, index) => (
                    <div 
                      key={entry.id}
                      className="relative flex flex-col md:flex-row md:items-start gap-4"
                    >
                      {/* Year badge */}
                      <div className="md:w-24 flex-shrink-0 relative z-10">
                        <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                          {entry.year}
                        </span>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="hidden md:block absolute left-[42px] top-3 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow"></div>
                      
                      {/* Content card */}
                      <div className="flex-1 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                        <p className="text-gray-700 leading-relaxed">{entry.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
