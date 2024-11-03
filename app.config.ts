import type Emoji from "./components/OgImage/Emoji.vue";

export default defineAppConfig({
  general: {
    title: "",
    logo: "/logo-hd.png",
    iconLogo: "fluent-emoji-flat:leaf-fluttering-in-wind",
  },
  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: "Vive Simple",
    description: "Vive Simple Directorio",
    url: "https://example.com",
    favicon: {
      image: "/logo-hd.png",
      emoji: "🌎",
    },
  },
  directory: {
    search: {
      placeholder: "Buscar {0} recomendaciones",
      icon: "tabler:bow",
      tags: { 
        // options: none,select,show-all,
        display: "select",
        intersection: true,
      },
    },
    grid: {
      list: true,
      emptyState: {
        text: "Seems that this entry is missing from the archives.",
        // options: button, simple, link
        type: "button",
        icon: "tabler:exclamation-mark",
      },
      card: {
        image: true,
        // options: dashed, shadow, outline, bullet
        type: "shadow",
      },
      submit: {
        show: true,
        first: false,
        title: "Publica con nosotros",

        description:
          "Submit a template to show off a good project to other people.",

        hideable: true,
        icon: "i-material-symbols-air",
      },
    },
    featured: {
      showOnAllPages: true,
      showOnSide: true,
      icon: "tabler:star",
      labelForCard: "Featured ✨",
    },
    tags: [
      { name: "SAAS", color: "blue" },
      { name: "dashboard", color: "green" },
      { name: "landing-page" },
      { name: "toolbox" },
      { name: "agency" },
      { name: "markdown-based" },
      { name: "basics", color: "indigo" },
    ],
    tagPages: {
      title: "Available {0} products:",
      description:
        "View all available tools and templates in the {0} category...",
    },
  },
  header: {
    banner: {
      show: true,
      text: "Visita nuestra página oficial",
      link: "https://vivesimple.me",
      brandText: "",
    },
    navbar: {
      colorModeSelector: true,
      links: [
        { name: "Mi Directorio", to: "/" },
        // { name: "Blog", to: "/blog" },
        { name: "¿Cómo Funciona?", to: "/advertise" },
        // {
        //   name: "Vive Simple Web",
        //   to: "https://vivesimple.me/",
        //   target: "_blank",
        // },
      ],
    },
    actionButton: {
      text: "Publica con nosotros",
      href: "/submit",
    },
  },
  footer: {
    description: "Best directory for my niche.",
    socials: {
      github: {
        link: "",
        icon: "tabler:brand-github",
      },
      facebook: {
        link: "",
        icon: "tabler:brand-facebook",
      },
      instagram: {
        link: "",
        icon: "tabler:brand-instagram",
      },
      x: {
        link: "https://x.com/mark_bruderer",
        icon: "tabler:brand-twitter",
      },
      youtube: {
        link: "https://www.youtube.com/@vivesimple",
        icon: "tabler:brand-youtube",
      },
    },
  },
  ui: {
    icons: {
      dark: "tabler:moon",
      light: "tabler:sun",
    },
  },
});