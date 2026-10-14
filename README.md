# Dynamics 365 HR 9-box Matrix and Talent Calibration Prototype

An interactive, Dynamics 365-inspired prototype that stitches together the complete 9-box Matrix and Talent Calibration requirements.

## Open the prototype

Open `index.html` in a browser. No installation or build command is required.

For the best local experience, run:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## What the prototype demonstrates

The prototype covers one connected business lifecycle:

```text
System setup
  → 9-box configuration
  → Review-cycle creation
  → Population and employee snapshots
  → Assessor assignment and launch
  → Manager assessment
  → Manager-stage closure
  → Calibration configuration
  → Calibration population and sessions
  → Participant and facilitator preparation
  → Live calibration
  → Decision confirmation
  → Approval or return
  → Cycle closure
  → Employee outcome, reporting, and audit
```

## Persona selector

Use **View as** in the top-right corner to switch between role-specific experiences.

### 1. System administrator

Entry page: **Feature & security setup**

The system administrator:

1. Enables the 9-box talent-review feature.
2. Enables Talent Calibration after the 9-box prerequisite is available.
3. Assigns security duties.
4. Configures notification, retention, document, and environment processing.
5. Validates the environment.

Important boundary: technical administration does not automatically grant access to confidential talent decisions.

### 2. HR / Talent administrator

Entry page: **Talent review overview**

The talent administrator configures:

- Global 9-box parameters
- Matrix template, axes, levels, boxes, colors, guidance, and translations
- Performance-rating mapping
- Potential model, criteria, behavioral anchors, calculation, thresholds, and overrides
- Evidence, rationale, eligibility, return, and notification reference data
- Review cycle
- Population rules and snapshots
- Assessor assignments and launch
- Calibration parameters and process template
- Roles, reason catalogs, decisions, dissent, deferral, notes, confidentiality, and readiness
- Calibration cycle and sessions
- Approval, closure, archive, and retention

### 3. HR business partner

Entry page: **Population & quality review**

The HRBP:

1. Validates assigned population and employee snapshots.
2. Reviews manager assignment and source-performance exceptions.
3. Monitors manager progress.
4. Reviews performance and potential overrides.
5. Returns weak or incomplete submissions.
6. Resolves data-quality and evidence issues.
7. Prepares calibration attention cases.
8. Supports the facilitator with policy and evidence clarification.
9. Monitors unresolved and returned decisions.

### 4. Line manager

Entry page: **My 9-box reviews**

The manager:

1. Acknowledges the performance, potential, and confidentiality definitions.
2. Opens an assigned employee.
3. Reviews the point-in-time employee snapshot.
4. Reviews the formal performance source and mapped performance level.
5. Enters a manual performance level only when policy permits it.
6. Completes each required potential criterion.
7. Reviews behavioral anchors.
8. Adds evidence and comments.
9. Reviews calculated potential.
10. Supplies an override reason when selecting a different potential.
11. Reviews the derived proposed matrix box.
12. Adds overall rationale, confidence, and limitations.
13. Validates the assessment.
14. Saves a draft or submits.
15. Recalls while the stage is open, or corrects a returned assessment.

The manager cannot directly drag an employee to another box. The proposed box is always derived from manager-selected performance and potential.

### 5. Calibration participant

Entry page: **My session preparation**

The participant:

1. Reviews only employees permitted by the session role.
2. Reviews manager proposals, evidence, overrides, confidence, and warnings.
3. Adds preparation questions.
4. Flags missing evidence.
5. Proposes preliminary movement.
6. Declares insufficient knowledge or conflict.
7. Marks preparation complete.
8. Participates in the facilitated session.

The participant cannot confirm or approve the final decision.

### 6. Calibration facilitator

Entry page: **Session preparation**

The facilitator:

