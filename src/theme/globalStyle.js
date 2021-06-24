import { darken, lighten } from 'polished'
import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@100;400&display=swap');

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Montserrat', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.colors.appBg};
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  ::-webkit-scrollbar {
    background-color: ${({ isDarkMode }) => isDarkMode ? '#656565' : '#f2f2f2'}; 
    border-radius: 10px;
    width: 15px;
    height: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ isDarkMode }) => isDarkMode ? '#c6c6c6' : '#bebebe'}; 
    border-radius: 10px;
    border: 3px solid ${({ isDarkMode }) => isDarkMode ? '#656565' : '#f2f2f2'};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ isDarkMode }) =>
	isDarkMode ?  lighten(0.2,'#c6c6c6') : darken(0.2, '#bebebe')}; 
  }


  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  * {
    box-sizing: border-box;
  }
`
 
export default GlobalStyle