type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

/*
type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}
*/

type SocialLink = {
  label: string
  link: string
}

type AcademicLink = {
  name: string
  description: string
  link: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Spectral Recovery of a Planted Clique',
    description: 'Can one find a planted clique in a network? An empirical study of the algorithm of Alon et al. (1998).',
    link: '/projects/planted-clique',
    video: '/videos/Graph_Cycling_Animation.mp4',
    id: 'project1',
  },
  {
    name: 'Stock Price Forecasting',
    description: 'Comparing LSTM neural networks, sliding-window linear regression, and a naïve baseline using time-series cross-validation. A collaborative Erdős Institute project.',
    link: 'https://github.com/Ajay-Aryan/Stock_Price_Prediction',
    id: 'project2',
  },
  /*
  {
    name: 'Project 3',
    description: 'Description 3',
    link: '/projects/project-3',
    video: '/videos/project3.mp4',
    id: 'project3',
  },
  {
    name: 'Project 3',
    description: 'Description 3',
    link: '/projects/project-3',
    video: '/videos/project3.mp4',
    id: 'project3',
  },
  */
]

export const ACADEMIC_LINKS: AcademicLink[] = [
  {
    name: 'Research',
    description: 'Research interests, talks, seminars, and academic projects.',
    link: '/research',
    id: 'academic1',
  },
  {
    name: 'Teaching and Tutoring',
    description: "Here you'll find my teaching CV. Students interested in my tutoring services can find resources here as well.",
    link: '/teaching',
    id: 'academic2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Texas A&M University: Advised by Grigoris Paouris',
    title: 'Math Ph.D. Student',
    start: ' 08 2024',
    end: 'Present',
    link: 'https://sites.google.com/tamu.edu/grigoris-paouris/',
    id: 'work1',
  },
  {
    company: 'Erdős Institute',
    title: 'Data Science Student',
    start: '05 2024',
    end: '08 -2024',
    link: '',
    id: 'https://0ada4d8c-c79a-4c34-ac13-e0af292bbc99.filesusr.com/ugd/a3186f_eef58139b3a64035ba79ba399a3f75c3.pdf',
  },
  {
    company: 'University of Illinois at Chicago',
    title: 'Graduate Study in Mathematical Computer Science',
    start: '08 2023',
    end: '07 2024',
    link: 'https://mscs.uic.edu/',
    id: 'work3',
  },
   {
    company: 'Mississippi State University',
    title: 'My Alma Mater',
    start: '08 2019',
    end: '05 2023',
    link: 'https://w.msstate.edu/msu/students-lists/?list=3&semester=1&year=2023&state=all&county=all&sort=name',
    id: 'work4',
  },
     {
    company: 'Budapest Semesters in Mathematics',
    title: 'Study Abroad',
    start: '05 2022',
    end: '08 2022',
    link: 'https://budapestsemesters.com/',
    id: 'work5',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/RandomSpectra',
  },
]