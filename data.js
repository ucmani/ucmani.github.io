// Site content.

window.SITE = {
  name: "Mani Gidijala",
  tagline: "Software Engineer / Data Lead / AI Engineer",
  email: "manikhanta0023@gmail.com",
  github: "https://github.com/ucmani",
  linkedin: "https://www.linkedin.com/in/ucmani",
  resume: "",                         // path to PDF
  photo: "photos/me.jpg",
  headline: "RAG, agents, evals, and the data pipelines behind them.",                       // about page title
  intro: "I build RAG systems, agents and LLM applications, backed by more than 5 years of software, data and analytics engineering. My projects pair practical engineering with evaluation.",                          // opening paragraph on the about page

  // optional pages: true shows them in the nav
  pages: { ideas: false, photos: false, articles: false },

  // false hides empty fields and sample entries
  showPlaceholders: true
};

// rows: [{ label, tools: [{ name, url? }], note? }]
window.SETUP = [
  {
    title: "Machine",
    note: "What I build on day to day",
    rows: [
      { label: "Laptop", tools: [{ name: "MacBook Air (M4)" }], note: "16 GB RAM, 512 GB SSD" },
      { label: "Monitor", tools: [{ name: "ZEBRONICS" }], note: "32 inch" }
    ]
  },
  {
    title: "Editor, terminal and AI coding",
    rows: [
      { label: "Editors", tools: [{ name: "PyCharm", url: "https://www.jetbrains.com/pycharm/" }, { name: "Cursor", url: "https://cursor.com" }, { name: "VS Code", url: "https://code.visualstudio.com" }] },
      { label: "AI coding", tools: [{ name: "Claude Code", url: "https://www.anthropic.com/claude-code" }, { name: "GitHub Copilot", url: "https://github.com/features/copilot" }] },
      { label: "Terminal", tools: [{ name: "Warp", url: "https://www.warp.dev" }, { name: "iTerm2", url: "https://iterm2.com" }, { name: "tmux", url: "https://github.com/tmux/tmux" }] },
      { label: "Shell", tools: [{ name: "zsh", url: "https://www.zsh.org" }] }
    ]
  },
  {
    title: "Models and compute",
    rows: [
      { label: "Frameworks", tools: [{ name: "PyTorch", url: "https://pytorch.org" }, { name: "Transformers", url: "https://huggingface.co/docs/transformers" }] },
      { label: "Orchestration", tools: [{ name: "LangGraph", url: "https://www.langchain.com/langgraph" }, { name: "LangChain", url: "https://www.langchain.com" }] },
      { label: "Local models", tools: [{ name: "Ollama", url: "https://ollama.com" }, { name: "Open WebUI", url: "https://openwebui.com" }] },
      { label: "Fine-tuning", tools: [{ name: "Unsloth", url: "https://unsloth.ai" }] },
      { label: "Model hub", tools: [{ name: "Hugging Face", url: "https://huggingface.co" }] },
      { label: "Serving", tools: [{ name: "vLLM", url: "https://docs.vllm.ai" }] },
      { label: "Evaluation", tools: [{ name: "Ragas", url: "https://www.ragas.io" }] },
      { label: "GPU compute", tools: [{ name: "RunPod", url: "https://www.runpod.io" }] }
    ]
  },
  {
    title: "Backend and data",
    rows: [
      { label: "API framework", tools: [{ name: "FastAPI", url: "https://fastapi.tiangolo.com" }] },
      { label: "Databases", tools: [{ name: "Supabase", url: "https://supabase.com" }, { name: "PostgreSQL", url: "https://www.postgresql.org" }] },
      { label: "Vector search", tools: [{ name: "Pinecone", url: "https://www.pinecone.io" }] },
      { label: "Data engineering", tools: [{ name: "Apache Airflow", url: "https://airflow.apache.org" }, { name: "dbt", url: "https://www.getdbt.com" }, { name: "pandas", url: "https://pandas.pydata.org" }] },
      { label: "API testing", tools: [{ name: "Postman", url: "https://www.postman.com" }, { name: "Insomnia", url: "https://insomnia.rest" }, { name: "cURL", url: "https://curl.se" }] }
    ]
  },
  {
    title: "Languages and quality",
    rows: [
      { label: "Languages", tools: [{ name: "Python", url: "https://www.python.org" }, { name: "SQL" }] },
      { label: "Packaging", tools: [{ name: "uv", url: "https://docs.astral.sh/uv/" }] },
      { label: "Linting and typing", tools: [{ name: "ruff", url: "https://docs.astral.sh/ruff/" }, { name: "mypy", url: "https://mypy-lang.org" }, { name: "Black", url: "https://black.readthedocs.io" }] },
      { label: "Testing", tools: [{ name: "pytest", url: "https://pytest.org" }] }
    ]
  },
  {
    title: "Prototyping and design",
    rows: [
      { label: "Notebooks", tools: [{ name: "Jupyter", url: "https://jupyter.org" }] },
      { label: "Quick UIs", tools: [{ name: "Streamlit", url: "https://streamlit.io" }] },
      { label: "Animation", tools: [{ name: "Manim" }] },
      { label: "Notes and docs", tools: [{ name: "Notion", url: "https://www.notion.com" }] }
    ]
  },
  {
    title: "Infrastructure and deployment",
    rows: [
      { label: "Containers", tools: [{ name: "OrbStack", url: "https://orbstack.dev" }, { name: "Docker", url: "https://www.docker.com" }, { name: "Docker Compose", url: "https://docs.docker.com/compose/" }, { name: "Podman", url: "https://podman.io" }] },
      { label: "Observability", tools: [{ name: "Prometheus", url: "https://prometheus.io" }, { name: "Grafana", url: "https://grafana.com" }] },
      { label: "Hosting", tools: [{ name: "Vercel", url: "https://vercel.com" }] },
      { label: "Version control", tools: [{ name: "Git", url: "https://git-scm.com" }] }
    ]
  }
];

