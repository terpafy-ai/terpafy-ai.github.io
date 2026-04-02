import { useTranslation } from "react-i18next";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { Section } from "@/components/layout/Section";

const PATIENT_KEYS = ["never", "privacy", "communication"] as const;
const PROFESSIONAL_KEYS = ["realtime", "insights", "workflow"] as const;
const TRUST_ICONS = [ShieldCheck, Zap, CheckCircle2] as const;
const TRUST_KEYS = ["lgpd", "encryption", "support"] as const;

/**
 * Benefits section — Figma: dual-column cards for cultivators vs
 * associations/clinics, plus trust badges row.
 * id="benefits" for smooth-scroll anchor.
 */
export function Benefits() {
  const { t } = useTranslation();

  return (
    <section id="benefits" className="bg-background">
      <Section size="lg">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <span className="inline-block h-px w-6 bg-primary" aria-hidden="true" />
            {t("benefits.label")}
            <span className="inline-block h-px w-6 bg-primary" aria-hidden="true" />
          </p>
          <h2 className="font-heading text-4xl font-black leading-tight text-foreground sm:text-5xl">
            {t("benefits.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-foreground-muted">
            {t("benefits.subtitle")}
          </p>
        </div>

        {/* Dual-column benefit cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Cultivators */}
          <div className="rounded-2xl border border-border bg-muted/30 p-8">
            <h3 className="mb-1 text-xl font-bold text-foreground">
              {t("benefits.patients.title")}
            </h3>
            <p className="mb-6 text-sm text-foreground-muted">
              {t("benefits.patients.subtitle")}
            </p>
            <ul className="space-y-4">
              {PATIENT_KEYS.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="font-semibold text-foreground">
                      {t(`benefits.patients.items.${key}.title`)}
                    </span>
                    <span className="ml-1 text-sm text-foreground-muted">
                      — {t(`benefits.patients.items.${key}.description`)}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Associations & Clinics */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <h3 className="mb-1 text-xl font-bold text-foreground">
              {t("benefits.professionals.title")}
            </h3>
            <p className="mb-6 text-sm text-foreground-muted">
              {t("benefits.professionals.subtitle")}
            </p>
            <ul className="space-y-4">
              {PROFESSIONAL_KEYS.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="font-semibold text-foreground">
                      {t(`benefits.professionals.items.${key}.title`)}
                    </span>
                    <span className="ml-1 text-sm text-foreground-muted">
                      — {t(`benefits.professionals.items.${key}.description`)}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust badges row */}
        <div className="mt-12 grid grid-cols-1 divide-y divide-border border-t border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {TRUST_KEYS.map((key, index) => {
            const Icon = TRUST_ICONS[index];
            return (
              <div
                key={key}
                className="flex items-center justify-center gap-3 px-6 py-6"
              >
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground">
                  {t(`benefits.trust.${key}`)}
                </span>
              </div>
            );
          })}
        </div>
      </Section>
    </section>
  );
}
