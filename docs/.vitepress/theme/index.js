import DefaultTheme from 'vitepress/theme';

import ZIcon from '@tpf/components/icon';
import '@tpf/theme-chalk/src/index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ZIcon);
  }
};
