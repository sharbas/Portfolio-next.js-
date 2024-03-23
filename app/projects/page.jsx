"use client";
import React, { useState } from "react";
import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { TabsContent, TabsList } from "@radix-ui/react-tabs";

const projectData=[
  {
      image:'/assets/projects/wetravel.jpeg',
      category:'react js',
      name:'WeTravel website',
      description:`Developed We Travel, a travel booking platform that provides smooth functionality for users, hotel managers and admin.
    `,
        link:'https://travelwithwetravel.website',
        github:'https://github.com/sharbas/Second-Project.git'

  },
  {
      image:'/assets/projects/openai2.jpeg',
      category:'react js',
      name:'OpenAi website',
      description:`Developed an AI-Based Finance Health Checker during a hackathon, leveraging OpenAI for intelligent data analysis and insights generation.
    `,
        link:'',
        github:'https://github.com/sharbas/Hackathon-OpenAi.git'

  },
  {
      image:'/assets/projects/nutrifreshfruit.jpeg',
      category:'ejs (template engine)',
      name:'NutirFreshFruit website',
      description:`Developed NutriFreshFruit, an e-commerce platform focused on providing fresh fruit, enhancing accessibility to nutritious options for customers.
    `,
        link:'https://nutrifreshfruit.store/',
        github:'https://github.com/sharbas/NEW-PROJECT.git'

  },
 
  {
      image:'/assets/projects/portfolio.jpeg',
      category:'next js',
      name:'Portfolio',
      description:`Employed Next.js for developing a static portfolio, featuring comprehensive listings of skills and projects to highlight expertise and achievements efficiently.
    `,
        link:'',
        github:'https://github.com/sharbas/Portfolio-next.js-.git'

  },
  {
      image:'/assets/projects/olx.png',
      category:'react js',
      name:'Olx clone',
      description:`Created an OLX clone using React and Firebase. Demonstrated competence in implementing real-time databases and seamless API integration.     
    `,
        link:'',
        github:'https://github.com/sharbas/Olx-Clone.git'

  },
  {
      image:'/assets/projects/netflix1.jpg',
      category:'react js',
      name:'Netflix clone',
      description:`Created a Netflix-inspired mini-project using React with a focus on enhancing user experience.
    `,
        link:'',
        github:'https://github.com/sharbas/React_Netflix.git'

  },
  {
      image:'/assets/projects/mernauth.png',
      category:'react js',
      name:'MERN Auth',
      description:`Developed a MERN authentication app with Redux and JWT for secure user authentication.

    `,
        link:'',
        github:'https://github.com/sharbas/MernAuth.git'

  },
  {
      image:'/assets/projects/todolist1.jpeg',
      category:'react js',
      name:'TodoList App',
      description:`Developed a React-based front end for a versatile to-do list application. Enabled users to efficiently manage tasks, including adding, editing and deleting items, while also providing visibility into completed tasks
    `,
        link:'',
        github:'https://github.com/sharbas/todo_react.git'

  },

]

//remove categroy duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

function Projects() {
  const [categories, setCategories] = useState(uniqueCategories);

  const [category, setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((project) => {
    //if category is 'all projects' return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs  */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content  */}
          <div className="text-lg-xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project,index)=>{
              return <TabsContent value={category} key={index}>
                <ProjectCard project={project}/>
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default Projects;
