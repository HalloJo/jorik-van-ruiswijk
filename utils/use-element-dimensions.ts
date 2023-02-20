import { createRef, RefObject, useMemo, useState } from "react";
import useIsomorphicLayoutEffect from "./use-isomorphic-layout-effect";

type IDimensions = { width: number; height: number };

export default function useElementDimensions<T extends HTMLElement>(
  ref?: RefObject<T>
): [IDimensions, RefObject<T>] {
  const [dimensions, setDimensions] = useState<IDimensions>(() => ({
    width: 0,
    height: 0,
  }));

  ref = useMemo(() => ref || createRef<T>(), [ref]);
  useIsomorphicLayoutEffect(() => {
    const observer = new ResizeObserver(() => {
      setDimensions({
        width: ref.current.scrollWidth,
        height: ref.current.scrollHeight,
      });
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return [dimensions, ref];
}
