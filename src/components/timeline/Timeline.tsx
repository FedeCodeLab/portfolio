import { School } from "../ui/icons";
import { ExpandableText } from "./_components/ExpandableText";

export default function Timeline() {
  return (
    <section
      className="dark:bg-transparent py-16 dark:text-white"
      id="education"
    >
      <div className="w-11/12 xl:w-4/5 mx-auto">
        <div className="">
          <h2 className="text-4xl font-normal mb-16 text-center text-neutral-800 dark:text-neutral-200">
            Certificaciones
          </h2>

          <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <div className="border-2 border-blue-600 rounded-full p-2">
                  <School height={24} width={24} color="#ffffff" />
                </div>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </div>
              <div className="timeline-end mb-10 pl-2 flex flex-col gap-1">
                <p className="text-sm">2024</p>
                <h4 className="text-lg font-medium">Typescript Esencial</h4>
                <p>Linkedin Learning - Remoto</p>
                <ExpandableText text="En este curso, aprendí los fundamentos y conceptos avanzados de TypeScript. Abarcamos desde la configuración de herramientas y la integración de TypeScript en aplicaciones, hasta el uso de tipos avanzados, clases, genéricos y utilidades. También adquirí habilidades en la configuración del compilador, ESLint, y la implementación de interfaces y clases abstractas. Este conocimiento me permite escribir código más seguro, legible y fácil de mantener." />
                <a
                  target="_blank"
                  href="https://www.linkedin.com/learning/certificates/648b258b58e0ebe7d2a99b69585b03cf4eeed8e81588f9437e29416be50870ed?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BXGfzqLSWTLS5giqmdSedUA%3D%3D"
                  className="bg-blue-800 text-center max-w-36 text-sm px-2 py-3 rounded-3xl mt-2 hover:bg-blue-900 transition text-white"
                >
                  Ver Certificado
                </a>
              </div>
              <hr className="bg-blue-600" />
            </li>

            <li>
              <hr className="bg-blue-600" />
              <div className="timeline-middle">
                <div className="border-2 border-blue-600 rounded-full p-2">
                  <School height={24} width={24} color={"#ffffff"} />
                </div>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </div>
              <div className="timeline-end mb-10 pl-2 flex flex-col gap-1">
                <p className="text-sm">2024</p>
                <h4 className="text-lg font-medium">Figma Design</h4>
                <p>Desafío Latam - Remoto</p>
                <ExpandableText text="En este curso, aprendí a utilizar Figma para la creación y diseño de interfaces de usuario. Adquirí habilidades en la construcción de prototipos interactivos, la colaboración en tiempo real y la aplicación de principios de diseño visual para desarrollar interfaces atractivas y funcionales." />
                <a
                  target="_blank"
                  href="https://cursos.desafiolatam.com/certificates/g8fvpwkd2f"
                  className="bg-blue-800 text-center max-w-36 text-sm px-2 py-3 rounded-3xl mt-2 hover:bg-blue-900 transition text-white"
                >
                  Ver Certificado
                </a>
              </div>
              <hr className="bg-blue-600" />
            </li>

            <li>
              <hr className="bg-blue-600" />
              <div className="timeline-middle">
                <div className="border-2 border-blue-600 rounded-full p-2">
                  <School height={24} width={24} color={"#ffffff"} />
                </div>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </div>
              <div className="timeline-end mb-10 pl-2 flex flex-col gap-1">
                <p className="text-sm">2024</p>
                <h4 className="text-lg font-medium">CSS Avanzado</h4>
                <p>Desafío Latam - Remoto</p>
                <ExpandableText text="En este curso, reforcé conceptos previamente adquiridos como el uso de Flexbox, Grid, transiciones y animaciones. Aprendí a utilizar estas herramientas de CSS para crear diseños web más flexibles y dinámicos, mejorando la estética y la funcionalidad de las interfaces de usuario." />
                <a
                  target="_blank"
                  href="https://cursos.desafiolatam.com/certificates/pbywfvioj4"
                  className="bg-blue-800 text-center max-w-36 text-sm px-2 py-3 rounded-3xl mt-2 hover:bg-blue-900 transition text-white"
                >
                  Ver Certificado
                </a>
              </div>
              <hr className="bg-blue-600" />
            </li>
            <li>
              <hr className="bg-blue-600" />
              <div className="timeline-middle">
                <div className="border-2 border-blue-600 rounded-full p-2">
                  <School height={24} width={24} color={"#ffffff"} />
                </div>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </div>
              <div className="timeline-end mb-10 pl-2 flex flex-col gap-1">
                <p className="text-sm">2023 - 2024</p>
                <h4 className="text-lg font-medium">
                  Fullstack Developer Bootcamp, Henry
                </h4>
                <p>Soy Henry - Remoto</p>
                <ExpandableText text="En el bootcamp Soy Henry, tuve la oportunidad de aprender y trabajar con tecnologías modernas como Redux, React, Express, Sequelize y PostgreSQL. Durante el curso, desarrollé habilidades en la construcción de aplicaciones web completas, tanto en el frontend como en el backend, adquiriendo experiencia en la creación de interfaces de usuario interactivas, gestión del estado de la aplicación, desarrollo de APIs RESTful y manejo de bases de datos relacionales." />
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1hDSqnfZ_llRaZjaA30NxB7oxsPCbGsRs/view"
                  className="bg-blue-800 text-center max-w-36 text-sm px-2 py-3 rounded-3xl mt-2 hover:bg-blue-900 transition text-white"
                >
                  Ver Certificado
                </a>
              </div>
              <hr className="bg-blue-600" />
            </li>

            <li>
              <hr className="bg-blue-600" />
              <div className="timeline-middle">
                <div className="border-2 border-blue-600 rounded-full p-2">
                  <School height={24} width={24} color={"#ffffff"} />
                </div>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </div>
              <div className="timeline-end mb-10 pl-2 flex flex-col gap-1">
                <p className="text-sm">2022</p>
                <h4 className="text-lg font-medium">Alemán A2</h4>
                <p>Universidad Nacional de La Rioja</p>
                <ExpandableText
                  text="Durante el curso de Alemán A2, adquirí habilidades
                  fundamentales en la lengua alemana, incluyendo gramática
                  básica, vocabulario esencial, y habilidades conversacionales.
                  Este curso me permitió mejorar mi capacidad para comunicarme
                  en alemán en situaciones cotidianas."
                />
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1JHJeWuqUm1NzCtJ9DaGoJfEXXMC7MfSW/view?usp=sharing"
                  className="bg-blue-800 text-center max-w-36 text-sm px-2 py-3 rounded-3xl mt-2 hover:bg-blue-900 transition text-white"
                >
                  Ver Certificado
                </a>
              </div>
              <hr className="bg-blue-600" />
            </li>

            <li>
              <hr className="bg-blue-600" />
              <div className="timeline-middle">
                <div className="border-2 border-blue-600 rounded-full p-2">
                  <School height={24} width={24} color={"#ffffff"} />
                </div>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </div>
              <div className="timeline-end mb-10 pl-2 flex flex-col gap-1">
                <p className="text-sm">2022</p>
                <h4 className="text-lg font-medium">
                  Maquetación de sitios web dinámicos con Javascript y jQuery
                  desde cero
                </h4>
                <p>Crehana - Remoto</p>
                <ExpandableText
                  text="En este curso, aprendí a maquetar sitios web utilizando
                  JavaScript y jQuery para crear diseños responsivos. Adquirí
                  habilidades en la implementación de interfaces de usuario
                  interactivas y dinámicas, así como en la optimización de
                  sitios web para diversos dispositivos y tamaños de pantalla."
                />
                <a
                  target="_blank"
                  href="https://s3.amazonaws.com/public-lessons.crehana.com/images/certificate/participation-pdf/9f26c0ad/3486e01c.pdf?source_page=User%20Dashboard&source_detail=Diploma%20Card"
                  className="bg-blue-800 text-center max-w-36 text-sm px-2 py-3 rounded-3xl mt-2 hover:bg-blue-900 transition text-white"
                >
                  Ver Certificado
                </a>
              </div>
              <hr className="bg-blue-600" />
            </li>
            <li>
              <hr className="bg-blue-600" />
              <div className="timeline-middle">
                <div className="border-2 border-blue-600 rounded-full p-2">
                  <School height={24} width={24} color={"#ffffff"} />
                </div>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </div>
              <div className="timeline-end mb-10 pl-2 flex flex-col gap-1">
                <p className="text-sm">2022</p>
                <h4 className="text-lg font-medium">
                  PHP 8 y MYSQL: El Curso Completo, Práctico y Desde Cero
                </h4>
                <p>Udemy - Remoto</p>
                <ExpandableText
                  text="Durante este curso, aprendí sobre bases de datos con MySQL y
                  PhpMyAdmin. Adquirí conocimientos fundamentales sobre la
                  creación, gestión y optimización de bases de datos, así como
                  habilidades prácticas en la implementación y administración de
                  bases de datos utilizando MySQL y la interfaz de PhpMyAdmin."
                />
                <a
                  target="_blank"
                  href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-9e30cf9d-c055-4b00-8200-e562a44636cf.pdf"
                  className="bg-blue-800 text-center max-w-36 text-sm px-2 py-3 rounded-3xl mt-2 hover:bg-blue-900 transition text-white"
                >
                  Ver Certificado
                </a>
              </div>

              <hr className="bg-blue-600" />
            </li>

            <li>
              <hr className="bg-blue-600" />
              <div className="timeline-middle">
                <div className="border-2 border-blue-600 rounded-full p-2">
                  <School height={24} width={24} color={"#ffffff"} />
                </div>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </div>
              <div className="timeline-end mb-10 pl-2 flex flex-col gap-1">
                <p className="text-sm">2021</p>
                <h4 className="text-lg font-medium">Alemán A1</h4>
                <p>Universidad Nacional de La Rioja</p>
                <ExpandableText
                  text="Durante el curso de Alemán A1, adquirí conocimientos básicos
                  de la lengua alemana, incluyendo la gramática elemental, el
                  vocabulario inicial y las habilidades básicas de comprensión y
                  expresión oral. Este curso me proporcionó una base sólida para
                  el aprendizaje continuo del idioma."
                />
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1YNxNgE2wgyNYk2f2KK35EcaLhxQP_OjJ/view?usp=sharing"
                  className="bg-blue-800 text-center max-w-36 text-sm px-2 py-3 rounded-3xl mt-2 hover:bg-blue-900 transition text-white"
                >
                  Ver Certificado
                </a>
              </div>
              <hr className="bg-blue-600" />
            </li>

            <li>
              <hr className="bg-blue-600" />
              <div className="timeline-middle">
                <div className="border-blue-600 border-2 rounded-full p-2">
                  <School height={24} width={24} color={"#ffffff"} />
                </div>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </div>
              <div className="timeline-end mb-10 pl-2 flex flex-col gap-1">
                <p className="text-sm">2018 - 2021</p>
                <h4 className="text-lg font-medium">
                  Diseño y Producción Multimedia
                </h4>
                <p>Universidad Nacional de La Rioja (Sin terminar)</p>
                <ExpandableText text="Estudié durante varios años la carrera de diseño y producción multimedia en la UNLAR. Durante este tiempo, adquirí una amplia gama de conocimientos, que incluyen la teoría del diseño, así como habilidades prácticas en HTML, CSS, base de datos y PHP. Este programa de estudios me proporcionó una comprensión sólida de los fundamentos del diseño multimedia y me permitió desarrollar habilidades técnicas en diversas áreas relacionadas con la producción de contenido digital." />
                <p className="bg-gray-400 text-center max-w-36 text-sm px-2 py-3 rounded-3xl mt-2 cursor-not-allowed transition text-white">
                  Ver Certificado
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
