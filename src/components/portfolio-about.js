import React from 'react';

import 'script-loader!jquery/dist/jquery.slim.min';
import 'script-loader!foundation-sites/dist/js/foundation';

class PortfolioAbout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.portfolio-about').foundation();
  }

  componentWillUnmount() {
    $('.portfolio-about').foundation('destroy');
  }

  renderAboutSection(section) {
    const { title, description, image } = section;

    return(
      <div className="column small-12 medium-6" key={title}>
        <div className="card" data-equalizer-watch="portfolio-about">
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
          <div className="row" id="equalizer-about" data-equalizer="portfolio-about" data-equalize-on="medium">
            {aboutData['sections'].map((section) => this.renderAboutSection(section))}
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioAbout;
