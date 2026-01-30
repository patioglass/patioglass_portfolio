import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { worksAtom, loadingAtom } from '../store/atoms';

// GAS APIからデータを取得する関数
const fetchWorks = async () => {
  // TODO: 実際のGAS APIエンドポイントに置き換える
  // const response = await fetch('YOUR_GAS_API_ENDPOINT');
  // const data = await response.json();
  // return data;
  
  // ダミーデータ（開発用）
  return [
    {
      id: '1',
      title: 'Webアプリケーション開発',
      description: 'React + TypeScriptを使用したモダンなWebアプリケーション。レスポンシブデザインとパフォーマンス最適化を実現。',
      imageUrl: 'https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Project+1',
      tags: ['React', 'TypeScript', 'Tailwind'],
    },
    {
      id: '2',
      title: 'ECサイト構築',
      description: 'ユーザーフレンドリーなECサイトの設計と実装。決済システムとの統合も完了。',
      imageUrl: 'https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Project+2',
      tags: ['E-commerce', 'API', 'UX'],
    },
    {
      id: '3',
      title: 'コーポレートサイトリニューアル',
      description: '企業のブランディングを強化するサイトリニューアル。SEO対策とアクセシビリティも考慮。',
      imageUrl: 'https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Project+3',
      tags: ['Corporate', 'SEO', 'Design'],
    },
    {
      id: '4',
      title: 'モバイルアプリUI設計',
      description: 'iOS/Android対応のモバイルアプリケーションのUI/UXデザイン。',
      imageUrl: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Project+4',
      tags: ['Mobile', 'UI/UX', 'Design'],
    },
  ];
};

export const Works = () => {
  const [works, setWorks] = useAtom(worksAtom);
  const [loading, setLoading] = useAtom(loadingAtom);

  useEffect(() => {
    const loadWorks = async () => {
      setLoading(true);
      try {
        const data = await fetchWorks();
        setWorks(data);
      } catch (error) {
        console.error('Failed to fetch works:', error);
      } finally {
        setLoading(false);
      }
    };

    if (works.length === 0) {
      loadWorks();
    }
  }, [works.length, setWorks, setLoading]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Works</h1>
          <p className="text-gray-600 text-lg">これまでに手がけた制作物をご紹介します</p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work) => (
              <div 
                key={work.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {work.imageUrl && (
                  <img 
                    src={work.imageUrl} 
                    alt={work.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 text-gray-800">{work.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{work.description}</p>
                  {work.tags && work.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {work.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {work.link && (
                    <a 
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors font-medium"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
