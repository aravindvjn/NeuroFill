export type CardProps = {
    image_path: string;
    heading: string;
    subheading: string
    link:string
} 


export type ResumeType = {
    title: string;
    id: string;
    templateId: string | null;
}

type FeatureList = {
    [feature: string]: boolean;
};

export interface PlanType {
    id: string;
    name: string;
    price: string;
    description: string;
    features: FeatureList;
}

export type PlanIDs = "basic" | "pro" | "support"