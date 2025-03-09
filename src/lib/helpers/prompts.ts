import { PrivacyPolicyInput } from "@/components/forms/terms-form/type";

export const privacyPromptGenerator = ({
  appName,
  websiteURL,
  businessType,
  dataCollection,
  dataUsage,
  thirdPartyServices,
  governingLaw,
  userRights,
  contactEmail,
  childrensPrivacy,
}: PrivacyPolicyInput) => {
  return `Generate a Privacy Policy for ${appName} available at ${websiteURL}. It is a ${businessType} that collects user data, including ${dataCollection}, and uses it for ${dataUsage}. It integrates with ${thirdPartyServices} and follows ${governingLaw} regulations. Users can ${userRights}. Contact email: ${contactEmail}. Include a clause about children's privacy stating ${childrensPrivacy}.
  
  Response format Array of results ( also give a heading too ) (JSON):
  {
    title: string;
    effectiveDate: string;
    introduction: string;
    dataCollection: {
        purposeOfCollection: string;
        typesOfDataCollected: string[];
    };
    dataUsage: {
        howDataIsUsed: string;
    };
    dataSharing: {
        thirdPartyServices: string;
        sharingPractices: string;
    };
    dataSecurity: {
        securityMeasures: string;
        dataRetention: string;
    };
    userRights: {
        userRightsDetails: string;
        exerciseRights: string;
    };
    childrensPrivacy: {
        childrensPrivacyDetails: string;
    };
    compliance: {
        regulatoryCompliance: string;
    };
    policyUpdates: {
        policyUpdateProcess: string;
    };
    contactEmail: string;
};
    
  `;
};
