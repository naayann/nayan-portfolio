import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    img: "/comingsoon.jpg",
    title: "Coming Soon",
    desc: "This project is currenlty under construction, and will be launching soon",
    stack: ["React", "Typescript", "TankStack Query"],
    demo: "https://example.com",
    github: "https://github.com/naayann"
  },
  {
    img: "/comingsoon.jpg",
    title: "Coming Soon",
    desc: "This project is currenlty under construction, and will be launching soon",
    stack: ["React", "Typescript", "TankStack Query"],
    demo: "https://example.com",
    github: "https://github.com/naayann"
  },
  {
    img: "/comingsoon.jpg",
    title: "Coming Soon",
    desc: "This project is currenlty under construction, and will be launching soon",
    stack: ["React", "Typescript", "TankStack Query"],
    demo: "https://example.com",
    github: "https://github.com/naayann"
  },
  {
    img: "/comingsoon.jpg",
    title: "Coming Soon",
    desc: "This project is currenlty under construction, and will be launching soon",
    stack: ["React", "Typescript", "TankStack Query"],
    demo: "https://example.com",
    github: "https://github.com/naayann"
  },
]

const Projects = () => {
  return (
    <>
      <h1 className='mt-4 mb-4 font-bold text-xl'>Projects</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        {projects.map((project, i) => (
          <div
            key={i}
            className='border border-gray-500 rounded-2xl p-3'>

            <img
              src={project.img}
              alt="coming-soon"
              className='rounded-lg grayscale hover:grayscale-0 transition'
            />

            <div className='flex justify-between py-2'>

              <h2 className='text-md font-bold'>{project.title}</h2>
              <p className='flex items-center gap-1'>
                <div className='w-3 h-3 rounded-full bg-green-500 animate-pulse' />
                Building
              </p>
            </div>
            <p
              className='text-sm text-gray-500 tracking-wider'>
              {project.desc}
            </p>

            <div className='flex gap-1 mt-2'>
              {project.stack.map((tech, iTech) => (
                <span
                  key={iTech}
                  className='gap-2 border border-gray-500 rounded-full px-2 text-xs text-gray-300'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
