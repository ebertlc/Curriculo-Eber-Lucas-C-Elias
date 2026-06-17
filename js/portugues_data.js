var CV = {

  /* ── Cabeçalho ─────────────────────────────── */
  nome: 'Eber Lucas Cerqueira Elias',
  cargo: 'DBA Pleno | Analista de BI Pleno',

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
  resumo: `DBA Pleno com atuação em órgãos do Governo Federal (MPDFT e MIDR), onde desenvolvi sólida experiência em administração de 
  bancos de dados SQL Server, Oracle e PostgreSQL. Tenho expertise em alta disponibilidade com AlwaysOn e replicação, automação com 
  scripts T-SQL, PL/SQL e Ansible, gerenciamento de backups com Commvault e desenvolvimento de pacotes ETL. Busco continuar me 
  aprofundando na administração de dados em ambientes complexos e de alta demanda, contribuindo com segurança, performance e 
  confiabilidade.`,

  /* ── Skills ─────────────────────────────────── */
  skills: ['SQL', 'Python', 'SQLServer', 'MySQL', 'MongoDB', 'Power BI', 'PL/SQL', 'AWS', 'Linux', 'PostgreSQL', 'Oracle', 'Windows Server'],

  /* ── Experiências ───────────────────────────── */
  experiencias: [
    {
      empresa: 'MPDFT – Ministério Público do Distrito Federal e Territórios',
      cargo: 'Residente em Tecnologia da Informação – DBA, Brasília, DF',
      periodo: 'Agosto 2024 – Atual',
      itens: [
        'Execução de scripts e migração de bancos (backup/restore) para novos servidores;',
        'Gerenciamento de backups/restores manuais (SGBD/Commvault) e snapshots para testes;',
        'Criação de logins/usuários, gerenciamento de permissões e auditoria de operações;',
        'Configuração e manutenção de clusters, replicação e AlwaysOn (failover, réplicas);',
        'Instalação, atualização e criação/desativação de objetos (bancos, jobs, linked servers);',
        'Criação e execução de scripts (banco, SO, Ansible) para automação de tarefas;',
        'Desenvolvimento, publicação e manutenção de pacotes ETL;',
        'Resolução de incidentes e suporte a outras equipes em questões de banco de dados;',
        'Exportação/importação de dados e configuração de conexões ODBC;',
        'Criação e atualização de procedimentos e documentação técnica (Wiki, manuais);',
      ],
      indicadores: `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet consectetur adipiscing 
      elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      empresa: 'MIDR – Ministério do Desenvolvimento Regional',
      /* dois cargos na mesma empresa — array de subcargos */
      cargos: [
        {
          cargo: 'Auxiliar De Tratamento de Dados, Brasília, DF',
          periodo: 'Novembro 2023 – Agosto 2024',
          itens: [
            'Auxílio e gerenciamento nos processos relacionados ao desenvolvimento de sistemas relativos à SEDEC(Secretaria Nacional de Proteção e Defesa Civil);',
            'Apoio, extração e análise de dados de interesse da secretaria;',
            'Apoio na elaboração de relatórios e apresentações de dados;',
            'Manutenção e execução de rotinas de backup e recuperação de dados;',
            'Criação e execução de scripts de automação de tarefas e atualizações em banco de dados ORACLE e Postgres;',
            'Criação e manutenção de documentação técnica dos sistemas e processos da SEDEC.',
          ],
        },
        {
          cargo: 'Estagiário TI, Brasília, DF',
          periodo: 'Abril 2023 – Novembro 2023',
          itens: [
            'Auxílio nos processos relacionados ao desenvolvimento de sistemas relativos à SEDEC;',
            'Apoio, extração e análise de dados de interesse da secretaria, com acompanhamento direto do responsável técnico.',
          ],
        },
      ],
      indicadores: `Atuei no suporte ao usuário do S2iD (Sistema Integrado de Informações sobre Desastres), 
      desenvolvendo scripts SQL para correções diretas no banco de dados em produção. Fui um dos 
      representantes de negócio junto à fábrica de software na criação da nova versão da plataforma, 
      definindo requisitos e homologando entregas. Criei um programa Python para geração de arquivos 
      bancários, com atuação crítica durante as enchentes do RS (2024), viabilizando a abertura de mais 
      de 200 contas/dia para repasse de ajuda humanitária. Além disso, desenvolvi dashboards (SQL) 
      essenciais para o mapeamento do avanço das áreas afetadas. Também administrei rotinas de backup, 
      documentação e atualizações em bancos Oracle e PostgreSQL.`,
    },
    {
      empresa: 'UCB – Universidade Católica de Brasília',
      cargo: 'Tutor Acadêmico EAD, Taguatinga, DF',
      periodo: 'Outubro 2021 – Janeiro 2022',
      itens: [
        'Acompanhamento e motivação da performance e frequência dos alunos no Ambiente Virtual de Aprendizagem;',
        'Apoio aos discentes no acesso às suas atividades;',
        'Realização de atendimento e esclarecimento de dúvidas técnicas via e-mail, presencial ou por telefone;',
        'Manutenção e alimentação das planilhas, relatórios, dashboards e outros documentos solicitados pela gestão.',
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
    'Inteligência Artificial aplicada à Visão Computacional',
    'MongoDB Overview: Core Concepts and Architecture',
    'MongoDB Schema Design Patterns and Anti-patterns Skill Badge',
    'From Relational Model (SQL) to MongoDB\'s Document Model',
    'MongoDB Overview: Core Concepts and Architecture',
    'Programação para Internet',
    'Desenvolvimento Rápido de Aplicações em Python para Cloud, Iot e Bigdata',
    'Análise de Dados como Suporte à Tomada de Decisão'
  ],

  /* ── Idiomas ────────────────────────────────── */
  idiomas: [
    { idioma: 'Inglês', nivel: 'Conversação' },
    { idioma: 'Espanhol', nivel: 'Intermediário' },
  ],

  /* ── Premiações ─────────────────────────────── */
  premiacoes: [
    {
      titulo: '1° Lugar – Hackathon Campus Party Brasília 2022',
      descricao: `Projeto vencedor do desafio "Economia Circular e Inclusão Digital". Co-criador do 
      Remob, um aplicativo conceito que incentiva o descarte de lixo eletrônico em troca de créditos de 
      mobilidade urbana (BRB). Atuação direta no design de interface (UI) e desenvolvimento do fluxo de 
      usuário (UX), priorizando a simplicidade de uso e a acessibilidade para o público geral.`
    },
  ],
};
