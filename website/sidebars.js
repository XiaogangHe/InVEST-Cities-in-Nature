module.exports = {
  InVEST: [
    'intro',
    {
      type: 'category',
      collapsed: true,
      label: 'Urban Cooling',
      items: ['Urban-Cooling/about', 'Urban-Cooling/data'],
    },
    {
      type: 'category',
      collapsed: true,
      label: 'Flood Risk Mitigation',
      items: ['Flood-Risk-Mitigation/data', 'Flood-Risk-Mitigation/about'],
    },
    {
      type: 'category',
      collapsed: true,
      label: 'Coastal Vulnerability',
      items: ['Coastal-Vulnerability/about', 'Coastal-Vulnerability/data'],
    },
    {
      type: 'category',
      collapsed: true,
      label: 'Carbon Sequestration',
      items: ['Carbon-Storage-and-Sequestration/about', 'Carbon-Storage-and-Sequestration/data'],
    },
  ],
};
