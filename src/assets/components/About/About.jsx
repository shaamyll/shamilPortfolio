import ThreeScene from "../ThreeDModel/ThreeScene"
import { Button, Badge, Progress } from "@heroui/react"
import {Link} from "react-router-dom"
import * as Tabs from "@radix-ui/react-tabs"

function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        {/* Heading */}
        <header className="mb-10 md:mb-14 text-center">
          <h1 id="about-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            About Me
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Full‑stack developer focused on building performant, accessible, and scalable web applications.
          </p>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Text first on mobile for better context; image first on desktop */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold">Hi, I&apos;m Muhammed Shamil PK</h2>

            <div className="space-y-4 max-w-prose">
              <p className="text-base leading-relaxed text-pretty">
                I&apos;m a Full‑Stack Developer with a Bachelor&apos;s in Computer Applications and hands‑on experience
                building dynamic web apps using the MERN stack. I care about clean architecture, robust performance, and
                delivering inclusive user experiences.
              </p>

              <p className="text-base leading-relaxed text-pretty">
                My toolkit includes MongoDB, Express.js, React, and Node.js, with strong fundamentals in the web
                platform and best practices. I enjoy turning real‑world problems into maintainable solutions with clear
                interfaces and thoughtful UI engineering.
              </p>
            </div>

            {/* Highlights for scannability */}
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Reusable component systems and accessible patterns</li>
              <li>API design, data modeling, and state management</li>
              <li>Performance profiling and pragmatic testing strategies</li>
            </ul>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge variant="secondary">MongoDB</Badge>
              <Badge variant="secondary">Express.js</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge>TypeScript</Badge>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {/* ✅ Resume Button */}
              <Button asChild className="w-full sm:w-auto">
                <a
                  href="https://drive.google.com/file/d/1I3tUqxdQr-lDOAa5t7J_hb_z8Yv-pZKs/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View resume (opens in a new tab)"
                >
                  View Resume
                </a>
              </Button>

              {/* ✅ Contact Button — use <a> if #contact is on same page */}
              <Button asChild variant="bordered" className="w-full sm:w-auto">
                <a href="#contact" aria-label="Go to contact section">
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Tabs and Progress */}
            <div className="pt-4">
              <Tabs.Root defaultValue="skills" className="w-full">
                <Tabs.List className="inline-flex items-center justify-center rounded-md bg-secondary/30 p-1 mb-6">
                  <Tabs.Trigger
                    value="skills"
                    className="px-4 py-2 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Skills
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="experience"
                    className="px-4 py-2 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Experience
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="education"
                    className="px-4 py-2 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Education
                  </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="skills" className="mt-2 space-y-4">
                  {[
                    { label: "React", level: "Advanced", value: 85 },
                    { label: "Node.js", level: "Advanced", value: 80 },
                    { label: "TypeScript", level: "Intermediate", value: 70 },
                    { label: "Next.js", level: "Intermediate", value: 72 },
                    { label: "MongoDB", level: "Intermediate", value: 68 },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span>{s.label}</span>
                        <span className="text-muted-foreground">{s.level}</span>
                      </div>
                      <Progress value={s.value} aria-label={`${s.label} proficiency ${s.value}%`} />
                    </div>
                  ))}
                </Tabs.Content>

                <Tabs.Content value="experience" className="mt-2 space-y-3">
                  <ul className="list-disc list-inside space-y-2 text-pretty">
                    <li>Built MERN apps with authentication, REST APIs, and responsive UIs.</li>
                    <li>Implemented reusable components, state management, and form validation.</li>
                    <li>Improved performance and accessibility with profiling and audits.</li>
                  </ul>
                </Tabs.Content>

                <Tabs.Content value="education" className="mt-2 space-y-2">
                  <p className="text-pretty">Bachelor&apos;s degree in Computer Applications (BCA).</p>
                  <p className="text-muted-foreground">Focus areas: web fundamentals, algorithms, and databases.</p>
                </Tabs.Content>
              </Tabs.Root>
            </div>
          </div>

          {/* Media */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
              <ThreeScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
