const { createElement } = React;


const navLinks = ['Home', 'About', 'Project', 'Certificate', 'Contact'].map(text =>
  createElement('li', {},
    createElement('a', { href: `#${text.toLowerCase()}` }, text)
  )
);


const socialLinks = [
  { href: 'https://github.com/Tanay09876', icon: 'fa-brands fa-github' },
  { href: 'https://www.linkedin.com/in/tanay-bateriwala-505627222/', icon: 'fa-brands fa-linkedin' },
  { href: 'mailto:bateriwalatanay67@gmail.com', icon: 'fa-solid fa-envelope' }
].map(({ href, icon }) =>
  createElement('a', { href, target: '_blank', className: 'icon-link' },
    createElement('i', { className: icon })
  )
);


const navbar = createElement('header', { className: 'navbar' },
  createElement('h1', { className: 'brand' }, 'Tanay'),
  createElement('nav', {},
    createElement('ul', { className: 'nav-links' }, ...navLinks)
  )
);

// Hero Section
const heroSection = createElement('section', { className: 'hero-section', id: 'home' },
  createElement('h2', {}, 'I am ',
    createElement('span', { className: 'highlight1' }, 'Tanay Bateriwala')
  ),
  createElement('p', { className: 'tagline' },
    'I am a ',
    createElement('span', { className: 'highlight1' }, 'Learner'),
    ' | ',
    createElement('span', { className: 'highlight1' }, 'Developer')
  ),
  createElement('div', { className: 'social-links' }, ...socialLinks)
);


const aboutSection = createElement('section', { className: 'section', id: 'about' },
  createElement('h2', {}, 'About Me'),
  createElement('p', {}, `Hey! I'm `,
    createElement('span', { className: 'highlight' }, 'Tanay Bateriwala'),
    ', a passionate full-stack developer and MCA student at ',
    createElement('span', { className: 'highlight' }, 'Parul University'),
    '. I hold a BCA degree from ',
    createElement('span', { className: 'highlight' }, 'Navrachana University, Vadodara'),
    ", and I'm always eager to learn new technologies and build efficient, scalable, and visually appealing web applications."
  ),
  createElement('p', {}, 'With a strong foundation in both frontend and backend technologies, I specialize in ',
    createElement('span', { className: 'highlight' }, 'HTML, CSS, JavaScript'),
    ', and ',
    createElement('span', { className: 'highlight' }, 'MySQL/MongoDB'),
    '. I enjoy working across the entire development stack to deliver seamless, user-friendly experiences.'
  ),
  createElement('p', {}, "I'm constantly exploring modern tools and frameworks, with a focus on performance, accessibility, and responsive design. My goal is to grow as a developer by building meaningful, real-world applications that make a difference."),
  createElement('div', { style: { marginTop: '30px', textAlign: 'center' } },
    createElement('a', {
      href: 'resume.pdf',
      target: '_blank',
      className: 'btn-download'
    }, 'Download Resume')
  )
);

const projectCards = [
  {
    title: 'GitHub Profile Tracker',
    demo: 'https://githubtracker-five.vercel.app/',
    github: 'https://github.com/Tanay09876/Github-profile-tracker'
  },
  {
    title: 'Employee-Management-Portal',
    demo: 'https://employeemanagement-portal.netlify.app/',
    github: 'https://github.com/Tanay09876/Employee-Management-Portal'
  },
  {
    title: 'Quiz-Generator-App',
    demo: 'https://quiz-generator-app.netlify.app/',
    github: 'https://github.com/Tanay09876/Quiz-Generator-App'
  },
    {
    title: 'Budget-Management-System',
    demo: 'https://budget-management-system-fawn.vercel.app/',
    github: 'https://github.com/Tanay09876/Budget-Management-System'
  },
     {
    title: 'Google-sheet-clone',
    demo: 'https://excel-sheet-clone-tau.vercel.app/',
    github: 'https://github.com/Tanay09876/Excel-sheet-clone'
  }

].map(({ title, demo, github }) =>
  createElement('div', { className: 'project-card' },
    createElement('h3', {}, title),
    createElement('div', { className: 'project-links' },
      createElement('a', {
        href: demo,
        target: '_blank',
        className: 'project-link',
        style: { fontSize: '16px', marginRight: '15px' }
      }, 'Live Demo'),
      createElement('a', {
        href: github,
        target: '_blank',
        className: 'project-link icon-only',
        style: { fontSize: '20px' }
      },
        createElement('i', { className: 'fab fa-github' })
      )
    )
  )
);


const projectSection = createElement('section', { className: 'section', id: 'project' },
  createElement('h2', {}, 'Projects'),
  createElement('div', { className: 'project-container' }, ...projectCards)
);


const certificateSection = createElement('section', { className: 'section', id: 'certificate' },
  createElement('h2', {}, 'Certificates'),
  createElement('div', { className: 'certificate-container' },
    createElement('div', { className: 'certificate-card' },
      createElement('h3', {}, 'Full Stack Development'),
      createElement('p', {},
        createElement('a', { href: 'https://www.udemy.com/certificate/UC-7907a949-14fd-40e4-8f28-8303ed3ef0d7/', target: '_blank' }, 'Udemy')
      )
    ),
    createElement('div', { className: 'certificate-card' },
      createElement('h3', {}, 'Agile Methodology '),
      createElement('p', {},
        createElement('a', { href: 'https://olympus.mygreatlearning.com/courses/91534/certificate?pb_id=581', target: '_blank' }, 'Great Learning')
      )
    )
  )
);


const contactSection = createElement('section', { className: 'section', id: 'contact' },
  createElement('h2', {}, 'Contact'),
  createElement('form', {
    action: 'mailto:bateriwalatanay67@gmail.com',
    method: 'POST',
    encType: 'text/plain',
    className: 'contact-form'
  },
    createElement('input', {
      type: 'text',
      name: 'name',
      placeholder: 'Your Name',
      required: true
    }),
    createElement('input', {
      type: 'email',
      name: 'email',
      placeholder: 'Your Email',
      required: true
    }),
    createElement('textarea', {
      name: 'message',
      placeholder: 'Your Message',
      required: true
    }),
    createElement('button', { type: 'submit' }, 'Send')
  )
);


const App = createElement('div', {},
  navbar,
  createElement('main', {},
    heroSection,
    aboutSection,
    projectSection,
    certificateSection,
    contactSection
  )
);

ReactDOM.render(App, document.getElementById('root'));
