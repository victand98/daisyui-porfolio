import Link from "next/link";
import React from "react";
import { ImNewTab } from "react-icons/im";

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const projects: ProjectCardProps[] = [
  {
    title: "Life hack",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/500/300?random=1",
    href: "#",
  },
  {
    title: "E-commerce",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/500/300?random=2",
    href: "#",
  },
  {
    title: "Banking",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/500/300?random=3",
    href: "#",
  },
  {
    title: "Personal blog",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/500/300?random=4",
    href: "#",
  },
];

export const Projects = () => {
  return (
    <section className="py-10 px-4 space-y-8 text-center bg-base-200">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold uppercase tracking-widest">
          Projects
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="max-w-7xl mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div className="card glass">
      <figure>
        <img className="w-full" src={props.image} alt={props.title} />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions">
          <Link href={props.href}>
            <button className="btn btn-primary">
              Visitar
              <ImNewTab className="h-6 w-6" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
