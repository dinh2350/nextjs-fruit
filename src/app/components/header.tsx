import Image from "next/image";

const Header = () => {
  return (
    <div className="header flex justify-between mt-[30px] bg-[#F85559] p-4 rounded-[50px]">
      <ul className="nav flex justify-center items-center">
        <li className="nav-link ml-6 ">
          <a href="#home" className="text-white">
            Home
          </a>
        </li>
        <li className="nav-link ml-6 ">
          <a href="#home" className="text-white">
            About Us
          </a>
        </li>
        <li className="nav-link ml-6">
          <a href="#home" className="text-white">
            Shop
          </a>
        </li>
        <li className="nav-link ml-6 ">
          <a href="#home" className="text-white">
            All Fruits
          </a>
        </li>
      </ul>
      <div className="brand flex justify-center items-center">
        <Image
          className="mr-2 object-cover"
          alt="logo"
          src="/images/logo.png"
          width={50}
          height={60}
        />
        <span className="brand-name text-white font-bold text-4xl">
          Fruit Burst
        </span>
      </div>
      <div className="search-bar flex justify-center items-center relative w-[300px]">
        <input
          type="text"
          className="search-input bg-white rounded-[50px] p-3 outline-0 w-full"
          placeholder="Search here"
        />
        <button className="cursor-pointer absolute right-2">
          <Image alt="logo" src="/images/search.svg" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;
