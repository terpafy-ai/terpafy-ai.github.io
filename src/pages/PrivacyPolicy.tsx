import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Data,
  ShieldTick,
  Share,
  Lock,
  Weight,
  Archive,
  Notification,
  Sms,
} from "vuesax-icons-react";
import { Section } from "@/components/layout/Section";

const LAST_UPDATED = new Date(2025, 0, 1);

export function PrivacyPolicy() {
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
          <ArrowLeft variant="Bold" className="h-4 w-4" aria-hidden="true" />
          {t("legal.backToHome")}
        </Link>

        <article className="max-w-3xl space-y-12">
          <header>
            <h1 className="font-heading text-4xl font-black">
              {t("privacy.title")}
            </h1>
            <p className="mt-2 text-sm text-foreground-muted">
              {t("privacy.lastUpdate")}: {formattedDate}
            </p>
            <p className="mt-4 leading-relaxed text-foreground-muted">
              {t("privacy.intro")}
            </p>
          </header>

          {/* Section 1 — Identification */}
          <section aria-labelledby="privacy-s1">
            <h2
              id="privacy-s1"
              className="mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <User variant="Bold" className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {t("privacy.section1.title")}
            </h2>
            <div className="space-y-3 leading-relaxed text-foreground-muted">
              <p>{t("privacy.section1.description")}</p>
              <p>
                <strong className="text-foreground">
                  {t("privacy.section1.status")}
                </strong>
                : {t("privacy.section1.statusText")}
              </p>
              <p>
                <strong className="text-foreground">
                  {t("privacy.section1.contact")}
                </strong>
                :{" "}
                <a
                  href="mailto:terpafy.ai@gmail.com"
                  className="font-medium text-primary hover:underline"
                >
                  terpafy.ai@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 2 — Data Collected */}
          <section aria-labelledby="privacy-s2">
            <h2
              id="privacy-s2"
              className="mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <Data variant="Bold" className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {t("privacy.section2.title")}
            </h2>
            <div className="space-y-4 text-foreground-muted">
              <p className="leading-relaxed">{t("privacy.section2.description")}</p>
              <div className="overflow-x-auto rounded-lg border border-foreground-muted/20">
                <table className="w-full table-auto text-sm">
                  <thead className="bg-foreground/5">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">
                        {t("privacy.section2.table.category")}
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">
                        {t("privacy.section2.table.examples")}
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">
                        {t("privacy.section2.table.purpose")}
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">
                        {t("privacy.section2.table.legal")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-foreground-muted/10">
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        {t("privacy.section2.table.personal")}
                      </td>
                      <td className="px-4 py-3">
                        {t("privacy.section2.table.personalExamples")}
                      </td>
                      <td className="px-4 py-3">
                        {t("privacy.section2.table.personalPurpose")}
                      </td>
                      <td className="px-4 py-3">
                        {t("privacy.section2.table.personalLegal")}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        {t("privacy.section2.table.sensitive")}
                      </td>
                      <td className="px-4 py-3">
                        {t("privacy.section2.table.sensitiveExamples")}
                      </td>
                      <td className="px-4 py-3">
                        {t("privacy.section2.table.sensitivePurpose")}
                      </td>
                      <td className="px-4 py-3">
                        {t("privacy.section2.table.sensitiveLegal")}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        {t("privacy.section2.table.usage")}
                      </td>
                      <td className="px-4 py-3">
                        {t("privacy.section2.table.usageExamples")}
                      </td>
                      <td className="px-4 py-3">
                        {t("privacy.section2.table.usagePurpose")}
                      </td>
                      <td className="px-4 py-3">
                        {t("privacy.section2.table.usageLegal")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 3 — Sensitive Data */}
          <section aria-labelledby="privacy-s3">
            <h2
              id="privacy-s3"
              className="mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <ShieldTick variant="Bold" className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {t("privacy.section3.title")}
            </h2>
            <div className="space-y-3 leading-relaxed text-foreground-muted">
              <p>{t("privacy.section3.description")}</p>
              <p>
                <strong className="text-foreground">
                  {t("privacy.section3.consent")}
                </strong>
                : {t("privacy.section3.consentText")}
              </p>
              <p>
                <strong className="text-foreground">
                  {t("privacy.section3.anonymization")}
                </strong>
                : {t("privacy.section3.anonymizationText")}
              </p>
            </div>
          </section>

          {/* Section 4 — Data Sharing */}
          <section aria-labelledby="privacy-s4">
            <h2
              id="privacy-s4"
              className="mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <Share variant="Bold" className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {t("privacy.section4.title")}
            </h2>
            <div className="space-y-3 leading-relaxed text-foreground-muted">
              <p>{t("privacy.section4.description")}</p>
              <p>
                <strong className="text-foreground">
                  {t("privacy.section4.doctor")}
                </strong>
                : {t("privacy.section4.doctorText")}
              </p>
              <p>
                <strong className="text-foreground">
                  {t("privacy.section4.operators")}
                </strong>
                : {t("privacy.section4.operatorsText")}
              </p>
              <p>
                <strong className="text-foreground">
                  {t("privacy.section4.legal")}
                </strong>
                : {t("privacy.section4.legalText")}
              </p>
            </div>
          </section>

          {/* Section 5 — Security */}
          <section aria-labelledby="privacy-s5">
            <h2
              id="privacy-s5"
              className="mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <Lock variant="Bold" className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {t("privacy.section5.title")}
            </h2>
            <div className="space-y-3 leading-relaxed text-foreground-muted">
              <p>{t("privacy.section5.description")}</p>
              <p>
                <strong className="text-foreground">
                  {t("privacy.section5.measures")}
                </strong>
                : {t("privacy.section5.measuresText")}
              </p>
              <p>
                <strong className="text-foreground">
                  {t("privacy.section5.risk")}
                </strong>
                : {t("privacy.section5.riskText")}
              </p>
              <p>
                <strong className="text-foreground">
                  {t("privacy.section5.whatsapp")}
                </strong>
                : {t("privacy.section5.whatsappText")}
              </p>
            </div>
          </section>

          {/* Section 6 — Rights */}
          <section aria-labelledby="privacy-s6">
            <h2
              id="privacy-s6"
              className="mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <Weight variant="Bold" className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {t("privacy.section6.title")}
            </h2>
            <div className="space-y-3 leading-relaxed text-foreground-muted">
              <p>{t("privacy.section6.description")}</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>{t("privacy.section6.right1")}</li>
                <li>{t("privacy.section6.right2")}</li>
                <li>{t("privacy.section6.right3")}</li>
                <li>{t("privacy.section6.right4")}</li>
                <li>{t("privacy.section6.right5")}</li>
              </ul>
            </div>
          </section>

          {/* Section 7 — Retention */}
          <section aria-labelledby="privacy-s7">
            <h2
              id="privacy-s7"
              className="mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <Archive variant="Bold" className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {t("privacy.section7.title")}
            </h2>
            <p className="leading-relaxed text-foreground-muted">
              {t("privacy.section7.description")}
            </p>
          </section>

          {/* Section 8 — Changes */}
          <section aria-labelledby="privacy-s8">
            <h2
              id="privacy-s8"
              className="mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <Notification variant="Bold" className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {t("privacy.section8.title")}
            </h2>
            <p className="leading-relaxed text-foreground-muted">
              {t("privacy.section8.description")}
            </p>
          </section>

          {/* Contact */}
          <section aria-labelledby="privacy-contact">
            <h2
              id="privacy-contact"
              className="mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <Sms variant="Bold" className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {t("privacy.contact.title")}
            </h2>
            <div className="space-y-2 leading-relaxed text-foreground-muted">
              <p>{t("privacy.contact.description")}</p>
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
        </article>
      </Section>
    </main>
  );
}
