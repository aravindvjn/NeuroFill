import { cardsItems } from '@/components/cards/contants'
import Heading from '@/components/common/heading'
import React from 'react'

const page = () => {
  return (
    <div className="layout">
      <Heading
        subheading={cardsItems[1].subheading}
        heading={cardsItems[1].heading}
      />
    </div>
  )
}

export default page
