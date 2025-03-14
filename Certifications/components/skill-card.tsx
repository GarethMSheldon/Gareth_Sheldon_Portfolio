import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Shield,
  Lock,
  Server,
  Users,
  KeyRound,
  ShieldCheck,
  UserCheck,
  Search,
  LineChart,
  ClipboardCheck,
  ShieldAlert,
  Monitor,
  Activity,
  FileSearch,
  FileText,
  Radar,
  Cloud,
  Package,
  BarChart,
  type LucideIcon,
} from "lucide-react"

interface SkillCardProps {
  title: string
  description: string
  icon: string
}

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Lock,
  Server,
  Users,
  KeyRound,
  ShieldCheck,
  UserCheck,
  Search,
  LineChart,
  ClipboardCheck,
  ShieldAlert,
  Monitor,
  Activity,
  FileSearch,
  FileText,
  Radar,
  Cloud,
  Package,
  BarChart,
}

export default function SkillCard({ title, description, icon }: SkillCardProps) {
  const IconComponent = iconMap[icon] || Shield

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <IconComponent className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

