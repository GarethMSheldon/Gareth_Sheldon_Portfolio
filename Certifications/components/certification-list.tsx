import { Award, Calendar } from "lucide-react"

export default function CertificationList() {
  const certifications = [
    {
      name: "Sophos Firewall Certified Engineer",
      issuer: "Sophos",
      date: "November 2024",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    },
    {
      name: "Kaseya Certified Technician in Datto Cybersecurity",
      issuer: "Kaseya Academy",
      date: "October 2024",
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      date: "June 2024",
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    },
    {
      name: "Blue Team Junior Analyst",
      issuer: "Security Blue Team",
      date: "March 2024",
      color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    },
    {
      name: "NSE 3 Network Security Associate",
      issuer: "Fortinet Training Institute",
      date: "August 2023",
      color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    },
    {
      name: "NSE 2 Network Security Associate",
      issuer: "Fortinet Training Institute",
      date: "May 2023",
      color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    },
    {
      name: "NSE 1 Network Security Associate",
      issuer: "Fortinet Training Institute",
      date: "March 2023",
      color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    },
    {
      name: "Junior Cybersecurity Analyst and Network Security",
      issuer: "Cisco Network Academy",
      date: "February 2023",
      color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
    },
  ]

  return (
    <div className="space-y-4">
      {certifications.map((cert, index) => (
        <div key={index} className="flex items-start gap-2 pb-4 last:pb-0">
          <div className="mt-0.5">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">{cert.name}</h3>
            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            <div className="flex items-center mt-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {cert.date}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

