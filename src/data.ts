import { BlogPost, Project, InstagramPost, Service, Testimonial } from './types';

export const services: Service[] = [
  {
    id: 'smm',
    title: 'Social Media Management',
    description: 'Bespoke end-to-end content creation, calendar planning, engagement, and audience growth strategies that turn followers into brand advocates.',
    icon: 'Share2',
    features: [
      'Strategic content calendar design',
      'High-conversion Reels & short-form video scripts',
      'Daily active community engagement & DM automation',
      'In-depth monthly analytics & competitor reviews'
    ],
    gradient: 'from-[#FF3F56] to-[#FF8E3C]'
  },
  {
    id: 'web',
    title: 'Website Design & Management',
    description: 'Aesthetic, responsive, and blazing-fast digital storefronts and landing pages optimized for search engines, built to maximize customer conversion.',
    icon: 'Laptop',
    features: [
      'Custom UI/UX designed in Figma',
      'Responsive React/Tailwind & CMS development',
      'SEO audit, page-speed optimization, & indexing',
      'Ongoing site health maintenance & design updates'
    ],
    gradient: 'from-[#8B5CF6] to-[#D946EF]'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & PPC',
    description: 'Data-backed advertising campaigns and multi-channel marketing campaigns engineered to scale your lead generation and boost sales.',
    icon: 'TrendingUp',
    features: [
      'Meta (Facebook/Instagram) & Google Ads',
      'Audience research & lookalike funnel setups',
      'Sales copywriting & creative ad banners',
      'Full-funnel attribution and ROI tracking'
    ],
    gradient: 'from-[#06B6D4] to-[#3B82F6]'
  }
];

