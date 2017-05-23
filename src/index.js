import React from 'react';
import { render } from 'react-dom';

import './global-styles.scss';

import PortfolioPage from './components/portfolio-page';

render(
  <PortfolioPage />,
  document.getElementById('root')
);
