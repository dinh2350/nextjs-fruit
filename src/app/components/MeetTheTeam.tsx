import TeamMembers from "app/components/TeamMembers";
import data from "data.json";

const MeetTheTeam = () => {
  const { teamMembers } = data;

  return (
    <div className="relative my-25">
      <div className="absolute z-10 bg-black/70 w-full h-full rounded-xl"></div>
      <div>
        <img
          className="block sm:hidden w-full h-full object-cover"
          src="/images/bg-meet-team-mobile.png"
          alt=""
        />
        <img
          className="hidden sm:block w-full h-full object-cover"
          src="/images/bg-meet-team.png"
          alt=""
        />
      </div>
      <div className="absolute flex flex-col justify-self-center top-0 py-7 md:w-[80%] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-center text-white z-30 ">
        <h3 className="hidden md:block xl:text-4xl md:text-2xl font-bold md:mb-2 xl:mb-7">
          Meet the team section
        </h3>
        <h3 className="block md:hidden text-xl font-bold mb-3 ">
          Meet the team
        </h3>
        <p className="mb-2 xl:text-xl text-sm xl:mb-9 w-[80%] mx-auto">
          Contrary to popular belief, is not simply random text. It has roots in
          a piece of classical Latin listerature from 45 BC, making it over 2000
          years old.
        </p>
        <TeamMembers teamMembers={teamMembers} />
      </div>
    </div>
  );
};

export default MeetTheTeam;
