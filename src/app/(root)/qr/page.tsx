import { cardsItems } from '@/components/cards/contants'
import Heading from '@/components/common/heading'
import React from 'react'

const page = () => {
  return (
    <div className="layout">
      <Heading
        subheading={cardsItems[4].subheading}
        heading={cardsItems[4].heading}
      />
    </div>
  )
}

export default page
