import { NavBar } from './components'
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme/AppTheme';

export const App = () => {
  return (
    <AppTheme>
      <NavBar></NavBar>
      <main>
        <AppRouter />
      </main>
    </AppTheme>
  );
}
