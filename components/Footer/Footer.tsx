import { LinkedinIcon } from "lucide-react";
import GithubIcon from "../Icons/GithubIcon";
import InstagramIcon from "../Icons/InstagramIcon";

const SOCIALS = [
  {
    name: "Github",
    icon: GithubIcon,
    url: "https://github.com/Biolater",
  },
  {
    name: "Linkedin",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/murad-yusubov-1518b1271/",
    noFill: true,
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/mury.ash/",
  },
];

const Footer = () => {
  return (
    <footer className="footer px-4 border-t border-border py-6">
      <div className="text-center px-4 flex gap-6 flex-col sm:flex-row items-center justify-between bg-primary rounded-lg py-6  md:px-8 container  max-w-7xl mx-auto text-background">
        <p className="text-sm order-1 sm:order-first font-medium sm:text-base lg:text-lg">
          &copy; 2024 Murad Yusubov. All rights reserved.
        </p>
        <div className="socials">
          <h2 className="text-3xl font-semibold mb-1">Socials</h2>
          <div className="flex gap-4 ms-1 items-center">
            {SOCIALS.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon
                  className={`text-background ${
                    !social.noFill && "fill-background"
                  } size-6`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
