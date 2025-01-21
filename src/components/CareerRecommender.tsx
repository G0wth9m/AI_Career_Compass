import React, { useState } from 'react';
import { careers, allSkills, allDegrees } from '../data/careers';
import { Brain, Briefcase, GraduationCap, Code, ChevronRight, ExternalLink } from 'lucide-react';

export function CareerRecommender() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedDegree, setSelectedDegree] = useState<string>('');
  const [recommendations, setRecommendations] = useState<typeof careers>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSkillChange = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnimating(true);
    
    // Simulated loading for presentation effect
    setTimeout(() => {
      const matchedCareers = careers
        .map(career => {
          const skillMatch = selectedSkills.filter(skill => 
            career.requiredSkills.includes(skill)
          ).length / career.requiredSkills.length;
          
          const degreeMatch = career.recommendedDegrees.includes(selectedDegree) ? 1 : 0;
          
          return {
            ...career,
            score: (skillMatch * 0.7) + (degreeMatch * 0.3)
          };
        })
        .filter(career => career.score > 0.3)
        .sort((a, b) => b.score - a.score);

      setRecommendations(matchedCareers);
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-center justify-center mb-8">
            <Brain className="w-12 h-12 mr-4" />
            <h1 className="text-4xl font-bold">AI Career Compass</h1>
          </div>
          <p className="text-center text-xl text-indigo-100 max-w-2xl mx-auto">
            Discover your perfect career path using our advanced AI-powered recommendation system
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 mb-12 transform transition-all">
          {/* Skills Section */}
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Technical Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {allSkills.map(skill => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => handleSkillChange(skill)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105
                    ${selectedSkills.includes(skill)
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          {/* Degree Section */}
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Education Level</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {allDegrees.map(degree => (
                <button
                  key={degree}
                  type="button"
                  onClick={() => setSelectedDegree(degree)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all transform hover:scale-105
                    ${selectedDegree === degree
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {degree}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={!selectedDegree || selectedSkills.length === 0 || isAnimating}
            className={`w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-xl font-medium 
              transition-all transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed
              ${isAnimating ? 'animate-pulse' : ''}`}
          >
            {isAnimating ? 'Analyzing Your Profile...' : 'Get Career Recommendations'}
          </button>
        </form>

        {/* Results Section */}
        {recommendations.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Recommended Career Paths</h2>
            </div>
            <div className="space-y-8">
              {recommendations.map((career, index) => (
                <div 
                  key={career.id}
                  className="border-b border-gray-100 last:border-0 pb-8 last:pb-0"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{career.title}</h3>
                      <p className="text-gray-600 mb-4">{career.description}</p>
                    </div>
                    <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                      Match #{index + 1}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Recommended Education: {career.recommendedDegrees.join(', ')}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {career.requiredSkills.map(skill => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm flex items-center
                          ${selectedSkills.includes(skill)
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-600'
                          }`}
                      >
                        {skill}
                        {selectedSkills.includes(skill) && (
                          <ChevronRight className="w-4 h-4 ml-1" />
                        )}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Find Jobs On:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.jobPlatforms.map(platform => (
                        <a
                          key={platform.name}
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors text-sm"
                        >
                          {platform.name}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}