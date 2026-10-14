const appState = {
  route: "overview",
  persona: "admin",
  activeTab: "general",
  selectedEmployee: "EMP-1042",
  walkthroughStep: 0,
  cycleStatus: "Manager assessment open",
  assessmentStatus: "In progress",
  sessionStatus: "In progress",
  decisions: {
    "EMP-1042": { performance: "High", potential: "High", box: "high-high", changed: false, status: "Confirmed" },
    "EMP-1008": { performance: "High", potential: "Medium", box: "high-medium", changed: false, status: "Confirmed" },
    "EMP-1014": { performance: "Medium", potential: "High", box: "medium-high", changed: true, status: "Proposed change" },
    "EMP-1030": { performance: "Medium", potential: "Medium", box: "medium-medium", changed: false, status: "Pending" },
    "EMP-1051": { performance: "High", potential: "High", box: "high-high", changed: true, status: "Confirmed" },
    "EMP-1068": { performance: "Low", potential: "Medium", box: "low-medium", changed: false, status: "Deferred" },
    "EMP-1074": { performance: "Medium", potential: "Medium", box: "medium-medium", changed: false, status: "Pending" },
    "EMP-1082": { performance: "High", potential: "Medium", box: "high-medium", changed: false, status: "Confirmed" },
    "EMP-1091": { performance: "Medium", potential: "Low", box: "medium-low", changed: false, status: "Pending" }
  }
};

const employees = [
  { id:"EMP-1042", name:"Maya Patel", initials:"MP", job:"Senior Product Manager", position:"PM - Talent Experiences", department:"Product", manager:"Elena Rossi", level:"L6", tenure:"3y 4m", performance:"High", potential:"High", proposed:"high-high", confidence:"High", status:"Submitted", warning:"", rationale:"Consistently exceeds strategic goals and demonstrates strong learning agility across ambiguous programs." },
  { id:"EMP-1008", name:"Jon Bell", initials:"JB", job:"Engineering Manager", position:"Manager - Platform", department:"Engineering", manager:"Marcus Reed", level:"L6", tenure:"5y 1m", performance:"High", potential:"Medium", proposed:"high-medium", confidence:"High", status:"Submitted", warning:"", rationale:"Strong sustained delivery and effective leadership at current scope." },
  { id:"EMP-1014", name:"Lina Chen", initials:"LC", job:"Finance Business Partner", position:"FBP - Corporate", department:"Finance", manager:"Avery Morgan", level:"L5", tenure:"2y 7m", performance:"High", potential:"High", proposed:"high-high", confidence:"Medium", status:"Submitted", warning:"Potential override", rationale:"Broader enterprise contribution is emerging; calibration should compare readiness with peers." },
  { id:"EMP-1030", name:"Noah Williams", initials:"NW", job:"HR Program Manager", position:"PM - Rewards", department:"Human Resources", manager:"Avery Morgan", level:"L5", tenure:"2y 2m", performance:"Medium", potential:"Medium", proposed:"medium-medium", confidence:"High", status:"Submitted", warning:"", rationale:"Reliable contributor with growing cross-functional ownership." },
  { id:"EMP-1051", name:"Sara Ahmed", initials:"SA", job:"Principal Analyst", position:"Principal - Insights", department:"Strategy", manager:"Priya Kapoor", level:"L7", tenure:"4y 9m", performance:"High", potential:"Medium", proposed:"high-medium", confidence:"High", status:"Submitted", warning:"Performance override", rationale:"Role breadth and influence indicate capacity for broader enterprise scope." },
  { id:"EMP-1068", name:"Ethan Brown", initials:"EB", job:"Sales Manager", position:"Manager - West", department:"Sales", manager:"Rafael Silva", level:"L5", tenure:"1y 4m", performance:"Low", potential:"Medium", proposed:"low-medium", confidence:"Low", status:"Submitted", warning:"Missing evidence", rationale:"New to role; current period includes a substantial territory transition." },
  { id:"EMP-1074", name:"Amelia Garcia", initials:"AG", job:"Operations Lead", position:"Lead - Service Ops", department:"Operations", manager:"Rafael Silva", level:"L5", tenure:"3y 8m", performance:"Medium", potential:"Medium", proposed:"medium-medium", confidence:"Medium", status:"Submitted", warning:"", rationale:"Solid operational results and developing strategic capability." },
  { id:"EMP-1082", name:"David Kim", initials:"DK", job:"Solution Architect", position:"Architect - Enterprise", department:"Engineering", manager:"Marcus Reed", level:"L6", tenure:"6y 3m", performance:"High", potential:"Medium", proposed:"high-medium", confidence:"High", status:"Submitted", warning:"", rationale:"Deep specialist impact with sustained delivery at current scope." },
  { id:"EMP-1091", name:"Olivia Martin", initials:"OM", job:"Marketing Manager", position:"Manager - Brand", department:"Marketing", manager:"Elena Rossi", level:"L5", tenure:"2y 11m", performance:"Medium", potential:"Low", proposed:"medium-low", confidence:"Medium", status:"Submitted", warning:"", rationale:"Effective in role; aspiration currently focused on deeper specialization." }
];

const navByPersona = {
  admin: [
    ["Overview", [["overview","◫","Talent review overview"]]],
    ["9-box setup", [["parameters","⚙","9-box parameters"],["matrix-config","▦","Matrix templates"],["potential-config","◉","Potential assessment"],["reference-data","≡","Reference data"]]],
    ["9-box cycles", [["cycle","◷","Review cycle"],["population","♙","Population & snapshots"],["assessors","♧","Assessors & readiness"],["monitor","▤","Assessment progress"]]],
    ["Calibration", [["calibration-config","⚙","Calibration setup"],["calibration-cycle","◷","Calibration cycle"],["sessions","♙","Sessions & participants"],["live-calibration","▦","Live calibration"],["approval","✓","Approval & closure"]]],
    ["Governance", [["persona-journeys","◎","Persona workflows"],["entities","◇","Entity catalog"],["history","↺","Audit & history"],["reports","▥","Reports"],["traceability","⌘","Requirement traceability"]]]
  ],
  "system-admin": [
    ["Administration", [["system-admin","⚙","Feature & security setup"],["parameters","☷","9-box parameters"],["calibration-config","☷","Calibration parameters"]]],
    ["Governance", [["persona-journeys","◎","Persona workflows"],["history","↺","Technical audit view"],["traceability","⌘","Process guide"]]]
  ],
  hrbp: [
    ["HRBP workspace", [["hrbp-review","◫","Population & quality review"],["monitor","▤","Manager progress"],["facilitator-prep","☷","Calibration preparation"],["sessions","♙","Assigned sessions"]]],
    ["Governance", [["persona-journeys","◎","Persona workflows"],["history","↺","Decision history"],["reports","▥","HRBP reports"]]]
  ],
  manager: [
    ["My work", [["manager-dashboard","◫","My 9-box reviews"],["assessment","☷","Employee assessment"],["team-matrix","▦","My team matrix"]]],
    ["Reference", [["persona-journeys","◎","Persona workflows"],["history","↺","Submission history"],["traceability","⌘","Process guide"]]]
  ],
  participant: [
    ["My calibration", [["participant-prep","◫","My session preparation"],["live-calibration","▦","Calibration session"],["sessions","♙","Agenda & participants"]]],
    ["Reference", [["persona-journeys","◎","Persona workflows"],["history","↺","Permitted decision history"],["traceability","⌘","Process guide"]]]
  ],
  facilitator: [
    ["Calibration", [["facilitator-prep","◫","Session preparation"],["live-calibration","▦","Live calibration"],["sessions","♙","Participants & agenda"],["history","↺","Decision history"]]],
    ["Reference", [["persona-journeys","◎","Persona workflows"],["entities","◇","Configuration catalog"],["traceability","⌘","Process guide"]]]
  ],
  "decision-maker": [
    ["Decision workspace", [["decision-maker","◫","Decisions requiring confirmation"],["live-calibration","▦","Live calibration"],["history","↺","Confirmed decisions"]]],
    ["Reference", [["persona-journeys","◎","Persona workflows"],["traceability","⌘","Decision guide"]]]
  ],
  approver: [
    ["Approvals", [["approval","✓","My calibration approvals"],["reports","▥","Distribution analysis"],["history","↺","Approval history"]]],
    ["Reference", [["persona-journeys","◎","Persona workflows"],["traceability","⌘","Process guide"]]]
  ],
  employee: [
    ["My information", [["employee-view","◫","My talent review information"],["persona-journeys","◎","How the process affects me"]]],
    ["Reference", [["traceability","⌘","Privacy & process guide"]]]
  ],
  analytics: [
    ["People analytics", [["reports","▥","Talent review reports"],["history","↺","Approved placement history"]]],
    ["Reference", [["persona-journeys","◎","Persona workflows"],["entities","◇","Reporting entities"],["traceability","⌘","Reporting controls"]]]
  ],
  auditor: [
    ["Audit", [["history","↺","Audit & placement history"],["reports","▥","Controlled reports"],["entities","◇","Entity catalog"],["persona-journeys","◎","Persona workflows"],["traceability","⌘","Requirement traceability"]]]
  ]
};

const walkthroughSteps = [
  { route:"parameters", title:"Enable and govern 9-box", owner:"HR administrator", copy:"Set global performance-source, override, evidence, population, workflow, notification, audit, and retention behavior.", output:"Approved global 9-box policy" },
  { route:"matrix-config", title:"Configure the 3×3 matrix", owner:"Talent administrator", copy:"Create versioned performance and potential axes, three levels per axis, all nine boxes, colors, labels, guidance, translations, and rating mappings.", output:"Validated active matrix template" },
  { route:"potential-config", title:"Configure potential assessment", owner:"Talent COE", copy:"Define criteria, behavioral anchors, weights, thresholds, evidence requirements, not-applicable rules, calculation, rounding, and override policy.", output:"Active potential model version" },
  { route:"cycle", title:"Create the 9-box review cycle", owner:"HR administrator", copy:"Select frozen matrix and potential versions, source review period, snapshot date, dates, owner, legal entity, and cycle policy.", output:"Draft review cycle" },
  { route:"population", title:"Generate population and snapshots", owner:"HR administrator / HRBP", copy:"Apply organization, job, worker, tenure, hierarchy, and exclusion rules; preview issues; freeze eligible workers and point-in-time context.", output:"Approved population with snapshots" },
  { route:"assessors", title:"Assign assessors and launch", owner:"HR administrator", copy:"Resolve managers, handle self-assessment or missing managers, validate configuration and schedule, freeze inputs, and create manager work.", output:"Manager assessment stage open" },
  { route:"assessment", title:"Complete manager assessments", owner:"Line manager", copy:"Review snapshot and source performance, complete potential criteria, attach evidence, resolve overrides, review proposed box, validate, and submit.", output:"Immutable manager-proposed placement" },
  { route:"monitor", title:"Monitor and close manager stage", owner:"HR administrator / HRBP", copy:"Track manager completion, return weak submissions, reassign work, resolve exceptions, close the stage, and freeze proposed placements.", output:"Calibration-ready submitted dataset" },
  { route:"calibration-config", title:"Configure calibration", owner:"Talent administrator", copy:"Define process template, participant roles, movement and dissent reasons, deferral rules, confidentiality, readiness, approval, and retention.", output:"Active calibration process template" },
  { route:"calibration-cycle", title:"Build calibration population", owner:"HR administrator / HRBP", copy:"Reference the source 9-box cycle, validate source versions, filter eligible submissions, freeze the manager proposal, and generate sessions.", output:"Confirmed calibration population" },
  { route:"facilitator-prep", title:"Prepare sessions", owner:"Facilitator and participants", copy:"Review overrides, evidence gaps, conflicts, low-confidence cases, prior placement, preliminary proposals, and agenda.", output:"Session ready to start" },
  { route:"live-calibration", title:"Run live calibration", owner:"Facilitator / decision maker", copy:"Compare employees, confirm unchanged cases, change axis values with reason and evidence, record dissent, or defer unresolved employees.", output:"Finalized session decisions" },
  { route:"approval", title:"Approve or return", owner:"Executive approver", copy:"Review proposed versus calibrated distribution, material changes, dissent, deferrals, attendance, and rationale; approve or return selected decisions.", output:"Approved calibrated placements" },
  { route:"history", title:"Close, report, and preserve history", owner:"HR administrator / auditor", copy:"Close the cycle, revoke temporary access, retain all source, calibrated and approved values, and expose secured reports and audit.", output:"Final organization placement dataset" }
];

