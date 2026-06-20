export interface TimelineEntry {
  role: string;
  organization: string;
  location?: string;
  period: string;
  bullets?: string[];
  isEducation?: boolean;
}

export const experience: TimelineEntry[] = [
  {
    role: 'BSIT in Software Development',
    organization: 'MMDC / Mapúa Malayan Colleges',
    period: '2023 – Present',
    isEducation: true,
  },
  {
    role: 'Operations Coordinator — Service Lead / L&D Coach',
    organization: 'TSA Group (Telstra Partner)',
    location: 'Philippines, AU-Facing',
    period: 'June 2019 – Present',
    bullets: [
      'Drove 3% performance uplift across 400+ agents (PH and AU) in 4 months via structured coaching and performance-governance program.',
      'Cut average ticket resolution time by 7% by standardizing intake-to-closure workflows and SLA tracking across two sites (30+ personnel).',
      'Delivered weekly/monthly operations dashboards tracking KPI, SLA, and compliance metrics for senior leadership.',
      'Standardized SOPs adopted across all AU-PH business units; cut new-hire ramp time by 12%.',
      'Developed 7 team members into senior roles within 12 months through 1:1 coaching and performance review cycles.',
      'Maintained audit-ready compliance documentation with 95% pass rate.',
    ],
  },
  {
    role: 'Team of Experts Lead',
    organization: 'iQor',
    location: 'Philippines',
    period: '2018 – 2019',
    bullets: [
      'Maintained audit-ready case documentation and escalation logs for a 17-person specialist team; 98% data-integrity accuracy.',
      'Resolved customer escalations across service, sales, technical, and retention channels; 90% SLA compliance.',
    ],
  },
  {
    role: 'Customer Service Representative',
    organization: 'Alorica',
    location: 'Philippines',
    period: '2017 – 2018',
    bullets: [
      'Exceeded upselling targets by 145% via bundled service recommendations.',
      'Maintained 90% CSAT scores across billing, technical support, and complaint resolution.',
    ],
  },
];
