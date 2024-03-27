"use client";

import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import trailImage from "@/assets/images/trailImage.jpg";
import projectDetails from "@/assets/data/projectDetails";

interface DynamicProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: DynamicProps) {
  const router = useRouter();

  const project = projectDetails.find(
    (project) =>
      project.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  useEffect(() => {
    if (!project) {
      router.push("/");
    }
  }, [params.slug, project, router]);

  if (!projectDetails || !project) {
    return null;
  }

  return (
    <div className="p-5">
      <title>{`Projects | ${project.title}`}</title>
      <div className="flex gap-5 items-center justify-center ml-[-8rem] text-textColor pb-5">
        <Image
          src={project.titleImage || trailImage}
          alt={project.title}
          height={250}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <Typography variant="h1" className="uppercase">
            {project.title}
          </Typography>
          <div className="flex gap-6">
            <Button
              variant="contained"
              href={project.gitLink}
              className="text-white bg-textColor border-textColor hover:bg-white hover:text-textColor"
            >
              View Project
            </Button>
            <Image src={project.gitImage} alt="github" height={36.5}></Image>
          </div>
        </div>
      </div>
      <div className="flex gap-6 h-full">
        <div className="bg-gray-500 w-[25%] p-5 rounded-xl">
          <Stack direction={"column"} spacing={5}>
            <Typography variant="h6">Technologies Used:</Typography>

            {project.techUsed?.map((item, index) => (
              <div
                key={index}
                className="flex bg-white p-5 justify-center rounded-2xl"
              >
                <Typography variant="h6"> {item.tech}</Typography>
                <Image src={item.image} height={32} width={32} alt="logo" />
              </div>
            ))}
          </Stack>
        </div>
        <div className="w-full">
          <div className="h-fit bg-gray-500 p-5 rounded-xl">
            <Typography variant="h5">{`Description:`}</Typography>
            <hr />
            <Typography variant="body1">{project.desc}</Typography>
          </div>

          <div className="h-fit bg-gray-500 p-5 mt-3 rounded-xl">
            <Typography variant="h5">{`Images:`}</Typography>
            <hr className="p-1" />
            {project.images?.map((item, index) => (
              <div key={index} className="flex gap-5 overflow-scroll">
                <Image src={item} alt="logo" height={250} width={500}></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}