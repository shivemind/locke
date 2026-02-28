# EchoAtlas Project

EchoAtlas is a Next.js application that integrates an EvangelistBot system designed to streamline outreach opportunities and draft generation. This README provides an overview of the project, setup instructions, and guidelines for testing the EvangelistBot locally.

## Project Structure

The project is organized as follows:

```
EchoAtlas
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── middleware.ts
│   │   ├── evangelist-bot
│   │   │   ├── page.tsx
│   │   │   ├── route.ts
│   │   │   ├── components
│   │   │   │   ├── ChatUI.tsx
│   │   │   │   ├── ConversationView.tsx
│   │   │   │   └── BotConfigForm.tsx
│   │   │   └── icons
│   ├── components
│   │   ├── ui
│   │   │   ├── Button.tsx
│   │   │   └── Modal.tsx
│   │   └── layout
│   ├── features
│   │   └── evangelist-bot
│   │       ├── hooks
│   │       │   └── useConversation.ts
│   │       ├── services
│   │       │   ├── botService.ts
│   │       │   └── streaming.ts
│   │       ├── adapters
│   │       │   └── llmAdapter.ts
│   │       └── config
│   │           └── botConfig.ts
│   ├── lib
│   │   ├── llm
│   │   │   ├── client.ts
│   │   │   └── providers
│   │   │       ├── openai.ts
│   │   │       └── azureOpenAI.ts
│   │   ├── embeddings
│   │   │   └── embedder.ts
│   │   ├── vector-store
│   │   │   └── pinecone.ts
│   │   ├── db
│   │   │   └── prisma.ts
│   │   └── telemetry
│   │       └── tracing.ts
│   ├── server
│   │   ├── workers
│   │   │   └── botWorker.ts
│   │   └── jobs
│   │       └── syncJobs.ts
│   ├── styles
│   │   └── globals.css
│   ├── types
│   │   └── index.ts
│   └── utils
│       ├── rateLimiter.ts
│       ├── validators.ts
│       └── serializer.ts
├── prisma
│   └── schema.prisma
├── tests
│   ├── unit
│   │   └── evangelist-bot.spec.ts
│   └── integration
│       └── evangelist-bot.integration.spec.ts
├── .env.example
├── next.config.js
├── package.json
├── tsconfig.json
├── prisma.schema
└── README.md
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd EchoAtlas
   ```

2. **Environment Variables**
   Ensure the `DATABASE_URL` is set in your `.env` file. You can use the provided `.env.example` as a template.

3. **Install Dependencies**
   Run the following command to install the necessary dependencies:
   ```bash
   npm install
   ```

4. **Run Migrations**
   Apply the Prisma migrations to set up the database schema:
   ```bash
   npx prisma migrate dev
   ```

5. **Test the EvangelistBot**
   Execute the script to test the functionality of the EvangelistBot:
   ```bash
   npx ts-node src/scripts/evangelistbot.ts
   ```

6. **Access the Observatory UI**
   Open your browser and navigate to `/observatory/outreach` to review outreach opportunities.

## EvangelistBot Functionality

The EvangelistBot is designed to:
- Perform search queries and fetch data from public APIs.
- Score results and deduplicate URLs.
- Generate outreach drafts using the OpenAI API.
- Validate output using Zod and save drafts into the database.

## Contribution

Feel free to contribute to the project by submitting issues or pull requests. Ensure that your code adheres to the project's coding standards and architecture guidelines.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.