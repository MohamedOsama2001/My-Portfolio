import {
  IAddProjectFormInput,
  ILoginFormInput,
  INavLinkDashboard,
  IProject,
  IService,
  ITeamMember,
} from "../interfaces";

//* 2 project
import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import avatar from "../assets/about-avatar.png";
import designingImage from "../assets/service-designing.png";
import codingImage from "../assets/service-coding.png";
import softwareImage from "../assets/service-software-engineering.png";
import socialImage from "../assets/service-social-media.png";
import responsiveImage from "../assets/service-responsive-design.png";
import coloringImage from "../assets/service-coloring.png";
import contentImage from "../assets/service-content-creation.png";
import proj5 from "../assets/proj5.jpg"
import proj6 from "../assets/project6.jpg"
import proj7 from "../assets/project7.jpg"
import proj8 from "../assets/proj8.jpg"
import proj9 from "../assets/proj9.jpg"

const elmImages = Object.entries(
  import.meta.glob('../assets/elm/*.{png,jpg,jpeg,svg}', { eager: true })
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]: [string, any]) => mod.default as string);
const dizitImages = Object.entries(
  import.meta.glob('../assets/dizit/*.{png,jpg,jpeg,svg}', { eager: true })
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]: [string, any]) => mod.default as string);

const fahdImages = Object.entries(
  import.meta.glob('../assets/fahd/*.{png,jpg,jpeg,svg}', { eager: true })
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]: [string, any]) => mod.default as string);

  const proj4Images = Object.entries(
  import.meta.glob('../assets/proj4/*.{png,jpg,jpeg,svg}', { eager: true })
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]: [string, any]) => mod.default as string);

export const DASHBOARD_NAV_LINKS: INavLinkDashboard[] = [
  {
    name: "الصفحة الرئيسية",
    path: "/dashboard/admin",
  },
  {
    name: "المستخدمين",
    path: "/dashboard/admin/users",
  },
  {
    name: "إدراة المشاريع",
    path: "/dashboard/admin/projects",
  },
  {
    name: "إدارة الأقسام",
    path: "/dashboard/admin/categories",
  },
  {
    name: "إدارة التواصل",
    path: "/dashboard/admin/contacts",
  },
  {
    name: "إعدادات الموقع",
    path: "/dashboard/admin/settings",
  },
];

export const LOGIN_FORM_INPUTS: ILoginFormInput[] = [
  { label: "البريد الالكتروني", type: "text", name: "email" },
  { label: "كلمة المرور", type: "password", name: "password" },
];

export const ADD_PROJECT_FORM_INPUTS: IAddProjectFormInput[] = [
  {
    label: "اسم المشروع",
    name: "title",
    type: "text",
  },
  {
    label: "وصف المشروع",
    name: "description",
    type: "text",
  },
  {
    label: "الأدوات المستخدمة",
    name: "tools",
    type: "text",
  },
  {
    label: "رابط المشروع",
    name: "url",
    type: "text",
  },
];

export const CATEGORIES = [
  { value: "frontend", label: "frontend" },
  { value: "mern", label: "mern stack" },
  
];

