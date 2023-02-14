import React from "react";
import DownloadAds from "./DownloadAds";

function Download() {
  return (
    <div className="flex flex-col w-full card bg-base-300 rounded-box   ">
      {/* tild icon or path icon */}
      <img src={require("../img/Path 318.png")} alt="" className="w-[5rem px-[15rem] text-center mt-[1rem]" />
      {/* heading */}

        <span className="px-[15rem] text-center mt-[1rem]">
        <p className="text-4xl font-extralight">Download The Best Music </p>

        </span>
        <span className=" px-[15rem] text-center mt-[1rem]">
          <b className="text-5xl font-bold">App Now!</b>
        </span>
        <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[1rem]">
          Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
          Vestibulum ullamcorper volutpat varius.
        </span >
        {/* dowload ads */}
        <span className="grid h-20 place-items-center">
            <DownloadAds />
        </span>
    </div>
  );
}

export default Download;
