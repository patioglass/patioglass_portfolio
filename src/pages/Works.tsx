import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { worksAtom, loadingAtom, selectedTagAtom, tagOptions, showCommissionOnlyAtom, fetchWorks, getTagColor } from '../store/atoms';
import headerPartsImg from '../assets/header_parts_002.webp';


export const Works = () => {
  const [works, setWorks] = useAtom(worksAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  const [selectedTag, setSelectedTag] = useAtom(selectedTagAtom);
  const [showCommissionOnly, setShowCommissionOnly] = useAtom(showCommissionOnlyAtom);

  // タグと依頼物フィルターでフィルタリング
  const filteredWorks = works.filter(work => {
    const matchesTag = selectedTag === 'すべて' || work.tags?.includes(selectedTag);
    const matchesCommission = !showCommissionOnly || work.isCommission === true;
    return matchesTag && matchesCommission;
  });

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
      <div className="flex items-center justify-center gap-6 mb-8">
        <img
          src={headerPartsImg}
          alt="Works Icon"
          className="w-40 h-40 object-contain rounded-full shadow-md"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Works</h1>
          <p className="text-gray-600 text-lg">これまでに手がけた公開可能な制作物</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* フィルター */}
        <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
          {/* タグ絞り込み */}
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {tagOptions.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>

          {/* 依頼物フィルター */}
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={showCommissionOnly}
              onChange={(e) => setShowCommissionOnly(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <span className="text-gray-700">依頼物のみ表示</span>
          </label>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredWorks.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            該当する作品がありません
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredWorks.map((work) => (
              <div
                key={work.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="flex flex-col md:flex-row">
                  {/* 画像エリア */}
                  {work.imageUrl && (
                    <div className="md:w-64 md:flex-shrink-0 relative">
                      {work.isCommission && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                            依頼制作
                          </span>
                        </div>
                      )}
                      <img
                        src={`/images/${work.imageUrl.split('=').pop()}.webp`}
                        alt={work.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                  )}
                  
                  {/* コンテンツエリア */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        {/* タグ表示 */}
                        {work.tags && work.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-2">
                            {work.tags.map((tag, index) => (
                              <span
                                key={index}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        <h2 className="text-2xl font-bold text-gray-800 mb-1">{work.title}</h2>
                        {work.date && (
                          <p className="text-sm text-gray-400 mb-3">{work.date}</p>
                        )}
                      </div>
                      
                      {/* 依頼物バッジ（画像なしの場合） */}
                      {!work.imageUrl && work.isCommission && (
                        <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg flex-shrink-0">
                          依頼制作
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{work.description}</p>

                    {/* 複数リンク表示 */}
                    {work.links && work.links.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {work.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors font-medium"
                          >
                            {link.label}
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
