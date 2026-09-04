---
name: job-application-copilot
description: Analyze a real job, match verified personal evidence, generate a truthful role-specific resume and application materials, and prepare written tests and interviews. Use when the user supplies a job description or asks to prepare, tailor a resume, assess fit, or practice interviews for a specific role.
---

# Job Application Copilot

Turn a job description and the user's master materials into a traceable application package. Optimize relevance without inventing experience or hiding material gaps.

Keep the skill focused on the reusable job-application process. Coursework submission packaging, screenshots for grading, class forms, submission portals and course-specific reflection formats belong to the surrounding project, not this Skill, unless they directly improve future job preparation behavior.

## Start with the application target

Obtain the complete job description, source and role name. Accept a URL, pasted text, screenshots or a local file. Preserve a raw copy and record missing facts rather than inferring them.

When the user supplies a new recruitment notice without narrowing the request, automatically run the full six-part workflow and produce one consolidated application-preparation document. If they ask only for one stage, reuse earlier verified artifacts when available and keep the same evidence rules.

## Source hierarchy

Use these sources in descending order of reliability:

1. User-confirmed statements and corrections.
2. Verifiable original artifacts: master resume, project files, portfolio, repositories and published work.
3. Existing evidence notes that preserve source and uncertainty.
4. AI inference, which must be labeled as inference and never converted into a fact.

Treat the master resume as a fact source, not a document to overwrite. Produce every targeted resume as a separate file.

Use the user's portfolio / evidence index as a primary evidence map when available (for example an Obsidian "作品索引" note). It records project names, public links, local artifact paths, contribution boundaries, suitable roles, risks and missing facts. Treat it as an index and evidence-routing layer, not as proof that every linked work should be included. Recheck the target role and evidence confidence before using any item in a resume or interview answer.

When the JD includes location, onsite, start-date, weekly attendance or duration requirements, run a logistics gate before drafting the resume. Ask only the missing decision-changing questions: whether the user can work in that location, earliest start date, duration and days per week. Do not mechanically copy the user's current city into the targeted resume when it could imply they cannot meet the role's requirement. If availability is confirmed, state it accurately when useful; if unknown, omit the location claim and keep it in the recruiter-confirmation list.

## Workflow

### 1. Analyze the role

Separate explicit facts from interpretation. Determine:

- the business problem and users the role serves;
- responsibilities, working context and likely upstream/downstream partners;
- must-have requirements, preferred requirements and logistical constraints;
- repeated keywords and implicit expectations;
- likely resume-screen, written-test and interview focus.

Before discussing resume edits, explain in simple language:

- the main problem this role exists to solve;
- the three most important capabilities;
- conditions that must be satisfied;
- what the recruiter is likely to assess in interviews.

Support every major conclusion with a short verbatim excerpt from the job description and a source link or artifact reference. Then explain the reasoning from the excerpt to the conclusion in plain language. Keep excerpts short and quote only what is needed. If no job text supports a conclusion, label it as inference or unknown instead of presenting it as fact.

Rank requirements by importance and explain the evidence behind the ranking. Repetition in the JD, placement in a role-specific section, connection to core outputs and explicit requirement language are valid ranking signals. Do not assume every line of a broad startup post is equally important. Clearly distinguish explicit job facts from reasonable interpretation.

Output a role-analysis table using the schema in [references/deliverables.md](references/deliverables.md).

### 2. Match personal evidence

Search the master resume and supplied personal materials for concrete evidence. For every relevant claim, record:

- source experience;
- situation or problem;
- the user's own actions and judgment;
- observable result or output;
- artifact or verification source;
- confidence and missing details;
- AI contribution, teammate contribution and the user's contribution.

Map each role requirement to strong, partial, weak or missing evidence. Do not use personality labels as proof without an action example. Ask one focused follow-up question at a time only when the missing detail could materially change the application.

Surface gaps honestly and divide them into: clarify from existing experience, demonstrate with a small project, learn before interview, or accept as a current limitation.

