import SocialLinkMember from "app/components/SocialLinkMember";
import { ISocialLink } from "types/type";

interface SocialLinksProps {
  socialLinks: ISocialLink[];
}

const SocialLinks = ({ socialLinks }: SocialLinksProps) => {
  if (socialLinks.length <= 0) return null;

  const renderSocialLinks = (socialLinks: ISocialLink[]) =>
    socialLinks.map((socialLink: ISocialLink) => (
      <SocialLinkMember socialLink={socialLink} />
    ));

  return (
    <ul className=" flex gap-x-3 justify-center md:mt-3 mt-2">
      {renderSocialLinks(socialLinks)}
    </ul>
  );
};

export default SocialLinks;