const entityCatalog = [
  ["9-box configuration","Matrix template","Versioned parent configuration",["Template ID","Status","Effective dates","Axes","Potential model","Override policy","Translations"]],
  ["9-box configuration","Matrix axis","Performance or potential dimension",["Orientation","Direction","Rating model","Guidance","Effective dates"]],
  ["9-box configuration","Axis level","Low, Medium or High level",["Label","Description","Behavioral guidance","Sort order","Score range","Color"]],
  ["9-box configuration","Matrix box","One of nine axis combinations",["Performance level","Potential level","Name","Description","Color","Display position"]],
  ["9-box configuration","Performance mapping","Maps source rating to matrix level",["Source model","Source level","Target level","Priority","Effective dates"]],
  ["Potential configuration","Potential template","Potential calculation and policy",["Method","Precision","Rounding","Thresholds","N/A policy","Override policy"]],
  ["Potential configuration","Potential criterion","Observable potential dimension",["Name","Weight","Required","Evidence","Applicability","Guidance"]],
  ["Potential configuration","Criterion level","Behavioral anchor and score",["Value","Label","Anchor","Examples","Score","Sort order"]],
  ["9-box cycle","Review cycle","Controls manager assessment process",["Source period","Snapshot date","Template versions","Dates","Owner","Status"]],
  ["9-box cycle","Cycle population","Employee inclusion in cycle",["Worker","Eligibility","Assessor","Snapshot","Warnings","Disposition"]],
  ["9-box cycle","Employee snapshot","Point-in-time employee context",["Employment","Job","Position","Department","Manager","Performance source"]],
  ["9-box cycle","Assessor assignment","Explicit manager work assignment",["Default manager","Assigned assessor","Source","Delegation","Reason","Status"]],
  ["Manager assessment","Talent assessment","Manager assessment header",["Worker","Assessor","Performance","Potential","Status","Rationale","Confidence"]],
  ["Manager assessment","Potential response","Criterion answer",["Criterion","Rating","Comment","Evidence","N/A","Calculated contribution"]],
  ["Manager assessment","Assessment evidence","Supporting evidence",["Type","Source record","Date","Owner","Visibility","Verification"]],
  ["Manager assessment","Proposed placement","Manager recommendation",["Performance","Potential","Box","Overrides","Rationale","Submitted by/on"]],
  ["Manager assessment","Submission history","Recall, return and resubmission",["Version","Action","Actor","Date","Reason","Status"]],
  ["Calibration setup","Process template","Reusable calibration policy",["Version","Grouping","Roles","Quorum","Movement","Dissent","Deferral","Approval"]],
  ["Calibration setup","Participant role","Session permissions",["View details","View evidence","Add note","Propose","Execute","Confirm","Approve"]],
  ["Calibration setup","Movement reason","Reason for changing placement",["Code","Comment required","Evidence required","Direction","Axis applicability"]],
  ["Calibration setup","Decision type","Permitted discussion outcome",["Final/temporary","Rationale","Follow-up","Approval"]],
  ["Calibration setup","Dissent reason","Reason for disagreement",["Comment required","Alternative placement","Active status"]],
  ["Calibration setup","Deferral reason","Reason decision is unresolved",["Follow-up","Owner","Due date","Active status"]],
  ["Calibration setup","Note category","Purpose and default visibility",["Category","Confidentiality","Allowed roles","Final-decision use","Retention"]],
  ["Calibration setup","Confidentiality level","Who can see information",["Permitted roles","Export","Reporting","Employee visibility"]],
  ["Calibration setup","Readiness rule","Blocking or warning condition",["Stage","Severity","Applicability","Resolution guidance"]],
  ["Calibration cycle","Calibration cycle","Parent calibration exercise",["Source 9-box cycle","Process version","Scope","Dates","Owner","Status"]],
  ["Calibration cycle","Calibration population","Eligible source assessment",["Employee","Source assessment","Proposed placement","Inclusion","Warning","Disposition"]],
  ["Calibration cycle","Source assessment reference","Immutable manager input",["Assessment version","Snapshot","Source/mapped/manager ratings","Evidence","Submission"]],
  ["Calibration session","Session","Scheduled calibration meeting",["Scope","Facilitator","Decision maker","Schedule","Quorum","Status","Approval route"]],
  ["Calibration session","Session employee","Employee assigned to session",["Source manager","Proposal","Agenda","Discussion","Decision","Disposition"]],
  ["Calibration session","Session participant","Person and role assignment",["Role","Scope","Permissions","Required attendance","Conflict","Preparation"]],
  ["Calibration session","Attendance","Presence and quorum",["Status","Join/leave","Mode","Quorum contribution","Absence reason"]],
  ["Calibration session","Agenda","Discussion sequence",["Employee","Sequence","Presenter","Planned time","Attention reason","Status"]],
  ["Calibration decision","Calibration decision","Current employee outcome",["Proposed values","Calibrated values","Type","Reason","Rationale","Dissent","Approval"]],
  ["Calibration decision","Decision version","Finalized and corrected versions",["Version","Status","Before/after","Reason","Finalized/approved by"]],
  ["Calibration decision","Placement movement","Every box movement",["Before/after axes","Before/after box","Reason","Rationale","Actor","Status"]],
  ["Calibration decision","Dissent","Participant disagreement",["Participant","Reason","Comment","Preferred placement","Resolution"]],
  ["Calibration decision","Deferral","Unresolved employee",["Reason","Action","Owner","Due date","Follow-up session","Resolution"]],
  ["Calibration decision","Calibration note","Controlled working or final note",["Category","Text","Confidentiality","Author","Final-decision indicator"]],
  ["Calibration outcome","Approval","Approval work item",["Approver","Level","Due date","Status","Comment","Decision date"]],
  ["Calibration outcome","Final calibrated placement","Approved organization placement",["Source proposal","Approved axes","Approved box","Decision type","Dates"]],
  ["Governance","Placement history","All stages and versions",["Stage","Axes","Box","Effective date","Reason","Version"]],
  ["Governance","Audit event","Material action history",["Cycle","Session","Employee","Action","Before/after","Actor","Time"]],
  ["Governance","Access history","Session access lifecycle",["User","Role","Start/end","Action","Authorized by"]],
  ["Governance","Exception","Blocking or warning issue",["Type","Severity","Owner","Status","Action","Resolution"]]
];

const configOptions = {
  "Performance source": ["Performance review","Manual assessment","Mapped rating"],
  "Unassigned worker behavior": ["Create blocking exception","Exclude employee","Assign to HR"],
  "Multiple manager behavior": ["Require HR decision","Use primary manager","Create exception"],
  "Overlapping cycle behavior": ["Warn","Block"],
  "Potential calculation": ["Weighted average","Total score","Rules based","Manager selected with guidance"],
  "Rounding rule": ["Nearest","Round up","Round down"],
  "Population selection": ["Rule based","Hierarchy based","Named employee list","Rules with manual inclusion/exclusion"],
  "Manager source": ["Position hierarchy","Personnel hierarchy","Configured hierarchy"],
  "Session grouping": ["Department","Manager hierarchy","Business unit","Job family","Grade or level","Manual"],
  "Participant role": ["Facilitator","HR business partner","Contributor","Decision maker","Observer","Approver","Auditor"],
  "Movement reason": ["Additional evidence","Inconsistent performance criteria","Inconsistent potential criteria","Source data clarification","Cross-team comparison","Role context","Manager recommendation revised","Decision-maker direction","Insufficient evidence","Input correction","Other"],
  "Decision type": ["Confirm manager proposal","Confirm calibrated change","Return for more evidence","Defer decision","Exclude from calibration"],
  "Dissent reason": ["Insufficient evidence","Performance disagreement","Potential disagreement","Inconsistent comparison group","Conflict of interest","Data-quality concern","Process concern","Other"],
  "Deferral reason": ["Additional evidence required","Source correction required","Manager unavailable","Conflict requires reassignment","Decision maker unavailable","Organizational change","Insufficient discussion time","Other"],
  "Confidentiality": ["Facilitator only","HR only","Decision maker and HR","Session participants","Approver only","Final decision record"],
  "Approval level": ["Session","Organization","Cycle"],
  "Notification channel": ["In-app","Email","Both"]
};

const $ = (selector) => document.querySelector(selector);
const page = $("#page");
const commandbar = $("#commandbar");

function status(text, tone="blue") { return `<span class="status ${tone}">${text}</span>`; }
function tag(text, tone="purple") { return `<span class="tag ${tone}">${text}</span>`; }
function button(label, action, style="secondary", disabled=false) { return `<button class="button ${style}" data-action="${action}" ${disabled?"disabled":""}>${label}</button>`; }
function heading(eyebrow, title, copy, badge="") {
  return `<div class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${copy}</p></div>${badge?`<div class="heading-badge">${badge}</div>`:""}</div>`;
}
function card(title, body, action="") {
  return `<section class="card"><div class="card-header"><h2>${title}</h2>${action}</div><div class="card-body">${body}</div></section>`;
}
function metric(label, value, note, icon="◇") {
  return `<section class="card metric"><span class="metric-icon">${icon}</span><span class="metric-label">${label}</span><strong class="metric-value">${value}</strong><span class="metric-note">${note}</span></section>`;
}
function field(label, type="text", value="", options=[], span=1, help="") {
  const content = type === "select"
    ? `<select>${options.map(x=>`<option ${x===value?"selected":""}>${x}</option>`).join("")}</select>`
    : type === "textarea" ? `<textarea>${value}</textarea>`
    : `<input type="${type}" value="${value}">`;
  return `<div class="field span-${span}"><label>${label}</label>${content}${help?`<small>${help}</small>`:""}</div>`;
}
function toggle(title, copy, checked=true) {
  return `<div class="switch-row"><div class="switch-copy"><strong>${title}</strong><span>${copy}</span></div><label class="switch"><input type="checkbox" ${checked?"checked":""}><span></span></label></div>`;
}
function tabs(items, active=appState.activeTab) {
  return `<div class="tabs">${items.map(([id,label])=>`<button class="tab ${active===id?"active":""}" data-tab="${id}">${label}</button>`).join("")}</div>`;
}
function flow(nodes, active) {
  return `<div class="flow-ribbon">${nodes.map((n,i)=>`<div class="flow-node ${i<active?"done":i===active?"active":""}">${n}</div>`).join("")}</div>`;
}
function stepper(nodes, active) {
  return `<div class="stepper">${nodes.map((n,i)=>`<div class="step ${i<active?"done":i===active?"active":""}"><div class="step-circle">${i<active?"✓":i+1}</div>${n}</div>`).join("")}</div>`;
}
function optionSelect(label, selected) {
  const opts = configOptions[label] || [];
  return field(label, "select", selected || opts[0], opts);
}
function employeeById(id) { return employees.find(e=>e.id===id) || employees[0]; }
function boxName(id) {
  return {
    "high-high":"High-impact talent","medium-high":"Emerging talent","low-high":"Inconsistent potential",
    "high-medium":"Strong performer","medium-medium":"Core contributor","low-medium":"Needs focus",
    "high-low":"Experienced specialist","medium-low":"Effective in role","low-low":"Performance concern"
  }[id] || "Not placed";
}

function renderNav() {
  $("#mainNav").innerHTML = navByPersona[appState.persona].map(([group,items]) =>
    `<div class="nav-group"><div class="nav-group-title">${group}</div>${items.map(([route,icon,label])=>
      `<button class="nav-item ${appState.route===route?"active":""}" data-route="${route}"><span class="nav-icon">${icon}</span>${label}</button>`
    ).join("")}</div>`).join("");
}

function setCommands(items=[]) {
  commandbar.innerHTML = items.map((x)=>x==="|" ? `<span class="command-separator"></span>` : button(x[0],x[1],x[2]||"secondary",x[3])).join("");
}

function renderOverview() {
  setCommands([["Create review cycle","go-cycle","primary"],["Open guided walkthrough","walkthrough","secondary"]]);
  page.innerHTML = heading("Talent management workspace","9-box Matrix and Calibration","A stitched Dynamics 365 Human Resources experience from configuration and manager assessment through calibration, approval, audit, and reporting.",status("Prototype scenario","purple")) +
  flow(["Configure","9-box cycle","Manager assessment","Close stage","Calibration setup","Live calibration","Approval","History"],5) +
  `<div class="grid four">
    ${metric("9-box cycle","Manager assessment open","72% submitted","◷")}
    ${metric("Employees","128","9 require attention","♙")}
    ${metric("Calibration sessions","4","1 in progress","▦")}
    ${metric("Pending approvals","1","Executive review due today","✓")}
  </div>
  <div class="grid two" style="margin-top:16px">
    ${card("End-to-end journey",`<div class="table-wrap"><table><thead><tr><th>Stage</th><th>Owner</th><th>Status</th><th>Output</th></tr></thead><tbody>
      ${walkthroughSteps.map((s,i)=>`<tr class="clickable" data-route="${s.route}"><td class="cell-primary">${i+1}. ${s.title}</td><td>${s.owner}</td><td>${status(i<7?"Complete":i===7?"In progress":"Planned",i<7?"green":i===7?"amber":"blue")}</td><td>${s.output}</td></tr>`).join("")}
    </tbody></table></div>`)}
    ${card("Attention required",`<div class="alert warning"><strong>9 records require action.</strong><span>3 missing evidence, 2 manager reassignments, 2 potential overrides, and 2 unresolved calibration decisions.</span></div>
      <div class="section-title"><div><h3>Upcoming milestones</h3></div></div>
      <div class="evidence"><strong>Manager assessment closes</strong><p>18 October 2026 · 17:00 IST</p></div>
      <div class="evidence"><strong>Product & Engineering calibration</strong><p>21 October 2026 · 10:00 IST · 36 employees</p></div>
      <div class="evidence"><strong>Executive approval</strong><p>24 October 2026 · Session CAL-S04</p></div>
      <div class="section-title"><div><h3>Foundational controls</h3></div></div>
      <div class="entity-fields">${["Versioned setup","Immutable manager proposal","Explicit decisions","Placement history","Restricted notes","Controlled reopening"].map(x=>`<span>${x}</span>`).join("")}</div>`)}
  </div>`;
}

