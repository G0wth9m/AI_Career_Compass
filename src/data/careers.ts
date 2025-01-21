interface Career {
  id: string;
  title: string;
  requiredSkills: string[];
  recommendedDegrees: string[];
  description: string;
  jobPlatforms: {
    name: string;
    url: string;
  }[];
}

export const careers: Career[] = [
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    requiredSkills: ['Python', 'Machine Learning', 'Data Science', 'Statistics'],
    recommendedDegrees: ['Bachelors', 'Masters', 'PhD'],
    description: 'Transform complex data into actionable insights using advanced analytics and machine learning techniques to drive business decisions.',
    jobPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/data-scientist-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/jobs?q=data+scientist' },
      { name: 'Glassdoor', url: 'https://www.glassdoor.com/Job/data-scientist-jobs-SRCH_KO0,14.htm' }
    ]
  },
  {
    id: 'software-developer',
    title: 'Software Developer',
    requiredSkills: ['Java', 'JavaScript', 'Python', 'SQL'],
    recommendedDegrees: ['Bachelors', 'Masters'],
    description: 'Design, build, and maintain innovative software solutions that power modern applications and services.',
    jobPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/software-developer-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/jobs?q=software+developer' },
      { name: 'Stack Overflow', url: 'https://stackoverflow.com/jobs?q=software+developer' }
    ]
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    requiredSkills: ['SQL', 'Python', 'Statistics', 'Business Intelligence'],
    recommendedDegrees: ['Bachelors', 'Masters'],
    description: 'Analyze data to uncover trends, create reports, and provide valuable insights that guide strategic business decisions.',
    jobPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/data-analyst-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/jobs?q=data+analyst' },
      { name: 'Glassdoor', url: 'https://www.glassdoor.com/Job/data-analyst-jobs-SRCH_KO0,12.htm' }
    ]
  },
  {
    id: 'ml-engineer',
    title: 'ML Engineer',
    requiredSkills: ['Python', 'Machine Learning', 'AI', 'Deep Learning'],
    recommendedDegrees: ['Masters', 'PhD'],
    description: 'Develop and deploy sophisticated machine learning models that solve complex real-world problems at scale.',
    jobPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/machine-learning-engineer-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/jobs?q=machine+learning+engineer' },
      { name: 'AI-Jobs.net', url: 'https://ai-jobs.net/machine-learning/' }
    ]
  },
  {
    id: 'web-developer',
    title: 'Web Developer',
    requiredSkills: ['JavaScript', 'HTML', 'CSS', 'Web Development'],
    recommendedDegrees: ['Bachelors'],
    description: 'Create engaging and responsive web applications that deliver exceptional user experiences across all devices.',
    jobPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/web-developer-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/jobs?q=web+developer' },
      { name: 'GitHub Jobs', url: 'https://jobs.github.com/positions?description=web+developer' }
    ]
  }
];

export const allSkills = Array.from(
  new Set(careers.flatMap(career => career.requiredSkills))
).sort();

export const allDegrees = ['Bachelors', 'Masters', 'PhD'];