// Centralized giving and donation data

export type GivingColor = 'green' | 'teal' | 'orange';

export interface GivingLevel {
  name: string;
  amount: string;
  frequency: string;
  impact: string;
  icon: string;
  color: GivingColor;
  popular: boolean;
}

export interface ImpactLevel {
  amount: string;
  title: string;
  description: string;
  icon: string;
  color: GivingColor;
}

// Monthly giving levels for Hope Collective
export const givingLevels: GivingLevel[] = [
  {
    name: 'Supporter',
    amount: '$10',
    frequency: '/month',
    impact: 'School supplies for 2 children each month',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    color: 'green',
    popular: false,
  },
  {
    name: 'Advocate',
    amount: '$25',
    frequency: '/month',
    impact: 'Mobile library events for a classroom monthly',
    icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
    color: 'teal',
    popular: false,
  },
  {
    name: 'Champion',
    amount: '$50',
    frequency: '/month',
    impact: 'Monthly medical expenses for a child with chronic illness',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    color: 'orange',
    popular: true,
  },
  {
    name: 'Ambassador',
    amount: '$100',
    frequency: '/month',
    impact: 'Monthly school support for a student in need',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
    color: 'green',
    popular: false,
  },
  {
    name: 'Visionary',
    amount: '$250',
    frequency: '/month',
    impact: 'Monthly operations for the Dreamers program',
    icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    color: 'orange',
    popular: false,
  },
];

// One-time donation impact levels
export const impactLevels: ImpactLevel[] = [
  {
    amount: '$25',
    title: 'School Supplies',
    description: 'Supplies for one student for a semester',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    color: 'green',
  },
  {
    amount: '$50',
    title: 'Medical Care',
    description: 'Consultation and medications for one patient',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    color: 'orange',
  },
  {
    amount: '$100',
    title: 'Clean Water',
    description: 'Water access for a family for one year',
    icon: 'M12 2C12 2 6 9 6 14a6 6 0 1012 0c0-5-6-12-6-12z',
    color: 'teal',
  },
  {
    amount: '$500',
    title: 'Eco-Latrine',
    description: 'Sanitation facility for a family',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    color: 'green',
  },
];

// Impact examples for Hope Collective page
export const impactExamples = [
  {
    amount: '$25/mo',
    title: 'Mobile Library Events',
    description: 'Brings books and reading programs to classrooms monthly, fostering a love of learning.',
    imagePlaceholder: 'Mobile library visiting a classroom',
  },
  {
    amount: '$50/mo',
    title: 'Pediatric Medical Care',
    description: 'Covers monthly medical expenses for a child with chronic health conditions.',
    imagePlaceholder: 'Child receiving medical care',
  },
  {
    amount: '$100/mo',
    title: 'Student Scholarship',
    description: 'Provides monthly school support including tuition, supplies, and uniforms.',
    imagePlaceholder: 'Student in scholarship program',
  },
];
