# Muhammad Ibtesam Portfolio Website

## Overview

This is a comprehensive portfolio website for Muhammad Ibtesam, a Computer Science student showcasing his skills, projects, education, and professional experience. The application is built as a full-stack solution with a React-based frontend using shadcn/ui components and a Node.js/Express backend with database integration capabilities. The portfolio features responsive design, interactive navigation, and comprehensive sections covering about, education, skills, projects, experience, achievements, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript, utilizing modern React patterns including hooks and context providers. The application uses Vite as the build tool and development server, providing fast hot module replacement and optimized production builds. Routing is handled by Wouter, a lightweight React routing library. The UI is styled using Tailwind CSS with shadcn/ui components for consistent design patterns, implementing a dark theme with custom color variables and responsive design.

### Component Structure
The application follows a modular component architecture with reusable UI components organized in separate directories. Components are structured as functional components using React hooks for state management and side effects. The main application flow is managed through a central App component that provides query client context and routing configuration.

### State Management
The application uses TanStack React Query (formerly React Query) for server state management, providing caching, synchronization, and error handling for API requests. Local state is managed using React hooks (useState, useEffect) and context providers for global state sharing. Custom hooks are implemented for responsive design detection and toast notifications.

### Styling and Design System
Tailwind CSS is used as the primary styling solution with a custom configuration extending the default theme. The design system implements CSS custom properties for theming, allowing for consistent color schemes and spacing. shadcn/ui components provide pre-built, accessible UI primitives that are customized to match the design requirements.

### Backend Architecture
The backend is built using Express.js with TypeScript, providing a RESTful API structure. The server implements middleware for JSON parsing, URL encoding, and request logging with performance monitoring. Error handling is centralized through Express error middleware, providing consistent error responses.

### Database Integration
The application is configured to use Drizzle ORM with PostgreSQL as the database solution. Database schemas are defined using Drizzle's schema definition syntax with proper TypeScript typing. The configuration supports both development and production environments with connection management through environment variables.

### Development Tooling
The project includes comprehensive development tooling with TypeScript for type safety, ESLint for code quality, and Prettier for code formatting. Vite provides the development server with hot module replacement and optimized build processes. The configuration includes path aliases for clean imports and proper module resolution.

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18+ with TypeScript support for component-based UI development
- **Vite**: Modern build tool providing fast development server and optimized production builds
- **TanStack React Query**: Server state management library for API data fetching and caching
- **Wouter**: Lightweight routing library for single-page application navigation
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: Component library built on Radix UI primitives providing accessible UI components
- **Radix UI**: Unstyled, accessible component primitives for complex UI components
- **Lucide React**: Icon library providing consistent iconography throughout the application

### Backend Dependencies  
- **Express.js**: Web application framework for Node.js providing HTTP server capabilities
- **Drizzle ORM**: TypeScript-first ORM for database operations with type safety
- **Drizzle Kit**: CLI companion for database migrations and schema management
- **Neon Database**: Serverless PostgreSQL database service for cloud-native applications

### Development Dependencies
- **TypeScript**: Static type checking for enhanced developer experience and code reliability
- **Vite Plugins**: Additional plugins for React support and development enhancements
- **PostCSS**: CSS post-processing tool for Tailwind CSS compilation
- **Various Type Definitions**: Comprehensive type definitions for all third-party libraries

### Database Configuration
- **PostgreSQL**: Primary database solution accessed through Neon's serverless platform
- **Connection Management**: Environment variable-based database URL configuration
- **Migration System**: Drizzle Kit handles database schema migrations and updates
- **Type Safety**: Full TypeScript integration for database queries and schema definitions