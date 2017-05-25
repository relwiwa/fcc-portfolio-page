import React from 'react';

import '../styles/portfolio-footer.scss';

const PortfolioFooter = (props) => {
  const { contactData, projectsData } = props;

  const renderContactItems = (items) => {
    return (
      <div className="column column-block">
        <h6>Contact</h6>
        <ul className="no-bullet">
          {items.map((item) => (
            <li key={item.title}>
              <a href={item.url} title={item.description}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderProjectCategory = (category) => {
    const { projects, title } = category;

    return (
      <div className="column column-block" key={title}>
        <h6>{title} Projects</h6>
        <ul className="no-bullet">
          {projects.map((project) => (
            <li key={project.title}>
              <a href="#" title={project.title}>{project.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="portfolio-footer">
      <div className="callout">
        <div className="row small-up-2 large-up-4">
          {renderContactItems(contactData)}
          {projectsData.map((category) => renderProjectCategory(category))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioFooter;
