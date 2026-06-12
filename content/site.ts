export const siteConfig = {
  name: "Nicolás Batelli",
  title: "Senior Software Engineer — Full Stack (.NET & React)",
  pitch:
    "Senior Software Engineer with 8+ years building full-stack applications with .NET and React. I specialize in microservices, cloud platforms, and clean architecture — and I love bringing ideas to life in code and 3D.",
  bio: "I'm a Senior Software Engineer based in Buenos Aires with over 8 years of experience designing and building full-stack applications with .NET and React. I specialize in microservices architecture, cloud platforms (Azure & GCP), message-based systems (RabbitMQ, Pub/Sub), and CI/CD automation. I work across the full software lifecycle in Agile teams with a strong focus on clean architecture, testing, and leveraging AI tooling to ship faster without sacrificing quality.",
  interests:
    "Outside of work I'm a maker and car enthusiast. I've been 3D designing and printing for years — I started out modeling in AutoCAD on an Anet A8, moved to Autodesk Inventor with an Ender 3 V2, and now run a small print farm of two Ender 3 V2s and a Bambu Lab A1 Combo. I'm also hands-on with my cars and never hesitate to get my hands dirty: I'm building a 2008 VW Touareg V8 for off-roading and a Toyota GR86 (in red) for the racetrack.",
  email: "nicolasbatelli96@gmail.com",
  location: "Buenos Aires, Argentina",
  resume: "/Resume_NicolasBatelli.pdf",
  githubUsername: process.env.GITHUB_USERNAME ?? "nicolasbatelli",
  links: {
    github: "https://github.com/nicolasbatelli",
    linkedin: "https://linkedin.com/in/nicolasbatelli",
  },
  nav: [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "3D Models", href: "/models" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;
