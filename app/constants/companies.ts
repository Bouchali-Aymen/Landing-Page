import { Company, Feature, FeatureBlock, Pricing } from "../types/interfaces"

export const companies:Company[] = [
    {
        imageUrl: '/companies/company-1.svg',
        alt:'cerclo'
    },
    {
        imageUrl: '/companies/company-2.svg',
        alt:'minimal'
    },
    {
        imageUrl: '/companies/company-3.svg',
        alt:'towny'
    },
    {
        imageUrl: '/companies/company-4.svg',
        alt:'shapa'
    },
    {
        imageUrl: '/companies/company-5.svg',
        alt:'yendo'
    },
]


export const features:Feature[]=[
    {
        imageUrl:"/features/bar-chart.png",
        title:"Reporting dashboard",
        content:"Generate insightful reports and analytics with our reporting dashboard feature, empowering data-driven decision-making for engineering teams."
    },
    {
        imageUrl:"/features/calendar.png",
        title:"Meeting scheduling",
        content:"Effortlessly schedule meetings, coordinate availability, and send automated reminders with the meeting scheduling feature, ensuring seamless collaboration."
    },
    {
        imageUrl:"/features/bar-chart.png",
        title:"100% secured",
        content:"Enhance data protection with robust security features, ensuring confidentiality, integrity, and compliance for your engineering team's CRM dashboard."
    },
]

export const featuresBlock:FeatureBlock[]=[
    {
        imageUrl:"/features/messaing.svg",
        title:"Integrated Messaging System",
        content:"The integrated messaging system within the CRM dashboard for engineering teams allows for instant and seamless communication among team members. It eliminates the need for external messaging platforms, keeping all project-related conversations organized and easily accessible within the dashboard's interface."
    },
    {
        imageUrl:"/features/task-management.svg",
        title:"Resource Allocation and Task Management",
        content:"The task management system within the CRM dashboard for engineering teams enables efficient tracking and assignment of tasks. It provides a centralized platform to create, prioritize, and monitor tasks, ensuring streamlined project execution and improved collaboration among team members.",
        isReversed:true
    }
]


export const pricing:Pricing[]=[
    {
        title:"Freelancer",
        content:"The essentials to provide your best work for your clients.",
        monthPrice:15,
        yearPrice:144,
        features:[
            "5 products",
            "Up to 1,000 subscribers",
            "Basic analytics",
            "48-hour support response time"
        ],
        glowPosition: "right",
    },
    {
        title:"Startup",
        content:"A plan that scales with your rapidly growing business.",
        monthPrice:30,
        yearPrice:288,
        features:[
            "25 products",
            "Up to 10,000 subscribers",
            "Advanced analytics",
            "24-hour support response time",
            "Marketing automations"
        ],
        popular:true
    },
    {
        title:"Enterprise",
        content:"Dedicated support and infrastructure for your company.",
        monthPrice:48,
        yearPrice:576,
        features:[
            "Unlimited products",
            "Unlimited subscribers",
            "1-hour, dedicated support response time",
            "Marketing automations",
            "Custom reporting tools"
        ],
        glowPosition: "left",
    }
]