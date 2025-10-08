var DATA = {
  personal_info: {
    name: "Pedro Viana Maya de Oliveira Pires",
    intro:
      "Backend Python developer with knowledge in Frontend, DevOps and Project Manager",
    location: "Portugal, Azores",
    id: "pedromayapires",
    email: "@gmail.com",
    linkedin: "www.linkedin.com/in/",
    github: ".github.io",
  },
  degrees: [
    {
      name: "Computer engineering",
      // period: [ '2004-09-15', '2010-09-15' ],
      location:
        "Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa",
    },
    // {
    //   name: 'Mathematics',
    //   period: [ '2003-09-15', '2004-07-15' ],
    //   location:
    //     'Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa'
    // }
  ],
  languages: [
    {
      language: "Portuguese",
      level: "Native",
    },
    {
      language: "English",
      level: "Fluent",
    },
    {
      language: "Spanish",
      level: "Basic level",
    },
  ],
  skills_to_highlight: [
    "Python",
    "FastAPI",
    "Django",
    "Docker",
    "PyTest",
    "MySql",
    "PostgreSql",
  ],
  roles_to_highlight: [
    "Backend",
    "DevOps",
    "Project manager",
    "Frontend",
    "Team leader",
  ],
  skills_to_add: {
    // skill: number of months
    Pandas: 1,
  },
  skills_to_ignore: {
    "Personal ID software": true,
    Rest: true,
    Git: true,
    Agile: true,
    CSS: true,
    Soap: true,
    Html: true,
    Java: true,
    Spring: true,
    JSF: true,
    Ubuntu: true,
    Hibernate: true,
    Express: true,
    CentOS: true,
    Subversion: true,
    PHP: true,
    Mercurial: true,
    Jquery: true,
    "Google functions": true,
    "Git lab": true,
    Supervisord: true,
    "Co-Pilot": true,
    Virtualbox: true,
  },
  clients: [
    {
      entity: "Abelhas Intemporais",
      projects: [
        {
          name: "ScalaBit",
          period: ["2025-05-12", "2025-09-01"],
          roles: ["Backend", "DevOps"],
          description:
            "Creating microservices, adding and modifying features with Python using FastAPI, Postgresql and Docker",
          skills: [
            "Agile",
            "Python",
            "Git",
            "GitHub Actions",
            "GitHub Workflows",
            "Rest",
            "FastAPI",
            "PyTest",
            "Docker",
          ],
        },
        {
          name: "KCS-IT",
          period: ["2024-09-16", "2025-02-01"],
          roles: ["Backend"],
          description:
            "Creating microservices, adding and modifying features with Python using FastAPI, Postgresql and Docker",
          skills: [
            "Agile",
            "Python",
            "Ubuntu",
            "Git",
            "Rest",
            "FastAPI",
            "PyTest",
            "Docker",
          ],
        },
      ],
    },
    {
      entity: "Ausy",
      projects: [
        {
          name: "A.I.",
          period: ["2024-04-01", "2024-07-15"],
          roles: ["Backend"],
          description:
            "Creating a test microservice using the help of Co-Pilot to check the usefulness and efficiency of the tool.",
          skills: [
            "Agile",
            "Python",
            "Ubuntu",
            "Git",
            "Virtualbox",
            "Co-Pilot",
            "PyTest",
            "Rest",
          ],
        },
        {
          name: "Microservices",
          period: ["2022-07-18", "2024-04-01"],
          roles: ["Backend"],
          description:
            "Creating microservices and adding features to existing microservices with FastAPI. Using unit tests and Postman scripts to check for code integrity.",
          skills: [
            "Agile",
            "Python",
            "Ubuntu",
            "Git",
            "Virtualbox",
            "Rest",
            "Dapr",
            "Docker",
            "FastAPI",
            "PyTest",
            "MySql",
          ],
        },
      ],
    },
    {
      entity: "Dohop",
      projects: [
        {
          name: "Travelling search engine",
          period: ["2021-02-01", "2021-09-01"],
          roles: ["Backend"],
          description:
            "Creating webservices and improving existing code to communicate with different projects. Usage of agile and testing methodologies to keep code quality high.",
          skills: ["Agile", "Python", "Ubuntu", "Git", "Virtualbox", "Rest"],
        },
      ],
    },
    {
      entity: "Affinity",
      projects: [
        {
          name: "Travelling search engine",
          period: ["2019-10-01", "2020-05-01"],
          roles: ["Backend", "Team leader"],
          description:
            "Managing a team and creating the backend and database structure for a new software tool to gather flight and customer information and manage that information.",
          skills: [
            "Agile",
            "Python",
            "Django",
            "Docker",
            "Ubuntu",
            "Git",
            "PostgreSql",
            "Virtualbox",
            "MySql",
            "React",
            "Rest",
          ],
        },
        {
          name: "Food supplements",
          period: ["2019-07-01", "2019-10-01"],
          roles: ["Backend", "Frontend"],
          description:
            "Creating and changing Google lambda functions in the backend and creating a frontend to allow better data management and better user interface for the products.",
          skills: [
            "Agile",
            "Python",
            "Google lambda",
            "Ubuntu",
            "AngularJs",
            "Javascript",
            "Virtualbox",
            "Rest",
          ],
        },
        {
          name: "Security software",
          period: ["2019-04-01", "2019-07-01"],
          roles: ["Backend", "Frontend", "Team leader"],
          description:
            "Created a web application that would allow a user to introduce sites to be tested by an external security API.",
          skills: [
            "Agile",
            "Python",
            "Django",
            "Ubuntu",
            "React",
            "Git",
            "PostgreSql",
            "Virtualbox",
            "Docker",
            "Rest",
          ],
        },
        {
          name: "Retail branding and sourcing services",
          period: ["2018-10-01", "2019-04-01"],
          roles: ["Backend", "Project manager"],
          description:
            "Add and optimize existing code, add and optimize work procedures and do interviews to aquire future team members.",
          skills: [
            "Agile",
            "Python",
            "Django",
            "Ubuntu",
            "Git",
            "AWS",
            "Virtualbox",
            "PostgreSql",
            "AWS",
            "Rest",
          ],
        },
        {
          name: "Product assortment optimization software for retailers",
          period: ["2018-04-02", "2018-10-01"],
          roles: ["Backend", "DevOps"],
          description:
            "Configuring servers, optimizing code, optimizing procedures, configuring and installing the software in different servers, adding and fixing existing features.",
          skills: [
            "Agile",
            "Python",
            "Flask",
            "Ansible",
            "CentOS",
            "Git lab",
            "Supervisord",
            "Virtualbox",
            "Ubuntu",
            "AWS",
            "Rest",
          ],
        },
      ],
    },
    {
      entity: "Babel",
      projects: [
        {
          name: "Data collector",
          period: ["2017-12-26", "2018-03-30"],
          roles: ["Backend", "Project manager", "Team leader"],
          description:
            "Creating a web application based on open data tool uData to collect and display information from different entities in a specific format.",
          skills: [
            "Agile",
            "Python",
            "MongoDB",
            "Flask",
            "ElasticSearch",
            "Redis",
            "CentOS",
            "Git",
            "Ubuntu",
            "Virtualbox",
            "Azure",
            "Rest",
          ],
        },
      ],
    },
    {
      entity: "Agap2It",
      projects: [
        {
          name: "Python script maintenance and application testing",
          period: ["2017-09-11", "2017-11-01"],
          roles: ["Backend"],
          description:
            "Development and maintenance of existing Python scripts, database structural optimization and network bandwidth testing.",
          skills: ["Python", "MySql", "NodeJs", "PHP", "Rest"],
        },
      ],
    },
    {
      entity: "Leads4Sales",
      projects: [
        {
          name: "Marketing & Call center",
          period: ["2016-06-01", "2017-08-31"],
          roles: ["Backend", "Frontend"],
          description:
            "Development, updating / maintaining backoffice pages, creating and maintaining existing landing pages, database maintenance, minor helpdesk and system administration tasks.",
          skills: [
            "NodeJs",
            "AngularJs",
            "PostgreSql",
            "Express",
            "Html",
            "CSS",
            "Mercurial",
            "Javascript",
            "PHP",
            "Virtualbox",
            "Ubuntu",
            "Rest",
          ],
        },
      ],
    },
    {
      entity: "Instituto de Medicina Molecular",
      projects: [
        {
          name: "H.R. Manager",
          period: ["2016-03-01", "2016-05-31"],
          roles: ["Backend", "Frontend", "Project manager"],
          description:
            "Data import from existing sources, created a tool, in Django, to edit, remove and add human resources information later to be stored in a MySql database.",
          skills: [
            "Python",
            "Django",
            "Javascript",
            "Jquery",
            "Html",
            "MySql",
            "CSS",
            "Git",
            "Ldap",
            "Virtualbox",
            "Ubuntu",
            "Rest",
          ],
        },
        {
          name: "Resource, user and document manager",
          period: ["2015-09-01", "2016-03-01"],
          roles: ["Backend", "Frontend", "Project manager"],
          description:
            "User management and access by webpage and Ldap. Resource managing tool made in Django that allowed adding, changing and removing booking entries for specific resources while managing and importing users from Ldap. Entry reports where done with associated costs.",
          skills: [
            "Python",
            "Django",
            "Javascript",
            "Jquery",
            "Html",
            "MySql",
            "CSS",
            "Git",
            "Ldap",
            "Virtualbox",
            "Ubuntu",
            "Rest",
          ],
        },
      ],
    },
    {
      entity: "Instituto Gulbenkian de ciência",
      projects: [
        {
          name: "Document manager",
          period: ["2013-01-01", "2015-06-30"],
          roles: ["Backend", "Frontend", "Project manager"],
          description:
            "Document management application for the accounting and administrative units. Each document type contains different metadata with error checking/specific formating. Document search by type, metadata and comments. Stamp printing and data import from webservices. This was an application done with Django, that also allowed managing users.",
          skills: [
            "Python",
            "Django",
            "Javascript",
            "Jquery",
            "Html",
            "MySql",
            "Soap",
            "Rest",
            "CSS",
            "Git",
            "Virtualbox",
            "Ubuntu",
          ],
        },
        {
          name: "Resource manager",
          period: ["2010-12-01", "2013-01-01"],
          entity: "Instituto Gulbenkian de ciência",
          roles: ["Backend", "Frontend"],
          description:
            "Resource managing by adding, changing and removing entries. Entry report with associated costs, user and respective access management.",
          skills: [
            "PHP",
            "Javascript",
            "Jquery",
            "Html",
            "MySql",
            "PostgreSql",
            "CSS",
            "Git",
            "Virtualbox",
            "Ubuntu",
            "Rest",
          ],
        },
      ],
    },
    {
      entity: "PT-SI",
      projects: [
        {
          name: "Document manager with Alfresco",
          period: ["2010-05-01", "2010-11-01"],
          roles: ["Backend", "Frontend", "Intern"],
          description:
            "Alfresco application analysis, feature testing, planning and implementing.",
          skills: [
            "Javascript",
            "Html",
            "CSS",
            "Java",
            "Spring",
            "JSF",
            "Hibernate",
            "Personal ID software",
            "Subversion",
            "Rest",
          ],
        },
        {
          name: "Document manager with KnowledgeTree",
          period: ["2010-03-15", "2010-05-01"],
          roles: ["Backend", "Frontend"],
          description:
            "KnowledgeTree application analysis, feature testing, planning and implementing. KnowledgeTree was a toold with PHP on the backend and regular Javascript for the frontend.",
          skills: ["PHP", "Javascript", "Html", "CSS"],
        },
      ],
    },
  ],
};

export default DATA;
