# T3 Stack ポートフォリオ実装タスク

## 完了済みの基盤
- [x] T3 Stack基本構成（Next.js 15.2.3、TypeScript 5.8.2、tRPC 11.0.0、Prisma 6.5.0）
- [x] Tailwind CSS 4.0.15の基本設定
- [x] 基本的なPostモデルとCRUD API
- [x] SQLiteデータベース設定
- [x] 国際化設定（next-intl 4.3.4、日本語/英語完全対応）
- [x] レスポンシブレイアウトシステム（Header、Footer、Navigation完全実装）
- [x] テーマ切り替え機能（ダーク/ライトモード）
- [x] 言語切り替えコンポーネント（HeadlessUI使用）
- [x] SEO最適化（完全なメタデータ、Open Graph、Twitter Card）

## フェーズ1: 基盤準備 ✅ 100%完了

### 1.1 UIライブラリインストール ✅ 完了

#### 1.1.1 shadcn/ui セットアップ ✅
- [x] `npx shadcn-ui@latest init` でshadcn/ui初期化
- [x] `components.json` 設定確認
- [x] 基本コンポーネント（Button, Card, Input, etc.）インストール
- [x] tailwind.config.js の設定確認

#### 1.1.2 Framer Motion インストール ✅
- [x] `npm install framer-motion` でインストール
- [x] 基本的なアニメーション設定確認
- [x] motion コンポーネントのテスト実装

#### 1.1.3 Recharts インストール ✅
- [x] `npm install recharts` でインストール
- [x] Chart コンポーネントのテスト実装

#### 1.1.4 React Hook Form インストール ✅
- [x] `npm install react-hook-form @hookform/resolvers` でインストール
- [x] Zod との統合確認

#### 1.1.5 その他UIライブラリ ✅
- [x] `npm install @headlessui/react` でHeadless UIインストール
- [x] `npm install lucide-react` でアイコンライブラリインストール
- [x] `npm install clsx class-variance-authority` でユーティリティインストール

### 1.2 データベーススキーマ更新 ✅ 完了

#### 1.2.1 Prisma schema更新 ✅
- [x] `prisma/schema.prisma` のProject モデル追加
- [x] `prisma/schema.prisma` のSkill モデル追加
- [x] `prisma/schema.prisma` のExperience モデル追加
- [x] `prisma/schema.prisma` のContactSubmission モデル追加
- [x] リレーションシップの設定確認

#### 1.2.2 データベースマイグレーション ✅
- [x] `npx prisma migrate dev --name add-portfolio-models` でマイグレーション実行
- [x] `npx prisma generate` でクライアント生成
- [x] データベース構造の確認

#### 1.2.3 サンプルデータ作成 ✅
- [x] `prisma/seed.ts` でシードスクリプト作成
- [x] サンプルプロジェクトデータ作成
- [x] サンプルスキルデータ作成
- [x] サンプル経歴データ作成
- [x] `npm run db:seed` でデータ投入

### 1.3 基本レイアウト構築 ✅ 完了

#### 1.3.1 RootLayout更新 ✅
- [x] `src/app/layout.tsx` のメタデータ更新
- [x] フォント設定の調整
- [x] 国際化対応の準備（next-intl使用）
- [x] ダークモード対応の準備

#### 1.3.2 Header/Footer作成 ✅
- [x] `src/app/_components/layout/Header.tsx` 作成
- [x] `src/app/_components/layout/Footer.tsx` 作成
- [x] `src/app/_components/layout/Navigation.tsx` 作成
- [x] レスポンシブナビゲーション実装

#### 1.3.3 プロバイダー設定 ✅
- [x] `src/app/_components/providers/ThemeProvider.tsx` 作成
- [x] ダークモード切り替え機能実装
- [x] 設定の永続化（localStorage）

## フェーズ2: コアコンポーネント実装 🚧 約25%完了

### 2.1 セクションコンポーネント作成

#### 2.1.1 Hero Section ✅ 完了
- [x] `src/app/components/sections/Hero.tsx` 作成
- [x] タイピングアニメーション実装
- [x] 背景エフェクト実装
- [x] CTA（Call to Action）ボタン実装
- [x] 国際化対応メッセージ統合

