import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { CustomThemeProvider } from './styles/theme';

function App() {
  return (
    <CustomThemeProvider>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </CustomThemeProvider>
  );
}

export default App;