function renderParameters() {
  setCommands([["Save","save","primary"],["Validate setup","validate"],"|",["Reset defaults","reset"]]);
  const active = appState.activeTab;
  let body = "";
  if (active==="general") body = `<div class="form-grid">${optionSelect("Performance source","Performance review")}${field("Default matrix template","select","Enterprise 9-box v1",["Enterprise 9-box v1","Leadership 9-box v2"])}${field("Default potential template","select","Enterprise potential v1",["Enterprise potential v1","Leadership potential v2"])}${field("Default cycle owner","select","Avery Morgan",["Avery Morgan","Priya Kapoor","Elena Rossi"])}${field("Default time zone","select","India Standard Time",["India Standard Time","UTC","Pacific Standard Time"])}${field("Maximum attachment size (MB)","number","10")}</div>
    <div class="section-title"><div><h3>Core behavior</h3><p>Controls inherited by new review cycles.</p></div></div>
    ${toggle("Enable 9-box reviews","Master functional control",true)}
    ${toggle("Require finalized performance review","Blocks submission without a completed review",true)}
    ${toggle("Allow manual performance rating","Permits entry when no valid source exists",false)}
    ${toggle("Allow performance override","Preserves source and manager-selected values separately",true)}
    ${toggle("Require override reason","Mandatory explanation for performance override",true)}
    ${toggle("Require potential rationale","Mandatory manager explanation",true)}
    ${toggle("Require placement rationale","Requires an overall proposed-placement rationale",true)}
    ${toggle("Enable supporting evidence","Enables evidence references and attachments",true)}`;
  if (active==="assessment") body = `${toggle("Allow draft save","Managers may save incomplete assessments",true)}${toggle("Auto-save","Save draft changes every five minutes",true)}${toggle("Allow bulk submission","Submit all individually valid assessments",true)}${toggle("Allow submitted assessment recall","Only while manager stage remains open",true)}${toggle("Require manager acknowledgement","Definitions and confidentiality acknowledgement",true)}${toggle("Prevent self-assessment","Creates a blocking assignment exception",true)}${toggle("Require evidence for High potential","Applied at validation and submission",true)}${toggle("Require evidence for Low performance","Applied to source or manual values",true)}${toggle("Show calculated potential score","Manager sees calculation and explanation",true)}${toggle("Allow potential override","Stores calculated and selected values",true)}
    <div class="form-grid" style="margin-top:16px">${field("Auto-save interval (minutes)","number","5")}${field("Minimum rationale length","number","80")}${field("Maximum rationale length","number","2000")}</div>`;
  if (active==="population") body = `<div class="form-grid">${field("Minimum employment tenure","number","6")}${field("Tenure unit","select","Months",["Days","Months","Years"])}${optionSelect("Manager source","Position hierarchy")}${optionSelect("Unassigned worker behavior","Create blocking exception")}${optionSelect("Multiple manager behavior","Require HR decision")}${optionSelect("Overlapping cycle behavior","Warn")}</div><div class="section-title"><h3>Eligibility defaults</h3></div>${toggle("Include active employees only","Exclude inactive employment at snapshot date",true)}${toggle("Include contractors","Contractor participation is disabled by default",false)}${toggle("Include workers on leave","Include but flag for HR review",true)}${toggle("Use primary position only","Resolve multiple-position workers using primary position",true)}`;
  if (active==="workflow") body = `${toggle("Require HR population approval","Population must be approved before launch",true)}${toggle("Require HR assessment validation","HR validates submissions before stage closure",true)}${toggle("Allow HR return to manager","Enables correction workflow",true)}${toggle("Allow administrative reopening","Dedicated privilege and reason required",true)}${toggle("Automatically close on due date","Close after grace period when policy allows",false)}<div class="form-grid" style="margin-top:16px">${field("Grace period (days)","number","3")}${field("Escalation hierarchy","select","Position hierarchy",["Position hierarchy","Personnel hierarchy","Named escalation owner"])}</div>`;
  if (active==="notifications") body = `<div class="form-grid">${optionSelect("Notification channel","Both")}${field("Initial assignment template","select","9-box assignment",["9-box assignment","Localized 9-box assignment"])}${field("Reminder frequency","select","Every 3 days",["Daily","Every 3 days","Weekly"])}${field("Overdue escalation","select","Manager + HRBP",["Manager","Manager + HRBP","Next-level manager + HRBP"])}</div><div class="section-title"><h3>Notification events</h3></div>${["Cycle launched","Assessment assigned","Due date approaching","Assessment overdue","Assessment returned","Submission confirmed","Cycle closed"].map(x=>toggle(x,"Secure deep link; no placement details in email",true)).join("")}`;
  if (active==="audit") body = `${toggle("Audit draft changes","Capture manager draft field changes",false)}${toggle("Audit submitted changes","Capture all submitted values and versions",true)}${toggle("Audit administrator changes","Capture population, assignment and status changes",true)}${toggle("Audit exports","Capture user, scope, time and reason",true)}<div class="form-grid" style="margin-top:16px">${field("Working assessment retention (years)","number","7")}${field("Final placement retention (years)","number","10")}${field("Attachment retention (years)","number","7")}${field("Allow hard deletion","select","No",["No","Legal administrator only"])}</div>`;
  page.innerHTML = heading("9-box setup","9-box parameters","Configure the default behavior inherited by all new 9-box review cycles.",status("Configuration","purple")) +
    card("Parameters",tabs([["general","General"],["assessment","Assessment"],["population","Population"],["workflow","Workflow"],["notifications","Notifications"],["audit","Audit & retention"]],active)+body);
}

function renderMatrixConfig() {
  setCommands([["New template","new-template","primary"],["Copy version","copy"],["Validate","validate"],["Activate","activate"]]);
  const active=appState.activeTab;
  let body="";
  if(active==="template") body=`<div class="form-grid">${field("Template ID","text","ENT-9BOX")}${field("Name","text","Enterprise 9-box")}${field("Status","select","Active",["Draft","Validated","Active","Inactive"])}${field("Effective from","date","2026-01-01")}${field("Effective to","date","")}${field("Version","text","1.0")}${field("Owner","select","Talent Management COE",["Talent Management COE","HR Operations"])}${field("Default language","select","English (US)",["English (US)","English (UK)","French","German","Hindi"])}${field("Potential model","select","Enterprise potential v1",["Enterprise potential v1","Leadership potential v2"])}</div><div class="section-title"><h3>Template policy</h3></div>${toggle("Allow performance override","Manager must provide a reason",true)}${toggle("Allow potential override","Calculated value is retained",true)}${toggle("Require supporting evidence","Evidence policy evaluated at submission",true)}`;
  if(active==="axes") body=`<div class="grid two">${card("Performance axis",`<div class="form-grid" style="grid-template-columns:1fr 1fr">${field("Axis ID","text","PERF")}${field("Orientation","select","Horizontal",["Horizontal"])}${field("Direction","select","Left to right",["Left to right","Right to left"])}${field("Rating model","select","Annual performance 1-5",["Annual performance 1-5","Manager selected"])}${field("Guidance","textarea","Sustained results and behaviors during the review period.",[],2)}</div>`)}${card("Potential axis",`<div class="form-grid" style="grid-template-columns:1fr 1fr">${field("Axis ID","text","POT")}${field("Orientation","select","Vertical",["Vertical"])}${field("Direction","select","Bottom to top",["Bottom to top","Top to bottom"])}${field("Rating model","select","Enterprise potential v1",["Enterprise potential v1","Manager selected"])}${field("Guidance","textarea","Capacity and aspiration for increased or different complexity.",[],2)}</div>`)}</div>`;
  if(active==="levels") body=`<div class="table-wrap"><table><thead><tr><th>Axis</th><th>Level</th><th>Label</th><th>Description</th><th>Score range</th><th>Color</th><th>Status</th></tr></thead><tbody>${[
    ["Performance",1,"Low","Results below role expectations","1.0–2.4","#F8DDDD"],["Performance",2,"Medium","Consistently meets expectations","2.5–3.7","#FFF2CF"],["Performance",3,"High","Sustained results above expectations","3.8–5.0","#DFF3E5"],
    ["Potential",1,"Low","Growth focused within current complexity","1.0–2.4","#F8DDDD"],["Potential",2,"Medium","Can grow into moderately broader complexity","2.5–3.7","#FFF2CF"],["Potential",3,"High","Demonstrated capacity for significantly broader complexity","3.8–5.0","#DFF3E5"]
  ].map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td class="cell-primary">${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td><span style="display:inline-block;width:18px;height:18px;border-radius:3px;background:${r[5]};border:1px solid #aaa"></span></td><td>${status("Active","green")}</td></tr>`).join("")}</tbody></table></div>`;
  if(active==="boxes") body=renderMatrix([],false)+`<div class="alert info" style="margin-top:14px"><strong>All nine combinations are valid.</strong><span>Box IDs remain stable when translated labels change. Active template changes require a new version.</span></div>`;
  if(active==="mapping") body=`<div class="alert info"><strong>Source: Annual performance 1–5.</strong><span>Every active source rating must map to exactly one 9-box performance level.</span></div><div class="table-wrap"><table><thead><tr><th>Source level</th><th>Description</th><th>Numeric value</th><th>Target level</th><th>Effective from</th><th>Status</th></tr></thead><tbody>${[
    ["1","Does not meet","1","Low"],["2","Partially meets","2","Low"],["3","Meets","3","Medium"],["4","Exceeds","4","High"],["5","Significantly exceeds","5","High"]
  ].map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td><select><option selected>${r[3]}</option><option>Low</option><option>Medium</option><option>High</option></select></td><td>01 Jan 2026</td><td>${status("Active","green")}</td></tr>`).join("")}</tbody></table></div>`;
  if(active==="translations") body=`<div class="form-grid">${field("Language","select","English (US)",["English (US)","English (UK)","French","German","Hindi"])}${field("Object","select","All matrix labels",["All matrix labels","Axes","Levels","Boxes","Guidance"])}</div><div class="table-wrap" style="margin-top:16px"><table><thead><tr><th>Object</th><th>Base label</th><th>Translated label</th><th>Status</th></tr></thead><tbody>${["Performance","Potential","High-impact talent","Emerging talent","Core contributor","Performance concern"].map(x=>`<tr><td>Label</td><td>${x}</td><td><input value="${x}"></td><td>${status("Complete","green")}</td></tr>`).join("")}</tbody></table></div>`;
  page.innerHTML=heading("9-box setup","Enterprise 9-box template","Versioned 3×3 matrix configuration used by review and calibration cycles.",status("Active · v1.0","green"))+card("Template configuration",tabs([["template","Template"],["axes","Axes"],["levels","Levels"],["boxes","Nine boxes"],["mapping","Performance mapping"],["translations","Translations"]],active)+body);
}

function renderPotentialConfig() {
  setCommands([["New criterion","new-criterion","primary"],["Copy version","copy"],["Validate weights","validate"],["Activate","activate"]]);
  const criteria=[
    ["Learning agility",25,"Required","High potential requires evidence","All job families"],
    ["Capacity for complexity",25,"Required","Evidence required","L4+"],
    ["Adaptability",15,"Required","Comment optional","All job families"],
    ["Problem solving",15,"Required","Evidence for High","All job families"],
    ["Enterprise perspective",10,"Required","Comment required","L5+"],
    ["Aspiration for broader responsibility",10,"Required","Employee aspiration must be current","All job families"]
  ];
  page.innerHTML=heading("9-box setup","Potential assessment template","Configure structured, observable criteria. Potential is calculated independently from performance.",status("Validated · v1.0","green"))+
  card("Enterprise potential v1",`<div class="form-grid">${field("Template ID","text","ENT-POT")}${field("Name","text","Enterprise potential")}${optionSelect("Potential calculation","Weighted average")}${field("Decimal precision","select","2",["0","1","2"])}${optionSelect("Rounding rule","Nearest")}${field("Minimum answered criteria","number","5")}${field("Low threshold","number","1.00–2.49")}${field("Medium threshold","number","2.50–3.79")}${field("High threshold","number","3.80–5.00")}</div><div class="section-title"><h3>Calculation policy</h3></div>${toggle("Allow not applicable","Excluded from denominator; minimum response rule still applies",true)}${toggle("Require evidence","Evidence required according to criterion and outcome",true)}${toggle("Allow manager override","Reason and additional rationale required",true)}`)+
  `<div style="margin-top:16px">${card("Potential criteria",`<div class="table-wrap"><table><thead><tr><th>Criterion</th><th>Weight</th><th>Requirement</th><th>Evidence policy</th><th>Applicability</th><th>Rating scale</th></tr></thead><tbody>${criteria.map(c=>`<tr class="clickable" data-action="criterion"><td class="cell-primary">${c[0]}<span class="cell-secondary">Behavioral anchors configured</span></td><td>${c[1]}%</td><td>${c[2]}</td><td>${c[3]}</td><td>${c[4]}</td><td>1–5 anchored</td></tr>`).join("")}</tbody></table></div><div class="alert success" style="margin-top:14px"><strong>Weights total 100%.</strong><span>All required criteria have complete behavioral anchors.</span></div>`)}</div>`;
}

function renderReferenceData() {
  setCommands([["New record","new-reference","primary"],["Activate selected","activate"],["Export","export"]]);
  const groups=[
    ["Evidence types",["Performance review","Goal outcome","Performance journal","Validated feedback","Competency assessment","Project outcome","Certification"]],
    ["Placement rationale codes",["Sustained results","Role complexity","Learning agility","Cross-functional impact","Specialist contribution","New in role","Insufficient evidence","Other"]],
    ["Eligibility rules",["Active employees","Minimum 6 months tenure","Primary position required","Contractors excluded","Leave included with warning"]],
    ["Assessment return reasons",["Insufficient evidence","Incorrect source data","Unclear rationale","Unsupported override","Incomplete response"]],
    ["Notification templates",["Assignment","Reminder","Overdue escalation","Returned assessment","Submission confirmation","Cycle closure"]]
  ];
  page.innerHTML=heading("9-box setup","Reference data","Maintain reusable options used by review-cycle and manager-assessment workflows.",status("5 catalogs","blue"))+
    `<div class="grid two">${groups.map(g=>card(g[0],`<div class="entity-fields">${g[1].map(x=>`<span>${x}</span>`).join("")}</div><div class="section-title"><p>${g[1].length} active records · Effective dated</p>${button("Manage","manage-reference","link")}</div>`)).join("")}</div>`;
}