// background, philosophy: about page. work: rows under "Work with me"
window.ABOUT = {
  background: [
    "Most recently, I served as Data Lead at a fast-growing startup, driving end-to-end data strategy and architecture. My work has always centered on translation: sitting with business teams, deciphering real-world requirements, and building robust technical solutions that directly solve customer problems.",
    "After spending 5 years in the US completing my Master’s and working as a Software Engineer, I returned to India in 2022. In 2026, I stepped away from my role to focus full-time on mastering Applied AI Engineering and other skills relevant to AI and Data infrastructure."
  ],
  philosophy: [
    { title: "First-Principles Builder", text: "I dig into core infrastructure like model quantization, inference serving, and backend systems until I understand the performance trade-offs." },
    { title: "Customer-Centric", text: "I focus on the outcome—getting high-performing models and scalable pipelines to work reliably with dirty, real-world data." }
  ],
  work: [
    { label: "Primary roles", text: "AI Engineer, Forward Deployed Engineer (FDE)" },
    { label: "Secondary roles", text: "Data Engineer, Backend Engineer, Machine Learning Engineer" },
    { label: "Where", text: "Open to opportunities based in the US, Europe, Canada, India, and Australia." }
  ]
};

window.EDUCATION = [
  {
    degree: "Master of Engineering in Computer and Information Sciences",
    school: "University of Cincinnati",
    place: "OH, USA",
    years: "2017 – 2019",
    note: "Focus: Software Engineering, Cyber Security"
  }
];

