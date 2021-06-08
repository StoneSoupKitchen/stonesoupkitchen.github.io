module.exports = {
  docs: [
      {
          type: 'category',
          label: 'Stone Soup Kitchen',
          items: ['about'],
      },
      {
          type: 'category',
          label: 'Containers',
          items: [
            'containers/index',
            {
                type: "category",
                label: "Labs",
                items: [ 'containers/labs/lab-01' ],
            },
          ],
      },
      {
          type: 'category',
          label: 'Continuous Integration',
          items: ['continuous-integration/index'],
      },
  ],
};
