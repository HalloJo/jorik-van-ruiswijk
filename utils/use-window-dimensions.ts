import { useState } from "react";
import useIsomorphicLayoutEffect from "./use-isomorphic-layout-effect";

type IDimensions = [width: number, height: number];

export default function useWindowDimensions(): IDimensions {
  const [dimensions, setDimensions] = useState<IDimensions>(() => [0, 0]);

  useIsomorphicLayoutEffect(() => {
    const update = () => {
      setDimensions([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return dimensions;
}
