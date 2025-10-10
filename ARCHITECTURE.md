# Project Architecture: Chatbot UI

This document outlines the architecture of the Chatbot UI project, a Next.js application designed for interacting with various Large Language Models (LLMs) and providing a rich, customizable chat experience. The project leverages Supabase for its backend services, including database, authentication, and storage.

## 1. Core Technologies

*   **Frontend Framework**: Next.js (React)
*   **Backend Services**: Supabase (PostgreSQL Database, Authentication, Storage)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS, Radix UI
*   **LLM Integrations**: OpenAI, Anthropic, Google Generative AI, Mistral AI, Azure OpenAI
*   **Internationalization**: `i18next`, `next-i18n-router`
*   **Local Embeddings/NLP**: `@xenova/transformers`
*   **LLM Orchestration**: `langchain`
*   **Testing**: Jest, Playwright

## 2. Project Structure Overview

The project follows a modular structure, organizing code by feature and responsibility.

*   **`app/`**: Contains Next.js App Router pages and API routes.
    *   **`app/[locale]/`**: Frontend pages with internationalization support. Includes `layout.tsx`, `page.tsx`, `loading.tsx` for core UI, and subdirectories for specific routes like `[workspaceid]`, `help`, `login`, `setup`.
    *   **`app/api/`**: Next.js API routes for backend logic and LLM interactions.
        *   `assistants/`: API endpoints for managing AI assistants.
        *   `chat/`: Core chat API for processing messages and interacting with LLMs.
        *   `command/`: API for handling specific commands within the chat.
        *   `keys/`: API for managing user API keys for various services.
        *   `retrieval/`: API for retrieval-augmented generation (RAG) functionalities.
        *   `username/`: API for user username management.
*   **`components/`**: Reusable React components.
    *   **`chat/`**: Components specific to the chat interface (e.g., `chat-input.tsx`, `chat-messages.tsx`, `assistant-picker.tsx`, `tool-picker.tsx`).
    *   **`icons/`**: SVG icon components.
    *   **`messages/`**: Components for rendering chat messages, including markdown and code blocks.
    *   **`models/`**: Components for selecting and displaying LLM models.
    *   **`setup/`**: Components for the initial application setup wizard.
    *   **`sidebar/`**: Components for the application's navigation sidebar.
    *   **`ui/`**: Generic, reusable UI components (e.g., `button.tsx`, `dialog.tsx`, `form.tsx`) built using Radix UI primitives and styled with Tailwind CSS.
*   **`context/`**: React Context for global state management (`context.tsx`).
*   **`db/`**: TypeScript modules for interacting with the Supabase database. Each file typically corresponds to a specific database table or entity (e.g., `chats.ts`, `messages.ts`, `assistants.ts`, `files.ts`, `workspaces.ts`).
*   **`lib/`**: Utility functions, helper modules, and core logic.
    *   `build-prompt.ts`: Logic for constructing prompts for LLMs.
    *   `chat-setting-limits.ts`: Configuration for chat-related settings and limits.
    *   `consume-stream.ts`: Utility for processing streaming API responses (e.g., from LLMs).
    *   `envs.ts`: Environment variable management.
    *   `generate-local-embedding.ts`: Functionality for generating text embeddings locally using `@xenova/transformers`.
    *   `i18n.ts`: Internationalization utilities.
    *   `openapi-conversion.ts`: Tools for converting OpenAPI specifications.
    *   `utils.ts`: General utility functions.
    *   **`hooks/`**: Custom React hooks.
    *   **`models/`**: Logic related to different LLM providers and their configurations.
    *   **`retrieval/`**: Logic for retrieval mechanisms.
    *   **`server/`**: Server-side specific utilities.
    *   **`supabase/`**: Supabase client initialization and helper functions.
*   **`public/`**: Static assets (images, manifest, web worker scripts).
*   **`supabase/`**: Supabase project configuration, database migrations (`migrations/`), and generated TypeScript types (`types.ts`).
*   **`types/`**: TypeScript type definitions for various data structures and API responses used throughout the application.
*   **`worker/`**: Web worker scripts, likely for offloading heavy computations (e.g., embedding generation) from the main thread.

## 3. Data Flow and Interactions

1.  **Frontend (Next.js/React)**: The user interacts with the application through the React-based UI. Components are rendered on the client or server side by Next.js.
2.  **API Routes (Next.js API)**: User actions (e.g., sending a chat message, managing assistants) trigger calls to the Next.js API routes (`app/api/`). These routes act as the backend for the frontend.
3.  **LLM Integration**: The API routes, often leveraging modules from `lib/models/` and `lib/retrieval/`, communicate with external LLM providers (OpenAI, Anthropic, etc.) using their respective SDKs.
4.  **Database (Supabase)**: The `db/` modules handle all interactions with the Supabase PostgreSQL database. This includes storing chat history, user profiles, assistant configurations, files, and other application data. Supabase also provides authentication services.
5.  **Background Processing (Web Workers)**: For computationally intensive tasks like generating local embeddings, the application can offload these operations to a web worker (`worker/index.js`) to keep the main UI thread responsive.
6.  **File Storage (Supabase Storage)**: Files uploaded by users (e.g., for retrieval) are likely stored in Supabase Storage, with metadata managed in the Supabase database via `db/files.ts`.

## 4. Key Architectural Principles

*   **Modular Design**: Code is organized into logical modules (components, API routes, database interactions, utilities) to enhance maintainability and scalability.
*   **Separation of Concerns**: Frontend UI, backend API logic, and database interactions are clearly separated.
*   **Type Safety**: Extensive use of TypeScript across the entire codebase ensures type safety and improves developer experience.
*   **Internationalization**: Built-in support for multiple languages.
*   **Extensibility**: Designed to easily integrate with various LLM providers and potentially other external services.
*   **Component-Based UI**: Leverages React's component model for building a flexible and reusable user interface.
*   **Serverless Backend**: Next.js API routes and Supabase provide a serverless-friendly architecture.

## 5. Development Workflow

*   **Local Development**: `npm run dev` starts the Next.js development server. `npx supabase start` initiates local Supabase services.
*   **Database Management**: `npm run db-migrate` applies database migrations, and `npm run db-types` generates TypeScript types from the Supabase schema.
*   **Code Quality**: `npm run lint:fix` and `npm run format:write` ensure code consistency.
*   **Testing**: `npm run test` runs unit tests with Jest, and Playwright is used for end-to-end testing.

This architecture provides a robust foundation for a modern, AI-powered chatbot application, emphasizing flexibility, scalability, and developer efficiency.
