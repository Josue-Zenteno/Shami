import { theme } from 'Theme/index';
import { ThemeProvider } from '@mui/material/styles';
import { StyledButton } from 'Components/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton>Hola Mundo!</StyledButton>
    </ThemeProvider>
  );
}

export default App;
