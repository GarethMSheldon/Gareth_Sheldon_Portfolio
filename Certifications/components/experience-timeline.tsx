import { Briefcase, Calendar } from "lucide-react"

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Senior Technical and Cybersecurity Engineer",
      company: "Gavotech IT Solutions",
      period: "May 2024 - Present",
      responsibilities: [
        "Configured Sophos XG and FortiGate firewalls, cutting network breaches by 30% and enhancing VPN security across regions",
        "Conducted vulnerability scans with Nmap, Nikto, Tenable Nessus, Qualys and Greenbone/OpenVAS, ensuring ISO 27001 compliance",
        "Led incident response efforts, identifying, containing, and mitigating security threats across cloud and on-premises environments",
        "Developed incident response playbooks and escalation procedures for efficient containment and remediation of security threats",
        "Implemented threat intelligence feeds and real-time monitoring solutions to detect anomalous behavior",
      ],
    },
    {
      title: "Technical Engineer",
      company: "Gavotech IT Solutions",
      period: "May 2022 - May 2024",
      responsibilities: [
        "Managed and optimized support operations for over 500 devices (Windows, macOS, Linux)",
        "Configured Sophos XG and FortiGate firewalls, establishing detailed rules and NAT policies that reduced network breaches by 30%",
        "Deployed Trend Micro Worry-Free for advanced endpoint protection, achieving a 35% reduction in malware incidents",
        "Utilized SentinelOne's AI-driven analytics to minimize incident response times by 30%",
        "Monitored and optimized DHCP, DNS, and other critical network services to ensure high availability",
      ],
    },
    {
      title: "IT Technician / Data Capturer",
      company: "Pragmatic Accounting Services",
      period: "February 2021 - March 2022",
      responsibilities: [
        "Managed bookkeeping processes for 15+ clients daily, increasing efficiency and accuracy by 30%",
        "Enhanced data retrieval workflows, improving efficiency by over 50% for client files and raw data",
        "Configured networks and maintained connectivity across a diverse array of 15+ devices",
        "Performed root-cause analysis and resolved daily network and system issues",
      ],
    },
  ]

  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <div key={index} className="relative pl-8 pb-8 border-l border-border">
          <div className="absolute left-[-8px] bg-background p-1 border border-border rounded-full">
            <Briefcase className="h-4 w-4 text-primary" />
          </div>
          <div className="mb-2 flex items-center gap-2">
            <h3 className="text-xl font-semibold">{experience.title}</h3>
            <span className="text-muted-foreground">at {experience.company}</span>
          </div>
          <div className="mb-4 flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{experience.period}</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {experience.responsibilities.map((responsibility, rIndex) => (
              <li key={rIndex}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

