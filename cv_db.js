var DATA = {
  personal_info: {
    name: 'Pedro Viana Maya de Oliveira Pires',
    intro:
      'Fullstack Python developer with focus on the Backend and some experience as Project Manager',
    location: 'Oeiras, Portugal',
    email: 'pedromayapires@gmail.com',
    skype: 'pedromayapires',
    linkedin: 'www.linkedin.com/in/pedromayapires'
  },
  courses: [
    {
      name: 'Computer engineering',
      period: [ '2004-09-15', '2010-09-15' ],
      location:
        'Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa'
    },
    {
      name: 'Mathematics',
      period: [ '2003-09-15', '2004-07-15' ],
      location:
        'Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa'
    }
  ],
  languages: [
    {
      language: 'Portuguese',
      level: 'Native'
    },
    {
      language: 'English',
      level: 'Fluent'
    },
    {
      language: 'Spanish',
      level: 'Basic level'
    }
  ],
  skills_to_ignore: {
    // 'Personal ID software': true
    // Java: true,
    // Spring: true,
    // JSF: true,
    // Hibernate: true
  },
  projects: [
    {
      period: [ '2022-07-18' ],
      entity: 'Ausy',
      project_company: '',
      project: 'Microservices',
      roles: [ 'Backend', 'Senior Dev' ],
      description:
        'Creating microservices and adding features to existing microservices with FastApi. Using unit tests and Postman scripts to check for code integrity.',
      accomplished: '',
      skills: [
        'Agile',
        'Python',
        'Ubuntu',
        'Git',
        'Virtualbox',
        'Rest',
        'Dapr',
        'FastApi',
        'MySql'
      ]
    },
    {
      period: [ '2021-02-01', '2021-09-01' ],
      entity: 'Dohop',
      project_company: '',
      project: 'Travelling search engine',
      roles: [ 'Backend' ],
      description:
        'Creating webservices and improving existing code to communicate with different clients. Usage of agile and testing methodologies to keep code quality high.',
      accomplished: '',
      skills: [ 'Agile', 'Python', 'Ubuntu', 'Git', 'Virtualbox', 'Rest' ]
    },
    {
      period: [ '2019-10-01', '2020-05-01' ],
      entity: 'Affinity',
      project_company: 'Dohop',
      project: 'Travelling search engine',
      roles: [ 'Backend', 'Team leader', 'Senior Dev' ],
      description:
        'Managing a team using Agile methodologies and creating the backend with Django and database in PostgreSql for a new software tool to gather flight and customer information from different sources that had information in MySql or were obtained using API requests and manage that information. Docker was used for code deployement, Git for safe keeping the code and Ubuntu in a development virtual machine.',
      accomplished:
        'Managing a team and creating the backend and database structure for a new software tool to gather flight and customer information and manage that information.',
      skills: [
        'Agile',
        'Python',
        'Django',
        'Docker',
        'Ubuntu',
        'Git',
        'PostgreSql',
        'Virtualbox',
        'MySql',
        'Rest'
      ]
    },
    {
      period: [ '2019-07-01', '2019-10-01' ],
      entity: 'Affinity',
      project_company: 'Kencko',
      project: 'Food supplements',
      roles: [ 'Backend', 'Frontend' ],
      description:
        'Adding and changing functions in the backend using Google functions in Python and creating a frontend with AngularJS to allow better data management and better user interface for the products. Tasks were organized using Agile and development was done using virtual machines with Ubuntu.',
      accomplished:
        'Creating and changing methods in the backend and creating a frontend to allow better data management and better user interface for the products.',
      skills: [
        'Agile',
        'Python',
        'Google functions',
        'Ubuntu',
        'AngularJs',
        'Javascript',
        'Virtualbox',
        'Rest'
      ]
    },
    {
      period: [ '2019-04-01', '2019-07-01' ],
      entity: 'Affinity',
      project_company: 'Probely',
      project: 'Security software',
      roles: [ 'Backend', 'Frontend', 'Team leader', 'Senior Dev' ],
      description:
        'Created a web application using Django and React that would allow a user to introduce sites to be tested by an external security API. Data was stored using a database in PostgreSql, Git was used for code safe keeping, Agile for task managing, Docker for code deployement and an Ubuntu virtual machine for code development.',
      accomplished:
        'Created a web application that would allow a user to introduce sites to be tested by an external security API.',
      skills: [
        'Agile',
        'Python',
        'Django',
        'Ubuntu',
        'React',
        'Git',
        'PostgreSql',
        'Virtualbox',
        'Docker',
        'Rest'
      ]
    },
    {
      period: [ '2018-10-01', '2019-04-01' ],
      entity: 'Affinity',
      project_company: 'Daymon Worldwide',
      project: 'Retail branding and sourcing services',
      roles: [ 'Backend', 'Project manager' ],
      description:
        'Added and optimize existing Django code, fixed existing issues in the PostgreSql database migrations and helped with new procedures to prevent issues again, did interviews to future team members and had some use of AWS servers for deployments and during development. Development was done in a Ubuntu virtual machine and code was backed up in Git.',
      accomplished:
        'Add and optimize existing code, add and optimize work procedures and do interviews to aquire future team members.',
      skills: [
        'Agile',
        'Python',
        'Django',
        'Ubuntu',
        'Git',
        'AWS',
        'Virtualbox',
        'PostgreSql',
        'Rest'
      ]
    },
    {
      period: [ '2018-04-02', '2018-10-01' ],
      entity: 'Affinity',
      project_company: 'Dunnhumby',
      project: 'Product assortment optimization software for retailers',
      roles: [ 'Backend', 'DevOps' ],
      description:
        'Configuring Supervisord containing servers in CentOS to assure optimal response time, optimizing, adding and fixing existing features in Flask Restful code, configuring and installing existing server management software in different servers, managing server procedures using Ansible. Used Git lab for code storing and Ubuntu virtual machines for development.',
      accomplished:
        'Configuring servers, optimizing code, optimizing procedures, configuring and installing the software in different servers, adding and fixing existing features.',
      skills: [
        'Agile',
        'Python',
        'Flask Restful',
        'Ansible',
        'CentOS',
        'Git lab',
        'Supervisord',
        'Virtualbox',
        'Ubuntu',
        'Rest'
      ]
    },
    {
      period: [ '2017-12-26', '2018-03-30' ],
      entity: 'Babel',
      project_company: 'Agência de Modernização administrativa',
      project: 'Data collector',
      roles: [ 'Backend', 'Project manager', 'Team leader', 'Senior Dev' ],
      description:
        'Managing a team and project while creating a web application based on open data tool uData to collect and display information from different entities using Rest and Python data harvesters in a specific format. uData uses Python as a language, MongoDB to store data, Flask as a framework and ElasticSearch and Redis for notifications and data search. CentOs was required by the companies system administrators and Ubuntu was used in the development virtual machines. Agile was used to manage tasks.',
      accomplished:
        'Creating a web application based on open data tool uData to collect and display information from different entities in a specific format.',
      skills: [
        'Agile',
        'Python',
        'MongoDB',
        'Flask',
        'ElasticSearch',
        'Redis',
        'CentOS',
        'Git',
        'Ubuntu',
        'Virtualbox',
        'Rest'
      ]
    },
    {
      period: [ '2017-09-11', '2017-11-01' ],
      entity: 'Agap2It',
      project_company: 'StreamBow',
      project: 'Python script maintenance and application testing',
      roles: [ 'Backend' ],
      description:
        'Development and maintenance of existing Python scripts for invoicing and other purposes, database, in MySql, structural optimization and network bandwidth application testing from NodeJs and PHP solutions.',
      accomplished:
        'Development and maintenance of existing Python scripts, database structural optimization and network bandwidth testing.',
      skills: [ 'Python', 'MySql', 'NodeJs', 'PHP', 'Rest' ]
    },
    {
      period: [ '2016-06-01', '2017-08-31' ],
      entity: 'Leads4Sales',
      project_company: '',
      project: 'Marketing & Call center',
      roles: [ 'Backend', 'Frontend' ],
      description:
        'I created a backoffice in NodeJs and Express using PostgreSql for the database and AngularJs for the frontend, adding pages and features as needed. Created and maintained existing landing pages done in NodeJs, Express and AngularJs, PostgreSql database maintenance, minor helpdesk and system administration PHP scripts maintenance. Ubuntu was used for the development virtual machine.',
      accomplished:
        'Development, updating / maintaining backoffice pages, creating and maintaining existing landing pages, database maintenance, minor helpdesk and system administration tasks.',
      skills: [
        'NodeJs',
        'AngularJs',
        'PostgreSql',
        'Express',
        'Html',
        'CSS',
        'Mercurial',
        'Javascript',
        'PHP',
        'Virtualbox',
        'Ubuntu',
        'Rest'
      ]
    },
    {
      period: [ '2016-03-01', '2016-05-31' ],
      entity: 'Instituto de Medicina Molecular',
      project_company: '',
      project: 'Science: research and teaching',
      roles: [ 'Backend', 'Frontend', 'Project manager' ],
      description:
        'Data import from existing sources like excel, MySql and Ldap, I created a tool, in Django and Jquery for the frontend, to edit, remove and add human resources information later to be stored in a different MySql database. Code was stored in Git, user authentication was done through Django and Ldap, Ubuntu was used for the development virtual machine and all the code and database structure was created from the ground up.',
      accomplished:
        'Data import from existing sources, created a tool, in Django, to edit, remove and add human resources information later to be stored in a MySql database.',
      skills: [
        'Python',
        'Django',
        'Javascript',
        'Jquery',
        'Html',
        'MySql',
        'CSS',
        'Git',
        'Ldap',
        'Virtualbox',
        'Ubuntu',
        'Rest'
      ]
    },
    {
      period: [ '2015-09-01', '2016-03-01' ],
      entity: 'Instituto de Medicina Molecular',
      project_company: '',
      project: 'Science: research and teaching',
      roles: [ 'Backend', 'Frontend', 'Project manager' ],
      description:
        'Resource managing tool created by me made in Django that allowed adding, changing and removing booking entries for specific laboratory resources using a MySql database while managing and importing users from Ldap later stored in the database. Jquery was used on the frontend, all the code and database structure was created from the ground up, git was used to stored the code and Ubuntu was used in the development virtual machine.',
      accomplished:
        'User management and access by webpage and Ldap. Resource managing tool made in Django that allowed adding, changing and removing booking entries for specific resources while managing and importing users from Ldap. Entry reports where done with associated costs.',
      skills: [
        'Python',
        'Django',
        'Javascript',
        'Jquery',
        'Html',
        'MySql',
        'CSS',
        'Git',
        'Ldap',
        'Virtualbox',
        'Ubuntu',
        'Rest'
      ]
    },
    {
      period: [ '2013-01-01', '2015-06-30' ],
      entity: 'Instituto Gulbenkian de ciência',
      project_company: '',
      project: 'Science: research and teaching',
      roles: [ 'Backend', 'Frontend', 'Project manager' ],
      description:
        'Document management application created by me for the accounting and administrative units done by using Django on the backend, Jquery for the frontend and MySql to store the data. The application was created from scratch after getting the requirements from the end users and managers, it was necessary to import data from the previous applications using Ldap and MySql data. The application had Rest and Soap services to get information from outside sources. Code was stored using Git and development was done in a Ubuntu virtual machine.',
      accomplished:
        'Document management application for the accounting and administrative units. Each document type contains different metadata with error checking/specific formating. Document search by type, metadata and comments. Stamp printing and data import from webservices. This was an application done with Django, that also allowed managing users.',
      skills: [
        'Python',
        'Django',
        'Javascript',
        'Jquery',
        'Html',
        'MySql',
        'Soap',
        'Rest',
        'CSS',
        'Git',
        'Virtualbox',
        'Ubuntu'
      ]
    },
    {
      period: [ '2010-12-01', '2013-01-01' ],
      entity: 'Instituto Gulbenkian de ciência',
      project_company: '',
      project: 'Science: research and teaching',
      roles: [ 'Backend', 'Frontend' ],
      description:
        'Added and improved features on a scientific resource management application done in PHP, Jquery on the frontend and MySql to store data. The application allowed the creation of reports and invoices, as well as user management. Development was done in a Ubuntu virtual machine and code was stored in Git.',
      accomplished:
        'Resource managing by adding, changing and removing entries. Entry report with associated costs, user and respective access management.',
      skills: [
        'PHP',
        'Javascript',
        'Jquery',
        'Html',
        'MySql',
        'PostgreSql',
        'CSS',
        'Git',
        'Virtualbox',
        'Ubuntu',
        'Rest'
      ]
    },
    {
      period: [ '2010-05-01', '2010-11-01' ],
      entity: 'PT-SI',
      project_company: '',
      project: 'Information systems and technology, Academic intership',
      roles: [ 'Intern', 'Backend', 'Frontend' ],
      description:
        'Alfresco application analysis, feature testing, planning and implementing. Alfresco was a tool with Java on the backend, JSF for the frontend and Hibernate to handle databases. Personal ID software was used to sign documents.',
      accomplished:
        'Alfresco application analysis, feature testing, planning and implementing.',
      skills: [
        'Javascript',
        'Html',
        'CSS',
        'Java',
        'Spring',
        'JSF',
        'Hibernate',
        'Personal ID software',
        'Subversion',
        'Rest'
      ]
    },
    {
      period: [ '2010-03-15', '2010-05-01' ],
      entity: 'PT-SI',
      project_company: '',
      project: 'Information systems and technology, Academic intership',
      roles: [ 'Intern', 'Backend', 'Frontend' ],
      description:
        'KnowledgeTree application analysis, feature testing, planning and implementing. KnowledgeTree was a toold with PHP on the backend and regular Javascript for the frontend.',
      skills: [ 'PHP', 'Javascript', 'Html', 'CSS' ]
    }
  ]
};

export default DATA;
