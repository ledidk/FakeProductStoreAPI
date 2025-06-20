import { Book, Category } from '../types';

export const sampleCategories: Category[] = [
  {
    id: 'cat1',
    name: 'Business Analytics',
    description: 'Books focused on business intelligence and analytics',
    color: '#2563eb',
  },
  {
    id: 'cat2',
    name: 'Python Programming',
    description: 'Python development and programming guides',
    color: '#059669',
  },
  {
    id: 'cat3',
    name: 'Data Science',
    description: 'Data analysis and machine learning resources',
    color: '#dc2626',
  },
  {
    id: 'cat4',
    name: 'Mathematics',
    description: 'Mathematical concepts and applications',
    color: '#7c3aed',
  },
  {
    id: 'cat5',
    name: 'Machine Learning',
    description: 'AI and machine learning methodologies',
    color: '#ea580c',
  },
];

export const sampleBooks: Book[] = [
  {
    id: '1',
    title: 'Advanced Business Analytics',
    author: 'Sarah Johnson',
    publishingDate: '2024-01-15',
    categoryId: 'cat1',
    distributionExpense: 1250.00,
    isbn: '978-0-123456-78-9',
    description: 'Comprehensive guide to modern business analytics techniques',
  },
  {
    id: '2',
    title: 'Python for Data Analysis',
    author: 'Michael Chen',
    publishingDate: '2024-02-20',
    categoryId: 'cat2',
    distributionExpense: 890.50,
    isbn: '978-1-234567-89-0',
    description: 'Learn data analysis using Python and pandas',
  },
  {
    id: '3',
    title: 'Machine Learning Fundamentals',
    author: 'Dr. Emily Rodriguez',
    publishingDate: '2024-03-10',
    categoryId: 'cat5',
    distributionExpense: 1450.75,
    isbn: '978-2-345678-90-1',
    description: 'Introduction to machine learning concepts and algorithms',
  },
  {
    id: '4',
    title: 'Statistical Methods in Business',
    author: 'Robert Williams',
    publishingDate: '2024-01-28',
    categoryId: 'cat4',
    distributionExpense: 675.25,
    isbn: '978-3-456789-01-2',
    description: 'Statistical approaches for business decision making',
  },
  {
    id: '5',
    title: 'Deep Learning with Python',
    author: 'Anna Thompson',
    publishingDate: '2024-02-14',
    categoryId: 'cat2',
    distributionExpense: 1120.00,
    isbn: '978-4-567890-12-3',
    description: 'Advanced deep learning techniques using Python',
  },
  {
    id: '6',
    title: 'Data Visualization Mastery',
    author: 'James Park',
    publishingDate: '2024-03-22',
    categoryId: 'cat3',
    distributionExpense: 945.80,
    isbn: '978-5-678901-23-4',
    description: 'Creating compelling data visualizations',
  },
  {
    id: '7',
    title: 'Business Intelligence Strategy',
    author: 'Lisa Anderson',
    publishingDate: '2024-01-05',
    categoryId: 'cat1',
    distributionExpense: 1350.00,
    isbn: '978-6-789012-34-5',
    description: 'Strategic approaches to business intelligence implementation',
  },
  {
    id: '8',
    title: 'Applied Mathematics for Engineers',
    author: 'Dr. David Kim',
    publishingDate: '2024-02-08',
    categoryId: 'cat4',
    distributionExpense: 825.60,
    isbn: '978-7-890123-45-6',
    description: 'Mathematical applications in engineering contexts',
  },
  {
    id: '9',
    title: 'Neural Networks Explained',
    author: 'Sophie Martin',
    publishingDate: '2024-03-15',
    categoryId: 'cat5',
    distributionExpense: 1275.40,
    isbn: '978-8-901234-56-7',
    description: 'Understanding neural network architectures and applications',
  },
  {
    id: '10',
    title: 'Big Data Analytics',
    author: 'Carlos Rivera',
    publishingDate: '2024-01-12',
    categoryId: 'cat3',
    distributionExpense: 1180.90,
    isbn: '978-9-012345-67-8',
    description: 'Handling and analyzing large-scale datasets',
  },
];