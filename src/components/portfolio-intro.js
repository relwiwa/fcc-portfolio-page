import React from 'react';

import '../styles/portfolio-intro.scss';

const PortfolioIntro = (props) => {
  const { introData } = props;

  const renderTechnologyIcon = (item, index) => {
    const { image, title } = item;

    return (
      <div
        className={'column column-block text-center' + (index >= 8 ? ' hide-for-medium' : '')}
        key={title}
      >
        <img src={image.url} alt={title} title={title} />
      </div>
    );
  };

  return (
    <div className="portfolio-intro" id="portfolio-intro">
      <div className="callout secondary">
        <div className="row">
          <div className="column small-12 text-center">
            <h1>Welcome to My <nobr>Portfolio Page!</nobr></h1>
            <p className="lead">My name is Walter. I am a Flight Attendant with a Computer Science Minor and a lot more</p>
            <p className="lead">This page features <a href="#portfolio-projects" title="Go to Projects section">projects I've been building</a> as part of FreeCodeCamp's Certification</p>
            <p className="lead">You can <a href="#portfolio-about" title="Go to About section">find out more about me</a> and learn how to <a href="#portfolio-contact" title="Go to Contact section">contact me</a></p>
          </div>
          <div className="technologies-container column small-12">
            <div className="row small-up-3 medium-up-8 large-up-8">
              {introData['technologyIcons'].map((item, index) => renderTechnologyIcon(item, index))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioIntro;
