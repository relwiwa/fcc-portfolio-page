import React from 'react';

import '../styles/portfolio-contact.scss';

const PortfolioContact = (props) => {
  const { contactData } = props;

  const renderContactItem = (item) => {
    const { description, image, title, url } = item;
    return(
      <div
        className="column column-block text-center"
        key={title}
      >
        <a href={url} title={description}><img src={image.url} alt={description} /></a>
      </div>
    );
  };

  return (
    <div className="portfolio-contact row" id="portfolio-contact">
      <div className="column callout small-12">
        <h1 >Contact <small>relwiwa</small></h1>
        <p>I'm looking forward to getting in touch with you on one of the following sites:</p>
        <div className="row small-up-3 medium-up-6">
          {contactData.map((item) => renderContactItem(item))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioContact;
