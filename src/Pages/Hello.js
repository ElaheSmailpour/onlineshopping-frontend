import React from 'react'
import { useTranslation } from 'react-i18next'

const Hello = () => {
  const { t, i18n } = useTranslation()
  

  return (
    <div>
      <p>{t('my translated text')}</p>
    </div>
  )
}

export default Hello