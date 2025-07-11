# 構成

## T3 Stack ポートフォリオサイト構成

### 技術スタック

#### T3 Stack Core
- **Next.js 14**: App Router使用、React Server Components
- **TypeScript**: 型安全性とコード品質向上
- **tRPC**: End-to-end型安全なAPI
- **Prisma**: 型安全なORM、データベース管理
- **NextAuth.js**: 認証システム（管理者用）

#### データベース
- **PostgreSQL**: メインデータベース
- **Prisma Studio**: データベースUI管理

#### フロントエンド
- **React 18**: UIコンポーネント
- **Tailwind CSS**: ユーティリティファーストスタイリング
- **shadcn/ui**: アクセシブルなUIコンポーネント
- **Framer Motion**: アニメーション（AOS代替）
- **Recharts**: スキルチャート表示（Chart.js代替）
- **React Hook Form**: フォーム管理
- **Zod**: バリデーション

#### 開発・品質管理
- **ESLint**: コード品質チェック
- **Prettier**: コードフォーマット
- **Husky**: Git hooks
- **lint-staged**: 段階的リント

#### 国際化
- **next-i18next**: 多言語対応

#### インフラ・デプロイ
- **Vercel**: ホスティング（推奨）
- **Railway/PlanetScale**: データベースホスティング
- **Vercel Analytics**: アクセス解析

### サイト構成

#### アーキテクチャ
- **App Router**: Next.js 14の最新ルーティング
- **Server Components**: サーバーサイドレンダリング最適化
- **API Routes**: tRPCによる型安全なAPI
- **Static Generation**: 静的生成によるパフォーマンス向上

#### データモデル (Prisma Schema)
```prisma
model Project {
  id          String   @id @default(cuid())
  title       String
  description String
  imageUrl    String?
  techStack   String[]
  githubUrl   String?
  demoUrl     String?
  featured    Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Skill {
  id          String   @id @default(cuid())
  name        String
  category    String
  level       Int      @db.SmallInt
  description String?
  icon        String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Experience {
  id          String   @id @default(cuid())
  title       String
  company     String
  description String
  startDate   DateTime
  endDate     DateTime?
  current     Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model ContactSubmission {
  id        String   @id @default(cuid())
  name      String
  email     String
  message   String
  createdAt DateTime @default(now())
}
```

#### 主要セクション・コンポーネント
1. **Hero Section** (`/app/components/Hero.tsx`)
2. **About Section** (`/app/components/About.tsx`)
3. **Projects Section** (`/app/components/Projects.tsx`)
4. **Skills Section** (`/app/components/Skills.tsx`)
5. **Experience Timeline** (`/app/components/Experience.tsx`)
6. **Contact Form** (`/app/components/Contact.tsx`)

### インタラクティブ要素

#### ナビゲーション
- **Headless UI**: アクセシブルなドロップダウン
- **Framer Motion**: スムーススクロール
- **next-i18next**: 言語切り替え（日本語/英語）
- **React Hook**: モバイルメニューの状態管理

#### アニメーション・動的要素
- **Framer Motion**: ページ遷移・スクロール連動
- **Recharts**: インタラクティブスキルチャート
- **shadcn/ui**: ホバー・フォーカス状態
- **Tailwind CSS**: レスポンシブユーティリティ

#### フォーム・インタラクション
- **React Hook Form**: 型安全なフォーム管理
- **Zod**: リアルタイムバリデーション
- **tRPC**: サーバーサイドでの型安全な処理
- **Toast通知**: ユーザーフィードバック

### デザインシステム
- **Tailwind CSS**: 一貫したスタイリング
- **shadcn/ui**: アクセシブルなコンポーネント
- **ダークモード**: システム設定対応
- **レスポンシブデザイン**: モバイルファースト

## T3 Stack ページレイアウト構成

### App Router ファイル構成
```
/app
├── layout.tsx                 # ルートレイアウト
├── page.tsx                   # ホームページ
├── globals.css                # グローバルスタイル
├── components/
│   ├── ui/                    # shadcn/ui コンポーネント
│   ├── layout/
│   │   ├── Header.tsx         # ヘッダーコンポーネント
│   │   ├── Footer.tsx         # フッターコンポーネント
│   │   └── Navigation.tsx     # ナビゲーション
│   ├── sections/
│   │   ├── Hero.tsx           # ヒーローセクション
│   │   ├── About.tsx          # 自己紹介セクション
│   │   ├── Projects.tsx       # プロジェクト一覧
│   │   ├── Skills.tsx         # スキル表示
│   │   ├── Experience.tsx     # 経歴タイムライン
│   │   └── Contact.tsx        # お問い合わせフォーム
│   └── providers/
│       ├── ThemeProvider.tsx  # ダークモード
│       └── I18nProvider.tsx   # 国際化
├── admin/
│   ├── layout.tsx             # 管理画面レイアウト
│   ├── page.tsx               # ダッシュボード
│   ├── projects/
│   │   ├── page.tsx           # プロジェクト管理
│   │   └── [id]/
│   │       └── page.tsx       # プロジェクト編集
│   └── skills/
│       └── page.tsx           # スキル管理
└── api/
    └── trpc/
        └── [trpc]/
            └── route.ts       # tRPC エンドポイント
```

### レイアウト要素

#### ヘッダー・ナビゲーション
- **Sticky Header**: `position: sticky` Tailwind CSS
- **Headless UI Menu**: アクセシブルドロップダウン
- **Language Switcher**: next-i18next integration
- **Mobile Navigation**: ハンバーガーメニュー（Framer Motion）

