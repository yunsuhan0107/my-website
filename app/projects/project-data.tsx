export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Smart Trash Can with Automatic Classification System (Engineering Open House 2022)",
    year: 2022,
    description:
        "Using ESP-32 Camera and Arduino board with ResNet50 Architecture, the trash can detects and classifies the trash's category and transfers it to the bin accordingly.",
    url: "/pdf/project2.pdf"
  },
  {
    title: "Comparison of Drowning People Detection Systems for Water Safety",
    year: 2019,
    description:
      "A software-focused project of a system that differentiates images of a person drowning and swimming for maritime safety.",
    url: "/pdf/project1.pdf",
  }
];
