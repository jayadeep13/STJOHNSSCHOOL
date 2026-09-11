"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CONFIG = `{"version":1,"model":{"scale":1},"background":{"enabled":false,"color":"#0a0a0f"},"camera":{"fov":45,"height":9,"distance":100},"lighting":{"brightness":100,"rotation":0,"fill":0},"environment":null,"preset":{"type":"gemSmoke","params":{"base":"#2a0a06","mid":"#ff5a1f","flare":"#ffe6a8","core":"#120704","body":78,"innerGlow":100,"outerGlow":100,"innerSwirl":100,"outerSwirl":85,"size":46,"relief":100,"depth":100,"angle":0,"speed":16,"scale":78},"seed":24301},"material":{"type":"original","params":{}},"effects":[],"animation":{"enabled":false,"entries":[{"id":"rotation","type":"rotation","enabled":true,"trigger":"auto","threshold":0.4,"loop":true,"params":{"duration":8,"angle":360,"axisX":0,"axisY":1,"axisZ":0}},{"id":"float","type":"float","enabled":false,"trigger":"auto","threshold":0.4,"loop":true,"params":{"duration":4,"height":30,"tilt":25}},{"id":"orbit","type":"orbit","enabled":false,"trigger":"scroll","threshold":0.4,"loop":false,"params":{"duration":6,"radius":60,"rise":140,"turns":2,"dip":25,"align":true,"lean":60}},{"id":"pulse","type":"pulse","enabled":false,"trigger":"hover","threshold":0.4,"loop":true,"params":{"duration":3,"amount":12}},{"id":"entrance","type":"entrance","enabled":false,"trigger":"appear","threshold":0.4,"loop":false,"params":{"duration":0.9,"rise":35,"scale":80,"tilt":0,"ease":100,"overshoot":true}},{"id":"disturb","type":"disturb","enabled":false,"trigger":"hover","threshold":0.4,"loop":false,"params":{"duration":8,"force":55,"size":30,"reach":70}},{"id":"wave","type":"wave","enabled":false,"trigger":"hover","threshold":0.4,"loop":false,"params":{"duration":6,"force":55,"size":30,"angle":0,"tilt":25}},{"id":"ripple","type":"ripple","enabled":false,"trigger":"hover","threshold":0.4,"loop":false,"params":{"duration":6,"force":55,"size":68,"rings":3}},{"id":"sweep","type":"sweep","enabled":false,"trigger":"hover","threshold":0.4,"loop":true,"params":{"duration":3,"drift":45,"band":35,"glare":55}},{"id":"unfurl","type":"unfurl","enabled":false,"trigger":"appear","threshold":0.4,"loop":false,"params":{"duration":2.2,"stagger":65,"bulge":35}},{"id":"clip","type":"clip","enabled":false,"trigger":"scroll","threshold":0.4,"loop":false,"params":{"duration":18,"from":0,"to":100}},{"id":"curl","type":"curl","enabled":false,"trigger":"scroll","threshold":0.4,"loop":false,"params":{"duration":4,"angle":100,"start":55,"flip":false}},{"id":"rgbShift","type":"rgbShift","enabled":false,"trigger":"hover","threshold":0.4,"loop":true,"params":{"duration":0.35,"strength":50}},{"id":"grain","type":"grain","enabled":false,"trigger":"hover","threshold":0.4,"loop":true,"params":{"duration":0.35,"strength":45,"detail":50,"radius":25}}]},"interactions":{"sensitivity":50,"momentum":50,"draggable":true,"snapBack":false,"maxRotation":30,"cursorFollow":false,"zoom":true,"zoomRange":50},"post":{"bloom":{"enabled":false,"intensity":55,"threshold":45,"radius":55,"flare":60,"streak":55}}}`;

export default function SparkModel({ style }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Script type="module" src="https://www.thrine.app/embed/v1.js" strategy="afterInteractive" />
      {mounted && (
        <model-embed
          src="https://pub-eef027e83d7c4fc7aa28c9dcd06d7f89.r2.dev/models/templates/sakura-13888fd06a.glb"
          alt="A glowing ember — the spark of hope kindled in a child's life"
          style={style}
        >
          <script type="application/json" dangerouslySetInnerHTML={{ __html: CONFIG }} />
        </model-embed>
      )}
    </>
  );
}
