export interface Collection {
  name: string;
  tagline: string;
  image: string;
  items: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  title: string;
  category: string;
  image: string;
  span: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface Material {
  name: string;
  description: string;
  image: string;
}

export const collections: Collection[] = [
  {
    name: 'Luxury Sofa Collection',
    tagline: 'Hand-tailored comfort',
    image: 'https://images.pexels.com/photos/8135267/pexels-photo-8135267.jpeg?auto=compress&cs=tinysrgb&w=1200',
    items: '24 Designs',
  },
  {
    name: 'Premium Beds',
    tagline: 'Rest in elegance',
    image: 'https://images.pexels.com/photos/8135505/pexels-photo-8135505.jpeg?auto=compress&cs=tinysrgb&w=1200',
    items: '18 Designs',
  },
  {
    name: 'Dining Collection',
    tagline: 'Gather in style',
    image: 'https://images.pexels.com/photos/8135272/pexels-photo-8135272.jpeg?auto=compress&cs=tinysrgb&w=1200',
    items: '16 Designs',
  },
  {
    name: 'Wardrobes',
    tagline: 'Organized luxury',
    image: 'https://images.pexels.com/photos/39733041/pexels-photo-39733041.jpeg?auto=compress&cs=tinysrgb&w=1200',
    items: '20 Designs',
  },
  {
    name: 'TV Units',
    tagline: 'Modern entertainment',
    image: 'https://images.pexels.com/photos/6020432/pexels-photo-6020432.jpeg?auto=compress&cs=tinysrgb&w=1200',
    items: '12 Designs',
  },
  {
    name: 'Modular Furniture',
    tagline: 'Built for your space',
    image: 'https://images.pexels.com/photos/7148841/pexels-photo-7148841.jpeg?auto=compress&cs=tinysrgb&w=1200',
    items: '30+ Designs',
  },
];

export const features: Feature[] = [
  {
    title: 'Premium Materials',
    description: 'Solid wood, premium fabrics, and top-grain leather sourced from trusted suppliers.',
    icon: 'Gem',
  },
  {
    title: 'Modern Designs',
    description: 'Contemporary aesthetics crafted by experienced designers for the modern home.',
    icon: 'Palette',
  },
  {
    title: 'Custom Furniture',
    description: 'Bespoke pieces tailored to your space, style, and exact specifications.',
    icon: 'Ruler',
  },
  {
    title: 'Affordable Luxury',
    description: 'Premium quality at honest prices, with flexible EMI options available.',
    icon: 'BadgePercent',
  },
  {
    title: 'Expert Craftsmanship',
    description: 'Decades of woodworking expertise in every joint, stitch, and finish.',
    icon: 'Hammer',
  },
  {
    title: 'Fast Delivery',
    description: 'White-glove delivery and professional installation across Kolkata.',
    icon: 'Truck',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: 'Luxury Bedroom',
    category: 'Bedroom',
    image: 'https://images.pexels.com/photos/7535063/pexels-photo-7535063.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Luxury Living Room',
    category: 'Living Room',
    image: 'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: '',
  },
  {
    title: 'Modern Dining',
    category: 'Dining',
    image: 'https://images.pexels.com/photos/7195569/pexels-photo-7195569.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: '',
  },
  {
    title: 'Office Workspace',
    category: 'Office',
    image: 'https://images.pexels.com/photos/7534217/pexels-photo-7534217.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'md:col-span-2',
  },
  {
    title: 'Minimal Interior',
    category: 'Minimal',
    image: 'https://images.pexels.com/photos/12277013/pexels-photo-12277013.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: '',
  },
  {
    title: 'Wooden Collection',
    category: 'Wooden',
    image: 'https://images.pexels.com/photos/12277202/pexels-photo-12277202.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: '',
  },
];

export const materials: Material[] = [
  {
    name: 'Solid Wood',
    description: 'Hand-selected teak, oak, and walnut — built to last generations.',
    image: 'https://images.pexels.com/photos/7484800/pexels-photo-7484800.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Premium Fabric',
    description: 'Italian velvet, linen, and performance fabrics in rich textures.',
    image: 'https://images.pexels.com/photos/8135295/pexels-photo-8135295.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Top-Grain Leather',
    description: 'Full-grain and top-grain leather, vegetable-tanned and durable.',
    image: 'https://images.pexels.com/photos/10625639/pexels-photo-10625639.png?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Engineered Wood',
    description: 'High-grade MDF and plywood with premium veneer finishes.',
    image: 'https://images.pexels.com/photos/11098254/pexels-photo-11098254.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Sharma',
    role: 'Homeowner, Salt Lake',
    image: 'https://images.pexels.com/photos/7580763/pexels-photo-7580763.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    quote: 'AR Furniture transformed our living room completely. The craftsmanship on our sofa set is exceptional — it feels like a piece of art. Worth every rupee.',
  },
  {
    name: 'Priya Agarwal',
    role: 'Interior Designer',
    image: 'https://images.pexels.com/photos/39486701/pexels-photo-39486701.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    quote: 'I recommend AR Furniture to all my clients. Their custom wardrobes fit perfectly into challenging spaces, and the finish quality is consistently outstanding.',
  },
  {
    name: 'Amit Khanna',
    role: 'Business Owner, New Town',
    image: 'https://images.pexels.com/photos/7580937/pexels-photo-7580937.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    quote: 'Furnished our entire office through AR Furniture. From the modular desks to the conference table, everything arrived on time and installed flawlessly. Highly professional team.',
  },
  {
    name: 'Sneha Gupta',
    role: 'Homeowner, Ballygunge',
    image: 'https://images.pexels.com/photos/27086953/pexels-photo-27086953.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    quote: 'The dining set we ordered is even more beautiful in person. The wood grain, the upholstery, the finishing — every detail screams quality. AR Furniture is our go-to now.',
  },
];

export const stats: Stat[] = [
  { value: 5000, suffix: '+', label: 'Happy Customers' },
  { value: 1200, suffix: '+', label: 'Furniture Delivered' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '+', label: 'Premium Designs' },
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Choose Design',
    description: 'Browse our collections or share your vision with our design consultants.',
    icon: 'MousePointerClick',
  },
  {
    step: '02',
    title: 'Customization',
    description: 'We tailor dimensions, materials, and finishes to your exact space and taste.',
    icon: 'Settings2',
  },
  {
    step: '03',
    title: 'Production',
    description: 'Master craftsmen build your furniture with precision and care in our workshop.',
    icon: 'Factory',
  },
  {
    step: '04',
    title: 'Quality Check',
    description: 'Every piece undergoes rigorous inspection before it leaves our facility.',
    icon: 'ShieldCheck',
  },
  {
    step: '05',
    title: 'Delivery',
    description: 'White-glove delivery with careful handling to protect your home and furniture.',
    icon: 'Truck',
  },
  {
    step: '06',
    title: 'Installation',
    description: 'Professional assembly and placement — your room is ready to enjoy.',
    icon: 'Wrench',
  },
];

