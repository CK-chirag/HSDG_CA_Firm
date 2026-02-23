const industries = [
  {
    title: 'Manufacturing & Industrial Enterprises',
    slug: 'manufacturing-industrial',
    images: [
      'https://www.manufacturingtodayindia.com/cloud/2024/05/13/indian-manufacturing-sector-scaled.jpg',
      'https://www.jrautomation.com/_next/image?q=75&url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F41hcjk5q%2Fproduction%2F9e9d0a9e0126a1a91b8c6b4b051904b071fcb1a7-493x335.jpg%3Fauto%3Dformat&w=1080',
      'https://www.isitindia.com/images/modular-furniture-factory-2.jpg',
    ],
    overview: [
      'Manufacturing enterprises operate across complex supply chains and strict regulatory frameworks.',
      'Financial governance must align with inventory controls, production costing, and statutory reporting.',
      'Our advisory focuses on compliance accuracy, cost visibility, and risk controls across plants.',
    ],
    challenges: [
      'Cost accounting and inventory valuation accuracy',
      'GST compliance and input tax optimization',
      'Excise legacy matters and documentation gaps',
      'Working capital and bank reporting discipline',
      'Internal controls and stock audits',
    ],
    services: [
      'Costing system review and inventory valuation support',
      'GST compliance checks and ITC reconciliation',
      'Legacy excise matter advisory and documentation',
      'Working capital monitoring and lender reporting packs',
      'Internal control design and stock audit programs',
    ],
    engagements: [
      'Implemented monthly inventory reconciliation and cycle count controls for a multi-location unit.',
      'Supported GST audit preparation and resolved vendor ITC mismatches.',
      'Designed stock audit templates aligned to lender reporting.',
    ],
  },
  {
    title: 'Logistics & Transportation',
    slug: 'logistics-transportation',
    images: [
      'https://img.etb2bimg.com/files/cp/upload-0.66587000%2015822823513121-truck-fleet.jpg',
      'https://www.ibef.org/uploads/blog/1683692592_089a29d25abf495f65ef.png',
      'https://www.ibef.org/assets/images/Road-Infrastructure-3.jpg',
    ],
    overview: [
      'Logistics businesses face high transaction volumes, multi-branch operations, and tight margins.',
      'Regulatory compliance is impacted by e-way bills, freight taxation, and asset financing.',
      'We help streamline branch accounting, tax compliance, and cash flow visibility.',
    ],
    challenges: [
      'Freight taxation and rate classification issues',
      'E-way bill compliance and documentation integrity',
      'Fleet financing and asset capitalization accuracy',
      'Branch accounting and inter-branch reconciliations',
      'Cash flow monitoring and MIS reporting',
    ],
    services: [
      'GST and e-way bill compliance reviews',
      'Fleet asset capitalization and depreciation policy setup',
      'Branch accounting SOPs and reconciliation cycles',
      'MIS dashboards for route-wise profitability',
      'Cash flow forecasting and working capital reviews',
    ],
    engagements: [
      'Built branch-level accounting templates for a regional transporter.',
      'Reviewed fleet capitalization and aligned depreciation policies.',
      'Implemented weekly cash flow reporting for route profitability.',
    ],
  },
  {
    title: 'Real Estate & Infrastructure',
    slug: 'real-estate-infrastructure',
    images: [
      'https://images.moneycontrol.com/static-mcnews/2022/08/Construction-PTI-1-770x433.jpg?height=431&impolicy=website&width=770',
      'https://www.ibef.org/assets/images/Road-Infrastructure-3.jpg',
      'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/im7aT7hszSDQ/v0/-1x-1.webp',
    ],
    overview: [
      'Real estate projects involve long cycles, complex contracts, and strict regulatory oversight.',
      'Financial reporting must capture revenue recognition, project costs, and compliance obligations.',
      'We support developers and infrastructure firms with project accounting and governance controls.',
    ],
    challenges: [
      'Revenue recognition and milestone accounting',
      'RERA compliance and reporting timelines',
      'Joint development agreement accounting',
      'Project accounting and fund tracking',
      'GST implications on construction contracts',
    ],
    services: [
      'Project accounting setup and cost tracking',
      'RERA compliance readiness and reporting',
      'JDA advisory and revenue recognition support',
      'GST impact analysis for construction contracts',
      'Fund utilization tracking and lender reporting',
    ],
    engagements: [
      'Reviewed revenue recognition policy for multi-phase projects.',
      'Prepared RERA reporting packs and compliance checklists.',
      'Built project-wise fund tracking dashboards.',
    ],
  },
  {
    title: 'Technology & Startups',
    slug: 'technology-startups',
    images: [
      'https://assets.entrepreneur.com/content/3x2/2000/20160723115935-standingdesk.jpeg',
      'https://cdn.builtin.com/cdn-cgi/image/f%3Dauto%2Cfit%3Dcover%2Cw%3D1200%2Ch%3D635%2Cq%3D80/sites/www.builtin.com/files/2024-02/technology-companies-india.jpg',
      'https://www.synapseindia.com/UserFiles/Structure%20of%20software%20development%20team.png',
    ],
    overview: [
      'Technology companies scale fast and need finance systems that keep pace with growth.',
      'Compliance spans ESOPs, FEMA, valuation, and investor reporting expectations.',
      'We deliver structured reporting, compliance planning, and fundraising readiness.',
    ],
    challenges: [
      'ESOP structuring and accounting impact',
      'Valuation and fundraising support',
      'Angel tax implications and documentation',
      'FEMA compliance for foreign funding',
      'Financial modeling and investor reporting',
    ],
    services: [
      'ESOP advisory and accounting support',
      'Valuation coordination and due diligence readiness',
      'FEMA and RBI compliance documentation',
      'Board reporting packs and KPI dashboards',
      'Fundraise-ready financial models',
    ],
    engagements: [
      'Prepared investor reporting packs and KPI dashboards for growth-stage startups.',
      'Supported FEMA compliance documentation for inbound funding.',
      'Assisted in ESOP accounting and disclosures.',
    ],
  },
  {
    title: 'Media & Entertainment',
    slug: 'media-entertainment',
    images: [
      'https://bsmedia.business-standard.com/_media/bs/img/article/2022-07/01/full/1656650248-9346.jpg',
      'https://assets.architecturaldigest.in/photos/6811e699804c4877427a14ac/master/w_1600%2Cc_limit/Screenshot%25202025-03-04%2520at%25201.10.31%25E2%2580%25AFPM.jpg',
      'https://www.thevisualhouse.in/blog/public/assets/images/blog/banner/desktop/1686809693-Blog%20banner%20image.jpg',
    ],
    overview: [
      'Media projects involve project-based budgeting, revenue sharing, and contract compliance.',
      'Taxation and GST treatment vary by distribution and sponsorship models.',
      'We help build transparent production accounting and compliance structures.',
    ],
    challenges: [
      'Production accounting and cost tracking',
      'Revenue sharing and royalty models',
      'GST on exhibition and distribution',
      'Sponsorship structuring and tax implications',
      'Compliance for event-based operations',
    ],
    services: [
      'Project accounting and cost reporting frameworks',
      'Revenue share and royalty reconciliation',
      'GST advisory for exhibition and distribution',
      'Sponsorship contract structuring support',
      'Compliance checklists for events and shows',
    ],
    engagements: [
      'Designed production cost reporting and budget controls.',
      'Reviewed GST positions for distribution agreements.',
      'Built compliance trackers for multi-city events.',
    ],
  },
  {
    title: 'Healthcare & Professionals',
    slug: 'healthcare-professionals',
    images: [
      'https://interiordesign10.weebly.com/uploads/1/3/1/0/131001996/wjskpfnujr_orig.jpg',
      'https://images.picxy.com/cache/2020/6/17/cd85b8fe02b4de145486bf026025e753.jpg',
      'https://sgpgims.org.in/Departments/Hospital_Administration/images/Ha1.jpeg',
    ],
    overview: [
      'Healthcare entities must balance operational compliance with professional income structures.',
      'Regulations span payroll, TDS, and establishment-level statutory requirements.',
      'We support clinics and hospitals with compliance routines and governance structures.',
    ],
    challenges: [
      'Professional income structuring and documentation',
      'TDS and payroll compliance',
      'Medical establishment regulations',
      'Partnership structuring for clinics',
    ],
    services: [
      'Income structuring and tax compliance planning',
      'Payroll and TDS review processes',
      'Compliance checklists for establishments',
      'Clinic partnership structuring support',
      'Periodic financial health reviews',
    ],
    engagements: [
      'Set up payroll compliance reviews for multi-location clinics.',
      'Drafted partnership structures for specialist groups.',
      'Prepared monthly compliance trackers and MIS.',
    ],
  },
  {
    title: 'NGOs, Trusts & Section 8 Companies',
    slug: 'ngos-trusts-section-8',
    images: [
      'https://drop.ndtv.com/albums/NEWS/ngo-enable-indi_637844384770315271/637844384784253341.jpeg',
      'https://www.omcharitabletrust.com/images/omct/gallery/ipvc15/prize_images/prize31.JPG',
      'https://growup-india.com/assets/section8.png',
    ],
    overview: [
      'Non-profit entities require robust documentation and compliance to maintain exemptions.',
      'Regulatory reporting includes registrations, grant utilization, and CSR compliance.',
      'We help build transparent accounting and governance for boards and donors.',
    ],
    challenges: [
      '12A and 80G registration compliance',
      'CSR fund utilization tracking',
      'FCRA advisory and compliance',
      'Grant accounting and utilization certificates',
      'Regulatory reporting and disclosures',
    ],
    services: [
      'Registration and exemption advisory',
      'Grant accounting and utilization support',
      'FCRA compliance documentation',
      'CSR reporting and fund reconciliation',
      'Board reporting and governance support',
    ],
    engagements: [
      'Prepared 12A/80G registration documentation packs.',
      'Built grant utilization trackers and reporting templates.',
      'Advised on CSR fund compliance and reporting.',
    ],
  },
]

export { industries }
