import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/theme/globalStyle'
import GlobalState from '../src/components/GlobalState'
import { SkeletonTheme } from 'react-loading-skeleton'
import theme from '../src/theme'

addDecorator(story => (
  <SkeletonTheme 
    color={theme.colors.skeleton.background} 
    highlightColor={theme.colors.skeleton.highlightColor} 
  >
    <GlobalState/>
    <GlobalStyle/>
    {story()}
  </SkeletonTheme>
))