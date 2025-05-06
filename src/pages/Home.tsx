import { useEffect } from 'react';
import OrbWithGreetings from '../components/OrbWithGreetings';

const Home = () => {
  useEffect(() => {
    document.title = 'KAIETORI';
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute left-8 bottom-32 z-10 opacity-80">
        <h1 className="text-5xl font-extralight tracking-wider mb-4 text-white/80">
          Hello,
        </h1>
        <div className="space-y-4">
          <p className="text-3xl font-extralight tracking-wide text-white/60">
            I'm Kai Etori
          </p>
          <p className="text-sm font-light leading-relaxed text-white/50 max-w-md">
            クリエイティブディレクター。エンターテインメント領域を中心に、
            デジタルプロダクトの企画からディレクションまでを手がけています。
          </p>
          <div className="mt-8">
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