// Every project field except title and status is optional.
// status: in-use | built | building | learning | planned
// featured: shown at the top of the home page
// short: one-line description for the featured list
// stack: tags on the card and project page
// links: [{ label, url, note? }]. Leave it out for no links. They show beside the tags;
//   add { title: "Links", links: true } to sections to list them with notes as well
// page: false keeps a project on the work page only, with no project page
// sections: the project page, in order. Add, remove or reorder freely.
//   Each one takes any of: title, text (string or list), points, table: { head, rows },
//   groups: [{ title, text, table, points }], links (true = this project's links),
//   placeholder (shown only while placeholders are on, if the section is empty)
// **bold** and `code` work in text
window.PROJECTS = [
  {
    title: "BenchBrief AI",
    slug: "benchbrief",
    status: "built",
    featured: true,
    short: "A Retrieval-Augmented Generation (RAG) system built to reduce judicial overhead.",
    summary: "Summarizes case filings, surfaces relevant precedent, and evaluates judicial queries with strict guardrails.",
    stack: ["FastAPI", "Streamlit", "Pinecone", "Supabase", "bge-reranker-base", "Prometheus", "Grafana"],
    sections: [
      {
        title: "Highlights",
        points: [
          "Two-stage retrieval: dense search pulls the top 25 candidates, then a cross-encoder reranker narrows them to the top 8.",
          "Every fact or precedent statement carries an inline citation to a numbered source block, and the system never produces a verdict.",
          "On a 129-question benchmark, reranking raised Hit@1 from 0.496 to 0.643, at about 4.1 s more latency.",
          "Built on federal opinions from the N.D. California District Court, via CourtListener."
        ]
      },
      {
        title: "Why I built it",
        text: [
          "Judges spend a significant portion of their workload manually sifting through lengthy case filings and searching for past legal precedents before drafting court orders.",
          "Automating the tedious factual retrieval and legal research phases frees up time for judicial professionals to focus on applying the law, evaluating complex arguments, and handling higher case volumes. BenchBrief was designed as a secure, fast, and citation-backed decision-support copilot for the bench."
        ]
      },
      {
        title: "How it works",
        groups: [
          {
            title: "Stack and architecture",
            points: [
              "**Backend and API:** Python, FastAPI, Streamlit",
              "**Vector search and storage:** Pinecone for vectors, Supabase for metadata and chunks",
              "**Embeddings and reranking:** bge-small-en-v1.5 (384-d) and the bge-reranker-base cross-encoder",
              "**LLM engine and resilience:** Gemini, OpenRouter and Ollama behind a custom provider adapter, with exponential backoff, rate-limit handling and fallback chains",
              "**Observability:** Prometheus, Grafana, Pushgateway"
            ]
          },
          {
            title: "Data pipeline and ingestion",
            points: [
              "Ingested federal legal opinions from the N.D. California District Court via CourtListener.",
              "Cleaned and normalised the text, applied fixed-size chunking, and embedded each chunk into a 384-dimensional vector with bge-small-en-v1.5.",
              "Stored the dense vectors in Pinecone, and the raw chunk text with its legal metadata in Supabase."
            ]
          },
          {
            title: "Contextual, multi-turn retrieval",
            points: [
              "**Two-stage search:** dense vector search returns the top 25 candidates, then the bge-reranker-base cross-encoder narrows them to the top 8 high-precision chunks.",
              "**Conversational context:** the chat endpoints index and search with the last two user turns, so a follow-up like “Does the same standard apply to qualified immunity?” resolves correctly."
            ]
          },
          {
            title: "Generation and guardrails",
            points: [
              "FastAPI services power a Streamlit front end.",
              "Prompts enforce three rules: claims come only from the numbered retrieved context blocks, every fact or precedent statement has an exact inline citation, and the system never generates an automated verdict or final legal ruling.",
              "A unified provider adapter handles retries, rate limits, daily-quota fail-fast protection and multi-model fallback chains."
            ]
          }
        ]
      },
      {
        title: "Results",
        groups: [
          {
            title: "Golden dataset",
            points: [
              "An audited benchmark of 129 questions across opinion chunks.",
              "Questions were checked with an LLM-as-a-judge workflow (four criteria, needing 4/5 on all) plus manual audit.",
              "Each question maps to its ground-truth chunk, so retrieval is scored deterministically, without LLM bias."
            ]
          },
          {
            title: "Retrieval benchmarks",
            text: "Hit@K and mean reciprocal rank (MRR), compared with paired McNemar significance testing.",
            table: {
              head: ["Method", "Hit@1", "Hit@5", "MRR", "Avg. latency"],
              rows: [
                ["Dense search only", "0.496", "0.783", "0.611", "~3.5 s"],
                ["Dense + cross-encoder rerank", "0.643", "0.868", "0.733", "~7.6 s"]
              ]
            },
            points: [
              "**Key finding:** adding a cross-encoder reranking stage gave a 29.6% boost in Hit@1 and a 20.0% improvement in MRR, trading latency for significantly higher context accuracy."
            ]
          },
          {
            title: "Hybrid search and RAGAS (offline, not yet run live)",
            points: [
              "**Hybrid search (BM25 + dense):** Reciprocal Rank Fusion combines keyword search with dense vectors, to better catch case citation numbers and technical legal terms.",
              "**RAGAS:** automated evaluation pipelines for the faithfulness and factual correctness of live generated answers."
            ]
          }
        ]
      },
      {
        title: "Decisions and trade-offs",
        points: [
          "**Fixed vs. semantic chunking:** started with fixed-size chunking to get a working MVP and baseline metrics before adding layout-parser pipelines.",
          "**Cost vs. latency vs. accuracy:** reranking improved retrieval accuracy (+0.122 MRR) at the cost of about 4.1 s more query latency.",
          "**Dataset scoping:** prioritised notable, high-impact court opinions to stay within API rate limits and free-tier infrastructure while proving out the system."
        ]
      },
      {
        title: "Roadmap",
        points: [
          "**Section-aware legal chunking:** structure-aware chunking that separates facts, procedural history, analysis and holding.",
          "**Hybrid search rollout:** deploy and benchmark live BM25 + dense RRF fusion against dense-only search.",
          "**Expanded corpus:** broaden the knowledge base across additional federal circuit courts.",
          "**Live RAGAS benchmarking:** run live end-to-end faithfulness and answer-correctness evaluations as quota limits scale."
        ]
      }
    ]
  },
  {
    title: "errnest",
    slug: "errnest",
    status: "built",
    featured: true,
    short: "A searchable memory of your terminal errors",
    summary: "An open-source, standalone, provider-agnostic command-line tool and TUI that automatically captures, redacts, and surfaces recurring terminal errors with AI-powered fixes.",
    stack: ["Python", "Typer", "Textual", "SQLite", "Ollama"],
    links: [{ label: "PyPI", url: "https://pypi.org/project/errnest/"}],
    sections: [
      {
        title: "Highlights",
        points: [
          "Two capture tiers: a shell hook that checks every non-zero exit in under 200 ms, and `errnest run`, which keeps the full redacted stderr.",
          "Secrets such as API keys, tokens and emails are redacted before anything is stored in a local SQLite database.",
          "Semantic search over past errors, and a Textual terminal dashboard with a Patterns tab.",
          "AI explanations run in background workers, so a slow model never blocks the terminal."
        ]
      },
      {
        title: "Why I built it",
        text: [
          "Most errors developers hit on a daily basis are repeats: port conflicts, dependency mismatches after branch switches, or permission blocks. The fix usually lives somewhere in shell history or muscle memory, but it isn't easily searchable. Wikis rarely get updated mid-debug, and generic LLM chats don't retain context about your local environment or past solutions.",
          "errnest was built to remove that friction. It was spun out as a standalone package from a sibling CLI, devnest, and works with zero-friction automation: capture failures, index them locally, and surface fixes when you need them."
        ]
      },
      {
        title: "How it works",
        groups: [
          {
            title: "Stack",
            points: [
              "**Language and core:** Python 3.9+, Typer (CLI), Rich (terminal formatting)",
              "**Terminal UI:** Textual",
              "**Storage:** SQLite in WAL mode, standard library only",
              "**AI:** httpx for Ollama, plus optional, lazy-loaded SDK extras for OpenAI, Anthropic and Gemini",
              "**Clustering and packaging:** pure-Python k-means with no NumPy dependency, hatchling, PyPI extras (`[all-providers]`)",
              "**Quality:** about 83 pytest tests with mocked AI calls, ruff, and a GitHub Actions matrix across Python 3.9–3.13"
            ]
          },
          {
            title: "Capture and redaction",
            points: [
              "Error text is intercepted and redacted (API keys, tokens, emails) before it is normalised and embedded.",
              "Entries are stored in a local SQLite database. If the embedding backend is unreachable, the row is saved without a vector, so nothing is lost."
            ]
          },
          {
            title: "Two-tier automatic capture",
            points: [
              "**Tier 1, shell hook (under 200 ms):** `errnest shell-init zsh|bash` installs a hook that fires on every non-zero exit code. It runs asynchronously with no redaction or embedding, does an exact-command SQL match against past resolved errors, and prints a fix box to stderr.",
              "**Tier 2, `errnest run <cmd>`:** wraps a command and tees its stderr. On failure it captures the full redacted output, generates embeddings, searches the local knowledge base semantically, and prints a result panel."
            ]
          },
          {
            title: "Non-blocking AI",
            points: [
              "AI explanations (`errnest explain`, `errnest run`, dashboard triggers) run in detached background worker processes and daemon threads, so slow local models or network calls never block the terminal or freeze the exit keys.",
              "Timeouts are handled, with a default of 180 s for Ollama generation, and there are clean fallbacks."
            ]
          },
          {
            title: "Terminal dashboard",
            points: [
              "Built with Textual: a searchable error log, dynamic tag generation, and a detail view showing the top 3 semantically similar errors.",
              "Native clipboard copy (pbcopy, xclip, wl-copy, clip, with an OSC 52 fallback) and background provider health checks.",
              "A Patterns tab runs pure-Python k-means (k=5) over the stored embeddings once enough errors exist."
            ]
          }
        ]
      },
      {
        title: "Decisions and trade-offs",
        points: [
          "**Dependency minimisation:** standard library wherever possible, for example pure-Python k-means instead of NumPy for basic clustering."
        ]
      },
      {
        title: "Limitations",
        points: [
          "**Tier 1 backfill gap:** Tier 1 capture logs the command without stderr or embeddings, so those entries don't appear in semantic search until a batch backfill command exists.",
          "**Storage scalability:** SQLite queries scan rows, with no index on `failing_command`, `cwd` or timestamp. That's fine at personal scale, and indexes are planned for higher volumes.",
          "**Configuration:** the CLI config command handles scalar writes only, so nested lists such as `ignore_commands` need manual TOML edits."
        ]
      },
      {
        title: "Roadmap",
        points: [
          "**Tier 1 semantic matching:** opt-in background or cached semantic checks for the shell hook, within the 200 ms budget.",
          "**Batch backfill:** `errnest backfill`, with progress bars, to vectorise historical Tier 1 entries from exit codes and commands.",
          "**Advanced pattern analysis:** automatic choice of k beyond the fixed k=5, LLM-written cluster summaries, and historical trends.",
          "**Automated release pipeline:** tag-triggered GitHub Actions workflows for PyPI publishing.",
          "**Team sync mode:** opt-in syncing of the local database across machines, once the redaction guardrails are fully audited."
        ]
      },
      { title: "Links", links: true }
    ]
  },
  {
    title: "Build Your Own Cycle (BYOC) 3D Configurator",
    slug: "byoc-configurator",
    status: "built",
    short: "A 3D Build Your Own Cycle configurator, delivered in 24 hours",
    summary: "A Build Your Own Cycle (BYOC) 3D configurator, built as a quick proof of concept to show a bicycle retailer and distributor's stakeholders an interactive buying experience.",
    stack: ["Meshy AI", "Claude", "Vercel"],
    links: [{ label: "Live demo", url: "https://svkc-byoc.vercel.app"}],
    sections: [
      {
        title: "Highlights",
        points: [
          "Delivered a functional 3D configurator within 24 hours.",
          "Sample cycle specifications and part details were synthesised, and the interactive 3D assets were generated with Meshy AI.",
          "Application development was accelerated with Claude.",
          "Gave the store owner a tangible, interactive prototype for stakeholder alignment and distribution testing."
        ]
      },
      {
        title: "Why I built it",
        text: [
          "After consulting with the store owner on digitalization strategy, he wanted to validate a “Build Your Own Cycle” (BYOC) concept across his retail store and distribution network.",
          "The goal was a quick, visual proof of concept (POC) to demonstrate the interactive buying experience to key stakeholders."
        ]
      },
      {
        title: "Results",
        groups: [
          {
            title: "Outcome",
            points: [
              "Provided a tangible, interactive prototype for stakeholder alignment and distribution testing."
            ]
          }
        ]
      },
      { title: "Links", links: true }
    ]
  },
  {
    title: "Paper to Data: Digitization & Growth Strategy",
    slug: "paper-to-data",
    status: "built",
    short: "Forward deployed discovery and a business case study for a 30-year distributor",
    summary: "Discovery and a business case study for a 30-year-old family bicycle distributor that ran almost entirely on paper invoices and phone calls: where information was getting lost, what to digitize first, which metrics to track, and how clean data could power growth.",
    stack: ["Forward deployed discovery", "Business diagnosis", "Data strategy", "Growth analytics"],
    sections: [
      {
        title: "Highlights",
        points: [
          "A 30-year-old family bicycle distributor across Andhra Pradesh and Telangana, with a large dealer network and retail presence, and no data on stock levels, dealer trends or customer habits.",
          "Sat with the business owners to map the physical paper flows and find where manual processes created blind spots.",
          "Delivered an end-to-end case study: diagnosis, digitalization opportunities, a metrics and analytics framework, and a growth strategy."
        ]
      },
      {
        title: "Context",
        text: [
          "I worked with a 30-year-old family bicycle distributor operating across Andhra Pradesh and Telangana. With a large dealer network and retail presence, the business ran almost entirely on paper invoices and phone calls, leaving leadership with zero data on stock levels, dealer trends, or customer habits."
        ]
      },
      {
        title: "Approach",
        groups: [
          {
            title: "Discovery",
            points: [
              "Sat with the business owners to analyze their current operations, map the physical paper flows, and pinpoint where manual processes were creating blind spots."
            ]
          },
          {
            title: "Scope of the case study",
            text: "End-to-end research on the business model, delivered as a comprehensive case study covering four areas.",
            points: [
              "**Current scenario and diagnosis:** where information was getting lost, and why past workflows hindered growth.",
              "**Digitalization opportunities:** the specific operational areas where tech interventions would yield the highest immediate value.",
              "**Metrics and analytics framework:** the key operational and sales metrics to track for real-time visibility.",
              "**Growth and strategy:** how clean, digitized data could directly power smarter marketing campaigns, improve dealer retention, and support market expansion."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "PyAttrScore",
    slug: "pyattrscore",
    status: "built",
    short: "A multi-touch and football-inspired attribution engine",
    summary: "A modular Python package for multi-touch marketing attribution: standard industry models plus a custom, football-inspired framework that scores channels on their build-up value, not just the final click.",
    stack: ["Python", "Marketing analytics"],
    links: [
      { label: "Code", url: "https://github.com/ucmani/pyattrscore" },
      { label: "Article", url: "https://medium.com/@manikhantatejag/how-a-football-inspired-attribution-model-reimagines-marketing-analytics-a0bd8132c7f8" }
    ],
    sections: [
      {
        title: "Why I built it",
        text: "Traditional multi-touch marketing attribution models often treat customer touchpoints as isolated events, or rely on rigid heuristics (first-touch, last-touch, linear) that fail to capture the true dynamics of multi-step conversion journeys."
      },
      {
        title: "How it works",
        groups: [
          {
            title: "The package",
            points: [
              "A comprehensive, modular Python package that implements both standard industry attribution models and a custom-built framework.",
              "It gives developers and analysts a toolkit to ingest raw event-stream data, process sequential touchpoint chains, and evaluate conversion credit from multiple analytical lenses."
            ]
          },
          {
            title: "The football-inspired framework",
            text: "A cross-domain attribution model I ideated and built, borrowing spatial and sequence analytics from football (soccer).",
            points: [
              "Conversions are treated as “goals” and touchpoint sequences as “passes”.",
              "The engine calculates a **Channel Impact Score (CIS)** using functional roles mirrored from football positions: Scorers, Assisters, Key Passers and Generators.",
              "It computes derived metrics, including Expected Goals (xG), Expected Assists (xA), and channel archetype classifications (Generators, Engagers, Nurturers, Closers).",
              "The aim is to quantify build-up value rather than just final clicks."
            ]
          }
        ]
      },
      { title: "Links", links: true }
    ]
  },
  {
    title: "CallAudit",
    slug: "callaudit",
    status: "building",
    featured: true,
    short: "Automated QA scoring for sales and support calls",
    summary: "A dual-mode AI call auditing platform that automatically transcribes, evaluates, and scores sales and support calls at scale, with compliance guardrails.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "RQ", "Whisper", "Docker Compose"],
    sections: [
      {
        title: "Highlights",
        points: [
          "Pipeline: upload, Redis queue, per-speaker Whisper transcription, silence detection from the audio, checklist evaluation, weighted score, results API.",
          "Two interchangeable evaluation modes, Judge (cheap, consistent baseline) and Analyze (rationale, evidence and coaching notes), share one result schema.",
          "Scoring is deterministic, and any critical failure fails the call regardless of the number.",
          "Checklist configurations are versioned and immutable, so every past audit can be reproduced."
        ]
      },
      {
        title: "Why I built it",
        text: [
          "Manual quality assurance (QA) in high-volume contact centres is bottlenecked. QA analysts review only 1–3% of calls, leaving about 97% of customer interactions unmonitored for compliance failures. Reviewing a 10-minute call takes 15–20 minutes of analyst time, so auditing everything is economically unviable. Scoring varies between analysts, and reviews arrive late, so agents repeat critical mistakes across hundreds of calls before they are corrected.",
          "CallAudit is designed to give automated, consistent and explainable compliance checks on 100% of calls, and to separate routine high-volume filtering from deeper qualitative coaching."
        ]
      },
      {
        title: "How it works",
        groups: [
          {
            title: "Stack",
            points: [
              "**Language and tooling:** Python 3.12, uv, ruff, mypy, pytest",
              "**API and validation:** FastAPI, Pydantic v2",
              "**Storage and queue:** PostgreSQL 16 (SQLAlchemy 2.0), Redis with RQ",
              "**Audio:** pydub (FFmpeg wrapper)",
              "**Transcription and AI:** OpenAI Whisper-1, TypeSafe Jev (Judge mode), OpenAI chat models (Analyze mode)",
              "**Resilience and observability:** tenacity, custom circuit breakers, structlog, Prometheus metrics, a `/health` endpoint",
              "**Local environment:** Docker Compose"
            ]
          },
          {
            title: "Pipeline",
            text: "Upload (FastAPI) → queue (Redis) → transcribe per speaker (Whisper) → detect silences (pydub) → evaluate the checklist (Judge or Analyze mode) → score → results API.",
            points: [
              "**Ingestion and deduplication:** accepts single or batch recordings with a target checklist configuration. Repeat uploads with the same external ID return the existing record.",
              "**Background queue:** jobs run through Redis and RQ, so worker nodes can scale with throughput.",
              "**Stereo transcription:** the stereo channels (agent and customer) are transcribed separately with Whisper, then merged into one time-ordered transcript.",
              "**Silence detection:** pydub analyses the raw audio for dead air where neither party speaks.",
              "**Redaction:** pattern-based PII masking (phone numbers, emails, long digit strings) runs before checklist items are evaluated.",
              "**Deterministic scoring:** a weighted score from passing items. A critical failure fails the call regardless of the number."
            ]
          },
          {
            title: "Two evaluation modes",
            text: "Judge mode is the default and Analyze mode is the alternative. Both share one result schema, so a `/compare` endpoint can line up their verdicts and check model alignment.",
            table: {
              head: ["", "Judge mode (default)", "Analyze mode"],
              rows: [
                ["Model type", "Decision model (e.g. TypeSafe Jev)", "Regular LLM (e.g. OpenAI models)"],
                [
                  "Outputs",
                  "PASS / FAIL / NA per item, with a calibrated probability",
                  "Verdict, confidence score, written rationale, transcript evidence lines, call summary and coaching notes"
                ],
                [
                  "Best for",
                  "High-volume, low-cost, consistent baseline scoring",
                  "Supervisor reviews, detailed agent coaching and qualitative feedback"
                ]
              ]
            }
          }
        ]
      },
      {
        title: "Decisions and trade-offs",
        points: [
          "**Configuration versioning:** posting a configuration with an existing name creates a new immutable version. Each result links to the exact configuration version used, so past audits stay reproducible.",
          "**Two modes instead of one:** Judge mode keeps high-volume scoring cheap and consistent, and Analyze mode is there when a supervisor needs depth."
        ]
      },
      {
        title: "Limitations",
        points: [
          "**Mono recordings** have no speaker labels, so speakers have to be inferred from context. There is no diarization in v1.",
          "**File size:** uploads are bounded by Whisper's 25 MB limit.",
          "**Model sensitivity:** transcription accuracy drives everything downstream. Heavy accents, background noise or code-mixed speech (for example Hindi–English) can cause misheard words and flipped verdicts.",
          "**Data handling:** redacted transcripts and audio are sent to third-party providers, so enterprise data-retention agreements need to be checked."
        ]
      },
      {
        title: "Roadmap",
        points: [
          "**Evals and ground truth:** a benchmarked, labelled call dataset, to measure accuracy against human QA reviewers and calibrate confidence thresholds.",
          "**Human-in-the-loop review queue** for uncertain and critical verdicts, feeding human overrides back in as training labels.",
          "**Advanced audio pipeline:** diarization for mono recordings, automatic chunking of long calls, and regional Indic-language ASR providers.",
          "**Enterprise hardening:** authentication, multi-tenancy, Alembic migrations, S3 blob storage, data-retention policies and a transactional outbox.",
          "**Observability:** Grafana dashboards, OpenTelemetry tracing and LLM execution tracing.",
          "**Product:** evidence-timestamp mapping for every checklist item, an admin UI for configuration, and agent and team trend reports."
        ]
      }
    ]
  },
  {
    title: "devnest",
    slug: "devnest",
    status: "planned",
    short: "Local-first project health, onboarding and error memory for small teams",
    summary: "A local-first developer productivity CLI planned for small teams (1–10 engineers): project clarity, health diagnostics and error memory, with no servers or cloud dependencies.",
    stack: ["Python", "Typer", "Rich", "SQLite", "Ollama"],
    sections: [
      {
        title: "Highlights",
        points: [
          "`doctor` and `dashboard` will run read-only checks on runtimes, Docker, port conflicts, environment variables and lockfile drift, and cache the results per project.",
          "`onboard` will take a fresh clone to a runnable state in six steps, including `.env` bootstrapping and a Docker stack.",
          "When a command fails, a built-in error memory will surface how you fixed it before. errnest started as one of its modules.",
          "Everything will live in config files, one SQLite file and local Ollama models."
        ]
      },
      {
        title: "Why I'm building it",
        text: [
          "Backstage-style developer portals give you project catalogs, onboarding paths and health signals, but they need a hosted service and a dedicated infrastructure team to run. For a solo developer or a small team, that is overkill.",
          "devnest is meant to answer the same needs with no required infrastructure. Everything is planned to run locally from a config file (`~/.devnest/config.toml`), a single SQLite file, per-project caches (`.devnest/cache.json`), and local AI through Ollama instead of cloud APIs. It is designed to be extensible: custom checks and project plugins should take a few lines and not touch core code."
        ]
      },
      {
        title: "How it will work",
        groups: [
          {
            title: "Planned stack",
            points: [
              "**Language and core:** Python 3.9+, Typer (CLI), Rich (terminal formatting)",
              "**Storage:** SQLite in WAL mode, standard library only",
              "**AI:** Ollama for local inference (error embeddings, codebase orientation, code-scan explanations)",
              "**Packaging:** hatchling, with PyPI distribution planned as `devnest-cli` (installable with pipx or `uv tool`)",
              "**Extensibility:** subcommands mounted dynamically from `.devnest/plugin.py`, and community check registries via JSON manifests"
            ]
          },
          {
            title: "Discovery, configuration and health",
            points: [
              "**`list`:** will walk the configured root directories, find project boundaries (`.git`, `pyproject.toml`, `package.json`) and cache them to avoid repeated recursion.",
              "**`doctor` and `dashboard`:** will run read-only diagnostics across runtimes, Docker daemon reachability, port conflicts, environment variables and lockfile drift. Health snapshots will be cached per project, and no test suites will be run.",
              "**`onboard`:** will take a fresh clone to a runnable state in six isolated steps: runtime check, bootstrapping `.env` from `.env.example`, Docker stack bring-up, package installation and a smoke test."
            ]
          },
          {
            title: "Local error memory and intelligence",
            points: [
              "**`errors`:** will capture errors locally, redact secrets and embed with Ollama. When a command fails inside `doctor`, `onboard` or `stack`, devnest will surface past fixes: “you've hit this before, here's what worked.”",
              "**`context`:** will combine READMEs, git-history analytics (top contributors, most-changed files) and design notes through a local LLM to generate a structured `docs/ORIENTATION.md`, cached by content hash.",
              "**`prompt`:** will manage LLM prompts as versioned files (`prompts/<name>/vN.md` with YAML frontmatter), with viewing, diffing and pipeable execution."
            ]
          },
          {
            title: "Workflow automation and safeguards",
            points: [
              "**`port`:** will resolve the processes bound to a port across operating systems, cross-reference running Docker containers with the project registry, and ask for explicit confirmation before killing anything.",
              "**`refactor`:** will be strictly additive, based on structural gap analysis. It will generate `.env.example` templates or scaffold tests, each with individual confirmation, and never rewrite code automatically.",
              "**`publish`:** will coordinate `uv build` and `uv publish` through a release pipeline (tests, version bump, build validation, TestPyPI staging), with credentials handled through uv config."
            ]
          }
        ]
      },
      {
        title: "Design decisions",
        points: [
          "**Zero infrastructure:** no cloud databases, central servers or Kubernetes. All state stays in local config and SQLite.",
          "**Graceful degradation:** plugins and diagnostic checks will be sandboxed, so a broken plugin logs a warning and is skipped instead of crashing the CLI.",
          "**Non-blocking AI:** heavy LLM work (error explanations, context generation) will run in local background workers or optional dependencies (`devnest[errors]`), so the terminal never freezes."
        ]
      },
      {
        title: "Roadmap",
        points: [
          "**Community check registries:** extend `registry add` to remote JSON manifests, for sharing community-authored checks and templates.",
          "**Pattern generation:** tools that suggest and generate Strategy, Factory, Observer, Repository and State patterns, with pytest stubs.",
          "**Diff-aware scanning:** persistent security-smell tracking and vulnerability detection using structural code hashing."
        ]
      }
    ]
  },
  {
    title: "Keepline",
    slug: "keepline",
    status: "planned",
    short: "Keep what your agent's session actually needs. Compact the rest.",
    summary: "Keeps what an AI agent's long session still needs and compacts the rest, so every turn is cheaper and the context stays clean.",
    sections: [
      {
        title: "Why I'm building it",
        text: [
          "AI agents re-read their entire history on every turn. In long sessions most of that history is bulk, such as tool output, logs and abandoned attempts, so the cost climbs with every turn and answers get worse as the context fills with noise.",
          "The usual fixes are blunt. Truncating drops things the agent still needed. Summarizing everything blurs exact details like names, numbers and error messages, and rewriting history can break prompt caching, so the bill sometimes goes up instead of down.",
          "What is missing is a reliable way to tell what a session still needs, and to compact the rest without losing it."
        ]
      },
      {
        title: "What it aims to do",
        points: [
          "**Compacts long sessions.** Keeps what the agent still needs and condenses the rest, so every turn is cheaper and the context stays clean.",
          "**Loses nothing.** Original turns stay stored and can be recalled when the agent needs them.",
          "**Shows the evidence.** Results are measured on cost and answer quality together, not on tokens saved alone."
        ]
      }
    ]
  },
  {
    title: "RouteWise",
    slug: "routewise",
    status: "planned",
    short: "Find out how much of your LLM traffic actually needs your most expensive model.",
    summary: "Looks at real conversation traffic to estimate how much of an LLM product's requests really need its most expensive model, and what moving the rest to a smaller one would cost in quality.",
    sections: [
      {
        title: "Why I'm building it",
        text: [
          "Most LLM-powered products send every request to one strong, expensive model. A large share of those requests are simple enough for a smaller, cheaper model to handle just as well, but teams rarely have the evidence to act on that safely.",
          "Generic routing tools exist, but they are typically tuned on someone else's data. Your traffic, your users, and your definition of “good enough” are different."
        ]
      },
      {
        title: "What it aims to do",
        text: "Looking at real conversation traffic, it aims to answer three questions.",
        points: [
          "**How much are you overspending?** An estimate of the cost that could move to a smaller model, broken down by task type.",
          "**What would it cost in quality?** Where a smaller model holds up, and where it doesn't.",
          "**Can routing be automated safely?** A learned router that sends each request to the right-sized model, and keeps checking its own decisions over time."
        ]
      }
    ]
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
