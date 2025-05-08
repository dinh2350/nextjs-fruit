import { ISocialLink } from "types/type";

interface SocialLinkMemberProps {
  socialLink: ISocialLink;
}
const SocialLinkMember = ({ socialLink }: SocialLinkMemberProps) => {
  return (
    <li>
      <a className="cursor-pointer" href={socialLink.link}>
        <img
          className="lg:w-7 lg:h-7 w-5 h-5 p-1 bg-[#F85559] rounded-full"
          src={socialLink.imageIconSrc}
          alt=""
        />
      </a>
    </li>
  );
};

export default SocialLinkMember;
