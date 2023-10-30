import {ThemeStates} from '../types/IThemeStates';
type ThemeMode = {
  readonly LIGHT: ThemeStates;
  readonly DARK: ThemeStates;
  readonly GOLD: ThemeStates;
};
export const themeMode: ThemeMode = {
  LIGHT: 'light',
  DARK: 'dark',
  GOLD: 'gold',
};
