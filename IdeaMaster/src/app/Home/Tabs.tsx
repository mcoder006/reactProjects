import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("");
    const params = useLocation();

    useEffect(() => {
        setActiveTab(params.hash);
    }, [params])
    
  return (
    <div className="items-center justify-center w-[90vw] mx-auto md:w-[50vw] flex">
      <div role="tablist" className="w-full tabs tabs-bordered">
        <a
          role="tab"
          className={`text-lg font-bold tab ${
            activeTab == "#hot" ? "tab-active" : ""
          }`}
          href="/#hot"
        >
          🔥 Hot
        </a>
        <a
          href="/#new"
          role="tab"
          className={`text-lg font-bold tab ${
            activeTab == "#new" ? "tab-active" : ""
          }`}
        >
          ✨ New
        </a>
        <a
          href="/#top"
          role="tab"
          className={`text-lg font-bold tab ${
            activeTab == "#top" ? "tab-active" : ""
          }`}
        >
          🏆 Top
        </a>
      </div>
    </div>
  );
}

export default Tabs