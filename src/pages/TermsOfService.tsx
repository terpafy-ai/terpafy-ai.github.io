import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Smartphone,
  MessageSquare,
  FileText,
  AlertTriangle,
  FileCheck,
  Mail,
} from "lucide-react";
import { Section } from "@/components/layout/Section";

const LAST_UPDATED = new Date(2025, 0, 1);

export function TermsOfService() {
  const { t, i18n } = useTranslation();

  const locale = i18n.language?.startsWith("es")
    ? "es-ES"
    : i18n.language?.startsWith("en")
      ? "en-US"
      : "pt-BR";

  const formattedDate = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
  }).format(LAST_UPDATED);

  return (
    <main className="bg-background text-foreground">
      <Section size="md" className="py-16">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t("legal.backToHome")}
        </Link>

        <article className="max-w-3xl space-y-12">
          <header>
            <h1 className="font-heading text-4xl font-black">
              {t("terms.title")}
            </h1>
            <p className="mt-2 text-sm text-foreground-muted">
              {t("terms.lastUpdate")}: {formattedDate}
            </p>
            <p className="mt-4 leading-relaxed text-foreground-muted">
              {t("terms.intro")}
            </p>
          </header>

          {/* Section 1 — Service Description */}
          <section aria-labelledby="terms-s1">
            <h2
              id="terms-s1"
              className="mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <Smartphone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {t("terms.section1.title")}
            </h2>
            <div className="space-y-3 leading-relaxed text-foreground-muted">
              <p>
                <strong className="text-foreground">
                  {t("terms.section1.nature")}
                </strong>
                : {t("terms.section1.natureText")}
              </p>
              <p>
                <strong className="text-foreground">
                  {t("terms.section1.limitation")}
                </strong>
                : {t("terms.section1.limitationText")}
              </p>
              <p>
                <strong className="text-foreground">
                  {t("terms.section1.mvp")}
                </strong>
                : {t("terms.section1.mvpText")}
              </p>
            </div>
          </section>

          {/* Section 2 — Use of Service */}
          <section aria-labelledby="terms-s2">
            <h2
              id="terms-s2"
              className="mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <MessageSquare className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {t("terms.section2.title")}
            </h2>
            <div className="space-y-3 leading-relaxed text-foreground-muted">
              <p>
                <strong className="text-foreground">
                  {t("terms.section2.platform")}
                </strong>
                : {t("terms.section2.platformText")}
              </p>
              <p>
                <strong className="text-foreground">
                  {t("terms.section2.communication")}
                </strong>
                : {t("terms.section2.communicationText")}
              </p>
              <p>
                <strong className="text-foreground">
                  {t("terms.section2.responsibility")}
                </strong>
                : {t("terms.section2.responsibilityText")}
              </p>
            </div>
          </section>

          {/* Section 3 — Intellectual Property */}
          <section aria-labelledby="terms-s3">
            <h2
              id="terms-s3"
              className="mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <FileText className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {t("terms.section3.title")}
            </h2>
            <div className="space-y-3 leading-relaxed text-foreground-muted">
              <p>
                <strong className="text-foreground">
                  {t("terms.section3.content")}
                </strong>
                : {t("terms.section3.contentText")}
              </p>
              <p>
                <strong className="text-foreground">
                  {t("terms.section3.usage")}
                </strong>
                : {t("terms.section3.usageText")}
              </p>
            </div>
          </section>

          {/* Section 4 — Liability */}
          <section aria-labelledby="terms-s4">
            <h2
              id="terms-s4"
              className="mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <AlertTriangle className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {t("terms.section4.title")}
            </h2>
            <div className="space-y-3 leading-relaxed text-foreground-muted">
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm font-semibold text-foreground">
                  {t("terms.section4.critical")}
                </p>
              </div>
              <p>
                <strong className="text-foreground">
                  {t("terms.section4.noGuarantee")}
                </strong>
                : {t("terms.section4.noGuaranteeText")}
              </p>
              <p>
                <strong className="text-foreground">
                  {t("terms.section4.noCNPJ")}
                </strong>
                : {t("terms.section4.noCNPJText")}
              </p>
              <p>
                <strong className="text-foreground">
                  {t("terms.section4.damages")}
                </strong>
                : {t("terms.section4.damagesText")}
              </p>
            </div>
          </section>

          {/* Section 5 — General Provisions */}
          <section aria-labelledby="terms-s5">
            <h2
              id="terms-s5"
              className="mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <FileCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {t("terms.section5.title")}
            </h2>
            <div className="space-y-3 leading-relaxed text-foreground-muted">
              <p>
                <strong className="text-foreground">
                  {t("terms.section5.acceptance")}
                </strong>
                : {t("terms.section5.acceptanceText")}
              </p>
              <p>
                <strong className="text-foreground">
                  {t("terms.section5.changes")}
                </strong>
                : {t("terms.section5.changesText")}
              </p>
              <p>
                <strong className="text-foreground">
                  {t("terms.section5.law")}
                </strong>
                : {t("terms.section5.lawText")}
              </p>
              <p>
                <strong className="text-foreground">
                  {t("terms.section5.jurisdiction")}
                </strong>
                : Goiânia, Goiás, Brasil
              </p>
            </div>
          </section>

          {/* Contact */}
          <section aria-labelledby="terms-contact">
            <h2
              id="terms-contact"
              className="mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {t("terms.contact.title")}
            </h2>
            <div className="space-y-2 leading-relaxed text-foreground-muted">
              <p>{t("terms.contact.description")}</p>
              <p>
                <a
                  href="mailto:terpafy.ai@gmail.com"
                  className="font-medium text-primary hover:underline"
                >
                  terpafy.ai@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Legal Disclaimer */}
          <aside
            aria-labelledby="terms-disclaimer"
            className="rounded-lg border border-foreground-muted/20 bg-foreground/5 p-5"
          >
            <h2
              id="terms-disclaimer"
              className="mb-2 flex items-center gap-2 text-base font-bold"
            >
              <AlertTriangle className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {t("terms.disclaimer.title")}
            </h2>
            <p className="text-sm leading-relaxed text-foreground-muted">
              {t("terms.disclaimer.text")}
            </p>
          </aside>
        </article>
      </Section>
    </main>
  );
}
