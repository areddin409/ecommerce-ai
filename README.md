# 🛍️ AI-Powered E-Commerce Platform

> A next-generation e-commerce platform powered by AI agents, real-time content management, and modern web technologies.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Sanity](https://img.shields.io/badge/Sanity-CMS-f03e2f?style=flat-square&logo=sanity)](https://www.sanity.io/)

---

## ✨ Features

### 🚀 Core Technologies

- **Next.js 16 & React 19** - Built on the latest App Router with Server/Client Components and Server Actions for optimal performance
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS v4** - Modern, utility-first styling with dark mode support
- **Biome** - Lightning-fast linting and formatting

### 🤖 AI-Powered Features

- **AI Shopping Assistant** - Intelligent chatbot with custom tools for product search and order tracking
- **AI Admin Dashboard** - Claude-powered insights, sales trends, and automated recommendations
- **Vercel AI SDK** - Multi-provider LLM support (Claude, GPT, Cohere) with AI Gateway
- **AgentKit Integration** - AI agents with user context awareness through Clerk authentication

### 🎨 Content Management

- **Sanity CMS** - Headless CMS with App SDK for real-time data mutations
- **Embedded Studio** - Content management interface at `/studio`
- **Real-time Updates** - Sanity Live for instant UI updates without polling
- **Type-Safe Queries** - GROQ queries with TypeGen for complete type safety

### 🔐 Authentication & Payments

- **Clerk Authentication** - Secure, scalable user authentication with custom AI agent context
- **Stripe Integration** - Secure checkout with webhook-driven order processing
- **Order Management** - Automatic stock management and user-scoped order visibility

### 🛒 E-Commerce Features

- **Shopping Cart** - Zustand state management with localStorage persistence
- **Product Catalog** - Real-time product data with image optimization
- **Order Tracking** - AI-powered order status and history
- **Inventory Management** - Automatic stock updates via webhooks
- **Mobile-Responsive** - Optimized layouts for all device sizes

### 🎯 Developer Experience

- **shadcn/ui Components** - Beautiful, accessible UI components
- **Server Actions** - Type-safe server mutations
- **Custom AI Tools** - User-scoped agent tools for personalized experiences
- **Webhook System** - Event-driven architecture for reliable order processing

---

## 🏗️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16, React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4, shadcn/ui |
| **CMS** | Sanity CMS with Live API |
| **Authentication** | Clerk |
| **AI** | Vercel AI SDK, AgentKit, Claude/GPT/Cohere |
| **Payments** | Stripe |
| **State Management** | Zustand |
| **Tooling** | Biome, pnpm |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ and pnpm
- A Sanity account and project
- Clerk account for authentication
- Stripe account for payments
- API keys for your preferred LLM provider

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-ai
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file with the following:
   ```env
   # Sanity
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token
   
   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   
   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
   STRIPE_SECRET_KEY=your_secret_key
   STRIPE_WEBHOOK_SECRET=your_webhook_secret
   
   # AI Provider (e.g., Anthropic)
   ANTHROPIC_API_KEY=your_api_key
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Access the application**
   - Main app: [http://localhost:3000](http://localhost:3000)
   - Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

---

## 📁 Project Structure

```
ecommerce-ai/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Homepage
│   └── studio/              # Embedded Sanity Studio
├── sanity/                  # Sanity configuration
│   ├── schemaTypes/         # Content schemas
│   ├── lib/                 # Sanity utilities
│   └── structure.ts         # Studio structure
├── components/              # React components
├── lib/                     # Utilities and helpers
└── public/                  # Static assets
```

---

## 🤖 AI Features

### Shopping Assistant

The AI shopping assistant helps customers:
- Search for products using natural language
- Get personalized recommendations
- Track order status
- Answer product questions

### Admin Dashboard

AI-powered insights for store owners:
- Sales trend analysis
- Inventory recommendations
- Customer behavior insights
- Automated reporting

---

## 🔧 Configuration

### Sanity Studio

Access the embedded Sanity Studio at `/studio` to manage:
- Products and categories
- Orders and customers
- Site content and settings
- Media assets

### Webhooks

Configure webhooks for:
- **Stripe**: Order creation and payment processing
- **Sanity**: Real-time content updates

---

## 🧪 Development

```bash
# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Format code
pnpm format
```

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Environment Variables

Ensure all required environment variables are set in your deployment platform.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [Stripe Documentation](https://stripe.com/docs)

---

## 📝 License

This project is private and proprietary.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

<div align="center">
  <p>Built with ❤️ using Next.js, Sanity, and AI</p>
</div>
