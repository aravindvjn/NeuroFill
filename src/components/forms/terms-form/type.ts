export type PrivacyPolicyInput = {
    appName: string;
    websiteURL: string;
    businessType: string;
    dataCollection: string;
    dataUsage: string;
    thirdPartyServices: string;
    governingLaw: string;
    userRights: string;
    contactEmail: string;
    childrensPrivacy: string;
};



export type PolicyDataType = {
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