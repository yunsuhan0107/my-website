export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "UIUC Engineering Open House: Smart Trash Can with Automatic Classification System",
    year: 2022,
    description:
        "Using ESP-32 Camera and Arduino board with ResNet50 Architecture, the trash can detects and classifies the trash's category and transfers it to the bin accordingly.",
    url: "https://docs.google.com/document/d/1-w4rcG7msn8TzT2jdoI4S8_pfglgfBkPopTKYTUxhxg/edit?usp=sharing"
  },
  {
    title: "Drowning Detection Program Using CNN",
    year: 2019,
    description:
      "A software-focused project of a system that differentiates images of a person drowning and swimming for maritime safety.",
    url: "https://docs.google.com/document/d/19udQhYzRlnVK-7ee5Xki1MTNUNUl0eMe/edit?usp=sharing&ouid=117489009999024997956&rtpof=true&sd=true",
  }
];
