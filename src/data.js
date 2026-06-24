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
    title: 'Woyse - A Multilingual Entity Recognition System',
    bullets: [
      'Built an end-to-end intent and entity recognition microservice in Django using Rasa NLU Engine.',
      'Used Python as a main stack, and used Tornado for socket connection.',
    ],
  },
  {
    title: 'Limitless',
    bullets: [
      'App that allows you to share ANY amount of data from one system to another.',
      'The file is encoded using base64, then it is split into chunks and uploaded to Google Sheets. While downloading the serial order is maintained and it is decoded at client\u2019s end.',
    ],
  },
  {
    title: 'Text Summarization',
    bullets: [
      'It summarizes the given text into number of sentences or words in English and Punjabi.',
      'Created in Flask and deployed on Google App Engine.',
    ],
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
