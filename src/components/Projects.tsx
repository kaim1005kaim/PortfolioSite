import { useState } from 'react';
import { X } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  details: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "没入型VR体験",
    category: "XR Development",
    image: "https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "インタラクティブなストーリーテリングを実現した革新的なVR体験。",
    details: "このプロジェクトでは、ユーザーがストーリーと意味のある形で相互作用できる完全没入型の世界を創造し、VR技術の限界に挑戦しました。クリエイティブディレクターとして、技術的な実装がクリエイティブなビジョンと一致するよう、開発者と密接に協力しました。"
  },
  {
    id: 2,
    title: "AI搭載ビデオエディター",
    category: "AI Technology",
    image: "https://images.pexels.com/photos/7567454/pexels-photo-7567454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "機械学習を活用してポストプロダクションを効率化する知的な動画編集ツール。",
    details: "この革新的なツールは、高度なAIアルゴリズムを使用して動画コンテンツを分析し、最適な編集ポイント、トランジション、エフェクトを提案します。プロの編集者の判断から学習し、推奨事項を継続的に改善するシステムを設計。複雑な技術の下でも直感的に操作できるようUIの開発を監督しました。"
  },
  {
    id: 3,
    title: "インタラクティブミュージアム",
    category: "Digital Experience",
    image: "https://images.pexels.com/photos/9669040/pexels-photo-9669040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "主要な現代美術館のための多感覚デジタルインスタレーション。",
    details: "テクノロジーとアートの交差をテーマにした特別展のために制作。モーションセンサー、プロジェクションマッピング、空間音響を使用して、来場者の動きやインタラクションに反応する環境を創造。デジタル時代における人々のつながりをテーマに、見知らぬ人々との協調的なインタラクションを促す作品となりました。"
  },
  {
    id: 4,
    title: "ブランド戦略刷新",
    category: "Consulting",
    image: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "新市場に参入するテクノロジー企業のための包括的なブランドリフレッシュ。",
    details: "経営陣と密接に協力し、既存の顧客基盤との認知度を維持しながら、企業の拡大に向けた新しいブランドアイデンティティの開発をリード。市場調査、競合分析、ビジュアルアイデンティティのデザイン、そしてすべての接点における実装戦略を含むプロジェクトを実施しました。"
  },
  {
    id: 5,
    title: "短編映画シリーズ",
    category: "Video Production",
    image: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "都市の孤独をテーマにした物語性のある短編映画コレクション。",
    details: "人々に囲まれていながら完全な孤独を感じるという都市の孤独のパラドックスを探求した5本の短編映画シリーズ。監督と編集を担当し、混雑した空間と感情的な孤立を対比させる独特の視覚言語を開発。複数のインディペンデント映画祭で上映されました。"
  },
  {
    id: 6,
    title: "ARアプリケーション",
    category: "Mobile Development",
    image: "https://images.pexels.com/photos/5211430/pexels-photo-5211430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "都市環境をインタラクティブな遊び場に変えるARアプリ。",
    details: "このモバイルアプリは拡張現実を使用して都市空間にデジタル要素を重ね合わせ、普通の通りや公園を探検と遊びの場に変換します。コア体験を構想し、あらゆる年齢のユーザーに魅力的でありながら、一般的なモバイルデバイスでも利用可能な技術を維持するよう、クリエイティブチームの指揮を執りました。"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="projects" className="py-24 bg-blue-950 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
          Works
        </h2>
        <p className="text-blue-200 mb-16 max-w-2xl">
          様々な媒体や業界での経験を示す代表的なプロジェクトをご紹介します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-blue-900/50 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group"
              onClick={() => openProject(project)}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6">
                <p className="text-blue-300 text-sm mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-blue-100">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for project details */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/90 p-4">
            <div 
              className="bg-blue-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-64 object-cover"
                />
                <button 
                  className="absolute top-4 right-4 bg-blue-950/80 text-white p-2 rounded-full hover:bg-blue-800 transition-colors"
                  onClick={closeProject}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <p className="text-blue-300 mb-2">{selectedProject.category}</p>
                <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-xl text-blue-100 mb-4">{selectedProject.description}</p>
                <p className="text-blue-200 leading-relaxed">{selectedProject.details}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;