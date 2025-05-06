const About = () => {
  return (
    <div className="min-h-screen p-12 flex items-center justify-between">
      {/* テキストコンテンツ部分 - 左側に配置 */}
      <div className="max-w-xl">
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
      
      {/* 画像部分 - 右側に大きく配置 */}
      <div className="hidden md:block">
        <img 
          src="/etoka.png" 
          alt="Etori Kai Profile"
          className="w-[400px] h-auto max-h-[80vh] object-contain opacity-80 animate-pulse-slow"
        />
      </div>
    </div>
  );
};

export default About;