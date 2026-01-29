import type { StrapiApp } from '@strapi/strapi/admin';
import logo from './paricus-logo.png';

export default {
  config: {
    // Paricus Logo everywhere
    auth: {
      logo: logo,
    },
    menu: {
      logo: logo,
    },
    head: {
      favicon: logo,
    },
    // Disable dark mode - force light theme only
    theme: {
      light: {
        colors: {
          // Primary - Paricus Green
          primary100: '#E8F5E9',
          primary200: '#C8E6C9',
          primary500: '#52C17A',
          primary600: '#3D9E5F',
          primary700: '#2E7D32',

          // Buttons - Green
          buttonPrimary500: '#52C17A',
          buttonPrimary600: '#3D9E5F',
          buttonNeutral0: '#FFFFFF',

          // Neutral - Paricus Background
          neutral0: '#FFFFFF',
          neutral100: '#FAFAF8',
          neutral150: '#F5F5F3',
          neutral200: '#E8E8E6',
          neutral300: '#D5E8D4',
          neutral400: '#B8CCB6',
          neutral500: '#8FA88D',
          neutral600: '#5D6D7E',
          neutral700: '#4A5568',
          neutral800: '#2C3E50',
          neutral900: '#1A202C',
          neutral1000: '#0D1117',

          // Secondary - Teal
          secondary100: '#E0F2F1',
          secondary200: '#B2DFDB',
          secondary500: '#4DB6AC',
          secondary600: '#26A69A',
          secondary700: '#00897B',

          // Success - Green
          success100: '#E8F5E9',
          success200: '#C8E6C9',
          success500: '#52C17A',
          success600: '#3D9E5F',
          success700: '#2E7D32',

          // Danger - Red
          danger100: '#FDEDEC',
          danger200: '#F5B7B1',
          danger500: '#E74C3C',
          danger600: '#C0392B',
          danger700: '#922B21',

          // Warning - Orange
          warning100: '#FEF9E7',
          warning200: '#F9E79F',
          warning500: '#F39C12',
          warning600: '#D68910',
          warning700: '#B9770E',

          // Alternative - Green (same as primary)
          alternative100: '#E8F5E9',
          alternative200: '#C8E6C9',
          alternative500: '#52C17A',
          alternative600: '#3D9E5F',
          alternative700: '#2E7D32',
        },
      },
    },
    // Locales
    locales: ['en', 'es'],
    // Translations
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'Paricus CMS',
        'app.components.LeftMenu.navbrand.workplace': 'Content Dashboard',
        'Auth.form.welcome.title': 'Welcome to Paricus',
        'Auth.form.welcome.subtitle': 'Manage your website content',
      },
      es: {
        'app.components.LeftMenu.navbrand.title': 'Paricus CMS',
        'app.components.LeftMenu.navbrand.workplace': 'Panel de Contenido',
        'Auth.form.welcome.title': 'Bienvenido a Paricus',
        'Auth.form.welcome.subtitle': 'Administra el contenido de tu sitio',
      },
    },
  },
  bootstrap(app: StrapiApp) {
    // Force light mode on load
    const currentTheme = localStorage.getItem('STRAPI_THEME');
    if (currentTheme !== 'light') {
      localStorage.setItem('STRAPI_THEME', 'light');
    }
  },
};
