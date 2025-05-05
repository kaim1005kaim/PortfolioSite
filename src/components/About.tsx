import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-blue-950 text-white">
      <div className="container mx-auto px-6">
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 delay-300"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/4560080/pexels-photo-4560080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Kai Etori" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div 
              ref={textRef}
              className="opacity-0 translate-y-8 transition-all duration-1000 delay-500"
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-300">
                餌取 凱
              </h3>
              <p className="text-xl text-blue-100 mb-2">
                生年月日：1992年10月5日
              </p>
              <p className="text-xl text-blue-100 mb-6">
                クリエイティブディレクター
              </p>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                映像プロダクションでエディターとして経験を積んだ後、VRコンテンツの制作に携わり、
                XR領域のコンテンツディレクションを担当。その後、事業戦略やAIコンサルティングなど、
                幅広い分野でエンターテインメントを軸に活動しています。
              </p>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                常に新しい技術とクリエイティブの可能性を追求し、革新的なデジタルエクスペリエンスの
                創造に取り組んでいます。
              </p>
              
              <p className="italic text-blue-200">
                "面白いものを作るのが好き"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;