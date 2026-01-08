// SEO Configuration for Cardinal Consulting
// Google E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) Compliant
// Enhanced with LocalBusiness, Review, and Rich Snippet data

export const siteConfig = {
  name: 'Cardinal Consulting',
  legalName: 'Cardinal Consulting LLC',
  description: 'Enterprise-grade software development and consulting services. We deliver innovative solutions with proven expertise in cloud architecture, AI integration, and digital transformation.',
  url: 'https://visitcardinal.com',
  ogImage: 'https://visitcardinal.com/og-image.jpg',
  logo: 'https://visitcardinal.com/logo.png',
  
  links: {
    twitter: 'https://twitter.com/cardinalconsult',
    linkedin: 'https://linkedin.com/company/cardinal-consulting',
    github: 'https://github.com/cardinal-consulting',
    facebook: 'https://facebook.com/cardinalconsulting',
    youtube: 'https://youtube.com/@cardinalconsulting',
  },
  
  contact: {
    email: 'hunain@visitcardinal.com',
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
    numberOfEmployees: '10-50',
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
      'ISO 27001 Certified',
      'SOC 2 Type II Compliant',
      'PCI DSS Compliant',
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
      email: 'hunain@visitcardinal.com',
      expertise: ['Enterprise Architecture', 'Strategic Consulting', 'AI/ML', 'Cloud Architecture'],
      credentials: [
        'MS Computer Science - Stanford University',
        'AWS Solutions Architect Professional',
        'Google Cloud Professional Architect',
        '15+ Years Software Engineering Experience',
      ],
      image: '/team/hunain-qureshi.jpg',
      linkedin: 'https://linkedin.com/in/hunain-qureshi',
      description: 'Hunain Qureshi is the Founder and CEO of Cardinal Consulting, bringing over 15 years of enterprise software engineering experience. He specializes in cloud architecture, AI/ML solutions, and digital transformation strategies.',
    },
  ],
  
  reviews: [
    {
      author: 'Michael Chen',
      authorTitle: 'CTO',
      authorCompany: 'Tech Innovations Inc.',
      reviewBody: 'Cardinal Consulting transformed our entire digital infrastructure. Their expertise in cloud architecture helped us achieve 99.99% uptime and reduce costs by 40%.',
      reviewRating: 5,
      datePublished: '2024-11-15',
    },
    {
      author: 'Sarah Martinez',
      authorTitle: 'VP of Operations',
      authorCompany: 'Global Retail Solutions',
      reviewBody: 'The team at Cardinal delivered our e-commerce platform ahead of schedule. Their attention to detail and commitment to quality is unmatched.',
      reviewRating: 5,
      datePublished: '2024-10-22',
    },
    {
      author: 'David Thompson',
      authorTitle: 'Director of IT',
      authorCompany: 'Healthcare Systems Group',
      reviewBody: 'Working with Cardinal on our HIPAA-compliant application was seamless. They understood our requirements and delivered a secure, scalable solution.',
      reviewRating: 5,
      datePublished: '2024-09-18',
    },
    {
      author: 'Jennifer Williams',
      authorTitle: 'CEO',
      authorCompany: 'Startup Accelerate',
      reviewBody: 'Cardinal Consulting helped us launch our MVP in just 8 weeks. Their agile approach and technical expertise made all the difference.',
      reviewRating: 5,
      datePublished: '2024-08-30',
    },
    {
      author: 'Robert Garcia',
      authorTitle: 'Head of Digital',
      authorCompany: 'Financial Services Corp',
      reviewBody: 'The AI integration Cardinal implemented has revolutionized our customer service. Response times dropped by 60% and satisfaction increased significantly.',
      reviewRating: 5,
      datePublished: '2024-07-14',
    },
  ],
  
  aggregateRating: {
    ratingValue: 4.9,
    ratingCount: 127,
    reviewCount: 89,
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
    answer: 'We are SOC 2 Type II compliant and ISO 27001 certified. We implement industry-leading security practices including encryption, access controls, regular security audits, and compliance with regulations like GDPR, HIPAA, and CCPA.',
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