Every major risk or gap must include an improvement path. Separate actions into: what can be done before applying, what evidence should be prepared before interviews, and how to describe the limitation honestly when it cannot be closed in time. Keep actions proportional to the application timeline; do not prescribe a large new project when a smaller evidence repair is enough.

Before changing the resume, divide the personal assessment into three explicit groups:

1. Verified experiences that genuinely demonstrate fit.
2. Capabilities the user believes they have but whose evidence is still insufficient.
3. Clear current gaps.

Use both the master resume and personal manual when supplied. Do not convert a self-description into proven ability without behavioral evidence.

### 3. Judge whether the role is worth applying for

Make a recommendation from the role requirements, verified evidence, current gaps, learning value, logistics and likely application cost. Explain:

- the user's biggest advantage relative to the role;
- the user's biggest ability or eligibility risk relative to the role;
- the role's biggest benefit or opportunity for the user;
- the role's biggest downside or risk for the user;
- questions that need confirmation from the recruiter;
- the most important preparation before submitting the resume.

Treat this as a two-way fit decision. Separate "why the employer may choose the user" from "why the user may choose the role." Include learning value, work content, supervision, logistics, uncertainty and opportunity cost when supported. Do not assume a role is good for the user merely because they can qualify for it.

Do not reduce the decision to a match score. A score may appear only as optional supporting information with an explained basis. Do not make the final decision for the user; state the recommendation and tradeoffs, then leave the decision to them.

### 4. Prepare a targeted self-introduction

Before drafting the resume or other application materials, prepare a role-specific self-introduction strategy from the role analysis and verified evidence. Use this whenever the user is preparing for an interview, networking conversation, application video, recruiting event or role-related introduction. If the user is not the candidate, adapt the same method to the user's actual role in the scene, such as interviewer, student observer, project leader or club officer.

Use the FAB structure selectively:

- **Feature:** the relevant identity, experience, skill or responsibility the user wants to present;
- **Advantage:** why that feature matters for this specific role or interaction;
- **Benefit:** what value it gives the listener, team, candidate, recruiter or project.

Keep the FAB mapping visible. After each drafted version, explicitly show which sentence or information point corresponds to Feature, Advantage and Benefit. The mapping should explain how the introduction works, not merely label the whole draft as "FAB".

Do not list every experience. Choose two or three evidence-backed points that fit the target scenario and the desired first impression. Prefer concrete proof points and role-relevant judgment over broad labels such as "creative", "responsible" or "good communicator" unless paired with an example.

Produce three time versions by default:

- **1 minute:** clear identity, target relevance, one strongest proof point and a warm close.
- **2 minutes:** identity, target relevance, two proof points, working style and close.
- **3 minutes:** identity, motivation, two or three proof points, role fit or collaboration value, and close.

After the three versions, explain the difference between them in simple terms. State what the longer version adds, what the shorter version leaves out, and when each version is the better choice for the user's scene. This comparison should help the user choose a version, not merely repeat the drafts.

Most interview self-introductions should not exceed three minutes unless the interviewer explicitly asks for more. Keep the version natural enough to speak aloud; do not make it sound like a written essay. If logistics, language, audience or formality would materially change the introduction, ask one focused question; otherwise make a reasonable assumption and label it.

For each version, include a short note explaining what it emphasizes, which verified evidence supports it, how its content maps to Feature/Advantage/Benefit, and what was added or removed compared with the adjacent time version. When evidence is thin, write a narrower introduction instead of padding claims.

### 5. Create role-specific application materials

Generate a targeted resume from verified master-resume facts. Select and reorder material by relevance; do not mechanically include everything.

For each resume bullet:

- lead with the problem, action or responsibility most relevant to the role;
- specify the user's decisions and actions;
- include a result only when supported;
- prefer concrete scope, artifacts and feedback to inflated adjectives;
- preserve whether work was AI-assisted, team-produced, in progress or not yet validated;
- never fabricate metrics, titles, dates, technologies or ownership.

