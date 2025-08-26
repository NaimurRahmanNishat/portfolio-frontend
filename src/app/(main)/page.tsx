import { WordRotate } from '@/components/ui/WordRotate';
import React from 'react'

const role: string[] = ["Frontend Developer", "Backend Developer", "Fullstack Developer", "Software Engineer", "SQA Engineer", "DevOps Engineer", "Data Engineer", "Data Analyst", "Data Scientist", "Machine Learning Engineer", "Cloud Engineer", "Web App Developer"];

const Page = () => {
  return (
    <div className="max-w-screen-xl container mx-auto px-4">
      <WordRotate words={role} className='text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 via-pink-600'/>
    </div>
  )
}

export default Page;
