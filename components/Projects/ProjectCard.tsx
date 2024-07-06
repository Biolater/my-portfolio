import { FC } from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";

type Props = {
  cardImg: StaticImageData;
  title: string;
  description: string;
  githubLink: string | null;
  demoLink: string;
};

const ProjectCard: FC<Props> = ({
  cardImg,
  title,
  description,
  githubLink,
  demoLink,
}) => {
  return (
    <Card className="w-full transition-all origin-bottom duration-300 hover:scale-[1.02]">
      <CardHeader className="p-0">
        <Image
          className="rounded-t-lg h-[227px] object-cover"
          src={cardImg}
          alt="project image"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-1">{description}</p>
        <div className="flex items-center justify-center gap-4 mt-4">
          {githubLink && (
            <Button asChild variant={"outline"}>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </Button>
          )}
          <Button asChild>
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
