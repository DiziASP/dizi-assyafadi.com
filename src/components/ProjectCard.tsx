import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideGithub } from "lucide-react";

const ProjectCard: React.FC<{
  title: string;
  year: string;
  description: string;
  github?: string;
  demo?: string;
  image?: string;
}> = ({
  title,
  year,
  image,
  description,
  github,
  demo,
}: {
  title: string;
  description: string;
  image?: string;
  year: string;
  github?: string;
  demo?: string;
}) => {
  return (
    <Card className="hover:scale-110 duration-300">
      <CardHeader>
        <p className="text-center lg:text-start text-fuchsia-600 dark:text-fuchsia-400">
          {year}
        </p>
        <CardTitle className="text-center lg:text-start">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <img src={image} className="h-48 rounded-sm" alt="" />
        <CardDescription className="text-center lg:text-start">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-row gap-2 justify-center lg:justify-normal">
        {github && (
          <a href={github}>
            <Button size="sm" className="gap-1">
              Github <LucideGithub size={16} />
            </Button>
          </a>
        )}
        {demo && (
          <a href={demo}>
            <Button size="sm" variant="outline" className="gap-1">
              Demo
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
