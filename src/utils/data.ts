export const pages: { title: string; icon: string }[] = [
  {
    title: "About",
    icon: "👨‍💻",
  },
  {
    title: "Project",
    icon: "📁",
  },
  {
    title: "Mood",
    icon: "🫠",
  },
  {
    title: "Resource",
    icon: "⬇️",
  },
];

export const about: {
  name: string;
  role: string;
  about: string[];
  experience: string[];
  education: { title: string; gpa: string; period: string }[];
  certification: {
    title: string;
    category: string;
    issued: string;
    image: string;
  }[];
  organizations: { title: string; by: string; period: string }[];
  social: { url: string; icon: string; title: string }[];
} = {
  name: "Muhammad Fadhil Kholaf",
  role: "Front-end Developer",
  about: [
    "A student who has a big dream to be part of the world's technology development. Most of the time is spent in the field of Front-end web development and is currently studying at Telkom Vocational High School Malang.",
    "Born in Tulungagung Regency, September 3, 2006. Love to learn something new either about technology or anything else. Hobbies are jogging, running, and listening to music.",
  ],
  experience: ["Front-end developer intern at PT. Ina Gata Persada"],
  education: [
    {
      title: "Telkom Vocational High School Malang",
      gpa: "92 / 100",
      period: "2022 - Present",
    },
    {
      title: "MTsN 1 Tulungagung",
      gpa: "83 / 100",
      period: "2019 - 2022",
    },
  ],
  certification: [
    {
      title: "SEFEST 2024 Runner Up",
      category: "Web Development",
      issued: "2024",
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQEwAXI1_SNjOw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1724863015567?e=1727078400&v=beta&t=WlRQ7ZT99q-NTx8xTdQAMhclWGc5_NqJ9qZ1CvrsuBw",
    },
    {
      title: "IT Specialist - Javascript",
      category: "Javascript",
      issued: "2024",
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQEiqtd23iEVtg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1724862915445?e=1727082000&v=beta&t=vRgGJrCfTZBqv0mzOazk9tU_3vjiSrf-kPrARZVy06Q",
    },
    {
      title: "Problem Solving Basic",
      category: "Problem Solving",
      issued: "2024",
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQHAfHz2ZHt77A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1724863460531?e=1727110800&v=beta&t=7diGF45EAxHKNXDP0UoQvcJZ6rkp3z38lSnthZ8WbM4",
    },
  ],
  organizations: [
    {
      title: "Moklet Developer",
      by: "SMK Telkom Malang",
      period: "2024 - Present",
    },
    {
      title: "METIC",
      by: "SMK Telkom Malang",
      period: "2022 - Present",
    },
  ],
  social: [
    {
      url: "https://www.instagram.com/fadhilkholaf",
      icon: "/image/icon/social/instagram.svg",
      title: "Instagram",
    },
    {
      url: "https://www.linkedin.com/in/fadhilkholaf",
      icon: "/image/icon/social/linkedin.svg",
      title: "LinkedIn",
    },
  ],
};
