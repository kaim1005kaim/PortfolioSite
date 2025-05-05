const Career = () => {
  const careers = [
    {
      period: '現在',
      company: 'KDDI',
      position: '事業創造及びクリエイティブ',
      description: '新規事業の拡販、エンタメ領域企画立案、ディレクションなど幅広く従事。AIを活用したサービス開発やコンテンツ制作のコンサルティングも担当。'
    },
    {
      period: '2021-2023',
      company: 'stu',
      position: 'クリエイティブディレクター',
      description: 'Web3やメタバースなど最新技術を活用したデジタルプロダクトの企画・開発。没入型エンターテインメント体験のディレクションを担当。'
    },
    {
      period: '2018-2021',
      company: 'DMM',
      position: 'XRコンテンツディレクター',
      description: 'VR/AR技術を活用したエンターテインメントコンテンツの企画・制作。ユーザー体験設計からプロジェクトマネジメントまでを統括。'
    },
    {
      period: '2014-2018',
      company: '映像制作',
      position: 'エディター',
      description: 'CM・プロモーション映像の編集、VFX合成を担当。After EffectsやNukeを使用した映像制作の技術基盤を確立。'
    }
  ];

  return (
    <div className="min-h-screen p-12">
      <h1 className="text-2xl font-light tracking-wider mb-12 text-blue-400">CAREER</h1>
      <div className="space-y-16">
        {careers.map((career, index) => (
          <div key={index} className="max-w-2xl">
            <div className="text-sm text-white/50 mb-3">{career.period}</div>
            <div className="text-2xl font-light mb-3">{career.company}</div>
            <div className="text-white/70 mb-3">{career.position}</div>
            <div className="text-white/50 text-sm leading-relaxed">{career.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;