#### 2.1.2 About Section ⏳ 未実装
- [ ] `src/app/components/sections/About.tsx` 作成
- [ ] 自己紹介テキスト表示
- [ ] プロフィール画像表示
- [ ] スクロールアニメーション実装

#### 2.1.3 Projects Section
- [ ] `src/app/components/sections/Projects.tsx` 作成
- [ ] `src/app/components/ui/ProjectCard.tsx` 作成
- [ ] プロジェクトグリッドレイアウト実装
- [ ] フィルタリング機能実装
- [ ] モーダル詳細表示実装

#### 2.1.4 Skills Section
- [ ] `src/app/components/sections/Skills.tsx` 作成
- [ ] `src/app/components/ui/SkillChart.tsx` 作成
- [ ] Recharts を使用したスキルレベル表示
- [ ] カテゴリー別スキル分類
- [ ] インタラクティブなチャート実装

#### 2.1.5 Experience Timeline
- [ ] `src/app/components/sections/Experience.tsx` 作成
- [ ] `src/app/components/ui/TimelineItem.tsx` 作成
- [ ] 縦型タイムライン実装
- [ ] 期間計算機能実装
- [ ] アニメーション付きタイムライン表示

#### 2.1.6 Contact Form
- [ ] `src/app/components/sections/Contact.tsx` 作成
- [ ] React Hook Form + Zod バリデーション実装
- [ ] フォーム送信機能実装
- [ ] 成功/エラー表示実装
- [ ] スパム対策（レート制限）実装

### 2.2 tRPC API拡張

#### 2.2.1 Project Router
- [ ] `src/server/api/routers/project.ts` 作成
- [ ] `getAll` プロシージャ実装
- [ ] `getById` プロシージャ実装
- [ ] `getFeatured` プロシージャ実装
- [ ] `create` プロシージャ実装（管理者用）
- [ ] `update` プロシージャ実装（管理者用）
- [ ] `delete` プロシージャ実装（管理者用）

#### 2.2.2 Skill Router
- [ ] `src/server/api/routers/skill.ts` 作成
- [ ] `getAll` プロシージャ実装
- [ ] `getByCategory` プロシージャ実装
- [ ] `create` プロシージャ実装（管理者用）
- [ ] `update` プロシージャ実装（管理者用）
- [ ] `delete` プロシージャ実装（管理者用）

#### 2.2.3 Experience Router
- [ ] `src/server/api/routers/experience.ts` 作成
- [ ] `getAll` プロシージャ実装
- [ ] `getCurrent` プロシージャ実装
- [ ] `create` プロシージャ実装（管理者用）
- [ ] `update` プロシージャ実装（管理者用）
- [ ] `delete` プロシージャ実装（管理者用）

#### 2.2.4 Contact Router
- [ ] `src/server/api/routers/contact.ts` 作成
- [ ] `submit` プロシージャ実装
- [ ] `getAll` プロシージャ実装（管理者用）
- [ ] `markAsRead` プロシージャ実装（管理者用）
- [ ] `delete` プロシージャ実装（管理者用）
- [ ] メール送信機能実装（オプション）

#### 2.2.5 Root Router更新
- [ ] `src/server/api/root.ts` に新しいルーター追加
- [ ] 型定義の更新
- [ ] エラーハンドリングの改善

### 2.3 ホームページ統合

#### 2.3.1 Main Layout統合
- [ ] `src/app/page.tsx` をシングルページアプリに変更
- [ ] 各セクションの統合
- [ ] スクロールナビゲーション実装
- [ ] スムーススクロール実装

#### 2.3.2 レスポンシブデザイン
- [ ] モバイルファーストデザイン実装
- [ ] タブレット対応
- [ ] デスクトップ対応
- [ ] ブレークポイント最適化

## フェーズ3: 高度な機能

### 3.1 多言語対応

#### 3.1.1 next-i18next セットアップ
- [ ] `npm install next-i18next` でインストール
- [ ] `next-i18next.config.js` 設定
- [ ] `public/locales/` ディレクトリ作成
- [ ] 日本語・英語翻訳ファイル作成

