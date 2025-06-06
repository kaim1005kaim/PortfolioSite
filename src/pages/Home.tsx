import { useEffect } from 'react';
import OrbWithGreetings from '../components/OrbWithGreetings';

const Home = () => {
  useEffect(() => {
    document.title = 'KAIETORI';
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute left-8 bottom-24 z-10 opacity-80">
        {/* 挨拶 */}
        <h1 className="font-['Saint_Delafield'] text-6xl tracking-wide mb-2 text-white/90 leading-none">
          どうも！
        </h1>
        <div className="relative">
          {/* 名前部分 */}
          <div className="relative mb-8">
            <div className="text-4xl font-bold tracking-[0.2em] text-white/80">
              {/* ルビを横表記に修正して位置調整 - カイの位置をさらに左に調整 */}
              <div className="flex mb-1 pl-[0.4em]">
                <span className="text-xs text-gray-400 mr-[1.2em]">エ</span>
                <span className="text-xs text-gray-400 mr-[0.8em]">トリ</span>
                <span className="text-xs text-gray-400 -ml-[0.5em]">カイ</span>
              </div>
              {/* 漢字部分 - マウスオーバー時の効果を追加 */}
              <div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-amber-300 cursor-pointer transition-all duration-300 hover:from-purple-600 hover:to-amber-400 hover:drop-shadow-lg">餌取凱です。</span>
              </div>
            </div>
          </div>
          
          {/* 経歴部分 */}
          <div className="relative">
            <p className="text-sm font-light leading-relaxed text-white/60 max-w-md tracking-wide">
              エンターテインメント領域を軸に、デジタルプロダクトの企画・設計から、ビジュアルや体験設計を含むクリエイティブディレクションまで、プロジェクト全体を横断的に手がけています。多様なチームと連携しながら、コンセプト設計からアウトプットまで一貫して伴走することを強みとしています。
            </p>
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