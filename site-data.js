export const STORY_FILTERS = [
  { key: 'all', label: 'All stories' },
  { key: 'learning', label: 'Learning' },
  { key: 'developer', label: 'Developer activation & adoption' },
  { key: 'product', label: 'Product & research' },
  { key: 'ai', label: 'AI data & research' },
  { key: 'workforce', label: 'Workforce' }
];

export const STORIES = [
  {
    id: 'mastercard-foundation', name: 'Mastercard Foundation', cats: ['learning', 'workforce'], catLabel: 'Learning and workforce activation',
    summary: 'A distributed programme connecting skills development to work and income opportunities.',
    stats: ['114,000+ registrations', '37,000+ course completions', '10,000+ work matches'], link: 'Read the story', thumb: 'pathway', thumbLabel: 'Learn → work',
    title: 'Learning and work opportunities | Propel', eyebrow: 'Learning & Workforce Activation', h1: 'Learning and work opportunities',
    intro: 'Mastercard Foundation needed to reach young people in Nigeria and Kenya and help them build the practical skills to participate in the remote and gig economy. Propel coordinated recruitment, learning delivery, participant support and opportunity matching.',
    factsTitle: 'Programme highlights',
    bars: { caption: 'Reported programme activity.', items: [
      { label: 'Learner registrations', value: '114,000+', w: 100 },
      { label: 'People trained', value: '90,000+', w: 78.9 },
      { label: 'Course completions', value: '37,000+', w: 32.5 },
      { label: 'People matched to remote work, gig platforms and income opportunities', value: '10,000+', w: 8.8 }
    ] },
    context: [{ k: 'Markets', v: 'Nigeria and Kenya' }, { k: 'Focus', v: 'Soft skills, digital literacy and gig-economy readiness' }],
    visual: { type: 'pathway', title: 'Learning pathway', steps: [
      { t: 'Reach learners', d: 'Community outreach and paid campaigns across Nigeria and Kenya.' },
      { t: 'Supported learning', d: 'Facilitator-led virtual sessions, communications and follow-up.' },
      { t: 'Course completion', d: 'Recorded as a separate measure from training.' },
      { t: 'Opportunity matching', d: 'Validated participants connected to remote work, gig platforms and income opportunities.' }
    ] },
    sections: [
      { h: 'The brief', ps: ['The programme focused on soft skills, digital literacy and gig-economy readiness. Reaching learners was only the beginning. The delivery also needed to support progress and connect participants to relevant opportunities.'] },
      { h: 'How Propel delivered', ps: ['Community outreach and paid campaigns brought learners into the programme across Nigeria and Kenya. Facilitator-led virtual sessions supported the learning, with communications and follow-up helping people navigate the programme.', 'Propel also organised opportunity-matching activities: identifying relevant work pathways, validating participants and connecting them with remote work, gig platforms and other income-generating opportunities.'] },
      { h: 'The results', ps: ['The programme recorded 114,000+ registrations and trained 90,000+ people. Course completion is a separate measure, with 37,000+ completions recorded. More than 10,000 participants were matched to work and income opportunities.'] }
    ],
    cta: { h: 'Start a conversation', p: "Let's discuss the audience, the skills and the opportunity you want the programme to create.", label: 'Scope a learning programme', topic: 'Learning or certification' },
    related: [{ id: 'google-ai-opportunity-fund', name: 'Google AI Skills Training' }]
  },
  {
    id: 'google-ai-opportunity-fund', name: 'Google AI Skills Training', cats: ['learning'], catLabel: 'Learning',
    summary: 'AI skills training delivered through community recruitment, supported cohorts and facilitator-led workshops, with delivery in Portugal.',
    stats: [], link: 'Read the story', thumb: 'pathway', thumbLabel: 'Course · Cohort · Workshop',
    title: 'Google AI Skills Training | Propel', eyebrow: 'Learning & Certification', h1: 'Google AI Skills Training',
    intro: "For Google.org's AI Opportunity Fund, Propel recruited participants through community relationships and supported them through Google AI Essentials and live facilitator-led workshops. Delivery took place in Portugal.",
    factsTitle: 'Programme context',
    context: [{ k: 'Location', v: 'Portugal' }, { k: 'Audience', v: 'Immigrant and underserved communities' }, { k: 'Learning', v: 'Google AI Essentials through Coursera' }, { k: 'Delivery', v: 'Community recruitment, cohorts and live workshops' }],
    visual: { type: 'pathway', title: 'Supported-learning plan', steps: [
      { t: 'Community recruitment', d: 'Eligible participants reached through community relationships in Portugal.' },
      { t: 'Supported cohorts', d: 'Learners organised into cohorts for consistent progress and peer participation.' },
      { t: 'Google AI Essentials', d: 'Course content delivered through Coursera.' },
      { t: 'Live workshops', d: 'Facilitator-led sessions supporting the learning and its practical application.' }
    ] },
    sections: [
      { h: 'The brief', ps: ['The programme targeted people facing barriers to employment and digital opportunity, including recent immigrants and refugees, unemployed and underemployed adults, and people seeking new career options.', 'The delivery needed to connect those audiences to practical AI learning and provide support as they worked through it.'] },
      { h: 'How Propel delivered', ps: ['Community recruitment brought eligible participants into the programme. Learners were organised into cohorts to support consistent progress and peer participation.', 'Google AI Essentials provided the course content. Live, facilitator-led workshops added support around the learning and its practical application.'] }
    ],
    cta: { h: 'Start a conversation', p: "Tell us who should take part and what they should be able to do afterwards.", label: 'Scope a learning programme', topic: 'Learning or certification' },
    related: [{ id: 'mastercard-foundation', name: 'Mastercard Foundation' }]
  },
  {
    id: 'hedera', name: 'Hedera', cats: ['developer'], catLabel: 'Developer activation & adoption',
    summary: 'Community distribution, supported learning and hackathon participation across 20+ cities.',
    stats: ['45,000+ participants', '1,400+ project submissions'], link: 'Read the story', thumb: 'board', thumbLabel: 'Onboard · Build · Submit',
    title: 'Developer programmes with Hedera | Propel', eyebrow: 'Developer activation & adoption', h1: 'Developer programmes with Hedera',
    intro: 'The Hedera Africa Hackathon brought developer education and practical building into one programme. Propel supported community distribution, participant onboarding, learning and continued engagement across African markets.',
    factsTitle: 'Reported programme results',
    bars: { caption: 'People counts across programme activities.', items: [
      { label: 'Participants onboarded', value: '45,000+', w: 100 },
      { label: 'Competing developers', value: '13,000+', w: 28.9 },
      { label: 'Certified developers', value: '4,000+', w: 8.9 }
    ] },
    tiles: [{ v: '1,400+', l: 'projects submitted' }, { v: '20+', l: 'cities' }],
    visual: { type: 'doc', title: 'Project submission', doc: { name: 'Hackathon project submission', fields: [
      { k: 'Project', v: 'The problem the team set out to solve and what they built.' },
      { k: 'Links', v: 'Code repository · Demo · Project document', chips: true },
      { k: 'Participation', v: 'Team members and participation records, where agreed.' },
      { k: 'Status', v: 'Review-ready output for the client team.' }
    ] } },
    sections: [
      { h: 'The brief', ps: ['The initiative, launched by Exponential Science and The Hashgraph Association, aimed to bring new builders into the Hedera ecosystem. Developers needed a way to discover the programme, get familiar with the technology and move into hands-on participation.'] },
      { h: 'How Propel delivered', ps: ['Propel activated relevant communities through newsletters, opportunity listings, community-leader outreach and programme communications.', 'Learning support included onboarding guidance and promotion of the Hedera Developer Certification pathway. Support channels and programme communications helped participants navigate the learning and prepare for the build.', 'As the hackathon progressed, team-formation prompts, webinars, check-ins and deadline reminders helped maintain participation. Country-level incentives supported engagement in markets including Nigeria and Kenya.'] },
      { h: 'The results', ps: ['Reported results include 45,000+ participants onboarded, 13,000+ competing developers, 4,000+ certified developers and 1,400+ project submissions across 20+ cities.'] }
    ],
    quoteTitle: 'Partner feedback',
    quote: { text: '“What stood out in this collaboration was Propel’s ability to convert awareness into real builder participation.”', by: 'Eya, DAR Blockchain' },
    cta: { h: 'Start a conversation', p: "Tell us what you want developers to build, and who should be building it.", label: 'Plan a developer activation', topic: 'Developer activation & adoption' },
    related: [{ id: 'squadco', name: 'SquadCo fintech hackathon' }]
  },
  {
    id: 'orange-wolof', name: 'Orange', cats: ['ai'], catLabel: 'AI data & research',
    summary: 'Finding a rare three-language population and turning its work into multilingual NLP data.',
    stats: ['1,800+ qualified participants', '200K+ annotated records'], link: 'Read the story', thumb: 'language', thumbLabel: 'Wolof · French · English',
    title: 'Wolof language research | Propel', eyebrow: 'AI data & research', h1: 'Multilingual NLP data in a hard-to-source language',
    intro: 'Orange Silicon Valley needed multilingual NLP data across Wolof, French and English, and every contributor had to be proficient in all three. Propel found the people, ran the workflows and fed the results into the NLP and model layer.',
    factsTitle: 'Results',
    tiles: [{ v: '1,800+', l: 'qualified multilingual participants' }, { v: '200K+', l: 'annotated language records' }, { v: '90th', l: 'percentile model accuracy, as measured on the client’s evaluation' }, { v: '730+', l: 'hours of manual effort saved' }],
    context: [{ k: 'Languages', v: 'Wolof, French and English' }, { k: 'Client team', v: 'Orange Silicon Valley, with contributors in Senegal' }, { k: 'Duration', v: 'Over 4 months' }],
    visual: { type: 'timeline', title: 'How the work ran', duration: 'Over 4 months', steps: [
      { t: 'Define the population', d: 'Contributors proficient in all three languages, with the local context the task needed.' },
      { t: 'Find and qualify', d: 'Community access and targeted mobilisation, then checks against the language requirement.' },
      { t: 'Produce the data', d: 'Transcription, translation, contextualisation, annotation and labelling in structured workflows.' },
      { t: 'Feed the model layer', d: 'Quality-checked records delivered into the NLP and model pipeline.' }
    ] },
    sections: [
      { h: 'The brief', ps: ['The requirement was difficult in a specific way. Contributors needed to be proficient in Wolof, French and English, so a general technical audience, or a standard crowd platform, would not have met it.'] },
      { h: 'How Propel delivered', ps: ['Propel mobilised relevant communities to find people with the three-language profile, then qualified them against the requirement. Multilingual transcription, translation, contextualisation, annotation and labelling ran as structured workflows, with a data-science layer on top that fed the NLP and model layer.'] },
      { h: 'The results', ps: ['The engagement identified 1,800+ qualified multilingual participants and turned their work into 200K+ annotated language records. Model accuracy reached the 90th percentile on the client’s evaluation, and the structured workflows saved 730+ hours of manual effort over four months.'] }
    ],
    cta: { h: 'Start a conversation', p: 'Tell us the languages, the skills and the output you need. We will scope the population and the workflow.', label: 'Scope a research brief', topic: 'AI data & research' },
    related: [{ id: 'on-demand-delivery-platform', name: 'US on-demand delivery platform' }, { id: 'defined-ai', name: 'Defined.ai' }]
  },
  {
    id: 'defined-ai', name: 'Defined.ai', cats: ['ai'], catLabel: 'AI data & research',
    summary: 'Community-sourced data contribution across emerging markets.',
    stats: ['100,000+ data sets delivered'], link: 'Read the story', thumb: 'brief', thumbLabel: 'Contributor brief',
    title: 'Data contribution for AI | Propel', eyebrow: 'AI data & research', h1: 'Data contribution for AI',
    intro: 'Defined.ai needed diverse data for AI model training across markets that were difficult to reach through conventional sourcing. Propel activated its ecosystem to support the work.',
    factsTitle: 'Result',
    tiles: [{ v: '100,000+', l: 'data sets delivered across emerging markets' }],
    visual: { type: 'doc', title: 'Contributor brief', doc: { name: 'Data contribution brief', fields: [
      { k: 'Requirements', v: 'Relevant professionals with an understanding of the market context.' },
      { k: 'Instructions', v: 'Task instructions agreed with the client before contribution begins.' },
      { k: 'Acceptance criteria', v: "The client's methodology and review standards." },
      { k: 'Delivery records', v: 'Agreed records of the data sets delivered.' }
    ] } },
    sections: [
      { h: 'The brief', ps: ['The project needed data contribution at scale, with access to people who understood the relevant market context.'] },
      { h: "Propel's role", ps: ['Propel used its community network to organise contribution from relevant professionals across emerging markets. The engagement delivered more than 100,000 data sets for Defined.ai.'] }
    ],
    cta: { h: 'Discuss your research', p: "We'll discuss participant requirements, the task and the output your team needs.", label: 'Scope a research brief', topic: 'AI data & research' },
    related: [{ id: 'orange-wolof', name: 'Orange' }, { id: 'on-demand-delivery-platform', name: 'US on-demand delivery platform' }]
  },
  {
    id: 'on-demand-delivery-platform', art: 'defined-ai', name: 'US on-demand delivery platform', cats: ['ai'], catLabel: 'AI data & research',
    summary: 'A specialist cohort in five languages, delivering production-grade audio data in 10 days.',
    stats: ['200 audio hours', '93% acceptance', '10-day delivery'], link: 'Read the story', thumb: 'timeline', thumbLabel: 'Five languages · 10 days',
    title: 'Production-grade audio data in 10 days | Propel', eyebrow: 'AI data & research', h1: 'Production-grade audio data in 10 days',
    intro: 'A leading US on-demand delivery platform needed audio data from live customer and courier interactions, across five languages, on a tight timeline. Propel assembled and managed a specialist cohort with the client’s quality requirements built into the workflow.',
    factsTitle: 'Results',
    tiles: [{ v: '100+', l: 'person specialist cohort' }, { v: '5', l: 'languages' }, { v: '200', l: 'audio hours delivered' }, { v: '93%', l: 'audio acceptance rate' }],
    context: [{ k: 'Delivery', v: '10 days' }, { k: 'Source material', v: 'Live customer and courier interactions' }],
    visual: { type: 'timeline', title: 'Ten-day delivery', duration: '10-day delivery', steps: [
      { t: 'Assemble the cohort', d: '100+ qualified speakers and linguistic transcribers across five languages.' },
      { t: 'Embed quality requirements', d: 'The client’s acceptance criteria built into the production workflow.' },
      { t: 'Produce and QA', d: 'Managed transcription of live interactions, quality-checked throughout.' },
      { t: 'Deliver', d: '200 audio hours handed over at 93% acceptance.' }
    ] },
    sections: [
      { h: 'The brief', ps: ['The platform needed rapid, production-grade delivery using real customer and courier interactions in five languages. Speed mattered, but so did consistent quality against the client’s acceptance standards.'] },
      { h: 'How Propel delivered', ps: ['Propel rapidly assembled and managed qualified speakers and linguistic transcribers, and embedded the client’s quality requirements into the production workflow rather than checking at the end.'] },
      { h: 'The results', ps: ['A cohort of more than 100 specialists delivered 200 audio hours at a 93% acceptance rate within 10 days.'] }
    ],
    cta: { h: 'Start a conversation', p: 'Tell us the languages, the volume and the deadline.', label: 'Scope a research brief', topic: 'AI data & research' },
    related: [{ id: 'orange-wolof', name: 'Orange' }, { id: 'defined-ai', name: 'Defined.ai' }]
  },
  {
    id: 'stepstone', name: 'Stepstone', cats: ['workforce'], catLabel: 'Workforce',
    summary: 'A structured pipeline of relevant, verified tech professionals.',
    stats: [], link: 'Read the story', thumb: 'candidate', thumbLabel: 'Candidate presentation',
    title: 'A tailored talent pipeline | Propel', eyebrow: 'Workforce Activation', h1: 'A tailored talent pipeline',
    intro: 'Stepstone worked with Propel to create a structured pipeline of verified tech professionals, matched to its technical needs and working culture.',
    visual: { type: 'doc', title: 'Candidate presentation', doc: { name: 'Candidate presentation', fields: [
      { k: 'Role brief', v: 'Technical requirements and working culture agreed with the hiring team.' },
      { k: 'Relevant checks', v: 'Verification and screening shaped to the role.' },
      { k: 'Experience evidence', v: 'Projects and experience relevant to the requirements.' },
      { k: 'Introduction', v: 'A client-reviewed introduction to the hiring team.' }
    ] } },
    sections: [
      { h: 'The brief', ps: ['The team needed relevant candidates and a structured talent pipeline shaped to its hiring requirements.'] },
      { h: "Propel's role", ps: ["Propel sourced through specialised communities and matched professionals to Stepstone's requirements. The engagement delivered a verified, pipeline-ready talent pool within a compressed timeframe."] }
    ],
    cta: { h: 'Discuss workforce needs', p: 'Tell us the roles, skills and hiring plans ahead.', label: 'Discuss workforce needs', topic: 'Workforce needs' },
    related: [{ id: 'coreloops', name: 'Coreloops' }, { id: 'unique-ai', name: 'Unique AI' }]
  },
  {
    id: 'fertitude', name: 'Fertitude', cats: ['product'], catLabel: 'Product & research',
    summary: 'Real users helped shape a period-tracking experience.',
    stats: ['120 testers', '500+ insights', '17 UX improvements'], link: 'Read the story', thumb: 'task', thumbLabel: 'Tracker task record',
    title: 'Product testing with Fertitude | Propel', eyebrow: 'Product Testing & User Research', h1: 'Product testing with Fertitude',
    intro: 'Fertitude was developing a period-tracking experience and needed detailed feedback from the people it was designed for. Propel recruited relevant testers and organised a structured testing cycle.',
    factsTitle: 'Programme highlights',
    pct: [{ label: 'Tester engagement', p: 92 }],
    tiles: [{ v: '120', l: 'testers recruited' }, { v: '500+', l: 'user insights' }, { v: '17', l: 'UX improvements implemented' }, { v: '40%', l: 'reported adoption increase after launch, following the testing cycle and product changes' }],
    visual: { type: 'doc', title: 'Tracker test record', doc: { name: 'Task record', fields: [
      { k: 'Task', v: '“Explore the tracker and record your observations.”' },
      { k: 'Observations', v: 'What the tester tried, what was clear and where they hesitated.' },
      { k: 'Evidence', v: 'Screenshot · Survey response · Check-in note', chips: true },
      { k: 'Review', v: 'Grouped into findings and recommendations for the product team.' }
    ] } },
    sections: [
      { h: 'The brief', ps: ['The team wanted to understand how people used the tracker, how clearly features were explained and where the experience needed work. The subject also required care around participant comfort and privacy.'] },
      { h: 'How Propel delivered', ps: ['Propel recruited testers from female-focused communities, bringing different experiences and user needs into the programme. Guided tasks covered core product activities, including cycle logging, the tracker, the Kiki assistant, support groups and educational content.', 'Surveys, feedback prompts and individual check-ins gave participants several ways to share their experience. Propel brought the feedback together into findings and recommendations for the product team.'] },
      { h: 'The results', ps: ['The programme generated more than 500 insights with 92% tester engagement. Fertitude implemented 17 UX improvements covering areas such as navigation, accessibility and feature clarity.', 'Fertitude also reported a 40% increase in adoption after launch, following the testing cycle and product changes.'] }
    ],
    quoteTitle: 'Client feedback',
    quote: { text: '“Propel’s ability to rapidly recruit and manage high-quality testers saved us weeks of development time and gave us the confidence to launch.”', by: 'CEO & Co-founder, Fertitude' },
    cta: { h: 'Start a conversation', p: 'Tell us the feature, the users and the questions you need answered.', label: 'Discuss a product programme', topic: 'Product testing or adoption' },
    related: [{ id: 'big-cabal-media', name: 'Big Cabal Media' }]
  },
  {
    id: 'big-cabal-media', name: 'Big Cabal Media', cats: ['product'], catLabel: 'Product & research',
    summary: 'A complete, supported beta-testing cycle for TC Insights Pro.',
    stats: ['100% test completion', 'Two weeks'], link: 'Read the story', thumb: 'task', thumbLabel: 'Beta test · two weeks',
    title: 'A two-week testing programme | Propel', eyebrow: 'Product Testing & User Research', h1: 'A two-week testing programme',
    intro: "Big Cabal Media wanted to validate TC Insights Pro, its AI-powered intelligence platform for Africa's digital economy. Propel recruited relevant professionals and supported them through an organised beta test.",
    factsTitle: 'Results',
    pct: [{ label: 'Test completion', p: 100 }],
    areas: { title: 'Feedback areas', items: ['Usability', 'Credibility', 'Feature priorities', 'Pricing'] },
    visual: { type: 'timeline', title: 'Testing timeline', duration: 'Two-week testing cycle', steps: [
      { t: 'Recruit', d: 'Professionals matched to the intended user profile.' },
      { t: 'Onboard', d: 'Testing instructions and structured feedback prompts.' },
      { t: 'Support the test', d: 'Communication, follow-ups and responsive support.' },
      { t: 'Report', d: 'Qualitative and quantitative feedback organised for the product team.' }
    ] },
    sections: [
      { h: 'The brief', ps: ["The team needed to know whether the product's experience matched its promise: fast, useful and credible research. Earlier testing efforts had produced limited engagement, so the new cycle needed clear tasks and sustained participant support."] },
      { h: 'How Propel delivered', ps: ['Propel recruited professionals against the intended user profile, then onboarded them with testing instructions and structured feedback prompts.', 'Communication, follow-ups and responsive support helped participants finish the work. Qualitative and quantitative feedback was organised into a report the product team could use.'] },
      { h: 'What the team received', ps: ['Every tester completed the cycle. Findings helped Big Cabal Media examine product usability, perceived credibility, feature priorities and pricing, giving the team evidence to guide its next product decisions.'] }
    ],
    quoteTitle: 'Client feedback',
    quote: { text: '“We received high-quality insights in a short time. Propel helped us get to market very quickly by giving us access to the right users and actionable feedback.”', by: 'Olanrewaju Odunowo, Head of TechCabal Insights, Big Cabal Media' },
    cta: { h: 'Plan your product programme', p: "Tell us the product and the questions you need users to answer.", label: 'Discuss a product programme', topic: 'Product testing or adoption' },
    related: [{ id: 'fertitude', name: 'Fertitude' }]
  },
  {
    id: 'coreloops', name: 'Coreloops', cats: ['workforce'], catLabel: 'Workforce',
    summary: 'Specialised technical hiring to support a growing product team.',
    stats: ['Five hires', 'Two hiring cycles', '14 days to offer on average'], link: 'Read the story', thumb: 'timeline', thumbLabel: '14 days on average',
    title: 'Technical hiring for Coreloops | Propel', eyebrow: 'Workforce Activation', h1: 'Technical hiring for Coreloops',
    intro: 'Coreloops needed senior engineering, product and AI capability as it prepared for its next stage of growth. Propel sourced relevant professionals through specialised communities and coordinated the hiring process.',
    factsTitle: 'Results',
    tiles: [{ v: '5', l: 'hires' }, { v: '2', l: 'hiring cycles' }, { v: '14 days', l: 'average from role kickoff to offer acceptance' }],
    context: [{ k: 'Senior full-stack engineers', v: '3' }, { k: 'Technical product manager', v: '1' }, { k: 'AI/ML engineer', v: '1' }],
    visual: { type: 'timeline', title: 'Hiring timeline', duration: 'Average 14 days from role kickoff to offer acceptance.', steps: [
      { t: 'Role kickoff', d: 'Technical stack, role requirements and operating context.' },
      { t: 'Sourcing', d: 'Candidates from relevant engineering, product and AI communities.' },
      { t: 'Screening and presentation', d: 'Presentations focused on why each person fit the role.' },
      { t: 'Offer acceptance', d: 'Interviews, expectations, compensation discussions and offers coordinated.' }
    ] },
    sections: [
      { h: 'The brief', ps: ['The team needed people with the right skills and the ability to work at startup pace. Time mattered, but so did technical fit and understanding of the product.'] },
      { h: 'How Propel delivered', ps: ['Propel worked through the technical stack, role requirements and operating context before sourcing. Candidates came from relevant engineering, product and AI communities.', 'Screening and candidate presentations focused on why each person fit the role. Propel also coordinated interviews, expectations, compensation discussions and offers.'] },
      { h: 'The results', ps: ['Five professionals joined through two hiring cycles. The average time from role kickoff to offer acceptance was 14 days.'] }
    ],
    quoteTitle: 'Client feedback',
    quote: { text: '“They handled the entire screening process, made onboarding effortless, and were consistently quick and clear in their communication.”', by: 'CEO, Coreloops' },
    cta: { h: 'Start a conversation', p: 'Tell us the role, the requirements and the timing.', label: 'Discuss workforce needs', topic: 'Workforce needs' },
    related: [{ id: 'unique-ai', name: 'Unique AI' }]
  },
  {
    id: 'squadco', name: 'SquadCo', cats: ['developer'], catLabel: 'Developer activation & adoption',
    summary: 'Targeted recruitment for a fintech hackathon.',
    stats: ['300+ participants', 'Application goal exceeded by 40%'], link: 'Read the story', thumb: 'timeline', thumbLabel: 'Six-week recruitment',
    title: 'A fintech developer challenge | Propel', eyebrow: 'Developer activation & adoption', h1: 'A fintech developer challenge',
    intro: 'SquadCo needed a qualified participant pool for its fintech hackathon within a six-week recruitment window. Propel activated relevant technical communities to bring developers, designers and innovators into the programme.',
    factsTitle: 'Results',
    pct: [{ label: 'Participants with relevant fintech or coding experience', p: 70 }, { label: 'Active participation during the hackathon', p: 80 }],
    tiles: [{ v: '300+', l: 'participants' }, { v: '40%', l: 'above the application goal' }, { v: '10+', l: 'standout fintech solutions' }],
    visual: { type: 'timeline', title: 'Recruitment timeline', duration: 'Six-week recruitment window', steps: [
      { t: 'Distribute', d: 'The opportunity shared through technical communities.' },
      { t: 'Sign-up', d: 'Organised registration and programme communications.' },
      { t: 'Prepare', d: 'Engagement support before the event.' },
      { t: 'Hackathon', d: 'Participants building fintech solutions.' }
    ] },
    sections: [
      { h: 'The brief', ps: ['The hackathon needed participants with relevant skills and an interest in financial technology. The recruitment also aimed for a range of backgrounds, experience and perspectives.'] },
      { h: 'How Propel delivered', ps: ['Propel distributed the opportunity through technical communities, organised sign-up and programme communications, and supported engagement before the event. Recruitment considered skills, interests and representation alongside the participant goal.'] },
      { h: 'The results', ps: ['The programme attracted more than 300 participants and exceeded its application goal by 40%. The case record reports 80% active participation during the hackathon and more than ten standout solutions, with several concepts progressing within SquadCo.'] }
    ],
    cta: { h: 'Plan your developer programme', p: "Let's shape the audience and programme around your challenge.", label: 'Plan a developer activation', topic: 'Developer activation & adoption' },
    related: [{ id: 'hedera', name: 'Hedera' }]
  },
  {
    id: 'quidax-moonshot', name: 'Quidax × Moonshot', cats: ['developer'], catLabel: 'Developer activation & adoption',
    summary: 'A targeted campaign connecting a pitch competition to relevant Web3 founders and builders.',
    stats: ['Qualified responses within the first week'], link: 'Read the story', thumb: 'timeline', thumbLabel: 'Two-week campaign',
    title: 'Reaching a specialised audience | Propel', eyebrow: 'Community & Developer Activation', h1: 'Reaching a specialised audience',
    intro: 'Quidax sponsored the Crypto Innovation Pitch Fest at Moonshot and needed to reach relevant Web3 startups and builders quickly. Propel organised a targeted two-week community campaign.',
    visual: { type: 'timeline', title: 'Campaign sequence', duration: 'Two-week community campaign', steps: [
      { t: 'Define the audience', d: 'Web3 founders and builders; the offer of exposure, potential funding and participation.' },
      { t: 'Community distribution', d: 'Web3 communities, startup circles, developer networks and peer distribution.' },
      { t: 'Event participation', d: 'A relevant lineup of Web3 startups and participants for the pitch competition.' }
    ] },
    sections: [
      { h: 'The brief', ps: ['The competition needed qualified applicants and visibility among people building blockchain projects. Broad promotion alone would not have delivered the audience the event required.'] },
      { h: 'How Propel delivered', ps: ['Propel shaped the campaign around the opportunity for founders: exposure, potential funding and participation in the event. Distribution focused on Web3 communities, startup circles and relevant developer networks.', 'Community outreach and peer distribution connected the competition to a focused applicant pool.'] },
      { h: 'The results', ps: ['The campaign produced qualified responses within its first week and helped build a relevant lineup of Web3 startups and participants for the pitch competition.'] }
    ],
    quoteTitle: 'Client feedback',
    quote: { text: '“We needed visibility and relevance in a niche space…. and Propel delivered.”', by: 'Tochukwu Udunwa, B2B Marketing Lead, Quidax' },
    cta: { h: 'Start a conversation', p: 'Tell us the brief and the deadline.', label: 'Start a conversation', topic: '' },
    related: [{ id: 'squadco', name: 'SquadCo' }]
  },
  {
    id: 'unique-ai', name: 'Unique AI', cats: ['workforce'], catLabel: 'Workforce',
    summary: 'Precision hiring against specific technical requirements.',
    stats: ['Seven roles filled in 30 days'], link: 'Read the story', thumb: 'timeline', thumbLabel: '7 roles · 30 days',
    title: 'Seven specialist hires in 30 days | Propel', eyebrow: 'Workforce Activation', h1: 'Seven specialist hires in 30 days',
    intro: 'Unique AI needed a technical team within 30 days, with detailed requirements across several engineering disciplines. Propel sourced and screened candidates around those requirements, then organised their presentation for the hiring team.',
    factsTitle: 'Results',
    tiles: [{ v: '7', l: 'specialised roles filled in 30 days' }, { v: '10:1 → 3:1', l: 'interview-to-hire ratio' }],
    visual: { type: 'timeline', title: 'Specialist-hiring timeline', duration: 'Seven roles filled within 30 days', steps: [
      { t: 'Sourcing', d: 'Relevant communities, against detailed engineering requirements.' },
      { t: 'Tailored screening', d: "Screening shaped to Unique AI's criteria." },
      { t: 'Candidate presentation', d: 'Profiles reorganised for easier review; briefing materials for candidates.' },
      { t: 'Interviews and hires', d: 'Interview and assessment coordination.' }
    ] },
    sections: [
      { h: 'The brief', ps: ['The company needed more than a shortlist. Candidate information had to make technical experience and role fit easy to assess, while candidates needed a clear understanding of the product and the work.'] },
      { h: 'How Propel delivered', ps: ["Propel sourced through relevant communities and tailored the screening to Unique AI's criteria. Candidate profiles were reorganised to make their experience easier to review.", 'When misunderstandings about the product emerged, Propel prepared briefing materials for candidates. Interview and assessment coordination helped the team work through decisions.'] },
      { h: 'The results', ps: ['The original six-role brief expanded to seven hires, all filled within the 30-day period. The interview-to-hire ratio fell from 10:1 to 3:1.'] }
    ],
    quoteTitle: 'Client feedback',
    quote: { text: '“Propel accomplished what we thought was impossible. They didn’t just understand our technical requirements – they understood the problem we were trying to solve as a business.”', by: 'Unique AI' },
    cta: { h: 'Start a conversation', p: "Tell us the roles and the skills that matter most.", label: 'Discuss workforce needs', topic: 'Workforce needs' },
    related: [{ id: 'coreloops', name: 'Coreloops' }]
  },
  {
    id: 'tweakcentric', name: 'TweakCentric Solutions', cats: ['workforce'], catLabel: 'Workforce',
    summary: 'A structured opportunity for entry-level professionals to apply their skills.',
    stats: ['Six professionals', 'Three-month engagement'], link: 'Read the story', thumb: 'timeline', thumbLabel: 'Three-month placement',
    title: 'Work opportunities for emerging professionals | Propel', eyebrow: 'Workforce Activation', h1: 'Work opportunities for emerging professionals',
    intro: 'TweakCentric wanted to explore new technical and project capacity through a structured engagement. Propel sourced relevant entry-level professionals and coordinated a three-month placement model.',
    factsTitle: 'Results',
    tiles: [{ v: '6', l: 'professionals placed' }, { v: '3 months', l: 'engagement term' }],
    context: [{ k: 'Support', v: 'Sourcing, onboarding coordination and shared stipend support' }],
    visual: { type: 'timeline', title: 'Placement timeline', duration: 'Three-month placement term.', steps: [
      { t: 'Qualified pool', d: '45 qualified professionals across engineering, cloud, design and project management.' },
      { t: 'Review and selection', d: 'Candidates presented; six selected after review.' },
      { t: 'Onboarding', d: 'Communications, onboarding and stipend arrangements, including first-month support.' },
      { t: 'Three-month placement', d: 'Follow-ups supported the placement.' }
    ] },
    sections: [
      { h: 'The brief', ps: ['The consultancy needed a way to assess promising people through real work, with manageable coordination and financial commitments.'] },
      { h: 'How Propel delivered', ps: ['From a pool of 45 qualified professionals, Propel presented candidates across engineering, cloud, design and project management. Six were selected after review.', "Propel coordinated communications, onboarding and stipend arrangements, including support for the first month's stipend. Follow-ups supported the placement process."] }
    ],
    cta: { h: 'Start a conversation', p: "Let's discuss the skills, work and support involved.", label: 'Discuss workforce needs', topic: 'Workforce needs' },
    related: [{ id: 'mastercard-foundation', name: 'Mastercard Foundation' }]
  }
];

