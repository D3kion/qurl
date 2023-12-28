"use client";

import { useEffect, useRef, useState } from "react";
import p5 from "p5";
import TOPOLOGY from "vanta/dist/vanta.topology.min";

export default function HeroBG() {
  const [effect, setEffect] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!effect)
      setEffect(
        TOPOLOGY({
          el: ref.current,
          p5: p5,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xea580c,
          backgroundColor: 0x0,
        })
      );

    return () => effect && effect.destroy();
  }, []);

  return <div ref={ref} className="absolute inset-x-0 top-0 h-full -z-50" />;
}
