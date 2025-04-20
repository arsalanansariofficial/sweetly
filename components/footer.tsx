import * as Brands from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="p-4">
      <div className="container mx-auto space-y-4 sm:flex sm:items-center sm:justify-between sm:gap-2 sm:space-y-0">
        <ul className="mx-auto flex max-w-fit gap-2 sm:order-1 sm:mx-0 sm:max-w-none">
          <li className="h-4 w-4">
            <a
              title="Email"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
              href="mailto:theansaricompany@gmail.com?subject=Mail%20To%20Arsalan%20Ansari"
            >
              <FontAwesomeIcon icon={faEnvelope} size="sm" />
            </a>
          </li>
          <li className="h-4 w-4">
            <a
              title="GitHub"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
              href="https://github.com/arsalanansariofficial/arsalanansariofficial"
            >
              <FontAwesomeIcon icon={Brands.faGithub} size="sm" />
            </a>
          </li>
          <li className="h-4 w-4">
            <a
              target="_blank"
              title="LinkedIn"
              className="text-muted-foreground hover:text-foreground"
              href="https://www.linkedin.com/in/arsalanansariofficial/"
            >
              <FontAwesomeIcon icon={Brands.faLinkedin} size="sm" />
            </a>
          </li>
          <li className="h-4 w-4">
            <a
              target="_blank"
              title="WhatsApp"
              href="https://wa.link/dnq2t8"
              className="text-muted-foreground hover:text-foreground"
            >
              <FontAwesomeIcon icon={Brands.faWhatsapp} size="sm" />
            </a>
          </li>
        </ul>
        <p className="text-muted-foreground text-center text-xs leading-5 font-light md:text-left">
          created by <b>Arsalan Ansari</b>.
        </p>
      </div>
    </footer>
  );
}
