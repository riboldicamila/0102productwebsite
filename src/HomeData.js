import portfolio01 from "./Components/Images/portfolio01.png"
import portfolio02 from "./Components/Images/portfolio02.png"
import portfolio03 from "./Components/Images/portfolio03.png"
import portfolio04 from "./Components/Images/portfolio04.png"
import portfolio05 from "./Components/Images/portfolio05.png"

import icon01 from "./Components/Images/icon01.png"
import icon02 from "./Components/Images/icon02.png"
import icon03 from "./Components/Images/icon03.png"



export const mockData = {
  title: "Freshly Baked ",
  titleSecound: "Just for You!",
  description:
    "Delicious treats crafted with love and the finest ingredients. Satisfy your cravings today!",
  benefits: [
    {
      icon: icon01,
      title: "Artisan Breads",
      description:
        "Handcrafted daily with natural ingredients for that perfect crunch and softness.",
    },
    {
      icon: icon02,
      title: "Sweet Pastries",
      description:
        "Indulge in our freshly baked pastries, filled with love and flavor.",
    },
    {
      icon: icon03,
      title: "Custom Cakes",
      description:
        "Celebrate your special moments with our beautifully crafted custom cakes.",
    },
  ],
};



export const blogs = [
  {
    id: 1,
    title: "Daily Panel - Web Application",
    date: "08 Feb 2025",
    author: "Camila Riboldi",
    subtitle: "An ongoing project utilizing React, global state management with UseContext, Firebase authentication, and API connections to streamline daily operations.",
    image: portfolio02,
    slug: "daily-panel-app",
    url: "https://daily-panel-rosy.vercel.app/"
  },
  {
    id: 2,
    title: "Projects & Portfolio - My Digital Showcase",
    date: "08 Feb 2025",
    author: "Camila Riboldi",
    subtitle: "A landing page built with React, incorporating Material UI, GSAP animations, and dynamic routing to enhance user experience.",
    image: portfolio04,
    slug: "projects-portfolio",
    url: "https://camila-riboldi.vercel.app/"
  },
  {
    id: 3,
    title: "Minimal Web Design - React Practice",
    date: "08 Feb 2025",
    author: "Camila Riboldi",
    subtitle: "A minimalist web page created with React, CSS, and Bootstrap, focusing on clean UI design and smooth user interactions.",
    image: portfolio03,
    slug: "minimal-web-design",
    url: "https://minimalistic-web-sample.vercel.app/",
  },
  {
    id: 4,
    title: "Swiss Media - Responsive Website Design",
    date: "08 Feb 2025",
    author: "Camila Riboldi",
    subtitle: "A responsive website built with HTML, CSS, Sass, and Bootstrap, using various libraries to enhance interactivity and animation.",
    image: portfolio05,
    slug: "swiss-media",
    url: "https://riboldicamila.github.io/swissmedia-basic-html-saas/",

  },
  {
    id: 5,
    title: "Corporate Projects",
    date: "08 Feb 2025",
    author: "Camila Riboldi",
    subtitle: "I’ve had the chance to work at companies like JP Morgan and ExxonMobil where I worked on frontend and backend development, building applications.",
    image: portfolio01,
    slug: "corporate-projects",
    url: "https://riboldi-camila-sw.vercel.app/",
  }
];