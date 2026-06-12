export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    skills: [
      "C#",
      ".NET 8",
      ".NET Core",
      ".NET Framework",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Angular",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "Microsoft Azure",
      "Azure DevOps",
      "Azure Pipelines",
      "Azure Functions",
      "Google Cloud Platform",
      "Docker",
      "Octopus Deploy",
      "CI/CD",
    ],
  },
  {
    category: "Architecture & Messaging",
    skills: [
      "Microservices",
      "RabbitMQ",
      "Pub/Sub",
      "Mediator Pattern",
      "REST APIs",
      "Entity Framework",
      "Design Patterns",
    ],
  },
  {
    category: "Databases",
    skills: [
      "SQL Server",
      "IBM DB2",
      "MariaDB",
      "MySQL",
      "SQLite",
      "Stored Procedures",
      "Query Optimization",
    ],
  },
  {
    category: "Testing",
    skills: ["NUnit", "Moq", "AutoFixture", "Cypress"],
  },
  {
    category: "Practices & Tools",
    skills: [
      "Agile",
      "Git",
      "GitHub Copilot",
      "Auth0",
      "SendGrid",
      "Twilio",
    ],
  },
];
