// Params
export default {
  site: {
    name: 'OAuth',
    description: 'OAuth 2.0 examples for various providers in one place',
    author: 'Atul Yadav',
    url: 'https://github.com/atulmy/oauth',
    copyright: '© 2020',
  },

  // common
  common: {
    endpoint: {
      url: '/:operation?',
      upload: '/upload',
    },

    errors: {
      auth: 'error_auth',
      validation: 'error_validation',
    },
  },

  // user
  user: {
    oauth: {
      providers: {
        facebook: {
          key: 'facebook',
          title: 'Facebook',
        },

        google: {
          key: 'google',
          title: 'Google',
        },

        instagram: {
          key: 'instagram',
          title: 'Instagram',
        },

        github: {
          key: 'github',
          title: 'Github',
        },

        gitlab: {
          key: 'gitlab',
          title: 'Gitlab',
        },

        digitalocean: {
          key: 'digitalocean',
          title: 'DigitalOcean',
        },

        bitbucket: {
          key: 'bitbucket',
          title: 'Bitbucket',
        },

        reddit: {
          key: 'reddit',
          title: 'Reddit',
        },
      },

      redirectUri: 'authorize/',
    },
  },
}
