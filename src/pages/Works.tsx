import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { worksAtom, loadingAtom, selectedTagAtom, tagOptions, showCommissionOnlyAtom, fetchWorks } from '../store/atoms';
import headerPartsImg from '../assets/header_parts_002.webp';

// タグごとのスタイル定義
const tagStyles: Record<string, { bg: string; text: string; border: string }> = {
  '絵・漫画': { bg: 'bg-pink-100', text: 'text-pink-700', border: 'border-pink-300' },
  '音楽': { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' },
  'プログラミング': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
  'その他': { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300' },
};

// タグのスタイルを取得
const getTagStyle = (tag: string) => {
  return tagStyles[tag] || tagStyles['その他'];
};

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
          <p className="text-gray-600 text-lg">これまでに手がけた制作物</p>
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

        {/* タグ凡例 */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {Object.entries(tagStyles).map(([tag, style]) => (
            <span
              key={tag}
              className={`px-3 py-1 ${style.bg} ${style.text} border ${style.border} text-sm rounded-full`}
            >
              {tag}
            </span>
          ))}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredWorks.map((work) => (
              <div
                key={work.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
              >
                {/* 依頼物バッジ */}
                {work.isCommission && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                      依頼制作
                    </span>
                  </div>
                )}
                {work.imageUrl && (
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  {/* タグ表示（先頭に配置） */}
                  {work.tags && work.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {work.tags.map((tag, index) => {
                        const style = getTagStyle(tag);
                        return (
                          <span
                            key={index}
                            className={`px-4 py-1.5 ${style.bg} ${style.text} border-2 ${style.border} text-sm rounded-full font-bold shadow-sm`}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  )}

                  <h2 className="text-xl font-bold mb-3 text-gray-800">{work.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{work.description}</p>

                  {/* 複数リンク表示 */}
                  {work.links && work.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
