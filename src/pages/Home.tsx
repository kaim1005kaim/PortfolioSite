import { useEffect } from 'react';
import OrbWithGreetings from '../components/OrbWithGreetings';

const Home = () => {
  useEffect(() => {
    document.title = 'KAIETORI';
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute left-8 bottom-32 z-10 opacity-80">
        {/* 装飾ライン */}
        <div className="w-20 h-px bg-gradient-to-r from-blue-400 to-purple-400 opacity-70 mb-4"></div>
        <h1 className="font-['Saint_Delafield'] text-6xl tracking-wide mb-2 text-white/90 leading-none">
          Hello,
        </h1>
        <div className="relative">
          {/* 名前をより際立たせるために装飾とスタイルを改善 */}
          <p className="text-4xl font-bold tracking-wider text-white/80 mb-6 letter-spacing-2">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Kai Etori</span>
          </p>
          
          {/* 経歴部分を整える */}
          <div className="relative pl-5 border-l-2 border-purple-500/30">
            <p className="text-sm font-light leading-relaxed text-white/60 max-w-md tracking-wide">
              クリエイティブディレクター。エンターテインメント領域を中心に、
              <br />デジタルプロダクトの企画からディレクションまでを手がけています。
            </p>
          </div>
          
          <div className="mt-10">
            <img 
              src="/sneaker-art.png" 
              alt="Artistic Sneaker Design"
              className="w-64 h-auto opacity-80"
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