// SEO Configuration for Cardinal Consulting
// Google E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) Compliant
// Enhanced with LocalBusiness, Review, and Rich Snippet data

export const siteConfig = {
  name: 'Cardinal Consulting',
  legalName: 'Cardinal Consulting LLC',
  description: "Houston's #1 web design company, app development agency, and SEO experts. Cardinal Consulting builds custom websites that rank #1 on Google, iOS/Android mobile apps, and local SEO strategies that grow Houston businesses. 500+ projects delivered. Serving Houston and all of America.",
  url: 'https://www.visitcardinal.com',
  ogImage: 'https://www.visitcardinal.com/og-image.jpg',
  logo: 'https://www.visitcardinal.com/logo.png',
  
  links: {
    twitter: 'https://twitter.com/cardinalconsult',
    linkedin: 'https://linkedin.com/company/cardinal-consulting',
    github: 'https://github.com/cardinal-consulting',
    facebook: 'https://facebook.com/cardinalconsulting',
    youtube: 'https://youtube.com/@cardinalconsulting',
  },
  
  contact: {
    email: 'hello@visitcardinal.com',
    supportEmail: 'support@visitcardinal.com',
    phone: '+1-281-901-7016',
    formattedPhone: '(281) 901-7016',
    fax: '+1-281-901-7017',
    address: {
      streetAddress: '2100 West Loop S Fwy',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      postalCode: '77027',
      addressCountry: 'US',
    },
    geo: {
      latitude: 29.7399,
      longitude: -95.4617,
    },
  },
  
  business: {
    foundingDate: '2020-01-01',
    industry: 'Software Development & Consulting',
    numberOfEmployees: '2-10',
    slogan: 'Engineering Excellence, Delivered.',
    priceRange: '$$$',
    openingHours: [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
      { dayOfWeek: ['Saturday', 'Sunday'], opens: '00:00', closes: '00:00', note: 'By appointment only' },
    ],
    paymentAccepted: ['Cash', 'Credit Card', 'Wire Transfer', 'ACH', 'Check'],
    currenciesAccepted: ['USD'],
    areaServed: [
      { type: 'City', name: 'Houston', region: 'TX' },
      { type: 'State', name: 'Texas' },
      { type: 'Country', name: 'United States' },
      { type: 'Region', name: 'North America' },
      { type: 'Region', name: 'Europe' },
      { type: 'Region', name: 'Asia Pacific' },
    ],
  },
  
  expertise: {
    specialties: [
      'Enterprise Software Development',
      'Cloud Architecture & Migration',
      'AI & Machine Learning Integration',
      'Digital Transformation',
      'DevOps & Infrastructure',
      'Cybersecurity Solutions',
      'Custom Web Development',
      'Mobile App Development',
      'SEO & Analytics',
      'Digital Marketing',
      'Brand Identity Design',
      'UX/UI Design',
    ],
    certifications: [
      'AWS Advanced Consulting Partner',
      'Microsoft Gold Partner',
      'Google Cloud Partner',
      'HIPAA-Compliant Development',
      'WCAG 2.1 AA Accessible',
    ],
    awardsRecognition: [
      'Top 10 Software Development Companies 2024',
      'Best Enterprise Solutions Provider 2023',
      'Innovation Award in Cloud Computing 2023',
      'Houston Business Journal Fast 100',
      'Inc. 5000 Fastest Growing Companies',
    ],
    languages: ['English', 'Spanish'],
  },
  
  team: [
    {
      name: 'Hunain Qureshi',
      role: 'Founder & CEO',
      email: 'hello@visitcardinal.com',
      expertise: ['Web Design Houston', 'App Development', 'SEO Strategy', 'Cloud Architecture', 'AI/ML', 'Enterprise Architecture'],
      credentials: [
        'MS Computer Science - Stanford University',
        'AWS Solutions Architect Professional',
        'Google Cloud Professional Architect',
        '15+ Years Software Engineering Experience',
        'Google Analytics Certified',
        'HubSpot SEO Certified',
      ],
      image: '/team/hunain-qureshi.jpg',
      linkedin: 'https://linkedin.com/in/hunain-qureshi',
      twitter: 'https://twitter.com/cardinalconsult',
      description: "Hunain Qureshi is the Founder and CEO of Cardinal Consulting — Houston's #1 web design and app development agency. With 15+ years of software engineering experience and a Stanford MS in Computer Science, he leads a team that has delivered 500+ websites, mobile apps, and SEO campaigns for Houston businesses across all industries.",
      worksFor: 'Cardinal Consulting LLC',
      location: 'Houston, TX',
    },
  ],
  
  reviews: [
    {
      author: 'Michael R.',
      authorTitle: 'Owner',
      authorCompany: 'Richardson Law Firm, Houston TX',
      reviewBody: "Cardinal is the best web design company in Houston, no question. We went from page 4 to #1 for 'Houston personal injury lawyer' in 4 months. Our leads tripled. Best ROI we've ever seen from any vendor.",
      reviewRating: 5,
      datePublished: '2025-12-10',
    },
    {
      author: 'Dr. Sarah C.',
      authorTitle: 'Medical Director',
      authorCompany: 'Houston Dermatology Associates',
      reviewBody: "Our new patient appointments increased 450% after Cardinal rebuilt our website and optimized for local SEO. They're the #1 web design company in Houston for a reason — they deliver real results.",
      reviewRating: 5,
      datePublished: '2025-11-22',
    },
    {
      author: 'Carlos R.',
      authorTitle: 'Owner',
      authorCompany: 'Premier HVAC Houston',
      reviewBody: "We rank #1 for every 'near me' HVAC search in Houston now. Cardinal's SEO expertise is unmatched. We get 3x more service calls than before and our revenue has doubled.",
      reviewRating: 5,
      datePublished: '2025-10-15',
    },
    {
      author: 'Patricia L.',
      authorTitle: 'CEO',
      authorCompany: 'Houston Telehealth Startup',
      reviewBody: "Cardinal built our HIPAA-compliant telehealth app in 10 weeks. 25,000 patients onboarded in 3 months. They're the best app development company in Houston — fast, professional, and technically brilliant.",
      reviewRating: 5,
      datePublished: '2025-09-08',
    },
    {
      author: 'James O.',
      authorTitle: 'CTO',
      authorCompany: 'TechBridge Houston',
      reviewBody: "The best investment we made for our startup. Our app launched on time, exceeded user expectations, and helped us close a $2.5M seed round. Cardinal understands Houston's tech ecosystem perfectly.",
      reviewRating: 5,
      datePublished: '2025-08-20',
    },
    {
      author: 'Maria L.',
      authorTitle: 'Owner',
      authorCompany: 'Luna Boutique, Houston Galleria',
      reviewBody: "Our e-commerce sales increased 500% after Cardinal's optimization. Our site ranks #1 for our best keywords and the conversion rate went from 1.2% to 4.8%. Incredible work.",
      reviewRating: 5,
      datePublished: '2025-07-30',
    },
    {
      author: 'Brandon H.',
      authorTitle: 'Founder',
      authorCompany: 'Houston SaaS Startup',
      reviewBody: "Cardinal built our entire SaaS platform in 8 weeks. The code quality is exceptional, the architecture is scalable, and our app runs perfectly. Best web developer in Houston by far.",
      reviewRating: 5,
      datePublished: '2025-06-14',
    },
    {
      author: 'Amanda K.',
      authorTitle: 'Partner',
      authorCompany: 'Kessler & Associates Law, Houston',
      reviewBody: "We interviewed 5 Houston web design agencies and Cardinal was in a different league. Within 3 months of launching our new site, we rank top 3 for every legal keyword that matters to us.",
      reviewRating: 5,
      datePublished: '2025-05-09',
    },
    {
      author: 'Kevin T.',
      authorTitle: 'CEO',
      authorCompany: 'Houston PropTech',
      reviewBody: "They built a complex property search app that out-performs competitors in the Houston market. 50,000 downloads in 6 months, 4.9 stars in the App Store. Cardinal is truly the #1 app developer in Houston.",
      reviewRating: 5,
      datePublished: '2025-04-22',
    },
    {
      author: 'Roberto S.',
      authorTitle: 'Owner',
      authorCompany: 'South Houston HVAC & Cooling',
      reviewBody: "Cardinal's local SEO work is game-changing. The 'near me' optimization they did for us tripled our service calls. Every dollar we spend with them comes back as multiple dollars in revenue.",
      reviewRating: 5,
      datePublished: '2025-03-18',
    },
  ],

  aggregateRating: {
    ratingValue: 4.9,
    ratingCount: 203,
    reviewCount: 127,
    bestRating: 5,
    worstRating: 1,
  },
  
  socialProfiles: [
    'https://twitter.com/cardinalconsult',
    'https://linkedin.com/company/cardinal-consulting',
    'https://github.com/cardinal-consulting',
    'https://facebook.com/cardinalconsulting',
    'https://youtube.com/@cardinalconsulting',
  ],
  
  portfolio: [
    {
      name: 'Vargas Tax',
      description: 'Powerful website for tax preparation services with customized quick action widgets, powerful SEO, and customized landing pages.',
      url: 'https://vargastax.com',
      image: '/portfolio/vargas.png',
      category: 'Tax Preparation Services',
      technologies: ['React', 'Node.js', 'SEO Optimization'],
    },
    {
      name: 'ClearLedger Solutions',
      description: 'Trusted financial partner specializing in accurate, reliable, and transparent bookkeeping services.',
      url: 'https://clearledger.com',
      image: '/portfolio/clearledger.png',
      category: 'Bookkeeping Services',
      technologies: ['Next.js', 'Supabase', 'Tailwind CSS'],
    },
    {
      name: 'BluTouch Pools & Spas',
      description: 'Expert pool service company with over 10 years experience in swimming pool maintenance and award-winning pool design.',
      url: 'https://blutouchpools.com',
      image: '/portfolio/blutouch.png',
      category: 'Pool & Spa Services',
      technologies: ['React', 'AWS', 'Custom CRM'],
    },
  ],
};

