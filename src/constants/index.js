const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

console.log(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Internship Experience" },
  { value: 4, suffix: "+", label: "Completed Projects" },
  { value: 8, suffix: "+", label: "Technologies Learned" },
  { value: 100, suffix: "%", label: "Commitment to Learning" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Node.js Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Three.js Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Tailwind CSS",
    imgPath: "/images/logos/Tailwind_CSS_Logo.svg.png",
  },
  {
    name: "Git Expert",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "HTML Developer",
    modelPath: "/models/html-svgrepo-com.glb",
    scale: 0.9,
    rotation: [900, 100, 0],
  },
  {
    name: "Design Developer",
    modelPath: "/models/css-3-svgrepo-com.glb",
    scale: 0.9,
    rotation: [900, -100, 0],
  },
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Shopify Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    title: "Full Stack Developer",
    review: "Freelancer | Self-Employed",
    date: "Aug 2025 - Present",
    logoPath: "/images/freelancer.jpg",
    responsibilities: [
      "Developed full-stack web applications and CRM systems",
      "Created APIs, dashboards, and business management features",
      "Implemented lead, deal, task, meeting, and invoice functionalities",
      "Managed databases using MongoDB.",
    ],
  },
  {
    review: "CrawlApps Shopify-Agency",
    imgPath: "/images/CwawlApps.png",
    logoPath: "/images/Crawl-Logo.jpeg",
    title: "Shopify Developer",
    date: "May 2025 - July 2025",
    responsibilities: [
      "Customized Shopify themes using Liquid, HTML, CSS, and JavaScript to enhance storefront design.",
      "Integrated Shopify APIs and apps to improve product management and checkout experience.",
      "Optimized site performance and collaborated with the team to deliver a smooth e-commerce user experience.",
    ],
  },
  {
    review: "Omeeceon Solution",
    imgPath: "/images/omeecron_logo_tr.png",
    logoPath: "/images/omeecron_solutions_logo.jpeg",
    title: "Web Developer",
    date: "November 2024 - April 2025",
    responsibilities: [
      "Developed Laravel web modules with a focus on clean and scalable architecture.",
      "Worked with backend teams to integrate APIs smoothly into the application.",
      "Contributed to Laravel packages and internal tools used across the project ecosystem.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  // {
  //   name: "Chirag Dhameliya",
  //   mentions: "@chiragdhameiya",
  //   review:
  //     "Working with him during the internship was a great experience. He picked up new concepts quickly and delivered clean, efficient code. His curiosity and willingness to learn made him a valuable part of the team.",
  //   imgPath: "/images/client1.png",
  // },
  // {
  //   name: "Krish Lakhankiya",
  //   mentions: "@krishlakhankiya",
  //   review:
  //     "He contributed significantly to our frontend tasks. His ability to understand UI requirements and convert them into responsive, modern interfaces was impressive for a fresher. A dedicated and sincere developer.",
  //   imgPath: "/images/client2.png",
  // },
  // {
  //   name: "Nikita Rao",
  //   mentions: "@nikitarao",
  //   review:
  //     "I had the opportunity to mentor him during the internship. He consistently demonstrated professionalism and strong problem-solving abilities. With his positive attitude, he is definitely ready for real-world projects.",
  //   imgPath: "/images/client6.png",
  // },
  {
    name: "Sandeep Dhameliya",
    mentions: "Founder - Omeecron Solutions",
    review:
      "During the internship, he consistently delivered his tasks on time and showed strong ownership of his work. His skills in React and UI development improved rapidly and visible in the final output.",
    imgPath: "/images/User.png",
  },
  {
    name: "Chirag Dhameliya",
    mentions: "Project Manager",
    review:
      "His attention to detail and eagerness to solve problems made the development process smoother. Whether it was UI polishing or bug fixing, he approached every task with enthusiasm.",
    imgPath: "/images/User.png",
  },
  {
    name: "Krish Kukadiya",
    mentions: "Team Lead",
    review:
      "He was a quick learner and adapted well to our workflow. His contribution to our Shopify and frontend modules was noteworthy. A hardworking fresher with a strong foundation.",
    imgPath: "/images/User.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/kenil-kakadiya-93b796237/",
  },
  {
    name: "GitHub",
    imgPath: "/images/github.png",
    url: "https://github.com/kenil-20",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
