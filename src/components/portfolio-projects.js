import React from 'react';

import $ from 'jquery';
import { Foundation } from 'foundation-sites/js/foundation.core';
import { MediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery';
import { ImageLoader } from 'foundation-sites/js/foundation.util.imageLoader';
import { Equalizer } from 'foundation-sites/js/foundation.equalizer';
import { Keyboard } from 'foundation-sites/js/foundation.util.keyboard';
import { Motion } from 'foundation-sites/js/foundation.util.motion';
import { Timer } from 'foundation-sites/js/foundation.util.timer';
import { Touch } from 'foundation-sites/js/foundation.util.touch';
import { Orbit } from 'foundation-sites/js/foundation.orbit/';

class PortfolioProjects extends React.Component {
  constructor(props) {
    super(props);
    this.reInitEqualizer = this.reInitEqualizer.bind(this);
    this.reInitOrbits = this.reInitOrbits.bind(this);
  }

  componentDidMount() {
    if (!$(document).foundation) {
      Foundation.addToJquery($);
    }
    new Equalizer($('#equalizer-portfolio-projects'));
    new Orbit($('#orbit-frontend'));
    new Orbit($('#orbit-data-viz'));
    new Orbit($('#orbit-backend'));
    addEventListener('resize', this.reInitEqualizer);
    addEventListener('resize', this.reInitOrbits);
  }

  componentDidUpdate() {
    this.reInitEqualizer();
  }

  componentWillUnmount() {
    $('#equalizer-portfolio-projects').foundation('destroy');
    $('#orbit-frontend').foundation('destroy');
    $('#orbit-data-viz').foundation('destroy');
    $('#orbit-backend').foundation('destroy');
    removeEventListener('resize', this.reInitEqualizer)
    removeEventListener('resize', this.reInitOrbits)
  }

  reInitEqualizer() {
    Foundation.reInit($('#equalizer-portfolio-projects'));
  }

  reInitOrbits() {
    Foundation.reInit($('#orbit-frontend'));
    Foundation.reInit($('#orbit-data-viz'));
    Foundation.reInit($('#orbit-backend'));
  }


  renderCategory(specs) {
    const { description, lessonsLearned, projects, route, title, website } = specs;
    return (
      <div className="column small-12 medium-4 large-4" key={title}>
        <div className="card">
          {/* Orbit animation based on Motion-UI currently bugged when
              scrolling during animation of slides */}
          <div className="orbit" id={'orbit-' + route} data-use-m-u-i="true" data-orbit={'orbit-' + route}>
            <ul className="orbit-container">
              <button className="orbit-previous">
                <span className="show-for-sr">Previous Screenshot of {title} Project</span> &#9664;&#xFE0E;
              </button>
              <button className="orbit-next">
                <span className="show-for-sr">Next Screenshot of {title} Project</span> &#9654;&#xFE0E;
              </button>
              {this.renderOrbitSlides(projects)}
            </ul>
          </div>
          <div className="card-section" data-equalizer-watch="equalizer-portfolio-projects">
            <h4>{title} Projects</h4>
            <p>{description}</p>
            <p>Some of the things I learned were:</p>
            <ul>{lessonsLearned.map((lesson) => <li key={lesson.substr(0, 10)}>{lesson}</li> )}</ul>
          </div>
          <div className="card-section">
            <a href="#" className="button primary expanded" title={'Go to' + title + ' Website'} >{title} Website</a>
          </div>        
        </div>
      </div>
    );
  }

  renderOrbitSlides(specs) {
    return specs.map((item, index) => {
      const { screenshot, title } = item;
      return (
        <li data-slide={index} className="orbit-slide" key={title} >
          <img className="orbit-image" src={screenshot} />
          <figcaption className="orbit-caption">{title}</figcaption>
        </li>
      );
    });
  }

  render() {
    const { projectsData } = this.props;

    return (
      <div className="portfolio-projects row" id="portfolio-projects">
        <div className="column callout small-12">
          <h1>Projects <small>freeCodeCamp</small></h1>
          <p>All projects were built responsively, based on either Foundation or Bootstraps' grid systems.</p>
          <p>I used a diverse set of frameworks, ranging from pure Javascript to AngularJS and Angular to React with and without a Redux Store.</p>
          <div className="row" id="equalizer-portfolio-projects" data-equalizer="equalizer-portfolio-projects" data-equalize-on-stack="true" data-equalize-on="medium">
            {projectsData.map((category) => this.renderCategory(category))}
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioProjects;
