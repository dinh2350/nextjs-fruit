interface BtnProps {
  name: string;
}

const Button = ({ name }: BtnProps) => {
  return (
    <button className="px-8 py-4 bg-[#F85559] hover:bg-red-600 text-white font-bold rounded-xl text-xl cursor-pointer">
      {name}
    </button>
  );
};

export default Button;
