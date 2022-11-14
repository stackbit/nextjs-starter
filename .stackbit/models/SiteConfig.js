module.exports = {
  type: 'data',
  name: 'SiteConfig',
  label: 'Site Config',
  singleInstance: true,
  fields: [
    { type: 'string', name: 'title', label: 'Site Title' },
    {
      type: 'model',
      name: 'footer',
      label: 'Footer Config',
      models: ['FooterConfig'],
    },
  ],
};
