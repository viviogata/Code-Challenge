import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
    options: {
        customProperties: true
    },
        themes: {
          light: {
            primary: '#222B45',
            secondary: '#999FB9',
            accent: '#323A5A',
            information: '#00E77B',
            dark: '#4a4a4a',
            grey: '#A4A9B7',
            greyMedium: '#CDCFD7',
            greyLight: '#F0F0F0',
            light: '#FFFFFF',
          },
    
        }
      }
});
