import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Section } from "@/components/layout/Section";

/**
 * Phase 2 visual spot-check — exercises brand tokens and shadcn components.
 * Will be replaced by real sections in Phase 4+.
 */
function App() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Section size="lg" className="text-center">
        <Badge className="bg-secondary text-secondary-foreground mb-4">Design System</Badge>
        <h1 className="font-heading text-primary mb-4 text-5xl">Terpafy</h1>
        <p className="text-foreground-muted mb-8 text-xl">
          Seu assistente digital de saúde para cannabis medicinal.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Começar agora</Button>
          <Button variant="outline">Saiba mais</Button>
          <Button variant="secondary">Secundário</Button>
        </div>
      </Section>

      <Separator />

      {/* Color palette spot-check */}
      <Section size="sm">
        <h2 className="font-heading mb-6 text-3xl">Paleta de Cores</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {(
            [
              { bg: "bg-primary", label: "primary" },
              { bg: "bg-secondary", label: "secondary" },
              { bg: "bg-accent", label: "accent" },
              { bg: "bg-accent-green", label: "accent-green" },
              { bg: "bg-neutral-dark", label: "neutral-dark" },
              { bg: "bg-muted", label: "muted" },
            ] as const
          ).map(({ bg, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className={`${bg} border-border h-16 w-full rounded-md border`} />
              <span className="text-foreground-muted text-xs">{label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Separator />

      {/* Component cards spot-check */}
      <Section size="sm">
        <h2 className="font-heading mb-6 text-3xl">Componentes</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Cultivação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground-muted">
                Técnicas de cultivo e iluminação personalizadas para sua cepa.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Diagnósticos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground-muted">
                Identificação de pragas, doenças e deficiências nutricionais.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Conformidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground-muted">
                Regulamentações, ANVISA e licenças para o Brasil.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </main>
  );
}

export default App;
