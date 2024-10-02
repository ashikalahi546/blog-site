"use client";
import Image from "next/image";
import { useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";

const RecentVideo = () => {
  const [current, setCurrent] = useState({
    image: "/images/video-ai1.jpg",
    videourl: "https://example.com/video1.mp4",
    id: 1,
    isPlaying: false,
  });

  const [isFading, setIsFading] = useState(false);

  // Function to handle video play
  const handlePlay = () => {
    setCurrent((prev) => ({ ...prev, isPlaying: true }));
  };

  // Function to handle switching between videos/images with smooth fade effect
  const handleClick = (item) => {
    // Trigger fade-out effect
    setIsFading(true);

    // After the fade-out transition ends, change the image and trigger fade-in
    setTimeout(() => {
      setCurrent({
        ...item, // Update the image and video URL
        isPlaying: false, // Reset to show image when a new video is selected
      });
      setIsFading(false); // Fade-in effect
    }, 500); // Match this timeout with the duration of the CSS transition
  };

  // Sample data for recent videos
  const recentVideoData = [
    {
      id: 1,
      title: "Sample Image 1",
      image: "/images/video-ai1.jpg",
      videourl: "https://example.com/video1.mp4",
    },
    {
      id: 2,
      title: "Sample Image 2",
      image: "/images/video-ai2.jpg",
      videourl: "https://example.com/video2.mp4",
    },
    {
      id: 3,
      title: "Sample Image 3",
      image: "/images/video-ai3.jpg",
      videourl: "https://example.com/video3.mp4",
    },
    {
      id: 4,
      title: "Sample Image 4",
      image: "/images/video-ai4.jpg",
      videourl: "https://example.com/video4.mp4",
    },
  ];

  return (
    <div className="bg-[#121418] py-24">
      <div className="w-[1200px] mx-auto cursor-pointer">
        <div className="relative h-[600px]">
          {/* Video or Image display with fade effect */}
          {current.isPlaying ? (
            <video
              key={current?.id}
              src={current?.videourl}
              controls
              autoPlay
              className="w-full h-full object-center transition-opacity duration-500 ease-in-out opacity-100"
            />
          ) : (
            // Image with smooth transition on click
            <div className={`relative transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              <Image
                src={current?.image}
                alt=""
                width={1200}
                height={650}
                className="object-center h-full"
                onClick={handlePlay}
              />

          {/* <div className="absolute top-0 w-full">
          <div className="h-[600px] flex flex-col justify-center items-center">
            <button
          
              className="bg-white size-14 rounded-full flex items-center justify-center hover:bg-[#E93314] 
                duration-300 hover:scale-125 hover:text-white transition-all"
            >
              <BsFillCaretRightFill />
            </button>
          </div>
   
    </div> */}
            </div>
          )}
        </div>

        {/* Video thumbnails with smooth transitions */}
        <div className="flex mt-4 space-x-4">
          {recentVideoData?.map((recentVideo) => (
            <div
              onClick={() => handleClick(recentVideo)}
              key={recentVideo?.id}
              className={`relative transition-transform duration-500 ease-in-out transform ${
                current.id === recentVideo.id ? "scale-105" : "scale-100"
              }`}
            >
              <Image
                src={recentVideo?.image}
                alt=""
                width={300}
                height={200}
                className="object-cover transition-opacity duration-500 ease-in-out"
              />
              <div
                className={`absolute inset-0 top-0 ${
                  current.id === recentVideo.id
                    ? "bg-black/50"
                    : "bg-[#121418]/20"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
</div>
    
     
      
  );
};

export default RecentVideo;
