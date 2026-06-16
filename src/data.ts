import { Project, TimelineEvent, Skill, GuestbookMessage } from './types';

export const PERSONAL_INFO = {
  name: 'GUANG',
  chineseName: 'GUANG', // Keeping this consistent for the brand signature
  englishName: 'GUANG',
  tagline: 'Advertising Designer & Signage Fabrication Craftsman',
  subtitle: 'Graphic Precision & High-Tolerance Material Artistry',
  bio: 'Formally trained in Graphic Design & Grid Systems. I specialize in the layout, design, and manufacturing of high-accuracy dimensional storefront signage, custom Die-Cut vinyl graphics (holographic stickers, vehicle decals, micro-etched glass), and spatial installations. Merging clean Bauhaus geometry with micro-calibrated hardware plotting.',
  location: 'Shenzhen, China',
  email: 'guangxionghuu@gmail.com',
  github: 'https://github.com/guangxionghuu',
  workStatus: 'ACCEPTING HIGH-SPEC COMMISSIONS',
  metrics: [
    { label: 'CUSTOM PIECES', value: '150+', sub: 'Storefront glass & automotive livery projects' },
    { label: 'CUTTING TOLERANCE', value: '0.1mm', sub: 'Calibrated via industrial Japanese cutter plotters' },
    { label: 'MATERIAL LIBRARY', value: '24+', sub: 'Including iridescent holographics & matte frosted films' },
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'Urban Glass Decal (Geometric Window Etches)',
    description: 'Custom micro-etched glass partition decals for a high-end streetwear concept boutique. Crafted using premium bubble-free cast white vinyl polymer.',
    longDescription: 'In coordination with the store’s ultra-minimalist design concept, we created a grid layout using clean vector lines. The vinyl material features a 0.1mm micro-weeded cutting margin to maintain structural stability, and is designed to resist temperature changes and weathering for years without shrinkage.',
    category: 'Design',
    tags: ['Die-Cut Vinyl', 'Bauhaus Layouts', 'Glass Decal Placement', 'Cast Polymeric Film'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#',
    completedDate: '2025.11',
    featured: true,
    metrics: 'UV-stabilized polymeric structure tested for 5+ years of zero-peel endurance'
  },
  {
    id: 'p2',
    title: 'Dimensional Signage (Bespoke Backlit Architectural Logo)',
    description: 'Precision dimensional outdoor logo and signage designed for a tech incubator public center. Laser-cut brushed titanium face with internal diffuse LEDs.',
    longDescription: 'Engineered based on strict geometric sans-serif typeface constraints. Each solid metal letter is laser-cut from aerospace-grade 20mm matte-brushed titanium, mounted on customized anchor points with offset back-pins to project an even gradient of shadow and beautiful warm LED light on the textured concrete wall.',
    category: 'Web',
    tags: ['Dimensional Signs', 'Laser Cut Profile', 'Brushed Titanium', 'Diffuse LED Backlit'],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    completedDate: '2025.04',
    featured: true,
    metrics: 'Optimal visibility up to 120 meters, with backscatter alignment accurate to 1.5mm'
  },
  {
    id: 'p3',
    title: 'Fleet Graphics (Precision High-Tension Wrap Liveries)',
    description: 'Custom high-conformability automotive vinyl decals for performance racing cars. Styled using striking symmetrical geometric racing stripes.',
    longDescription: 'Starting from pristine Bezier handle alignments, we designed geometric racing lines that adapt to three-dimensional carbon fiber curves. The decals are printed on high-density Oracal 970 wrap casting film, allowing clean application with built-in air-release channels, maintaining flawless fit without warping or lifting at extreme track speeds.',
    category: 'Mobile',
    tags: ['Automotive Decal', 'High-Conformability Film', 'Bezier Correction', 'Oracal Protective Layer'],
    imageUrl: 'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?auto=format&fit=crop&w=800&q=80',
    completedDate: '2024.12',
    featured: false,
    metrics: 'Zero-lifting guarantee at speeds up to 180 mph under high wind shear'
  },
  {
    id: 'p4',
    title: 'Holographic Warning Series (Limited Iridescent Decals)',
    description: 'A series of custom holographic polarized warning stickers created for visual artists. Features clean physical custom-contour cutting lines.',
    longDescription: 'An experiment in combining multi-layered light-diffraction materials with industrial cut paths. Utilized advanced boolean subtraction to resolve layout intersections, resulting in vector cutting coordinates that cleanly release excess paper during hand-weeding while retaining razor-sharp corners and vibrant geometric elements.',
    category: 'AI',
    tags: ['Iridescent Silver Film', 'Micro Weeding Trapping', 'UV Protective Coat', 'Contour Cut Path'],
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    completedDate: '2024.08',
    featured: true,
    metrics: 'Stunning prismatic spectrum shifts up to 60 degrees under standard ambient light'
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: 't1',
    role: 'Founder & Design Director',
    company: 'GUANG Custom Sign Studio',
    period: '2024 - Present',
    description: 'Bridging digital vectors with material craftsmanship. Installed automatic heavy-duty Japanese plotting machinery and custom laser cutting frameworks. Designing specialty window etchings and dimensional identities for upscale Shenzhen establishments.',
    type: 'work',
    skills: ['Die-Cut Vinyl Planning', 'Vector Path Optimization', 'Industrial Plotter Tuning', 'Large-Scale Spatial Installation']
  },
  {
    id: 't2',
    role: 'Graphic Designer & Pre-flight Operator',
    company: 'Zenith Large-Format Design & Print Co.',
    period: '2022 - 2024',
    description: 'Prepared complex design files for large-scale production. Optimized overlapping vector layers, established bleeding boundaries, configured custom bleed zones, calibrated cutting tools, and resolved alignment variances.',
    type: 'work',
    skills: ['Pre-flighting Inspections', 'Bleeding Guidelines', 'Color Separation Profiles', 'Layer Mask Optimization']
  },
  {
    id: 't3',
    role: 'BFA in Visual Communication (With Honors)',
    company: 'Lu Xun Academy of Fine Arts',
    period: '2018 - 2022',
    description: 'Rigorous studies in typography layout, structural geometry, Bauhaus principles, typeface sizing systems, and physical medium printmaking. Investigated how light waves behave on textured substrates.',
    type: 'education',
    skills: ['Bauhaus Grid Systems', 'Typeface Construction', 'Chromatology', 'Geometric Drafting Principles']
  }
];

export const SKILLS_DATA: Skill[] = [
  // Creative Design
  { name: 'Grid Systems & Typography Layout', level: 96, category: 'Design & UX' },
  { name: 'Color Space & Chromatology Calibration', level: 94, category: 'Design & UX' },
  { name: 'Vector Path Refinement & Optimization', level: 95, category: 'Design & UX' },
  // Fabrication
  { name: 'Die-Cut Vinyl Weeding & Prep', level: 98, category: 'Frontend' },
  { name: 'Bespoke Dimensional Metal Fabrication', level: 90, category: 'Frontend' },
  { name: 'Pre-flight File Verification & Trap Tuning', level: 88, category: 'Frontend' },
  { name: 'Substrate Thermal Expansion Calculations', level: 85, category: 'Backend' },
  { name: 'Custom Printer ICC Profile Management', level: 91, category: 'Backend' },
  { name: 'CNC & Laser Cutting G-Code Drafting', level: 86, category: 'Backend' }
];

export const INITIAL_GUESTBOOK_MESSAGES: GuestbookMessage[] = [
  {
    id: 'm1',
    name: 'Sean Chow (Mose Cafe Founder)',
    email: 'zhouhua.shen@mosecoffee.com',
    message: 'GUANG designed and cut the frosted decals for our cafe storefront. Customers constantly run their fingers over the edges to feel the smooth polymeric lines. Incredible tolerance control, Zero shrinkage.',
    createdAt: '2026-06-08T14:32:00Z',
    avatarColor: 'bg-black',
    rating: 5,
  },
  {
    id: 'm2',
    name: 'Ethel Lin (Fine Arts Curator)',
    email: 'yilin.lin@modern-art-sz.org',
    message: 'The titanium-brushed backlit signage they made for our contemporary exhibition space is flawless. The geometric typography is striking and the warm hardware backscatter is beautiful.',
    createdAt: '2026-06-09T03:15:00Z',
    avatarColor: 'bg-neutral-950',
    rating: 5,
  },
  {
    id: 'm3',
    name: 'Mark Wong (Apex Motorsports Lead)',
    email: 'wanghong@apexracingfirm.com',
    message: 'Outstanding material choice. Tested the automotive wrap livery at high speeds and under intensive heavy washes; absolutely zero edge peeling. Precise geometric seams.',
    createdAt: '2026-06-09T22:45:00Z',
    avatarColor: 'bg-black',
    rating: 5,
  }
];