Before delivery, compare every new claim against the evidence table. Flag unsupported wording and revise it. Produce a separate targeted-resume file and a short change log explaining what was selected, omitted, reordered or reframed and why.

When producing the final targeted resume, use these skills in order:

1. Use **humanizer** in embedded mode to remove inflated claims, sales language, vague sources, repetitive structures, filler and chatbot phrasing. Preserve every verified fact and do not add or remove claims. Match the user's natural, professional voice.
2. Use **kami** in resume mode to typeset the approved content as a professional resume. Follow Kami's source pass, resume content schema, recruiter pass, page contract, build checks, font checks and visual verification. Produce HTML and PDF by default, plus another format only when requested or required.

Do not invoke either skill as a substitute for evidence review. Humanizer may improve phrasing but cannot strengthen unsupported claims. Kami may improve presentation but cannot fill missing facts or pad the resume.

In a real application workflow, "final resume" means a complete, application-ready artifact, not advice or a Markdown draft. Unless the user explicitly asks to stop at content review or labels the run as a simulation, complete the humanizer and Kami passes and deliver the verified final files.

Every included project or work sample that has a verified public URL must use a clickable hyperlink in the final resume. Prefer a short descriptive label such as "Demo", "GitHub" or the work title rather than displaying a long raw URL. Verify that the hyperlink target is present and correct before delivery. If a work has only a local or private artifact, do not invent a public link; either omit the link or label the access limitation outside the resume.

When requested, also produce an application email, cover letter or portfolio ordering from the same evidence base. Use the targeted self-introduction step above for interview openings and other first-impression contexts.

Before rewriting, first provide resume adjustment recommendations: what to retain, emphasize, reorder, shorten, omit or clarify, with reasons tied to the role and evidence audit. If the user has not authorized producing a final resume, stop at recommendations.

For a full workflow where the user has requested resume generation, do not stop after recommendations. Produce a role-specific content draft immediately after the recommendations so the user can inspect selection, wording and fact boundaries. Label it as a content draft until the user approves the facts. Then run the approved text through humanizer and Kami for the final formatted deliverables.

After the content draft, show a prioritized gap list and ask whether the user has time to improve the evidence. If they choose to improve it, incorporate only the new verified facts. If they do not have time, still produce the best final resume from current evidence: omit unsupported claims, use narrower wording, or leave out the weak item. Do not withhold the final deliverable merely because optional evidence is incomplete.

For simulations or coursework tests, stop before humanizer/Kami when the user explicitly says a content draft is sufficient. Record that the final formatting stage was intentionally not run, not failed.

### 6. Prepare for written tests and interviews

Predict questions from the ranked requirements and evidence weaknesses, not from generic question lists. Cover:

- motivation and understanding of the business;
- deep dives into the strongest matching projects;
- ownership and AI/team contribution boundaries;
- product sense, user research, prioritization, metrics and iteration;
- technical or domain fundamentals implied by the role;
- logistical constraints and questions for the interviewer.

For a full workflow, prepare the ten most likely interview questions internally. For every question, identify:

- what it assesses;
- which verified experience the user can use;
- likely follow-up questions;
- what is currently insufficient or needs preparation.

Do not force an experience match when none exists; mark it as a gap and propose a preparation action. Do not write polished answers before evidence is sufficient.

Before an interview drill or realistic simulation, help the user select **one memorable proof point** from the verified evidence bank. It should be a real, role-relevant experience with a concrete result or artifact, a meaningful constraint or tension, and the user's own sustained actions or judgment. Do not manufacture a “highlight” or treat popularity, scale, or an impressive number as proof by itself; explain which capability the evidence supports and what a follow-up could verify. Prepare a concise story spine: context, difficulty or choice, actions over time, result, and reflection. Use it as an opening or supporting example only when it genuinely fits the question.

Prepare interview answers with STAR plus difficulty. STAR means Situation, Task, Action and Result. Use it as a clarity scaffold rather than a stiff script, and add the real problem, obstacle, constraint or tradeoff the user faced. A strong story should show not only that something was completed, but what made it hard and how the user responded. If the difficulty is missing, ask for it or mark the answer as less credible; do not invent a struggle.

