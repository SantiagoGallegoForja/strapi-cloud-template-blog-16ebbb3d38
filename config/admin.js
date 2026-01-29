module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: env('CLIENT_URL', 'http://localhost:4321'),
      async handler(uid, { documentId, locale, status }) {
        const document = await strapi.documents(uid).findOne({ documentId });

        if (!document) {
          return null;
        }

        // Map locale to URL prefix
        const localePrefix = locale === 'es-CO' ? '/es' : '';

        // Generate preview URL based on content type
        let pathname = null;

        switch (uid) {
          case 'api::article.article':
            pathname = `${localePrefix}/blog/${document.slug}`;
            break;
          case 'api::homepage.homepage':
            pathname = `${localePrefix}/`;
            break;
          default:
            return null;
        }

        const secret = env('PREVIEW_SECRET', 'preview-secret-key');
        const previewUrl = `${env('CLIENT_URL', 'http://localhost:4321')}/api/preview?secret=${secret}&slug=${pathname}&status=${status}&locale=${locale}`;

        return previewUrl;
      },
    },
  },
});
