// module.exports = [
//   'strapi::logger',
//   'strapi::errors',
//   'strapi::security',
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
  
// ];

module.exports = {
  settings: {
    cors: {
      enabled: true, 

    },
  },
  // Preserving other middleware configuration
  load: {
    before: ['strapi::logger', 'strapi::errors', 'strapi::security'],
    order: [
      'strapi::cors', // Keep this in order if you want to apply other CORS settings
      'strapi::poweredBy',
      'strapi::query',
      'strapi::body',
      'strapi::session',
      'strapi::favicon',
      'strapi::public',
    ],
    after: [],
  },
};
