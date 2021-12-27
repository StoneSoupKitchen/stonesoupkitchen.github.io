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
                items: [
                    'containers/labs/lab-01',
                    'containers/labs/lab-02',
                    'containers/labs/lab-03'
                ],
            },
          ],
      },
      {
          type: 'category',
          label: 'Continuous Integration',
          items: ['continuous-integration/index'],
      },
      {
          type: 'category',
          label: 'Software Supply Chain Security',
          items: ['software-supply-chain-security/index'],
      },
  ],
};
