import InteractiveSvg from "../../utils/InteractiveSvg";

export default function OurServices() {
  return (
    <div className="px-2 py-8 md:py-16 lg:py-24">
      <h1 className="mb-6 text-4xl font-extrabold sm:ml-10 sm:text-5xl md:mb-8 md:text-6xl lg:pb-10 lg:text-7xl 2xl:ml-24 2xl:text-8xl">
        Our Services
      </h1>
      <div className="mx-auto grid place-items-center gap-x-1 gap-y-4 max-xl:max-w-screen-lg md:grid-cols-2 xl:max-w-[1390px] xl:grid-cols-3">
        <div className="flex h-[191px] w-[100%] cursor-pointer flex-col items-center justify-center gap-y-2 rounded-xl bg-[#DEDEDE] hover:bg-gray-400 min-[450px]:w-[410px] md:w-[370px] min-[850px]:w-[410px]">
          <svg
            className="size-10 fill-[#292929]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z" />
          </svg>
          <h1 className="">Dispatching</h1>
          <p className="">From 5% of gross</p>
        </div>
        <div className="flex h-[191px] w-[100%] cursor-pointer flex-col items-center justify-center gap-y-2 rounded-xl bg-[#DEDEDE] hover:bg-gray-400 min-[450px]:w-[410px] md:w-[370px] min-[850px]:w-[410px]">
          <svg
            className="size-10 fill-[#292929]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
          </svg>
          <h1 className="">Support 24/7</h1>
          <p className="">From 5% of gross</p>
        </div>
        <div className="flex h-[191px] w-[100%] cursor-pointer flex-col items-center justify-center gap-y-2 rounded-xl bg-[#DEDEDE] hover:bg-gray-400 min-[450px]:w-[410px] md:w-[370px] min-[850px]:w-[410px]">
          <svg
            className="size-10 fill-[#292929]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80c-43.4 0-78.7 34.5-80 77.5L136.2 151.1C121.7 136.8 101.9 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6L259.7 407.8c-2.4 7.6-3.7 15.8-3.7 24.2c0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4l37.8-207.7zM156.3 232.2c2.2-6.9 3.5-14.2 3.7-21.7l183.8-73.5c3.6 3.5 7.4 6.7 11.6 9.5L317.6 354.1c-5.5 1.3-10.8 3.1-15.8 5.5L156.3 232.2z" />
          </svg>
          <h1 className="">Rate Negotiations</h1>
          <p className="">From 5% of gross</p>
        </div>
        <div className="flex h-[191px] w-[100%] cursor-pointer flex-col items-center justify-center gap-y-2 rounded-xl bg-[#DEDEDE] hover:bg-gray-400 min-[450px]:w-[410px] md:w-[370px] min-[850px]:w-[410px]">
          <svg
            className="size-10 fill-[#292929]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M251.7 127.6s0 0 0 0c10.5 10.5 24.7 16.4 39.6 16.4L448 144c8.8 0 16 7.2 16 16l0 32L48 192l0-96c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l33.9-33.9L208.8 84.7l42.9 42.9zM48 240l416 0 0 176c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-176zM285.7 93.7L242.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L291.3 96c-2.1 0-4.2-.8-5.7-2.3z" />
          </svg>
          <h1 className="">Document Management & Paperwork</h1>
          <p className="">From 5% of gross</p>
        </div>
        <div className="flex h-[191px] w-[100%] cursor-pointer flex-col items-center justify-center gap-y-2 rounded-xl bg-[#DEDEDE] hover:bg-gray-400 min-[450px]:w-[410px] md:w-[370px] min-[850px]:w-[410px]">
          <InteractiveSvg />
          <h1 className="">Factoring Service</h1>
          <p className="">From 5% of gross</p>
        </div>
        <div className="flex h-[191px] w-[100%] cursor-pointer flex-col items-center justify-center gap-y-2 rounded-xl bg-[#DEDEDE] hover:bg-gray-400 min-[450px]:w-[410px] md:w-[370px] min-[850px]:w-[410px]">
          <svg
            className="size-10 fill-[#292929]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M48.1 240c-.1 2.7-.1 5.3-.1 8l0 16c0 2.7 0 5.3 .1 8L32 272c-17.7 0-32 14.3-32 32s14.3 32 32 32l28.3 0C89.9 419.9 170 480 264 480l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0c-57.9 0-108.2-32.4-133.9-80L256 336c17.7 0 32-14.3 32-32s-14.3-32-32-32l-143.8 0c-.1-2.6-.2-5.3-.2-8l0-16c0-2.7 .1-5.4 .2-8L256 240c17.7 0 32-14.3 32-32s-14.3-32-32-32l-125.9 0c25.7-47.6 76-80 133.9-80l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0C170 32 89.9 92.1 60.3 176L32 176c-17.7 0-32 14.3-32 32s14.3 32 32 32l16.1 0z" />
          </svg>
          <h1 className="">Billing</h1>
          <p className="">From 5% of gross</p>
        </div>
      </div>
    </div>
  );
}
