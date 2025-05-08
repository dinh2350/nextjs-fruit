import SocialLinks from "app/components/SocialLinks";
import { ITeamMember } from "types/type";

interface MemberProps {
  teamMember: ITeamMember;
}

const Member = ({ teamMember }: MemberProps) => {
  const { name, position, avatar, socialLinks } = teamMember;
  return (
    <div className="xl:mx-10 lg:mx-5">
      <div className="flex justify-center">
        <img className="object-cover lg:w-full w-[50%]" src={avatar} alt="" />
      </div>
      <span className="block text-md md:mt-2 mt-4">{name}</span>
      <span className="block md:mt-1 text-sm">{position}</span>
      <SocialLinks socialLinks={socialLinks} />
    </div>
  );
};

export default Member;
