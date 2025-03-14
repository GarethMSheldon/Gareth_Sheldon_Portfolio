import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import ProjectCard from "@/components/project-card"
import SkillCard from "@/components/skill-card"
import ExperienceTimeline from "@/components/experience-timeline"
import CertificationList from "@/components/certification-list"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold">Gareth Sheldon</h1>
          <nav className="flex items-center gap-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground">
              About
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground">
              Projects
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground">
              Experience
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 sm:py-32" id="about">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <div className="grid gap-4">
              <Badge className="w-fit" variant="outline">
                Cybersecurity Specialist
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Gareth Sheldon</h1>
              <p className="text-2xl text-muted-foreground">Senior Technical and Cybersecurity Engineer</p>
              <p className="text-lg text-muted-foreground">
                Specializing in network security, vulnerability management, threat hunting, and incident response.
              </p>
              <div className="flex gap-4 mt-4">
                <Button asChild variant="default">
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 overflow-hidden rounded-full border-4 border-primary/10">
              <Image src="/placeholder.svg?height=300&width=300" alt="Gareth Sheldon" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container py-16 sm:py-24" id="skills">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
          <span className="bg-primary/10 p-2 rounded-md mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-primary"
            >
              <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
              <path d="M21.18 8.97C20.44 5.1 17.33 2.17 13.39 2" />
              <path d="M12 12 4.2 19.8" />
              <path d="m18 12-3 7" />
              <path d="m12 12-7-5" />
            </svg>
          </span>
          Technical Skills
        </h2>
        <Tabs defaultValue="network" className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-start gap-2">
            <TabsTrigger value="network">Network Security</TabsTrigger>
            <TabsTrigger value="identity">Identity & Access</TabsTrigger>
            <TabsTrigger value="vulnerability">Vulnerability Management</TabsTrigger>
            <TabsTrigger value="endpoint">Endpoint Security</TabsTrigger>
            <TabsTrigger value="incident">Incident Response</TabsTrigger>
            <TabsTrigger value="cloud">Cloud Security</TabsTrigger>
          </TabsList>
          <TabsContent value="network" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCard
              title="Firewall Configuration"
              description="Sophos XG and FortiGate firewall implementation and management"
              icon="Shield"
            />
            <SkillCard
              title="VPN Security"
              description="PPTP and IPSec VPN tunnel implementation and security"
              icon="Lock"
            />
            <SkillCard
              title="Secure Protocols"
              description="TCP/IP, UDP, ICMP, HTTPS, TLS, SSH deployment"
              icon="Shield"
            />
            <SkillCard
              title="DNS/DHCP Management"
              description="Windows Server environments, optimized name resolution"
              icon="Server"
            />
          </TabsContent>
          <TabsContent value="identity" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCard
              title="Active Directory"
              description="Administration and security hardening of AD environments"
              icon="Users"
            />
            <SkillCard
              title="Federated Identity"
              description="SAML, OIDC implementation for secure authentication"
              icon="KeyRound"
            />
            <SkillCard
              title="Access Control"
              description="Role-based access control (RBAC) implementation"
              icon="ShieldCheck"
            />
            <SkillCard
              title="Remote Access"
              description="VPNs, RDP gateways for secure remote workforce"
              icon="UserCheck"
            />
          </TabsContent>
          <TabsContent value="vulnerability" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCard
              title="Vulnerability Scanning"
              description="Nmap, Nikto, Tenable Nessus, Qualys, Greenbone/OpenVAS"
              icon="Search"
            />
            <SkillCard
              title="Risk Assessment"
              description="CVSS prioritization and remediation planning"
              icon="LineChart"
            />
            <SkillCard
              title="Compliance"
              description="ISO 27001 standards implementation and auditing"
              icon="ClipboardCheck"
            />
            <SkillCard
              title="Security Benchmarks"
              description="CIS Benchmarks implementation for hardening"
              icon="ShieldAlert"
            />
          </TabsContent>
          <TabsContent value="endpoint" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCard title="EDR Solutions" description="SentinelOne deployment and management" icon="Monitor" />
            <SkillCard
              title="Antivirus Management"
              description="Trend Micro Worry-Free implementation"
              icon="ShieldCheck"
            />
            <SkillCard title="Threat Detection" description="Behavioral AI and machine learning" icon="Activity" />
            <SkillCard title="System Hardening" description="Endpoint hardening and patch management" icon="Lock" />
          </TabsContent>
          <TabsContent value="incident" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCard title="Digital Forensics" description="Autopsy, FTK, SANS SIFT, The Sleuth Kit" icon="Search" />
            <SkillCard title="Threat Analysis" description="Log analysis and malware investigation" icon="FileSearch" />
            <SkillCard title="Response Planning" description="Incident response playbook development" icon="FileText" />
            <SkillCard
              title="Threat Intelligence"
              description="Integration of threat intelligence feeds"
              icon="Radar"
            />
          </TabsContent>
          <TabsContent value="cloud" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCard
              title="AWS Security"
              description="AWS Cloud security fundamentals and implementation"
              icon="Cloud"
            />
            <SkillCard
              title="Container Security"
              description="Docker/containerization security practices"
              icon="Package"
            />
            <SkillCard title="Azure AD" description="Integration and security of Azure Active Directory" icon="Users" />
            <SkillCard title="Cloud SIEM" description="Implementation of cloud-based SIEM solutions" icon="BarChart" />
          </TabsContent>
        </Tabs>
      </section>

      {/* Projects Section */}
      <section className="container py-16 sm:py-24 bg-muted/50" id="projects">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
          <span className="bg-primary/10 p-2 rounded-md mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-primary"
            >
              <path d="M22 12.999V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.001" />
              <path d="M4.18 9.57A8.5 8.5 0 1 1 19.82 9.57" />
              <path d="m7 10-3 3 3 3" />
              <path d="m17 10 3 3-3 3" />
              <path d="M12 14v4" />
            </svg>
          </span>
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <ProjectCard
            title="Security Dashboard Integration"
            description="Centralized Grafana dashboard to visualize SentinelOne Threats & Alerts, Sophos Firewall Alerts, and Datto RMM metrics using Loki for log aggregation."
            image="/placeholder.svg?height=250&width=450"
            tags={["Grafana", "Loki", "SentinelOne", "Sophos", "Datto RMM", "Python"]}
            demoUrl="#"
            codeUrl="#"
          />
          <ProjectCard
            title="SOC Threat Intelligence Pipeline"
            description="Integrated honeypot, MISP, and Microsoft Sentinel to automate threat intelligence ingestion, detection, and response for a Security Operations Center."
            image="/placeholder.svg?height=250&width=450"
            tags={["MISP", "Microsoft Sentinel", "Honeypot", "Azure", "Python", "KQL"]}
            demoUrl="#"
            codeUrl="#"
          />
          <ProjectCard
            title="DNS Record Checker"
            description="Python tool using dnspython and tkinter to check SPF, DMARC, and DKIM DNS records via a user-friendly GUI for improved domain protection."
            image="/placeholder.svg?height=250&width=450"
            tags={["Python", "dnspython", "tkinter", "DNS Security", "GUI"]}
            demoUrl="#"
            codeUrl="#"
          />
          <ProjectCard
            title="Wazuh & Greenbone VM Lab"
            description="Integrated Greenbone Vulnerability Manager with Wazuh to enhance threat detection and automate remediation with custom response scripts."
            image="/placeholder.svg?height=250&width=450"
            tags={["Wazuh", "Greenbone", "Vulnerability Management", "SIEM", "Automation"]}
            demoUrl="#"
            codeUrl="#"
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className="container py-16 sm:py-24" id="experience">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
          <span className="bg-primary/10 p-2 rounded-md mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-primary"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
              <path d="m9 16 2 2 4-4" />
            </svg>
          </span>
          Professional Experience
        </h2>
        <ExperienceTimeline />
      </section>

      {/* Education & Certifications */}
      <section className="container py-16 sm:py-24 bg-muted/50" id="education">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
          <span className="bg-primary/10 p-2 rounded-md mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-primary"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </span>
          Education & Certifications
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg">Bachelor of Science - BSc in Cybersecurity</h3>
                <p className="text-muted-foreground">IU International University of Applied Sciences</p>
                <p className="text-sm text-muted-foreground">January 2025 - December 2029 (In Progress)</p>
                <p className="mt-2">
                  Relevant Coursework: Cybersecurity, Data Protection, Digital Forensics, Computing and Operating,
                  Python
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">National Senior Certificate</h3>
                <p className="text-muted-foreground">Edenvale High School</p>
                <p className="text-sm text-muted-foreground">January 2016 - December 2020</p>
                <p className="mt-2">
                  Relevant Coursework: Information Technology, Engineering Graphics & Design, Physical Sciences,
                  Mathematics
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <CertificationList />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-16 sm:py-24" id="contact">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 flex items-center">
          <span className="bg-primary/10 p-2 rounded-md mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-primary"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          Get In Touch
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out using any of the following methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                <a href="mailto:garethmsheldon@gmail.com" className="hover:underline">
                  garethmsheldon@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-muted-foreground" />
                <a href="tel:+27613894005" className="hover:underline">
                  +27 61 389 4005
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-muted-foreground" />
                <span>Edenvale, Gauteng, South Africa</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-3 text-muted-foreground" />
                <a
                  href="https://www.linkedin.com/in/gareth-sheldon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/gareth-sheldon
                </a>
              </div>
              <div className="flex items-center">
                <Github className="h-5 w-5 mr-3 text-muted-foreground" />
                <a
                  href="https://github.com/garethsheldon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/garethsheldon
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Your name"
                      className="w-full p-2 rounded-md border border-input bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full p-2 rounded-md border border-input bg-background"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    placeholder="Subject"
                    className="w-full p-2 rounded-md border border-input bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    rows={4}
                    className="w-full p-2 rounded-md border border-input bg-background resize-none"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Gareth Sheldon. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/garethsheldon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/gareth-sheldon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a href="mailto:garethmsheldon@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

