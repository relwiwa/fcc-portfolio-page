import React from 'react';

import PortfolioAbout from './portfolio-about';
import PortfolioContact from './portfolio-contact';
import PortfolioIntro from './portfolio-intro';
import PortfolioProjects from './portfolio-projects';

class PortfolioMain extends React.Component {
  render() {
    return (
      <div className="portfolio-main">
        <PortfolioIntro />
        <PortfolioAbout />
        <PortfolioProjects />
        <PortfolioContact />
      </div>
    );
  }
}

export default PortfolioMain;
