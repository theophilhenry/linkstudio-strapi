module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/apply-template',
     handler: 'apply-template.applyTemplate',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
