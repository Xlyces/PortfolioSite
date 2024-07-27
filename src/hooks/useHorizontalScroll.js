import { useEffect } from "react";

export function useHorizontalScroll(elRef) {
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (
          // If scroll is horizontal.
          e.deltaY === 0 ||
          // If scrolling up while at start of scroll.
          (el.scrollLeft === 0 && e.deltaY < 0) ||
          // If scrolling down while at end of scroll.
          (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1 && e.deltaY > 0)
        )
          // Do nothing (use default behaviour).
          return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [elRef]);
}
