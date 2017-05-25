import React from 'react';

import '../styles/portfolio-header.scss';

class PortfolioHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavigation: false
    };
  }

  toggleNavigation() {
    this.setState({
      showNavigation: !this.state.showNavigation
    });
  }

  render() {
    return (
      <div id="portfolio-top" className="portfolio-header">
        <div className="portfolio-logo row">
          <div className="column small-12 medium-4 text-center medium-text-left">
            <a href="#portfolio-top">
              <img src="http://res.cloudinary.com/dqzrtsqol/image/upload/v1495559680/portfolio-page/relwiwa-logo.svg" alt="Logo" /><br />
            </a>
            <a href="#portfolio-top">RELWIWA</a>
          </div>
          <button
            className="close-button show-for-small-only"
            aria-label="Toggle Navigation on small screens"
            type="button"
            onClick={() => this.toggleNavigation()}
          >
            <span aria-hidden="true"><i className="fa fa-bars"></i></span>
          </button>
          <nav className={'column small-12 medium-8 large-6' + (!this.state.showNavigation ? ' hide-for-small-only' : '')}>
            <ul className="menu vertical expanded medium-horizontal text-center">
              <li><a href="#portfolio-projects" title="Go to Projects Section">Projects</a></li>
              <li><a href="#portfolio-about" title="Go to About Section">About</a></li>
              <li><a href="#portfolio-contact" title="Go to Contact Section">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default PortfolioHeader;
