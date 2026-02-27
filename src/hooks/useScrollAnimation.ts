import { useEffect, useRef } from "react";

/**
 * Hook que detecta quando um elemento entra na viewport
 * e aplica classe de animação via Intersection Observer.
 * Reutilizável em qualquer componente.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  animationClass: string = "scroll-fade-up",
  threshold: number = 0.15
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add(animationClass);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animationClass, threshold]);

  return ref;
}
