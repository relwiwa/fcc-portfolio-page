import React from 'react';

import $ from 'jquery';
import { Foundation } from 'foundation-sites/js/foundation.core';
import { MediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery';
import { ImageLoader } from 'foundation-sites/js/foundation.util.imageLoader';
import { Equalizer } from 'foundation-sites/js/foundation.equalizer';

class PortfolioAbout extends React.Component {
  constructor(props) {
    super(props);
    this.reInitEqualizer = this.reInitEqualizer.bind(this);
  }

  componentDidMount() {
    if (!$(document).foundation) {
      Foundation.addToJquery($);
    }
    new Equalizer($('#equalizer-portfolio-about'));
    addEventListener('resize', this.reInitEqualizer);
  }

  componentDidUpdate() {
    this.reInitEqualizer();
  }

  componentWillUnmount() {
    $('#equalizer-portfolio-about').foundation('destroy');
    removeEventListener('resize', this.reInitEqualizer);
  }

  reInitEqualizer() {
    Foundation.reInit($('#equalizer-portfolio-about'));
  }

  renderAboutSection(section) {
    const { title, description, image } = section;

    return(
      <div className="column small-12 medium-6" key={title}>
        <div className="card" data-equalizer-watch="equalizer-portfolio-about">
          <img src={image.url} alt={'Decorative image in about section: ' + title} />
          <div className="text-center card-divider">{title}</div>
          <div className="card-section">
            {description.map((item) => <p key={item.substr(0, 8)}>{item}</p>)}
          </div>
        </div>
      </div>
    );     
  }

  render() {
    const { aboutData } = this.props;

    return(
      <div className="portfolio-about row" id="portfolio-about">
        <div className="column callout small-12">
          <h1>About <small>hello world</small></h1>
          <div className="row" id="equalizer-portfolio-about" data-equalizer="equalizer-portfolio-about" data-equalize-on="medium">
            {aboutData['sections'].map((section) => this.renderAboutSection(section))}
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioAbout;
