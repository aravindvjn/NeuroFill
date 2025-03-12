import { CardProps, PlanType } from "./type";

export const cardsItems: CardProps[] = [
    {
        image_path: "/images/resume-maker.png",
        heading: "Resume Maker",
        subheading: "Create professional resumes in minutes",
        link:'/resume'
    },
    {
        image_path: "/images/privacy-policy-generator.png",
        heading: "Privacy Policy & Terms Generator",
        subheading: "Generate legal policies tailored for your business",
        link:'/terms'
    },
    {
        image_path: "/images/qr-generator.png",
        heading: "QR Code Generator",
        subheading: "Generate QR codes for links, text, and more",
        link:'/qr'
    },
    {
        image_path: "/images/invoice-generator.png",
        heading: "Invoice Generator",
        subheading: "Create and customize invoices quickly",
        link:'/invoice'
    },
];


export const plans: PlanType[] = [
    {
        id: "basic",
        name: "Basic",
        price: "Free",
        description: "Essential features for individuals with limited support. Completely ad-free.",
        features: {
            "Create up to 3 resumes simultaneously": true,
            "Privacy Policy & Terms Generator": true,
            "QR Code Generator": true,
            "Invoice Generator": true,
            "Access to basic templates": true,
            "Create up to 10 resumes simultaneously": false,
            "Access to premium templates": false,
        }
    },
    {
        id: "pro",
        name: "Pro",
        price: "$30/month",
        description: "Advanced features for professionals and small teams. 100% ad-free experience.",
        features: {
            "Create up to 10 resumes simultaneously": true,
            "Privacy Policy & Terms Generator": true,
            "QR Code Generator": true,
            "Invoice Generator": true,
            "Access to basic templates": true,
            "Access to premium templates": true,
            "Priority email support with a 24-hour response time": true,
        }
    },
    {
        id: "support",
        name: "Support Us",
        price: "$50/month",
        description: "By supporting us, you unlock every feature and contribute to future updates and improvements.",
        features: {
            "Create up to 10 resumes simultaneously": true,
            "Privacy Policy & Terms Generator": true,
            "QR Code Generator": true,
            "Invoice Generator": true,
            "Access to basic templates": true,
            "Access to premium templates": true,
            "Priority email support with a 24-hour response time": true,
        }
    }
];
