import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.contactSubmission.deleteMany({})
  await prisma.experience.deleteMany({})
  await prisma.skill.deleteMany({})
  await prisma.project.deleteMany({})
  await prisma.post.deleteMany({})

  // Create sample projects
  await prisma.project.createMany({
    data: [
      {
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with payment integration',
        content: 'A comprehensive e-commerce platform built with Next.js, TypeScript, and Prisma. Features include product catalog, shopping cart, payment processing with Stripe, and admin dashboard.',
        image: '/images/ecommerce.jpg',
        demoUrl: 'https://demo.example.com',
        githubUrl: 'https://github.com/example/ecommerce',
        technologies: JSON.stringify(['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Tailwind CSS']),
        featured: true,
      },
      {
        title: 'Task Management App',
        description: 'Collaborative task management tool with real-time updates',
        content: 'A modern task management application with real-time collaboration features. Built with React, Node.js, and Socket.io for instant updates.',
        image: '/images/taskapp.jpg',
        demoUrl: 'https://tasks.example.com',
        githubUrl: 'https://github.com/example/tasks',
        technologies: JSON.stringify(['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']),
        featured: true,
      },
      {
        title: 'Weather Dashboard',
        description: 'Beautiful weather dashboard with forecasts and maps',
        content: 'An interactive weather dashboard displaying current conditions, forecasts, and weather maps. Integrates with multiple weather APIs.',
        image: '/images/weather.jpg',
        demoUrl: 'https://weather.example.com',
        githubUrl: 'https://github.com/example/weather',
        technologies: JSON.stringify(['Vue.js', 'D3.js', 'OpenWeather API', 'Chart.js']),
        featured: false,
      },
    ],
  })

  // Create sample skills
  await prisma.skill.createMany({
    data: [
      {
        name: 'JavaScript',
        category: 'Frontend',
        level: 90,
        icon: 'javascript',
        description: 'Expert in modern JavaScript (ES6+), TypeScript, and framework development',
      },
      {
        name: 'React',
        category: 'Frontend',
        level: 85,
        icon: 'react',
        description: 'Proficient in React ecosystem including hooks, context, and state management',
      },
      {
        name: 'Next.js',
        category: 'Frontend',
        level: 80,
        icon: 'nextjs',
        description: 'Experienced in building full-stack applications with Next.js',
      },
      {
        name: 'Node.js',
        category: 'Backend',
        level: 75,
        icon: 'nodejs',
        description: 'Server-side JavaScript development with Express and various frameworks',
      },
      {
        name: 'PostgreSQL',
        category: 'Database',
        level: 70,
        icon: 'postgresql',
        description: 'Database design, optimization, and complex query writing',
      },
      {
        name: 'Docker',
        category: 'DevOps',
        level: 65,
        icon: 'docker',
        description: 'Containerization and deployment with Docker and Docker Compose',
      },
    ],
  })

  // Create sample experience
  await prisma.experience.createMany({
    data: [
      {
        company: 'Tech Startup Inc.',
        position: 'Senior Full-Stack Developer',
        description: 'Led development of scalable web applications using React and Node.js. Mentored junior developers and established best practices for the team.',
        startDate: new Date('2022-01-01'),
        endDate: null,
        current: true,
        location: 'Tokyo, Japan',
        skills: JSON.stringify(['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS']),
      },
      {
        company: 'Digital Agency Ltd.',
        position: 'Frontend Developer',
        description: 'Developed responsive web applications for various clients using modern frontend technologies. Collaborated with designers to create pixel-perfect implementations.',
        startDate: new Date('2020-06-01'),
        endDate: new Date('2021-12-31'),
        current: false,
        location: 'Remote',
        skills: JSON.stringify(['React', 'Vue.js', 'SCSS', 'JavaScript', 'Figma']),
      },
      {
        company: 'Software Solutions Co.',
        position: 'Junior Developer',
        description: 'Started career as a junior developer, learning full-stack development and contributing to various projects.',
        startDate: new Date('2019-04-01'),
        endDate: new Date('2020-05-31'),
        current: false,
        location: 'Osaka, Japan',
        skills: JSON.stringify(['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']),
      },
    ],
  })

  // Create sample posts
  await prisma.post.createMany({
    data: [
      { name: 'Getting Started with Next.js' },
      { name: 'TypeScript Best Practices' },
      { name: 'Building Scalable React Applications' },
    ],
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })