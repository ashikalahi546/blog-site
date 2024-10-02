import Image from "next/image";
import { recentTrendData } from "../data/RecentTrendData";
import BlogAnimation from "../blogAnimation/BlogAnimation";
import AnimateButton from "../animateButton/AnimateButton";
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import ContentChoice from "../contentChoice/ContentChoice";

const RecentPosts = () => {
  const recentData = [
    {
      id: 1,
      title: "Are We Ready for Breakthroughs in AI?",
    },
    {
      id: 2,
      title: "Automated Emotion Recognition: The Algorithm",
    },
    {
      id: 3,
      title: "How Machines are Reshaping the News Industry",
    },
    {
      id: 4,
      title: "The Neuroethics of Brain-Computer Interfaces",
    },
    {
      id: 5,
      title: "Neuroplasticity and AI: Enhancing Brain Function",
    },
  ];

  const followUs = [
    {
      id: 1,
      icon: <GrFacebookOption />,
      like: "3k",
      name: "Like",
    },
    {
      id: 2,
      icon: <RiTwitterXLine />,
      like: "3k",
      name: "Followers",
    },
    {
      id: 3,
      icon: <FaYoutube />,
      like: "700",
      name: "Followers",
    },
    {
      id: 4,
      icon: <FaInstagram />,
      like: "3k",
      name: "Followers",
    },
  ];

  return (
    <div className="my-14 grid grid-cols-3 gap-x-8">
      <div className="col-span-2">
        <div className="flex items-center ">
          <h1 className="text-3xl font-semibold">Recent Posts</h1>
          <h4 className="text-base text-gray-500 mx-5">Stay up-to-date</h4>
          <div className="w-5/12 border-y pb-0.5"></div>
          <div className="w-14 border-y pb-0.5 border-gray-700 ml-5"></div>
        </div>
        <div className="flex flex-col gap-3 mt-6">
          {recentData?.map((recent) => (
            <div key={recent?.id}>
              <div className="flex items-center gap-x-3 ">
                <h5 className="text-[#EB472B] text-lg font-medium">
                  {recent?.id}.
                </h5>
                <h1 className="hover:text-[#EB472B] duration-300 text-lg font-semibold cursor-pointer">
                  {recent?.title}
                </h1>
              </div>
              <div className="w-full border-b pb-3"> </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 mt-12">
          {recentTrendData[0]?.recentData?.map((recentTrend, idx) => (
            <div
              key={idx}
              className={` group relative cursor-pointer  ${
                idx === 0 ? "col-span-2 row-span-2" : " col-span-1 row-span-1"
              }`}
            >
              <div className="overflow-hidden  ">
                <Image
                  src={recentTrend?.image}
                  alt="loading...?"
                  width={849}
                  height={316}
                  className="h-full w-full  transition-transform duration-1000  ease-in-out group-hover:scale-110  object-fill "
                />
              </div>
              <div className="absolute inset-0 bg-black/50 text-white ">
                <div className="absolute bottom-7  flex flex-col justify-center items-center w-full px-5">
                  <div className="mb-3">
                    {recentTrend?.trend && (
                      <AnimateButton
                        animateButton={recentTrend.trend}
                        paddingChange={`uppercase font-bold`}
                      />
                    )}
                  </div>
                  {
                    <BlogAnimation
                      space={`flex flex-col items-center justify-center text-center space-y-3`}
                      title={recentTrend?.title}
                      textSize={` text-center`}
                      des={recentTrend?.name}
                      date={recentTrend?.date}
                      comment={recentTrend?.comment}
                    />
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="h-80 border flex justify-center items-center ">
          <div className="relative cursor-pointer">
            <Image
              src="/images/bg-banner-ai.jpg"
              width={318}
              height={249}
              alt="loading...?"
            />
            <div className="absolute top-1/3 left-24">
              <div className="flex flex-col justify-center items-center gap-y-4">
                <Image
                  src="/images/Logo-dark.webp"
                  width={150}
                  height={40}
                  alt="loading...?"
                  className="w-auto h-auto max-w-[150px] max-h-[40px]"
                />
                <button className="text-white bg-[#E93314] px-6 py-2.5 uppercase text-xs font-medium rounded-full duration-300 transition-all hover:text-gray-600 hover:bg-white">
                  buy theme
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-14">
          <ContentChoice choice={"Follow Us"} />
          <div className="grid grid-cols-4 gap-5   mt-8 place-items-center">
            {followUs?.map((follow, iconIndex) => (
              <div
                key={iconIndex}
                className="cursor-pointer group z-10 flex flex-col items-center justify-center gap-2"
              >
                <button
                  className={`group-hover:-translate-y-2 text-2xl transition-transform hover:opacity-80  duration-700
                                            ${
                                              iconIndex === 0
                                                ? "text-[#3b5998]"
                                                : iconIndex === 1
                                                ? "text-[#00aced]"
                                                : iconIndex === 2
                                                ? "text-[#ff0000]"
                                                : iconIndex === 3
                                                ? "text-[#C862DC]"
                                                : ""
                                            } `}
                >
                  {follow?.icon}
                </button>
                <h4 className="text-lg font-medium">{follow?.like}</h4>
                <p className="text-xs text-gray-500">{follow?.name}</p>
              </div>
            ))}
          </div>
          <div className="w-full border-b my-14"></div>
        </div>
        <div className="">
          <ContentChoice choice={"Editor's choice"} />
          <div>
            {recentTrendData[0]?.recentTrendChild?.map((recentChild, edx) => (
              <div
                key={edx}
                className="cursor-pointer mt-[30px] group flex items-center justify-center w-full gap-x-3"
              >
                <div
                  className={`h-28  w-[150px] overflow-hidden ${edx === 0 && "w-[170px]"}`}
                >
                  <Image
                    src={recentChild?.image}
                    alt="loading...?"
                    width={112}
                    height={112}
                    className="w-full h-full transition-transform duration-1000  ease-in-out group-hover:scale-110  object-fill"
                  />
                </div>
                <div>
                 <BlogAnimation  title={recentChild?.title}  textSize={`text-base`} des={recentChild?.name} date={recentChild?.date} comment={recentChild?.comment}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
