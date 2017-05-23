import React from 'react';

import PortfolioFooter from './portfolio-footer';
import PortfolioHeader from './portfolio-header';
import PortfolioMain from './portfolio-main';
import '../styles/portfolio-page.scss';

const PortfolioPage = (props) => {
  return (
    <div className="portfolio-page">
      <PortfolioHeader />
      <PortfolioMain />
      <PortfolioFooter />
    </div>
  );
};

export default PortfolioPage;
