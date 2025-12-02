import todolist from "../assets/todolist.png";
import medbay from "../assets/medbay.png";
import logo from "../assets/logo.png";


const projects = [
  {
    id: "medbay",
    title: "MedBay",
    category: "Full-Stack",
    desc: "MedBay — find doctors, book appointments, and manage doctors. Admin CRUD for doctors & bookings.",
    tags: ["React", "Node", "Booking"],
    image: medbay, 
    live: "https://medbayby-ag.vercel.app/",
    github: "https://github.com/Adwin-George/medbay.git",
    detail1: "Doctor directory with filtering and booking.",
    detail2: "Admin panel to add/remove doctors and manage appointments."
  },
  {
    id: "todolist",
    title: "TodoList PWA",
    category: "PWA",
    desc: "Offline-capable Todo app with alarm settings, calendar integration and native notifications.",
    tags: ["PWA", "Service Worker", "Notifications"],
    image: todolist,
    live: "https://todolistbyadwingeorge.netlify.app/",
    github: "https://github.com/Adwin-George/ToDoList-web-app.git",
    detail1: "Works offline and syncs on reconnect.",
    detail2: "Reminders, calendar, and notification support."
  },
  {
    id: "pdftranslator",
    title: "PDF Translator",
    category: "Tools",
    desc: "PDF Translator — translate whole PDFs preserving layout. (Work in progress.)",
    tags: ["PDF", "i18n"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
    live: null,
    github: null,
    status: "WIP",
    detail1: "Preserves layout and fonts when translating.",
    detail2: "Export translated PDFs."
  },
  {
    id: "portfolio",
    title: "Portfolio Website (This site)",
    category: "Frontend",
    desc: "This portfolio — built with Vite, React and Tailwind. Clean, responsive and extensible.",
    tags: ["React", "Vite", "Tailwind"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
    live: null,
    github: null,
    detail1: "Dark & light mode, project modals and resume download."
  }
];

export default projects;