export const PROJECTS: IProject[] = [
  {
    id: 1,
    title: "Elmullim",
    description:
      "Elmullim is an educational platform designed to connect students, teachers, and parents through an interactive interface. The project provides tools for managing lessons, chatting, taking quizzes, and handling user profiles, enabling effective communication, progress tracking, and online course enrollment.",
    images: elmImages,
    url: "https://elmullim.com/",
    githubUrl: "",
    hidden: false,
    category: "frontend",
    developers: [],
    rating: 4,
    isPrivate: true,
    technologies: [
      "react",
      "typescript",
      "vite",
      "tailwind css",
      "axios",
      "react query",
      "pusher",
      "chadcn ui",
    ],
  },
  {
    id: 2,
    title: "Dizit",
    description:
      "Dzit is an online store that allows users to turn their personal photos into unique wall art and decorative frames. The project focuses on offering high-quality, creative designs with easy ordering and installation, fast shipping, and continuous customer support.",
    images: dizitImages,
    url: "https://drive.google.com/drive/folders/1W-XtlN3JYWIGve5ReiVGSoYzbVka0o2X",
    githubUrl: "",
    category: "frontend",
    hidden: false,
    developers: [],
    rating: 4,
    isPrivate: true,
    technologies: [
      "react",
      "typescript",
      "vite",
      "tailwindcss",
      "react query",
      "i18n",
      "axios",
      "google oauth",
      "react toastify",
    ],
  },
  {
    id: 3,
    title: "ُElfahd",
    description:
     "El Fahd is an online platform for buying and selling products, allowing users to post ads and easily explore deals and offers near them. The project focuses on streamlining the buying and selling process through an interactive interface that supports adding and updating advertisements.",
    images: fahdImages,
    url: "https://drive.google.com/drive/folders/1Hvrc52cQQOQj7f1K7P09jS4wsHbXwJIa",
    githubUrl: "https://github.com/MohamedOsama2001/El-Fahd.git",
    category: ["frontend","mern stack"],
    hidden: true,
    developers: [],
    rating: 4,
    isPrivate: false,
    technologies: [
      "react",
      "tailwindcss",
      "axios",
      "redux toolkit",
      "React Hook Form",
      "Zod",
      "chadcn ui",
      "react toastify",
      "vite",
      "nodejs",
      "express",
      "mongodb",
      "mongoose",
      "jsonwebtoken",
      "bcryptjs",
      "cloudinary"
    ],
  },
  {
    id: 4,
    title: "E-Commerce",
    description:
      "This project is an e-commerce store built with React that allows users to browse products, add them to the cart, and complete the checkout process. It includes pages for registration, login, product listing, product details, cart, and checkout.",
    images: proj4Images,
    url: "https://e-commerce-liard-xi-49.vercel.app/",
    githubUrl: "",
    hidden: false,
    category: "frontend",
    developers: [],
    rating: 4,
    isPrivate: false,
    technologies: [
      "react",
      "redux",
      "react router",
      "javascript (ES6+)",
      "css3",
      "html5",
    ],
  },
  {
    id: 5,
    title: "Dynamic Weather App",
    description:
      "A weather application that provides real-time weather updates and forecasts based on user location. It features a dynamic interface that changes according to the weather conditions, offering an engaging user experience.",
    images: [proj5],
    url: "https://weather-app-opal-psi.vercel.app/",
    githubUrl: "https://github.com/MohamedOsama2001/weather-app",
    hidden: true,
    category: "frontend",
    developers: [],
    rating: 5,
    isPrivate: false,
    technologies: [
      "react",
      "javascript (ES6+)",
      "css3",
      "html5",
      "bootstrap"

    ],
  },
  {
    id: 6,
    title: "Online Shopping",
    description: "This project is a simple e-commerce web interface built with HTML, CSS, and JavaScript, allowing users to browse products, log in, and register as new users, with the ability to select specific products.It includes pages for displaying chosen products, login and registration pages, and JavaScript files to handle user interactions.",
    images: [proj6],
    url: "https://mohamedosama2001.github.io/online-shopping/",
    githubUrl: "https://github.com/MohamedOsama2001/online-shopping",
    hidden: false,
    category: "frontend",
    developers: [],
    rating: 5,
    isPrivate: false,
    technologies: [
      "html5",
      "css3",
      "javascript (ES6+)"
    ],
  },
  {
    id: 7,
    title: "Egypt Tourism",
    description: "The project is a tourism website about Egypt that uses Bootstrap to showcase information about cities and tourist attractions. It features sections for popular destinations, news, translation, and social media, aiming to attract visitors and introduce them to Egypt’s top tourist spots and services in an interactive and engaging way.",
    images: [proj7],
    url: "https://mohamedosama2001.github.io/Egypt-Tourism/",
    githubUrl: "https://github.com/MohamedOsama2001/Egypt-Tourism",
    hidden: false,
    category: "frontend",
    developers: [],
    rating: 5,
    isPrivate: false,
    technologies: [
      "html5",
      "css3",
      "bootstrap"
    ],
  },
  {
    id: 8,
    title: "VivaDecor",
    description: "VivaDecor is a landing page website based on html5 and css3",
    images: [proj8],
    url: "https://mohamedosama2001.github.io/LandingPage/",
    githubUrl: "https://github.com/MohamedOsama2001/LandingPage/",
    hidden: false,
    category: "frontend",
    developers: [],
    rating: 5,
    isPrivate: false,
    technologies: [
      "html5",
      "css3"
    ],
  },
  {
    id: 9,
    title: "Logo!",
    description:
      "Logo is a landing page website based on html and css",
    images: [proj9],
    url: "https://mohamedosama2001.github.io/FirstFrontendProject/",
    githubUrl: "https://github.com/MohamedOsama2001/FirstFrontendProject",
    hidden: true,
    category: "frontend",
    developers: [],
    rating: 5,
    isPrivate: false,
    technologies: [
      "html",
      "css"
    ],
  },
  
];