export const initialProjects: Project[] = [
  {
    id: 'proj1',
    title: 'Organic Reel Campaign: EcoStyle',
    category: 'social',
    description: 'Crafted a 30-day short-form video strategy focusing on aesthetic product reveals and relatable sustainability humor, triggering viral reach.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    tags: ['Reels Production', 'SMM', 'Organic Growth'],
    client: 'EcoStyle Apparel',
    year: '2026',
    results: [
      { label: 'Organic Views', value: '1.2 Million' },
      { label: 'Followers Gained', value: '+14,500' },
      { label: 'Engagement Rate', value: '11.8%' }
    ]
  },
  {
    id: 'proj2',
    title: 'Landing Page: Apex Capital Partners',
    category: 'web',
    description: 'Designed and engineered a high-performance, responsive single-page website for an investment group, complete with beautiful layout elements and custom lead flows.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Web Design', 'UI/UX', 'SEO Optimization'],
    client: 'Apex Capital',
    year: '2025',
    results: [
      { label: 'Conversion Rate', value: '4.85%' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Contact Submissions', value: '+320/Mo' }
    ]
  },
  {
    id: 'proj3',
    title: 'Full Funnel Meta Ads: FitCore Gyms',
    category: 'marketing',
    description: 'Designed, launched, and managed targeted lead generation ads across Instagram and Facebook using modern visual layouts and compelling copywriting.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    tags: ['Paid Media', 'Copywriting', 'Lead Generation'],
    client: 'FitCore Fitness Group',
    year: '2026',
    results: [
      { label: 'Cost Per Lead', value: '$3.40' },
      { label: 'Return on Ad Spend', value: '5.2x' },
      { label: 'New Memberships', value: '+450' }
    ]
  },
  {
    id: 'proj4',
    title: 'Brand Identity & Launch: Bloom Skincare',
    category: 'social',
    description: 'Established the visual blueprint, color palettes, tone of voice, and social assets for a D2C beauty brand, culminating in a highly anticipated social media debut.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    tags: ['Branding', 'Content Creation', 'Launch Strategy'],
    client: 'Bloom Cosmetics',
    year: '2025',
    results: [
      { label: 'Pre-launch List', value: '5,000+' },
      { label: 'SoldCount Out', value: '48 Hours' },
      { label: 'UGC Content Created', value: '120+ Clips' }
    ]
  },
  {
    id: 'proj5',
    title: 'SaaS Platform Redesign: CloudFlow',
    category: 'web',
    description: 'Overhauled the web presence of a project management tool. Structured clean visual hierarchies, smooth scrolling, and simple onboarding widgets.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    tags: ['SaaS Design', 'Web Dev', 'Copywriting'],
    client: 'CloudFlow Tech',
    year: '2026',
    results: [
      { label: 'Bounce Rate', value: '-22%' },
      { label: 'Sign-ups Increase', value: '+38%' },
      { label: 'Mobile Traffic', value: '65%' }
    ]
  },
  {
    id: 'proj6',
    title: 'E-commerce Scale Campaign: VibeGlow',
    category: 'marketing',
    description: 'Synergized Google Shopping and Pinterest ads with custom landing pages to clear out seasonal inventory, setting a record-breaking sales quarter.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    tags: ['E-Commerce', 'PPC Ads', 'Pinterest Marketing'],
    client: 'VibeGlow Wellness',
    year: '2026',
    results: [
      { label: 'Revenue Generated', value: '$84,000' },
      { label: 'PPC ROAS', value: '4.6x' },
      { label: 'Repeat Customers', value: '28%' }
    ]
  }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'blog1',
    title: '5 Algorithmic Hacks to 10x Your Reels Reach This Month',
    category: 'Social Media',
    summary: 'The Instagram algorithm has shifted dramatically. Here are 5 practical, data-tested adjustments you should make to your hook, editing style, and audio selection immediately.',
    content: `## The Era of Content-First Matching

Instagram has officially pivoted its distribution engine. In 2026, the algorithm prioritizes what they call **Interest-Based Matching** over follower-count distribution. This means even a brand new account can clock a million views if the content retains users.

Here are the 5 core hacks we’ve used to skyrocket client accounts this quarter:

### 1. The "Split-Second" Visual Hook
Do not rely on text-only hooks. The first 1.2 seconds must feature high-intensity motion, an abrupt visual transition, or an unexpected action. If your video starts with you standing static waiting to speak, 85% of users have already scrolled.

### 2. High-Frequency Micro-Cuts
Attention spans have bottomed out. Edit your clips to ensure there is a visual shift (zoom, text overlay, change of angle, or cut) every **1.5 to 2.2 seconds**. Keeping the visual feed dynamic prevents cognitive fatigue and retains viewers.

### 3. Native Caption Integration
Over 75% of users browse reels in public environments on mute. If you don't have dynamic, styled caption text embedded on-screen, you are sacrificing the majority of your potential reach. Use high-contrast background containers for text.

### 4. Audio Velocity Layering
Pick trending tracks, but don't just let them run in the background. Sync your visual cuts with the beat-drops of the track. The subconscious alignment of audio and visual elements produces a "dopamine hit" that significantly increases completion rates.

### 5. The "Incomplete" Loop Strategy
Create seamless loops where the ending sentence blends perfectly back into your starting visual hook. When users watch the first 2 seconds of the loop twice without realizing it, the platform logs a >100% watch-time ratio, pushing the reel directly into the viral feed queue.`,
    date: 'July 18, 2026',
    author: 'Rushabh Vajirnath',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    likes: 124,
    comments: [
      { user: 'Sonia_Marketing', text: 'This loop trick literally doubled my views overnight! Highly recommend trying it.', time: '1 day ago' },
      { user: 'ChefDavid', text: 'Does this apply to TikTok too or just IG?', time: '12 hours ago' },
      { user: 'Rushabh_Creator', text: '@ChefDavid Absolutely! The TikTok algorithm actually rewards loop-completion even higher.', time: '10 hours ago' }
    ]
  },
  {
    id: 'blog2',
    title: 'The 2026 On-Page Conversion Checklist for Brand Landing Pages',
    category: 'Website Design',
    summary: 'A beautiful website is useless if it doesn\'t convert visitors into leads. Stop losing potential clients and check if your page satisfies these high-impact conversion benchmarks.',
    content: `## Aesthetic vs. Functionality

Many creators and businesses invest thousands into custom graphics, only to end up with a website that converts at less than 1%. The truth is, modern web users demand immediate clarity, instant performance, and ultra-responsive interaction.

Use this blueprint to audit your current website and landing pages:

### 1. Above-The-Fold Clarity (The 3-Second Test)
When a user lands on your page, they must know three things within 3 seconds:
- What you offer.
- Who it is for.
- What they need to do next (The primary Call to Action).
If they have to scroll to figure out what you do, your bounce rate will exceed 60%.

### 2. Single-Click Contact Bridges
For service providers and creators, friction is the ultimate conversion killer. Display high-contrast floating action buttons for instant-response channels like **WhatsApp** and **Email**. Do not make users fill out 10-field contact forms just to ask for your rates.

### 3. Social Proof Ingestion
Never isolate testimonials to a standalone, forgotten page. Embed video snippets, social media comments, or star ratings directly underneath your primary benefits and hero section. Trust must be established progressively as they scroll.

### 4. Severe Mobile Speed Optimization
Google ranks pages based on mobile indexing, and over 70% of social media traffic is mobile. Minimize massive image files, lazy-load non-essential scripts, and utilize Tailwind utility classes to ensure your page loads in under **1.5 seconds** over a standard mobile connection.`,
    date: 'June 12, 2026',
    author: 'Rushabh Vajirnath',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    likes: 89,
    comments: [
      { user: 'ApexFounder', text: 'Rushabh redesigned our onboarding layout following this guide, and sign-ups jumped by 38%!', time: '2 weeks ago' },
      { user: 'WebNewbie_99', text: 'The 3-second test opened my eyes. My website was way too wordy!', time: '1 week ago' }
    ]
  },
  {
    id: 'blog3',
    title: 'Why Micro-Influencers & Creative Content Drive More Sales Than Big Celebrities',
    category: 'Digital Marketing',
    summary: 'The era of massive follower campaigns is fading. Discover how focused, creative content creators drive authentic community engagement, leading to 4x higher sales conversion.',
    content: `## The Decentralization of Influence

For years, brands believed that securing a post from an influencer with millions of followers was the gold standard of digital marketing. However, recent performance marketing analytics reveal a massive shift: **Micro-creators (10k-100k followers) yield up to 4x higher engagement rates and significantly lower acquisition costs.**

Here is why niche creative expertise is winning:

### 1. The Intimacy Paradox
As an influencer's follower count grows, their engagement rate exponentially decreases. A massive audience is highly diverse and diluted. Conversely, micro-creators hold highly active communities who share a deep, focused interest (e.g., local fitness, indie website design, vegan lifestyle).

### 2. High-Trust Authenticity
People don't buy from corporations; they buy from people they trust. When a micro-creator shares a behind-the-scenes video using a product organically, it feels like a recommendation from a reliable friend, rather than a corporate sponsorship.

### 3. Hyper-Targeted Ad Funnels
By partnering with specialized creators, brands can acquire high-quality, authentic user-generated content (UGC). This content can then be amplified using paid social ads to highly targeted audiences, creating a high-converting growth loop.`,
    date: 'May 28, 2026',
    author: 'Rushabh Vajirnath',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1552581230-2645f2036d0d?auto=format&fit=crop&w=800&q=80',
    likes: 95,
    comments: [
      { user: 'BrandDirector_X', text: 'UGC is the secret sauce. Our ad cost dropped 40% when we switched from agency models to raw creator videos.', time: '1 month ago' }
    ]
  }
];

