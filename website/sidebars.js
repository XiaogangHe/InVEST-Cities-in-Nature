module.exports = {
  InVEST: [
    'intro',
    {
      type: 'category',
      collapsed: true,
      label: 'Urban Cooling',
      items: ['Urban-Cooling/about', 'Urban-Cooling/data', 'Urban-Cooling/misc'],
    },
    {
      type: 'category',
      collapsed: true,
      label: 'Flood Risk Mitigation',
      items: ['Flood-Risk-Mitigation/about', 'Flood-Risk-Mitigation/data'],
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
