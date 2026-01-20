// Centralized FAQ data

export interface FAQ {
  question: string;
  answer: string;
}

// Hope Collective / Monthly Giving FAQs
export const hopeCollectiveFaqs: FAQ[] = [
  {
    question: 'How does monthly giving help more than one-time donations?',
    answer: 'Monthly giving provides predictable, sustained funding that allows us to plan long-term programs and make commitments to communities. It reduces administrative costs and ensures consistent support for ongoing initiatives like scholarships, medical care, and educational programs.',
  },
  {
    question: 'Can I change or cancel my monthly donation?',
    answer: 'Absolutely! You have full control over your giving. You can increase, decrease, pause, or cancel your monthly donation at any time through our donor portal or by contacting us directly at info@fneinternational.org.',
  },
  {
    question: 'How will I know my donation is making an impact?',
    answer: "Hope Collective members receive exclusive monthly updates with stories, photos, and impact reports directly from our programs. You'll see exactly how your sustained giving is creating change in communities across Latin America.",
  },
  {
    question: 'Is my donation tax-deductible?',
    answer: "Yes! FNE International is a registered 501(c)(3) nonprofit organization (EIN: 27-1792140). All donations are tax-deductible to the extent allowed by law. You'll receive an annual summary for tax purposes.",
  },
  {
    question: 'Can I direct my monthly gift to a specific program?',
    answer: 'Yes, you can designate your monthly gift to support a specific country (Nicaragua, Peru, or Dominican Republic) or program area (Education, Health, Housing). Contact us to set up a designated monthly gift.',
  },
];

// General donation FAQs (can be extended)
export const donationFaqs: FAQ[] = [
  {
    question: 'Is FNE International a registered nonprofit?',
    answer: 'Yes! FNE International is a registered 501(c)(3) nonprofit organization (EIN: 27-1792140). All donations are tax-deductible to the extent allowed by law.',
  },
  {
    question: 'How is my donation used?',
    answer: '92% of all donations go directly to our programs in Nicaragua, Peru, and the Dominican Republic. We maintain low administrative costs to maximize the impact of every dollar.',
  },
  {
    question: 'Can I donate to a specific program or country?',
    answer: 'Yes! You can designate your gift to support a specific country or program area. Contact us at info@fneinternational.org to set up a designated donation.',
  },
];