export const instagramFeed: InstagramPost[] = [
  {
    id: 'ig1',
    caption: 'Reel 🎬 | Speed-designing a high-converting website layout for a local boutique in React. High-impact fonts, clean grids, and custom micro-interactions. Let me know what you think of this aesthetic! 👇 #WebsiteDesign #ReactJS #TailwindCSS #UIUX #DigitalCreator',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&h=600&q=80',
    likes: 1240,
    comments: 48,
    timestamp: '2 hours ago',
    type: 'video',
    commentsList: [
      { username: 'design_daily', text: 'The typography choice is absolute fire! Love the layout.', time: '1h ago' },
      { username: 'tech_founder', text: 'Do you design custom SaaS interfaces as well?', time: '30m ago' },
      { username: 'Rushabh_Creator', text: '@tech_founder Yes I do! Drop a DM or connect via my website for booking.', time: '15m ago' }
    ]
  },
  {
    id: 'ig2',
    caption: 'Growth Chart 📈 | Smashed social growth goals for our beauty e-commerce client Bloom Cosmetics this month! Follower base expanded by 14k+ organic, and direct organic shop traffic is up 420%. Strategic reels and aesthetic aesthetics do wonders. DM to scale your brand! 📩 #SocialMediaManager #BrandGrowth #DigitalMarketing #SMM #CreativeCreator',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=600&q=80',
    likes: 980,
    comments: 32,
    timestamp: '1 day ago',
    type: 'image',
    commentsList: [
      { username: 'bloom_skincare', text: 'You completely changed our social presence! Thank you Rushabh!', time: '20h ago' },
      { username: 'startup_grow', text: 'Insane stats. What was the post frequency?', time: '18h ago' }
    ]
  },
  {
    id: 'ig3',
    caption: 'Carousel 🎠 | 5 crucial elements your business website is missing in 2026. Swipe to check why you might be losing potential clients to your competitors. Clue: It is all about page load speed and frictionless WhatsApp links! 💬 #WebDesign #WebsiteStrategy #DigitalMarketer #RushabhVajirnath #BusinessTips',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&h=600&q=80',
    likes: 1420,
    comments: 55,
    timestamp: '3 days ago',
    type: 'carousel',
    commentsList: [
      { username: 'marketing_pro', text: 'Number 3 is so true! WhatsApp button boosted our leads instantly.', time: '2d ago' },
      { username: 'local_biz_owner', text: 'How do I check my website speed?', time: '1d ago' }
    ]
  },
  {
    id: 'ig4',
    caption: 'Workspace 💻 | Sunday workflow session. Planning content calendars for 8 active clients for August. Fuelled by caffeine and creative layouts. Ready to help more brands tell their stories. Let\'s build together! 🚀 #DigitalCreator #SocialMediaManager #WorkspaceInspo #FreelanceLife #ContentStrategy',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&h=600&q=80',
    likes: 850,
    comments: 21,
    timestamp: '5 days ago',
    type: 'image',
    commentsList: [
      { username: 'freelance_community', text: 'The workspace layout is gorgeous! Good luck with the scheduling!', time: '4d ago' }
    ]
  },
  {
    id: 'ig5',
    caption: 'Design Accent 🎨 | Color psychology cheat-sheet for brands launching in 2026. Choosing vibrant, high-contrast pairings isn\'t just about aesthetics; it is about steering customer emotions and raising click rates. Save this for your next campaign! 📌 #BrandingTips #GraphicDesign #DigitalMarketing #ColorPsychology #ContentCreation',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&h=600&q=80',
    likes: 1120,
    comments: 39,
    timestamp: '1 week ago',
    type: 'image',
    commentsList: [
      { username: 'brand_builder', text: 'This cheat-sheet is extremely detailed. Saved!', time: '6d ago' }
    ]
  },
  {
    id: 'ig6',
    caption: 'Reel 🎬 | How to setup organic TikTok & IG Reels funnels that run on autopilot. From visual hook to custom DM replies that send leads directly to your booking calendar. Ready to unlock passive client calls? Send a message below! 👇 #Automation #ReelsFunnel #DigitalMarketing #LeadGeneration #SMMExpert',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&h=600&q=80',
    likes: 1560,
    comments: 67,
    timestamp: '1 week ago',
    type: 'video',
    commentsList: [
      { username: 'consult_david', text: 'Need this funnel setup ASAP. Let\'s get on a call!', time: '1w ago' }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test1',
    name: 'Sonia Sharma',
    role: 'Founder & CEO',
    company: 'Bloom Skincare Solutions',
    rating: 5,
    text: "Rushabh completely revolutionized our social presence! From creating our brand voice to visual layouts and active reels management. Our sales doubled in the first two months, and our organic reach is over a million per month!",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test2',
    name: 'David Carter',
    role: 'Managing Partner',
    company: 'Apex Capital Partners',
    rating: 5,
    text: "The high-conversion website Rushabh designed and engineered for Apex exceeded all expectations. It is incredibly clean, blazing fast, and converts our high-ticket visitors at almost 5%. A master website developer!",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test3',
    name: 'Rohan Mehta',
    role: 'Operations Director',
    company: 'FitCore Fitness Group',
    rating: 5,
    text: "We hired Rushabh to handle our Meta Ads campaign, and he managed to drop our average customer acquisition cost by 40% while 5x-ing our return on ad spend. Extremely professional and metrics-driven.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
  }
];