function renderCycle() {
  setCommands([["Save","save","primary"],["Copy prior cycle","copy"],["Validate cycle","validate"],"|",["Generate population","go-population"]]);
  page.innerHTML=heading("9-box review cycles","FY27 Leadership Talent Review","Create a review occurrence and freeze the setup versions used by all manager assessments.",status(appState.cycleStatus,"amber"))+
  stepper(["Draft","Population","Approval","Ready","Assessment","Closed"],4)+
  card("Cycle header",`<div class="form-grid">${field("Review cycle ID","text","9B-2027-LEAD")}${field("Name","text","FY27 Leadership Talent Review")}${field("Status","select",appState.cycleStatus,["Draft","Population previewed","Population generated","Population approved","Ready to launch","Manager assessment open","Manager assessment closed","Finalized","Closed","Archived","Cancelled","On hold"])}${field("Review period","select","FY27",["FY26","FY27","FY28"])}${field("Legal entities","select","Global leadership population",["Global leadership population","USMF","INMF","GBMF"])}${field("Cycle owner","select","Avery Morgan",["Avery Morgan","Priya Kapoor"])}${field("Matrix template/version","select","Enterprise 9-box · v1.0",["Enterprise 9-box · v1.0"])}${field("Potential template/version","select","Enterprise potential · v1.0",["Enterprise potential · v1.0"])}${field("Performance review period","select","FY26 Annual Review",["FY26 Annual Review","FY26 Mid-year"])}${field("Snapshot date","date","2026-10-01")}${field("Assessment start","date","2026-10-06")}${field("Assessment due","date","2026-10-18")}${field("Grace period end","date","2026-10-21")}${field("Time zone","select","India Standard Time",["India Standard Time","UTC"])}${field("Description","textarea","Annual enterprise leadership talent review for employees at L5 and above.",[],2)}</div>`)+
  `<div class="grid two" style="margin-top:16px">${card("Frozen configuration",`<div class="evidence"><strong>Enterprise 9-box · v1.0</strong><p>3×3 Performance × Potential · activated 01 Jan 2026</p></div><div class="evidence"><strong>Enterprise potential · v1.0</strong><p>6 criteria · weighted average · High threshold 3.80</p></div><div class="evidence"><strong>Annual performance mapping · v2</strong><p>1–2 Low · 3 Medium · 4–5 High</p></div>`)}${card("Cycle rules",`${toggle("Require HR population approval","Completed 03 Oct 2026",true)}${toggle("Allow manager recall","Until manager stage closure",true)}${toggle("Require HR validation","Before closing manager stage",true)}${toggle("Strict stage closure","All employees need submission or disposition",true)}`)}</div>`;
}

function renderPopulation() {
  setCommands([["Regenerate preview","refresh","primary"],["Add employee","add-employee"],["Exclude selected","exclude"],["Generate & freeze","freeze"]]);
  const rows=employees.map((e,i)=>`<tr><td><input type="checkbox"></td><td class="cell-primary">${e.name}<span class="cell-secondary">${e.id}</span></td><td>${e.department}</td><td>${e.job}</td><td>${e.manager}</td><td>${i===5?status("Warning","amber"):status("Eligible","green")}</td><td>${i===5?"No finalized review":"Included"}</td></tr>`).join("");
  page.innerHTML=heading("9-box review cycle","Population and employee snapshots","Select eligible workers using Dynamics worker, employment, position, job, organization, tenure, and hierarchy data.",status("128 included · 4 warnings","amber"))+
  tabs([["rules","Population rules"],["preview","Preview"],["snapshots","Snapshots"],["exceptions","Exceptions"]],"preview")+
  `<div class="grid three">${metric("Eligible workers","132","Before manual exclusions","♙")}${metric("Included","128","Population records to create","✓")}${metric("Warnings","4","Require review before launch","!")}</div>
  <div style="margin-top:16px">${card("Population preview",`<div class="form-grid" style="margin-bottom:14px">${optionSelect("Population selection","Rules with manual inclusion/exclusion")}${field("Organization scope","select","Global / L5+",["Global / L5+","Product & Engineering","Named employees"])}${field("Snapshot date","date","2026-10-01")}${field("Department","select","All departments",["All departments","Product","Engineering","Finance","HR"])}${field("Job level","select","L5 and above",["All","L4 and above","L5 and above","L6 and above"])}${field("Minimum tenure","select","6 months",["None","3 months","6 months","1 year"])}</div><div class="table-wrap"><table><thead><tr><th></th><th>Employee</th><th>Department</th><th>Job</th><th>Resolved assessor</th><th>Eligibility</th><th>Outcome</th></tr></thead><tbody>${rows}</tbody></table></div>`)}</div>
  <div style="margin-top:16px">${card("Snapshot contents",`<div class="entity-fields">${["Worker","Personnel number","Primary employment","Legal entity","Job and title","Position","Department","Business unit","Location","Grade/level","Manager","Employment/position dates","Worker type","Performance review","Source rating","Mapped performance","Snapshot date"].map(x=>`<span>${x}</span>`).join("")}</div><div class="alert info" style="margin-top:14px"><strong>Snapshots are cycle-specific.</strong><span>Current worker changes are displayed separately and do not silently change the review basis.</span></div>`)}</div>`;
}

function renderAssessors() {
  setCommands([["Reassign assessor","reassign","primary"],["Validate cycle","validate"],["Approve population","approve"],["Launch assessments","launch"]]);
  page.innerHTML=heading("9-box review cycle","Assessors and launch readiness","Resolve manager assignments, exceptions, schedule, and frozen configuration before manager work is created.",status("Ready with warnings","amber"))+
  `<div class="grid three">${metric("Assigned","126","98.4% of population","✓")}${metric("Blocking","2","Missing manager / self-assessment","!")}${metric("Warnings","4","Missing or incomplete performance","◔")}</div>
  <div class="grid two" style="margin-top:16px">
    ${card("Assessor assignments",`<div class="table-wrap"><table><thead><tr><th>Employee</th><th>Default manager</th><th>Assigned assessor</th><th>Source</th><th>Status</th></tr></thead><tbody>${employees.slice(0,6).map((e,i)=>`<tr><td class="cell-primary">${e.name}</td><td>${e.manager}</td><td>${i===5?"Unassigned":e.manager}</td><td>Position hierarchy</td><td>${i===5?status("Blocking","red"):status("Assigned","green")}</td></tr>`).join("")}</tbody></table></div>`)}
    ${card("Readiness checklist",`<div class="evidence"><strong>✓ Configuration</strong><p>Matrix, potential model, weights, mappings and notifications valid.</p></div><div class="evidence"><strong>✓ Population</strong><p>128 workers; no duplicates; snapshots generated.</p></div><div class="evidence"><strong>! Assignments</strong><p>2 blocking assessor exceptions remain.</p></div><div class="evidence"><strong>✓ Schedule</strong><p>Start, due date, grace period, owner and time zone valid.</p></div><div class="alert warning" style="margin-top:12px"><strong>Launch blocked.</strong><span>Resolve both assessor exceptions or formally exclude the employees.</span></div>`)}
  </div>`;
}

function renderManagerDashboard() {
  setCommands([["Continue next assessment","go-assessment","primary"],["Submit all complete","bulk-submit"],["View team matrix","go-team"]]);
  page.innerHTML=heading("Manager self service","My 9-box reviews","Complete standardized performance and potential assessments for your assigned employees.",status("Due 18 Oct 2026","amber"))+
  `<div class="grid four">${metric("Assigned","9","FY27 Leadership Review","♙")}${metric("Submitted","5","56% complete","✓")}${metric("In progress","3","2 ready to submit","◔")}${metric("Requires attention","1","Missing performance source","!")}</div>
  <div style="margin-top:16px">${card("My team assessments",`<div class="table-wrap"><table><thead><tr><th>Employee</th><th>Job</th><th>Performance</th><th>Potential</th><th>Proposed box</th><th>Status</th><th>Due</th></tr></thead><tbody>${employees.map((e,i)=>`<tr class="clickable" data-route="assessment" data-employee="${e.id}"><td class="cell-primary">${e.name}<span class="cell-secondary">${e.id}</span></td><td>${e.job}</td><td>${i>4?"—":e.performance}</td><td>${i>4?"—":e.potential}</td><td>${i>4?"Not calculated":boxName(e.proposed)}</td><td>${status(i<5?"Submitted":i<8?"In progress":"Requires attention",i<5?"green":i<8?"amber":"red")}</td><td>18 Oct</td></tr>`).join("")}</tbody></table></div>`)}</div>`;
}

function renderAssessment() {
  const e=employeeById(appState.selectedEmployee);
  setCommands([["Save draft","save","primary"],["Validate","validate"],["Submit","submit"],"|",["Report incorrect data","report-data"]]);
  page.innerHTML=heading("Manager self service · FY27 Leadership Review",`Assess ${e.name}`,"Review the frozen employee snapshot, source performance, potential criteria, evidence, and proposed placement before submission.",status(appState.assessmentStatus,"amber"))+
  stepper(["Snapshot","Performance","Potential","Evidence","Placement","Submit"],4)+
  `<div class="split-layout"><div class="grid">
    ${card("1. Employee snapshot",`<div class="form-grid">${field("Employee","text",`${e.name} · ${e.id}`)}${field("Job","text",e.job)}${field("Position","text",e.position)}${field("Department","text",e.department)}${field("Level","text",e.level)}${field("Snapshot manager","text",e.manager)}${field("Time in role","text",e.tenure)}${field("Snapshot date","text","01 Oct 2026")}</div><div class="alert info" style="margin-top:12px"><strong>Read only.</strong><span>Use Report incorrect data to create an HR exception; this does not change master worker data.</span></div>`)}
    ${card("2. Performance assessment",`<div class="form-grid">${field("Source review","select","FY26 Annual Review",["FY26 Annual Review"])}${field("Review status","text","Completed")}${field("Source rating","text","4 · Exceeds expectations")}${field("Mapped performance","select",e.performance,["Low","Medium","High"])}${field("Manager performance","select",e.performance,["Low","Medium","High"])}${field("Override reason","select","Not applicable",["Not applicable","Role context","Source data correction","Additional evidence","Other"])}</div><div class="alert success" style="margin-top:12px"><strong>Source rating mapped successfully.</strong><span>The formal performance review remains unchanged.</span></div>`)}
    ${card("3. Potential assessment",`<div class="table-wrap"><table><thead><tr><th>Criterion</th><th>Weight</th><th>Rating</th><th>Behavioral anchor</th><th>Evidence</th></tr></thead><tbody>${[
      ["Learning agility","25%","5 · High","Rapidly applies learning across new ambiguity","2 items"],
      ["Capacity for complexity","25%","4 · Strong","Handles broader, interdependent scope","1 item"],
      ["Adaptability","15%","4 · Strong","Effective through material change","1 item"],
      ["Problem solving","15%","5 · High","Frames and solves novel enterprise problems","2 items"],
      ["Enterprise perspective","10%","4 · Strong","Balances cross-business outcomes","1 item"],
      ["Aspiration","10%","4 · Strong","Confirmed interest in broader responsibility","Current profile"]
    ].map(r=>`<tr><td class="cell-primary">${r[0]}</td><td>${r[1]}</td><td><select><option>${r[2]}</option><option>1 · Low</option><option>2 · Developing</option><option>3 · Effective</option><option>4 · Strong</option><option>5 · High</option><option>Not applicable</option></select></td><td>${r[3]}</td><td>${r[4]}</td></tr>`).join("")}</tbody></table></div><div class="grid three" style="margin-top:12px">${metric("Calculated score","4.45","Weighted average","◉")}${metric("Calculated potential","High","Threshold ≥ 3.80","↑")}${metric("Manager potential",e.potential,"No override","✓")}</div>`)}
    ${card("4. Evidence and rationale",`<div class="grid two"><div><div class="evidence"><strong>FY26 goals · 112% weighted achievement</strong><p>Validated performance-review source · 30 Sep 2026</p></div><div class="evidence"><strong>Enterprise talent platform launch</strong><p>Project outcome · verified by program sponsor</p></div><div class="evidence"><strong>Leadership feedback summary</strong><p>Validated feedback · restricted to manager and HR</p></div></div><div class="form-grid" style="grid-template-columns:1fr">${field("Overall placement rationale","textarea",e.rationale)}${field("Confidence","select",e.confidence,["Low","Medium","High"])}${field("Known data limitations","textarea",e.warning||"None identified")}</div></div>`)}
    ${card("5. Proposed placement",`<div class="grid two"><div>${renderMatrix([e],false)}</div><div><div class="evidence"><strong>${boxName(e.proposed)}</strong><p>${e.performance} performance × ${e.potential} potential</p></div><div class="alert info" style="margin-top:12px"><strong>Placement is derived.</strong><span>To change the box, change the performance or potential level. Direct dragging is not allowed in manager assessment.</span></div><div class="evidence"><strong>Values retained separately</strong><p>Source performance · mapped performance · manager performance · calculated potential · manager potential · proposed box.</p></div></div></div>`)}
  </div>
  <aside class="card detail-panel"><div class="card-header"><h2>Validation</h2>${status("Ready","green")}</div><div class="card-body"><div class="profile-head"><div class="profile-avatar">${e.initials}</div><div><h3>${e.name}</h3><p>${e.job} · ${e.level}</p></div></div><div class="evidence"><strong>✓ Performance source</strong><p>Finalized and mapped</p></div><div class="evidence"><strong>✓ Potential criteria</strong><p>6 of 6 complete</p></div><div class="evidence"><strong>✓ Required evidence</strong><p>High potential requirement met</p></div><div class="evidence"><strong>✓ Placement rationale</strong><p>Minimum length met</p></div><div class="evidence"><strong>✓ Manager acknowledgement</strong><p>Accepted 07 Oct 2026</p></div><div class="alert success" style="margin-top:12px"><strong>Ready to submit.</strong><span>Submission will make manager fields read only unless recalled or returned.</span></div></div></aside></div>`;
}

