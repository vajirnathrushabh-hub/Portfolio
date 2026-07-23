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
    title: 'Public Relations & Social Media Management: Mahesh Landge',
    category: 'social',
    description: 'End-to-end social media and public relations management for an elected representative from Pimpri-Chinchwad — 30-day content calendars, Reels editing and daily uploads, social media analytics, and election campaign execution. Ongoing since 2025 with daily updates across all platforms.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80',
    tags: ['SMM', 'Public Relations', 'Reels Production', 'Campaign Management'],
    client: 'Mahesh Landge',
    year: '2025 – Present',
    link: 'https://www.facebook.com/maheshklandge',
    results: [
      { label: 'Facebook Followers', value: '7.5 Lakh' },
      { label: 'Instagram Followers', value: '8.2 Lakh' },
      { label: 'Combined Reach', value: '50K+' }
    ]
  },
  {
    id: 'proj2',
    title: 'Public Relations & Social Media Management: Kavita Bhongale Patil',
    category: 'social',
    description: 'Complete social media and public relations management for a Pimpri-Chinchwad Municipal Corporation Corporator — content calendars, Reels editing, social media analysis, and election campaign execution. Actively managed since 2025 with daily uploads and updates.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    tags: ['SMM', 'Public Relations', 'Reels Production', 'Campaign Management'],
    client: 'Kavita Bhongale Patil',
    year: '2025 – Present',
    link: 'https://www.facebook.com/KavitaBhongale',
    results: [
      { label: 'Facebook Followers', value: '20.7K' },
      { label: 'Instagram Followers', value: '5K' },
      { label: 'Engagement Rate', value: '12%' }
    ]
  },
  {
    id: 'proj3',
    title: 'Website Design & Management: maheshlandge.in',
    category: 'web',
    description: 'Designed, built, and have maintained the official website for Mahesh Landge since 2017 — serving as the primary online profile with ongoing updates and upkeep for close to a decade.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
    tags: ['Web Design', 'Long-term Maintenance', 'Content Updates'],
    client: 'Mahesh Landge',
    year: '2017 – Present',
    link: 'https://www.maheshlandge.in/',
    results: [
      { label: 'Live Since', value: '2017' },
      { label: 'Status', value: 'Actively Maintained' }
    ]
  },
  {
    id: 'proj4',
    title: 'Website Design & Management: MahaEnews',
    category: 'web',
    description: 'Designed, built, and manage a bilingual (Marathi & English) news portal, running continuously since 2017 across both language editions.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
    tags: ['Web Design', 'News Portal', 'Bilingual (Marathi/English)'],
    client: 'MahaEnews',
    year: '2017 – Present',
    link: 'https://mahaenews.com/',
    results: [
      { label: 'Live Since', value: '2017' },
      { label: 'Editions', value: 'Marathi + English' }
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
