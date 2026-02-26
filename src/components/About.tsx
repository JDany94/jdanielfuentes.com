interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
}

interface Technologies {
  [category: string]: string[];
}

const About = () => {
  const experience: Experience[] = [
    {
      company: "True Spirit Lda",
      role: "Full Stack Developer",
      period: "Oct 2024 - Feb 2026",
      type: "Remote · Portugal",
      description: `Diseño técnico y desarrollo de una plataforma interna (Backoffice) para la gestión completa de tours en jeep, reservas y operación diaria.
- Diseño y desarrollo de la arquitectura backend con NestJS y PostgreSQL.
- Modelado de un dominio complejo: tours, reservas, disponibilidad por fecha, idiomas, vehículos, mantenimientos, guías y hojas de servicio.
- Implementación de lógica avanzada de disponibilidad y capacidad (asientos por idioma, redistribución y ajustes por día).
- Desarrollo del frontend en React y Next.js para la gestión operativa y administrativa, utilizando shadcn/ui para estandarizar componentes y estilos.
- Diseño de sistemas de autenticación, roles y permisos.
- Responsable de seguridad, escalabilidad y mantenibilidad del sistema.
- Diseño y gestión de la infraestructura cloud y despliegues.
- Uso de comunicación en tiempo real para actualización de estados operativos.
- Toma de decisiones técnicas y definición de estándares de desarrollo.`,
    },
    {
      company: "Netex Learning",
      role: "Full Stack Developer",
      period: "Sep 2022 - Oct 2024",
      type: "Híbrido · España",
      description: `Desarrollo y mantenimiento de una plataforma educativa interactiva utilizada por miles de usuarios y centros educativos.
- Desarrollo de múltiples frontends en React, compartiendo una librería propia de componentes documentada con Storybook para mantener consistencia visual, responsive design y reutilización de patrones UI entre aplicaciones.
- Desarrollo de backends y APIs con NestJS, Express y Spring Boot.
- Gestión de bases de datos MongoDB y MySQL.
- Implementación de tests end-to-end con Cypress.
- Manejo de colas y procesos asíncronos con RabbitMQ.
- Configuración de pipelines CI/CD con Jenkins.
- Uso de Amazon S3 para almacenamiento de recursos.
- Despliegues tanto en AWS como en servidores propios usando Docker.
- Gestión del trabajo y seguimiento de tareas mediante Jira.
- Trabajo en equipo con desarrolladores, QA y producto en entornos ágiles.`,
    },
    {
      company: "Freelance",
      role: "Full Stack Developer",
      period: "Mar 2019 - Sep 2022",
      type: "España",
      description:
        "Desarrollo de aplicaciones web y móviles como proyectos freelance, principalmente con React y React Native, durante mis primeros años como desarrollador.",
    },
  ];

  const technologies: Technologies = {
    Lenguajes: ["TypeScript", "JavaScript", "Python", "Java"],
    Frontend: ["React", "Next.js", "React Native", "TailwindCSS", "Angular"],
    Backend: [
      "NestJS",
      "Express",
      "Node.js",
      "Spring Boot",
      "REST APIs",
      "RabbitMQ",
      "Prisma ORM",
      "JPA-Hibernate",
    ],
    DB: ["MongoDB", "PostgreSQL", "MySQL"],
    DevOps: ["Docker", "AWS", "CI/CD", "Jenkins", "GH Actions", "Git"],
    Testing: ["Jest", "Vitest", "Cypress"],
  };

  return (
    <div className="flex flex-1 items-center justify-center p-3">
      <div className="bg-black/70 rounded-3xl px-10 py-10 max-w-7xl w-full space-y-10">
        {/* Bio */}
        <section>
          <p className="text-xl text-white leading-relaxed font-[Courier_New]">
            Full Stack Software Engineer con experiencia desarrollando
            plataformas end-to-end para entornos reales de producción.
            Especializado en frontend con React, y en backend con NestJS y
            Node.js, con foco en sistemas escalables, mantenibles y orientados a
            operación.
          </p>
        </section>

        {/* Experiencia */}
        <section className="space-y-3">
          <h2 className="text-xl uppercase tracking-widest text-[#9CDCFE]">
            Experiencia
          </h2>
          {experience.map((job) => (
            <div key={job.company} className="space-y-1">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <span className="text-white text-2xl">{job.company}</span>
                <span className="text-lg text-white">{job.period}</span>
              </div>

              <div className="text-lg text-[#CE9178]">
                {job.role} · {job.type}
              </div>
              <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-wrap pl-6">
                {job.description}
              </p>
            </div>
          ))}
        </section>

        {/* Tecnologías */}
        <section className="space-y-3">
          <h2 className="text-xl uppercase tracking-widest text-[#9CDCFE]">
            Principales Tecnologías
          </h2>
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="flex gap-4 pl-6">
              <span className="text-lg text-white w-24 shrink-0 pt-0.5">
                {category}
              </span>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-lg px-2 py-1 rounded border border-[#9CDCFE]/30 text-[#D4D4D4]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Educación */}
        <section className="space-y-2">
          <h2 className="text-xl uppercase tracking-widest text-[#9CDCFE]">
            Educación
          </h2>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
            <span className="text-white text-lg pl-6">
              Universidad de La Laguna
            </span>
            <span className="text-lg text-white">2018 – 2022</span>
          </div>
          <div className="text-lg text-[#CE9178] pl-6">
            Grado en Ingeniería Informática · Tecnologías de la Información
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
