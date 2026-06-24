export const profile = {
  name: 'Bhushan Borole',
  contact: [
    { label: 'borolebhushan8@gmail.com', href: 'mailto:borolebhushan8@gmail.com' },
    { label: 'Dublin, Ireland' },
  ],
}

export const about = [
  "I'm a software engineer based in Dublin, currently building the sync service that keeps billions of identities, groups and access policies consistent across Microsoft's global data stores, alongside real-time threat detection that spots anomalies the moment they appear. I love turning messy, ambiguous problems into systems that scale calmly under pressure.",
  "Off the keyboard you'll find me playing tabla, smashing in badminton or gaming. Always experimenting, always learning.",
]

export const socials = [
  { name: 'GitHub',   href: 'https://github.com/bhushan-borole' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bhushan-borole/' },
]

export const education = [
  {
    title: 'MSc - Intelligent Systems',
    org: 'Trinity College Dublin',
    date: 'Sept 2021 – Sept 2022',
    detail:
      'Courses: Data Analytics, Artificial Intelligence, Adaptive Applications, Information Retrieval and Web Search, Knowledge and Data Engineering',
  },
  {
    title: 'B.E. in Computer Engineering',
    org: 'St. Francis Institute Of Technology',
    date: 'Aug 2016 – Nov 2020',
    detail: 'CGPA: 8.72/10 (First class with Distinction)',
  },
]

export const experience = [
  {
    title: 'Microsoft',
    org: 'Software Engineer 2',
    date: 'Sept 2022 – Present',
    bullets: [
      'Engineered security automation pipelines to detect threat actor activity across Microsoft Identity services, strengthening anomaly detection, signal correlation, and incident response coverage across upstream and downstream identity services.',
      'Owned security posture monitoring for ~200 TCB (Trusted Computing Base) services, driving compliance readiness, control attestation, and operational accountability across the identity trust boundary.',
      'Led privacy engineering across IDNA by identifying EUDB (EU Data Boundary) and GDPR compliance gaps, raising data residency and data subject rights violations, and partnering with service owners to remediate non-compliant data flows.',
      'Operate high-throughput GetChanges-based delta replication with low-latency end-to-end propagation, leveraging watermark/cookie-based change tracking, partition-aware fan-out, and a highly available ring topology to keep identity data consistent, fresh, and authoritative across distributed systems.',
    ],
  },
  {
    title: 'Research and Development Intern',
    org: 'Mobisy Technologies',
    date: 'Nov 2020 – Feb 2021',
    bullets: [
      'Collected JSON data by web-scraping from 9-10 websites, using open API end points and storing it in a RDBMS.',
      'Responsible for building SKU Classification system using the collected data.',
    ],
  },
  {
    title: 'Backend Developer',
    org: 'Techskills IT Consultants',
    date: 'Sept 2019 – Oct 2019',
    bullets: [
      "Developed applications using Spring Framework for Backend Restful API's.",
      'Wrote SQL/JPQL queries for Data persistence using Spring Data JPA.',
    ],
  },
]

export const projects = [
  {
    eyebrow: 'Featured Project',
    title: 'Nuharc — Smart City Disaster Report App',
    description:
      'A realtime, citizen-driven disaster response platform for Dublin that fuses live traffic, emergency dispatch, and dynamic re-routing into one always-on system.',
    bullets: [
      'Realtime traffic + incident reporting with up to 300 ms latency end-to-end.',
      'Fuses heterogeneous velocity data streams for ~99.9% accuracy.',
      'Socket-driven live disaster updates and on-the-fly user re-routing.',
      'Auto-dispatches emergency services the moment a citizen reports.',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Docker', 'Azure'],
    github: 'https://github.com/bhushan-borole/nuharc',
  },
]

export const skills = [
  { label: 'Web', items: 'ReactJS, Python-Flask, JavaScript, CSS, HTML' },
  { label: 'Database', items: 'SQL Server, MySQL, Sqlite3' },
  { label: 'Languages', items: 'Python, Java, C++, C, PHP, JavaScript' },
  { label: 'Tools', items: 'Git, Vim, VS Code, IntelliJ IDEA, Android Development with Java' },
]

export const oss = {
  intro: [
    { text: 'Vouched by 2 mozillians ' },
    { text: 'here', href: 'https://wiki.mozilla.org/Add-ons/Contribute/Vouch' },
    { text: '.' },
  ],
  items: [
    {
      org: 'TaskCluster',
      repo: 'tc-admin',
      links: [{ label: '#135', href: 'https://github.com/taskcluster/tc-admin/pull/135' }],
      detail: 'Allow customization of the description prefix.',
    },
    {
      org: 'Mozilla',
      repo: 'addons-server',
      links: [
        { label: '#17615', href: 'https://github.com/mozilla/addons-server/pull/17615' },
        { label: '#17589', href: 'https://github.com/mozilla/addons-server/pull/17589' },
      ],
      detail: 'AMO Server bug fix.',
    },
    {
      org: 'Google',
      repo: 'turbinia',
      links: [{ label: '#848', href: 'https://github.com/google/turbinia/pull/848' }],
      detail: 'Run redis-server on subsequent start of devcontainer.',
    },
  ],
}

export const certifications = [
  'Oracle Certified Associate Java SE 8 Programmer',
  'Microsoft Technology Associate - Python',
  'Certified Tensorflow Developer (Apr 2020 - Apr 2023)',
  'Google Assistant Developer',
]

export const extracurricular = [
  {
    title: 'Technical Team and Web Master, Codex (Student Fraternity)',
    text:
      'Organized hackathons for college students and events like Augmented Reality treasure hunt game and a Virtual Reality based maze.',
  },
  {
    title: 'Hackathons',
    text: 'Ranked Top 10 at TSEC and DJSCE hacks.',
  },
]

export const references = {
  note: 'Available upon request.',
}
