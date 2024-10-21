# Next.js Project

This is a **Next.js v14.2.15** application that demonstrates a simple Next.js web application that fetches and
visualizes website visit data and customer data from a CRM. The project is built with modern web development practices, leveraging **React**, **Tailwind CSS**, and **React Query** for state management.

## Features
- **Next.js**: Server-side rendering, API routes, and routing.
- **React Query**: For data fetching and caching.
- **Tailwind CSS**: For utility-first CSS styling.

## Prerequisites

Before you can run the project, ensure that you have the following installed:

- **Node.js** (v18.x or higher)
- **npm** (v9.x or higher) or **yarn** (optional)

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
npm install
## NEXTAUTH Configuration in .env.local file
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret

## GitHub OAuth Configuration (for GitHub login)
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret

## Google OAuth Configuration (for Google login)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret