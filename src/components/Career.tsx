import { useEffect, useRef } from 'react';

type CareerStep = {
  company: string;
  period: string;
  position: string;
  description: string;
};

const careerSteps: CareerStep[] = [
  {
    company: 'KDDI',
    period: '現在',
    position: 'AIコンサルタント',
    description: '様々な事業部門に対してAI戦略のコンサルティングと実装指導を提供しています。'
  },
  {
    company: 'stu',
    period: '2022-2023',
    position: 'クリエイティブディレクター',
    description: '最新技術を活用したデジタルプロダクトやエクスペリエンスのクリエイティブディレクションを担当。'
  },
  {
    company: 'DMM',
    period: '2020-2022',
    position: 'XRコンテンツディレクター',
    description: 'XRコンテンツの制作とイマーシブエンターテインメント体験の戦略立案を担当。'
  },
  {
    company: 'フリーランス',
    period: '2018-2020',
    position: 'ビデオディレクター',
    description: '様々なクライアントに向けて、ナラティブな映像コンテンツの制作とディレクションを担当。'
  },
  {
    company: '映像プロダクション',
    period: '2016-2018',
    position: 'エディター',
    description: 'CM・プロモーション映像の編集を担当し、ビジュアルストーリーテリングの基礎を確立。'
  }
];

const Career = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-x-20', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    timelineItemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (timelineRef.current) observer.unobserve(timelineRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      timelineItemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="career" className="py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-16 tracking-tight opacity-0 translate-y-8 transition-all duration-1000"
        >
          職歴
        </h2>

        <div 
          className="relative"
          ref={timelineRef}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-blue-400/30 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          {careerSteps.map((step, index) => (
            <div 
              key={index}
              className={`relative mb-16 opacity-0 transition-all duration-700 ${
                index % 2 === 0 ? 'md:translate-x-20' : 'md:-translate-x-20'
              }`}
              ref={el => timelineItemRefs.current[index] = el}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                <div className="md:w-1/2 flex flex-col items-center md:items-end pr-8 md:pr-16">
                  <div className={`bg-blue-700 p-6 rounded-lg shadow-xl max-w-md ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <h3 className="text-2xl font-bold text-white mb-1">{step.company}</h3>
                    <p className="text-blue-300 mb-3">{step.period}</p>
                    <p className="text-xl text-white mb-2">{step.position}</p>
                    <p className="text-blue-100">{step.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 mt-0 md:mt-6">
                  <div className="w-4 h-4 rounded-full bg-blue-300 border-4 border-blue-700"></div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;