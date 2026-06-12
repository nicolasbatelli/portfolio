export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Dev.Pro",
    role: "Senior Software Engineer",
    period: "Aug 2025 — Present",
    description:
      "Full-stack development with .NET 8 / .NET Core on the backend and React with Next.js (TypeScript) on the frontend.",
    highlights: [
      "Designed and maintained microservices using RabbitMQ and Pub/Sub messaging with the Mediator Pattern",
      "Managed data with Microsoft SQL Server and containerized services with Docker",
      "Deployed and operated workloads on Google Cloud Platform (GCP) and Microsoft Azure",
      "Built and maintained CI/CD pipelines with Azure DevOps, Azure Pipelines and Octopus Deploy",
      "Used GitHub Copilot daily to accelerate development and improve workflow quality",
    ],
    technologies: [".NET 8", "Next.js", "React", "RabbitMQ", "GCP", "Azure", "Docker"],
  },
  {
    company: "ELEKS",
    role: "Software Engineer",
    period: "Oct 2024 — Aug 2025",
    description:
      "Full-stack development with .NET Core backend and React (TypeScript).",
    highlights: [
      "Built serverless solutions on Microsoft Azure using Azure Functions",
      "Designed and queried relational data on Microsoft SQL Server",
    ],
    technologies: [".NET Core", "React", "TypeScript", "Azure Functions", "SQL Server"],
  },
  {
    company: "MOBI724 Global Solutions",
    role: "Full Stack Software Engineer",
    period: "Nov 2021 — Oct 2024",
    description:
      "Built .NET Core microservices and React frontends across the full stack.",
    highlights: [
      "Built .NET Core microservices with RabbitMQ messaging, Entity Framework, Mediator Pattern and REST APIs",
      "Developed React frontends with TypeScript and Material UI",
      "Wrote unit tests (NUnit, Moq, AutoFixture) and Cypress end-to-end tests",
      "Optimized databases on SQL Server (query optimization, stored procedures)",
      "Containerized Web APIs and SPAs with Docker and integrated third-party APIs (Auth0, SendGrid, Twilio)",
      "Created and maintained Azure build and deploy pipelines",
    ],
    technologies: [".NET Core", "React", "RabbitMQ", "Entity Framework", "Docker", "Cypress"],
  },
  {
    company: "Cognizant Softvision",
    role: "Software Developer",
    period: "Feb 2021 — Nov 2021",
    description:
      "Developed features for a logistics application across .NET and Angular.",
    highlights: [
      "Developed features for a logistics application in .NET Core and .NET Framework 4.7, improving the driver messaging flow",
      "Built and fixed Angular frontend features",
      "Worked with Azure DevOps (Repos, Pipelines, Releases) and databases (IBM DB2, SQL Server)",
      "Unit testing with Moq and NUnit",
    ],
    technologies: [".NET Core", ".NET Framework", "Angular", "Azure DevOps", "IBM DB2"],
  },
  {
    company: "Smartmation S.A.",
    role: "Software Developer",
    period: "Jan 2019 — Feb 2021",
    description:
      "Built service-oriented web applications for a smart lighting management platform.",
    highlights: [
      "Built service-oriented web apps in .NET Framework (Angular 8, Bootstrap, AGM Maps API)",
      "Worked with SQL Server (stored procedures), LINQ and Git",
      "Developed a stock management system and internal R&D tooling in .NET",
      "Contributed to an artificial ventilator prototype with Toyota Argentina during the COVID-19 pandemic",
    ],
    technologies: [".NET Framework", "Angular 8", "SQL Server", "LINQ"],
  },
  {
    company: "Ministry of the Interior (Argentina)",
    role: "Full Stack Web Developer",
    period: "Sep 2018 — Dec 2018",
    description:
      "Developed a government fund web platform.",
    highlights: [
      "Built a government fund web platform using CodeIgniter (PHP), Bootstrap, jQuery, REST APIs and the MVC pattern",
    ],
    technologies: ["PHP", "CodeIgniter", "Bootstrap", "jQuery"],
  },
  {
    company: "Solidmation S.A.",
    role: "Hardware & Automation Technician",
    period: "Jun 2016 — Aug 2018",
    description:
      "Tested software and hardware for IoT home automation systems.",
    highlights: [
      "Tested software and hardware, performed device installations",
      "Assembled and tested PCB prototypes for IoT home automation systems",
    ],
    technologies: ["IoT", "Hardware", "PCB", "Automation"],
  },
];