function renderTeamMatrix() {
  setCommands([["Open selected assessment","go-assessment","primary"],["Filter","filter"],["Export permitted summary","export"]]);
  page.innerHTML=heading("Manager self service","My team 9-box matrix","Read-only overview of draft and submitted proposed placements for explicitly assigned employees.",status("9 employees","blue"))+
  `<div class="alert info"><strong>Manager view.</strong><span>Cards cannot be moved here. Open the employee assessment to change performance or potential.</span></div>${renderMatrix(employees,false)}`;
}

function renderMonitor() {
  setCommands([["Send reminders","remind","primary"],["Return assessment","return"],["Reassign","reassign"],["Close manager stage","close-stage"]]);
  page.innerHTML=heading("9-box administration","Assessment progress","Monitor manager completion, data quality, overrides, exceptions, and stage-closure readiness.",status("72% submitted","amber"))+
  `<div class="grid four">${metric("Population","128","18 managers","♙")}${metric("Submitted","92","72% complete","✓")}${metric("Returned","4","Correction required","↺")}${metric("Overdue","7","Escalation active","!")}</div>
  <div class="grid two" style="margin-top:16px">
    ${card("Manager progress",`<div class="table-wrap"><table><thead><tr><th>Manager</th><th>Assigned</th><th>Submitted</th><th>Returned</th><th>Overdue</th><th>Completion</th></tr></thead><tbody>${[
      ["Elena Rossi",22,19,1,1,"86%"],["Marcus Reed",31,28,0,0,"90%"],["Avery Morgan",18,12,2,2,"67%"],["Priya Kapoor",27,21,0,1,"78%"],["Rafael Silva",30,12,1,3,"40%"]
    ].map(r=>`<tr><td class="cell-primary">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td></tr>`).join("")}</tbody></table></div>`)}
    ${card("Stage closure validation",`<div class="evidence"><strong>36 incomplete assessments</strong><p>Strict closure blocks until submitted or formally disposed.</p></div><div class="evidence"><strong>4 returned assessments</strong><p>Managers have been notified with required corrections.</p></div><div class="evidence"><strong>2 blocking exceptions</strong><p>Missing assessor and unresolved source review.</p></div><div class="evidence"><strong>11 overrides</strong><p>8 potential · 3 performance · all require HR review.</p></div><div class="alert warning" style="margin-top:12px"><strong>Manager stage cannot close.</strong><span>Resolve blockers and assign a disposition to incomplete employees.</span></div>`)}
  </div>`;
}

function renderCalibrationConfig() {
  setCommands([["Save","save","primary"],["New process version","new-version"],["Validate","validate"],["Activate","activate"]]);
  const active=appState.activeTab;
  let body="";
  if(active==="parameters") body=`<div class="form-grid">${field("Default process template","select","Enterprise calibration v1",["Enterprise calibration v1","Leadership calibration v1"])}${field("Default session duration","select","120 minutes",["60 minutes","90 minutes","120 minutes","180 minutes"])}${field("Default facilitator","select","Avery Morgan",["Avery Morgan","Priya Kapoor"])}${field("Default time zone","select","India Standard Time",["India Standard Time","UTC"])}${optionSelect("Approval level","Session")}${optionSelect("Confidentiality","Session participants")}</div><div class="section-title"><h3>General and decision policy</h3></div>${toggle("Require manager-stage closure","Formal population after stage closure",true)}${toggle("Allow submitted-assessment preview","Prepare before manager-stage closure",true)}${toggle("Require attendance tracking","Participant attendance retained",true)}${toggle("Require quorum","Facilitator cannot start without required attendance",true)}${toggle("Require reason for every move","All box movements",true)}${toggle("Require rationale for every move","Free text explanation",true)}${toggle("Require evidence for upward movement","Evidence attached or referenced",true)}${toggle("Require evidence for two-level movement","Decision-maker confirmation also required",true)}${toggle("Allow performance adjustment","Matrix performance only; source review unchanged",true)}${toggle("Allow potential adjustment","Manager calculated and selected values retained",true)}${toggle("Require explicit decision per employee","Confirm, change, defer or exclude",true)}${toggle("Require dissent recording","Preserve unresolved disagreement",true)}`;
  if(active==="template") body=`<div class="form-grid">${field("Process template ID","text","ENT-CAL")}${field("Name","text","Enterprise calibration")}${field("Version","text","1.0")}${field("Status","select","Active",["Draft","Validated","Active","Inactive"])}${field("Effective from","date","2026-01-01")}${field("Matrix compatibility","select","Enterprise 9-box · v1.x",["Enterprise 9-box · v1.x"])}${optionSelect("Session grouping","Department")}${field("Default facilitator role","select","Facilitator",configOptions["Participant role"])}${field("Default decision-maker role","select","Decision maker",configOptions["Participant role"])}${field("Quorum rule","select","Facilitator + decision maker + 60% contributors",["Facilitator + decision maker + 60% contributors","All required participants","No quorum"])}${field("Approval workflow","select","Executive session approval",["Executive session approval","HRBP approval","No separate approval"])}</div>`;
  if(active==="roles") body=renderConfigTable("Participant roles",["Role","View details","Evidence","Notes","Propose","Execute","Confirm","Finalize","Approve"],[
    ["Facilitator","Yes","Yes","Yes","Yes","Yes","No","Yes","No"],
    ["HR business partner","Yes","Yes","Yes","Yes","No","No","No","No"],
    ["Contributor","Yes","Policy","Yes","Yes","No","No","No","No"],
    ["Decision maker","Yes","Yes","Yes","Yes","Yes","Yes","No","No"],
    ["Observer","Yes","No","No","No","No","No","No","No"],
    ["Approver","Summary","Policy","No","No","No","No","No","Yes"],
    ["Auditor","Final only","Final only","No","No","No","No","No","No"]
  ]);
  if(active==="reasons") body=`<div class="grid two">${["Movement reason","Decision type","Dissent reason","Deferral reason"].map(label=>card(label,`<div class="entity-fields">${configOptions[label].map(x=>`<span>${x}</span>`).join("")}</div>${button("Manage options","manage-reference","link")}`)).join("")}</div>`;
  if(active==="notes") body=`<div class="grid two">${card("Note categories",`<div class="entity-fields">${["Preparation question","Evidence clarification","Discussion note","Placement rationale","Decision note","Dissent","Follow-up","Administrative note"].map(x=>`<span>${x}</span>`).join("")}</div>`)}${card("Confidentiality levels",`<div class="entity-fields">${configOptions["Confidentiality"].map(x=>`<span>${x}</span>`).join("")}</div>`)}</div><div class="section-title"><h3>Note policy</h3></div>${toggle("Allow participant notes","Role policy still applies",true)}${toggle("Allow private facilitator notes","Not part of final decision by default",true)}${toggle("Allow HR-only notes","Restricted access",true)}${toggle("Permit employee-visible notes","Disabled in first release",false)}${toggle("Audit visibility changes","Before and after visibility retained",true)}`;
  if(active==="readiness") body=renderConfigTable("Session readiness rules",["Rule","Stage","Severity","Resolution"],[
    ["Submitted source assessment exists","Population","Blocking","Return to source cycle"],
    ["Proposed placement exists","Population","Blocking","Complete manager assessment"],
    ["Source version is current","Preparation","Warning","Refresh before session"],
    ["Required evidence is accessible","Preparation","Warning","Add or restore evidence"],
    ["Facilitator assigned","Session","Blocking","Assign facilitator"],
    ["Decision maker assigned","Session","Blocking","Assign decision maker"],
    ["No duplicate session assignment","Session","Blocking","Correct assignment"],
    ["Quorum can be met","Start","Blocking","Update attendance or authorized override"]
  ]);
  page.innerHTML=heading("Talent calibration setup","Calibration configuration","Define the reusable process, roles, decisions, reason catalogs, confidentiality, readiness, approval, notifications, and retention.",status("Enterprise calibration · v1.0","green"))+
    card("Configuration",tabs([["parameters","Parameters"],["template","Process template"],["roles","Participant roles"],["reasons","Reasons & decisions"],["notes","Notes & confidentiality"],["readiness","Readiness rules"]],active)+body);
}

