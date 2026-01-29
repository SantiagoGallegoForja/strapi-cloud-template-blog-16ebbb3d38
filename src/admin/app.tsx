import type { StrapiApp } from '@strapi/strapi/admin';
import logo from './paricus-logo.png';

export default {
  config: {
    // Custom logo
    auth: {
      logo: logo,
    },
    menu: {
      logo: logo,
    },
    head: {
      favicon: logo,
    },
    // Paricus brand colors
    theme: {
      light: {
        colors: {
          // Primary - Paricus Green
          primary100: '#E8F5E9',
          primary200: '#C8E6C9',
          primary500: '#52C17A',
          primary600: '#3D9E5F',
          primary700: '#2E7D32',

          // Buttons
          buttonPrimary500: '#52C17A',
          buttonPrimary600: '#3D9E5F',

          // Neutral - Paricus Background
          neutral0: '#FFFFFF',
          neutral100: '#FAFAF8',
          neutral150: '#F5F5F3',
          neutral200: '#E8E8E6',
          neutral300: '#D5E8D4',

          // Secondary - Teal accent
          secondary100: '#E0F2F1',
          secondary200: '#B2DFDB',
          secondary500: '#4DB6AC',
          secondary600: '#26A69A',
          secondary700: '#00897B',

          // Success
          success100: '#E8F5E9',
          success500: '#52C17A',
          success600: '#3D9E5F',
          success700: '#2E7D32',

          // Danger
          danger100: '#FDEDEC',
          danger500: '#E74C3C',
          danger600: '#C0392B',
          danger700: '#922B21',

          // Warning
          warning100: '#FEF9E7',
          warning500: '#F39C12',
          warning600: '#D68910',
          warning700: '#B9770E',

          // Alternative
          alternative100: '#E8F5E9',
          alternative200: '#C8E6C9',
          alternative500: '#52C17A',
          alternative600: '#3D9E5F',
          alternative700: '#2E7D32',
        },
      },
      dark: {
        colors: {
          // Primary - Paricus Green (for dark mode)
          primary100: '#1B3D2F',
          primary200: '#2D5A45',
          primary500: '#52C17A',
          primary600: '#6AD492',
          primary700: '#8DE4AB',

          // Buttons
          buttonPrimary500: '#52C17A',
          buttonPrimary600: '#6AD492',

          // Success
          success100: '#1B3D2F',
          success500: '#52C17A',
          success600: '#6AD492',
          success700: '#8DE4AB',

          // Alternative
          alternative100: '#1B3D2F',
          alternative200: '#2D5A45',
          alternative500: '#52C17A',
          alternative600: '#6AD492',
          alternative700: '#8DE4AB',
        },
      },
    },
    // Locales
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
  bootstrap(app: StrapiApp) {
    console.log('Paricus CMS initialized');
  },
};
