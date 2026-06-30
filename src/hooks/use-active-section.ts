import { useEffect, useState } from "react";

/**
 * Observa um conjunto de seções e retorna o id daquela atualmente
 * "no topo da viewport", levando em conta o header sticky.
 *
 * A estratégia é scrollspy: a seção ativa é a última (em ordem do DOM)
 * cujo topo já passou da linha logo abaixo do header. Isso é mais confiável
 * que IntersectionObserver com rootMargin pequeno para seções grandes e
 * mantém o indicador do header sincronizado ao clicar em links âncora.
 */
export function useActiveSection(ids: ReadonlyArray<string>): string {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const header = document.querySelector("header");
    const headerHeight = header ? header.getBoundingClientRect().height : 72;
    const margin = 24;
    const offset = headerHeight + margin;

    const updateActive = () => {
      const scrollY = window.scrollY;
      let current = "";

      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;

        const elementTop = element.getBoundingClientRect().top + scrollY;
        if (elementTop <= scrollY + offset) {
          current = id;
        } else {
          break;
        }
      }

      setActive(current);
    };

    updateActive();

    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [ids]);

  return active;
}
