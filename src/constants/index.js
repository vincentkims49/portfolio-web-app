import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Flutter Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web  developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Program Contributor",
    company_name: "Section Engineering/Engineering Education, Colorado, USA",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2019 - May 2022",
    points: [
      "Wrote technical tutorials on EngEd Platform (Section.io), showcasing expertise in Python, FLutter, Java and NLP..",
      "Collaborating with cross-functional teams product managers, and other developers to create high-quality products and tutorials.",
      "Participated in hackathons related to product development.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Meru University of Science and Technology, Meru",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Wrote and developed new well-tested software using Java and Python.",
      "Developed Android/iOS applications using Flutter and Kotlin and personal websites.",
      "Collaborated with experienced developers to create and maintain cutting-edge websites and web applications.",
      "Assisted in coding, testing, and debugging website features and functionalities.",
      "Contributed innovative ideas for web projects during brainstorming sessions.",
      "Optimized web applications for maximum speed and performance.",
      "Ensured website functionality and responsiveness across different devices and browsers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "The Brand, Nairobi",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2023 - Present",
    points: [
      "Collaborated closely with the development team to conceptualize, design, and construct mobile applications utilizing the Flutter framework.",
      " Engaged in the complete app development lifecycle, encompassing ideation, design, coding, testing, and deployment.",
      " Produced clean, efficient, and maintainable code in adherence to Flutter and Dart best practices and design patterns.",
      " Assisted in diagnosing and resolving issues within existing applications, implementing solutions as required.",
      " Worked in conjunction with UI/UX designers to implement interfaces that blend visual appeal with user-friendliness.",
      " Remained abreast of the latest trends and advancements in mobile app development, particularly within the Flutter ecosystem.",
      " Contributed innovative ideas aimed at enhancing app functionality, user experience, and development processes.",
      " Documented code and development procedures to facilitate collaboration and knowledge dissemination.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Creating ChatBot Using Natural Language Processing in Python",
    name: "Briana Nzivu",
    designation: "ENGED Program Contributer",
    company: "Section",
    tags: [
      {
        name: "API",
        color: "orange-text-gradient",
      },
      {
        name: "Languages",
        color: "green-text-gradient",
      },
    ],
    source_article_link:
      "https://www.cloudzilla.ai/dev-education/creating-chatbot-using-natural-language-processing-in-python/",
    image:
      "https://www.section.io/engineering-education/authors/briana-nzivu/avatar_hu94a67e3083c04ab492436dd26ce052a3_281022_400x0_resize_q75_box.jpg",
  },
  {
    testimonial:
      "Feed-forward and Recurrent Neural Networks Python Implementation",
    name: "Srishilesh P S",
    designation: "ENGED Program Contributer",
    company: "Section",
    tags: [
      {
        name: "Machine Learning",
        color: "orange-text-gradient",
      },
      {
        name: "Languages",
        color: "green-text-gradient",
      },
    ],
    source_article_link:
      "https://www.cloudzilla.ai/dev-education/feedforward-and-recurrent-neural-networks-python-implementation/",

    image:
      "https://www.section.io/engineering-education/authors/srishilesh-p-s/avatar_hu65e22a5159f59cbcc216bfd268536854_151130_400x0_resize_q75_box.jpg",
  },
  {
    testimonial:
      "Routing with React Navigation and Nesting Navigators in React Native",
    name: "Briana Nzivu",
    designation: "ENGED Program Contributer",
    company: "Section",
    tags: [
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "Languages",
        color: "green-text-gradient",
      },
    ],
    source_article_link:
      "https://www.cloudzilla.ai/dev-education/routing-with-react-navigation-and-nesting-navigators-in-react-native/",
    image:
      "https://www.section.io/engineering-education/authors/briana-nzivu/avatar_hu94a67e3083c04ab492436dd26ce052a3_281022_400x0_resize_q75_box.jpg",
  },
  {
    testimonial:
      "Using Service Classes to Design an Authentication API in Flutter",
    name: "Briana Nzivu",
    designation: "ENGED Program Contributer",
    company: "Section",
    tags: [
      {
        name: "API",
        color: "orange-text-gradient",
      },
      {
        name: "Languages",
        color: "green-text-gradient",
      },
    ],
    source_article_link:
      "https://www.cloudzilla.ai/dev-education/service-classes-to-design-authentication-api/",

    image:
      "https://www.section.io/engineering-education/authors/briana-nzivu/avatar_hu94a67e3083c04ab492436dd26ce052a3_281022_400x0_resize_q75_box.jpg",
  },
];

const projects = [
  {
    name: "Mobile nutrition ",
    description:
      "Mobile Nutrition is an application that aims at keeping track of nutrients that the user consumes. It also provide recipes for the selecte meals to the user.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "objective-c",
        color: "pink-text-gradient",
      },
      {
        name: "cpp",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/vincentkims49/mobile-nutrition-app",
  },
  {
    name: "SumiRizz AI",
    description:
      "Simplify your reading with SumiRizz, an open-source article summarizer that transforms lengthy articles into clear and concise summaries",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/vincentkims49/sumirizz_ai_summarizer",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
