"use client";

import { useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin, Star, ExternalLink, BookOpen } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  provider: string;
  year: string;
  credential: string;
  skills: string[];
  gradientColor: string;
  icon: React.ReactNode;
}

const certifications: Certification[] = [
  {
    id: 'next-level',
    title: 'Next Level Web Development',
    provider: 'Udemy',
    year: '2022-2023',
    credential: 'WEB-A378',
    skills: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'React', 'JS Data'],
    gradientColor: 'from-purple-500 to-pink-600',
    icon: <Award className="w-6 h-6" />
  },
  {
    id: 'redux-way',
    title: 'Thinking in a Redux Way',
    provider: 'Programming with Mosh',
    year: '2024',
    credential: 'LWS7788-788001',
    skills: ['Redux', 'React', 'RTK Query', 'Tailwind CSS', 'JavaScript', 'JSON-Server', 'JS more'],
    gradientColor: 'from-cyan-500 to-teal-600',
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    id: 'complete-web',
    title: 'Complete Web Development',
    provider: 'Programming with Mosh',
    year: '2023-2024',
    credential: 'WEB-A378',
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'DOM', 'React.js', 'JS more'],
    gradientColor: 'from-blue-500 to-indigo-600',
    icon: <Award className="w-6 h-6" />
  }
];

const Qualification = () => {
   const [, setHoveredCert] = useState<string | null>(null);
  return (
     <div className="min-h-screen bg-transparent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#8b5cf6" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-8">
            <span className="text-sm text-slate-300">My Qualifications</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Education & Certifications
          </h1>
          
          <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed">
            My academic background and professional certifications that demonstrate my commitment to continuous learning and expertise.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>

          {/* Education Card */}
          <div className="relative group">
            {/* Gradient Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-none"></div>
            
            {/* Card Content */}
            <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 group-hover:border-transparent transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    B.Sc. in Computer Science & Engineering
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>Dhaka International University</span>
                  </div>
                  <p className="text-slate-300 mb-6">
                    Focused on software engineering, algorithms, and web technologies
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-slate-700/50 rounded-full border border-slate-600/50">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-300">2021 - 2024</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">3.45 CGPA</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Key Courses</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['System Design', 'Algorithms', 'Web Development', 'Microprocessor Design'].map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50 hover:bg-slate-600/50 hover:border-slate-500/50 transition-colors duration-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Certifications Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Professional Certifications</h2>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="relative group"
                onMouseEnter={() => setHoveredCert(cert.id)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                {/* Gradient Border */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.gradientColor} rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-none`}></div>
                
                {/* Card Content */}
                <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 h-full border border-slate-700/50 group-hover:border-transparent transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${cert.gradientColor} group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {cert.icon}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400">{cert.year}</span>
                    </div>
                  </div>

                  {/* Title and Provider */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-slate-400 mb-6">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">{cert.provider}</span>
                  </div>

                  {/* Skills Section */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                      Skills & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded border border-slate-600/50 hover:bg-slate-600/50 hover:border-slate-500/50 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-400">
                      <span>Credential: </span>
                      <span className="text-slate-300 font-mono">{cert.credential}</span>
                    </div>
                    <button className="flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group/link">
                      <span>View certificate</span>
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </button>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradientColor} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 cursor-pointer group">
            <span>View all credentials</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Qualification;