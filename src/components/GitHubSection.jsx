import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GitHubCalendar from 'react-github-calendar';

const GitHubSection = () => {
  const [repos, setRepos] = useState([]);
  const username = 'SurajK-14';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated`);
        const pinnedRepos = response.data.filter(repo => 
          ['nonprofit-center', 'EDA-Ultra-Marathon'].includes(repo.name)
        );
        setRepos(pinnedRepos);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="py-16">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">GitHub Activity</h3>
      
      <div className="mb-12">
        <h4 className="text-xl font-semibold mb-6">Contribution Graph</h4>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <GitHubCalendar 
            username={username}
            colorScheme="light"
            fontSize={12}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {repos.map(repo => (
          <div key={repo.id} className="project-card bg-white p-8 rounded-xl hover:shadow-lg transition-shadow">
            <h4 className="text-xl font-semibold mb-4">{repo.name}</h4>
            <p className="text-gray-700 mb-4">{repo.description || 'No description available'}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                  </svg>
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                  </svg>
                  {repo.forks_count}
                </span>
              </div>
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors"
              >
                View Repository →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubSection;