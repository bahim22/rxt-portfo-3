export const ProjectList = [
    {
        title: 'React Custom Boilerplate',
        id: 0,
        subtitle: 'react-ded-boiler',
        description: 'Reactjs website with custom configuration.',
        image: '/rxtBoiler.png',
        link: 'https://github.com/bahim22/react-ded-boiler',
    },
    {
        title: 'Next.js Blog',
        id: 1,
        subtitle: 'DioNxtApp',
        description: 'Nextjs web app blog with associated custom boilerplate repo nxt-ded-boiler.',
        image: '/bg7.jpg',
        link: 'https://github.com/bahim22/DioNxtApp',
    },
    {
        title: 'Next.js TailwindCss App',
        subtitle: 'next-tail-22',
        id: 2,
        description: 'Next.js App from Vercel Template to work on building larger Apps.',
        image: '/dedIsm.jpeg',
        link: 'https://github.com/bahim22/react-portfo2',
    },
    {
        title: 'React.js Boilerplate',
        subtitle: 'react-ded-boiler',
        id: 3,
        description: 'Reusable boilerplate skeleton for React.js projects.',
        image: '/dedIsm.jpeg',
        link: 'https://github.com/bahim22/react-ded-boiler',
    },
    {
        title: 'React.js Azure Authorization',
        subtitle: 'auth-react-azure',
        id: 4,
        description: 'React App with TypeScript using Azure AD to authenticate users.',
        image: '/profile-bg.jpg',
        link: 'https://github.com/bahim22/auth-react-azure',
    },
    {
        title: 'MERN Stack',
        subtitle: 'gullo-db',
        id: 5,
        description: 'React Full stack web app with MongoDb, Mongo Client.',
        image: '/gulloDb.png',
        link: 'https://github.com/bahim22/gullo-db',
    },
    {
        title: 'Inner Sity Market',
        subtitle: 'ISMv2',
        id: 6,
        description: 'HTML, CSS, Bootstrap website for an advertising company.',
        image: '/ismHome.jpeg',
        link: 'https://github.com/bahim22/ISM',
    },
    {
        title: 'ISM-Django',
        subtitle: 'ISMv1',
        image: '/ismPython.png',
        id: 6,
        description: 'My First, Original Django web app built with Python. ',
        link: 'https://github.com/bahim22/ISM',
    },
];

export const projInfo =
    'I initially started developing Python Projects with Django.Then I transitioned to building websites with HTML and CSS3, eventually  implementing bootstrap packages with pre-built minified JavaScript for interactivity. I improved my vanilla JavaScript skills and learned ES6 and TypeScript and was able to start developing React.js and Next.js Web Apps. I was able to learn how to configure my toolchain and start building JAMstack Apps. I am currently building Full-Stack projects using multiple frameworks, libraries,and packages.';
export const ProjInfoDiv = () => {
    return (
        <main className='flex flex-col article first-letter:bold'>
            <section className='condiv'>
                I initially started developing Python Projects with Django. Then I transitioned to building websites
                with HTML and CSS3, eventually implementing bootstrap packages with pre-built minified JavaScript for
                interactivity. I improved my vanilla JavaScript skills and learned ES6 and TypeScript and was able to
                start developing React.js and Next.js Web Apps. I was able to learn how to configure my toolchain and
                start building JAMstack Apps. I am currently building Full-Stack projects using multiple frameworks,
                libraries,and packages.
            </section>
        </main>
    );
};
