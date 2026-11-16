import {
  cvConfig,
  educationData,
  projectsData,
  skillCategories,
} from "./data";

export { cvConfig };

/**
 * Resolves a configured CV URL (Google Drive, Dropbox, direct HTTPS PDF, or local path)
 * into a direct downloadable target URL, falling back to the bundled local PDF.
 */
export function resolveDirectCvUrl(rawUrl?: string): string {
  const trimmed = rawUrl?.trim();
  if (!trimmed) {
    return cvConfig.fallbackLocalPath;
  }

  if (trimmed.startsWith("/") && !trimmed.startsWith("//")) {
    return trimmed;
  }

  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    return cvConfig.fallbackLocalPath;
  }

  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    return cvConfig.fallbackLocalPath;
  }

  const hostname = parsed.hostname.toLowerCase();

  if (hostname === "drive.google.com" || hostname === "docs.google.com") {
    const fileIdMatch = parsed.pathname.match(/\/file\/d\/([^/]+)/);
    const driveId = fileIdMatch?.[1] ?? parsed.searchParams.get("id");
    if (driveId) {
      return `https://drive.google.com/uc?export=download&id=${driveId}`;
    }
  }

  if (hostname === "dropbox.com" || hostname.endsWith(".dropbox.com")) {
    parsed.searchParams.set("dl", "1");
    return parsed.toString();
  }

  return trimmed;
}

const tertiaryEducationTitles = new Set([
  "MSc in Software Product Management and Business",
  "PMSCS",
  "BSc",
]);

export const cvProfile = {
  name: "Sowmik Shovon Karmakar",
  headline:
    "Cloud, DevSecOps & QA Automation Engineer | MSc @ LUT University",
  location: "Tampere, Finland · Open to Finland & EU",
  availability:
    "MSc @ LUT University (Aug 2026 - Jul 2028) · Open to Finland & EU Roles",
  email: "sowmikshovon@gmail.com",
  linkedin: "https://linkedin.com/in/sowmikshovon",
  github: "https://github.com/sowmikshovon",
  summary:
    "Software, Cloud, DevSecOps, and QA Automation Engineer currently pursuing an MSc (Tech) in Software Product Management and Business at LUT University (Finland, Aug 2026 - Jul 2028), building on an MSc in Computer Science (PMSCS) at Jahangirnagar University, a BSc in Computer Science at BRAC University, and QA Automation experience at A1QA. Focused on Azure AKS/Terraform IaC, CI/CD security pipelines, automated test frameworks, and full-stack TypeScript products for teams in Finland and across the EU.",
  coreCompetencies: [
    "Cloud & IaC (Terraform, Azure AKS, AWS, Docker, Kubernetes)",
    "DevSecOps & CI/CD (GitHub Actions, Jenkins, ArgoCD, SonarQube, Trivy)",
    "QA & Test Automation (Java, Python, Selenium, BDD, TestNG, JUnit, Allure)",
    "Full-Stack TypeScript (Next.js, React, Node.js, Express, PostgreSQL)",
  ],
  experience: [
    {
      role: "QA Automation Intern",
      company: "A1QA",
      period: "2023 - 2024",
      highlights: [
        "Built maintainable Page Object Model UI test suites using Java, Selenium WebDriver, TestNG, and Cucumber BDD.",
        "Integrated automated test execution and Allure reporting into Jenkins CI pipelines to surface regressions early.",
      ],
    },
  ],
  education: educationData
    .filter((item) => tertiaryEducationTitles.has(item.title))
    .slice()
    .reverse()
    .map((item) => ({
      title: item.title,
      institution: item.location,
      period: item.date.trim(),
      description: item.description,
    })),
  skillCategories,
  featuredProjects: projectsData.slice(0, 6).map((project) => ({
    title: project.title,
    category: project.category,
    description: project.description,
    tags: project.tags,
    url: project.url,
  })),
} as const;
