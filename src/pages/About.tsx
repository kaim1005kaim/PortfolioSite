import { lazy, Suspense } from 'react';
const DitheredWavesBackground = lazy(() => import('../components/background/DitheredWaves'));

const About = () => {
  return (
    <div className="min-h-screen relative">
      {/* 背景アニメーション */}
      <Suspense fallback={<div className="absolute inset-0 bg-black"></div>}>
        <DitheredWavesBackground 
          waveSpeed={0.03}
          waveFrequency={2}
          waveAmplitude={0.2}
          waveColor={[0.3, 0.2, 0.5]} // 紺から黄色に近い色調
          colorNum={4}
          pixelSize={3}
          enableMouseInteraction={true}
          mouseRadius={0.8}
        />
      </Suspense>
      
      {/* コンテンツ部分 - 左端に配置 */}
      <div className="p-12 relative z-10">
        <div className="max-w-md">
          <h1 className="text-2xl font-light tracking-wider mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-amber-300">ABOUT</h1>
          <div className="space-y-6 text-white/70">
            <p>
              映像プロダクションでエディターとして経験を積んだ後、VRコンテンツの制作に携わり、
              XR領域のコンテンツディレクションを担当。
            </p>
            <p>
              その後、事業戦略やAIコンサルティングなど、幅広い分野でエンターテインメントを軸に活動しています。
            </p>
            <p>
              常に新しい技術とクリエイティブの可能性を追求し、革新的なデジタルエクスペリエンスの
              創造に取り組んでいます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;