1. Reviews source-version consistency.
2. Reviews participant preparation.
3. Resolves conflicts and evidence gaps.
4. Builds and orders the agenda.
5. Validates facilitator, decision maker, participants, schedule, quorum, and governance.
6. Starts the session.
7. Controls the active employee discussion.
8. Records proposed changes, reasons, rationale, evidence, dissent, and deferral.
9. Confirms that every employee has a decision or authorized deferral.
10. Finalizes the session and sends it for approval.

### 7. Calibration decision maker

Entry page: **Decisions requiring confirmation**

The decision maker:

1. Reviews manager proposal and calibrated proposal.
2. Reviews movement reason and evidence.
3. Resolves conflicting participant proposals.
4. Resolves or retains dissent.
5. Confirms no-change decisions.
6. Confirms calibrated changes.
7. Confirms deferral owner, due date, and follow-up.
8. Provides explicit confirmation for material or two-level movement.

### 8. Executive approver

Entry page: **My calibration approvals**

The approver reviews:

- Proposed and calibrated distributions
- Changed employees
- Two-level movements
- Override movements
- Movement reasons and rationale
- Dissent and its disposition
- Deferred employees
- Attendance and quorum
- Facilitator and decision-maker confirmation

The approver can:

- Approve the complete session
- Return the complete session
- Return selected employee decisions
- Reject the session
- Request clarification

Returned and reopened decisions create new versions. Earlier finalized or approved values remain in history.

### 9. Employee

Entry page: **My talent review information**

The employee can:

- View factual personal and work information used by the process
- View the formal performance record used as an input
- Request correction of inaccurate factual information
- View the approved outcome allowed by policy
- Acknowledge the approved outcome

The employee cannot see:

- Other employees
- Proposed placements
- Confidential calibration discussions
- Manager, HR, or facilitator working notes
- Distribution and comparison analytics

The prototype uses the recommended default policy: show a development-oriented outcome rather than the literal 9-box label.

### 10. People analytics user

Entry page: **Talent review reports**

The analytics user receives:

- Authorized cycle-progress reporting
- Proposed versus calibrated distribution
- Placement movement
- Data-quality indicators
- Decision-quality indicators
- Attendance and approval status
- Approved placement history

Confidential free-text notes are excluded. Organization scope, row-level access, and export auditing apply.

### 11. Auditor

Entry page: **Audit & placement history**

The auditor receives read-only access to permitted:

- Configuration versions
- Population and assignment changes
- Manager submission versions
- Evidence access
- Placement movement
- Dissent and deferral
- Decision confirmation
- Finalization and approval
- Return and reopening
- Access provision and removal
- Controlled exports

## Detailed stitched walkthrough

### Phase A — Configure 9-box

1. Open **9-box parameters**.
2. Review the General, Assessment, Population, Workflow, Notifications, and Audit & retention tabs.
3. Open **Matrix templates**.
4. Review Template, Axes, Levels, Nine boxes, Performance mapping, and Translations.
5. Open **Potential assessment**.
6. Review calculation, thresholds, override policy, criteria, weights, evidence rules, applicability, and rating anchors.
7. Open **Reference data** to review evidence types, rationale codes, eligibility rules, return reasons, and notification templates.

Output: active, effective-dated, versioned setup.

### Phase B — Create and launch the 9-box cycle

1. Open **Review cycle**.
2. Select frozen matrix, potential, and performance-mapping versions.
3. Enter review period, legal entities, owner, snapshot date, start, due date, grace period, and time zone.
4. Open **Population & snapshots**.
5. Apply organization, job, worker, tenure, employment, position, and hierarchy rules.
6. Review manual inclusions, exclusions, duplicate assignments, missing managers, missing performance, and overlapping cycles.
7. Generate and freeze the population.
8. Generate point-in-time employee snapshots.
9. Open **Assessors & readiness**.
10. Resolve default managers and reassignment.
11. Validate configuration, population, schedule, notifications, and blocking exceptions.
12. Launch manager assessments.

