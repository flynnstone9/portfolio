import Link from "next/link";

export const CONTACT = {
  email: "connormflynn@gmail.com",
  // github: "https://github.com/connor-flynn",
  linkedin: "https://www.linkedin.com/in/conflynn/",
  // twitter: "https://twitter.com/connor_flynn",
};

export const SITE_INFO = {
  name: "Connor Flynn",
  title: "Interactive Developer & Designer",
  description:
    "Engineering leader at Apple specializing in developer experiences and product strategy. I lead cross-functional initiatives from concept to launch, working across design, engineering, and marketing to deliver high-impact features for Apple's global developer community.",
  url: "https://connorf.com",
};

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "/CFlynn-Resume.pdf", target: "_blank" },
];

export const WORK_EXPERIENCE = [
  {
    id: 1,
    title: "Senior Interactive Developer",
    company: "Apple Developer",
    description: "Worldwide Developer Relations (WWDR)",
    dates: "2020—Present",
    isCurrent: true,
    tags: ["DevRel", "Frontend", "Design"],
    logos: ["/images/logos/logo-apple.png"],
    link: "https://developer.apple.com/",
  },
  {
    id: 2,
    title: "Interactive Developer",
    company: "FiveM (Acquired by Rockstar Games)",
    description: "Modding Platform for GTA V",
    dates: "2020—2020",
    tags: ["Gaming", "Frontend", "DevRel"],
    logos: ["/images/logos/logo-rockstar.png", "/images/logos/logo-cfx.png"],
    link: "https://www.rockstargames.com/newswire/article/8971o8789584a4/roleplay-community-update",
  },
  {
    id: 3,
    title: "UX Developer",
    company: "Carhartt",
    description: "Outerwear Apparel Company",
    dates: "2019—2020",
    tags: ["Branding", "Frontend", "Design"],
    logos: ["/images/logos/logo-carhartt.png"],
    link: "https://companygear.carhartt.com/",
  },
  {
    id: 4,
    title: "Design Partner",
    company: "Joey Pecoraro Music",
    description: "Lo-fi Hip Hop Artist",
    dates: "2017—2019",
    tags: ["Album Art", "Videography", "Design"],
    logos: ["/images/logos/logo-jp-b.png"],
    link: "https://open.spotify.com/artist/44insiIQApkRaCMIbuaISJ",
  },
  {
    id: 5,
    title: "Publisher Certification Specialist",
    company: "Flashtalking (Acquired by Mediaocean)",
    description: "Ad Serving, Measuring and Technology Company",
    dates: "2016—2017",
    tags: ["Advertising", "Ad Server", "QA"],
    logos: [
      "/images/logos/logo-mediaocean.png",
      "/images/logos/logo-flashtalking.png",
    ],
    link: "https://www.mediaocean.com/flashtalking-acquisition",
  },
];

export const PROJECTS = [
  {
    id: "apple",
    title: "Apple",
    subtitle: "Developer",
    role: "Senior Interactive Developer",
    dates: "2020–Present",
    description:
      "Building high-visibility experiences and developer tools for Apple's developer ecosystem. Leading interactive development for global campaigns and platform features.",
    images: [
      {
        src: "/images/apple/apple-web-home.jpg",
      },
      {
        src: "/images/apple/apple-web-lg.jpg",
        caption: "Liquid Glass events campaign",
      },
      {
        src: "/images/apple/apple-web-ada.jpg",
        caption: "Apple Design Awards web experience",
      },
      {
        src: "/images/apple/apple-web-ssc.jpg",
        caption: "Swift Student Challenge website",
        link: "https://developer.apple.com/swift-student-challenge/",
      },
    ],
    link: "https://developer.apple.com/",
    layout: [{ span: 12 }, { span: 12 }, { span: 12 }, { span: 12 }],
  },
  {
    id: "carhartt",
    title: "Carhartt",
    subtitle: "Company Gear",
    role: "UX Developer",
    dates: "2019–2020",
    description:
      "Designed and developed a B2B e-commerce platform for Carhartt's corporate apparel division. Built a seamless shopping experience for businesses to order branded workwear and company gear with custom embroidery and decoration options.",
    images: [
      {
        src: "/images/carhartt/carhartt-web-a.jpg",
        caption: "Launched the Company Gear website",
      },

      {
        src: "/images/carhartt/carhartt-web-b.jpg",
      },
    ],
    link: "https://companygear.carhartt.com/",
    layout: [{ span: 12 }, { span: 12 }],
  },
  {
    id: "jp",
    title: "Joey Pecoraro",
    subtitle: "Joey Pecoraro",
    role: "Design Partner",
    description:
      "Creative partner for lo-fi hip hop artist Joey Pecoraro. Designed album artwork, created music videos, and developed visual identity across streaming platforms and social media.",
    images: [
      {
        src: "/images/joeypecoraro/vfb.jpg",
        caption: "Tired Boy album cover",
      },
      {
        src: "/images/joeypecoraro/3.jpg",
        caption: "Album promotional posters",
      },
      {
        src: "/images/joeypecoraro/4.2.jpg",
      },
      {
        src: "/images/joeypecoraro/6.jpg",
      },
      {
        src: "/images/joeypecoraro/7.jpg",
      },
    ],
    // link: "https://open.spotify.com/artist/44insiIQApkRaCMIbuaISJ",
    hideTitle: true,
    layout: [{ span: 12 }, { span: 6 }, { span: 6 }, { span: 6 }, { span: 6 }],
  },
  // {
  //   id: "misc",
  //   title: "Miscellaneous Projects",
  //   subtitle: "Misc",
  //   description:
  //     "Various smaller projects including web apps, interactive experiments, and design work.",
  //   images: [
  //     "/images/lomuse/lomuse-web-a.jpg",
  //     "/images/lomuse/lomuse-web-b.jpg",
  //   ],

  //   hideTitle: true,
  // },
];