export const TEAM_MEMBERS: ITeamMember[] = [
  {
    name: "مصطفى خالد",
    job: "مطور واجهات أمامية",
    description:
      "مهندس برمجيات متخصص في تطوير واجهات المستخدم، يمتلك شغفًا عميقًا بتصميم تجارب رقمية مبتكرة وسلسة. يجمع بين المهارة التقنية والإبداع لخلق حلول تكنولوجية متميزة.",
    image: avatar,
    skills: ["React", "Next.js", "Javascript", "Nodejs", "Tailwindcss"],
    links: [
      {
        icon: <FiInstagram className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FiFacebook className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FiLinkedin className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FaWhatsapp className="text-white" size={20} />,
        link: "/",
      },
    ],
    cv: "",
  },
  {
    name: "أحمد محمد",
    job: "مطور خلفية",
    description:
      "مهندس برمجيات متخصص في تطوير الخوادم والأنظمة الخلفية، يتميز بقدرته على بناء حلول برمجية معقدة وقوية. يؤمن بأهمية الأداء والكفاءة في التطوير التقني.",
    image: avatar,
    skills: ["React", "Next.js", "Javascript", "Nodejs", "Tailwindcss"],
    links: [
      {
        icon: <FiInstagram className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FiFacebook className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FiLinkedin className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FaWhatsapp className="text-white" size={20} />,
        link: "/",
      },
    ],
    cv: "",
  },
  {
    name: "أحمد محمد",
    job: "مطور خلفية",
    description:
      "مهندس برمجيات متخصص في تطوير الخوادم والأنظمة الخلفية، يتميز بقدرته على بناء حلول برمجية معقدة وقوية. يؤمن بأهمية الأداء والكفاءة في التطوير التقني.",
    image: avatar,
    skills: ["React", "Next.js", "Javascript", "Nodejs", "Tailwindcss"],

    links: [
      {
        icon: <FiInstagram className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FiFacebook className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FiLinkedin className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FaWhatsapp className="text-white" size={20} />,
        link: "/",
      },
    ],
    cv: "",
  },
  {
    name: "سارة إبراهيم",
    job: "مصممة تجربة المستخدم",
    description:
      "مصممة تجربة مستخدم موهوبة تجمع بين الإبداع الفني والفهم العميق لاحتياجات المستخدمين. تسعى دائمًا لخلق تصاميم بديهية وجذابة تعزز التفاعل والسهولة.",
    image: avatar,
    skills: ["React", "Next.js", "Javascript", "Nodejs", "Tailwindcss"],

    links: [
      {
        icon: <FiInstagram className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FiFacebook className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FiLinkedin className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FaWhatsapp className="text-white" size={20} />,
        link: "/",
      },
    ],
    cv: "",
  },
];

export const SERVICES: IService[] = [
  {
    img: designingImage,
    title: "Digital Design",
    description:
      "We design outstanding visual identities and attractive user interfaces that reflect your brand essence and capture customers' attention.",
  },
  {
    img: codingImage,
    title: "Programming",
    description:
      "We develop integrated software solutions using the latest technologies, focusing on high performance and reliability.",
  },
  {
    img: softwareImage,
    title: "Software Engineering",
    description:
      "We provide complex software solutions using best engineering practices to meet your evolving business needs.",
  },
  {
    img: socialImage,
    title: "Digital Marketing",
    description:
      "Integrated marketing strategies to help you reach your target audience across multiple platforms.",
  },
  {
    img: coloringImage,
    title: "Brand Identity Design",
    description:
      "We create distinctive brand identity designs that reflect your brand's personality and set it apart in the market.",
  },
  {
    img: contentImage,
    title: "Content Production",
    description:
      "Engaging and impactful digital content that tells your brand's story and attracts your target audience.",
  },
  {
    img: responsiveImage,
    title: "Responsive Design",
    description:
      "Responsive designs that work efficiently on all devices and screens, providing a seamless user experience.",
  },
];
