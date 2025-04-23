const Footer = () => {
  return (
    <div className="bg-black pt-5">
      <div className="flex justify-center items-center">
        <img
          className="mr-2 object-cover w-[35px]"
          alt="logo"
          src="/images/logo.png"
        />
        <span className="brand-name text-white font-bold text-3xl">
          Fruit Burst
        </span>
      </div>
      <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4 px-4 mt-7">
        <li>
          <a className="text-white" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="text-white" href="#">
            About Us
          </a>
        </li>
        <li>
          <a className="text-white" href="#">
            Shop
          </a>
        </li>
        <li>
          <a className="text-white" href="#">
            All Fruits
          </a>
        </li>
        <li>
          <a className="text-white" href="#">
            Support
          </a>
        </li>
        <li>
          <a className="text-white" href="#">
            My Account
          </a>
        </li>
      </ul>
      <ul className="flex justify-center mt-7 pb-7 gap-x-6">
        <li>
          <a href="#">
            <img className="" src="/images/twitter.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="" src="/images/facebook.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="" src="/images/youtube.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="" src="/images/in.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="" src="/images/instagram.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="" src="/images/apple.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
