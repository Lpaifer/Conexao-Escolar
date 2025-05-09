# 📚 Conexão Escolas

**Conexão Escolas** é uma plataforma web educativa desenvolvida com o objetivo de informar, conscientizar e promover o debate sobre os desafios da educação básica no Brasil. A aplicação reúne conteúdos relevantes sobre temas como evasão escolar, impactos do uso de celulares em sala de aula, políticas públicas educacionais, experiências globais e dados atualizados sobre crianças fora da escola.

> Este projeto foi idealizado como parte da disciplina de Desenvolvimento Web do curso de Engenharia da Computação, com foco em HTML, CSS, JavaScript e frameworks modernos como Astro e TailwindCSS.

---

## 🌐 Acesse o Projeto Online

🔗 [[[(https://conexao-escolas.vercel.app/](https://conexao-escolas.vercel.app/)))

---

## 🧩 Funcionalidades Principais

- ✅ **Página Inicial** com chamada impactante e design responsivo
- ✅ **Carrossel de Notícias** com visual dinâmico
- ✅ **Modo Claro/Escuro**
- ✅ **Seções informativas** sobre:
  - Crianças fora da escola
  - Argumentos a favor e contra o uso de celulares
  - Impactos sociais e educacionais
  - Experiências de outros países
- ✅ **Jogos educativos** (em breve: Termo, Caça-palavras, Jogo da Forca)
- ✅ **Design moderno com TailwindCSS**
- 🚧 Admin/Login para controle de conteúdo (planejado)
- 🚧 CMS ou integração com banco de dados (futuro)

---

## 🛠️ Tecnologias Utilizadas

| Ferramenta        | Descrição                              |
|-------------------|----------------------------------------|
| [Astro](https://astro.build/)           | Framework moderno para sites rápidos e otimizados |
| [Tailwind CSS](https://tailwindcss.com/) | Utilitário para estilização moderna e responsiva   |
| [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) | Lógica de interatividade nos jogos e páginas |
| [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) | Estrutura das páginas |
| [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) | Estilização básica e customizações manuais |

---

## 🗂️ Estrutura do Projeto

```bash
/
├── public/
│   └── img/                 # Imagens do site
├── src/
│   ├── components/          # Header, Footer, Cards, Botões
│   ├── layouts/             # Layout base usado nas páginas
│   ├── pages/
│   │   ├── index.astro      # Página inicial
│   │   ├── sobre.astro      # Página 'Sobre'
│   │   ├── celular.astro    # Seção sobre celulares
│   │   └── ...              # Outras seções informativas
│   └── styles/
│       └── global.css       # Estilos com Tailwind
├── astro.config.mjs         # Configuração do Astro
├── tailwind.config.cjs      # Configuração do Tailwind
├── tsconfig.json            # Configuração do TypeScript
└── package.json             # Dependências do projeto
