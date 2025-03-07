import { ResumeInputType } from '@/components/forms/resume-form/type'
import { formatDate } from '@/lib/helpers/date';
import React from 'react'

const EducationPreview = ({ education,color }: { education: ResumeInputType["education"] ,color?: ResumeInputType["color"] }) => {
  if (!education || education.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <div className="bg-gray-100 my-2 py-2">
        <p style={{color}} className="text-center font-bold underline text-lg">EDUCATION</p>
      </div>
      {education.map((edu, index) => (
        <div className="mb-4 text-[14px]" key={edu.id || index}>
          <div className="flex justify-between">
            <p style={{color}} className="font-semibold text-[16px]">{edu.degree} in {edu.major}</p>
            <p className="italic text-gray-500">
              {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
            </p>
          </div>
          <p className="text-gray-600">{edu.universityName}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationPreview;