function renderConfigTable(title, headers, rows) {
  return `<div class="table-wrap"><table><thead><tr>${headers.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((v,i)=>`<td class="${i===0?"cell-primary":""}">${v}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function renderCalibrationCycle() {
  setCommands([["Save","save","primary"],["Validate source","validate"],["Generate population","freeze"],["Create sessions","create-sessions"]]);
  page.innerHTML=heading("Talent calibration","FY27 Leadership Calibration","Create calibration from the closed manager-assessment stage while preserving the manager proposal as immutable source input.",status("Sessions created","blue"))+
  stepper(["Draft","Source","Population","Sessions","Preparation","Calibration","Approval","Closed"],3)+
  `<div class="grid two">
    ${card("Calibration cycle",`<div class="form-grid" style="grid-template-columns:1fr 1fr">${field("Calibration cycle ID","text","CAL-2027-LEAD")}${field("Name","text","FY27 Leadership Calibration")}${field("Source 9-box cycle","select","9B-2027-LEAD · Manager stage closed",["9B-2027-LEAD · Manager stage closed"])}${field("Process template/version","select","Enterprise calibration · v1.0",["Enterprise calibration · v1.0"])}${field("Matrix template/version","select","Enterprise 9-box · v1.0",["Enterprise 9-box · v1.0"])}${field("Organization scope","select","Global leadership population",["Global leadership population","Product & Engineering","Named groups"])}${field("Cycle owner","select","Avery Morgan",["Avery Morgan","Priya Kapoor"])}${field("Status","select","Sessions created",["Draft","Source validated","Population generated","Sessions created","Preparation open","Calibration in progress","Pending approval","Approved","Closed","Archived"])}${field("Preparation starts","date","2026-10-19")}${field("Sessions complete by","date","2026-10-23")}${field("Approval due","date","2026-10-24")}${field("Time zone","select","India Standard Time",["India Standard Time","UTC"])}</div>`)}
    ${card("9-box dependency",`<div class="evidence"><strong>128 submitted assessments</strong><p>Manager stage closed · source version 3</p></div><div class="evidence"><strong>Immutable manager proposal</strong><p>Source, mapped, manager performance; calculated and manager potential; box; rationale; evidence; submission.</p></div><div class="evidence"><strong>Separate calibration values</strong><p>Calibrated performance, potential, box, decision, rationale, dissent, and approval.</p></div><div class="alert success" style="margin-top:12px"><strong>Source validated.</strong><span>All matrix IDs and assessment versions match the calibration population.</span></div>`)}
  </div>
  <div style="margin-top:16px">${card("Calibration population preview",`<div class="grid four">${metric("Source submissions","128","Eligible source records","♙")}${metric("Included","124","4 formally excluded","✓")}${metric("Warnings","7","Overrides or evidence gaps","!")}${metric("Assigned to sessions","124","4 active sessions","▦")}</div><div class="table-wrap" style="margin-top:14px"><table><thead><tr><th>Employee</th><th>Manager</th><th>Proposed box</th><th>Confidence</th><th>Warning</th><th>Session</th></tr></thead><tbody>${employees.map((e,i)=>`<tr><td class="cell-primary">${e.name}</td><td>${e.manager}</td><td>${boxName(e.proposed)}</td><td>${e.confidence}</td><td>${e.warning||"—"}</td><td>CAL-S0${(i%4)+1}</td></tr>`).join("")}</tbody></table></div>`)}</div>`;
}

function renderSessions() {
  setCommands([["New session","new-session","primary"],["Assign participants","assign"],["Open preparation","open-prep"],["Send invitations","invite"]]);
  page.innerHTML=heading("Talent calibration","Sessions and participants","Group employees, schedule sessions, assign role-based participants, validate conflicts and quorum, and build the discussion agenda.",status("4 sessions","blue"))+
  `<div class="grid four">${[
    ["CAL-S01","Product & Engineering","36 employees","Ready to start"],
    ["CAL-S02","Corporate Functions","28 employees","Preparation open"],
    ["CAL-S03","Sales & Marketing","34 employees","Ready with warnings"],
    ["CAL-S04","Operations & Strategy","26 employees","Draft"]
  ].map((r,i)=>`<section class="card entity-card"><h3>${r[0]} ${status(r[3],i===0?"green":i===1?"blue":i===2?"amber":"purple")}</h3><p>${r[1]} · ${r[2]}<br>${21+i} Oct 2026 · 10:00 IST</p><div class="entity-fields"><span>Facilitator: Avery Morgan</span><span>Decision maker: Priya Kapoor</span><span>120 min</span></div></section>`).join("")}</div>
  <div class="grid two" style="margin-top:16px">
    ${card("CAL-S01 participants",renderConfigTable("",["Participant","Role","Access scope","Attendance","Conflict","Preparation"],[
      ["Avery Morgan","Facilitator","All session employees","Required","None","Complete"],
      ["Priya Kapoor","Decision maker","All session employees","Required","None","Complete"],
      ["Elena Rossi","Contributor","Direct and peer teams","Required","None","Complete"],
      ["Marcus Reed","Contributor","Direct and peer teams","Required","None","Complete"],
      ["Nora Taylor","HR business partner","All session employees","Required","None","Complete"],
      ["James Wu","Observer","Summary only","Optional","Accepted","Not required"]
    ]))}
    ${card("Agenda",renderConfigTable("",["#","Employee/group","Presenter","Time","Attention reason","Status"],[
      ["1","High potential proposals","Elena Rossi","25 min","Cross-team comparison","Ready"],
      ["2","Maya Patel","Elena Rossi","8 min","High-impact confirmation","Ready"],
      ["3","Lina Chen","Avery Morgan","10 min","Potential override","Ready"],
      ["4","Sara Ahmed","Priya Kapoor","10 min","Preliminary movement","Ready"],
      ["5","Ethan Brown","Rafael Silva","12 min","Missing evidence","Warning"],
      ["6","Remaining population","Managers","55 min","Standard review","Ready"]
    ]))}
  </div>`;
}

function renderFacilitatorPrep() {
  setCommands([["Mark preparation complete","complete","primary"],["Edit agenda","agenda"],["Resolve warnings","resolve"],["Start session","start-session"]]);
  page.innerHTML=heading("Calibration preparation","Product & Engineering","Review manager proposals, evidence, overrides, conflicts, attention flags, and participant readiness before starting.",status("Ready to start","green"))+
  `<div class="grid four">${metric("Employees","36","All source records current","♙")}${metric("Preparation","100%","5 required participants","✓")}${metric("Attention cases","7","Overrides, confidence, evidence","!")}${metric("Quorum","Met","5 of 5 required available","◉")}</div>
  <div class="grid two" style="margin-top:16px">
    ${card("Attention queue",`<div class="table-wrap"><table><thead><tr><th>Employee</th><th>Proposed box</th><th>Flag</th><th>Preliminary proposal</th></tr></thead><tbody>${employees.slice(0,7).map((e,i)=>`<tr class="clickable" data-employee="${e.id}" data-route="live-calibration"><td class="cell-primary">${e.name}</td><td>${boxName(e.proposed)}</td><td>${e.warning||(["High-impact confirmation","Cross-team comparison","Prior cycle movement"][i%3])}</td><td>${i===2?"Move to Emerging talent":i===4?"Move to High-impact talent":"No proposal"}</td></tr>`).join("")}</tbody></table></div>`)}
    ${card("Readiness",`<div class="evidence"><strong>✓ Population and sources</strong><p>36 employees; source versions current; no duplicates.</p></div><div class="evidence"><strong>✓ Participants and access</strong><p>Facilitator, decision maker and required contributors assigned.</p></div><div class="evidence"><strong>✓ Schedule and quorum</strong><p>21 Oct · 10:00 IST · Teams meeting · quorum met.</p></div><div class="evidence"><strong>✓ Governance</strong><p>Process v1.0 · reasons active · approval route valid.</p></div><div class="alert success" style="margin-top:12px"><strong>Session may start.</strong><span>Population and source proposal versions will be frozen.</span></div>`)}
  </div>`;
}

function renderMatrix(employeeList=employees, interactive=true) {
  const ordered=[
    ["low-high","Inconsistent potential","Low performance · High potential"],
    ["medium-high","Emerging talent","Medium performance · High potential"],
    ["high-high","High-impact talent","High performance · High potential"],
    ["low-medium","Needs focus","Low performance · Medium potential"],
    ["medium-medium","Core contributor","Medium performance · Medium potential"],
    ["high-medium","Strong performer","High performance · Medium potential"],
    ["low-low","Performance concern","Low performance · Low potential"],
    ["medium-low","Effective in role","Medium performance · Low potential"],
    ["high-low","Experienced specialist","High performance · Low potential"]
  ];
  return `<div class="matrix-shell"><div class="axis-y">Potential →</div><div class="matrix">${ordered.map(([id,name,desc])=>{
    const people=employeeList.filter(e=>(interactive?(appState.decisions[e.id]?.box||e.proposed):e.proposed)===id);
    return `<div class="matrix-box" data-box="${id}"><div class="matrix-box-head"><div><h3>${name}</h3><small>${desc}</small></div><span class="matrix-count">${people.length}</span></div><div class="people">${people.map(e=>`<div class="person-card ${appState.selectedEmployee===e.id?"selected":""}" data-employee="${e.id}"><span class="mini-avatar">${e.initials}</span><span class="person-copy"><strong>${e.name}</strong><span>${e.level} · ${e.manager.split(" ")[0]}</span></span>${interactive&&appState.decisions[e.id]?.changed?`<span class="movement">↗</span>`:""}</div>`).join("")}</div></div>`;
  }).join("")}</div><div></div><div class="axis-x">Performance →</div></div>`;
}

function renderLiveCalibration() {
  const e=employeeById(appState.selectedEmployee);
  const d=appState.decisions[e.id]||{};
  setCommands([["Save decision","save-decision","primary"],["Confirm no change","confirm"],["Record dissent","dissent"],["Defer","defer"],"|",["Pause session","pause"],["Finalize session","finalize"]]);
  page.innerHTML=heading("Live calibration · CAL-S01","Product & Engineering","Compare manager proposals consistently, preserve source values, record explicit decisions, and document every placement movement.",status(appState.sessionStatus,"green"))+
  `<div class="alert info"><strong>Session control:</strong><span>Avery Morgan facilitates · Priya Kapoor confirms decisions · Quorum met · 6 of 9 shown employees decided.</span></div>
  <div class="split-layout"><div>${renderMatrix(employees,true)}</div><aside class="card detail-panel"><div class="card-header"><h2>Employee decision</h2>${status(d.status||"Pending",d.status==="Confirmed"?"green":d.status==="Deferred"?"amber":"blue")}</div><div class="card-body">
    <div class="profile-head"><div class="profile-avatar">${e.initials}</div><div><h3>${e.name}</h3><p>${e.job} · ${e.level} · ${e.department}</p></div></div>
    <div class="kv"><div><span>Manager proposal</span><strong>${boxName(e.proposed)}</strong></div><div><span>Confidence</span><strong>${e.confidence}</strong></div><div><span>Manager performance</span><strong>${e.performance}</strong></div><div><span>Manager potential</span><strong>${e.potential}</strong></div></div>
    ${e.warning?`<div class="alert warning" style="margin-top:12px"><strong>${e.warning}</strong><span>Requires explicit review.</span></div>`:""}
    <div class="section-title"><div><h3>Calibrated outcome</h3><p>Source assessment remains unchanged.</p></div></div>
    <div class="form-grid" style="grid-template-columns:1fr 1fr">${field("Performance","select",d.performance||e.performance,["Low","Medium","High"])}${field("Potential","select",d.potential||e.potential,["Low","Medium","High"])}${optionSelect("Movement reason",d.changed?"Cross-team comparison":"Additional evidence")}${field("Decision type","select",d.changed?"Confirm calibrated change":"Confirm manager proposal",configOptions["Decision type"])}${field("Calibration rationale","textarea",d.changed?"Peer comparison supports the adjusted potential level while preserving the source manager recommendation.":"Manager proposal is supported by the reviewed evidence and peer comparison.",[],2)}</div>
    <div class="section-title"><h3>Evidence considered</h3></div>
    <div class="evidence"><strong>Manager rationale</strong><p>${e.rationale}</p></div>
    <div class="evidence"><strong>FY26 goal and review evidence</strong><p>Validated source · restricted session visibility</p></div>
    <div class="section-title"><h3>History</h3></div>
    <div class="evidence"><strong>Manager proposal</strong><p>${e.performance} × ${e.potential} → ${boxName(e.proposed)}</p></div>
    ${d.changed?`<div class="evidence"><strong>Proposed movement</strong><p>${boxName(e.proposed)} → ${boxName(d.box)} · Cross-team comparison</p></div>`:""}
  </div></aside></div>`;
}

function renderApproval() {
  setCommands([["Approve session","approve-session","primary"],["Return selected","return-selected"],["Reject","reject","danger"],["Request clarification","clarify"]]);
  page.innerHTML=heading("Calibration approval","CAL-S01 · Product & Engineering","Review distribution changes, material movements, dissent, deferrals, attendance, and rationale before locking final placements.",status("Pending approval","amber"))+
  `<div class="grid four">${metric("Employees","36","All have disposition","♙")}${metric("Changed","8","22% of session","↗")}${metric("Dissent","2","Retained with decision","!")}${metric("Deferred","1","Follow-up due 23 Oct","◔")}</div>
  <div class="grid two" style="margin-top:16px">
    ${card("Distribution comparison",`<div class="table-wrap"><table><thead><tr><th>Box</th><th>Manager proposed</th><th>Calibrated</th><th>Change</th></tr></thead><tbody>${[
      ["High-impact talent",5,6,"+1"],["Emerging talent",4,5,"+1"],["Inconsistent potential",1,0,"-1"],["Strong performer",9,8,"-1"],["Core contributor",10,10,"—"],["Needs focus",2,2,"—"],["Experienced specialist",3,3,"—"],["Effective in role",1,1,"—"],["Performance concern",1,1,"—"]
    ].map(r=>`<tr><td class="cell-primary">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join("")}</tbody></table></div>`)}
    ${card("Approval controls",`<div class="evidence"><strong>Attendance and quorum</strong><p>5 required participants attended · quorum met</p></div><div class="evidence"><strong>Material movements</strong><p>2 two-level axis movements · evidence and decision-maker confirmation present</p></div><div class="evidence"><strong>Dissent</strong><p>2 retained disagreements · both resolved by decision maker</p></div><div class="evidence"><strong>Deferred employee</strong><p>Owner: Nora Taylor · due 23 Oct · follow-up session CAL-S05</p></div><div class="alert success" style="margin-top:12px"><strong>Approval package complete.</strong><span>Approving creates locked final calibrated placements and placement history.</span></div>`)}
  </div>
  <div style="margin-top:16px">${card("Changed employees",renderConfigTable("",["Employee","Manager proposal","Calibrated placement","Movement reason","Dissent","Decision"],[
    ["Lina Chen","High-impact talent","Emerging talent","Cross-team comparison","No","Confirmed"],
    ["Sara Ahmed","Strong performer","High-impact talent","Additional evidence","Yes · resolved","Confirmed"],
    ["Ethan Brown","Needs focus","Needs focus","No movement","Yes · retained","Deferred"],
    ["Maya Patel","High-impact talent","High-impact talent","No movement","No","Confirmed"]
  ]))}</div>`;
}

function renderEntities() {
  setCommands([["Filter catalog","filter","primary"],["Export data dictionary","export"]]);
  page.innerHTML=heading("Configuration and data","Complete functional entity catalog","All configuration, cycle, population, assessment, session, decision, outcome, and governance entities from both specifications.",status(`${entityCatalog.length} entities`,"blue"))+
  `<div class="form-grid" style="margin-bottom:16px">${field("Domain","select","All domains",["All domains",...new Set(entityCatalog.map(e=>e[0]))])}${field("Search entities","text","")}</div>
  <div class="grid three">${entityCatalog.map(e=>`<section class="card entity-card"><h3>${e[1]} ${tag(e[0],"blue")}</h3><p>${e[2]}</p><div class="entity-fields">${e[3].map(f=>`<span>${f}</span>`).join("")}</div></section>`).join("")}</div>`;
}

function renderHistory() {
  setCommands([["View placement timeline","timeline","primary"],["View access history","access"],["Export authorized audit","export"]]);
  page.innerHTML=heading("Governance","Audit and placement history","Preserve every source, manager, calibrated, approved, returned, reopened, access, note, and export event.",status("Read only","blue"))+
  `<div class="grid three">${metric("Audit events","1,284","Current cycle","↺")}${metric("Placement versions","164","128 employees","◇")}${metric("Controlled exports","3","All have purpose and owner","⇩")}</div>
  <div style="margin-top:16px">${card("Maya Patel · placement timeline",`<div class="table-wrap"><table><thead><tr><th>Date/time</th><th>Stage</th><th>Performance</th><th>Potential</th><th>Box</th><th>Actor</th><th>Reason</th></tr></thead><tbody>${[
    ["07 Oct · 14:25","Manager submitted","High","High","High-impact talent","Elena Rossi","Initial manager proposal"],
    ["21 Oct · 10:34","Calibration confirmed","High","High","High-impact talent","Priya Kapoor","Manager proposal accepted"],
    ["21 Oct · 12:08","Session finalized","High","High","High-impact talent","Avery Morgan","Session complete"],
    ["22 Oct · 09:12","Approved","High","High","High-impact talent","Jordan Lee","Executive approval"],
    ["22 Oct · 09:15","Access expired","—","—","—","System policy","Temporary participant access removed"]
  ].map(r=>`<tr>${r.map((v,i)=>`<td class="${i===1?"cell-primary":""}">${v}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`)}</div>
  <div class="grid two" style="margin-top:16px">${card("Required audit events",`<div class="entity-fields">${["Configuration version","Population change","Assessor assignment","Assessment save/submit/recall/return","Evidence access","Placement movement","Dissent","Deferral","Decision confirmation","Finalization","Approval/return/reopening","Export","Access provision/removal"].map(x=>`<span>${x}</span>`).join("")}</div>`)}${card("Immutable value chain",`<div class="evidence"><strong>Source performance</strong><p>Formal review value</p></div><div class="evidence"><strong>Manager proposal</strong><p>Mapped and selected axes + proposed box</p></div><div class="evidence"><strong>Calibrated decision</strong><p>Separate axes, box, reason and rationale</p></div><div class="evidence"><strong>Approved placement</strong><p>Locked organizational outcome with version history</p></div>`)}</div>`;
}

function renderReports() {
  setCommands([["Refresh","refresh","primary"],["Change filters","filter"],["Export","export"]]);
  page.innerHTML=heading("Talent review analytics","Controlled operational reports","Operational, distribution, movement, data quality, decision quality, attendance, approval, and audit views with role-based scope.",status("As of 22 Oct 2026","blue"))+
  `<div class="form-grid" style="margin-bottom:16px">${field("Cycle","select","FY27 Leadership Talent Review",["FY27 Leadership Talent Review"])}${field("Organization","select","All permitted organizations",["All permitted organizations","Product","Engineering","Corporate Functions"])}${field("View","select","Proposed vs calibrated",["Proposed vs calibrated","Cycle progress","Data quality","Movement","Decision quality","Attendance","Approvals"])}</div>
  <div class="grid four">${metric("Manager submissions","128","100% after dispositions","✓")}${metric("Calibrated changes","29","22.7% of population","↗")}${metric("Final High potential","31","24.2% of population","◉")}${metric("Reopened decisions","2","Both reapproved","↺")}</div>
  <div class="grid two" style="margin-top:16px">${card("Proposed versus calibrated",renderConfigTable("",["Box","Proposed","Calibrated","Net"],[
    ["High-impact talent","18","21","+3"],["Emerging talent","17","19","+2"],["Inconsistent potential","5","2","-3"],["Strong performer","31","29","-2"],["Core contributor","34","34","—"],["Needs focus","8","8","—"],["Experienced specialist","7","7","—"],["Effective in role","5","5","—"],["Performance concern","3","3","—"]
  ]))}${card("Quality indicators",`<div class="evidence"><strong>Overrides reviewed</strong><p>11 of 11 · 100%</p></div><div class="evidence"><strong>Movements with rationale</strong><p>29 of 29 · 100%</p></div><div class="evidence"><strong>Two-level movements</strong><p>3 · all evidence and decision-maker confirmation present</p></div><div class="evidence"><strong>Dissent retained</strong><p>4 decisions · 3 resolved, 1 retained</p></div><div class="evidence"><strong>Deferred</strong><p>2 employees · both assigned owner and due date</p></div>`)}</div>`;
}

function renderTraceability() {
  setCommands([["Start walkthrough","walkthrough","primary"],["Open source requirements","open-requirements"],["Export coverage","export"]]);
  const coverage=[
    ["Feature enablement and global parameters","9-box parameters / Calibration setup","Covered"],
    ["Matrix axes, levels, boxes, mapping, translations","Matrix templates","Covered"],
    ["Potential template, criteria, anchors, calculation","Potential assessment","Covered"],
    ["Review cycle, population, snapshots, assessors","Review cycle screens","Covered"],
    ["Manager assessment, evidence, placement, validation","Employee assessment","Covered"],
    ["Recall, return, reassignment, closure","Assessment progress","Covered"],
    ["Calibration process, roles, reasons, confidentiality","Calibration setup","Covered"],
    ["Calibration cycle, population, source preservation","Calibration cycle","Covered"],
    ["Sessions, participants, conflicts, quorum, agenda","Sessions / Preparation","Covered"],
    ["Live movement, decision, dissent, deferral","Live calibration","Covered"],
    ["Finalization, approval, return, reopening","Approval & closure","Covered"],
    ["Entities, audit, history, reports, privacy","Governance screens","Covered"]
  ];
  page.innerHTML=heading("Prototype guide","Requirement traceability and walkthrough","Use this page to verify how the two source specifications are stitched into the prototype.",status("All requirement domains mapped","green"))+
  `${flow(["Configure","9-box cycle","Manager","Monitor","Calibration setup","Prepare","Calibrate","Approve","Govern"],0)}
  <div class="grid two">
    ${card("Coverage matrix",renderConfigTable("",["Requirement domain","Prototype location","Coverage"],coverage.map(r=>[r[0],r[1],status(r[2],"green")])))}
    ${card("How to use the prototype",`<ol><li>Select a persona in the top bar to see role-specific navigation.</li><li>Use the guided walkthrough to follow the stitched lifecycle.</li><li>Open setup screens to inspect every field, toggle, dropdown, and reference catalog.</li><li>Switch to Line manager and complete the assessment flow.</li><li>Switch to Facilitator to review preparation and live calibration.</li><li>Switch to Executive approver to review approval and return paths.</li><li>Use Entity catalog for all logical entities and sub-entities.</li><li>Use Audit & history to inspect immutable value stages.</li></ol><div class="alert info"><strong>Prototype behavior:</strong><span>Actions update illustrative state and demonstrate the intended workflow; no production data is changed.</span></div>`)}
  </div>`;
}

function renderSystemAdmin() {
  setCommands([["Enable feature","activate","primary"],["Assign security duties","assign"],["Validate environment","validate"],["Review audit settings","go-audit"]]);
  page.innerHTML=heading("System administration","Feature, security, and operational setup","Enable the capabilities and assign technical access without automatically granting confidential talent-data access.",status("Environment ready","green"))+
  `<div class="grid two">
    ${card("Feature management",`${toggle("9-box talent review","Enabled · no active-cycle disablement permitted",true)}${toggle("Talent calibration","Enabled · depends on 9-box feature",true)}<div class="alert info" style="margin-top:12px"><strong>Historical protection.</strong><span>Disabling operational entry points never deletes placement or audit records.</span></div>`)}
    ${card("Operational settings",`<div class="form-grid" style="grid-template-columns:1fr 1fr">${field("Notification processing","select","Active",["Active","Paused"])}${field("Retention processing","select","Active",["Active","Paused"])}${field("Default time zone","select","India Standard Time",["India Standard Time","UTC"])}${field("Document size limit","text","10 MB")}</div><div class="evidence"><strong>Last validation</strong><p>Security duties, number sequences, notification templates, and document management are available.</p></div>`)}
  </div>
  <div style="margin-top:16px">${card("Security duties and separation of access",renderConfigTable("",["Duty","Purpose","Default role","Talent data access"],[
    ["Maintain 9-box configuration","Parameters, matrix and potential setup","Talent administrator","Configuration only"],
    ["Administer 9-box cycles","Cycles, population, assessors and closure","HR administrator","Assigned organization"],
    ["Complete manager assessments","Assigned employee assessments","Manager","Explicit assignments only"],
    ["Maintain calibration configuration","Process, reasons, roles and rules","Talent administrator","Configuration only"],
    ["Facilitate calibration","Run assigned sessions","Facilitator","Assigned sessions only"],
    ["Confirm calibration decisions","Confirm employee outcomes","Decision maker","Assigned sessions only"],
    ["Approve calibration","Approve or return results","Executive approver","Approval package only"],
    ["Audit talent decisions","Read-only history","Auditor","Finalized/audit scope"],
    ["Technical administration","Feature and environment management","System administrator","None by default"]
  ]))}</div>`;
}

function renderHRBPReview() {
  setCommands([["Return for correction","return","primary"],["Resolve exception","resolve"],["Reassign assessor","reassign"],["Mark quality reviewed","complete"]]);
  page.innerHTML=heading("HR business partner workspace","Population and assessment quality review","Validate assigned population, manager submissions, evidence quality, overrides, data exceptions, and calibration readiness.",status("9 cases require review","amber"))+
  `<div class="grid four">${metric("Assigned population","46","Product & Engineering","♙")}${metric("Submitted","39","84.8%","✓")}${metric("Overrides","6","Require rationale review","↗")}${metric("Exceptions","3","1 blocking","!")}</div>
  <div class="grid two" style="margin-top:16px">
    ${card("Quality-review queue",renderConfigTable("",["Employee","Manager","Issue","Evidence","HRBP action"],[
      ["Lina Chen","Avery Morgan","Potential override","Complete","Review rationale"],
      ["Sara Ahmed","Priya Kapoor","Performance override","Complete","Compare role context"],
      ["Ethan Brown","Rafael Silva","Low confidence","Missing","Return for evidence"],
      ["Olivia Martin","Elena Rossi","Aspiration data stale","Complete","Request profile confirmation"],
      ["Noah Williams","Avery Morgan","No issue","Complete","Mark reviewed"]
    ]))}
    ${card("HRBP responsibilities",`<div class="evidence"><strong>Before manager launch</strong><p>Validate population, snapshots, assessor resolution, source performance and exceptions.</p></div><div class="evidence"><strong>During manager assessment</strong><p>Monitor progress, answer policy questions, return weak submissions and resolve data issues.</p></div><div class="evidence"><strong>Before calibration</strong><p>Review overrides, confidence, evidence gaps, conflicts and source-version consistency.</p></div><div class="evidence"><strong>During calibration</strong><p>Provide policy guidance and evidence clarification without silently changing manager inputs.</p></div><div class="evidence"><strong>After calibration</strong><p>Monitor returned decisions, unresolved cases, approval completion and controlled outcomes.</p></div>`)}
  </div>`;
}

function renderParticipantPrep() {
  setCommands([["Mark preparation complete","complete","primary"],["Add question","clarify"],["Propose preliminary movement","save-decision"],["Declare conflict","dissent"]]);
  page.innerHTML=heading("My calibration preparation","CAL-S01 · Product & Engineering","Review only the employees and evidence permitted by your session role before the facilitated discussion.",status("Contributor · preparation due 20 Oct","blue"))+
  `<div class="alert info"><strong>Your role:</strong><span>You may view permitted employee details, review evidence, add preparation notes, propose movement, declare insufficient knowledge or conflict, and participate in discussion. You cannot confirm or approve decisions.</span></div>
  <div class="grid three">${metric("Employees visible","18","Direct and peer comparison group","♙")}${metric("Reviewed","15","83% prepared","✓")}${metric("Questions","3","Shared with facilitator","?")}</div>
  <div style="margin-top:16px">${card("Preparation list",renderConfigTable("",["Employee","Manager proposal","Attention","My preparation","Preliminary view"],employees.slice(0,7).map((e,i)=>[
    e.name,boxName(e.proposed),e.warning||(["Standard review","Peer comparison","Prior movement"][i%3]),i<4?"Complete":"Not started",i===2?"Consider Emerging talent":i===4?"Consider High-impact talent":"No change proposed"
  ])))}</div>
  <div class="grid two" style="margin-top:16px">${card("Permitted actions",`<div class="entity-fields">${["Review source assessment","Review permitted evidence","Add preparation note","Flag missing evidence","Propose movement","Declare insufficient knowledge","Declare conflict","Mark complete"].map(x=>`<span>${x}</span>`).join("")}</div>`)}${card("Restricted actions",`<div class="entity-fields">${["Cannot edit manager proposal","Cannot move card as final decision","Cannot confirm decision","Cannot view other sessions","Cannot approve","Cannot export without privilege"].map(x=>`<span>${x}</span>`).join("")}</div>`)}</div>`;
}

function renderDecisionMaker() {
  setCommands([["Confirm selected decision","confirm","primary"],["Request further discussion","clarify"],["Resolve dissent","resolve"],["View evidence","timeline"]]);
  page.innerHTML=heading("Decision-maker workspace","Decisions requiring confirmation","Confirm the accountable employee outcome after facilitated discussion, including material movements, dissent, and deferrals.",status("4 decisions pending","amber"))+
  `<div class="grid four">${metric("Session employees","36","CAL-S01","♙")}${metric("Confirmed","31","86%","✓")}${metric("Material movement","3","Requires explicit confirmation","↗")}${metric("Dissent","2","1 unresolved","!")}</div>
  <div style="margin-top:16px">${card("Confirmation queue",renderConfigTable("",["Employee","Manager proposal","Calibrated proposal","Reason","Dissent","Required action"],[
    ["Lina Chen","High-impact talent","Emerging talent","Cross-team comparison","No","Confirm or discuss"],
    ["Sara Ahmed","Strong performer","High-impact talent","Additional evidence","Yes · resolved","Confirm movement"],
    ["Ethan Brown","Needs focus","Deferred","Missing evidence","Yes · open","Confirm deferral"],
    ["Olivia Martin","Effective in role","Effective in role","No change","No","Confirm no change"]
  ]))}</div>
  <div class="grid two" style="margin-top:16px">${card("Decision confirmation requires",`<div class="entity-fields">${["Proposed and calibrated axes","Before/after box","Movement reason","Rationale","Evidence considered","Dissent disposition","Deferral owner/due date","Decision-maker identity/time"].map(x=>`<span>${x}</span>`).join("")}</div>`)}${card("Decision rules",`<div class="evidence"><strong>No silent override</strong><p>Manager proposal remains immutable.</p></div><div class="evidence"><strong>One current decision</strong><p>Conflicting participant proposals remain alternatives until resolved.</p></div><div class="evidence"><strong>Two-level movement</strong><p>Evidence and explicit decision-maker confirmation required.</p></div>`)}</div>`;
}

function renderEmployeeView() {
  setCommands([["Request data correction","report-data","primary"],["Acknowledge outcome","complete"],["View privacy notice","open-requirements"]]);
  page.innerHTML=heading("Employee self service","My talent review information","See the factual information and approved outcome permitted by organizational policy. Confidential deliberations and other employees are never visible.",status("Development-oriented outcome policy","blue"))+
  `<div class="grid two">
    ${card("Information used for review",`<div class="profile-head"><div class="profile-avatar">MP</div><div><h3>Maya Patel</h3><p>Senior Product Manager · L6 · Product</p></div></div><div class="kv"><div><span>Job</span><strong>Senior Product Manager</strong></div><div><span>Position</span><strong>PM - Talent Experiences</strong></div><div><span>Manager</span><strong>Elena Rossi</strong></div><div><span>Review period</span><strong>FY26</strong></div></div><div class="alert info" style="margin-top:12px"><strong>Correction right.</strong><span>You may request correction of factual personal, job, position, manager, or source-review information.</span></div>`)}
    ${card("Approved employee-facing outcome",`<div class="evidence"><strong>Outcome</strong><p>Ready for broader assignments that increase strategic and cross-functional scope.</p></div><div class="evidence"><strong>Discussion owner</strong><p>Elena Rossi · Manager conversation due 31 Oct 2026</p></div><div class="evidence"><strong>Visibility policy</strong><p>The organization shares a development-oriented outcome, not the literal box label.</p></div><div class="alert success" style="margin-top:12px"><strong>Approved outcome only.</strong><span>Proposed placements, calibration discussion, confidential notes, other employees, and distribution analytics are hidden.</span></div>`)}
  </div>
  <div style="margin-top:16px">${card("What the employee can and cannot see",renderConfigTable("",["Employee can see","Employee cannot see"],[
    ["Own factual profile information","Other employees or their placements"],
    ["Own formal performance review used as input","Manager-proposed box before approval"],
    ["Approved outcome allowed by policy","Calibration-session discussion"],
    ["Correction-request status","Confidential manager, HR, or facilitator notes"],
    ["Outcome acknowledgement","Distribution or comparison analytics"]
  ]))}</div>`;
}

function renderPersonaJourneys() {
  setCommands([["Start end-to-end walkthrough","walkthrough","primary"],["Export persona map","export"]]);
  const personas=[
    ["System administrator","Enable features; assign duties; configure operational processing","Feature and security readiness","No confidential talent-data access by default"],
    ["Talent administrator","Configure matrix, potential and calibration; create and close cycles","Versioned setup and governed cycles","Cannot silently alter submitted or approved decisions"],
    ["HR business partner","Validate population and evidence; monitor managers; support calibration","Quality-reviewed population and decisions","Organization-scoped access"],
    ["Line manager","Assess assigned employees; provide evidence; submit proposals","Manager-proposed placement","Assigned employees only; source review unchanged"],
    ["Calibration participant","Prepare, compare, discuss and propose changes","Participant input","Cannot confirm or approve"],
    ["Facilitator","Prepare agenda; run session; record movement and rationale","Finalized session decisions","Assigned sessions only"],
    ["Decision maker","Resolve alternatives and dissent; confirm employee outcome","Confirmed calibrated decision","Cannot approve own decision if segregation enabled"],
    ["Executive approver","Review package; approve, return or reject","Approved calibrated placements","Approval scope only"],
    ["Employee","Verify own factual data; receive policy-approved outcome","Acknowledged employee outcome","No confidential deliberations or peer data"],
    ["People analytics user","Analyze authorized aggregate and final data","Controlled reports","No confidential free-text notes"],
    ["Auditor","Review decision, access, export and reopening history","Assurance evidence","Read-only access"],
  ];
  page.innerHTML=heading("Persona workflow map","Every persona and handoff","Understand the separate entry point, workflow, output, and restriction for every role in the stitched 9-box and calibration process.",status("11 personas","blue"))+
  `<div class="flow-ribbon">${["System setup","Talent setup","HR quality","Manager input","Participant prep","Facilitate","Decide","Approve","Employee outcome","Analytics & audit"].map((x,i)=>`<div class="flow-node ${i<8?"done":""}">${x}</div>`).join("")}</div>
  <div class="grid three">${personas.map((p,i)=>`<section class="card entity-card"><h3>${i+1}. ${p[0]}</h3><p><strong>Workflow</strong><br>${p[1]}</p><p><strong>Output</strong><br>${p[2]}</p><div class="alert info"><strong>Boundary</strong><span>${p[3]}</span></div></section>`).join("")}</div>
  <div style="margin-top:16px">${card("Cross-persona handoffs",renderConfigTable("",["From","Handoff","To","Control"],[
    ["System administrator","Enabled features and duties","Talent administrator","Technical access does not grant talent-data access"],
    ["Talent administrator","Active versions and review cycle","HRBP","Configuration frozen at launch"],
    ["HRBP","Validated population and assignments","Manager","Explicit employee assignment"],
    ["Manager","Submitted proposed placement","HRBP / calibration","Manager version becomes read only"],
    ["Participant","Preparation and alternative proposals","Facilitator","Alternatives are not final decisions"],
    ["Facilitator","Documented proposed outcome","Decision maker","Reason and rationale required"],
    ["Decision maker","Confirmed calibrated decision","Approver","Finalized version locked for review"],
    ["Approver","Approved or returned result","HR administrator","Return preserves previous version"],
    ["HR administrator","Approved employee-facing outcome","Employee","Visibility policy controls disclosure"],
    ["Approved cycle","Secured aggregate/final dataset","Analytics / auditor","Row-level scope and export audit"]
  ]))}</div>`;
}

const renderers = {
  overview:renderOverview, parameters:renderParameters, "matrix-config":renderMatrixConfig,
  "potential-config":renderPotentialConfig, "reference-data":renderReferenceData, cycle:renderCycle,
  population:renderPopulation, assessors:renderAssessors, monitor:renderMonitor,
  "manager-dashboard":renderManagerDashboard, assessment:renderAssessment, "team-matrix":renderTeamMatrix,
  "calibration-config":renderCalibrationConfig, "calibration-cycle":renderCalibrationCycle, sessions:renderSessions,
  "facilitator-prep":renderFacilitatorPrep, "live-calibration":renderLiveCalibration, approval:renderApproval,
  entities:renderEntities, history:renderHistory, reports:renderReports, traceability:renderTraceability,
  "system-admin":renderSystemAdmin, "hrbp-review":renderHRBPReview, "participant-prep":renderParticipantPrep,
  "decision-maker":renderDecisionMaker, "employee-view":renderEmployeeView, "persona-journeys":renderPersonaJourneys
};

function render() {
  renderNav();
  (renderers[appState.route] || renderOverview)();
  page.focus({preventScroll:true});
  window.scrollTo({top:0,behavior:"smooth"});
}

function navigate(route) {
  appState.route=route;
  appState.activeTab = route==="parameters"?"general":route==="matrix-config"?"template":route==="calibration-config"?"parameters":"general";
  render();
}

function showToast(message) {
  const t=document.createElement("div"); t.className="toast"; t.textContent=message; $("#toastRegion").appendChild(t);
  setTimeout(()=>t.remove(),3200);
}

function openModal(title, content, primary="Confirm", onConfirm=null) {
  $("#modal").innerHTML=`<div class="modal-header"><div><div class="eyebrow">Dynamics 365 Human Resources</div><h2 id="modalTitle">${title}</h2></div><button class="icon-button" data-action="close-modal">×</button></div><div class="modal-content">${content}</div><div class="modal-actions">${button("Cancel","close-modal")}${button(primary,"modal-confirm","primary")}</div>`;
  $("#modalBackdrop").classList.remove("hidden");
  $("#modal").dataset.confirm=onConfirm||"";
}

function closeModal(){ $("#modalBackdrop").classList.add("hidden"); }

function openWalkthrough() {
  $("#walkthroughPanel").classList.remove("hidden");
  renderWalkthrough();
}
function renderWalkthrough(){
  const s=walkthroughSteps[appState.walkthroughStep];
  $("#walkthroughProgress").style.width=`${((appState.walkthroughStep+1)/walkthroughSteps.length)*100}%`;
  $("#walkthroughBody").innerHTML=`<div class="step-number">Step ${appState.walkthroughStep+1} of ${walkthroughSteps.length} · ${s.owner}</div><h3>${s.title}</h3><p>${s.copy}</p><div class="walkthrough-output"><strong>Output</strong><br>${s.output}</div><p style="margin-top:18px">Select <strong>Open this screen</strong> to explore the corresponding configuration and workflow.</p>${button("Open this screen","walkthrough-open","primary")}`;
  $("#walkthroughPrev").disabled=appState.walkthroughStep===0;
  $("#walkthroughNext").textContent=appState.walkthroughStep===walkthroughSteps.length-1?"Finish":"Next";
}

document.addEventListener("click",(event)=>{
  const routeEl=event.target.closest("[data-route]");
  if(routeEl){ if(routeEl.dataset.employee) appState.selectedEmployee=routeEl.dataset.employee; navigate(routeEl.dataset.route); $("#sidebar").classList.remove("open"); return; }
  const tab=event.target.closest("[data-tab]");
  if(tab){ appState.activeTab=tab.dataset.tab; render(); return; }
  const employee=event.target.closest("[data-employee]");
  if(employee){ appState.selectedEmployee=employee.dataset.employee; if(appState.route==="live-calibration") renderLiveCalibration(); return; }
  const action=event.target.closest("[data-action]")?.dataset.action;
  if(!action) return;
  const simpleMessages={
    save:"Changes saved.", validate:"Validation completed. Review any warnings shown on the page.", copy:"A draft copy has been created.",
    activate:"Configuration activated for future cycles.", refresh:"Information refreshed.", export:"Authorized export prepared and recorded.",
    remind:"Reminders queued for selected managers.", invite:"Session invitations sent without confidential placement details.",
    complete:"Preparation marked complete.", resolve:"Open warnings have been assigned for resolution.", agenda:"Agenda editing opened.",
    filter:"Filters applied within your permitted scope.", timeline:"Placement timeline opened.", access:"Access history opened.",
    "manage-reference":"Reference catalog opened.", "new-reference":"New effective-dated reference record created.",
    "new-template":"Draft matrix template created.", "new-version":"New draft version created.", "new-criterion":"Draft criterion created.",
    "criterion":"Criterion details opened with rating anchors.", "add-employee":"Employee inclusion dialog opened.",
    exclude:"Selected employees require an exclusion reason.", reassign:"Assessor reassignment requires reason and draft-handling choice.",
    approve:"Population approved.", "go-population":"Population generation opened.", "go-cycle":"Review-cycle creation opened.",
    "go-assessment":"Next assessment opened.", "go-team":"Team matrix opened.", "bulk-submit":"Individually valid assessments submitted; blocked records remain open.",
    "report-data":"HR data-correction exception created. Master worker data was not changed.", "open-requirements":"Source requirement documents are in the project root.",
    assign:"Participant assignment opened.", "create-sessions":"Sessions generated using the selected grouping rule.",
    "open-prep":"Preparation access opened for assigned participants.", clarify:"Clarification request sent to the facilitator.",
    reject:"Session rejected with required reason.", pause:"Session paused after saving valid decisions.", dissent:"Dissent record opened.",
    defer:"Deferral requires reason, owner, due date, and follow-up.", finalize:"Pre-finalization validation started.",
    "return-selected":"Selected decisions returned; prior finalized version remains in history.", "return":"Assessment returned with reason.",
    reset:"Defaults restored in this prototype."
  };
  if(action==="walkthrough"){ openWalkthrough(); return; }
  if(action==="walkthrough-open"){ navigate(walkthroughSteps[appState.walkthroughStep].route); return; }
  if(action==="close-modal"){ closeModal(); return; }
  if(action==="modal-confirm"){ closeModal(); showToast("Action completed and audit history updated."); return; }
  if(action==="launch"){
    openModal("Launch manager assessments",`<div class="alert warning"><strong>2 blocking assignment exceptions remain.</strong><span>Launch is prevented until each employee is reassigned or excluded.</span></div><p>The launch will freeze population, matrix and potential versions, performance mappings, and employee snapshots.</p>`,"Review exceptions"); return;
  }
  if(action==="submit"){
    openModal("Submit manager assessment",`<p><strong>${employeeById(appState.selectedEmployee).name}</strong></p><div class="kv"><div><span>Performance</span><strong>High</strong></div><div><span>Potential</span><strong>High</strong></div><div><span>Proposed box</span><strong>High-impact talent</strong></div><div><span>Overrides</span><strong>None</strong></div></div><div class="alert info" style="margin-top:14px">Submission makes manager fields read only unless recalled or returned.</div>`,"Submit","submit-assessment"); return;
  }
  if(action==="save-decision"){
    const e=employeeById(appState.selectedEmployee); appState.decisions[e.id].status="Confirmed"; showToast(`${e.name}'s calibrated decision saved and history updated.`); renderLiveCalibration(); return;
  }
  if(action==="confirm"){
    const e=employeeById(appState.selectedEmployee); appState.decisions[e.id]={performance:e.performance,potential:e.potential,box:e.proposed,changed:false,status:"Confirmed"}; showToast("Manager proposal explicitly confirmed."); renderLiveCalibration(); return;
  }
  if(action==="start-session"){ appState.route="live-calibration"; appState.sessionStatus="In progress"; render(); return; }
  if(action==="close-stage"){
    openModal("Close manager assessment stage",`<div class="alert warning"><strong>Strict closure checks failed.</strong><span>36 incomplete, 4 returned, and 2 blocking exceptions require a formal disposition.</span></div><p>Closing will disable manager editing and recall and freeze submitted placements.</p>`,"Review incomplete records"); return;
  }
  if(action==="approve-session"){
    openModal("Approve calibration session",`<p>Approval will create locked final calibrated placements for 35 completed employees. One deferred employee remains assigned to follow-up session CAL-S05.</p><div class="alert success"><strong>Approval package complete.</strong><span>All material movements contain evidence, rationale, and decision-maker confirmation.</span></div>`,"Approve session","approve-session"); return;
  }
  if(simpleMessages[action]) showToast(simpleMessages[action]);
});

$("#personaSelect").addEventListener("change",(e)=>{
  appState.persona=e.target.value;
  appState.route={
    admin:"overview","system-admin":"system-admin",hrbp:"hrbp-review",manager:"manager-dashboard",
    participant:"participant-prep",facilitator:"facilitator-prep","decision-maker":"decision-maker",
    approver:"approval",employee:"employee-view",analytics:"reports",auditor:"history"
  }[appState.persona];
  render();
});
$("#menuToggle").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
$("#walkthroughLaunch").addEventListener("click",openWalkthrough);
$("#walkthroughClose").addEventListener("click",()=>$("#walkthroughPanel").classList.add("hidden"));
$("#walkthroughPrev").addEventListener("click",()=>{ if(appState.walkthroughStep>0){appState.walkthroughStep--;renderWalkthrough();}});
$("#walkthroughNext").addEventListener("click",()=>{
  if(appState.walkthroughStep<walkthroughSteps.length-1){appState.walkthroughStep++;renderWalkthrough();}
  else $("#walkthroughPanel").classList.add("hidden");
});
$("#modalBackdrop").addEventListener("click",(e)=>{ if(e.target===$("#modalBackdrop")) closeModal(); });
document.addEventListener("keydown",(e)=>{ if(e.key==="Escape"){closeModal();$("#walkthroughPanel").classList.add("hidden");}});

render();