Strengthen interview stories with the following evidence checks when relevant. Do not force every answer into every pattern; select the checks that fit the claim being tested.

- **Achievement evidence:** connect goal, resistance or constraint, sustained actions, competing demands, and result. Treat a number as an outcome, not as the whole proof.
- **Leadership evidence:** do not accept a title or “I handled most of it” as leadership proof. Ask what was stuck, how work was divided or handed off, how deadlines and coordination were managed, what each person ultimately owned, and what changed in the output or team operation.
- **Reflection evidence:** require a change after the insight. Capture what the user did differently, whether it was applied in a later situation, and what observable result followed. “I realized I was wrong” is incomplete without a corrective action.
- **Planning evidence:** identify critical assumptions and prepare a proportionate fallback path. For future plans, state what small test, alternative channel, or narrower scope the user would use if the preferred path fails.
- **Thinking evidence:** books, news, trends, courses and other inputs do not prove judgment by themselves. Extract the user's own conclusion, what changed in their view, and what decision or action followed.
- **Persistence evidence:** prepare one low-feedback or slow-progress period. Explain how the user decided whether to persist, adjust, pause or stop, rather than treating persistence as continuing indefinitely.
- **Failure evidence:** allow honest failure, but close the story with the concrete repair, the next opportunity to apply it, and the later result when available. Never invent a successful second attempt.

When reviewing an answer, test the full chain: **claim → situation → constraint or choice → user's actions → result → reflection → later change**. Missing links should become follow-up questions or preparation gaps, not polished assumptions.

Also prepare the user's interview delivery and pressure responses:

- **Company understanding:** before the interview, prepare a concise view of the company, product, users, business stage, role contribution and one or two sincere reasons for interest. Tie motivation to observed facts about the company or role, not generic enthusiasm.
- **Speaking pace:** if the user sounds nervous or tends to speak quickly, coach a slower pace with shorter sentences, brief pauses after key points and a clear one-sentence answer before details. A slower pace can make the answer easier to follow and gives interviewers time to read notes or the resume.
- **Connection with the interviewer:** look for appropriate shared ground through the role, company, project, user problem, interviewer question or feedback. Build rapport through curiosity, listening and specific follow-up, not flattery or forced small talk.
- **Unexpected or adversarial follow-ups:** prepare fallback answers for "what if this plan suddenly fails?", "what if a key assumption is wrong?", "what would you do under time/resource limits?", and similar pressure questions. Respond by clarifying the changed condition, naming the assumption affected, proposing a small test or backup path, and explaining the tradeoff.
- **"How could this be more perfect?" follow-up:** never defend the work as already perfect. Identify a realistic next improvement, what evidence would justify it, what constraint prevented it before and how the user would prioritize it.
- **Why this role:** prepare a motivation answer that combines interest, capability fit, learning value and concrete contribution. Avoid relying only on "passion" or salary. If asked "what if your passion fades?", answer with durable reasons such as responsibility, problem curiosity, learning system, team commitment, user value and habits for sustaining effort.
- **Feedback responsiveness:** when real feedback is received, capture it, extract the action item and revise a concrete artifact or answer quickly when appropriate. This creates evidence of responsibility and learning agility. Do not performative-revise everything; change the part the feedback actually targets and explain the improvement.

Run interview preparation in two distinct modes.

#### Mode A: coached ten-question drill

- Do not reveal all ten questions at once during the interactive drill.
- Ask one predicted question, wait for the user's answer, then assess specificity, credibility, relevance, reflection and resistance to follow-up.
- Point out unsupported or vague claims, preserve the user's actual meaning and facts, and provide a stronger interview-ready version.
- Explain what changed and why, then continue to the next question.
- Save the original answer, feedback and revised answer for later review.
- A static coursework or preparation document may contain the full question bank when the user needs it as an artifact, but the live drill remains one question at a time.

