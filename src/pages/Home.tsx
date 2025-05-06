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
          {/* 名前をより際立たせるために装飾とスタイルを改善 */}
          <p className="text-4xl font-bold tracking-wider text-white/80 mb-6 letter-spacing-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">餅取凱です。</span>
          </p>
          
          {/* 経歴部分を整える - グラデーションラインを削除し、テキスト位置を調整 */}
          <div className="relative mb-8">
            {/* 経歴テキスト */}
            <p className="text-sm font-light leading-relaxed text-white/60 max-w-md tracking-wide">
              エンターテインメント領域を軸に、デジタルプロダクトの企画・設計から、ビジュアルや体験設計を含むクリエイティブディレクションまで、プロジェクト全体を横断的に手がけています。多様なチームと連携しながら、コンセプト設計からアウトプットまで一責して伴走することを強みとしています。
            </p>
          </div>
          
          {/* スニーカー画像を右寄せに配置 */}
          <div className="flex justify-end">
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