export interface TeamMember {
  id: number
  name: string
  position: string
  image?: string 
  bio: string
  email?: string
  linkedin?: string
}

export const leadershipTeam: TeamMember[] = [
  {
    id: 1,
    name: 'Cephas T. Bushuyu',
    position: 'Managing Director',
    image: '/img/team/cephas-bushuyu.jfif',
    bio: 'Cephas brings over 15 years of experience in ICT strategy, business development, and enterprise technology implementation. He leads SCINTL\'s vision of delivering world-class technology solutions that transform businesses and communities across Africa.',
    email: 'cephas@scintl.co.ug',
    linkedin: 'https://www.linkedin.com/in/cephas-t-bushuyu-175a783b'
  },
  {
    id: 2,
    name: 'Micheal Nsereko',
    position: 'Director of Operations',
    image: '/img/team/micheal-nsereko.jfif',
    bio: 'Micheal oversees SCINTL\'s day-to-day operations, ensuring seamless delivery of technology solutions across all projects. With a strong background in operations management and process optimization, he drives operational excellence and efficiency across the organization.',
    email: 'mnsereko@scintl.co.ug',
    linkedin: 'https://www.linkedin.com/in/michael-nsereko-084231143/'
  },
  {
    id: 3,
    name: 'Edwin Rugoogamu',
    position: 'DevOps Engineer',
    image: '/img/team/edwin-rugoogamu.jfif',
    bio: 'Edwin is a skilled DevOps Engineer specializing in cloud infrastructure, CI/CD pipelines, and system automation. He ensures that SCINTL\'s solutions are deployed reliably, scaled efficiently, and maintained with the highest standards of security and performance.',
    email: 'erugoogamu@scintl.co.ug',
    linkedin: 'https://www.linkedin.com/in/edwin-rugoogamu-906424244/'
  },
  {
    id: 4,
    name: 'Amani Tindyebwa',
    position: 'Business Development Manager',
    image: '/img/team/amani-tindyebwa.jfif',
    bio: 'Amani is a seasoned business development professional with a passion for building strategic partnerships and driving growth. He manages SCINTL\'s client relationships and ensures that every project delivers measurable value.',
    email: 'atindyebwa@scintl.co.ug',
    linkedin: 'https://www.linkedin.com/in/amanit/'
  },
  {
    id: 5,
    name: 'Portia Akakisiima',
    position: 'IT and Business Support',
    image: '/img/team/portia-akakisiima.jfif',
    bio: 'Portia is a dedicated IT and business support professional who ensures seamless technology operations and business processes. She provides critical support across all departments, enabling the team to deliver efficient and effective solutions.',
    email: 'pakakisiima@scintl.co.ug',
    linkedin: 'https://www.linkedin.com/in/portia-akakisiima-7b8671220/'
  },
  {
    id: 6,
    name: 'Evelyn Namuyomba',
    position: 'Procurement and Administration Officer',
    image: '/img/team/evelyn-namuyomba.png',
    bio: 'Evelyn manages SCINTL\'s procurement and administrative functions, ensuring smooth day-to-day operations. With a keen eye for detail and strong organizational skills, she oversees vendor relationships, supply chain management, and office administration.',
    email: 'enamuyomba@scintl.co.ug',
    linkedin: 'https://www.linkedin.com/in/evelyn-namuyomba-9006a01a5'
  },
]


export const useLeadershipTeam = () => {
  return {
    team: leadershipTeam,
    getTeamMember: (id: number) => leadershipTeam.find(member => member.id === id),
    getTeamSize: () => leadershipTeam.length,
  }
}