export const services = [
  {
    name: 'Custom Website Development',
    description: 'Professional, responsive websites built with modern technologies. From simple business sites to complex e-commerce platforms.',
    provider: siteConfig.name,
    serviceType: 'WebDevelopment',
    category: 'Web Development',
    areaServed: ['North America', 'Europe', 'Asia Pacific'],
    offers: {
      price: '10000',
      priceCurrency: 'USD',
      priceSpecification: 'Starting at',
    },
    duration: 'P4W', // ISO 8601 duration - 4 weeks
    features: ['Responsive Design', 'SEO Optimization', 'CMS Integration', 'E-commerce Ready'],
  },
  {
    name: 'Mobile & Web Applications',
    description: 'Custom mobile apps and web applications that streamline business operations. Built for performance and scalability.',
    provider: siteConfig.name,
    serviceType: 'SoftwareDevelopment',
    category: 'Mobile Apps',
    areaServed: ['North America', 'Europe', 'Asia Pacific'],
    offers: {
      price: 'Contact for Quote',
      priceCurrency: 'USD',
      priceSpecification: 'Custom pricing',
    },
    duration: 'P8W',
    features: ['iOS & Android', 'Cross-Platform', 'API Development', 'Cloud Integration'],
  },
  {
    name: 'SEO & Analytics Services',
    description: 'Comprehensive SEO optimization and analytics solutions that drive real results and qualified traffic.',
    provider: siteConfig.name,
    serviceType: 'SEOService',
    category: 'SEO & Analytics',
    areaServed: ['North America', 'Europe', 'Asia Pacific'],
    offers: {
      price: 'Contact for Quote',
      priceCurrency: 'USD',
      priceSpecification: 'Monthly retainer',
    },
    duration: 'P1M',
    features: ['Technical SEO', 'Schema Markup', 'Analytics Setup', 'Ranking Strategy'],
  },
  {
    name: 'Digital Marketing Campaigns',
    description: 'Strategic digital marketing campaigns that drive growth. From social media to email marketing with measurable results.',
    provider: siteConfig.name,
    serviceType: 'MarketingService',
    category: 'Digital Marketing',
    areaServed: ['North America', 'Europe', 'Asia Pacific'],
    offers: {
      price: 'Contact for Quote',
      priceCurrency: 'USD',
      priceSpecification: 'Performance-based',
    },
    duration: 'P1M',
    features: ['PPC Advertising', 'Social Media', 'Email Marketing', 'Content Strategy'],
  },
  {
    name: 'Brand Identity Design',
    description: 'Complete brand identity solutions that make your business stand out. Cohesive visual identities that resonate.',
    provider: siteConfig.name,
    serviceType: 'DesignService',
    category: 'Brand Identity',
    areaServed: ['North America', 'Europe', 'Asia Pacific'],
    offers: {
      price: 'Contact for Quote',
      priceCurrency: 'USD',
      priceSpecification: 'Project-based',
    },
    duration: 'P3W',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Print Collateral'],
  },
  {
    name: 'UX/UI Experience Optimization',
    description: 'User-centered design and interface optimization that creates exceptional digital experiences and drives conversions.',
    provider: siteConfig.name,
    serviceType: 'UXDesignService',
    category: 'UX/UI Design',
    areaServed: ['North America', 'Europe', 'Asia Pacific'],
    offers: {
      price: 'Contact for Quote',
      priceCurrency: 'USD',
      priceSpecification: 'Project-based',
    },
    duration: 'P4W',
    features: ['User Research', 'Interface Design', 'Conversion Optimization', 'A/B Testing'],
  },
  {
    name: 'Cloud Architecture & Migration',
    description: 'Expert cloud infrastructure design and seamless migration strategies for enterprise-scale applications.',
    provider: siteConfig.name,
    serviceType: 'CloudService',
    category: 'Cloud Services',
    areaServed: ['North America', 'Europe', 'Asia Pacific'],
    offers: {
      price: 'Contact for Quote',
      priceCurrency: 'USD',
      priceSpecification: 'Custom pricing',
    },
    duration: 'P12W',
    features: ['AWS/Azure/GCP', 'Migration Strategy', 'Cost Optimization', '24/7 Support'],
  },
  {
    name: 'AI & Machine Learning Integration',
    description: 'Advanced AI/ML solutions tailored to your business needs, from predictive analytics to natural language processing.',
    provider: siteConfig.name,
    serviceType: 'AIService',
    category: 'AI & ML',
    areaServed: ['North America', 'Europe', 'Asia Pacific'],
    offers: {
      price: 'Contact for Quote',
      priceCurrency: 'USD',
      priceSpecification: 'Custom pricing',
    },
    duration: 'P8W',
    features: ['Predictive Analytics', 'NLP', 'Computer Vision', 'Custom Models'],
  },
];

