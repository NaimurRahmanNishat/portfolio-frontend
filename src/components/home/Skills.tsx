import React from 'react'
import TechSkills from './TechSkills';

const Skills = () => {
  return (
    <div className='pt-10 md:pt-32'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h4 className='dark:bg-purple-900/30 border border-purple-700 dark:border-none text-purple-600 dark:text-gray-600 py-2 rounded-xl px-6 font-primary'> My Skills</h4>
        <h1 className='text-3xl md:text-5xl font-bold text-purple-800 font-secondary'>Skills & Technologies</h1>
        <p className='text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center'>Technologies and tools I work with to bring ideas to life</p>
      </div>
      <div>
        <TechSkills />
      </div>
    </div>
  )
}

export default Skills;