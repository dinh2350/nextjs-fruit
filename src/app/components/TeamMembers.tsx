import Member from "app/components/Member";
import { ITeamMember } from "types/type";

interface TeamMembersProps {
  teamMembers: ITeamMember[];
}

const TeamMembers = ({ teamMembers }: TeamMembersProps) => {
  if (teamMembers.length <= 0) return null;

  const renderMembers = (teamMembers: ITeamMember[]) =>
    teamMembers.map((teamMember: ITeamMember) => (
      <Member teamMember={teamMember} key={teamMember.id} />
    ));

  return (
    <div className="flex flex-col md:flex-row justify-center md:mt-1 mt-5 gap-y-6">
      {renderMembers(teamMembers)}
    </div>
  );
};

export default TeamMembers;
