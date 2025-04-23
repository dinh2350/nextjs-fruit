const Banner = () => {
  return (
    <div>
      <div
        id="default-carousel"
        className="relative mt-8 w-full"
        data-carousel="slide"
      >
        <div className="absolute z-10 bg-gradient-to-b from-black/60 via-black/40 to-transparent w-full h-full rounded-2xl"></div>

        <div className="relative overflow-hidden rounded-lg h-56 md:h-96 w-full ">
          <div className="duration-700 ease-in-out " data-carousel-item>
            <img
              src="/images/carousel/banner.png"
              className="absolute z-0 w-full h-full object-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>

        <div className="absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 text-white ">
          <h1 className=" md:text-5xl font-bold text-center text-xl">
            Exotic tastes at your
            <br />
            doorstep
          </h1>
          <p className="mt-4 text-sm md:text-xl text-center">
            We supply highly quality organic products
          </p>
          <div className="flex justify-center">
            <button className=" mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>

        <button
          type="button"
          className="absolute px-2 top-1/2 left-0 start-0 z-30 flex items-center justify-center cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full bg-neutral-800 hover:bg-neutral-600">
            <svg
              className="w-2 h-2 md:w-3 md:h-3 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-0 end-0 z-30 flex items-center justify-center px-2 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full bg-neutral-800 hover:bg-neutral-600">
            <svg
              className="w-2 h-2 md:w-3 md:h-3 text-white :rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="relative hidden md:block -mt-10 z-20 max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex flex-col items-center ">
            <img
              src="/images/strawberry.png"
              className="w-[60%]"
              alt="Grapes"
            />
            <span className="mt-2 text-sm text-gray-800">Strawberry</span>
          </div>
          <div className="flex flex-col items-center ">
            <img src="/images/orange.png" className="w-[60%]" alt="Orange" />
            <span className="mt-2 text-sm text-gray-800">Orange</span>
          </div>
          <div className="flex flex-col items-center ">
            <img src="/images/mango.png" className="w-[60%]" alt="Mango" />
            <span className="mt-2 text-sm text-gray-800">Mango</span>
          </div>
          <div className="flex flex-col items-center ">
            <img
              src="/images/strawberry-2.png"
              className="w-[60%]"
              alt="Strawberry"
            />
            <span className="mt-2 text-sm text-gray-800">Strawberry</span>
          </div>
          <div className="flex flex-col items-center ">
            <img src="/images/mango-2.png" className="w-[60%]" alt="Mango" />
            <span className="mt-2 text-sm text-gray-800">Mango</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
