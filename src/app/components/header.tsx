import Image from "next/image";

const Header = () => {
  return (
    <header className="mt-4 sm:bg-[#F85559] rounded-[50px]">
      <div className="relative flex flex-col sm:flex-row sm:justify-between sm:items-center sm:p-4">
        <a href="#" className="flex items-center">
          <Image
            className="mr-2 object-cover"
            alt="logo"
            src="/images/logo.png"
            width={50}
            height={60}
          />
          <span className="brand-name sm:text-white font-bold text-4xl">
            Fruit Burst
          </span>
        </a>

        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          htmlFor="navbar-open"
          className="absolute right-0 mt-2.5 cursor-pointer sm:hidden"
        >
          <Image
            alt="menu-bar"
            src="/images/menu-bar.svg"
            width={40}
            height={40}
          />
        </label>

        <nav className="peer-checked:block hidden mt-4 sm:mt-0 sm:block">
          <ul className=" flex flex-col gap-y-4 sm:flex-row sm:gap-x-8 sm:ml-5">
            <li className="nav-link border-b sm:border-0">
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

        <div className="hidden sm:block sm:mr-2">
          <div className="flex justify-center items-center relative w-[300px]">
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
