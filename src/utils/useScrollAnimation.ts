import { useEffect, useRef, RefObject } from 'react';

export type AnimationSettings = {
  threshold?: number;
  rootMargin?: string;
  fadeIn?: boolean;
  slideIn?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
};

const defaultSettings: AnimationSettings = {
  threshold: 0.1,
  rootMargin: '0px',
  fadeIn: true,
  slideIn: 'up',
  delay: 0,
  duration: 800,
};

export function useScrollAnimation<T extends HTMLElement>(
  settings: AnimationSettings = {}
): RefObject<T> {
  const ref = useRef<T>(null);
  const mergedSettings = { ...defaultSettings, ...settings };

  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;
    
    // Set initial styles
    if (mergedSettings.fadeIn) {
      currentRef.style.opacity = '0';
    }
    
    if (mergedSettings.slideIn) {
      let transform = '';
      
      switch (mergedSettings.slideIn) {
        case 'up':
          transform = 'translateY(30px)';
          break;
        case 'down':
          transform = 'translateY(-30px)';
          break;
        case 'left':
          transform = 'translateX(30px)';
          break;
        case 'right':
          transform = 'translateX(-30px)';
          break;
      }
      
      currentRef.style.transform = transform;
    }
    
    currentRef.style.transition = `opacity ${mergedSettings.duration}ms ease, transform ${mergedSettings.duration}ms ease`;
    currentRef.style.transitionDelay = `${mergedSettings.delay}ms`;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (mergedSettings.fadeIn) {
              entry.target.style.opacity = '1';
            }
            
            if (mergedSettings.slideIn) {
              entry.target.style.transform = 'translate(0, 0)';
            }
            
            // Once the animation is triggered, we can stop observing
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: mergedSettings.threshold,
        rootMargin: mergedSettings.rootMargin,
      }
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [mergedSettings]);
  
  return ref;
}