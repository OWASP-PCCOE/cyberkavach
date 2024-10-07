import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations/index.js";
import './PreLoader.css'

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span><img src="/cyber-font-6.png" className="text-[10px]" alt="error" /></span>
      </div>
    </div>
  );
};

export default PreLoader;