export default [
  {
    id: 1,
    name: "Social Media Post",
    description: "A template for creating engaging social media content.",
    category: "Marketing",
    icons: "📱",
    aiPrompts: "Generate creative post ideas for various platforms.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "social-media-post",
    form: [
      {
        label: "Enter Post Title",
        field: "title",
        name: "postTitle",
        required: true,
      },
      {
        label: "Enter Content Description",
        field: "content",
        name: "postContent",
        required: true,
      },
      {
        label: "Select Image URL",
        field: "imageUrls",
        name: "imageUrls  ",
        required: false,
      },
      {
        label: "Select Image URL",
        field: "imageUrl",
        name: "imageUrl",
        required: false,
      },
    ],
  },
  {
    id: 2,
    name: "Blog Outline",
    description: "Structured outline for writing compelling blog articles.",
    category: "Content Writing",
    icons: "📝",
    aiPrompts: "Outline blog structure with key points and subtopics.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "blog-outline",
    form: [
      {
        label: "Enter Blog Title",
        field: "title",
        name: "blogTitle",
        required: true,
      },
      {
        label: "Enter Main Points",
        field: "mainPoints",
        name: "mainPoints",
        required: true,
      },
      {
        label: "Enter Target Audience",
        field: "targetAudience",
        name: "targetAudience",
        required: true,
      },
    ],
  },
  {
    id: 3,
    name: "Email Newsletter",
    description: "A customizable template for sending engaging newsletters.",
    category: "Email Marketing",
    icons: "📧",
    aiPrompts: "Craft personalized newsletter content.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "email-newsletter",
    form: [
      {
        label: "Enter Newsletter Title",
        field: "title",
        name: "newsletterTitle",
        required: true,
      },
      {
        label: "Enter Main Content",
        field: "content",
        name: "newsletterContent",
        required: true,
      },
      {
        label: "Select Audience Segments",
        field: "audienceSegments",
        name: "audienceSegments",
        required: false,
      },
    ],
  },
  {
    id: 4,
    name: "Business Proposal",
    description:
      "A structured proposal template for pitching projects or services.",
    category: "Business",
    icons: "📄",
    aiPrompts: "Create a persuasive business proposal.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "business-proposal",
    form: [
      {
        label: "Enter Proposal Title",
        field: "title",
        name: "proposalTitle",
        required: true,
      },
      {
        label: "Describe the Project",
        field: "projectDescription",
        name: "projectDescription",
        required: true,
      },
      {
        label: "Enter Budget Estimate",
        field: "budgetEstimate",
        name: "budgetEstimate",
        required: true,
      },
    ],
  },
  {
    id: 5,
    name: "Project Plan",
    description:
      "A template to outline project goals, timelines, and resources.",
    category: "Project Management",
    icons: "📊",
    aiPrompts: "Develop a detailed project plan.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "project-plan",
    form: [
      {
        label: "Enter Project Name",
        field: "projectName",
        name: "projectName",
        required: true,
      },
      {
        label: "Define Objectives",
        field: "objectives",
        name: "objectives",
        required: true,
      },
      {
        label: "List Required Resources",
        field: "resources",
        name: "resources",
        required: true,
      },
    ],
  },
  {
    id: 6,
    name: "Content Calendar",
    description:
      "A template for scheduling and organizing content publication.",
    category: "Content Strategy",
    icons: "📅",
    aiPrompts: "Plan content publishing schedule effectively.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "content-calendar",
    form: [
      {
        label: "Enter Month and Year",
        field: "monthYear",
        name: "monthYear",
        required: true,
      },
      {
        label: "List Planned Content",
        field: "plannedContent",
        name: "plannedContent",
        required: true,
      },
      {
        label: "Assign Authors",
        field: "authors",
        name: "authors",
        required: false,
      },
    ],
  },
  {
    id: 7,
    name: "Marketing Strategy",
    description:
      "Outline a comprehensive marketing strategy for your business.",
    category: "Marketing",
    icons: "📈",
    aiPrompts: "Generate innovative marketing strategy ideas.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "marketing-strategy",
    form: [
      {
        label: "Enter Strategy Title",
        field: "strategyTitle",
        name: "strategyTitle",
        required: true,
      },
      {
        label: "Define Target Market",
        field: "targetMarket",
        name: "targetMarket",
        required: true,
      },
      {
        label: "List Marketing Channels",
        field: "marketingChannels",
        name: "marketingChannels",
        required: true,
      },
    ],
  },
  {
    id: 8,
    name: "User Persona",
    description: "Template to define and analyze target user personas.",
    category: "User Experience",
    icons: "👤",
    aiPrompts: "Create detailed user personas for your product.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "user-persona",
    form: [
      {
        label: "Enter Persona Name",
        field: "personaName",
        name: "personaName",
        required: true,
      },
      { label: "Define Goals", field: "goals", name: "goals", required: true },
      {
        label: "List Pain Points",
        field: "painPoints",
        name: "painPoints",
        required: true,
      },
    ],
  },
  {
    id: 9,
    name: "SEO Checklist",
    description: "A comprehensive checklist to optimize website SEO.",
    category: "SEO",
    icons: "🔍",
    aiPrompts: "Audit your website for SEO improvements.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "seo-checklist",
    form: [
      {
        label: "Enter Website URL",
        field: "websiteUrl",
        name: "websiteUrl",
        required: true,
      },
      {
        label: "List Target Keywords",
        field: "targetKeywords",
        name: "targetKeywords",
        required: true,
      },
      {
        label: "Select Competitor URLs",
        field: "competitorUrls",
        name: "competitorUrls",
        required: false,
      },
    ],
  },
  {
    id: 10,
    name: "Press Release",
    description: "Template for writing effective press releases.",
    category: "Public Relations",
    icons: "📰",
    aiPrompts: "Draft a compelling press release.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "press-release",
    form: [
      {
        label: "Enter Release Title",
        field: "releaseTitle",
        name: "releaseTitle",
        required: true,
      },
      {
        label: "Enter Release Date",
        field: "releaseDate",
        name: "releaseDate",
        required: true,
      },
      {
        label: "Write the Main Content",
        field: "content",
        name: "content",
        required: true,
      },
    ],
  },
  {
    id: 11,
    name: "Product Launch Plan",
    description: "Template for planning a successful product launch.",
    category: "Product Management",
    icons: "🚀",
    aiPrompts: "Outline the steps for a successful product launch.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "product-launch-plan",
    form: [
      {
        label: "Enter Product Name",
        field: "productName",
        name: "productName",
        required: true,
      },
      {
        label: "Define Target Audience",
        field: "targetAudience",
        name: "targetAudience",
        required: true,
      },
      {
        label: "Set Launch Date",
        field: "launchDate",
        name: "launchDate",
        required: true,
      },
    ],
  },
  {
    id: 12,
    name: "Event Planning Checklist",
    description: "A checklist to ensure all event details are covered.",
    category: "Event Management",
    icons: "🎉",
    aiPrompts: "Create an event plan with all necessary tasks.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "event-planning-checklist",
    form: [
      {
        label: "Enter Event Name",
        field: "eventName",
        name: "eventName",
        required: true,
      },
      {
        label: "Set Event Date",
        field: "eventDate",
        name: "eventDate",
        required: true,
      },
      {
        label: "List Required Tasks",
        field: "requiredTasks",
        name: "requiredTasks",
        required: true,
      },
    ],
  },
  {
    id: 13,
    name: "Training Program Outline",
    description: "Template for structuring a training program.",
    category: "Training",
    icons: "🏫",
    aiPrompts: "Outline training program modules and content.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "training-program-outline",
    form: [
      {
        label: "Enter Program Title",
        field: "programTitle",
        name: "programTitle",
        required: true,
      },
      {
        label: "Define Learning Objectives",
        field: "learningObjectives",
        name: "learningObjectives",
        required: true,
      },
      {
        label: "List Training Modules",
        field: "trainingModules",
        name: "trainingModules",
        required: true,
      },
    ],
  },
  {
    id: 14,
    name: "Customer Feedback Form",
    description: "Template for collecting customer feedback.",
    category: "Customer Experience",
    icons: "💬",
    aiPrompts: "Gather insights from customers effectively.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "customer-feedback-form",
    form: [
      {
        label: "Enter Customer Name",
        field: "customerName",
        name: "customerName",
        required: true,
      },
      {
        label: "Enter Feedback",
        field: "feedback",
        name: "feedback",
        required: true,
      },
      {
        label: "Rate Your Experience (1-5)",
        field: "rating",
        name: "rating",
        required: true,
      },
    ],
  },
  {
    id: 15,
    name: "Sales Report",
    description: "Template for documenting and analyzing sales data.",
    category: "Sales",
    icons: "📊",
    aiPrompts: "Analyze sales trends and performance metrics.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "sales-report",
    form: [
      {
        label: "Enter Report Title",
        field: "reportTitle",
        name: "reportTitle",
        required: true,
      },
      {
        label: "Select Date Range",
        field: "dateRange",
        name: "dateRange",
        required: true,
      },
      {
        label: "Summarize Sales Data",
        field: "salesSummary",
        name: "salesSummary",
        required: true,
      },
    ],
  },
  {
    id: 16,
    name: "Crisis Management Plan",
    description: "A structured approach to managing crises.",
    category: "Risk Management",
    icons: "⚠️",
    aiPrompts: "Develop a crisis management strategy.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "crisis-management-plan",
    form: [
      {
        label: "Enter Crisis Scenario",
        field: "crisisScenario",
        name: "crisisScenario",
        required: true,
      },
      {
        label: "Define Response Strategies",
        field: "responseStrategies",
        name: "responseStrategies",
        required: true,
      },
      {
        label: "List Key Stakeholders",
        field: "keyStakeholders",
        name: "keyStakeholders",
        required: true,
      },
    ],
  },
  {
    id: 17,
    name: "Website Content Plan",
    description: "Plan and organize content for your website.",
    category: "Web Development",
    icons: "🌐",
    aiPrompts: "Create a comprehensive content plan for your website.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "website-content-plan",
    form: [
      {
        label: "Enter Website Title",
        field: "websiteTitle",
        name: "websiteTitle",
        required: true,
      },
      {
        label: "List Main Pages",
        field: "mainPages",
        name: "mainPages",
        required: true,
      },
      {
        label: "Define Content Themes",
        field: "contentThemes",
        name: "contentThemes",
        required: true,
      },
    ],
  },
  {
    id: 18,
    name: "Networking Event Plan",
    description: "Template for organizing networking events.",
    category: "Networking",
    icons: "🤝",
    aiPrompts: "Outline networking event details and logistics.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "networking-event-plan",
    form: [
      {
        label: "Enter Event Name",
        field: "eventName",
        name: "eventName",
        required: true,
      },
      {
        label: "Select Date and Time",
        field: "dateTime",
        name: "dateTime",
        required: true,
      },
      {
        label: "List Attendees",
        field: "attendees",
        name: "attendees",
        required: false,
      },
    ],
  },
  {
    id: 19,
    name: "Investment Pitch Deck",
    description: "A template for creating effective pitch decks for investors.",
    category: "Finance",
    icons: "💵",
    aiPrompts: "Create an engaging pitch deck for potential investors.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "investment-pitch-deck",
    form: [
      {
        label: "Enter Company Name",
        field: "companyName",
        name: "companyName",
        required: true,
      },
      {
        label: "Define Business Model",
        field: "businessModel",
        name: "businessModel",
        required: true,
      },
      {
        label: "Outline Funding Requirements",
        field: "fundingRequirements",
        name: "fundingRequirements",
        required: true,
      },
    ],
  },
  {
    id: 20,
    name: "Social Media Strategy",
    description: "Template for planning effective social media strategies.",
    category: "Marketing",
    icons: "🌟",
    aiPrompts: "Develop a social media strategy that engages your audience.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s",
    slug: "social-media-strategy",
    form: [
      {
        label: "Enter Strategy Title",
        field: "strategyTitle",
        name: "strategyTitle",
        required: true,
      },
      {
        label: "Identify Key Platforms",
        field: "keyPlatforms",
        name: "keyPlatforms",
        required: true,
      },
      {
        label: "Define Content Types",
        field: "contentTypes",
        name: "contentTypes",
        required: true,
      },
    ],
  },
];
