import React from 'react';
import { addDecorator } from '@storybook/react';

import Providers from '../src/components/App/Providers'
import useTheme from '../src/hooks/useTheme'

if (typeof global.process === 'undefined') {
  const { worker } = require('../src/mocks')
  worker.start()
}

addDecorator(story => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
  <Providers>
    <div style={{marginBottom: '2rem'}} onClick={toggleTheme}>
      TOGGLE: {isDarkMode ? 'Dark' : 'Light'}
    </div>
    {story()}
  </Providers>
)})