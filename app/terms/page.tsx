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

export default function TermsPage() {
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
              Terms of Service
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
        <LegalBlock title="1. Acceptance of Terms">
          <p>
            By accessing or using LawPrep AI (&quot;LawPrep AI,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of
            Service. If you do not agree, do not use the service.
          </p>
          <p>
            If you are using LawPrep AI on behalf of an organization, you represent that
            you have authority to accept these terms on its behalf.
          </p>
        </LegalBlock>

        <LegalBlock title="2. Description of Service">
          <p>
            LawPrep AI is an online LSAT preparation platform. The service may include
            practice questions, study modules, progress tracking, writing practice tools,
            and AI-powered features intended to support your studying.
          </p>
          <p>
            We may add, modify, or discontinue features over time. We strive to keep the
            product useful and reliable, but we do not guarantee uninterrupted or error-free
            operation.
          </p>
        </LegalBlock>

        <LegalBlock title="3. User Accounts">
          <p>
            You agree to provide accurate account information and to keep your credentials
            confidential. You are responsible for all activity that occurs under your
            account.
          </p>
          <p>
            Notify us promptly at{" "}
            <a
              href="mailto:support@lawprep.io"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              support@lawprep.io
            </a>{" "}
            if you suspect unauthorized access. We may suspend or terminate accounts that
            violate these terms or present security risk.
          </p>
        </LegalBlock>

        <LegalBlock title="4. Subscription Plans">
          <p>
            We offer subscription tiers including, where available:{" "}
            <span className="text-foreground/90">Starter</span> (free),{" "}
            <span className="text-foreground/90">Pro</span> (USD $19 per month), and{" "}
            <span className="text-foreground/90">Premium</span> (USD $39 per month). Pricing
            and included features are described on our pricing page and may change; we will
            provide reasonable notice where required by law.
          </p>
          <p>
            Paid plans are billed in advance on a recurring basis until you cancel.
            Cancellation stops future charges; you generally retain access through the end of
            the current billing period unless we state otherwise at checkout.
          </p>
          <p>
            Unless required by law or expressly stated in writing, fees are non-refundable.
            Failed payments may result in suspension of paid features until billing is
            resolved.
          </p>
        </LegalBlock>

        <LegalBlock title="5. Acceptable Use">
          <p>
            You agree not to misuse LawPrep AI. Prohibited conduct includes, without
            limitation: sharing login credentials or selling access to your account;
            scraping, crawling, or harvesting data from the service without permission;
            attempting to probe, disrupt, or circumvent security; using the service to
            violate law or third-party rights; or interfering with other users&apos;
            experience.
          </p>
          <p>
            We may investigate violations and cooperate with law enforcement where
            appropriate. Repeated or serious violations may result in immediate termination.
          </p>
        </LegalBlock>

        <LegalBlock title="6. Intellectual Property">
          <p>
            LawPrep AI&apos;s software, branding, and original content are owned by us or
            our licensors and are protected by intellectual property laws. Except for the
            limited license to use the service as offered, these terms do not grant you any
            ownership rights in our materials.
          </p>
          <p>
            LSAT® and related marks are trademarks of the Law School Admission Council,
            Inc. (LSAC). LawPrep AI is not endorsed by or affiliated with LSAC. References to
            official formats and exam structure are for descriptive purposes.
          </p>
          <p>
            Where the product references or displays PrepTest-style or similar LSAT
            content, such use is intended to fall within fair use or other applicable
            limitations for educational commentary and study preparation. If you believe
            material on the service infringes your rights, contact us with details so we can
            review promptly.
          </p>
          <p>
            Materials you upload remain your property. You grant us a license to host and
            process your uploads solely to provide the features you use.
          </p>
        </LegalBlock>

        <LegalBlock title="7. AI Features Disclaimer">
          <p>
            AI-generated output is a study aid only. It is not legal advice, professional
            advice, or a substitute for your own judgment, course materials, or official
            LSAC guidance.
          </p>
          <p>
            AI responses may be incomplete, outdated, or incorrect. You are responsible for
            verifying important information and for how you use outputs in connection with
            your preparation and exams.
          </p>
        </LegalBlock>

        <LegalBlock title="8. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, LawPrep AI and its affiliates,
            officers, and employees are not liable for any indirect, incidental, special,
            consequential, or punitive damages, or for loss of profits, data, or goodwill,
            arising from your use of the service.
          </p>
          <p>
            Our total liability for any claim arising out of these terms or the service is
            limited to the greater of (a) the amount you paid us for the service in the
            twelve (12) months before the claim or (b) fifty U.S. dollars (USD $50), except
            where liability cannot be limited under applicable law.
          </p>
          <p>
            Some jurisdictions do not allow certain limitations; in those cases, our
            liability is limited to the maximum extent permitted.
          </p>
        </LegalBlock>

        <LegalBlock title="9. Termination">
          <p>
            You may stop using LawPrep AI at any time. We may suspend or terminate access if
            you breach these terms, if we must comply with law, or if we discontinue the
            service (where we will provide notice when reasonably practicable).
          </p>
          <p>
            Provisions that by their nature should survive termination — including
            intellectual property, disclaimers, limitation of liability, and governing law
            — will survive.
          </p>
        </LegalBlock>

        <LegalBlock title="10. Changes to Terms">
          <p>
            We may update these Terms of Service from time to time. We will post the revised
            terms on this page and update the &quot;Last updated&quot; date. Material changes
            may require additional notice under applicable law.
          </p>
          <p>
            Your continued use after the effective date of changes constitutes acceptance of
            the revised terms, unless applicable law requires otherwise.
          </p>
        </LegalBlock>

        <LegalBlock title="11. Contact">
          <p>
            Questions about these terms? Reach us at{" "}
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
          These Terms of Service are provided for clarity and do not replace independent
          legal advice. If any provision is held unenforceable, the remaining provisions
          remain in effect.
        </p>
      </Section>
    </>
  );
}
