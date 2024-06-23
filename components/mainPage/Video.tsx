"use client";
import { useState } from "react";
import { CiVolumeHigh } from "react-icons/ci";
import { CiVolumeMute } from "react-icons/ci";

// const myVideo =
//   "https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/Rolex%20Air-King-VxzJ3a43GdiUk8fxgyiP8vmUwGTtL2.mp4";
const myVideo = "https://www.youtube.com/watch?v=nyaBARDPqGQ";

export default function Video() {
  const [muted, setMuted] = useState(true);
  return (
    <div className="relative  flex justify-center">
      <video
        onClick={() => setMuted((muted) => !muted)}
        src={myVideo}
        autoPlay
        muted={muted}
        loop
        className="w-full h-auto"
      />
      <p
        className="absolute right-5 bottom-12 text-2xl text-white"
        onClick={() => setMuted((muted) => !muted)}
      >
        {muted ? <CiVolumeMute /> : <CiVolumeHigh />}
      </p>
    </div>
  );
}
