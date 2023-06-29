import visualiserImage from '../images/visualiser.png';
import mattdylanImage from '../images/mattdylanfitness.png'
import autonomyImage from '../images/autonomy-co.png'
import communityImage from '../images/community-portal.png'
import chatbotImage from '../images/django.png'
import laundromaticImage from '../images/laundromatic.png'
import liveSoonImage from '../images/live-soon.png';

export const projects = [
    {
      title: 'E-Commerce Site for Matt Dylan Coaching (Live Soon)',
      description: "Using React, Node.js, Sanity and Stripe, I have developed from scratch a fully function e-commercce website for Matt Dylan coaching. The content manager has access so their own Sanity CMS service, Stripe payment desk and blog integration",
        image: mattdylanImage,
        tags: ['React', 'Sanity', 'Stripe', 'Node', 'JavaScript'],
      source: null,
      visit: 'https://mattdylan.fitness',
      id: 5,
    },
    {
      title: 'Audio Visualiser Shader',
      description: "Using ShaderToy and GLSL, through transfering skills I learned in my University Data Visualisation subject as well as learning about simple color palette vectors from a YouTube totorial, I have created this mesmirasing audio visualiser. Check out my other ShaderToy projects on my profile",
        image: visualiserImage,
        tags: ['GLSL', 'ShaderToy'],
      source: 'https://www.shadertoy.com/view/ds2yWh',
      visit: 'https://www.shadertoy.com/view/ds2yWh',
      id: 4,
    },
    {
      title: 'E-Commerce site for Autonomy Co',
      description:"Contributed to the development and maintenance of this e-commerce site, optimising the use of Shopify tools and features",
      image: autonomyImage,
      tags: ['Shopify', 'HTML', 'CSS'],
      source: null,
      visit: 'https://www.autonomyco.com.au/',
      id: 3,
    },
    {
      title: 'First live React environment for University',
      description: "This is the first ever live React environment I made. It was for my Swinburne Online assessment.",
        image: communityImage,
        tags: ['React', 'HTML', 'CSS'],
      source: 'https://github.com/globaldusk/community-portal-react',
      visit: 'https://globaldusk.github.io/community-portal-react/',
      id: 2,
    },
    {
      title: 'Web-integrated Chat-bot',
      description: "Django server used to host an html file that displays my amazon lex chatbot in tow methods",
      image: chatbotImage,
      tags: ['Python', 'Django', 'AWS', 'HTML', 'API', 'Kommunicate'],
      source: 'https://github.com/globaldusk/practicing_django',
      visit: 'https://github.com/globaldusk/practicing_django',
      id: 1,
    },
    {
      title: 'Laundromatic',
      description: "3D unity game designed by my university group for a final assessment, tower-defence style game",
      image: laundromaticImage,
      tags: ['C#', 'Adobe', 'Unity', 'Itch.io'],
      source: null,
      visit: 'https://wafflexd123.itch.io/laundromatic',
      id: 0,
    },
  ];
  
  export const TimeLineData = [
    { year: 2015, text: 'Started my journey with software development as an elective in year 8', },
    { year: 2019, text: 'Graduated from high school with Band 6 C# HSC majorwork', },
    { year: 2020, text: 'Began working as a Junior Developer', },
    { year: 2022, text: 'Became a programming tutor/teacher', },
    { year: 2023, text: 'Started my Post-Graduate Certificate of Programming and Development', },
    { year: 2023, text: 'Started my own platform', },
  ];