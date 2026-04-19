import aquarabiaCover from '../assets/covers/aquarabia.jpg'
import sixflagsCover from '../assets/covers/sixflags.jpg'
import saryCover from '../assets/covers/Sary.jpg'
import zydaCover from '../assets/covers/Zyda.jpg'
import talentHavenCover from '../assets/covers/talent-haven.jpg'
import purchaseOrderCover from '../assets/covers/purchase-order.jpg'

export const projects = [
  {
    id: 1,
    slug: 'aquarabia',
    title: 'Aquarabia Qiddiya City',
    description:
      "Designed the end-to-end booking flow for Aquarabia at Qiddiya City, one of Saudi Arabia's most anticipated entertainment destinations.",
    tags: ['Entertainment', 'B2C'],
    color: '#a0e7e5',
    image: aquarabiaCover,
    year: '2026',
  },
  {
    id: 2,
    slug: 'six-flags',
    title: 'Six Flags Qiddiya City',
    description:
      "Crafting a thrilling companion app for the region's first Six Flags theme park — ride queues, maps, and moments to remember.",
    tags: ['Mobile App', 'UX', 'Entertainment'],
    color: '#ffadad',
    image: sixflagsCover,
    year: '2026',
  },
  {
    id: 3,
    slug: 'sary',
    title: "Refining Sary's Checkout Flow",
    description:
      "Reducing drop-off in Sary's B2B marketplace by rethinking the checkout from cart to confirmation.",
    tags: ['B2B', 'E-commerce', 'Optimization'],
    color: '#ffd6a5',
    image: saryCover,
    year: '2023',
  },
  {
    id: 6,
    title: 'Purchase Order Management',
    description:
      'Streamlining procurement workflows with a clean, auditable PO system for enterprise teams.',
    tags: ['Enterprise', 'Workflow', 'B2B'],
    color: '#fdffb6',
    image: purchaseOrderCover,
    year: '2022',
  },
  {
    id: 4,
    slug: 'zyda',
    title: 'Drive Loyalty with RFM Customer Segmentation',
    description:
      'Customer segmentation for restaurant loyalty — giving F&B teams the tools to understand and retain their regulars.',
    tags: ['SaaS', 'CRM', 'Restaurant Tech'],
    color: '#bdb2ff',
    image: zydaCover,
    year: '2023',
  },
  {
    id: 5,
    slug: 'talent-haven',
    title: 'Talent Haven',
    description:
      'The complete HR software for people, payroll & finance — built to feel human in an industry that rarely does.',
    tags: ['SaaS', 'HR', 'Design System'],
    color: '#caffbf',
    image: talentHavenCover,
    year: '2021',
  },
]
