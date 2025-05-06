import { useEffect } from 'react';
import OrbWithGreetings from '../components/OrbWithGreetings';

const Home = () => {
  useEffect(() => {
    document.title = 'KAIETORI';
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute left-8 bottom-32 z-10 opacity-80">
        {/* 挨拶 */}
        <h1 className="font-['Saint_Delafield'] text-6xl tracking-wide mb-2 text-white/90 leading-none">
          どうも！
        </h1>
        <div className="relative">
          {/* 名前部分 */}
          <div className="relative mb-8">
            <div className="text-4xl font-bold tracking-[0.2em] text-white/80">
              {/* ルビを横表記に修正 */}
              <div className="flex mb-1">
                <span className="text-xs text-gray-400 mr-[1.2em]">エ</span>
                <span className="text-xs text-gray-400 mr-[0.8em]">トリ</span>
                <span className="text-xs text-gray-400">カイ</span>
              </div>
              {/* 漢字部分 */}
              <div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">餌取凱です。</span>
              </div>
            </div>
          </div>
          
          {/* 経歴部分 */}
          <div className="relative mb-8">
            <p className="text-sm font-light leading-relaxed text-white/60 max-w-md tracking-wide">
              エンターテインメント領域を軸に、デジタルプロダクトの企画・設計から、ビジュアルや体験設計を含むクリエイティブディレクションまで、プロジェクト全体を横断的に手がけています。多様なチームと連携しながら、コンセプト設計からアウトプットまで一貫して伴走することを強みとしています。
            </p>
          </div>
          
          {/* スニーカー画像 */}
          <div className="flex justify-center pr-10">
            <img 
              src="/sneaker-art.png" 
              alt="Artistic Sneaker Design"
              className="w-[294px] h-auto opacity-80"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px]">
        <OrbWithGreetings hue={240} hoverIntensity={0.3} rotateOnHover={true} interval={3500} />
      </div>
    </div>
  );
};

export default Home;