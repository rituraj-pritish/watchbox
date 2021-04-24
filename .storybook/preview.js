import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/theme/globalStyle'
import GlobalState from '../src/components/GlobalState'

addDecorator(story => (
  <>
    <GlobalState/>
    <GlobalStyle/>
    {story()}
  </>
))