import React from 'react';
const features = [
  {
    title: 'Getting Started',
    description: (
      <ul className="features__list">
        <li>
          <a href="/InVEST-Cities-in-Nature/docs/invest-intro">About InVEST</a>
        </li>
      </ul>
    ),
  },
  {
    title: 'InVEST Models',
    description: (
      <ul className="features__list">
        <li>
          <a href="/InVEST-Cities-in-Nature/docs/Urban-Cooling/about">Urban Cooling</a>
        </li>
        <li>
          <a href="/InVEST-Cities-in-Nature/docs/Flood-Risk-Mitigation/about">Urban Flood Risk Mitigation</a>
        </li>
        <li>
          <a href="/InVEST-Cities-in-Nature/docs/Coastal-Vulnerability/about">Coastal Vulnerability</a>
        </li>
        <li>
          <a href="/InVEST-Cities-in-Nature/docs/Carbon-Storage-and-Sequestration/about">Carbon Storage and Sequestration</a>
        </li>
      </ul>
    ),
  },
  {
    title: 'How To Guides',
    description: (
      <ul className="features__list">
        <li>
          <a href="https://naturalcapitalproject.stanford.edu/software/invest">
            InVEST Prerequisites
          </a>
        </li>
        <li>
          <a href="https://naturalcapitalproject.stanford.edu/software/invest">
            InVEST Setup
          </a>
        </li>
        <li>
          <a href="https://naturalcapitalproject.stanford.edu/software/invest">
            InVEST Data
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Scientific Impact',
    description: (
      <ul className="features__list">
        <li>
          <a href="https://www.science.org/doi/10.1126/sciadv.abe6025">
            Flood Managed Aquifer Recharge
          </a>
        </li>
        <li>
          <a href="https://cbmjournal.biomedcentral.com/articles/10.1186/s13021-020-00155-2">
            Climate change mitigation in British Columbia’s forest sector
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Miscellaneous',
    description: (
      <ul className="features__list">
        <li>
          <a href="/InVEST-Cities-in-Nature/tutorial/support">Frequently Asked Questions</a>
        </li>
        <li>
          <a href="/InVEST-Cities-in-Nature/case-studies/introduction">Case studies</a>
        </li>
      </ul>
    ),
  },
];

export default features;