#### 3.1.2 言語切り替え機能
- [ ] 言語切り替えボタン実装
- [ ] URL パラメータ対応
- [ ] 言語設定の永続化

#### 3.1.3 コンテンツの翻訳
- [ ] 各セクションの翻訳対応
- [ ] 動的コンテンツの翻訳
- [ ] SEO対応（hreflang等）

### 3.2 認証システム

#### 3.2.1 NextAuth.js セットアップ
- [ ] `npm install next-auth` でインストール
- [ ] `[...nextauth].ts` 設定
- [ ] プロバイダー設定（GitHub、Google等）
- [ ] セッション管理実装

#### 3.2.2 認証保護
- [ ] 管理者用ミドルウェア実装
- [ ] ログイン/ログアウト機能
- [ ] 権限管理システム

### 3.3 管理画面

#### 3.3.1 管理画面レイアウト
- [ ] `src/app/admin/layout.tsx` 作成
- [ ] 管理者用ナビゲーション実装
- [ ] ダッシュボード実装

#### 3.3.2 プロジェクト管理
- [ ] `src/app/admin/projects/page.tsx` 作成
- [ ] プロジェクト一覧表示
- [ ] プロジェクト作成/編集フォーム
- [ ] 画像アップロード機能

#### 3.3.3 スキル管理
- [ ] `src/app/admin/skills/page.tsx` 作成
- [ ] スキル一覧表示
- [ ] スキル作成/編集フォーム
- [ ] カテゴリー管理

#### 3.3.4 経歴管理
- [ ] `src/app/admin/experience/page.tsx` 作成
- [ ] 経歴一覧表示
- [ ] 経歴作成/編集フォーム
- [ ] 並び順変更機能

#### 3.3.5 お問い合わせ管理
- [ ] `src/app/admin/contacts/page.tsx` 作成
- [ ] お問い合わせ一覧表示
- [ ] 詳細表示・返信機能
- [ ] ステータス管理

### 3.4 ブログ機能

#### 3.4.1 ブログデータモデル
- [ ] BlogPost, Category, Tag モデル実装
- [ ] データベースマイグレーション
- [ ] リレーションシップ設定

#### 3.4.2 ブログ表示機能
- [ ] `src/app/blog/page.tsx` 作成
- [ ] `src/app/blog/[slug]/page.tsx` 作成
- [ ] 記事一覧表示
- [ ] 個別記事表示
- [ ] カテゴリー・タグ別表示

#### 3.4.3 MDX対応
- [ ] `npm install @next/mdx` でインストール
- [ ] MDX設定
- [ ] コードシンタックスハイライト
- [ ] 目次生成機能

#### 3.4.4 ブログ管理機能
- [ ] `src/app/admin/blog/page.tsx` 作成
- [ ] 記事作成/編集画面
- [ ] 下書き・公開機能
- [ ] カテゴリー・タグ管理

### 3.5 SEO最適化

#### 3.5.1 メタデータ最適化
- [ ] `generateMetadata` 関数実装
- [ ] Open Graph タグ設定
- [ ] Twitter Card設定
- [ ] 構造化データ実装

#### 3.5.2 サイトマップ・RSS
- [ ] `sitemap.xml` 生成
- [ ] `robots.txt` 設定
- [ ] RSS フィード生成
- [ ] Google Analytics設定

#### 3.5.3 パフォーマンス最適化
- [ ] 画像最適化（next/image）
- [ ] 遅延読み込み実装
- [ ] バンドルサイズ最適化
- [ ] Core Web Vitals 改善

## 実装順序の推奨

1. **フェーズ1を順次実行**（基盤がないと後続作業ができない）
2. **フェーズ2を段階的に実行**（コアコンポーネントから順次）
3. **フェーズ3を必要に応じて実行**（優先度に応じて選択）

## 注意事項

- 各タスクは独立して実行可能なように設計
- 依存関係があるタスクは順序を守る
- 各フェーズ完了後に動作テストを実施
- Git コミットは機能単位で細かく実行
- TypeScript のエラーは必ず解決してから次のタスクに進む