#### Mode B: realistic assessment simulation

Use `job-interviewer` at `../job-interviewer/SKILL.md` as the interviewer and assessment layer, while this Skill supplies the verified JD, evidence table, application materials and known risk areas. Pass a structured handoff containing the JD, ranked requirements, evidence table, targeted application materials, resume/application/portfolio claims to verify, known risk areas, unresolved logistics and any known employer feedback policy. The interviewer Skill first creates a role-core written test or interview assessment, then a separate candidate-specific verification layer; after the assessment ends, it produces role- and evidence-specific candidate feedback within the allowed disclosure boundary. If that Skill is unavailable, report the missing dependency rather than silently substituting a coached drill.

- The interviewer Skill independently chooses questions and follow-ups from the role and candidate materials. Do not simply replay the coached ten-question list.
- If a written test is appropriate, present the complete written test in one batch. The user answers the batch before evaluation.
- For the interview, ask one question and wait for one answer. Follow up naturally as a real interviewer would.
- Do not coach, correct or reveal ideal answers during the simulation.
- After the full written test/interview ends, provide one consolidated assessment: strengths, credibility risks, weak evidence, missed opportunities, improved answer strategies and preparation priorities.
- Support multiple simulation rounds when requested, changing questions and pressure points while preserving the same evidence boundaries.

Keep coached practice in this Skill and realistic assessment in `job-interviewer`; do not mix their feedback timing or question banks. Candidate feedback from `job-interviewer` must be generated after the assessment evidence is frozen, while later answer coaching may use that feedback as an input only after the realistic assessment has explicitly ended.

Assign answer ownership explicitly:

- During realistic simulation, the user owns the candidate answer. `job-interviewer` owns questions, adaptive follow-ups, evidence capture and the end-of-assessment evaluation. It must not supply model answers during the assessed interaction.
- After the simulation is explicitly closed, this Skill owns answer coaching. Use the user's actual answer, verified evidence bank and `job-interviewer` evaluation to explain weaknesses and produce a stronger truthful version.
- `job-interviewer` may recommend answer strategies in its final feedback, but the polished candidate answer belongs to this Skill so it remains consistent with the full application evidence and does not blur evaluator and coach roles.

Output the preparation checklist and question bank using [references/deliverables.md](references/deliverables.md).

### 7. Assemble the document, record and iterate

Produce one consolidated document containing these seven user-facing sections in order:

1. 看懂岗位
2. 匹配个人经历
3. 判断优势与缺口
4. 判断是否值得申请
5. FAB 自我介绍
6. 简历调整建议
7. 十个高概率面试问题

Use [references/deliverables.md](references/deliverables.md) for the required contents. Save as a local Markdown document by default so it can be reviewed and later copied or converted to Feishu Docs, Word or PDF. If the user explicitly requests creating or editing a live Feishu document, confirm the destination and content before transmitting personal information.

Save the job input, key outputs, user corrections and final artifacts as a test record. After real interviews or interviewer-observer practice, capture:

- which answer created or reduced trust;
- which follow-up exposed missing evidence;
- which role assumption proved wrong;
- what changed in the workflow and why.

When the observation shows that a specific, credible accomplishment created trust, consider adding or improving the memorable-proof-point preparation above. Record the observation as a context-specific lesson rather than a universal rule that every answer needs a dramatic achievement.

When observer practice reveals a repeatable credibility pattern, update the relevant evidence check rather than adding a generic “answer better” rule. In particular, distinguish: impressive outcome from the process that produced it; leadership title from team-operating behavior; reflection from verified behavior change; aspiration from a plan with fallback paths; information consumption from original judgment; persistence from adaptive decision-making; and honesty from completed corrective action.

Make narrow evidence-based updates to this Skill. Do not add universal rules from a single anecdote.

### 8. Follow up after real applications and interviews

The workflow does not end with simulation or the interview. When the user reports a real application, written test or interview, offer a structured reflection. Ask one focused question at a time when reconstructing the experience.

