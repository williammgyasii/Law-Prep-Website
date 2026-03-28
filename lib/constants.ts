export const APP_URL = "https://app.lawprep.io";
export const SIGNUP_URL = `${APP_URL}/auth/signup`;
export const LOGIN_URL = `${APP_URL}/auth/signin`;

export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
] as const;

export const PRICING_TIERS = [
  {
    name: "Starter",
    description: "Get started with LSAT prep basics",
    monthlyPrice: 0,
    yearlyPrice: 0,
    badge: "Free",
    highlighted: false,
    features: [
      "10 practice questions per day",
      "2 study modules",
      "3 writing prompts",
      "3 document uploads",
      "5 AI messages per document",
      "Basic weak-area tracking",
      "Progress dashboard",
    ],
    excluded: [
      "AI-powered explanations",
      "AI study plans",
      "Unlimited practice",
      "PrepTest filtering",
      "Detailed analytics",
      "Export results",
    ],
  },
  {
    name: "Pro",
    description: "Serious prep for serious test-takers",
    monthlyPrice: 19,
    yearlyPrice: 190,
    badge: "Popular",
    highlighted: true,
    features: [
      "Unlimited practice questions",
      "All study modules",
      "8 writing prompts",
      "25 document uploads",
      "50 AI messages per document",
      "AI-powered explanations",
      "PrepTest filtering",
      "Detailed analytics",
      "Weak-area tracking with AI tips",
    ],
    excluded: [
      "AI study plans",
      "Unlimited writing prompts",
      "Unlimited documents",
      "Export results",
    ],
  },
  {
    name: "Premium",
    description: "The complete LSAT mastery toolkit",
    monthlyPrice: 39,
    yearlyPrice: 390,
    badge: "Best Value",
    highlighted: false,
    features: [
      "Everything in Pro",
      "Unlimited practice questions",
      "Unlimited writing prompts",
      "Unlimited document uploads",
      "Unlimited AI messages",
      "AI-generated study plans",
      "Export results & analytics",
      "Priority support",
    ],
    excluded: [],
  },
] as const;

