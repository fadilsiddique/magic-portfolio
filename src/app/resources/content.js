import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Afnas",
  lastName: "Razak",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Visual Designer",
  avatar: "/images/avatar.jpeg",
  location: "Asia/Dubai", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["UI/UX","Branding", "Illustration","Mockups","Motion Design" ], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Behance",
    icon: "behance",
    link: "https://www.behance.net/afnastk",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/afnas-tk-7894251ba/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:afnastk53@gmail.com",
  },

  {
    name: "+971 56 850 4642",
    icon: "phone",
    link: "tel: +971 56 958 7208",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Visual Designer</>,
  subline: (
    <>
      I'm Afnas, a visual designer passionate about creating seamless and engaging user experiences. At <InlineCode>Project Roughpaper</InlineCode>I refine digital interactions with thoughtful design. Beyond work, I explore and develop my own creative projects, constantly pushing the boundaries of innovation.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        
        I'm Afnas, a Dubai-based visual engineer passionate about transforming complex challenges into simple, 
        elegant design solutions. My work spans digital interfaces, interactive experiences, 
        and the intersection of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2024 - Present",
        role: "Visual Designer",
        achievements: [
          <>
            Executed a range of design projects, including branding, UI/UX, and social media, ensuring
            visually compelling and user-focused solutions. Designed a CRM mobile app for real estate
            agents, enhancing client management, workflow efficiency, and user experience.
          </>,

        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/CRM.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      
      {
        company: "Project Roughpaper",
        timeframe: "2022 - 2024",
        role: "Senior Visual Designer",
        achievements: [
          <>
            Designed and developed branding, marketing, and digital assets for high-profile clients,including Yonex UAE, 
            LP Support, PBH, Yalla Snack, and Skyline UAE, ensuring brand consistency and market impact.
          </>,
          <>
            Created high-quality designs across print and digital platforms, enhancing brand engagement and market presence
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Uplittle",
        timeframe: "2021 - 2022",
        role: "Junior Designer",
        achievements: [
          <>
            Contributed to branding, social media creatives, and marketing materials, gaining practical
            experience in design, visual communication, and brand strategy.
          </>,
          // <>
          //   Led a cross-functional team to launch a new product line, contributing to a 15% increase
          //   in overall company revenue.
          // </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        // description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-02.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        //   {
        //     src: "/images/projects/project-01/cover-03.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Adobe Illustrator",
        // description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/gallery/yalla-4.jpg",
        //     alt: "Project image",
        //     width:30,
        //     height: 40,
        //   },
        // ],
      },
      {
        title: "Adobe Photoshop",
        // description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-04.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Adobe Premier Pro",
        // description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-04.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/London Story.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/yalla-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/yalla.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/yonex-2.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/yonex-5.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/yalla-8.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/frapino.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/upl.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/yonex-4.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Beyar.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/skyline.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/jumbo.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/bike.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/fir.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
