import React from 'react';

import PortfolioFooter from './portfolio-footer';
import PortfolioHeader from './portfolio-header';
import PortfolioMain from './portfolio-main';
import '../styles/portfolio-page.scss';

import portfolioData from '../data/portfolio-page.json';

const PortfolioPage = (props) => {
  return (
    <div className="portfolio-page">
      <PortfolioHeader />
      <PortfolioMain
        portfolioData={portfolioData}
      />
      <PortfolioFooter
        contactData={portfolioData['contact']}
        projectsData={portfolioData['projects']}
      />
    </div>
  );
};

export default PortfolioPage;
