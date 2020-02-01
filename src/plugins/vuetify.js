import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        
        themes: {
           
            light: {
                    primary: '#2E2E2E',
                    secondary: '#FBCA12',
                    accent: '#2196f3',
                    error: '#ffc107',
                    warning: '#607d8b',
                    info: '#f44336',
                    success: '#ff9800'
                    
            }
        }
    }
});
