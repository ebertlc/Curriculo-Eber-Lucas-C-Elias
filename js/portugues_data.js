var CV = {

  /* ── Títulos das Seções ─────────────────────── */
  titulos: {
    resumo: 'Resumo Profissional',
    skills: 'Skills',
    experiencias: 'Experiências',
    formacao: 'Formação',
    certificacoes: 'Certificações',
    idiomas: 'Idiomas',
    premiacoes: 'Premiações'
  },

  /* ── Cabeçalho ─────────────────────────────── */
  nome: 'Eber Lucas Cerqueira Elias',
  cargo: 'DBA Pleno | SQL Server - Oracle - MySQL - PostgreSQL - MongoDB',

  contato: [
    /* linha 1 */
    { icone: 'phone', texto: '(61) 99562-6861' },
    { icone: 'mail', texto: 'eberteclas@gmail.com', href: 'mailto:eberteclas@gmail.com' },
    { icone: 'location', texto: 'Brasília, DF 72748-001' },
    /* linha 2 */
    { icone: 'linkedin', texto: 'https://www.linkedin.com/in/eber-tlc/', href: 'https://www.linkedin.com/in/eber-tlc/' },
    { icone: 'github', texto: 'https://github.com/ebertlc', href: 'https://github.com/ebertlc' },
  ],

  /* ── Resumo ─────────────────────────────────── */
  resumoVisivel: false,
  resumo: `DBA Pleno com 3 anos de experiência em órgãos do Governo Federal (MPDFT e MIDR), onde desenvolvi sólida experiência em administração de 
  bancos de dados SQL Server, Oracle, PostgreSQL, MongoDB e MySQL. Tenho expertise em alta disponibilidade com AlwaysOn e replicação, automação com 
  scripts T-SQL, PL/SQL, Ansible e python, gerenciamento de backups com Commvault e desenvolvimento de pacotes ETL. Busco continuar me 
  aprofundando na administração de dados em ambientes complexos e de alta demanda, contribuindo com segurança, performance e 
  confiabilidade.`,

  /* ── Skills ─────────────────────────────────── */
  skills: [
    { titulo: 'SGBDs', skills: ['SQL Server (avançado)', 'Oracle (intermediário)', 'PostgreSQL (avançado)', 'MySQL (avançado)', 'MongoDB (avançado)'] },
    { titulo: 'Alta Disponibilidade', skills: ['AlwaysOn (intermediário)', 'Replicação (intermediário)', 'Clustering (básico)', 'Failover (intermediário)'] },
    { titulo: 'Automação/Scripting', skills: ['SQL (avançado)', 'T-SQL (intermediário)', 'PL/SQL (intermediário)', 'Python (avançado)', 'Bash (intermediário)', 'Ansible (básico)'] },
    { titulo: 'Backup/Recovery', skills: ['Commvault (intermediário)'] },
    { titulo: 'Infraestrutura', skills: ['Windows Server (avançado)', 'Linux (intermediário)', 'AWS (básico)'] }
  ],

  /* ── Experiências ───────────────────────────── */
  experiencias: [
    {
      empresa: 'MPDFT - Ministério Público do Distrito Federal e Territórios',
      cargo: 'Residente em Tecnologia da Informação - DBA, Brasília, DF',
      periodo: 'Agosto 2024 - Atual',
      itens: [
        'Executei mais de 8 migrações de bancos de dados para novos servidores, garantindo zero perda de dados;',
        'Gerenciamento de backups/restores manuais (SGBD/Commvault) e snapshots para testes;',
        'Criei e gerenciei logins/usuários, permissões e auditoria de operações;',
        'Implementei e mantive clusters AlwaysOn para 5 servidores SQLServer e 1 MongoDB, garantindo alta disponibilidade e failover automático',
        'Administrei backups/restores via Commvault para 48 servidores SQLServer, MongoDB, MySQL, PostgreSQL, Oracle e Caché, com testes periódicos de restauração;',
        'Instalei, atualizei e criei/desativei objetos (bancos, jobs, linked servers);',
        'Automatizei tarefas operacionais via scripts T-SQL, SO e Ansible, reduzindo em 40% o tempo de execução de rotinas manuais',
        'Desenvolvi e mantive pacotes ETL para integração entre sistemas',
        'Atuei na resolução de incidentes de banco de dados, atendendo 9 equipes/sistemas;',
        'Exportação/importação de dados e configuração de conexões ODBC;',
        'Criei e mantive documentação técnica (wikis, manuais) para 30 processos, reduzindo dependência de conhecimento individual.',
      ],
    },
    {
      empresa: 'MIDR - Ministério do Desenvolvimento Regional',
      cargos: [
        {
          cargo: 'Auxiliar De Tratamento de Dados, Brasília, DF',
          periodo: 'Novembro 2023 - Agosto 2024',
          itens: [
            'Apoiei o desenvolvimento e manutenção de sistemas da SEDEC (Secretaria Nacional de Proteção e Defesa Civil), atuando na interface entre área técnica e necessidades da secretaria;',
            'Extraí e analisei dados em bancos Oracle para subsidiar decisões estratégicas da secretaria;',
            'Elaborei relatórios e apresentações com dados extraídos diretamente do banco, traduzindo informações técnicas para gestores;',
            'Mantive rotinas de backup e recuperação de dados em ambientes Oracle, garantindo integridade e disponibilidade das informações;',
            'Desenvolvi scripts Python e SQL para automação de tarefas operacionais e atualizações em bancos Oracle, reduzindo intervenção manual;',
            'Documentei processos técnicos e procedimentos operacionais dos sistemas da SEDEC, padronizando rotinas para a equipe.',
            'Atuei no suporte ao usuário do S2iD (Sistema Integrado de Informações sobre Desastres), desenvolvendo scripts SQL para correções diretas no banco de dados em produção;',
            'Fui um dos representantes de negócio junto à fábrica de software na criação da nova versão da plataforma, definindo requisitos e homologando entregas;',
            'Criei um programa Python para geração de arquivos bancários, com atuação crítica durante as enchentes do RS (2024), viabilizando a abertura de mais de 200 contas/dia para repasse de ajuda humanitária;',
            'Desenvolvi relatórios em excel essenciais para o mapeamento do avanço das áreas afetadas durante as enchentes do RS (2024).',
          ],
        },
        {
          cargo: 'Estagiário TI, Brasília, DF',
          periodo: 'Abril 2023 - Novembro 2023',
          itens: [
            'Apoiei o time técnico no desenvolvimento e manutenção de sistemas da SEDEC, aprendendo rotinas de administração de dados na prática;',
            'Realizei extração e análise de dados em bancos Oracle sob supervisão técnica, desenvolvendo base prática em SQL e administração de dados.',
          ],
        },
      ],
    },
    {
      empresa: 'UCB - Universidade Católica de Brasília',
      cargo: 'Tutor Acadêmico EAD, Taguatinga, DF',
      periodo: 'Outubro 2021 - Janeiro 2022',
      itens: [
        'Acompanhei e motivei a performance e frequência dos alunos no Ambiente Virtual de Aprendizagem com 90% de engajamento dos alunos;',
        'Apoiei os discentes no acesso às suas atividades;',
        'Realizei atendimento e esclareci dúvidas técnicas via e-mail, presencial ou por telefone;',
        'Mantive planilhas, relatórios, dashboards e outros documentos solicitados pela gestão.',
      ],
    },
  ],

  /* ── Formação ───────────────────────────────── */
  formacao: [
    {
      curso: 'Análise e Desenvolvimento de Sistemas, Taguatinga',
      instituicao: 'Centro Universitário Estácio de Brasília, Concluído em: Julho 2024',
    },
  ],

  /* ── Certificações ──────────────────────────── */
  certificacoes: [
    { titulo: 'MongoDB Overview: Core Concepts and Architecture', instituicao: 'MongoDB', carga_horaria: '4h' },
    { titulo: 'MongoDB Schema Design Patterns and Anti-patterns Skill Badge', instituicao: 'MongoDB', carga_horaria: '5h' },
    { titulo: 'From Relational Model (SQL) to MongoDB\'s Document Model', instituicao: 'MongoDB', carga_horaria: '4h' },
    { titulo: 'Mastering SQL Server', instituicao: 'Udemy', carga_horaria: '96h' },
    { titulo: 'Inteligência Artificial aplicada à Visão Computacional', instituicao: 'QualiFacti', carga_horaria: '240h' },
    { titulo: 'Programação de Algoritmos Escaláveis', instituicao: 'Universidade Estácio de Brasília', carga_horaria: '240h' },
    { titulo: 'Desenvolvimento Rápido de Aplicações em Python para Cloud, Iot e Bigdata', instituicao: 'Universidade Estácio de Brasília', carga_horaria: '320h' },
    { titulo: 'Programação para Dispositivos Móveis', instituicao: 'Universidade Estácio de Brasília', carga_horaria: '160h' },
    { titulo: 'Programação para Internet', instituicao: 'Universidade Estácio de Brasília', carga_horaria: '240h' }

  ], /* ── Idiomas ────────────────────────────────── */
  idiomas: [
    { idioma: 'Inglês', nivel: 'Conversação' },
    { idioma: 'Espanhol', nivel: 'Intermediário' },
  ],

  /* ── Premiações ─────────────────────────────── */
  premiacoes: [
    {
      titulo: '1° Lugar - Hackathon Campus Party Brasília 2022',
      descricao: `Projeto vencedor do desafio "Economia Circular e Inclusão Digital". Co-criador do 
      Remob, um aplicativo conceito que incentiva o descarte de lixo eletrônico em troca de créditos de 
      mobilidade urbana (BRB). Atuação direta no design de interface (UI) e desenvolvimento do fluxo de 
      usuário (UX), priorizando a simplicidade de uso e a acessibilidade para o público geral.`
    },
  ],
};
