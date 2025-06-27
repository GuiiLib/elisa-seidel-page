
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/elisa-seidel-page/home",
    "route": "/elisa-seidel-page"
  },
  {
    "renderMode": 2,
    "route": "/elisa-seidel-page/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 515, hash: '20518e7fc20b5cc92d804a5e7a48b2b14010a6e64001ae99d6e18d43823c2ab9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: '1245ad9fd35b0a601641f4c61f812a79bb3b5d199d5af6a83003fb4a4ae038e1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'elisa-seidel-page/home/index.html': {size: 27735, hash: '864d9941d30a578057f329a96de88950b9fb57a64c0ce2f9859218fce0b50e57', text: () => import('./assets-chunks/elisa-seidel-page_home_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
