import { cardsItems } from '@/components/cards/contants'
import Heading from '@/components/common/heading'
import TermForm from '@/components/forms/terms-form/term-form'
import React from 'react'

const page = () => {
  return (
    <div className="p-[20px] sm:p-[30px] md:p-[40px]">
      <Heading
        subheading={cardsItems[1].subheading}
        heading={cardsItems[1].heading}
      />
      <TermForm />
    </div>
  )
}

export default page
