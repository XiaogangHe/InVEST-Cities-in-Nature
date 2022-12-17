import React from 'react';
const features = [
  {
    title: 'Getting Started',
    description: (
      <ul className="features__list">
        <li>
          <a href="/docs/">Introduction to InVEST</a>
        </li>
        <li>
          <a href="/docs/about-moja-global">About InVEST</a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Models',
    description: (
      <ul className="features__list">
        <li>
          <a href="/docs/FLINT/About">Urban Cooling</a>
        </li>
        <li>
          <a href="/docs/FLINT-Cloud/About">Urban Flooding</a>
        </li>
        <li>
          <a href="/docs/FLINT-Reporting-Tool/About">Carbon Sequestration</a>
        </li>
      </ul>
    ),
  },
  {
    title: 'How To Guides',
    description: (
      <ul className="features__list">
        <li>
          <a href="https://docs.moja.global/en/latest/prerequisites/index.html">
            FLINT Prerequisites
          </a>
        </li>
        <li>
          <a href="https://docs.moja.global/en/latest/DevelopmentSetup/index.html">
            FLINT Development Setup
          </a>
        </li>
        <li>
          <a href="https://docs.moja.global/en/latest/GCBMDevelopmentSetup/index.html">
            GCBM Development Setup
          </a>
        </li>
        <li>
          <a href="https://docs.moja.global/en/latest/DeveloperWorkflow/index.html">
            GitHub Workflow
          </a>
        </li>
        <li>
          <a href="https://docs.moja.global/en/latest/DocumentationStyleGuide/index.html">
            Writing documentation
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Documentation',
    description: (
      <ul className="features__list">
        <li>
          <a href="https://docs.moja.global/">InVEST Cities in Nature Website</a>
        </li>
        <li>
          <a href="https://docs.moja.global/projects/flint-reporting/en/latest/">InVEST Reporting</a>
        </li>
        <li>
          <a href="https://docs.moja.global/projects/GCBM-Chile-Data-Preprocessing-Tools/en/latest/">
            InVEST Land Use Scenario Generation Tools
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
          <a href="https://docs.moja.global/en/latest/faq.html">Frequently Asked Questions</a>
        </li>
        <li>
          <a href="/tutorial/tutorial-introduction">Tutorials</a>
        </li>
        <li>
          <a href="/case-studies/introduction">Case studies</a>
        </li>
      </ul>
    ),
  },
];

export default features;
