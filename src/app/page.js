import BlogSection from "@/components/blogSection/BlogSection";
import Demo from "@/components/demo/Demo";
import BottomHeader from "@/components/header/bottomHeader/BottomHeader";
import Material from "@/components/material/Material";
import RecentPosts from "@/components/recentPosts/RecentPosts";
import RecentVideo from "@/components/recentVideo/RecentVideo";
import Slider from "@/components/slider/Slider";
import Trending from "@/components/trending/Trending";

export default function Home() {
  return (
    <>

      <div className="relative h-[663px]">
        <Slider />
      </div>
      <Demo />
      <BottomHeader />
      <div className=" w-[1200px] mx-auto">
        <BlogSection />
        <Material />
      </div>
      <Trending />
      <div className="w-[1200px] mx-auto">
        <RecentPosts />
      </div>
<RecentVideo/>
    </>

  );
}
