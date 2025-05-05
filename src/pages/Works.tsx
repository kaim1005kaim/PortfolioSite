const Works = () => {
  const works = [
    {
      title: '没入型VR体験',
      category: 'XR Development',
      description: 'インタラクティブなストーリーテリングを実現した革新的なVR体験',
      image: 'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'AI搭載ビデオエディター',
      category: 'AI Technology',
      description: '機械学習を活用してポストプロダクションを効率化する知的な動画編集ツール',
      image: 'https://images.pexels.com/photos/7567454/pexels-photo-7567454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'インタラクティブミュージアム',
      category: 'Digital Experience',
      description: '主要な現代美術館のための多感覚デジタルインスタレーション',
      image: 'https://images.pexels.com/photos/9669040/pexels-photo-9669040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'ブランド戦略刷新',
      category: 'Consulting',
      description: '新市場に参入するテクノロジー企業のための包括的なブランドリフレッシュ',
      image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: '短編映画シリーズ',
      category: 'Video Production',
      description: '都市の孤独をテーマにした物語性のある短編映画コレクション',
      image: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'ARアプリケーション',
      category: 'Mobile Development',
      description: '都市環境をインタラクティブな遊び場に変えるARアプリ',
      image: 'https://images.pexels.com/photos/5211430/pexels-photo-5211430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div className="min-h-screen p-12">
      <h1 className="text-2xl font-light tracking-wider mb-12 text-blue-400">WORKS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work, index) => (
          <div 
            key={index} 
            className="group relative bg-white/5 overflow-hidden hover:bg-white/10 transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-blue-400 mb-2">{work.category}</div>
              <h2 className="text-xl mb-2 group-hover:text-blue-400 transition-colors">{work.title}</h2>
              <p className="text-white/50 text-sm">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;