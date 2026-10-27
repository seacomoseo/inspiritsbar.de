import { formValid } from './form-validate'
import { changeValues } from './form-change-values'
import copy from './params'
import { installSansoulForms } from '../custom/sansoul-forms'

installSansoulForms({
  routes: { 'inspiritsbar.de:form-contact': 'principal:inspiritsbar.de:form-contact' },
  formValid,
  changeValues,
  copy
})
