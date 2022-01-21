/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */


import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import PmBadge from './components/ui/pm-badge';
import PmBrs from './components/ui/pm-brs';

import PmFormSavePropriedades from './components/pm-form-save/propriedades';
import PmFormSaveEventos from './components/pm-form-save/eventos';
import PmFormSaveTable from './components/pm-form-save/table';
import PmFormSaveIHeader from './components/pm-form-save/i-header';
import PmFormSaveIFooter from './components/pm-form-save/i-footer';
import PmFormSaveIButtonPmFormSave from './components/pm-form-save/i-button-pm-form-save';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.component('PmBadge', PmBadge)
  Vue.component('PmBrs', PmBrs)
  Vue.component('PmFormSavePropriedades', PmFormSavePropriedades)
  Vue.component('PmFormSaveEventos', PmFormSaveEventos)
  Vue.component('PmFormSaveTable', PmFormSaveTable)
  Vue.component('PmFormSaveIHeader', PmFormSaveIHeader)
  Vue.component('PmFormSaveIFooter', PmFormSaveIFooter)
  Vue.component('PmFormSaveIButtonPmFormSave', PmFormSaveIButtonPmFormSave)
}