export const FEATURES = [
  {
    id: "practice",
    title: "LSAT Practice Engine",
    subtitle: "Real questions. Real results.",
    description:
      "Practice with questions from official LSAT PrepTests across all three section types — Logical Reasoning, Reading Comprehension, and Logic Games. Filter by PrepTest number, section type, and difficulty to target your weaknesses.",
    highlights: [
      "Questions from official PrepTests",
      "Filter by section type and PrepTest number",
      "Instant accuracy tracking and scoring",
      "Timed practice sessions",
    ],
    icon: "Target",
  },
  {
    id: "ai-study",
    title: "AI Study Assistant",
    subtitle: "Your personal LSAT tutor, available 24/7.",
    description:
      "Upload your study materials and chat with AI about them. Get explanations for tricky questions, generate quizzes from your notes, and receive personalized study recommendations based on your performance.",
    highlights: [
      "Chat with AI about any uploaded document",
      "Get detailed question explanations",
      "Generate quizzes from your notes",
      "Personalized study recommendations",
    ],
    icon: "Brain",
  },
  {
    id: "writing",
    title: "LSAT Writing Simulator",
    subtitle: "Practice the real thing, under real conditions.",
    description:
      "Simulate the official LSAT Writing section with proper timing — 15 minutes for prewriting and 35 minutes for your essay. Practice with multiple prompts in the official argumentative writing format.",
    highlights: [
      "Official timing: 15 min prewriting + 35 min essay",
      "Argumentative writing format",
      "Multiple practice prompts",
      "Track your writing history",
    ],
    icon: "PenTool",
  },
  {
    id: "modules",
    title: "Structured Study Modules",
    subtitle: "A curriculum that adapts to you.",
    description:
      "Follow a structured, course-like learning path through curated study modules. Each module contains lessons, resources, and practice exercises with progress tracking to keep you on pace.",
    highlights: [
      "Curated learning paths",
      "Progress tracking per module",
      "Lessons, articles, and resources",
      "Integrated practice exercises",
    ],
    icon: "BookOpen",
  },
  {
    id: "learning-hub",
    title: "Learning Hub",
    subtitle: "Your materials, supercharged with AI.",
    description:
      "Upload PDFs, Word documents, text files, or paste URLs. LawPrep extracts the content and lets you study it with AI assistance — get summaries, ask questions, and generate study materials from anything.",
    highlights: [
      "Upload PDF, Word, text, or URLs",
      "AI-powered document summaries",
      "Chat with AI about your materials",
      "Generate study aids automatically",
    ],
    icon: "Library",
  },
  {
    id: "planner",
    title: "AI Study Planner",
    subtitle: "Never wonder what to study next.",
    description:
      "Tell us your exam date and weekly availability, and our AI builds a personalized study plan. Get day-by-day recommendations that adapt to your progress and ensure you cover everything before test day.",
    highlights: [
      "AI-generated personalized study plans",
      "Based on your exam date and schedule",
      "Day-by-day study recommendations",
      "Adapts to your progress",
    ],
    icon: "Calendar",
  },
  {
    id: "weak-areas",
    title: "Weak Area Tracking",
    subtitle: "Know exactly where to focus.",
    description:
      "Track the topics and question types you struggle with most. Tag your confidence level, link to relevant study modules, and get AI-powered recommendations on what to work on next.",
    highlights: [
      "Self-assessed confidence tagging",
      "Linked to study modules",
      "AI-powered improvement suggestions",
      "Track progress over time",
    ],
    icon: "TrendingUp",
  },
  {
    id: "dashboard",
    title: "Dashboard & Analytics",
    subtitle: "See the full picture of your prep.",
    description:
      "Your personal command center shows readiness scores, section-by-section accuracy breakdowns, study streaks, and practice volume. Know exactly where you stand and what to tackle next.",
    highlights: [
      "Overall readiness score",
      "Section accuracy breakdowns",
      "Practice volume and streaks",
      "Weak area overview",
    ],
    icon: "BarChart3",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Create Your Free Account",
    description:
      "Sign up in seconds and start exploring. No credit card required — the Starter plan gives you instant access to practice questions, study modules, and the learning hub.",
    icon: "UserPlus",
  },
  {
    step: 2,
    title: "Build Your Study Foundation",
    description:
      "Dive into structured study modules that walk you through LSAT fundamentals. Upload your own study materials to the Learning Hub and let AI help you understand them deeper.",
    icon: "Layers",
  },
  {
    step: 3,
    title: "Practice with Real Questions",
    description:
      "Work through questions from official LSAT PrepTests. Filter by section type and PrepTest number. Review your accuracy and get AI-powered explanations for the ones you miss.",
    icon: "Target",
  },
  {
    step: 4,
    title: "Track and Improve",
    description:
      "Monitor your progress on the dashboard. Identify weak areas, follow AI recommendations, and use the Study Planner to stay on schedule for test day.",
    icon: "TrendingUp",
  },
  {
    step: 5,
    title: "Crush Test Day",
    description:
      "Walk into your LSAT with confidence. You've practiced real questions, mastered your weak spots, and followed a personalized study plan built around your schedule.",
    icon: "Award",
  },
] as const;

