"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", level: 90, experience: "2+ years" },
      { name: "React", level: 85, experience: "2+ years" },
      { name: "TypeScript", level: 85, experience: "2+ years" },
      { name: "Flutter", level: 80, experience: "1+ year" },
      { name: "Tailwind CSS", level: 80, experience: "2+ years" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "NestJS", level: 85, experience: "1+ year" },
      { name: "Ruby on Rails", level: 80, experience: "2+ years" },
      { name: "Laravel", level: 75, experience: "1+ year" },
      { name: "Prisma", level: 80, experience: "1+ year" },
      { name: "PostgreSQL", level: 75, experience: "2+ years" }
    ]
  },
  {
    title: "Mobile & Native",
    skills: [
      { name: "Swift", level: 70, experience: "1+ year" },
      { name: "iOS Development", level: 65, experience: "1+ year" },
      { name: "Dart", level: 75, experience: "1+ year" },
      { name: "Flutter", level: 80, experience: "1+ year" },
      { name: "Riverpod", level: 70, experience: "1+ year" }
    ]
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "TypeScript", level: 85, experience: "2+ years" },
      { name: "JavaScript", level: 80, experience: "3+ years" },
      { name: "Ruby", level: 75, experience: "2+ years" },
      { name: "PHP", level: 70, experience: "1+ year" },
      { name: "Git", level: 85, experience: "3+ years" }
    ]
  }
];

const chartData = [
  { name: "Next.js", level: 90 },
  { name: "NestJS", level: 85 },
  { name: "TypeScript", level: 85 },
  { name: "Rails", level: 80 },
  { name: "Flutter", level: 80 },
  { name: "Prisma", level: 80 }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here&apos;s an overview of the technologies I work with and my proficiency level in each.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="bg-background rounded-xl p-6 border">
                <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">
                            {skill.experience}
                          </span>
                          <span className="text-sm font-medium">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-background rounded-xl p-6 border"
          >
            <h3 className="text-xl font-semibold mb-6">Skill Overview</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="name" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    className="text-xs"
                  />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                    formatter={(value: number) => [`${value}%`, 'Proficiency']}
                  />
                  <Bar 
                    dataKey="level" 
                    className="fill-primary"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Learning Philosophy</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                My skill levels reflect practical experience and the ability to deliver production-ready solutions.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-background rounded-xl p-8 border text-center">
            <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["PostGIS", "Supabase", "Firebase", "Vercel", "Railway"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground mt-4">
              Always exploring new technologies to expand my skill set and stay ahead of industry trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}