import isp from "../images/Projects/isp.png";
import mkReturn from "../images/Projects/mk-return.png";
const translations = {
  EN: {
    heading: "Projects",
    projects: [
      { description: "The mk:return ISP (Internal Staff Portal) is a management tool to access all possible company processes on one website. It includes functions such as email management, keeping inventory databases, shared notes, task distribution, automatic billing of commissions and much more. The whole thing is based on the MERN stack with the help of tailwindcss and headless-ui.", CoverImage: isp, name: "mk:return ISP", url: "" },
      { description: "The mk:return homepage, it consists of our 3 main topics: Cartridge recycling, ReuseMe and the gOLD-IT project, in addition there is a home page with customer applications and much more. In addition, there is also a category of the company, such as employees, etc. The site is based on the Wordpress CMS, in combination with the7 theme. The website also consists to a large extent of custom written components.", CoverImage: mkReturn, name: "mk:return Homepage", url: "https://mk-return.de" },
    ],
  },
  DE: {
    heading: "Projekte",
    projects: [
      { description: "Das mk:return ISP (Internal-Staff-Portal) ist ein management Tool um alle möglichen Firmenabläufe auf einer website abrufen zu können. Es beinhaltet funktionen wie Email-management, Führen von Invernturdatenbanken, geteilte Notizen, Aufgabenverteilung, Automatische abrechnung von Provisionen und vieles mehr. Das ganze basiert auf dem MERN-Stack mit hilfe von tailwindcss und headless-ui.", CoverImage: isp, name: "mk:return ISP", url: "" },
      { description: "Die mk:return Homepage, sie besteht aus unseren 3 Hauptthemen: Kartuschen Recyclen, ReuseMe und dem gOLD-IT Projekt, außerdem kommen dazu noch eine Startseite mit Kundenbewerbungen und vielem mehr. Dazu gibt es noch eine Kategorie der Firma, wie Mitarbeiter, etc. Die Seite basiert auf dem Wordpress CMS, in kombination mit dem the7 theme. Die website besteht allerdings auch zu großen teilen aus eigenen Custom geschriebenen Components.", CoverImage: mkReturn, name: "mk:return Homepage", url: "https://mk-return.de" },
    ],
  },
};

export default translations;
