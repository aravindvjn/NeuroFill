import { ResumeInputType } from '@/components/forms/resume-form/type'
import React from 'react'

const PersonalDetailsPreview = ({firstName,lastName,profession,address,email,phone,color}:ResumeInputType) => {

  if(!firstName &&  !lastName &&  !profession &&  !email && !phone &&  !address )return

  return (
    <div className='text-center text-[14px] border-b-3 pb-1'>
      <p style={{color}} className='text-xl font-bold'>{firstName} {lastName}</p>
      <p style={{color}} className='font-semibold'>{profession}</p>
      <p className='text-gray-700'>{address}</p>
      <div className='flex text-gray-700 items-start justify-between'>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default PersonalDetailsPreview
