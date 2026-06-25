var CV = {

    /* ── Section Titles ─────────────────────────── */
    titulos: {
        resumo: 'Professional Summary',
        skills: 'Skills',
        experiencias: 'Experience',
        formacao: 'Education',
        certificacoes: 'Certifications',
        idiomas: 'Languages',
        premiacoes: 'Awards'
    },

    /* ── Header ─────────────────────────────────── */
    nome: 'Eber Lucas Cerqueira Elias',
    cargo: 'Mid-level DBA | SQL Server • Oracle • MySQL • PostgreSQL • MongoDB',

    contato: [
        /* row 1 */
        { icone: 'phone', texto: '+55 (61) 99562-6861' },
        { icone: 'mail', texto: 'eberteclas@gmail.com', href: 'mailto:eberteclas@gmail.com' },
        { icone: 'location', texto: 'Brasília, DF 72748-001' },
        /* row 2 */
        { icone: 'linkedin', texto: 'https://www.linkedin.com/in/eber-tlc/', href: 'https://www.linkedin.com/in/eber-tlc/' },
        { icone: 'github', texto: 'https://github.com/ebertlc', href: 'https://github.com/ebertlc' },
    ],

    /* ── Summary ────────────────────────────────── */
    resumoVisivel: false,
    resumo: `Mid-level DBA with 3 years of experience in Federal Government agencies (MPDFT and MIDR), where I developed solid expertise in SQL Server, Oracle, PostgreSQL, MongoDB, and MySQL database administration. I have strong skills in high availability with AlwaysOn and replication, automation using T-SQL scripts, PL/SQL, Ansible, and Python, backup management with Commvault, and ETL package development. I seek to further deepen my knowledge in data administration within complex, high-demand environments, contributing to security, performance, and reliability.`,

    /* ── Skills ─────────────────────────────────── */
    skills: [
        { titulo: 'DBMS', skills: ['SQL Server (advanced)', 'Oracle (intermediate)', 'PostgreSQL (advanced)', 'MySQL (advanced)', 'MongoDB (advanced)'] },
        { titulo: 'High Availability', skills: ['AlwaysOn (intermediate)', 'Replication (intermediate)', 'Clustering (basic)', 'Failover (intermediate)'] },
        { titulo: 'Automation/Scripting', skills: ['SQL (advanced)', 'T-SQL (intermediate)', 'PL/SQL (intermediate)', 'Python (advanced)', 'Bash (intermediate)', 'Ansible (basic)'] },
        { titulo: 'Backup/Recovery', skills: ['Commvault (intermediate)'] },
        { titulo: 'Infrastructure', skills: ['Windows Server (advanced)', 'Linux (intermediate)', 'AWS (basic)'] }
    ],

    /* ── Experience ─────────────────────────────── */
    experiencias: [
        {
            empresa: 'MPDFT – Public Prosecution Office of the Federal District and Territories',
            cargo: 'Information Technology Resident – DBA, Brasília, DF',
            periodo: 'August 2024 – Present',
            itens: [
                'Executed over 8 database migrations to new servers, ensuring zero data loss;',
                'Managed manual backups/restores (DBMS/Commvault) and snapshots for testing environments;',
                'Created and managed logins/users, permissions, and operations auditing;',
                'Implemented and maintained AlwaysOn clusters for 5 SQL Server and 1 MongoDB servers, ensuring high availability and automatic failover;',
                'Administered backups/restores via Commvault for 48 SQL Server, MongoDB, MySQL, PostgreSQL, Oracle, and Caché servers, with periodic restoration tests;',
                'Installed, updated, and created/deactivated objects (databases, jobs, linked servers);',
                'Automated operational tasks via T-SQL, OS, and Ansible scripts, reducing manual routine execution time by 40%;',
                'Developed and maintained ETL packages for integration between systems;',
                'Acted in database incident resolution, supporting 9 teams/systems;',
                'Data export/import and ODBC connection configuration;',
                'Created and maintained technical documentation (wikis, manuals) for 30 processes, reducing reliance on individual knowledge.',
            ],
        },
        {
            empresa: 'MIDR – Ministry of Regional Development',
            cargos: [
                {
                    cargo: 'Data Processing Assistant, Brasília, DF',
                    periodo: 'November 2023 – August 2024',
                    itens: [
                        'Supported the development and maintenance of SEDEC (National Secretariat for Protection and Civil Defense) systems, acting as an interface between the technical area and the secretariat\'s needs;',
                        'Extracted and analyzed data in Oracle databases to support strategic decisions of the secretariat;',
                        'Prepared reports and presentations with data extracted directly from the database, translating technical information for managers;',
                        'Maintained data backup and recovery routines in Oracle environments, ensuring information integrity and availability;',
                        'Developed Python and SQL scripts for operational task automation and updates in Oracle databases, reducing manual intervention;',
                        'Documented technical processes and operational procedures for SEDEC systems, standardizing routines for the team.',
                        'Supported users of the S2iD (Integrated Disaster Information System), developing SQL scripts for direct corrections in the production database;',
                        'Acted as one of the business representatives alongside the software factory in creating the new version of the platform, defining requirements and approving deliveries;',
                        'Created a Python program for generating banking files, playing a critical role during the RS floods (2024), enabling the opening of more than 200 accounts/day to transfer humanitarian aid;',
                        'Developed essential Excel reports for mapping the advancement of affected areas during the RS floods (2024).',
                    ],
                },
                {
                    cargo: 'IT Intern, Brasília, DF',
                    periodo: 'April 2023 – November 2023',
                    itens: [
                        'Assisted the technical team in the development and maintenance of SEDEC systems, learning data administration routines in practice;',
                        'Performed data extraction and analysis in Oracle databases under technical supervision, developing a practical foundation in SQL and data administration.',
                    ],
                },
            ],
        },
        {
            empresa: 'UCB – Catholic University of Brasília',
            cargo: 'Academic Tutor (E-Learning), Taguatinga, DF',
            periodo: 'October 2021 – January 2022',
            itens: [
                'Monitored and motivated student performance and attendance in the Virtual Learning Environment with a 90% student engagement rate;',
                'Assisted students with access to their activities;',
                'Provided support and clarified technical doubts via email, in-person, or by phone;',
                'Maintained spreadsheets, reports, dashboards, and other documents requested by management.',
            ],
        },
    ],

    /* ── Education ──────────────────────────────── */
    formacao: [
        {
            curso: 'Systems Analysis and Development, Taguatinga',
            instituicao: 'Estácio de Brasília University Center, Completed: July 2024',
        },
    ],

    /* ── Certifications ─────────────────────────── */
    certificacoes: [
        { titulo: 'MongoDB Overview: Core Concepts and Architecture', instituicao: 'MongoDB', carga_horaria: '4h' },
        { titulo: 'MongoDB Schema Design Patterns and Anti-patterns Skill Badge', instituicao: 'MongoDB', carga_horaria: '5h' },
        { titulo: 'From Relational Model (SQL) to MongoDB\'s Document Model', instituicao: 'MongoDB', carga_horaria: '4h' },
        { titulo: 'Search with MongoDB', instituicao: 'MongoDB', carga_horaria: '4h' },
        { titulo: 'Mastering SQL Server', instituicao: 'Udemy', carga_horaria: '96h' },
        { titulo: 'Artificial Intelligence applied to Computer Vision', instituicao: 'QualiFacti', carga_horaria: '240h' },
        { titulo: 'Scalable Algorithms Programming', instituicao: 'Estácio de Brasília University', carga_horaria: '240h' },
        { titulo: 'Rapid Python Application Development for Cloud, IoT and Big Data', instituicao: 'Estácio de Brasília University', carga_horaria: '320h' },
        { titulo: 'Mobile Device Programming', instituicao: 'Estácio de Brasília University', carga_horaria: '160h' },
        { titulo: 'Internet Programming', instituicao: 'Estácio de Brasília University', carga_horaria: '240h' }
    ],

    /* ── Languages ──────────────────────────────── */
    idiomas: [
        { idioma: 'English', nivel: 'Conversational' },
        { idioma: 'Spanish', nivel: 'Intermediate' },
    ],

    /* ── Awards ─────────────────────────────────── */
    premiacoes: [
        {
            titulo: '1st Place – Campus Party Brasília 2022 Hackathon',
            descricao: `Winning project of the "Circular Economy and Digital Inclusion" challenge. Co-creator of 
      Remob, a concept app that encourages the disposal of electronic waste in exchange for urban mobility credits 
      (BRB). Direct involvement in interface design (UI) and user flow development (UX), prioritizing ease of use 
      and accessibility for the general public.`
        },
    ],
};
