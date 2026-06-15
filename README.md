# Meu Currículo Responsivo e Interativo

Este repositório contém meu currículo profissional desenvolvido em HTML, CSS e JavaScript. A estrutura foi refatorada e organizada para separar a apresentação, os estilos e os dados do currículo em arquivos distintos, facilitando a manutenção e a personalização.

[Visualizar Currículo Online](https://ebertlc.github.io/Curriculo-Eber-Lucas-C-Elias/)

---

## 🚀 Funcionalidades

- **Design Premium e Limpo**: Baseado na fonte *Inter*, com layout fluido e espaçamentos otimizados para leitura.
- **Tema Claro e Escuro**: Alternância dinâmica de tema diretamente pela interface, com persistência da escolha no navegador (`localStorage`).
- **Exportação para PDF Simplificada**: Botão dedicado para impressão que ajusta automaticamente o tema para impressão A4 (com folhas de estilo de mídia de impressão otimizadas, ocultando botões da interface e evitando quebras de página indesejadas).
- **Separação de Dados e Design**: Todo o conteúdo do currículo é gerenciado de forma isolada, permitindo atualizar as informações modificando apenas um arquivo JavaScript (`js/data.js`).

---

## 🛠️ Estrutura do Projeto

O repositório está organizado da seguinte forma:

- **`index.html`**: Arquivo HTML principal que carrega os estilos CSS e scripts JavaScript, contendo apenas a estrutura DOM básica do currículo.
- **`css/`**
  - **`style.css`**: Folha de estilo contendo os design tokens (cores de tema claro/escuro), estilos responsivos e regras de impressão em PDF.
- **`js/`**
  - **`data.js`**: Contém exclusivamente o objeto JavaScript `CV` com os dados pessoais e profissionais. **É o único arquivo que você precisa editar para personalizar seu currículo.**
  - **`main.js`**: Lógica de renderização dinâmica dos elementos no DOM, ícones e funcionalidade dos botões da interface.
- **`curriculo.html`**: Cópia intacta da versão anterior (monolítica, com HTML, CSS e JS embutidos em um único arquivo).
- **`README.md`**: Este arquivo de documentação.

---

## 💻 Como Visualizar

### Localmente
1. Faça o download ou clone este repositório:
   ```bash
   git clone https://github.com/ebertlc/Curriculo-Eber-Lucas-C-Elias.git
   ```
2. Abra o arquivo `index.html` diretamente em qualquer navegador web moderno.

### Online (GitHub Pages)
O currículo está publicado e pode ser acessado em:
👉 **[ebertlc.github.io/Curriculo-Eber-Lucas-C-Elias/](https://ebertlc.github.io/Curriculo-Eber-Lucas-C-Elias/)**

---

## ✍️ Como Personalizar

Para criar seu próprio currículo a partir deste modelo, abra o arquivo **`js/data.js`** em um editor de código (como o VS Code) e modifique o objeto `CV`:

```javascript
const CV = {
  nome: 'Seu Nome Completo',
  cargo: 'Seu Cargo / Título Profissional',
  contato: [
    { icone: 'phone',    texto: '(DD) 9XXXX-XXXX' },
    { icone: 'mail',     texto: 'seu.email@provedor.com', href: 'mailto:seu.email@provedor.com' },
    { icone: 'location', texto: 'Cidade, Estado CEP' },
    { icone: 'linkedin', texto: 'https://www.linkedin.com/in/seu-perfil/', href: 'https://www.linkedin.com/in/seu-perfil/' },
    { icone: 'github',   texto: 'https://github.com/seu-usuario', href: 'https://github.com/seu-usuario' }
  ],
  resumo: `Seu resumo profissional detalhando seus objetivos e conquistas.`,
  skills: ['Habilidade 1', 'Habilidade 2', 'Habilidade 3'],
  experiencias: [
    {
      cargo:   'Seu Cargo',
      empresa: 'Nome da Empresa',
      periodo: 'Mês/Ano – Mês/Ano (ou Atual)',
      itens: [
        'Realização ou responsabilidade 1;',
        'Realização ou responsabilidade 2;'
      ]
    }
  ],
  formacao: [
    {
      curso:       'Nome do Curso ou Graduação',
      instituicao: 'Nome da Instituição, Ano de Conclusão'
    }
  ],
  certificacoes: [
    'Certificação ou Curso Adicional 1',
    'Certificação ou Curso Adicional 2'
  ],
  idiomas: [
    { idioma: 'Inglês', nivel: 'Avançado' }
  ],
  premiacoes: [
    'Premiação ou conquista importante'
  ]
};
```

### 💡 Dicas de Personalização
- **Fácil Manutenção**: Você não precisa mexer em arquivos HTML ou CSS para atualizar seu currículo. Qualquer alteração em `js/data.js` será refletida automaticamente na página.
- **Ícones**: Os ícones válidos para o campo `icone` são: `phone`, `mail`, `location`, `linkedin` e `github`.
- **Links**: Se o campo de contato possuir um link de destino, adicione a propriedade `href` com a URL correspondente (ex: `mailto:email@dominio.com` ou o link do LinkedIn).

---

## 📄 Licença e Contribuição

Contribuições são sempre bem-vindas! Se você tiver sugestões de melhorias de layout ou recursos, sinta-se à vontade para abrir uma **Issue** ou enviar um **Pull Request**.