export const FAQ_DATA = [
  {
    category: "Product",
    questions: [
      {
        question: "What is LawPrep AI?",
        answer:
          "LawPrep AI is a comprehensive LSAT study platform that combines structured study modules, real LSAT practice questions from official PrepTests, an AI-powered study assistant, writing simulation, and progress analytics — all in one place.",
      },
      {
        question: "How does the AI study assistant work?",
        answer:
          "Upload any study material (PDF, Word document, text, or URL) and our AI will extract and analyze the content. You can then chat with the AI about your materials, get summaries, have concepts explained, and generate quizzes — like having a personal LSAT tutor available 24/7.",
      },
      {
        question: "Are these real LSAT questions?",
        answer:
          "Yes. The practice questions come from official LSAT PrepTests. We support questions across all three section types: Logical Reasoning, Reading Comprehension, and Logic Games (Analytical Reasoning).",
      },
      {
        question: "Do you rehost copyrighted LSAC/LawHub content?",
        answer:
          "No. LawPrep AI does not rehost or redistribute copyrighted LSAC or LawHub content. Our platform helps you organize and study your own materials with AI assistance, and practice with officially available PrepTest questions.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        question: "Is there a free plan?",
        answer:
          "Yes! The Starter plan is completely free with no credit card required. You get access to 10 practice questions per day, 2 study modules, 3 document uploads, and basic features to get you started.",
      },
      {
        question: "Can I switch between plans?",
        answer:
          "Absolutely. You can upgrade or downgrade your plan at any time from your account settings. When upgrading, you get immediate access to the new tier's features.",
      },
      {
        question: "Is there a yearly discount?",
        answer:
          "Yes. Both Pro and Premium plans offer yearly billing at a discount. Pro is $190/year (saving $38 vs monthly) and Premium is $390/year (saving $78 vs monthly).",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, debit cards, and other payment methods through our secure payment processor. All transactions are encrypted and PCI-compliant.",
      },
    ],
  },
  {
    category: "Features & Usage",
    questions: [
      {
        question: "What file formats can I upload to the Learning Hub?",
        answer:
          "You can upload PDF documents, Microsoft Word files (.docx), plain text files, and paste URLs. Our system extracts the text content and makes it available for AI-assisted study.",
      },
      {
        question: "How does the LSAT Writing simulator work?",
        answer:
          "Our writing simulator replicates the official LSAT Writing format with proper timing — 15 minutes for prewriting and 35 minutes for essay writing. You can practice with multiple argumentative writing prompts and track your writing history.",
      },
      {
        question: "What are AI study plans?",
        answer:
          "Available on the Premium plan, AI study plans generate a personalized day-by-day study schedule based on your exam date, weekly availability, and current progress. The plan adapts as you study to keep you on track.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes. We use industry-standard encryption for all data in transit and at rest. Your study materials, progress data, and personal information are never shared with third parties. We take your privacy seriously.",
      },
    ],
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "5-lsat-study-strategies-that-actually-work",
    title: "5 LSAT Study Strategies That Actually Work",
    excerpt:
      "Skip the generic advice. Here are five evidence-based study strategies that top LSAT scorers use to maximize their prep time and boost their scores.",
    date: "2026-03-15",
    readingTime: "7 min read",
    tag: "Study Tips",
    content: `
The LSAT isn't just a test of knowledge — it's a test of reasoning skills that can be trained and improved. After analyzing patterns from high-scoring test-takers, here are five strategies that consistently produce results.

## 1. Practice Under Real Conditions

Untimed practice gives you a false sense of security. From day one, practice with a timer. The LSAT gives you approximately 1 minute and 25 seconds per question — that pressure changes everything.

Start by giving yourself 2 minutes per question, then gradually reduce to the real timing. This builds both speed and accuracy under pressure.

## 2. Review Every Wrong Answer (And Every Guess)

Getting a question wrong is only wasted time if you don't understand why. For every missed question, write down:
- What you thought the answer was and why
- What the correct answer actually is and why
- What type of reasoning error you made

Over time, you'll see patterns in your mistakes. That's where the real improvement happens.

## 3. Focus on Your Weakest Section First

It's tempting to practice what you're already good at. Don't. The biggest score gains come from improving your weakest section. If Logical Reasoning is your weak spot, that's where you should spend 50% of your study time.

Use analytics tools to track your accuracy by section type and question type. Data-driven prep beats gut feelings.

## 4. Take Full Practice Tests Weekly

Individual section practice is important, but you also need the endurance training that comes from full-length practice tests. Take at least one full test per week under real timing conditions.

Review the full test afterward, not just the questions you got wrong. Understanding why you got questions right reinforces good reasoning patterns.

## 5. Use Active Recall, Not Passive Review

Reading through study materials passively doesn't build strong memory or reasoning skills. Instead, use active recall: test yourself constantly, generate questions from your notes, and explain concepts out loud.

Tools like LawPrep AI's Learning Hub can generate quizzes from your uploaded study materials automatically — turning passive notes into active study sessions.

## The Bottom Line

LSAT prep is a marathon, not a sprint. Consistency, honest self-assessment, and strategic focus on weaknesses will get you further than cramming ever will. Start with these five strategies and adjust based on your own data.
    `,
  },
  {
    slug: "lsat-writing-section-complete-guide",
    title: "The Complete Guide to the LSAT Writing Section",
    excerpt:
      "Everything you need to know about the LSAT Writing section — what to expect, how to prepare, and strategies for writing a compelling argumentative essay under time pressure.",
    date: "2026-03-08",
    readingTime: "9 min read",
    tag: "LSAT Guide",
    content: `
The LSAT Writing section is often overlooked in prep, but law schools do read it. Here's everything you need to know to write a strong essay on test day.

## What Is the LSAT Writing Section?

LSAT Writing is a 50-minute essay task where you're given a prompt presenting a decision-maker who must choose between two options. Each option has advantages and disadvantages. Your job is to argue for one option over the other.

The timing breaks down as:
- **15 minutes** for prewriting (reading, planning, outlining)
- **35 minutes** for writing your essay

## What Law Schools Look For

Law schools use your writing sample to assess:
- Your ability to construct a coherent argument
- Your capacity to consider and address counterarguments
- Your writing clarity and organization under time pressure
- Your critical thinking about trade-offs

You don't need to be "right" — there's no correct choice. They want to see strong reasoning.

## Structure Your Essay

A proven structure for LSAT Writing:

1. **Introduction** (2-3 sentences): State the decision, acknowledge the dilemma, and clearly state your choice
2. **Argument for your choice** (1-2 paragraphs): Present the strongest reasons supporting your option
3. **Address the alternative** (1 paragraph): Acknowledge the other option's strengths, then explain why your choice is still better
4. **Conclusion** (2-3 sentences): Restate your position with confidence

## Practice Tips

- Practice with a timer from the start — 50 minutes goes fast
- Write by hand or on a basic text editor to simulate test conditions
- Focus on argument quality over vocabulary or style
- Always address both sides of the prompt
- Use the full 15 minutes of prewriting time — a good outline makes writing faster

## Common Mistakes to Avoid

- **Not picking a side**: You must choose one option. Fence-sitting produces weak essays.
- **Ignoring the other option**: Acknowledging counterarguments shows sophistication.
- **Running out of time**: If you have a strong outline, even an incomplete essay reads better than a rambling one.
- **Over-polishing**: This isn't a creative writing contest. Clear, logical prose wins.

Use LawPrep AI's Writing Simulator to practice under real conditions with official-style prompts and proper timing.
    `,
  },
  {
    slug: "how-to-build-a-3-month-lsat-study-plan",
    title: "How to Build a 3-Month LSAT Study Plan",
    excerpt:
      "A practical, week-by-week framework for structuring your LSAT prep over three months. Adaptable to your schedule, strengths, and target score.",
    date: "2026-02-28",
    readingTime: "8 min read",
    tag: "Study Tips",
    content: `
Three months is one of the most common — and most effective — timeframes for LSAT prep. Here's how to structure those 12 weeks for maximum impact.

## Before You Start: Baseline Test

Take a full, timed practice test before you plan anything. This gives you:
- Your starting score
- Your section-by-section breakdown
- A clear picture of where you need the most work

Don't study for it. Just take it cold. The honest baseline is critical for planning.

## Month 1: Foundation (Weeks 1-4)

**Goal**: Understand every question type and build core skills.

- **Week 1-2**: Learn the fundamentals of each section type. Study the different question types within Logical Reasoning, Reading Comprehension, and Logic Games.
- **Week 3-4**: Practice each section type separately with moderate timing. Focus on understanding *why* answers are right or wrong, not just getting through questions.

**Weekly schedule**: 15-20 hours of study, with at least one timed section per day.

## Month 2: Targeted Practice (Weeks 5-8)

**Goal**: Improve your weakest areas and build test-taking stamina.

- Spend 50% of your time on your weakest section
- Take one full practice test per week
- After each test, do a thorough review of every wrong answer
- Start tracking patterns in your mistakes

**Weekly schedule**: 20-25 hours of study, one full practice test on weekends.

## Month 3: Peak Performance (Weeks 9-12)

**Goal**: Sharpen timing, build confidence, simulate test conditions.

- Take 2 full practice tests per week
- Focus on timing strategy and question triage
- Review weak areas identified by your analytics
- Taper study in the final week — light review, no cramming

**Weekly schedule**: 20 hours of study + practice tests, tapering to 10 hours in the final week.

## Key Principles

1. **Quality over quantity**: One well-reviewed practice test is worth more than three unreviewed ones.
2. **Track everything**: Use analytics to make data-driven decisions about where to spend time.
3. **Rest is productive**: Burnout kills LSAT scores. Take at least one full day off per week.
4. **Adapt the plan**: If your Month 1 baseline shows you're already strong in Logic Games, shift that time elsewhere.

LawPrep AI's Study Planner can generate a personalized version of this plan based on your specific exam date, weekly availability, and current performance data.
    `,
  },
  {
    slug: "logical-reasoning-question-types-explained",
    title: "Every LSAT Logical Reasoning Question Type, Explained",
    excerpt:
      "A breakdown of all the Logical Reasoning question types you'll encounter on the LSAT, with strategies for approaching each one efficiently.",
    date: "2026-02-20",
    readingTime: "10 min read",
    tag: "LSAT Guide",
    content: `
Logical Reasoning makes up roughly half of your scored LSAT questions. Understanding the different question types — and having a strategy for each — is essential for a strong score.

## The Main Question Types

### 1. Must Be True / Main Conclusion
**What it asks**: Which answer choice is best supported by the passage?

**Strategy**: Read the stimulus carefully. The correct answer will be directly supported by the text — don't make assumptions beyond what's stated.

### 2. Strengthen / Weaken
**What it asks**: Which answer choice makes the argument stronger or weaker?

**Strategy**: First, identify the conclusion and the evidence. Then look for the gap between them. The correct answer will bridge that gap (strengthen) or exploit it (weaken).

### 3. Assumption (Necessary / Sufficient)
**What it asks**: What must the author be assuming?

**Strategy**: Find the conclusion and ask "What's missing?" A necessary assumption is something the argument falls apart without. A sufficient assumption is something that, if true, makes the conclusion follow logically.

### 4. Flaw in Reasoning
**What it asks**: What's wrong with this argument?

**Strategy**: Common flaws include: confusing correlation with causation, hasty generalizations, ad hominem attacks, false dichotomies, and circular reasoning. Learn to recognize these patterns quickly.

### 5. Parallel Reasoning
**What it asks**: Which answer choice uses the same logical structure?

**Strategy**: Abstract the argument structure into a formula (e.g., "All A are B. X is A. Therefore X is B.") and find the matching structure. Ignore the topic — focus on form.

### 6. Method of Reasoning
**What it asks**: How does the author make their argument?

**Strategy**: Pay attention to the argumentative techniques used: analogy, example, counterexample, elimination of alternatives, appeal to authority, etc.

### 7. Point at Issue
**What it asks**: What do the two speakers disagree about?

**Strategy**: Find the specific claim where one speaker says yes and the other says no. The correct answer must be something both speakers address with opposing views.

### 8. Resolve the Paradox
**What it asks**: Which answer choice explains the apparent contradiction?

**Strategy**: Identify the two facts that seem contradictory. The correct answer will provide information that makes both facts true simultaneously.

## General Tips

- **Read the question stem first** so you know what you're looking for
- **Identify the conclusion immediately** — most questions revolve around it
- **Eliminate wrong answers** rather than hunting for the right one
- **Watch for extreme language** in answer choices — words like "always" and "never" are often wrong

Practice these question types individually using LawPrep AI's section filtering to focus on the areas where you need the most improvement.
    `,
  },
] as const;

export const STATS = [
  { value: "10,000+", label: "Practice Questions" },
  { value: "3", label: "LSAT Section Types" },
  { value: "80+", label: "Official PrepTests" },
  { value: "24/7", label: "AI Study Assistant" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "FAQ", href: "/faq" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