Capture:

- company, role, date and application stage;
- actual written-test and interview questions;
- the user's original answers and interviewer follow-ups;
- moments that appeared to create or reduce trust;
- facts the user could not answer or evidence that failed under follow-up;
- the user's emotional and physical state when it affected delivery;
- outcome and recruiter feedback, when available;
- lessons, evidence to repair and next actions.

Separate three update targets:

1. **Application record:** save what happened in that specific application.
2. **Personal evidence bank:** add only newly confirmed facts, examples or corrected contribution boundaries.
3. **Skill method:** change this Skill only when the observation improves future decisions beyond one isolated case.

### 9. Archive the completed cycle in Obsidian

After the reflection, evidence update and any justified Skill iteration, archive the complete application cycle in the user's Obsidian knowledge base. This is the final step of the full workflow, not an optional afterthought.

On first use, confirm the vault path and the user's preferred career-folder structure. Do not assume a vault location. Save Markdown records and link the job description, role analysis, targeted resume, written test, interview record, reflection, outcome and next actions. Keep binary artifacts such as the final PDF resume in an attachments or application folder and link them from the Markdown index.

If the vault path is unavailable or write access is not granted, create an Obsidian-ready Markdown bundle in the current workspace and clearly state that it is prepared but not yet stored in the vault. Never claim an archive succeeded without verifying the files exist at the destination.

Preserve candidate, recruiter and company privacy; anonymize interviewers and third parties unless the user explicitly wants identifiable records.

At a useful follow-up point, ask whether the user has received an outcome or recruiter feedback. Do not repeatedly chase them for updates or create reminders unless requested.

## Quality gate

Before calling the package complete, verify:

- every important role requirement has a match or an explicit gap;
- the role is explained in simple language before resume advice;
- every major role-analysis conclusion includes a short JD excerpt and an explicit reasoning chain, or is labeled inference/unknown;
- the three most important capabilities and mandatory conditions are explicit;
- personal evidence is separated into proven, believed-but-under-evidenced and missing;
- every major ability risk includes a concrete pre-application action, interview-preparation action and honest fallback when relevant;
- the application recommendation explains advantage, risk, recruiter questions and pre-submission preparation without replacing the user's decision;
- the recommendation evaluates both directions: user-to-role fit and role-to-user value/risk;
- the targeted self-introduction uses FAB, has 1-minute, 2-minute and 3-minute versions when appropriate, and highlights only evidence-backed points relevant to the audience;
- every resume claim traces to a source;
- AI and team contributions are not presented as independent work;
- planned work is not written as completed work;
- subjective improvement is not presented as quantified impact;
- the targeted resume is separate from the master resume;
- the final resume wording passed humanizer without changing factual claims;
- the final resume was built and visually verified through kami's resume workflow, with any remaining data gaps reported;
- every included work with a verified public URL has a clickable hyperlink, and every hyperlink target was checked before delivery;
- a real application run delivers application-ready files unless the user explicitly chooses content-only or simulation mode;
- the interview checklist includes project follow-ups and current gaps;
- interview answer preparation includes STAR plus real difficulty, company understanding, speaking pace, interviewer connection, unexpected follow-ups, "more perfect" follow-ups, durable role motivation and feedback responsiveness when relevant;
- the full report contains exactly ten prioritized interview questions with assessment intent, evidence, follow-ups and preparation gaps;
- live coached practice asks the ten questions one at a time and gives feedback after each answer;
- realistic simulation uses the provided interviewer Skill, withholds coaching until the end, and treats written tests as batch-response tasks;
- every reported real interview has an offered reflection path and clear separation between case notes, personal evidence updates and reusable Skill changes;
- Obsidian storage is used only after confirming the vault path, with linked Markdown records and appropriate privacy boundaries;
- the full cycle ends only after verified Obsidian archival, or an explicitly reported Obsidian-ready bundle when direct archival is unavailable;
- unknown logistics and job facts remain marked as unknown.
