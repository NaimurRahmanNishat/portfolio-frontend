"use client";

import { useState } from 'react';
import { MapPin, Calendar, Briefcase, Code, Building } from 'lucide-react';

interface Experience {
  id: string;
  company: string;
  position: string;
  type: 'fullstack' | 'intern' | 'freelance';
  startDate: string;
  endDate: string;
  location: string;
  overview: string;
  icon: React.ReactNode;
}

const experiences: Experience[] = [
  {
    id: 'cloud-gen',
    company: 'Cloud Gen',
    position: 'Full Stack Developer',
    type: 'fullstack',
    startDate: 'Mar 2024',
    endDate: 'Dec 2024',
    location: 'Remote',
    overview: 'Led development of cloud-native applications using React, Node.js, and AWS services, implementing microservices architecture and CI/CD pipelines.',
    icon: <Building className="w-5 h-5" />
  },
  {
    id: 'freelance',
    company: 'Freelance Projects',
    position: 'Full Stack Developer',
    type: 'freelance',
    startDate: 'Jan 2025',
    endDate: 'Present',
    location: 'Dhaka, Bangladesh',
    overview: 'Development of a scalable e-commerce and tutor-finding platform using the MERN stack, improving performance by 40%.',
    icon: <Code className="w-5 h-5" />
  },
  {
    id: 'innovate-tech',
    company: 'Innovate Technology',
    position: 'Intern',
    type: 'intern',
    startDate: 'Jun 2023',
    endDate: 'Dec 2023',
    location: 'Dhaka, Bangladesh',
    overview: 'Collaborated on web development projects, gained experience in modern frameworks, and contributed to team-based development workflows.',
    icon: <Briefcase className="w-5 h-5" />
  }
];

const MyJourny = () => {
    const [selectedExperience, setSelectedExperience] = useState('freelance');

  const currentExperience = experiences.find(exp => exp.id === selectedExperience);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
            <path d="M100 100L900 100" stroke="url(#gradient1)" strokeWidth="1" />
            <path d="M100 200L800 200" stroke="url(#gradient1)" strokeWidth="1" />
            <path d="M200 300L900 300" stroke="url(#gradient1)" strokeWidth="1" />
            <path d="M100 400L750 400" stroke="url(#gradient1)" strokeWidth="1" />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-6">
            <span className="text-sm text-slate-300">My Journey</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            My journey through various roles and organizations that have shaped my professional career
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Timeline Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Connection Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-12 bg-gradient-to-b from-slate-600 to-slate-700"></div>
                )}
                
                {/* Experience Item */}
                <div
                  onClick={() => setSelectedExperience(exp.id)}
                  className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer group ${
                    selectedExperience === exp.id
                      ? 'bg-slate-800/80 border-purple-500/50 shadow-lg shadow-purple-500/10'
                      : 'bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${
                      selectedExperience === exp.id
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : 'bg-slate-700 text-slate-300 group-hover:bg-slate-600'
                    }`}>
                      {exp.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-lg transition-colors ${
                        selectedExperience === exp.id ? 'text-white' : 'text-slate-200'
                      }`}>
                        {exp.company}
                      </h3>
                      <p className="text-slate-400 text-sm mb-2">{exp.position}</p>
                      
                      {selectedExperience === exp.id && (
                        <div className="flex items-center text-xs text-slate-500 space-x-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.startDate} - {exp.endDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Arrow */}
                    {selectedExperience === exp.id && (
                      <div className="text-purple-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-8">
            {currentExperience && (
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 h-full">
                {/* Header with Gradient Border */}
                <div className="relative mb-8">
                  <div className="absolute -top-4 -left-4 -right-4 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
                  
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {currentExperience.position}
                      </h2>
                      <div className="flex items-center gap-2 text-slate-400">
                        {currentExperience.icon}
                        <span>{currentExperience.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>{currentExperience.startDate} - {currentExperience.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span>{currentExperience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Overview Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-2 text-purple-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="font-semibold">Overview</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                    <p className="text-slate-300 leading-relaxed text-lg">
                      {currentExperience.overview}
                    </p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Professional Experience Timeline</span>
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      {currentExperience.endDate === 'Present' ? 'Currently Active' : 'Completed'}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyJourny;