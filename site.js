(function () {
  var SITE = window.SITE || {};
  var DRAFT = SITE.showPlaceholders !== false;
  var PROJECTS = (window.PROJECTS || []).filter(function (p) { return DRAFT || !p.sample; });
  var EDUCATION = window.EDUCATION || [];
  var SETUP = window.SETUP || [];
  var $ = function (s) { return document.querySelector(s); };

  var STATUSES = [
    { key: "in-use",   label: "In use",   note: "People rely on it today" },
    { key: "built",    label: "Built",    note: "Finished and working" },
    { key: "building", label: "Building", note: "Partly done, actively worked on" },
    { key: "learning", label: "Learning", note: "Built mainly to learn the skill" },
    { key: "planned",  label: "Planned",  note: "Designed, not started" }
  ];
  var byKey = {};
  STATUSES.forEach(function (s) { byKey[s.key] = s; });

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
  function pslug(p) { return p.slug || slug(p.title); }
  function storyUrl(p) { return "project.html?p=" + encodeURIComponent(pslug(p)); }
  function rich(s) {
    return esc(s).replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }
  function ph(label) { return DRAFT ? '<span class="ph">' + esc(label) + "</span>" : ""; }

  /* ---------- Shared: theme, site details, favicon, contact, footer ---------- */

  // Optional pages: show their nav links when on; send visitors home when off
  var PAGES = SITE.pages || {};
  var thisPage = document.body.getAttribute("data-optional");
  if (thisPage && PAGES[thisPage] === false) { location.replace("index.html"); return; }
  document.querySelectorAll("nav [data-optional]").forEach(function (a) {
    if (PAGES[a.getAttribute("data-optional")] !== false) a.hidden = false;
  });

  var root = document.documentElement;
  var themeBtn = $(".theme");
  function syncThemeBtn() {
    themeBtn.setAttribute("aria-label", "Switch to " + (root.dataset.theme === "dark" ? "light" : "dark") + " theme");
  }
  themeBtn.addEventListener("click", function () {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    syncThemeBtn();
  });
  syncThemeBtn();

  document.querySelectorAll("[data-site]").forEach(function (el) {
    var key = el.getAttribute("data-site");
    var val = SITE[key];
    if (key === "resume") { if (val) { el.href = val; el.hidden = false; } return; }
    if (val) el.textContent = val;
  });
  if (SITE.name) document.title = document.title.replace(/^[^|]+\|/, SITE.name + " |");

  // Favicon: the same three-bar mark as the header
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#0b0d0c"/>' +
    '<g fill="#e6e9e7"><rect x="8" y="8" width="3.2" height="16" rx="1.6"/><rect x="14.4" y="14" width="3.2" height="10" rx="1.6" opacity=".55"/>' +
    '<rect x="20.8" y="8" width="3.2" height="16" rx="1.6"/></g></svg>';
  var icon = document.createElement("link");
  icon.rel = "icon";
  icon.href = "data:image/svg+xml," + encodeURIComponent(svg);
  document.head.appendChild(icon);

  var contacts = [
    { label: "email", href: SITE.email ? "mailto:" + SITE.email : "" },
    { label: "github", href: SITE.github },
    { label: "linkedin", href: SITE.linkedin }
  ];
  document.querySelectorAll(".contact").forEach(function (ul) {
    ul.innerHTML = contacts.map(function (c) {
      if (c.href) return '<li><a href="' + esc(c.href) + '">' + c.label + "</a></li>";
      return DRAFT ? "<li>" + ph(c.label) + "</li>" : "";
    }).join("");
    var row = ul.closest(".facts > div");
    if (row && !ul.children.length && !SITE.resume) row.hidden = true;
  });

  var updated = $("[data-updated]");
  if (updated) {
    var d = new Date(document.lastModified);
    updated.dateTime = d.toISOString().slice(0, 10);
    updated.textContent = d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  }

  function statusTag(s) {
    return '<span class="status s-' + s.key + '" title="' + esc(s.note) + '"><span class="dot" aria-hidden="true"></span>' + s.label + "</span>";
  }

  /* ---------- Home: featured, projects, filter ---------- */

  var featuredEl = $(".featured");
  if (featuredEl) {
    featuredEl.innerHTML = PROJECTS.filter(function (p) { return p.featured; }).slice(0, 4).map(function (p) {
      var s = byKey[p.status] || STATUSES[4];
      return '<li><a href="' + storyUrl(p) + '"><span class="f-title">' + esc(p.title) + "</span>" +
        '<span class="f-arrow" aria-hidden="true">↗</span><span class="f-desc">' + esc(p.short || "") + "</span>" +
        statusTag(s) + "</a></li>";
    }).join("");
  }

  var list = $(".projects");
  if (list) {
    var order = STATUSES.map(function (s) { return s.key; });
    list.innerHTML = PROJECTS.slice().sort(function (a, b) {
      return order.indexOf(a.status) - order.indexOf(b.status);
    }).map(function (p) {
      var s = byKey[p.status] || STATUSES[4];
      var h = '<article class="project" id="p-' + pslug(p) + '" data-status="' + s.key + '">';
      h += '<div class="meta">' + statusTag(s);
      if (p.stack && p.stack.length) h += '<p class="stack">' + p.stack.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</p>";
      h += '</div><div class="body"><h3><a class="title-link" href="' + storyUrl(p) + '">' + esc(p.title) + "</a></h3>";
      h += '<p class="summary">' + rich(p.summary) + "</p>";
      var links = (p.links || []).map(function (l) {
        if (l.url) return '<a class="out" href="' + esc(l.url) + '">' + esc(l.label) + ' <span aria-hidden="true">↗</span></a>';
        return ph(l.label + " link");
      }).filter(Boolean);
      links.unshift('<a class="more" href="' + storyUrl(p) + '" aria-label="Read more about ' + esc(p.title) + '">Read more</a>');
      h += '<p class="links">' + links.join("") + "</p>";
      return h + "</div></article>";
    }).join("");

    var filter = $(".filter");
    var counts = {};
    PROJECTS.forEach(function (p) { counts[p.status] = (counts[p.status] || 0) + 1; });
    var buttons = [{ key: "all", label: "All", n: PROJECTS.length }].concat(
      STATUSES.filter(function (s) { return counts[s.key]; }).map(function (s) {
        return { key: s.key, label: s.label, n: counts[s.key], note: s.note };
      })
    );
    filter.innerHTML = buttons.map(function (b) {
      return '<button type="button" class="s-' + b.key + '" data-f="' + b.key + '" aria-pressed="' + (b.key === "all") + '"' +
        (b.note ? ' title="' + esc(b.note) + '"' : "") + ">" +
        (b.key !== "all" ? '<span class="dot" aria-hidden="true"></span>' : "") +
        esc(b.label) + ' <span class="n">' + b.n + "</span></button>";
    }).join("");
    filter.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      var f = btn.getAttribute("data-f");
      filter.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      list.querySelectorAll(".project").forEach(function (el) {
        el.hidden = f !== "all" && el.getAttribute("data-status") !== f;
      });
    });
  }

  /* ---------- Project story page ---------- */

  var storyEl = $(".story");
  if (storyEl) {
    var want = new URLSearchParams(location.search).get("p") || window.PREVIEW_SLUG;
    var idx = -1;
    PROJECTS.forEach(function (p, i) { if (pslug(p) === want) idx = i; });

    if (idx < 0) {
      document.title = (SITE.name || "Mani") + " | Project not found";
      storyEl.innerHTML = '<section class="page-intro"><h1>Project not found</h1>' +
        '<p class="intro">There\'s no project at this address. It may have been renamed.</p>' +
        '<p class="links"><a href="index.html#work">See all projects</a></p></section>';
    } else {
      var p = PROJECTS[idx];
      var s = byKey[p.status] || STATUSES[4];
      var st = p.story || {};
      document.title = (SITE.name || "Mani") + " | " + p.title;
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", p.summary);

      var linkHtml = (p.links || []).map(function (l) {
        if (l.url) return '<a class="out" href="' + esc(l.url) + '">' + esc(l.label) + ' <span aria-hidden="true">↗</span></a>';
        return ph(l.label + " link");
      }).filter(Boolean).join("");

      var toc = [];
      var section = function (id, title, body, placeholder) {
        if (!body) {
          if (!DRAFT || !placeholder) return "";
          body = '<p class="story-ph">' + ph(placeholder) + "</p>";
        }
        toc.push({ id: id, title: title });
        return '<section class="story-part" id="' + id + '"><h2>' + title + "</h2><div>" + body + "</div></section>";
      };
      var bullets = function (arr) {
        return arr && arr.length ? "<ul>" + arr.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ul>" : "";
      };
      var para = function (t) {
        return [].concat(t || []).map(function (x) { return "<p>" + rich(x) + "</p>"; }).join("");
      };
      var table = function (t) {
        if (!t || !t.rows || !t.rows.length) return "";
        var head = (t.head || []).map(function (c) { return '<th scope="col">' + esc(c) + "</th>"; }).join("");
        var rows = t.rows.map(function (r) {
          return "<tr>" + r.map(function (c, i) {
            return i === 0 ? '<th scope="row">' + rich(c) + "</th>" : "<td>" + rich(c) + "</td>";
          }).join("") + "</tr>";
        }).join("");
        return '<div class="story-table" tabindex="0" role="region" aria-label="' + esc(t.title || "Table") + '"><table>' +
          (head ? "<thead><tr>" + head + "</tr></thead>" : "") + "<tbody>" + rows + "</tbody></table></div>";
      };
      var groups = function (arr) {
        return (arr || []).map(function (g) {
          return '<div class="story-group">' + (g.title ? "<h3>" + esc(g.title) + "</h3>" : "") +
            para(g.text) + table(g.table) + bullets(g.points) + "</div>";
        }).join("");
      };

      var h = '<p class="back"><a href="index.html#work">All projects</a></p>';
      h += '<header class="story-head">' + statusTag(s) + "<h1>" + esc(p.title) + "</h1>";
      h += '<p class="intro">' + rich(p.summary) + "</p>";
      if ((p.stack && p.stack.length) || linkHtml) {
        h += '<div class="story-meta">';
        if (p.stack && p.stack.length) h += '<p class="stack">' + p.stack.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</p>";
        if (linkHtml) h += '<p class="links">' + linkHtml + "</p>";
        h += "</div>";
      }
      h += "@@TOC@@</header>";
      h += section("highlights", "Highlights", bullets(p.details));
      h += section("why", "Why I built it", para(st.why), "The problem, who has it, and why you picked it");
      h += section("how", "How it works", groups(st.how), "The main pieces and how they fit together");
      h += section("results", "Results", groups(st.results));
      h += section("decisions", "Decisions and trade-offs", bullets(st.decisions), "Choices you made, and the reason for each");
      h += section("limits", "Limitations", bullets(st.limits));
      h += (st.roadmap && st.roadmap.length)
        ? section("next", "Roadmap", bullets(st.roadmap))
        : section("next", "What's next", para(st.next), "The next step, and what done looks like");
      var linkRows = (p.links || []).map(function (l) {
        var a = l.url
          ? '<a class="out" href="' + esc(l.url) + '">' + esc(l.label) + ' <span aria-hidden="true">↗</span></a>'
          : ph(l.label + " link");
        return a ? "<li>" + a + (l.note ? '<span class="note">' + rich(l.note) + "</span>" : "") + "</li>" : "";
      }).join("");
      h += section("links", "Links", linkRows && '<ul class="story-links">' + linkRows + "</ul>");
      h = h.replace("@@TOC@@", toc.length > 1
        ? '<ul class="story-toc" aria-label="On this page">' + toc.map(function (t) {
            return '<li><a href="#' + t.id + '">' + t.title + "</a></li>";
          }).join("") + "</ul>"
        : "");

      var prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
      var next = PROJECTS[(idx + 1) % PROJECTS.length];
      h += '<nav class="pager" aria-label="More projects">' +
        '<a href="' + storyUrl(prev) + '"><small>Previous</small>' + esc(prev.title) + "</a>" +
        '<a href="' + storyUrl(next) + '"><small>Next</small>' + esc(next.title) + "</a></nav>";
      storyEl.innerHTML = h;
    }
  }

  /* ---------- About: intro, photo, education ---------- */

  var headlineEl = $(".about-headline");
  if (headlineEl) {
    if (SITE.headline) {
      var hp = SITE.headline.split("|");
      headlineEl.innerHTML = esc(hp[0].trim()) +
        (hp.length > 1 ? '<span class="about-sub">' + esc(hp.slice(1).join("|").trim()) + "</span>" : "");
    } else if (DRAFT) headlineEl.innerHTML = ph("Headline: one line on what you do");
  }

  var introEl = $(".about-intro");
  if (introEl) {
    if (SITE.intro) introEl.innerHTML = rich(SITE.intro);
    else if (DRAFT) introEl.innerHTML = ph("Short introduction: who you are and what you do now");
    else introEl.hidden = true;
  }

  var portrait = $(".portrait");
  if (portrait) {
    if (SITE.photo) {
      portrait.innerHTML = '<img src="' + esc(SITE.photo) + '" alt="' + esc(SITE.name || "") + '">';
    } else if (DRAFT) {
      portrait.classList.add("photo-ph");
      portrait.innerHTML = ph("photos/me.jpg");
    } else {
      portrait.parentNode.hidden = true;
      $(".about-hero").classList.add("no-photo");
    }
  }

  var ABOUT = window.ABOUT || {};
  var fillSection = function (id, html, label) {
    var sec = document.getElementById(id);
    if (!sec) return null;
    if (html) return html;
    if (!DRAFT) { sec.hidden = true; return null; }
    return '<p class="story-ph">' + ph(label) + "</p>";
  };

  var bgEl = $(".about-bg");
  if (bgEl) {
    var bg = fillSection("background", (ABOUT.background || []).map(function (t) { return "<p>" + rich(t) + "</p>"; }).join(""), "Your story: where you've worked and where you're headed");
    if (bg) bgEl.innerHTML = bg;
  }

  var philEl = $(".philosophy");
  if (philEl) {
    var phil = fillSection("philosophy", (ABOUT.philosophy || []).map(function (x) {
      return '<div class="phil-item"><h3>' + esc(x.title) + "</h3><p>" + rich(x.text) + "</p></div>";
    }).join(""), "A few principles you work by");
    if (phil) philEl.innerHTML = phil;
  }

  var factsEl = $(".facts");
  if (factsEl) {
    var contactRow = factsEl.querySelector(".facts-contact");
    (ABOUT.work || []).forEach(function (r) {
      if (!r.text) return;
      var row = document.createElement("div");
      row.innerHTML = "<dt>" + esc(r.label) + "</dt><dd>" + rich(r.text) + "</dd>";
      factsEl.insertBefore(row, contactRow);
    });
  }

  var eduEl = $(".edu");
  if (eduEl) {
    var field = function (val, label) { return val ? esc(val) : ph(label); };
    var edu = EDUCATION.filter(function (e) { return DRAFT || e.degree || e.school; });
    eduEl.innerHTML = edu.map(function (e) {
      var where = [field(e.school, "University"), field(e.place, "City, country")].filter(Boolean).join(", ");
      return '<li><p class="years">' + field(e.years, "Years") + "</p>" +
        "<div><h3>" + field(e.degree, "Degree and major") + "</h3>" +
        '<p class="school">' + where + "</p>" +
        (e.note ? '<p class="edu-note">' + esc(e.note) + "</p>" : (DRAFT ? '<p class="edu-note">' + ph("Thesis, focus or key courses (optional)") + "</p>" : "")) +
        "</div></li>";
    }).join("");
    if (!edu.length) document.getElementById("education").hidden = true;
  }

  /* ---------- Setup page ---------- */

  var setupEl = $(".setup");
  if (setupEl) {
    var toc = $(".setup-toc");
    var groups = SETUP.map(function (g) {
      var items = (g.items || []).filter(function (it) { return DRAFT || it.name; });
      return { title: g.title, note: g.note, items: items };
    }).filter(function (g) { return g.items.length; });

    if (toc) toc.innerHTML = groups.map(function (g) {
      return '<li><a href="#s-' + slug(g.title) + '">' + esc(g.title) + "</a></li>";
    }).join("");

    setupEl.innerHTML = groups.map(function (g) {
      var h = '<section class="setup-group" id="s-' + slug(g.title) + '"><div class="setup-head"><h2>' + esc(g.title) + "</h2>" +
        (g.note ? "<p>" + esc(g.note) + "</p>" : "") + '</div><dl class="tools">';
      h += g.items.map(function (it) {
        var name = it.name ? (it.url ? '<a href="' + esc(it.url) + '">' + esc(it.name) + "</a>" : esc(it.name)) : ph(it.placeholder || "Add item");
        var why = it.why ? rich(it.why) : ph("What you use it for");
        return '<div class="tool"><dt>' + name + "</dt><dd>" + why + "</dd></div>";
      }).join("");
      return h + "</dl></section>";
    }).join("");
  }
  /* ---------- Ideas page ---------- */

  var ideasEl = $(".ideas");
  if (ideasEl) {
    var IDEAS = window.IDEAS || [];
    var ideas = IDEAS.filter(function (i) { return DRAFT || i.title; });
    if (!ideas.length) {
      ideasEl.outerHTML = '<p class="intro">No ideas written up yet.</p>';
    } else {
      ideasEl.innerHTML = ideas.map(function (i) {
        var tags = (i.tags || []).length
          ? '<p class="stack">' + i.tags.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</p>"
          : (DRAFT ? '<p class="stack">' + ph("tags") + "</p>" : "");
        return '<li class="idea"><div class="idea-meta"><p class="years">' + (i.added ? esc(i.added) : ph("Added")) + "</p>" + tags + "</div>" +
          "<div><h2>" + (i.title ? esc(i.title) : ph("Idea name")) + "</h2>" +
          '<p class="pitch">' + (i.pitch ? rich(i.pitch) : ph("One sentence: what it would do")) + "</p>" +
          (i.why ? '<p class="why">' + rich(i.why) + "</p>" : (DRAFT ? '<p class="why">' + ph("Why: the problem, or why it interests you") + "</p>" : "")) +
          "</div></li>";
      }).join("");
    }
  }
  /* ---------- Articles page ---------- */

  function fmtDate(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || "");
    if (!m) return esc(iso);
    var d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
  }

  var articlesEl = $(".articles");
  if (articlesEl) {
    var arts = (window.ARTICLES || []).filter(function (a) { return DRAFT || (a.title && a.url && !a.sample); });
    arts.sort(function (a, b) { return (b.read || "").localeCompare(a.read || ""); });
    var afilter = $(".filter");
    if (!arts.length) {
      afilter.hidden = true;
      articlesEl.outerHTML = '<p class="intro">Nothing here yet.</p>';
    } else {
      articlesEl.innerHTML = arts.map(function (a) {
        var title = a.title
          ? (a.url ? '<a href="' + esc(a.url) + '">' + esc(a.title) + ' <span class="arrow" aria-hidden="true">↗</span></a>' : esc(a.title))
          : ph("Article title, linked to the article");
        var tags = (a.tags || []).length
          ? '<p class="stack">' + a.tags.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</p>"
          : (DRAFT ? '<p class="stack">' + ph("tags") + "</p>" : "");
        return '<li class="article" data-tags="' + esc((a.tags || []).join("|")) + '">' +
          '<div class="article-meta"><p class="years">' + (a.sample ? '<span class="sample">Sample</span>' : (a.read ? fmtDate(a.read) : ph("Date read"))) + "</p>" +
          '<p class="source">' + (a.source ? esc(a.source) : ph("Source")) + "</p></div>" +
          "<div><h2>" + title + "</h2>" +
          '<p class="note">' + (a.note ? rich(a.note) : ph("Your note: why it's worth reading")) + "</p>" + tags + "</div></li>";
      }).join("");

      var tagCounts = {};
      arts.forEach(function (a) { (a.tags || []).forEach(function (t) { tagCounts[t] = (tagCounts[t] || 0) + 1; }); });
      var tagList = Object.keys(tagCounts).sort();
      if (!tagList.length) {
        afilter.hidden = true;
      } else {
        afilter.innerHTML = ['<button type="button" data-f="" aria-pressed="true">All <span class="n">' + arts.length + "</span></button>"].concat(
          tagList.map(function (t) {
            return '<button type="button" data-f="' + esc(t) + '" aria-pressed="false">' + esc(t) + ' <span class="n">' + tagCounts[t] + "</span></button>";
          })).join("");
        afilter.addEventListener("click", function (e) {
          var btn = e.target.closest("button");
          if (!btn) return;
          var f = btn.getAttribute("data-f");
          afilter.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
          articlesEl.querySelectorAll(".article").forEach(function (el) {
            el.hidden = !!f && el.getAttribute("data-tags").split("|").indexOf(f) < 0;
          });
        });
      }
    }
  }

  /* ---------- Photos page ---------- */

  var photosEl = $(".photos");
  if (photosEl) {
    var photos = (window.PHOTOS || []).filter(function (p) { return DRAFT || (p.src && !p.sample); });
    if (!photos.length) {
      photosEl.outerHTML = '<p class="intro">No photos yet.</p>';
    } else {
      photosEl.innerHTML = photos.map(function (p, i) {
        var cap = [p.caption, p.place, p.date].filter(Boolean).map(esc).join(", ");
        if (!p.src) {
          return '<li class="photo photo-ph" style="aspect-ratio:' + (i % 3 === 1 ? "3/4" : "4/3") + '">' +
            ph("photos/your-photo.jpg") + '<span class="ph-note">Add src, alt, caption, place and date in data.js</span></li>';
        }
        return '<li class="photo"><button type="button" data-i="' + i + '">' +
          '<img src="' + esc(p.src) + '" alt="' + esc(p.alt || p.caption || "") + '" loading="lazy"></button>' +
          (cap ? "<p>" + cap + "</p>" : "") + "</li>";
      }).join("");

      var lb = $(".lightbox");
      var lbImg = lb.querySelector("img");
      var lbCap = lb.querySelector(".lb-cap");
      photosEl.addEventListener("click", function (e) {
        var btn = e.target.closest("button[data-i]");
        if (!btn) return;
        var p = photos[+btn.getAttribute("data-i")];
        lbImg.src = p.src;
        lbImg.alt = p.alt || p.caption || "";
        lbCap.textContent = [p.caption, p.place, p.date].filter(Boolean).join(", ");
        lb.showModal();
      });
      lb.querySelector(".lb-close").addEventListener("click", function () { lb.close(); });
      lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
    }
  }
})();
