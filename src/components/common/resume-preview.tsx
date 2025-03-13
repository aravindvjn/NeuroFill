import React from "react";
import { ResumeInputType } from "../forms/resume-form/type";
import ResumePreview from "../previews/resume/template_1/resume";
import ResumePreview1 from "../previews/resume/template_3/resume";
import ResumePreview2 from "../previews/resume/template_2/resume";
import ResumePreview3 from "../previews/resume/template_4/resume";

type Props = {
  resume: ResumeInputType;
  noElevation?:boolean
};
const ResumePreviewer = ({ resume,noElevation }: Props) => {

  if(!resume.templateId){
    return <ResumePreview noElevation={noElevation} resume={resume} />
  }
  
  return (
    <>
      {resume.templateId === "0" && <ResumePreview noElevation={noElevation} resume={resume} />}
      {resume.templateId === "1" && <ResumePreview1 noElevation={noElevation} resume={resume} />}
      {resume.templateId === "2" && <ResumePreview2 noElevation={noElevation} resume={resume} />}
      {resume.templateId === "3" && <ResumePreview3 noElevation={noElevation} resume={resume} />}
    </>
  );
};

export default ResumePreviewer;
