
import React, { Suspense } from 'react'

import '../Pages/i18n.js'
import Hello from '../Pages/Hello'
import ThankYou from '../Pages/ThankYou'
import LanguageSelector from '../Pages/LanguageSelector'

const Language=()=>{
    
    return (
        <div>
          <Suspense fallback={null}>
            <LanguageSelector />
            <Hello />
            <ThankYou />
          </Suspense>
        </div>
      )
}

export default Language