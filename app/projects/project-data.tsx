export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Drowning Detection Program Using CNN",
    year: 2019,
    description:
      "A software-focused project of a system that differentiates images of a person drowning and swimming for maritime safety.",
    url: "https://example.com/",
  },
];
