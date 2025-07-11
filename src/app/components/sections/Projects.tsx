"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SPost - Location-based Social Network",
    description: "位置情報を活用したシンプルなソーシャルネットワーキングアプリ。近くの投稿を発見・共有できるモバイルアプリケーション。Firebase認証とPostGISを使用した地理空間データベースを実装。",
    image: "/project-1.jpg",
    technologies: ["Flutter", "NestJS", "Prisma", "PostgreSQL", "PostGIS", "Firebase", "Riverpod"],
    github: "https://github.com/okaki1999/spost_frontend",
    demo: undefined,
    featured: true
  },
  {
    id: 2,
    title: "Rails + Next.js Blog Application",
    description: "RailsをバックエンドAPI、Next.jsをフロントエンドとして構築したフルスタックブログアプリケーション。モダンなWeb開発のベストプラクティスを実装。",
    image: "/project-2.jpg",
    technologies: ["Next.js", "Ruby on Rails", "TypeScript", "PostgreSQL", "REST API"],
    github: "https://github.com/okaki1999/rails_next.js_blog_app",
    demo: undefined,
    featured: true
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "個人ポートフォリオサイト。Next.jsとTypeScriptを使用したモダンなウェブサイト。レスポンシブデザインとVercelでのデプロイメントを実装。",
    image: "/project-3.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/okaki1999/s_portfolio",
    demo: "https://corottobunny.vercel.app",
    featured: false
  },
  {
    id: 4,
    title: "NestJS + Next.js CRUD Application",
    description: "NestJSとNext.jsを組み合わせたフルスタックCRUDアプリケーション。TypeScriptでの型安全性とモダンなアーキテクチャを実現。",
    image: "/project-4.jpg",
    technologies: ["NestJS", "Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/okaki1999/nest_next_crud",
    demo: undefined,
    featured: false
  },
  {
    id: 5,
    title: "Laravel Backend Projects",
    description: "PHPのLaravelフレームワークを使用したバックエンドAPI開発プロジェクト群。RESTful APIの設計と実装に焦点を当てた学習プロジェクト。",
    image: "/project-5.jpg",
    technologies: ["Laravel", "PHP", "MySQL", "REST API"],
    github: "https://github.com/okaki1999",
    demo: undefined,
    featured: false
  },
  {
    id: 6,
    title: "Swift iOS Development",
    description: "Swiftを使用したiOSアプリケーション開発プロジェクト。ネイティブモバイル開発のスキル習得を目的とした実装。",
    image: "/project-6.jpg",
    technologies: ["Swift", "iOS", "Xcode", "UIKit"],
    github: "https://github.com/okaki1999",
    demo: undefined,
    featured: false
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on recently. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-background border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">Project Preview</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/okaki1999"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}