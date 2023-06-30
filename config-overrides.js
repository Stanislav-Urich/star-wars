const {alias} = require ('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
      "@components": 'src/components',
      '@constants': 'src/constants',
      '@HOC-helper': 'src/HOC-helper',
      '@services': 'src/cervices',
      '@utils': 'src/utils',
      '@routes': 'src/routes',
      '@containers' : 'src/containers',
      '@hooks': 'src/hooks'
      

    }) (config);
    
    return config;
  }