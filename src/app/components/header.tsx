import Image from "next/image";

const Header = () => {
  return (
    <header className="mt-8 sm:bg-[#F85559] rounded-[50px]">
      <div className="relative flex flex-col sm:flex-row sm:justify-between sm:items-center sm:p-2 md:p-4">
        <a href="#" className="flex items-center sm:order-2">
          <img
            className="mr-2 object-cover w-8 "
            alt="logo"
            src="/images/logo.png"
          />
          <span className="brand-name md:text-white lg:text-2xl  text-black font-bold text-xl">
            Fruit Burst
          </span>
        </a>

        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          htmlFor="navbar-open"
          className="absolute right-0 mt-1 cursor-pointer sm:hidden"
        >
          <Image
            alt="menu-bar"
            src="/images/menu-bar.svg"
            width={30}
            height={30}
          />
        </label>

        <nav className="peer-checked:block hidden mt-4 sm:mt-0 sm:block sm:order-1">
          <ul className=" flex flex-col gap-y-4 sm:gap-y-0 sm:flex-row space-x-3 lg:space-x-6">
            <li className="nav-link border-b sm:border-0 ">
              <a href="#home" className="sm:text-white block cursor-pointer">
                Home
              </a>
            </li>
            <li className="nav-link border-b sm:border-0">
              <a href="#home" className="sm:text-white block cursor-pointer">
                About Us
              </a>
            </li>
            <li className="nav-link border-b sm:border-0">
              <a href="#home" className="sm:text-white block cursor-pointer">
                Shop
              </a>
            </li>
            <li className="nav-link border-b sm:border-0 ">
              <a href="#home" className="sm:text-white block cursor-pointer">
                All Fruits
              </a>
            </li>
          </ul>
        </nav>

        <div className="hidden sm:block mr-2 sm:order-3">
          <div className="flex justify-center items-center relative w-[220px] lg:w-[300px]">
            <input
              type="text"
              className="search-input bg-white rounded-[50px] p-3 outline-0 w-full"
              placeholder="Search here"
            />
            <button className="cursor-pointer absolute right-2">
              <Image
                alt="logo"
                src="/images/search.svg"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
