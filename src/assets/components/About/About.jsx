import ThreeScene from "../ThreeDModel/ThreeScene";
import { Button, Badge, Progress } from "@heroui/react";
import { Link } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-12 mt-5 md:py-20 container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl"
    >

      {/* Heading */}
      <header className="mb-10 md:mb-14 flex">
        <div className="min-w-6xl">
          <h1
            id="about-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-left"
          >
            About Me
          </h1>
        </div>
      </header>

      <div className="">


        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* 3D Model - Top on mobile, Left on desktop */}
          <div className="lg:order-1 w-full">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
              <ThreeScene />
            </div>
          </div>

          {/* Text - Below on mobile, Right on desktop */}
          <div className="lg:order-2 space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold">
              Hi, I&apos;m Muhammed Shamil PK
            </h2>

            <div className="space-y-4">
              <p className="text-base leading-relaxed">
                I&apos;m a Full‑Stack Developer with a Bachelor&apos;s in Computer Applications and hands‑on experience
                building dynamic web apps using the MERN stack. I care about clean architecture, robust performance, and
                delivering inclusive user experiences.
              </p>

              <p className="text-base leading-relaxed">
                My toolkit includes MongoDB, Express.js, React, and Node.js, with strong fundamentals in the web
                platform and best practices. I enjoy turning real‑world problems into maintainable solutions with clear
                interfaces and thoughtful UI engineering.
              </p>
            </div>

            {/* Highlights */}
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
              <Button asChild variant="bordered" className="w-full sm:w-auto">
                <a href="#contact" aria-label="Go to contact section">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs Section - Full width, responsive padding */}
        <div className="pt-12 mt-6">
          <Tabs.Root defaultValue="skills" className="w-full">
            <Tabs.List className="inline-flex flex-wrap justify-center gap-1 p-1 mb-6 bg-secondary/20 rounded-lg">
              <Tabs.Trigger
                value="skills"
                className="px-4 py-2 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=active]:bg-gradient-to-r from-purple-400 to-blue-800 data-[state=active]:text-white"
              >
                Skills
              </Tabs.Trigger>
              <Tabs.Trigger
                value="experience"
                className="px-4 py-2 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=active]:bg-gradient-to-r from-purple-400 to-blue-800 data-[state=active]:text-white"
              >
                Experience
              </Tabs.Trigger>
              <Tabs.Trigger
                value="education"
                className="px-4 py-2 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=active]:bg-gradient-to-r from-purple-400 to-blue-800 data-[state=active]:text-white"
              >
                Education
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="skills" className="mt-4 space-y-4">
              {[
                { label: "React", level: "Advanced", value: 85 },
                { label: "Node.js", level: "Advanced", value: 80 },
                { label: "TypeScript", level: "Intermediate", value: 70 },
                { label: "Next.js", level: "Intermediate", value: 72 },
                { label: "MongoDB", level: "Intermediate", value: 68 },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-medium">{s.label}</span>
                    <span className="text-muted-foreground">{s.level}</span>
                  </div>
                  <Progress value={s.value} aria-label={`${s.label} proficiency ${s.value}%`} />
                </div>
              ))}
            </Tabs.Content>

            <Tabs.Content value="experience" className="mt-4 space-y-3">
              <ul className="list-disc list-inside space-y-2 text-pretty text-sm sm:text-base">
                <li>Built MERN apps with authentication, REST APIs, and responsive UIs.</li>
                <li>Implemented reusable components, state management, and form validation.</li>
                <li>Improved performance and accessibility with profiling and audits.</li>
              </ul>
            </Tabs.Content>

            <Tabs.Content value="education" className="mt-4 space-y-2">
              <p className="text-pretty text-sm sm:text-base">
                Bachelor&apos;s degree in Computer Applications (BCA).
              </p>
              <p className="text-muted-foreground text-sm">
                Focus areas: web fundamentals, algorithms, and databases.
              </p>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
}

export default About;