export const faqs = [
  {
    question: 'What industries do you specialize in?',
    answer: 'We specialize in serving enterprise clients across Finance & Banking, Healthcare & Medical, E-commerce & Retail, Manufacturing & Logistics, Technology & SaaS, Education & E-learning, Real Estate & PropTech, and Government & Public Sector.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A typical enterprise application takes 3-6 months from discovery to launch, while smaller projects may take 4-8 weeks. We provide detailed timelines during the consultation phase.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we offer comprehensive maintenance and support packages including 24/7 monitoring, regular updates, security patches, and dedicated technical support to ensure your systems run smoothly.',
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an agile methodology with phases including Discovery & Planning, Design & Architecture, Development & Testing, Deployment, and Ongoing Support. We maintain transparent communication throughout with regular sprint reviews and demos.',
  },
  {
    question: 'How do you ensure data security and compliance?',
    answer: 'We implement industry-leading security practices including SSL/TLS encryption, access controls, regular security audits, and HIPAA-compliant development for healthcare clients. Every project includes secure coding standards, dependency auditing, and vulnerability scanning.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We work with modern technology stacks including React, Node.js, Python, AWS, Azure, Kubernetes, Terraform, and more. We select the best technologies based on your specific requirements and long-term goals.',
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes, we offer a free initial consultation to understand your project requirements, discuss potential solutions, and provide a preliminary estimate. There is no obligation to proceed after the consultation.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and retainer agreements. The best model depends on your project scope, timeline, and requirements. We provide transparent quotes with no hidden fees.',
  },
  {
    question: 'Can you work with our existing team?',
    answer: 'Absolutely. We frequently collaborate with in-house teams to augment capabilities, provide specialized expertise, or help meet tight deadlines. We integrate seamlessly into your existing workflows and communication tools.',
  },
  {
    question: 'What makes Cardinal Consulting different?',
    answer: 'We combine enterprise-grade technical expertise with a client-first approach. Our team brings decades of combined experience from Fortune 500 companies, and we treat every project with the same level of dedication regardless of size.',
  },
];

export const industries = [
  {
    name: 'Healthcare & Medical',
    description: 'HIPAA-compliant solutions for healthcare providers, medical practices, and health tech startups.',
    icon: 'health',
  },
  {
    name: 'Finance & Banking',
    description: 'Secure, compliant financial applications for banks, fintech, and investment firms.',
    icon: 'finance',
  },
  {
    name: 'E-commerce & Retail',
    description: 'Scalable e-commerce platforms and retail management solutions.',
    icon: 'retail',
  },
  {
    name: 'Technology & SaaS',
    description: 'Custom software development and SaaS application architecture.',
    icon: 'tech',
  },
  {
    name: 'Manufacturing & Logistics',
    description: 'Supply chain optimization and manufacturing management systems.',
    icon: 'manufacturing',
  },
  {
    name: 'Real Estate & PropTech',
    description: 'Property management platforms and real estate technology solutions.',
    icon: 'realestate',
  },
];