export const ARTICLES = [
  {
    id: 'human-distribution-layer', title: 'How to support technology adoption', pageTitle: 'How to support technology adoption | Propel',
    card: 'A product, course or platform creates a possibility. Participation needs its own delivery plan.', art: 'chain',
    standfirst: 'Technology creates a possibility. Getting people to act on it is a separate piece of work.',
    intro: ['A company launches a developer programme. The documentation is ready, the learning content is published and the registration page is open. People sign up. Then the team has to answer a harder question: what will help those people actually build?', 'The same question appears in different forms elsewhere. Who will finish the course? Which users will complete a meaningful workflow? Where do we find contributors who understand this language and market? How do we keep the right people involved after the first invitation?', 'These questions need delivery decisions. Someone has to understand the audience, organise participation and support the work.'],
    diagram: { title: 'Delivery chain', steps: ['Relevant people', 'Clear activity', 'Supported work', 'Observed outputs'] },
    sections: [
      { h: 'Supporting adoption', ps: ['Good content and a useful product matter. So do the arrangements around them: who is invited, why the task matters, what is expected and where participants can get help.', 'A learning programme might need facilitator-led cohorts and progress check-ins. A hackathon needs developer onboarding, technical resources, team formation and submission support. A research assignment needs relevant participants, clear instructions and a way to assess their contribution.', 'Those are different programmes. They share a need for coordinated human participation.'] },
      { h: 'Community contributions', ps: ['Community leaders have relationships that an enterprise cannot create with a campaign alone. They understand how their members communicate, what interests them and which opportunities are likely to fit.', 'That knowledge helps with distribution and recruitment. It still needs to be connected to an organised programme.', 'At Propel, those components form the operating capability we call the Human Distribution Layer: communities and leaders, learning partners, local operators, infrastructure and the platform that helps coordinate the work.'] },
      { h: 'Coordinating delivery', ps: ["For Google.org's AI Opportunity Fund, the work brought together community recruitment, supported cohorts, Google AI Essentials and live workshops.", "Orange's Wolof-language NLP work needed a different audience. Propel's role was to mobilise contributors with the language and local context the brief required.", 'The two engagements did not use an identical participant network. They show how audience access and delivery can be configured around very different enterprise goals.'] },
      { h: 'What to measure', ps: ['A programme should report the stages that matter to its purpose. Reach tells you about exposure. Registration tells you who expressed interest. Participation, completed work and continued use tell you something else.', 'Mixing those measures makes it harder to understand what happened. Decide what counts before the programme begins, then report each stage clearly.'] },
      { h: 'What can be reused', ps: ['Community relationships, partner arrangements and programme workflows can provide a starting point for the next brief. So can participant records, where there is a relevant and appropriate basis to use them.', 'That is the enterprise value of an operating layer: access to a capability that would otherwise have to be assembled for each initiative. It still has to be adapted to the audience and assessed on the work delivered.'] },
      { h: 'The next action', ps: ['For your next launch or programme, define what a person needs to do after they see the invitation. Then ask what will help them do it.', 'That answer belongs in the delivery plan from the beginning.'] }
    ],
    cta: { label: 'Discuss a programme with Propel', topic: '' },
    related: [{ href: '/article?id=ai-skilling-active-use', name: 'Putting AI skills to use' }]
  },
  {
    id: 'ai-skilling-active-use', title: 'Putting AI skills to use', pageTitle: 'Putting AI skills to use | Propel',
    card: 'How to design the steps between finishing a lesson and applying a tool in real work.', art: 'path',
    standfirst: 'A completed lesson is a useful milestone. The next question is what someone can do with it.',
    intro: ['A learner finishes an AI course and receives a certificate. The programme has delivered something valuable. But if the goal is workplace adoption, the work continues after that moment.', 'Which task will they use the tool for? What will they try when the first result is wrong? Who can help them apply it to a real workflow? When will they use it again?', 'A programme built around those questions has a different shape from a programme designed only for completion.'],
    diagram: { title: 'Learning-to-application pathway', steps: ['Learn the tool', 'Try a relevant task', 'Review the work', 'Apply it again'], loop: true },
    sections: [
      { h: 'Start with an application', ps: ['Pick a task the learner actually needs to do. It might be preparing a research summary, exploring a dataset, drafting a customer response or building a small application.', 'The task gives the learning a destination. It also helps the programme team decide which skills and support the participant needs.', 'There should still be clear standards. Learners need to assess outputs, understand the limits of the tool and recognise when human review is required. Application is more useful when people can explain their judgement alongside the result.'] },
      { h: 'Practical application', ps: ['Supported cohorts create space for questions and peer exchange. Facilitators can help participants work through problems, while practical activities give them a reason to apply what they learned.', "Propel's delivery for Google.org's AI Opportunity Fund combined Google AI Essentials with cohorts and live workshops. The programme connected a global course to local recruitment and participant support.", 'The design lesson is practical: the course provides the content, while the programme gives learners a supported way to work with it.'] },
      { h: 'After the lesson', ps: ['An applied challenge can create a bridge into a project. A project can give someone material to discuss with a mentor, employer or implementation partner. A showcase can help other participants discover useful applications.', 'These next steps need owners, instructions and timing. They cannot be left as a hopeful sentence at the end of the course.'] },
      { h: 'Measure the goal you set', ps: ['For a learning brief, course completion and assessment may be the right measures. For a developer programme, the useful outcome might be a reviewed project or integration. For workplace adoption, it may be continued use in an agreed workflow.', 'Define the measure and the observation period in advance. Keep participation, skill assessment and product use separate so the results remain understandable.'] },
      { h: 'Planning the programme', ps: ['Recruit participants who fit the intended use. Support their learning. Give them practical work. Review the output. Agree a next step that gives them a reason to return.', 'The purpose of each step should be clear to the people taking part, not just to the organisation funding it.', 'Before your next cohort starts, finish this sentence: “After the course, participants will be able to…” Then design the programme around what follows.'] }
    ],
    cta: { label: 'Scope a learning programme', topic: 'Learning or certification' },
    related: [{ href: '/article?id=human-distribution-layer', name: 'How to support technology adoption' }]
  },
  {
    id: 'community-product-research', title: 'Community-led product research', pageTitle: 'Community-led product research | Propel',
    card: 'Relevant participants are a starting point. Structured tasks and support turn their experience into useful feedback.', art: 'feedback',
    standfirst: 'Access to relevant users matters. What you ask them to do matters just as much.',
    intro: ['A product team sends out a beta invitation and receives enthusiastic responses. The testing begins, but the feedback is scattered: a few opinions, a handful of screenshots and several participants who never finish.', 'The problem can be in the research design as much as the recruitment. People need clear tasks, a reasonable commitment and a useful way to explain what happened.', 'Community access helps you find relevant participants. A structured programme helps turn their experience into evidence.'],
    diagram: { title: 'Feedback-to-product workflow', steps: ['Task record', 'Recurring observations', 'Product decisions', 'Follow-up research'] },
    sections: [
      { h: 'Participant selection', ps: ['Start with what the product team needs to learn. Are you testing whether a workflow is understandable? Looking for problems on particular devices? Exploring the usefulness of a new feature?', 'Those decisions shape the participant profile. A developer who can assess an API is not automatically the right person to evaluate a consumer onboarding flow. The brief should explain which experience matters and why.', 'Trusted communities can provide a route into a relevant audience. Selection still has to follow the research criteria.'] },
      { h: 'Make the task clear', ps: ["Ask people to work through a scenario that reflects the product's intended use. Explain what to record, how to report an issue and where they can get help.", 'Leave room for unexpected observations. A participant may understand the task perfectly and still find the product confusing. That is useful information, especially when the report captures what they tried and where they got stuck.'] },
      { h: 'Supporting participants', ps: ['Reminders and check-ins can help people finish the work. They should support participation rather than push people toward a favourable opinion.', "In Propel's two-week testing programme for Big Cabal Media's TC Insights Pro, relevant professionals received clear tasks, feedback prompts and ongoing support. Every tester completed the cycle, giving the product team feedback on usability, credibility, priorities and pricing.", 'What made the cycle useful was the combination: participant fit, structured work and the support to finish it.'] },
      { h: 'Using the findings', ps: ["Fertitude's testing programme recruited 120 users and generated more than 500 insights. The product team implemented 17 UX improvements covering areas such as navigation, accessibility and feature clarity.", 'Those outputs make the work tangible. The number of participants tells you the scale. The findings and changes explain how the research informed the product.'] },
      { h: 'Using the findings', ps: ['Findings are most useful alongside the participant profile and the task. They let your team decide where a pattern is strong enough to act on and where another test is needed.', 'Before recruiting the next cohort, write down the product decision the research should inform. If the testing plan cannot answer it, improve the plan first.'] }
    ],
    cta: { label: 'Discuss a product programme', topic: 'Product testing or adoption' },
    related: [{ href: '/story?id=fertitude', name: 'Fertitude' }, { href: '/story?id=big-cabal-media', name: 'Big Cabal Media' }]
  }
];

/*__DEFINED_FIRST__*/
STORIES.unshift(STORIES.splice(STORIES.findIndex(s => s.id === 'defined-ai'), 1)[0]);
