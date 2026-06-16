const CV = {

    /* ── Header ─────────────────────────────────── */
    nome: 'Eber Lucas Cerqueira Elias',
    cargo: 'Mid-level DBA | Mid-level BI Analyst',

    contato: [
        /* row 1 */
        { icone: 'phone', texto: '+55 (61) 99562-6861' },
        { icone: 'mail', texto: 'eberteclas@gmail.com', href: 'mailto:eberteclas@gmail.com' },
        { icone: 'location', texto: 'Brasília, DF 72748001' },
        /* row 2 */
        { icone: 'linkedin', texto: 'https://www.linkedin.com/in/eber-tlc/', href: 'https://www.linkedin.com/in/eber-tlc/' },
        { icone: 'github', texto: 'https://github.com/ebertlc', href: 'https://github.com/ebertlc' },
    ],

    /* ── Summary ────────────────────────────────── */
    resumoVisivel: false,
    resumo: `Mid-level DBA with experience in Federal Government agencies (MPDFT and MIDR), where I 
  developed solid expertise in SQL Server, Oracle, and PostgreSQL database administration. I have strong 
  skills in high availability with AlwaysOn and replication, automation using T-SQL scripts, PL/SQL, and 
  Ansible, backup management with Commvault, and ETL package development. I seek to further deepen my 
  knowledge in data administration within complex, high-demand environments, ensuring security, 
  performance, and reliability.`,

    /* ── Skills ─────────────────────────────────── */
    skills: ['SQL', 'Python', 'SQLServer', 'MySQL', 'MongoDB', 'Power BI', 'PL/SQL', 'AWS', 'Linux', 'PostgreSQL', 'Oracle', 'Windows Server'],

    /* ── Experience ─────────────────────────────── */
    experiencias: [
        {
            empresa: 'MPDFT – Public Prosecution Office of the Federal District and Territories',
            cargo: 'Information Technology Resident – DBA, Brasília, DF',
            periodo: 'August 2024 – Present',
            itens: [
                'Execution of scripts and database migration (backup/restore) to new servers;',
                'Management of manual backups/restores (DBMS/Commvault) and snapshots for testing environments;',
                'Creation of logins/users, permission management, and operations auditing;',
                'Configuration and maintenance of clusters, replication, and AlwaysOn (failover, replicas);',
                'Installation, updating, and creation/deactivation of objects (databases, jobs, linked servers);',
                'Creation and execution of scripts (database, OS, Ansible) for task automation;',
                'Development, deployment, and maintenance of ETL packages;',
                'Incident resolution and support for other teams on database-related issues;',
                'Data export/import and ODBC connection configuration;',
                'Creation and updating of procedures and technical documentation (Wiki, manuals);',
            ],
            indicadores: `Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
        },
        {
            empresa: 'MIDR – Ministry of Regional Development',
            /* multiple roles in the same company — array of sub-roles */
            cargos: [
                {
                    cargo: 'Data Processing Assistant, Brasília, DF',
                    periodo: 'November 2023 – August 2024',
                    itens: [
                        'Assisted and managed processes related to system development concerning SEDEC;',
                        'Supported, extracted, and analyzed data of interest to the secretariat;',
                        'Supported the preparation of data reports and presentations;',
                        'Maintained and executed data backup and recovery routines;',
                        'Created and executed automation scripts and updates for ORACLE and Postgres databases;',
                        'Created and maintained technical documentation for SEDEC systems and processes.',
                    ],
                },
                {
                    cargo: 'IT Intern, Brasília, DF',
                    periodo: 'April 2023 – November 2023',
                    itens: [
                        'Assisted in processes related to system development concerning SEDEC;',
                        'Supported, extracted, and analyzed data of interest to the secretariat, closely guided by the technical lead.',
                    ],
                },
            ],
            indicadores: `Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
        },
        {
            empresa: 'UCB – Catholic University of Brasília',
            cargo: 'Academic Tutor (E-Learning), Taguatinga, DF',
            periodo: 'October 2021 – January 2022',
            itens: [
                'Monitored and motivated student performance and attendance in the Virtual Learning Environment;',
                'Assisted students with access to their activities;',
                'Provided support and clarified technical doubts via email, in-person, or by phone;',
                'Maintained and updated spreadsheets, reports, dashboards, and other documents requested by management.',
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
        'Artificial Intelligence applied to Computer Vision',
        'MongoDB Overview: Core Concepts and Architecture',
        'MongoDB Schema Design Patterns and Anti-patterns Skill Badge',
        'From Relational Model (SQL) to MongoDB\'s Document Model',
        'MongoDB Overview: Core Concepts and Architecture',
        'Internet Programming',
        'Rapid Python Application Development for Cloud, IoT, and Big Data',
        'Data Analysis as Support for Decision Making'
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
            descricao: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
        },
    ],
};
