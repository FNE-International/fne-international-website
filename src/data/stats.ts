// Centralized statistics data used across the website

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface HomepageStat {
  value: string;
  label: string;
  target: number;
  suffix: string;
  divide?: number;
  gradient: string;
}

// Stats displayed on Hope Collective and other pages
export const organizationStats: Stat[] = [
  {
    value: '92%',
    label: 'Goes to Programs',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    value: '35+',
    label: 'Years of Impact',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    value: '3',
    label: 'Countries Served',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064'
  },
  {
    value: '12k+',
    label: 'Lives Impacted',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
];

// Stats for homepage with animation data
export const homepageStats: HomepageStat[] = [
  {
    value: '0',
    label: 'Volunteer Hours',
    target: 15000,
    suffix: 'k+',
    divide: 1000,
    gradient: 'from-[#2D8B4E] to-[#8DC63F]',
  },
  {
    value: '0',
    label: 'Lives Impacted',
    target: 12000,
    suffix: 'k+',
    divide: 1000,
    gradient: 'from-[#3D9A8B] to-[#2D8B4E]',
  },
  {
    value: '0',
    label: 'Eco-Latrines Built',
    target: 100,
    suffix: '+',
    gradient: 'from-[#8DC63F] to-[#F7931E]',
  },
  {
    value: '0',
    label: 'Medical Brigades',
    target: 12,
    suffix: '',
    gradient: 'from-[#F7931E] to-[#ff6b00]',
  },
];
