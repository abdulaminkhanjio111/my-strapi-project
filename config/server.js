module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: process.env.PORT || env.int('PORT', 1337), // Ensure Render assigns the port
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});



// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', process.env.PORT || 10000), // Use Render's dynamic port
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
// });
