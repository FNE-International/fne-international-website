// Centralized testimonials data

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

// Hope Collective member testimonials
export const hopeCollectiveTestimonials: Testimonial[] = [
  {
    quote: "Knowing that my monthly contribution is helping a child receive medical care they couldn't otherwise afford gives me such peace of mind. It's not just a donation—it's a relationship.",
    name: 'Sarah M.',
    role: 'Hope Collective Member since 2021',
  },
  {
    quote: "I love the updates I receive every month. Seeing the faces of the children and families I'm helping makes my small monthly gift feel so significant.",
    name: 'David R.',
    role: 'Hope Collective Ambassador',
  },
];

// General volunteer/donor testimonials (can be extended)
export const volunteerTestimonials: Testimonial[] = [
  {
    quote: 'My experience volunteering with FNE changed my perspective on what sustainable development means. The focus on empowering local communities rather than creating dependency is inspiring.',
    name: 'Maria L.',
    role: 'Volunteer, Nicaragua 2023',
  },
];