export const faqs = [
  {
    question: 'Do you offer custom furniture design?',
    answer: 'Absolutely. Custom furniture is one of our specialties. Share your dimensions, preferred materials, and style references — our design team will create bespoke pieces tailored precisely to your space. Visit our showroom or book a free consultation to get started.',
  },
  {
    question: 'What areas do you deliver to?',
    answer: 'We provide white-glove delivery and installation across Kolkata and surrounding areas including Salt Lake, New Town, Ballygunge, Rajarhat, and Howrah. For larger projects, we can arrange delivery to other cities in West Bengal — contact us for details.',
  },
  {
    question: 'Is EMI or financing available?',
    answer: 'Yes, we offer flexible EMI options on purchases above a certain value. Our team can walk you through available plans at the showroom. We accept all major credit cards, UPI, and bank transfers.',
  },
  {
    question: 'What warranty do you provide?',
    answer: 'All our furniture comes with a standard warranty covering manufacturing defects. Solid wood pieces carry an extended warranty. Specific warranty periods vary by product — our team will provide full details at the time of purchase.',
  },
  {
    question: 'Can I see the furniture in person before ordering?',
    answer: 'We highly encourage it. Our Kolkata showroom displays a wide range of our collections. You can experience the materials, sit on the sofas, and see the craftsmanship up close. Book a visit and our team will give you a personalized tour.',
  },
  {
    question: 'How long does delivery take after ordering?',
    answer: 'In-stock items are typically delivered within 7–10 days. Custom and made-to-order pieces take 3–6 weeks depending on complexity. We will give you a clear timeline at the time of order and keep you updated throughout.',
  },
];

export const navLinks = [
  { label: 'Collections', href: '#collections' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const showroomInfo = {
  name: 'AR Furniture',
  tagline: 'Crafted for Modern Living',
  location: 'Kolkata, West Bengal',
  address: 'Full showroom address coming soon',
  phone: '+91 XXXXX XXXXX',
  whatsapp: '+91 XXXXX XXXXX',
  email: 'info@arfurniture.in',
  mapsLink: '#',
  hours: [
    { day: 'Monday – Saturday', time: '10:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '11:00 AM – 6:00 PM' },
  ],
};

export const heroImage = 'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1920';
export const ctaBgImage = 'https://images.pexels.com/photos/33529500/pexels-photo-33529500.jpeg?auto=compress&cs=tinysrgb&w=1920';