#### メインコンテンツエリア
1. **Hero Section**: `motion.div` アニメーション
2. **About Section**: `IntersectionObserver` スクロール検出
3. **Projects Grid**: `CSS Grid` + `Framer Motion` stagger
4. **Skills Chart**: `Recharts` インタラクティブチャート
5. **Experience Timeline**: `Framer Motion` progressive reveal
6. **Contact Form**: `React Hook Form` + `Zod` validation

#### フッター
- ソーシャルリンク（GitHub、LinkedIn）
- 著作権情報
- `next-i18next` 多言語対応

### 状態管理・データフェッチ
- **tRPC**: サーバー状態管理
- **React Query**: キャッシュ・同期
- **Zustand**: クライアント状態（必要に応じて）
- **React Hook Form**: フォーム状態

## T3 Stack ブログ機能構成

### データモデル拡張
```prisma
model BlogPost {
  id          String      @id @default(cuid())
  title       String
  slug        String      @unique
  content     String      @db.Text
  excerpt     String?
  published   Boolean     @default(false)
  publishedAt DateTime?
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
  author      User        @relation(fields: [authorId], references: [id])
  authorId    String
  categories  Category[]  @relation("BlogPostCategories")
  tags        Tag[]       @relation("BlogPostTags")
  
  @@index([publishedAt])
  @@index([slug])
}

model Category {
  id          String      @id @default(cuid())
  name        String      @unique
  slug        String      @unique
  description String?
  posts       BlogPost[]  @relation("BlogPostCategories")
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
}

model Tag {
  id          String      @id @default(cuid())
  name        String      @unique
  posts       BlogPost[]  @relation("BlogPostTags")
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
}

model User {
  id        String     @id @default(cuid())
  email     String     @unique
  name      String?
  posts     BlogPost[]
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
}
```

### ブログ機能構成
```
/app/blog/
├── page.tsx                   # ブログ一覧
├── [slug]/
│   └── page.tsx               # 個別記事
├── category/
│   └── [slug]/
│       └── page.tsx           # カテゴリー別記事
├── tag/
│   └── [slug]/
│       └── page.tsx           # タグ別記事
└── components/
    ├── PostCard.tsx           # 記事カード
    ├── PostContent.tsx        # 記事本文
    ├── PostNavigation.tsx     # 前後記事ナビ
    ├── CategoryFilter.tsx     # カテゴリーフィルター
    ├── TagCloud.tsx           # タグクラウド
    └── SearchBox.tsx          # 検索機能
```

### 主要機能
- **MDX**: Markdown with JSX コンポーネント
- **Syntax Highlighting**: `react-syntax-highlighter`
- **SEO**: `next-seo` メタデータ最適化
- **RSS**: 自動RSS生成
- **Comments**: 将来的にコメント機能追加可能
- **Analytics**: Vercel Analytics統合

### 管理機能
- **Rich Text Editor**: `@uiw/react-md-editor`
- **Image Upload**: Vercel Blob Storage
- **Draft/Publish**: 下書き・公開状態管理
- **Category Management**: カテゴリー・タグ管理
- **SEO Preview**: メタデータプレビュー

### パフォーマンス最適化
- **ISR**: Incremental Static Regeneration
- **Image Optimization**: `next/image`
- **Code Splitting**: 動的インポート
- **Caching**: tRPC + React Query

## 現在の実装状況と不足している部分

### 現在実装済み（T3スタック基本構成）
✅ **基本技術スタック**
- Next.js 15.2.3 (App Router)
- TypeScript 5.8.2
- tRPC 11.0.0
- Prisma 6.5.0
- Tailwind CSS 4.0.15
- React Query (@tanstack/react-query 5.69.0)

✅ **基本ファイル構成**
- `/src/app/` App Router構成
- `/src/server/api/` tRPC API構成
- `/src/trpc/` tRPC設定
- `/prisma/` Prisma設定（SQLite）

✅ **基本機能**
- tRPC Hello API
- Post CRUD操作
- 基本的なReactコンポーネント

### 不足している部分（ポートフォリオ化に必要）

❌ **UI/UXライブラリ**
- shadcn/ui
- Framer Motion
- Recharts
- Headless UI

❌ **ポートフォリオ用データモデル**
- Project モデル
- Skill モデル
- Experience モデル
- ContactSubmission モデル

❌ **ポートフォリオコンポーネント**
- Hero Section
- About Section
- Projects Section
- Skills Section
- Experience Timeline
- Contact Form

❌ **追加機能**
- 多言語対応 (next-i18next)
- 認証システム (NextAuth.js)
- 管理画面
- ブログ機能
- SEO最適化

❌ **スタイリング**
- カスタムTailwind設定
- ダークモード対応
- レスポンシブデザイン実装

## 次の実装ステップ

### フェーズ1: 基盤準備
1. **UIライブラリのインストール**
   - shadcn/ui setup
   - Framer Motion
   - Recharts
   - React Hook Form

2. **データベーススキーマ更新**
   - Prisma schema更新
   - マイグレーション実行

3. **基本レイアウト構築**
   - RootLayout更新
   - Header/Footer作成

### フェーズ2: コアコンポーネント実装
1. **セクションコンポーネント作成**
   - Hero Section
   - About Section
   - Projects Section
   - Skills Section

2. **tRPC API拡張**
   - Project router
   - Skill router
   - Experience router
   - Contact router

### フェーズ3: 高度な機能
1. **多言語対応**
2. **管理画面**
3. **ブログ機能**
4. **SEO最適化**