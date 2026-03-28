"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/shared/section";

const ease = [0.22, 1, 0.36, 1] as const;

function LegalBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Section className="py-10 sm:py-12">
      <article className="mx-auto max-w-3xl">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
          {children}
        </div>
      </article>
    </Section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pt-20 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[280px] w-[440px] rounded-full bg-primary/6 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease }}
              className="mt-4 text-sm text-muted-foreground sm:text-base"
            >
              Last updated: March 2026
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scaleX: 0.35 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.65, delay: 0.18, ease }}
              className="mx-auto mt-10 h-px max-w-sm origin-center bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            />
          </div>
        </div>
      </section>

      <div className="border-t border-border/40">
        <LegalBlock title="1. Information We Collect">
          <p>
            We collect information you provide when you create an account, use LawPrep AI,
            or contact us. This may include your name, email address, and billing details
            when you subscribe to a paid plan.
          </p>
          <p>
            We automatically collect certain usage data when you use the platform, such as
            device type, browser, approximate location derived from IP address, pages or
            features viewed, and diagnostic logs that help us keep the service reliable.
          </p>
          <p>
            If you upload documents, notes, or other study materials, we store that content
            so we can provide features tied to your account (for example, AI-assisted study
            tools that reference your materials).
          </p>
        </LegalBlock>

        <LegalBlock title="2. How We Use Your Information">
          <p>
            We use your information to operate and improve LawPrep AI: authenticating you,
            delivering practice questions and study modules, processing subscriptions, and
            responding to support requests.
          </p>
          <p>
            We analyze aggregated usage patterns to improve performance, fix bugs, and
            develop new features. Where we use vendors to help run the service, they
            process data only as instructed by us and for the purposes described here.
          </p>
          <p>
            AI features may process text you provide or upload to generate explanations,
            summaries, or other study assistance. That processing is scoped to providing the
            product to you and is not used to train third-party foundation models unless we
            clearly disclose otherwise in product settings or a separate agreement.
          </p>
        </LegalBlock>

        <LegalBlock title="3. Data Storage & Security">
          <p>
            We use industry-standard safeguards designed to protect your information,
            including encryption in transit (HTTPS) and encryption for data at rest where
            supported by our infrastructure.
          </p>
          <p>
            The service is hosted on secure cloud infrastructure. Access to production
            systems and customer data is limited to authorized personnel who need it to
            operate the platform.
          </p>
          <p>
            We do not sell your personal information. We do not share your data with third
            parties for their independent marketing purposes. We may share information when
            required by law, to protect our rights and users, or with service providers who
            assist in operating the product under strict confidentiality and security
            obligations.
          </p>
        </LegalBlock>

        <LegalBlock title="4. Your Documents & Study Materials">
          <p>
            Content you upload remains yours. You grant us a limited license to host,
            process, and display that content solely to provide the features you enable
            within your account.
          </p>
          <p>
            We use your materials to power AI and study features for you — for example,
            generating explanations or organizing practice — and not for purposes unrelated
            to the service without your consent, except as required by law.
          </p>
        </LegalBlock>

        <LegalBlock title="5. Third-Party Services">
          <p>
            <span className="text-foreground/90">OpenAI</span> (or comparable AI providers we
            may use) processes prompts and related context to deliver AI functionality. Their
            handling of data is governed by their terms and policies in addition to our
            agreements with them.
          </p>
          <p>
            <span className="text-foreground/90">Vercel</span> (or similar hosting
            providers) hosts and serves the application and may process technical and log
            data as part of that infrastructure.
          </p>
          <p>
            Payment processing is handled by a third-party payment processor. We do not
            store full payment card numbers on our servers; the processor collects and
            secures payment details according to its own standards, including PCI
            compliance where applicable.
          </p>
        </LegalBlock>

        <LegalBlock title="6. Your Rights">
          <p>
            Depending on where you live, you may have rights to access, correct, delete, or
            export personal data we hold about you, and to object to or restrict certain
            processing.
          </p>
          <p>
            You can request account deletion or a copy of your data by contacting us at the
            email below. We will respond within a reasonable timeframe and may need to
            verify your identity before fulfilling certain requests.
          </p>
        </LegalBlock>

        <LegalBlock title="7. Cookies">
          <p>
            We use a minimal set of cookies and similar technologies that are necessary for
            the site to function — for example, to keep you signed in, remember preferences,
            and protect against abuse.
          </p>
          <p>
            We do not use cookies for cross-site advertising tracking. If we introduce
            optional analytics or marketing cookies in the future, we will update this policy
            and, where required, obtain your consent before enabling them.
          </p>
        </LegalBlock>

        <LegalBlock title="8. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. When we make material
            changes, we will post the revised policy on this page and update the &quot;Last
            updated&quot; date above.
          </p>
          <p>
            Your continued use of LawPrep AI after changes become effective constitutes
            your acceptance of the revised policy, unless applicable law requires a different
            form of notice or consent.
          </p>
        </LegalBlock>

        <LegalBlock title="9. Contact Us">
          <p>
            If you have questions about this Privacy Policy or our data practices, contact
            us at{" "}
            <a
              href="mailto:support@lawprep.io"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              support@lawprep.io
            </a>
            .
          </p>
        </LegalBlock>
      </div>

      <Section className="pb-20 pt-4 sm:pb-28">
        <p className="mx-auto max-w-3xl text-center text-sm text-muted-foreground">
          This policy is provided for general information and does not create contractual
          rights. For the terms governing use of the product, see our Terms of Service.
        </p>
      </Section>
    </>
  );
}
