import {themeDark} from './themeDark';
import {themeLight} from './themeLight';
import {themeGold} from './themeGold';
import {ThemeTemplate} from '../types/IThemeTemplate';

type Theme = {
  [key: string]: ThemeTemplate;
};

export const themeColors: Theme = {
  light: themeLight,
  dark: themeDark,
  gold: themeGold,
};
