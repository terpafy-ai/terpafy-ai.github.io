import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/layout/Section";

export function TermsOfService() {
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
          <h1 className="font-heading text-4xl font-black">{t("terms.title")}</h1>

          <p>{t("terms.intro")}</p>

          <h2>{t("terms.section1.title")}</h2>
          <p>
            <strong>{t("terms.section1.nature")}</strong>:{" "}
            {t("terms.section1.natureText")}
          </p>
          <p>
            <strong>{t("terms.section1.limitation")}</strong>:{" "}
            {t("terms.section1.limitationText")}
          </p>
          <p>
            <strong>{t("terms.section1.mvp")}</strong>:{" "}
            {t("terms.section1.mvpText")}
          </p>

          <h2>{t("terms.section2.title")}</h2>
          <p>
            <strong>{t("terms.section2.platform")}</strong>:{" "}
            {t("terms.section2.platformText")}
          </p>
          <p>
            <strong>{t("terms.section2.responsibility")}</strong>:{" "}
            {t("terms.section2.responsibilityText")}
          </p>

          <h2>{t("terms.section3.title")}</h2>
          <p>{t("terms.section3.contentText")}</p>

          <h2>{t("terms.section4.title")}</h2>
          <p>
            <strong>{t("terms.section4.noGuarantee")}</strong>:{" "}
            {t("terms.section4.noGuaranteeText")}
          </p>
          <p>
            <strong>{t("terms.section4.damages")}</strong>:{" "}
            {t("terms.section4.damagesText")}
          </p>

          <h2>{t("terms.section5.title")}</h2>
          <p>
            <strong>{t("terms.section5.acceptance")}</strong>:{" "}
            {t("terms.section5.acceptanceText")}
          </p>
          <p>
            <strong>{t("terms.section5.law")}</strong>:{" "}
            {t("terms.section5.lawText")}
          </p>

          <h2>{t("terms.contact.title")}</h2>
          <p>{t("terms.contact.description")}</p>
        </article>
      </Section>
    </main>
  );
}
