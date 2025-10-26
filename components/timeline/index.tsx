import { School } from "../ui/icons";
import { Content } from "./_components/Content";
import { forwardRef } from "react";

export const Timeline = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="w-[90%] max-w-[1250px] mx-auto py-20"
      id="education"
    >
      <div className="">
        <h2 className="heading-3 font-normal mb-16 text-center text-neutral-800 dark:text-neutral-200">
          Certificaciones
        </h2>

        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <div className="border-2 border-blue-800 bg-gradient-to-tr from-blue-900 to-blue-500 rounded-full p-2">
                <School height={24} width={24} color="#ffffff" />
              </div>
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </div>
            <Content
              year="2025"
              title="Curso de Iniciación al Desarrollo con IA"
              institution="BIG School"
              description="En este curso aprendí a utilizar NotebookLM para alimentar modelos de inteligencia artificial. También profundicé en la ingeniería de prompts, la integración avanzada de herramientas, la implementación de buenas prácticas de seguridad y auditoría, además de explorar el uso de n8n para automatizar flujos de trabajo de manera eficiente."
              url="https://drive.google.com/file/d/1-dCdNxa6NywMxT4WctUqamVKOwxhP6Bi/view?usp=sharing"
            />
            <hr className="bg-blue-800" />
          </li>

          <li>
            <hr className="bg-blue-800" />
            <div className="timeline-middle">
              <div className="border-2 border-blue-800 bg-gradient-to-tr from-blue-900 to-blue-500 rounded-full p-2">
                <School height={24} width={24} color={"#ffffff"} />
              </div>
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </div>
            <Content
              year="2024"
              title="Typescript Esencial"
              institution="Linkedin Learning - Remoto"
              description="En este curso, aprendí los fundamentos y conceptos avanzados de TypeScript. Abarcamos desde la configuración de herramientas y la integración de TypeScript en aplicaciones, hasta el uso de tipos avanzados, clases, genéricos y utilidades. También adquirí habilidades en la configuración del compilador, ESLint, y la implementación de interfaces y clases abstractas. Este conocimiento me permite escribir código más seguro, legible y fácil de mantener."
              url="https://www.linkedin.com/learning/certificates/648b258b58e0ebe7d2a99b69585b03cf4eeed8e81588f9437e29416be50870ed?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BXGfzqLSWTLS5giqmdSedUA%3D%3D"
            />

            <hr className="bg-blue-800" />
          </li>

          <li>
            <hr className="bg-blue-800" />
            <div className="timeline-middle">
              <div className="border-2 border-blue-800 bg-gradient-to-tr from-blue-900 to-blue-500 rounded-full p-2">
                <School height={24} width={24} color={"#ffffff"} />
              </div>
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </div>
            <Content
              year="2024"
              title="Figma Design"
              institution="Desafío Latam - Remoto"
              description="En este curso, aprendí a utilizar Figma para la creación y diseño de interfaces de usuario. Adquirí habilidades en la construcción de prototipos interactivos, la colaboración en tiempo real y la aplicación de principios de diseño visual para desarrollar interfaces atractivas y funcionales."
              url="https://cursos.desafiolatam.com/certificates/g8fvpwkd2f"
            />

            <hr className="bg-blue-800" />
          </li>

          <li>
            <hr className="bg-blue-800" />
            <div className="timeline-middle">
              <div className="border-2 border-blue-800 bg-gradient-to-tr from-blue-900 to-blue-500 rounded-full p-2">
                <School height={24} width={24} color={"#ffffff"} />
              </div>
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </div>
            <Content
              year="2024"
              title="CSS Avanzado"
              institution="Desafío Latam - Remoto"
              description="En este curso, reforcé conceptos previamente adquiridos como el uso de Flexbox, Grid, transiciones y animaciones. Aprendí a utilizar estas herramientas de CSS para crear diseños web más flexibles y dinámicos, mejorando la estética y la funcionalidad de las interfaces de usuario."
              url="https://cursos.desafiolatam.com/certificates/pbywfvioj4"
            />

            <hr className="bg-blue-800" />
          </li>
          <li>
            <hr className="bg-blue-800" />
            <div className="timeline-middle">
              <div className="border-2 border-blue-800 bg-gradient-to-tr from-blue-900 to-blue-500 rounded-full p-2">
                <School height={24} width={24} color={"#ffffff"} />
              </div>
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </div>
            <Content
              year="2023 - 2024"
              title="Fullstack Developer Bootcamp, Henry"
              institution="Soy Henry - Remoto"
              description="En el bootcamp Soy Henry, tuve la oportunidad de aprender y trabajar con tecnologías modernas como Redux, React, Express, Sequelize y PostgreSQL. Durante el curso, desarrollé habilidades en la construcción de aplicaciones web completas, tanto en el frontend como en el backend, adquiriendo experiencia en la creación de interfaces de usuario interactivas, gestión del estado de la aplicación, desarrollo de APIs RESTful y manejo de bases de datos relacionales."
              url="https://drive.google.com/file/d/1hDSqnfZ_llRaZjaA30NxB7oxsPCbGsRs/view"
            />

            <hr className="bg-blue-600" />
          </li>

          <li>
            <hr className="bg-blue-800" />
            <div className="timeline-middle">
              <div className="border-2 border-blue-800 bg-gradient-to-tr from-blue-900 to-blue-500 rounded-full p-2">
                <School height={24} width={24} color={"#ffffff"} />
              </div>
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </div>
            <Content
              year="2022"
              title="Alemán A2"
              institution="Universidad Nacional de La Rioja"
              description="Durante el curso de Alemán A2, adquirí habilidades fundamentales en la lengua alemana, incluyendo gramática básica, vocabulario esencial, y habilidades conversacionales. Este curso me permitió mejorar mi capacidad para comunicarme en alemán en situaciones cotidianas."
              url="https://drive.google.com/file/d/1JHJeWuqUm1NzCtJ9DaGoJfEXXMC7MfSW/view?usp=sharing"
            />

            <hr className="bg-blue-800" />
          </li>

          <li>
            <hr className="bg-blue-800" />
            <div className="timeline-middle">
              <div className="border-2 border-blue-800 bg-gradient-to-tr from-blue-900 to-blue-500 rounded-full p-2">
                <School height={24} width={24} color={"#ffffff"} />
              </div>
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </div>
            <Content
              year="2022"
              title="Maquetación de sitios web dinámicos con Javascript y jQuery
                desde cero"
              institution="Crehana - Remoto"
              description="En este curso, aprendí a maquetar sitios web utilizando JavaScript y jQuery para crear diseños responsivos. Adquirí habilidades en la implementación de interfaces de usuario interactivas y dinámicas, así como en la optimización de sitios web para diversos dispositivos y tamaños de pantalla."
              url="https://s3.amazonaws.com/public-lessons.crehana.com/images/certificate/participation-pdf/9f26c0ad/3486e01c.pdf?source_page=User%20Dashboard&source_detail=Diploma%20Card"
            />

            <hr className="bg-blue-800" />
          </li>
          <li>
            <hr className="bg-blue-800" />
            <div className="timeline-middle">
              <div className="border-2 border-blue-800 bg-gradient-to-tr from-blue-900 to-blue-500 rounded-full p-2">
                <School height={24} width={24} color={"#ffffff"} />
              </div>
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </div>
            <Content
              year="2022"
              title="PHP 8 y MYSQL: El Curso Completo, Práctico y Desde Cero"
              institution="Udemy - Remoto"
              description="Durante este curso, aprendí sobre bases de datos con MySQL y PhpMyAdmin. Adquirí conocimientos fundamentales sobre la creación, gestión y optimización de bases de datos, así como habilidades prácticas en la implementación y administración de bases de datos utilizando MySQL y la interfaz de PhpMyAdmin."
              url="https://udemy-certificate.s3.amazonaws.com/pdf/UC-9e30cf9d-c055-4b00-8200-e562a44636cf.pdf"
            />

            <hr className="bg-blue-800" />
          </li>

          <li>
            <hr className="bg-blue-800" />
            <div className="timeline-middle">
              <div className="border-2 border-blue-800 bg-gradient-to-tr from-blue-900 to-blue-500 rounded-full p-2">
                <School height={24} width={24} color={"#ffffff"} />
              </div>
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </div>
            <Content
              year="2021"
              title="Alemán A1"
              institution="Universidad Nacional de La Rioja"
              description="Durante el curso de Alemán A1, adquirí conocimientos básicos de la lengua alemana, incluyendo la gramática elemental, el vocabulario inicial y las habilidades básicas de comprensión y expresión oral. Este curso me proporcionó una base sólida para el aprendizaje continuo del idioma."
              url="https://drive.google.com/file/d/1YNxNgE2wgyNYk2f2KK35EcaLhxQP_OjJ/view?usp=sharing"
            />

            <hr className="bg-blue-800" />
          </li>

          <li>
            <hr className="bg-blue-800" />
            <div className="timeline-middle">
              <div className="border-blue-800 border-2 bg-gradient-to-tr from-blue-900 to-blue-500 rounded-full p-2">
                <School height={24} width={24} color={"#ffffff"} />
              </div>
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </div>
            <Content
              year="2018 - 2021"
              title="Diseño y Producción Multimedia"
              institution="Universidad Nacional de La Rioja (Sin terminar)"
              description="Estudié durante varios años la carrera de diseño y producción multimedia en la UNLAR. Durante este tiempo, adquirí una amplia gama de conocimientos, que incluyen la teoría del diseño, así como habilidades prácticas en HTML, CSS, base de datos y PHP. Este programa de estudios me proporcionó una comprensión sólida de los fundamentos del diseño multimedia y me permitió desarrollar habilidades técnicas en diversas áreas relacionadas con la producción de contenido digital."
              url="Ver Certificado"
              active={false}
            />
          </li>
        </ul>
      </div>
    </section>
  );
});
