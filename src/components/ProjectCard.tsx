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
  tech?: string[];
  github?: string;
  demo?: string;
  image?: string;
}> = ({
  title,
  year,
  image,
  description,
  tech,
  github,
  demo,
}: {
  title: string;
  description: string;
  image?: string;
  year: string;
  tech?: string[];
  github?: string;
  demo?: string;
}) => {
  return (
    <Card className="hover:scale-110 duration-300">
      <CardHeader>
        <p
          className={`text-center font-extrabold lg:text-start ${
            year >= "2023"
              ? "text-violet-600 dark:text-violet-400"
              : "text-amber-600 dark:text-amber-400"
          }`}
        >
          {year}
        </p>
        <CardTitle className="text-center lg:text-start">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <img src={image} className="h-48 rounded-sm" alt="" />
        <CardDescription className="text-base text-center lg:text-justify">
          {description}
        </CardDescription>
        {tech && (
          <p className="text-sm">
            <strong>Made using: </strong>
            {tech?.join(", ")}
          </p>
        )}
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
              Live Website
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
