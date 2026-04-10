// src/data/courses.js

export const coursesData = {
  "ux-research": {
    id: "ux-research",
    categoryId: "USER RESEARCH",
    title: "Conduct UX Research and Test Early Concepts",
    totalModules: 5,
    upNext: {
      title: "Advanced Information Architecture",
      info: "Next Course • 12 Lessons"
    },
    modules: [
      {
        id: "m1",
        moduleNumber: 1,
        title: "Introduction to User Research",
        videoUrl: "0:10 / 15:20",
        description: "In this module, we introduce the fundamental concepts of user research, including why it's crucial for product success and an overview of different research methodologies.",
        resources: [
          { id: 1, title: 'Intro Deck', size: 'PDF • 2.4 MB' }
        ]
      },
      {
        id: "m2",
        moduleNumber: 2,
        title: "Conducting UX Research at Scale",
        videoUrl: "0:12 / 39:27",
        description: "In this module, we transition from theoretical planning to the execution of primary user research. You will learn the nuances of moderating usability studies, identifying behavioural patterns, and documenting \"pains and gains\" without introducing researcher bias.",
        resources: [
          { id: 1, title: 'Research Checklist', size: 'PDF • 1.2 MB' },
          { id: 2, title: 'Interview Template', size: 'PDF • 0.2 MB' }
        ]
      },
      {
        id: "m3",
        moduleNumber: 3,
        title: "Synthesizing Feedback Loops",
        videoUrl: "0:00 / 45:10",
        description: "Learn how to collect all the data gathered from your user research and turn it into actionable insights. We cover affinity mapping, user personas, and journey mapping.",
        resources: [
          { id: 1, title: 'Affinity Mapping Guide', size: 'PDF • 1.5 MB' }
        ]
      },
      {
        id: "m4",
        moduleNumber: 4,
        title: "Presenting Findings to Stakeholders",
        videoUrl: "0:00 / 28:45",
        description: "Communication is key. This module walks you through how to construct a compelling narrative around your UX research to get buy-in from product managers and executives.",
        resources: [
          { id: 1, title: 'Presentation Template', size: 'PPTX • 5.1 MB' }
        ]
      },
      {
        id: "m5",
        moduleNumber: 5,
        title: "Final Assessment Quiz",
        type: "quiz",
        description: "Test your knowledge on the entire course. Passing this quiz is required to earn your certificate of completion.",
        resources: []
      }
    ]
  },
  "ui-fundamentals": {
    id: "ui-fundamentals",
    categoryId: "FUNDAMENTALS",
    title: "Foundation of UI/UX Design",
    totalModules: 3,
    upNext: {
      title: "Design Theory Essentials",
      info: "Next Course • 8 Lessons"
    },
    modules: [
      {
        id: "m1",
        moduleNumber: 1,
        title: "What is UI vs UX?",
        videoUrl: "0:05 / 20:10",
        description: "We dive deep into the differences between User Interface and User Experience. We'll explore how they overlap and why you need both to build successful products.",
        resources: [
          { id: 1, title: 'Terminology Cheat Sheet', size: 'PDF • 0.5 MB' }
        ]
      },
      {
        id: "m2",
        moduleNumber: 2,
        title: "Understanding Color Theory",
        videoUrl: "0:00 / 35:20",
        description: "Color sets the mood for your entire application. Learn how to construct a cohesive color palette that meets accessibility standards and conveys the right emotion.",
        resources: [
          { id: 1, title: 'Color Palette Generator list', size: 'PDF • 0.1 MB' }
        ]
      },
      {
        id: "m3",
        moduleNumber: 3,
        title: "Typography Rules",
        videoUrl: "0:00 / 42:15",
        description: "Text is 90% of the web. Explore font pairing, hierarchy, and vertical rhythm to make your designs readable and beautiful.",
        resources: []
      }
    ]
  }
};

// Helper: simulate user progress (in a real app, this comes from backend or Context/Redux)
export const userProgress = {
  "ux-research": {
    completedModules: ["m1"],
    currentModule: "m2",
    progressPercent: 18
  },
  "ui-fundamentals": {
    completedModules: [],
    currentModule: "m1",
    progressPercent: 2
  }
};
