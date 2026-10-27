// Site content.

window.SITE = {
  name: "Mani Gidijala",
  tagline: "Software Engineer / Data Lead / AI Engineer",
  email: "",
  github: "",
  linkedin: "",
  resume: "",                         // path to PDF

  // false hides empty fields and sample entries
  showPlaceholders: true
};

// items: { name, url?, why }
window.SETUP = [
  {
    title: "Machine",
    note: "What I build on day to day",
    items: [
      { name: "", placeholder: "Laptop and specs", why: "" }
    ]
  }
];

window.EDUCATION = [
  { degree: "", school: "", place: "", years: "", note: "" }
];

// status: in-use | built | building | learning | planned
// featured: shown at the top of the home page
// short: one-line description for the featured list
// ai: optional note on AI use
// story: content for project.html?p=<slug>
window.PROJECTS = [
  {
    sample: true,
    title: "Project name",
    slug: "example",
    status: "planned",
    featured: true,
    short: "One line for the featured list",
    summary: "Two or three sentences: what it does, who it's for, and where it stands today.",
    details: [],
    stack: [],
    links: [{ label: "Code", url: "" }],
    story: { why: "", decisions: [], learned: [], next: "" }
  }
];

// added: e.g. "Oct 2026"
window.IDEAS = [
  { title: "", pitch: "", why: "", tags: [], added: "" }
];

// read: YYYY-MM-DD, sorted newest first
window.ARTICLES = [
  { sample: true, title: "", url: "", source: "", read: "", note: "", tags: [] }
];

// Images go in photos/, about 2000px on the long side
window.PHOTOS = [
  { sample: true, src: "photos/sample-1.jpg", alt: "Sample image: abstract landscape", caption: "Sample photo", place: "", date: "" }
];
