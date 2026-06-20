export interface Project {
  title: string;
  type: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  imageFile: string; // filename under public/assets/images/
  featured: boolean;
  comingSoon?: boolean; // true when repo/demo links are not yet public
}

export const projects: Project[] = [
  {
    title: 'MotorPH Payroll System',
    type: 'Java Swing Desktop Application',
    description:
      'Role-based payroll management system built as a BSIT capstone. Implements employee, HR, and payroll-admin roles with distinct permission sets. Migrated from SQLite to MySQL for production-grade data persistence.',
    tags: ['Java', 'Java Swing', 'MySQL', 'Apache NetBeans', 'RBAC'],
    repoUrl: 'https://github.com/03RM06/motorph-payroll-system-1',
    imageFile: 'motorph-preview.png',
    featured: true,
    comingSoon: false,
  },
  {
    title: 'Excel Workforce Metrics Dashboard',
    type: 'Excel / Data Dashboard',
    description:
      'Multi-sheet Excel dashboard with slicer-driven views for workforce operations metrics. Development required Python and XML-level intervention to preserve native Excel slicer compatibility across data sources.',
    tags: ['Excel', 'Data Visualization', 'Python', 'XML', 'Slicers'],
    imageFile: 'excel-dashboard-preview.png',
    featured: true,
    comingSoon: true,
  },
  {
    title: 'Villa Lettina Resort Website & Booking System',
    type: 'Web + Automation',
    description:
      'Promotional website for a private resort. Accompanied by a Google Apps Script booking management system handling inquiry routing, availability logging, and automated responses.',
    tags: ['HTML/CSS', 'JavaScript', 'Google Apps Script', 'Google Sheets'],
    imageFile: 'villa-lettina-preview.png',
    featured: true,
    comingSoon: true,
  },
];
