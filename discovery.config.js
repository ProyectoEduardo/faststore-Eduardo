
module.exports = {
  seo: {
  "title": "FastStore",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "FastStore"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: process.env.NEXT_PUBLIC_STORE_ID || "latamlab03",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "PEN",
      symbol: "S/",
    },
    locale: "es-PE",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "PER",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://latamlab03.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/men's",
    search: "/s?q=Sport%20Generic%20Brand",
    pdp: "/functional-anorak-water-resistant-jacket-for-men-beige/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/functional-anorak-water-resistant-jacket-for-men-beige/p",
      collection: "/men's",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/functional-anorak-water-resistant-jacket-for-men-beige/p",
      collection: "/men's",
      collection_filtered: "/men's/?category-1=men%27s&brand=Sport%20Generic%20Brand&facets=category-1%2Cbrand%27",
      search: "/s?q=Sport%20Generic%20Brand",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://latamlab03.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
