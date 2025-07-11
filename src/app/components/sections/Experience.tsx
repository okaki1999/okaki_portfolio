"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Full Stack Developer",
    company: "Individual Projects & Learning",
    location: "Japan",
    period: "2022 - Present",
    current: true,
    description: "個人プロジェクトを通じてモダンなWeb・モバイル開発技術を習得。位置情報を活用したSNSアプリやフルスタックWebアプリケーションの開発に取り組み、実践的なスキルを身につけている。",
    achievements: [
      "Flutter & NestJSを使用した位置情報SNSアプリ「SPost」を開発",
      "Rails + Next.jsによるフルスタックブログアプリケーションを構築", 
      "31個のGitHubリポジトリで多様な技術スタックを実装"
    ],
    technologies: ["Next.js", "NestJS", "Flutter", "Rails", "TypeScript", "PostgreSQL", "Firebase"]
  },
  {
    id: 2,
    type: "work",
    title: "Web Development Student",
    company: "Self-directed Learning",
    location: "Japan",
    period: "2020 - 2022",
    current: false,
    description: "プログラミング学習を開始し、Web開発の基礎から応用まで幅広く学習。複数のプログラミング言語とフレームワークを習得し、実践的なプロジェクトに取り組んだ。",
    achievements: [
      "TypeScript・JavaScript・Ruby・PHP・Swiftなど多言語を習得",
      "Laravel・Rails・NestJSなど複数のバックエンドフレームワークを学習",
      "モバイル開発（Flutter・Swift）からWeb開発まで幅広く経験"
    ],
    technologies: ["JavaScript", "TypeScript", "Ruby", "PHP", "Swift", "Laravel", "React"]
  }
];

const education = [
  {
    id: 1,
    degree: "Programming & Web Development",
    school: "Self-taught Developer",
    period: "2020 - Present",
    description: "独学でプログラミングを学習し、Web・モバイル開発のスキルを習得。実践的なプロジェクトを通じて技術力を向上させている。",
    achievements: [
      "31個のGitHubリポジトリで実践的な開発経験を積む",
      "複数のプログラミング言語・フレームワークを習得",
      "フルスタック開発からモバイル開発まで幅広くカバー"
    ]
  }
];

const certifications = [
  { name: "GitHub Portfolio", year: "2024" },
  { name: "Full Stack Development", year: "2023" },
  { name: "Mobile App Development", year: "2023" }
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that shaped my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Building className="w-6 h-6 text-primary" />
                Work Experience
              </h3>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-background border rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  {exp.current && (
                    <div className="absolute -top-2 -right-2 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                      Current
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-lg font-medium">{exp.company}</p>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:text-right">
                      <p className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </p>
                      <p className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              
              {education.map((edu) => (
                <div key={edu.id} className="bg-background border rounded-xl p-6">
                  <h4 className="font-semibold text-primary mb-1">{edu.degree}</h4>
                  <p className="font-medium mb-2">{edu.school}</p>
                  <p className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {edu.description}
                  </p>
                  <div>
                    <h5 className="font-medium text-sm mb-2">Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certifications
              </h3>
              
              <div className="bg-background border rounded-xl p-6">
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-muted last:border-b-0">
                      <span className="font-medium text-sm">{cert.name}</span>
                      <span className="text-xs text-muted-foreground">{cert.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
                <h3 className="font-semibold mb-3">Career Highlights</h3>
                <div className="space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span>Years of Experience:</span>
                    <span className="font-medium">4+</span>
                  </p>
                  <p className="flex justify-between">
                    <span>GitHub Repositories:</span>
                    <span className="font-medium">31</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Technologies Used:</span>
                    <span className="font-medium">15+</span>
                  </p>
                  <p className="flex justify-between">
                    <span>GitHub Achievements:</span>
                    <span className="font-medium">3</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}