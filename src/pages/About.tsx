const About = () => {
  return (
    <div className="min-h-screen p-12 flex items-center">
      <div className="max-w-2xl">
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
  );
};

export default About;