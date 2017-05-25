import React from 'react';

import PortfolioAbout from './portfolio-about';
import PortfolioContact from './portfolio-contact';
import PortfolioIntro from './portfolio-intro';
import PortfolioProjects from './portfolio-projects';

const PortfolioMain = (props) => {
  const { portfolioData } = props;

  return (
    <div className="portfolio-main">
      <PortfolioIntro
        introData={portfolioData['intro']}
      />
      <PortfolioProjects
        projectsData={portfolioData['projects']} />
      <PortfolioAbout
        aboutData={portfolioData['about']}
      />
      <PortfolioContact
        contactData={portfolioData['contact']}
      />
    </div>
  );
}

export default PortfolioMain;
