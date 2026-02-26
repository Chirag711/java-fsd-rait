

import Navbar from '@/components/Navbar'
import React from 'react'

const PublicLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
    </div>
  )
}

export default PublicLayout
