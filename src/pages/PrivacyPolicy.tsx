import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/layout/Section";

export function PrivacyPolicy() {
  const { t } = useTranslation();

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

        <article className="prose prose-neutral max-w-3xl">
          <h1 className="font-heading text-4xl font-black">{t("privacy.title")}</h1>

          <p>{t("privacy.intro")}</p>

          <h2>{t("privacy.section1.title")}</h2>
          <p>{t("privacy.section1.description")}</p>
          <p>
            <strong>{t("privacy.section1.status")}</strong>:{" "}
            {t("privacy.section1.statusText")}
          </p>

          <h2>{t("privacy.section2.title")}</h2>
          <p>{t("privacy.section2.description")}</p>

          <h2>{t("privacy.section3.title")}</h2>
          <p>{t("privacy.section3.description")}</p>
          <p>
            <strong>{t("privacy.section3.consent")}</strong>:{" "}
            {t("privacy.section3.consentText")}
          </p>

          <h2>{t("privacy.section4.title")}</h2>
          <p>{t("privacy.section4.description")}</p>

          <h2>{t("privacy.section5.title")}</h2>
          <p>{t("privacy.section5.description")}</p>

          <h2>{t("privacy.section6.title")}</h2>
          <p>{t("privacy.section6.description")}</p>
          <ul>
            <li>{t("privacy.section6.right1")}</li>
            <li>{t("privacy.section6.right2")}</li>
            <li>{t("privacy.section6.right3")}</li>
            <li>{t("privacy.section6.right4")}</li>
            <li>{t("privacy.section6.right5")}</li>
          </ul>

          <h2>{t("privacy.section7.title")}</h2>
          <p>{t("privacy.section7.description")}</p>

          <h2>{t("privacy.section8.title")}</h2>
          <p>{t("privacy.section8.description")}</p>

          <h2>{t("privacy.contact.title")}</h2>
          <p>{t("privacy.contact.description")}</p>
        </article>
      </Section>
    </main>
  );
}