Output: explicit manager assignments with frozen cycle configuration and employee context.

### Phase C — Manager assessment

1. Switch persona to **Line manager**.
2. Open **My 9-box reviews**.
3. Select an employee.
4. Review snapshot.
5. Review source and mapped performance.
6. Complete potential criteria.
7. Add or review evidence.
8. Review calculated potential and any manager override.
9. Review the derived matrix placement.
10. Add overall rationale, confidence, and limitations.
11. Validate and submit.
12. Use the team matrix for a read-only overview.

Output: immutable manager-proposed placement and submission history.

### Phase D — HR quality review and manager-stage closure

1. Switch persona to **HR business partner**.
2. Review population, source-performance, evidence, override, and confidence cases.
3. Return incomplete or unsupported assessments.
4. Monitor manager progress.
5. Assign a formal disposition to incomplete employees.
6. Close the manager stage.

Output: frozen calibration-ready manager submissions.

### Phase E — Configure calibration

1. Switch persona to **HR / Talent administrator**.
2. Open **Calibration setup**.
3. Review global parameters.
4. Configure process-template version.
5. Configure participant roles and permissions.
6. Configure movement, decision, dissent, and deferral options.
7. Configure note categories and confidentiality levels.
8. Configure blocking and warning readiness rules.

Output: active calibration process template.

### Phase F — Build calibration cycle and sessions

1. Open **Calibration cycle**.
2. Select the closed source 9-box cycle.
3. Validate source assessment versions and matrix compatibility.
4. Preview and generate the calibration population.
5. Preserve the manager proposal as read-only source information.
6. Create sessions by department, manager hierarchy, business unit, job family, grade, or manual grouping.
7. Assign each employee to one active session.
8. Assign facilitator, decision maker, contributors, HRBP, observers, and approver.
9. Review conflicts, attendance, quorum, schedule, and access.
10. Build the agenda.

Output: sessions ready for participant preparation.

### Phase G — Prepare and run calibration

1. Switch persona to **Calibration participant** and complete permitted preparation.
2. Switch persona to **Calibration facilitator**.
3. Review the attention queue and readiness.
4. Start the session.
5. Select an employee card.
6. Compare source performance, manager-selected performance, calculated potential, manager-selected potential, proposed box, rationale, confidence, and evidence.
7. Confirm manager proposal or select calibrated performance and potential.
8. Select movement reason.
9. Enter decision rationale and evidence.
10. Record dissent where required.
11. Defer unresolved employees with owner, due date, required action, and follow-up session.
12. Switch to **Calibration decision maker** to confirm the accountable outcome.
13. Finalize the session.

Output: finalized session-decision versions.

### Phase H — Approve, return, close, and report

1. Switch persona to **Executive approver**.
2. Review the approval package.
3. Approve, return selected decisions, return the whole session, reject, or request clarification.
4. Correct returned decisions and resubmit.
5. If an approved result later requires correction, use controlled reopening and create a new version.
6. Close the calibration cycle after all mandatory sessions are approved and all employees have a disposition.
7. Revoke temporary session access.
8. Produce controlled reports and preserve audit history.
9. Switch to **Employee** to view the policy-approved outcome.
10. Switch to **People analytics user** or **Auditor** to inspect authorized outputs.

Output: approved final calibrated placements, employee-facing outcome, secured reporting, and complete history.

## Source requirements

The prototype was synthesized from the detailed 9-box Matrix and Talent Calibration product specifications supplied for this exercise. Those source specification files are intentionally excluded from the public prototype repository.

## Prototype files

- `index.html` — application shell
- `styles.css` — Dynamics-inspired visual design and responsive behavior
- `app.js` — role navigation, screens, sample data, workflow interactions, dialogs, and walkthrough

## Disclaimer

This is a conceptual product prototype. It uses illustrative sample data and does not connect to a Dynamics 365 environment or modify production HR records.
