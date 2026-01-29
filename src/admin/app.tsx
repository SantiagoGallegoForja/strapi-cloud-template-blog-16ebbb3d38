export default {
  config: {
    // Paricus brand colors
    theme: {
      colors: {
        // Primary green - Paricus brand
        primary100: '#E8F5E9',
        primary200: '#C8E6C9',
        primary500: '#52C17A',
        primary600: '#3D9E5F',
        primary700: '#2E7D32',

        // Buttons
        buttonPrimary500: '#52C17A',
        buttonPrimary600: '#3D9E5F',

        // Neutral tones
        neutral0: '#FFFFFF',
        neutral100: '#FAFAF8',
        neutral150: '#F5F5F3',
        neutral200: '#E8E8E6',

        // Secondary - Teal accent
        secondary100: '#E0F2F1',
        secondary200: '#B2DFDB',
        secondary500: '#4DB6AC',
        secondary600: '#26A69A',
        secondary700: '#00897B',

        // Success (keep green theme)
        success100: '#E8F5E9',
        success200: '#C8E6C9',
        success500: '#52C17A',
        success600: '#3D9E5F',
        success700: '#2E7D32',

        // Danger
        danger500: '#E74C3C',
        danger600: '#C0392B',

        // Warning
        warning500: '#F39C12',
        warning600: '#D68910',
      },
    },
    // Available locales
    locales: ['en', 'es'],
    // Custom translations
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'Paricus CMS',
        'app.components.LeftMenu.navbrand.workplace': 'Content Dashboard',
        'Auth.form.welcome.title': 'Welcome to Paricus CMS',
        'Auth.form.welcome.subtitle': 'Manage your website content',
      },
      es: {
        'app.components.LeftMenu.navbrand.title': 'Paricus CMS',
        'app.components.LeftMenu.navbrand.workplace': 'Panel de Contenido',
        'Auth.form.welcome.title': 'Bienvenido a Paricus CMS',
        'Auth.form.welcome.subtitle': 'Administra el contenido de tu sitio',
      },
    },
  },
  bootstrap() {},
};
