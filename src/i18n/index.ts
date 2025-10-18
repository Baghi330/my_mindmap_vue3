import i18next from 'i18next'
import zh from './zh'
import en from './en'
import ptBR from './ptBR'
import fa from './fa'  // اضافه کردن این خط

i18next.init({
  fallbackLng: 'zh',
  lng: 'zh',
  resources: {
    zh,
    en,
    ptBR,
    fa  // اضافه کردن این خط
  }
})

export default i18next