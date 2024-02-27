import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function ButtonDemo() {
  return <Card>
    <Button variant="outline">Outline</Button>
    <Separator />
    <Button variant="secondary">Solid</Button>
    <Separator />
    <Button variant="ghost">Ghost</Button>
    <Separator />
    <Button variant="link">Link</Button>
    <Separator />
    <Button disabled>Disabled</Button>
  </Card>
}
