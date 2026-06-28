console.log("NEW DATA.JS LOADED");
const portfolio = {

    profile: {

        name: "Paulene Susa",

        title: "Real Estate Operations & Transaction Support Specialist",

        location: "Dubai, UAE",

        tagline:
            "Helping real estate professionals streamline operations through organized workflows, transaction support, research, and client-ready deliverables."

    },

    categories: [
        {
            id: "property-research",
            label: "Property Research"
        },
        {
            id: "transaction-coordination",
            label: "Transaction Coordination"
        },
        {
            id: "property-management",
            label: "Property Management"
        },
        {
            id: "marketing",
            label: "Marketing"
        }
    ],capabilities: [

    {
        id: "property-research",

        title: "Property Research",

        description:
            "Research-driven support that helps identify opportunities and evaluate properties with confidence.",

        items: [
            "Investment Property Research",
            "Comparative Market Analysis",
            "Zillow Research",
            "Market Data Collection"
        ]
    },

    {
        id: "transaction-coordination",

        title: "Transaction Coordination",

        description:
            "Organized transaction support that keeps buyers, listings, and documentation on track.",

        items: [
            "Listing Coordination",
            "Buyer Transaction Support",
            "Timeline Tracking",
            "Document Management"
        ]
    },

    {
        id: "property-management",

        title: "Property Management",

        description:
            "Administrative and operational support for efficient day-to-day property management.",

        items: [
            "Tenant Screening",
            "Property Accounting",
            "Buildium",
            "Record Management"
        ]
    },

    {
        id: "marketing",

        title: "Marketing & Administrative Support",

        description:
            "Professional marketing assets and administrative support that improve visibility and organization.",

        items: [
            "Canva Marketing",
            "Open House Materials",
            "CRM Updates",
            "Process Documentation"
        ]
    }

],

    featuredProject: "west-virginia",

    projects: [

        {
            id: "west-virginia",

            featured: true,

            title: "Investment Property Research",

            subtitle: "West Virginia Multi-Property Analysis",

            category: "property-research",

            categoryLabel: "Property Research",

            image: "assets/Property Search 1.png",

            gallery: [
                "assets/Property Search 1.png",
                "assets/Property Search 2.png",
                "assets/Property Search 3.png",
                "assets/Property Search 4.png",
                "assets/Property Search 5.png",
                "assets/Property Search 6.png",
                "assets/Property Search 7.png"
            ],

            summary:
                "Conducted investment property research by identifying opportunities that matched acquisition criteria. Organized findings into a client-ready report that supported informed purchasing decisions.",

            outcome:
                "Delivered a structured investment research package that simplified property evaluation and supported confident acquisition decisions.",

            deliverable:
                "Client-ready Investment Property Research Report",

            tools: [
                "Zillow",
                "Canva",
                "Microsoft Excel"
            ],

            skills: [
                "Property Research",
                "Market Analysis",
                "Investment Evaluation",
                "Client Reporting",
                "Data Organization"
            ]
        },

        {
            id: "comparative-market-analysis",

            featured: false,

            title: "Comparative Market Analysis",

            subtitle: "Property Pricing Evaluation",

            category: "property-research",

            categoryLabel: "Property Research",

            image: "assets/Comparative Market Analysis.png",

            gallery: [
                "assets/Comparative Market Analysis.png"
            ],

            summary:
                "Prepared a comparative market analysis to evaluate property values using comparable listings and market trends.",

            outcome:
                "Provided organized pricing data to support informed real estate decisions.",

            deliverable:
                "Comparative Market Analysis Report",

            tools: [
                "Zillow",
                "Google Sheets"
            ],

            skills: [
                "Market Analysis",
                "Pricing Research",
                "Spreadsheet Management"
            ]
        },

        {
            id: "listing-checklist",

            featured: false,

            title: "Listing Coordinator Checklist",

            subtitle: "Transaction Workflow",

            category: "transaction-coordination",

            categoryLabel: "Transaction Coordination",

            image: "assets/Listing Coordinator Checklist.png",

            gallery: [
                "assets/Listing Coordinator Checklist.png"
            ],

            summary:
                "Developed a structured listing coordination checklist to manage tasks, deadlines, and documentation.",

            outcome:
                "Improved organization and consistency throughout the listing process.",

            deliverable:
                "Listing Coordination Checklist",

            tools: [
                "Google Sheets"
            ],

            skills: [
                "Workflow Management",
                "Documentation",
                "Deadline Tracking"
            ]
        },

        {
            id: "buyers-agent-checklist",

            featured: false,

            title: "Buyer's Agent VA Checklist",

            subtitle: "Buyer Transaction Support",

            category: "transaction-coordination",

            categoryLabel: "Transaction Coordination",

            image: "assets/Buyer's Agent VA checklist.png",

            gallery: [
                "assets/Buyer's Agent VA checklist.png"
            ],

            summary:
                "Created a workflow checklist to support buyer-side transactions from inquiry through closing.",

            outcome:
                "Improved task visibility and ensured consistent transaction support.",

            deliverable:
                "Buyer's Agent Checklist",

            tools: [
                "Google Sheets"
            ],

            skills: [
                "Buyer Support",
                "Workflow Management",
                "Task Coordination"
            ]
        },

        {
            id: "tenant-background",

            featured: false,

            title: "Tenant Background Report",

            subtitle: "Tenant Screening",

            category: "property-management",

            categoryLabel: "Property Management",

            image: "assets/Tenant Background Report.png",

            gallery: [
                "assets/Tenant Background Report.png"
            ],

            summary:
                "Reviewed tenant background information and organized screening results for property management decisions.",

            outcome:
                "Delivered structured screening documentation to support tenant selection.",

            deliverable:
                "Tenant Background Report",

            tools: [
                "Google Sheets",
                "US Background Screening Service"
            ],

            skills: [
                "Tenant Screening",
                "Documentation",
                "Property Administration"
            ]
        },

        {
            id: "accounting",

            featured: false,

            title: "Sample Accounting Activity",

            subtitle: "Property Accounting Support",

            category: "property-management",

            categoryLabel: "Property Management",

            image: "assets/Sample Accounting Activity.png",

            gallery: [
                "assets/Sample Accounting Activity.png"
            ],

            summary:
                "Recorded and organized financial transactions related to property management.",

            outcome:
                "Maintained accurate financial records and improved reporting organization.",

            deliverable:
                "Accounting Activity Report",

            tools: [
                "Buildium",
                "Google Sheets",
                "Microsoft Excel"
            ],

            skills: [
                "Property Accounting",
                "Financial Tracking",
                "Reporting"
            ]
        },

        {
            id: "open-house",

            featured: false,

            title: "Open House Marketing",

            subtitle: "Property Promotion",

            category: "marketing",

            categoryLabel: "Marketing",

            image: "assets/Open House Poster.png",

            gallery: [
                "assets/Open House Poster.png"
            ],

            summary:
                "Designed promotional material to support open house marketing campaigns.",

            outcome:
                "Produced visually engaging marketing assets to increase property visibility.",

            deliverable:
                "Open House Poster",

            tools: [
                "Canva",
                "Google",
                "Zillow"
            ],

            skills: [
                "Marketing Design",
                "Property Promotion",
                "Visual Communication"
            ]
        }

    ]

};console.log("Capabilities:", portfolio.capabilities);
console.log("Keys:", Object.keys(portfolio));
