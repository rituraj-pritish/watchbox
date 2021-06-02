import React from 'react';
import { addDecorator } from '@storybook/react';

import Providers from '../src/components/App/Providers'
import ThemeToggle from '../src/components/common/ThemeToggle'

if (typeof global.process === 'undefined') {
  const { worker } = require('../src/tests/mocks')
  worker.start()
}

addDecorator(story => {
  return (
  <Providers>
    <div style={{marginBottom: 20}}>
      <ThemeToggle/>
    </div>
    {story()}
  </Providers>
)})