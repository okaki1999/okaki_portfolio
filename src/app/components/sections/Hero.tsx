"use client";

import { useState, useEffect, useMemo } from "react";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = useMemo(() => ["Frontend Developer", "Backend Engineer", "Full Stack Developer"], []);
  const [titleIndex, setTitleIndex] = useState(0);

  // タイピングアニメーション
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    if (currentTitle && currentIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // 完了後、次のタイトルに切り替え
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText("");
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, titleIndex, titles]);

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background/95 to-muted/20">
      {/* 背景エフェクト */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 h-full w-full rotate-12 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 h-full w-full -rotate-12 bg-gradient-to-tr from-secondary/10 via-transparent to-primary/10 blur-3xl" />
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 挨拶 */}
        <div className="mb-8 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
            👋 Welcome to my portfolio
          </span>
        </div>

        {/* メインタイトル */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          <span className="bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
            Hi, I&apos;m Okaki
          </span>
        </h1>

        {/* サブタイトル（タイピングアニメーション） */}
        <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-muted-foreground animate-fade-in-up animation-delay-400">
          <span className="inline-block min-h-[1.2em]">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* 説明文 */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-600">
          Passionate about creating beautiful, functional, and user-centered digital experiences. 
          I bring ideas to life with clean code and innovative design.
        </p>

        {/* CTA ボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-800">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            View My Work
            <svg
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-foreground border-2 border-border rounded-lg font-semibold hover:bg-muted transition-all duration-200 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm mb-2">Scroll down</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}