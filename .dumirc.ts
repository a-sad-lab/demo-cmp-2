import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '@career/demo-cmp-2',
    logo: false,
    nav: [
      { title: '指南', link: '/guide' },
      { title: '帮助', link: '/help' },
      { title: '组件', link: '/components' },
    ],
  },
});
