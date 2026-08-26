const mangayomiSources = [
  {
    "name": "Ahegao",
    "id": 1002,
    "baseUrl": "https://ahegao.online",
    "lang": "en",
    "typeSource": "single",
    "iconUrl": "https://www.google.com/s2/favicons?sz=128&domain=ahegao.online",
    "dateFormat": "",
    "dateFormatLocale": "",
    "isNsfw": true,
    "hasCloudflare": false,
    "sourceCodeUrl": "https://raw.githubusercontent.com/dito-dev/Exten_source/main/nsfw/ahegao.js",
    "apiUrl": "https://ahegao.online/wp-json/wp/v2",
    "version": "1.0.1",
    "isManga": false,
    "itemType": 1,
    "isFullData": false,
    "appMinVerReq": "0.5.0",
    "additionalParams": "",
    "sourceCodeLanguage": 1,
    "notes": "Ahegao Online adult anime streaming extension",
    "pkgPath": "nsfw/ahegao.js"
  }
];

const AHEGAO_TAGS = [
  { name: "All Tags", value: "" },
  { name: "Ahegao", value: "4" },
  { name: "Anal", value: "12" },
  { name: "Bdsm", value: "70" },
  { name: "Beach", value: "96" },
  { name: "Big dick", value: "86" },
  { name: "Bikini", value: "54" },
  { name: "Blindfold", value: "114" },
  { name: "Blonde", value: "16" },
  { name: "Bondage", value: "8" },
  { name: "Bukkake", value: "23" },
  { name: "Bunny costume", value: "35" },
  { name: "Cheating", value: "38" },
  { name: "Cheating behind door", value: "117" },
  { name: "Chikan", value: "102" },
  { name: "Chubby", value: "15" },
  { name: "Cosplay", value: "33" },
  { name: "Costume", value: "18" },
  { name: "Deepthroat", value: "22" },
  { name: "Demon", value: "65" },
  { name: "Dildo", value: "27" },
  { name: "Ebony", value: "60" },
  { name: "Elbow gloves", value: "91" },
  { name: "Electrocution", value: "57" },
  { name: "Elf", value: "72" },
  { name: "Enema", value: "92" },
  { name: "Exhibitionist", value: "41" },
  { name: "Fat", value: "14" },
  { name: "Femdom", value: "97" },
  { name: "Fisting", value: "69" },
  { name: "Flatchest", value: "51" },
  { name: "Footjob", value: "98" },
  { name: "Futa / Futanari", value: "63" },
  { name: "Gangbang", value: "25" },
  { name: "Gape", value: "24" },
  { name: "Glasses", value: "43" },
  { name: "Glory hole", value: "77" },
  { name: "Gyaru", value: "6" },
  { name: "Handjob", value: "106" },
  { name: "Harem", value: "101" },
  { name: "Huge ass", value: "49" },
  { name: "Huge breast", value: "48" },
  { name: "Huge dick", value: "75" },
  { name: "Incest", value: "81" },
  { name: "Lady suit", value: "71" },
  { name: "Latex", value: "9" },
  { name: "Legwear", value: "19" },
  { name: "Lesbian", value: "44" },
  { name: "Maid", value: "17" },
  { name: "Masturbation", value: "66" },
  { name: "MILF", value: "13" },
  { name: "Mind break", value: "58" },
  { name: "Mind control", value: "103" },
  { name: "Mother", value: "47" },
  { name: "Mother and Daughter", value: "115" },
  { name: "Nerd", value: "42" },
  { name: "NTR", value: "37" },
  { name: "Oral", value: "21" },
  { name: "Orc", value: "76" },
  { name: "Orgy", value: "94" },
  { name: "Pantyhose", value: "45" },
  { name: "Petplay", value: "93" },
  { name: "Piercing", value: "95" },
  { name: "Piss", value: "74" },
  { name: "Pregnant", value: "67" },
  { name: "Princess", value: "36" },
  { name: "Prolapse", value: "29" },
  { name: "Prostitution", value: "39" },
  { name: "Public", value: "40" },
  { name: "Public toilet", value: "10" },
  { name: "Public vibrator", value: "113" },
  { name: "Sex toys", value: "26" },
  { name: "Short hair", value: "83" },
  { name: "Sister", value: "46" },
  { name: "Slave", value: "7" },
  { name: "Slut", value: "34" },
  { name: "Slut dress", value: "78" },
  { name: "Squirt", value: "30" },
  { name: "Stomach bulge", value: "73" },
  { name: "Swimsuit", value: "85" },
  { name: "Tan", value: "5" },
  { name: "Tan lines", value: "88" },
  { name: "Teacher", value: "52" },
  { name: "Tentacles", value: "61" },
  { name: "Tomboy", value: "82" },
  { name: "Trap", value: "104" },
  { name: "Uncensored", value: "68" },
  { name: "Vanilla", value: "100" },
  { name: "Vibrator", value: "28" },
  { name: "Warrior", value: "64" },
  { name: "Wife", value: "87" },
  { name: "Yuri", value: "107" }
];

const AHEGAO_SORTS = [
  { name: "Latest (Date)", value: "date" },
  { name: "Recently Updated", value: "modified" },
  { name: "Title (A-Z)", value: "title" },
  { name: "Relevance", value: "relevance" }
];

class DefaultExtension extends MProvider {
  getHeaders(url) {
    return {
      "Referer": "https://ahegao.online/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
    };
  }

  get supportsLatest() {
    return true;
  }

  decodeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&#8211;/g, "–")
      .replace(/&#8212;/g, "—")
      .replace(/&#8216;/g, "'")
      .replace(/&#8217;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#038;/g, "&")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/<[^>]+>/g, "")
      .trim();
  }

  async requestDoc(slug) {
    const url = slug.startsWith("http") ? slug : `${this.source.baseUrl}${slug.startsWith("/") ? "" : "/"}${slug}`;
    const res = await new Client().get(url, this.getHeaders(url));
    return new Document(res.body);
  }

  async requestJson(slug) {
    const url = slug.startsWith("http") ? slug : `${this.source.baseUrl}${slug.startsWith("/") ? "" : "/"}${slug}`;
    const res = await new Client().get(url, this.getHeaders(url));
    return JSON.parse(res.body);
  }

  async getPopular(page) {
    try {
      const posts = await this.requestJson(`/wp-json/wp/v2/posts?page=${page}&per_page=20&orderby=modified&order=desc&_embed=1`);
      if (!Array.isArray(posts)) return { list: [], hasNextPage: false };

      const list = [];
      for (const p of posts) {
        if (p.content && p.content.rendered && !p.content.rendered.includes("npl.php")) {
          continue;
        }

        const name = this.decodeHtml(p.title ? p.title.rendered : "");
        const link = p.link || "";
        let imageUrl = p._embedded && p._embedded["wp:featuredmedia"] && p._embedded["wp:featuredmedia"][0] ?
          (p._embedded["wp:featuredmedia"][0].source_url || "") : "";

        if (!imageUrl && p.content && p.content.rendered) {
          const posterMatch = p.content.rendered.match(/poster=([^"'\s&]+)/i);
          if (posterMatch) imageUrl = posterMatch[1];
        }

        if (name && link) {
          list.push({ name, link, imageUrl });
        }
      }

      const hasNextPage = posts.length >= 20;
      return { list, hasNextPage };
    } catch (e) {
      return this.scrapeCatalogPage(`/page/${page}/`);
    }
  }

  async getLatestUpdates(page) {
    try {
      const posts = await this.requestJson(`/wp-json/wp/v2/posts?page=${page}&per_page=20&orderby=date&order=desc&_embed=1`);
      if (!Array.isArray(posts)) return { list: [], hasNextPage: false };

      const list = [];
      for (const p of posts) {
        if (p.content && p.content.rendered && !p.content.rendered.includes("npl.php")) {
          continue;
        }

        const name = this.decodeHtml(p.title ? p.title.rendered : "");
        const link = p.link || "";
        let imageUrl = p._embedded && p._embedded["wp:featuredmedia"] && p._embedded["wp:featuredmedia"][0] ?
          (p._embedded["wp:featuredmedia"][0].source_url || "") : "";

        if (!imageUrl && p.content && p.content.rendered) {
          const posterMatch = p.content.rendered.match(/poster=([^"'\s&]+)/i);
          if (posterMatch) imageUrl = posterMatch[1];
        }

        if (name && link) {
          list.push({ name, link, imageUrl });
        }
      }

      const hasNextPage = posts.length >= 20;
      return { list, hasNextPage };
    } catch (e) {
      return this.scrapeCatalogPage(`/page/${page}/`);
    }
  }

  async search(query, page, filters) {
    try {
      let tagParam = "";
      let orderbyParam = "date";
      let orderParam = "desc";

      if (filters && Array.isArray(filters)) {
        for (const f of filters) {
          if (f.type === "tag" && f.values && f.values[f.state]) {
            const val = f.values[f.state].value;
            if (val) tagParam = `&tags=${val}`;
          }
          if (f.type === "sort" && f.values && f.values[f.state]) {
            const val = f.values[f.state].value;
            if (val) {
              orderbyParam = val;
              if (val === "title") orderParam = "asc";
            }
          }
        }
      }

      const q = (query || "").trim();
      let endpoint = `/wp-json/wp/v2/posts?page=${page}&per_page=20&orderby=${orderbyParam}&order=${orderParam}&_embed=1`;
      if (q) {
        endpoint += `&search=${encodeURIComponent(q)}`;
      }
      if (tagParam) {
        endpoint += tagParam;
      }

      const posts = await this.requestJson(endpoint);
      if (!Array.isArray(posts)) return { list: [], hasNextPage: false };

      const list = [];
      for (const p of posts) {
        if (p.content && p.content.rendered && !p.content.rendered.includes("npl.php")) {
          continue;
        }

        const name = this.decodeHtml(p.title ? p.title.rendered : "");
        const link = p.link || "";
        let imageUrl = p._embedded && p._embedded["wp:featuredmedia"] && p._embedded["wp:featuredmedia"][0] ?
          (p._embedded["wp:featuredmedia"][0].source_url || "") : "";

        if (!imageUrl && p.content && p.content.rendered) {
          const posterMatch = p.content.rendered.match(/poster=([^"'\s&]+)/i);
          if (posterMatch) imageUrl = posterMatch[1];
        }

        if (name && link) {
          list.push({ name, link, imageUrl });
        }
      }

      const hasNextPage = posts.length >= 20;
      return { list, hasNextPage };
    } catch (e) {
      return this.scrapeCatalogPage(query ? `/page/${page}/?s=${encodeURIComponent(query)}` : `/page/${page}/`);
    }
  }

  async scrapeCatalogPage(path) {
    const doc = await this.requestDoc(path);
    const list = [];
    const articles = doc.select("article");

    for (const art of articles) {
      const linkEl = art.selectFirst("h2.entry-title a") || art.selectFirst("a");
      const name = linkEl ? this.decodeHtml(linkEl.text.trim()) : "";
      const link = linkEl ? linkEl.getHref : "";

      let imageUrl = "";
      const imgEl = art.selectFirst("img");
      if (imgEl) {
        imageUrl = imgEl.getSrc || imgEl.getDataSrc || "";
      }
      if (!imageUrl) {
        const vidSource = art.selectFirst("video source");
        if (vidSource && vidSource.getSrc) {
          imageUrl = vidSource.getSrc.replace(/\.mp4$/i, ".gif");
        }
      }

      if (name && link) {
        list.push({ name, link, imageUrl });
      }
    }

    const hasNextPage = doc.selectFirst("a.next.page-numbers, div.nav-previous a") != null;
    return { list, hasNextPage };
  }

  getFilterList() {
    return [
      {
        type: "sort",
        name: "Sort Order",
        type_name: "SelectFilter",
        state: 0,
        values: AHEGAO_SORTS.map(s => ({
          name: s.name,
          value: s.value,
          type_name: "SelectOption"
        }))
      },
      {
        type: "tag",
        name: "Tag / Category",
        type_name: "SelectFilter",
        state: 0,
        values: AHEGAO_TAGS.map(t => ({
          name: t.name,
          value: t.value,
          type_name: "SelectOption"
        }))
      }
    ];
  }

  async getDetail(url) {
    const targetUrl = url.startsWith("http") ? url : `${this.source.baseUrl}${url.startsWith("/") ? "" : "/"}${url}`;
    const res = await new Client().get(targetUrl, this.getHeaders(targetUrl));
    const html = res.body;
    const doc = new Document(html);

    // Title
    const h1El = doc.selectFirst("h1.entry-title");
    let name = h1El ? this.decodeHtml(h1El.text.trim()) : "";
    if (!name) {
      const ogTitle = html.match(/<meta property="og:title" content="([^"]+)"/i);
      name = ogTitle ? this.decodeHtml(ogTitle[1]) : "Untitled";
    }

    // Description
    let description = "";
    const ogDesc = html.match(/<meta property="og:description" content="([^"]+)"/i) ||
                    html.match(/<meta name="description" content="([^"]+)"/i);
    if (ogDesc) {
      description = this.decodeHtml(ogDesc[1]);
    } else {
      const entryContent = doc.selectFirst("div.entry-content");
      if (entryContent) {
        description = this.decodeHtml(entryContent.text.trim());
      }
    }

    // Author / Studio
    const authorEl = doc.selectFirst("span.author.vcard a, span.byline a");
    const author = authorEl ? this.decodeHtml(authorEl.text.trim()) : "Ahegao Online";

    // Genres / Tags
    const tagElements = doc.select("a[rel='tag']");
    const genre = [];
    for (const t of tagElements) {
      const tName = this.decodeHtml(t.text.trim());
      if (tName && !genre.includes(tName)) {
        genre.push(tName);
      }
    }

    // Cover Image
    let imageUrl = "";
    const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/i);
    if (ogImage) {
      imageUrl = ogImage[1];
    } else {
      const imgEl = doc.selectFirst("div.entry-content img, article img");
      if (imgEl) imageUrl = imgEl.getSrc || imgEl.getDataSrc || "";
    }

    // Episode list extraction: ONLY extract genuine 3dhq1.org video streams
    const episodes = [];
    const videoRegex = /npl\.php\/\?video=([^&"'\s<>]+)/gi;
    let match;
    let epIndex = 1;
    const seen = new Set();

    while ((match = videoRegex.exec(html)) !== null) {
      const videoCode = match[1];
      if (seen.has(videoCode)) continue;
      seen.add(videoCode);

      episodes.push({
        name: `Episode ${epIndex} (${videoCode})`,
        url: `https://3dhq1.org/video/${videoCode}.mp4`,
        dateUpload: String(Date.now())
      });
      epIndex++;
    }

    // Fallback: If no npl.php regex matched, check for direct 3dhq1 streams
    if (episodes.length === 0) {
      const direct3dMatches = [...html.matchAll(/https?:\/\/3dhq1\.org\/video\/([^"'\s<>]+\.mp4)/gi)];
      for (const m of direct3dMatches) {
        const streamUrl = `https://3dhq1.org/video/${m[1]}`;
        if (!seen.has(streamUrl)) {
          seen.add(streamUrl);
          episodes.push({
            name: `Episode ${epIndex}`,
            url: streamUrl,
            dateUpload: String(Date.now())
          });
          epIndex++;
        }
      }
    }

    // Ultimate fallback
    if (episodes.length === 0) {
      episodes.push({
        name: "Full Episode",
        url: targetUrl,
        dateUpload: String(Date.now())
      });
    }

    return {
      name,
      imageUrl,
      description,
      author,
      genre,
      status: 1, // Completed
      episodes
    };
  }

  async getVideoList(url) {
    // 1. If direct 3dhq1.org full episode stream
    if (url.includes("3dhq1.org/video/")) {
      return [
        {
          url: url,
          originalUrl: url,
          quality: "1080p MP4",
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          }
        }
      ];
    }

    // 2. If url has ?video= parameter
    const videoParamMatch = url.match(/[?&]video=([^&"'\s<>]+)/i);
    if (videoParamMatch) {
      const videoCode = videoParamMatch[1];
      const videoUrl = `https://3dhq1.org/video/${videoCode}.mp4`;
      return [
        {
          url: videoUrl,
          originalUrl: url,
          quality: "1080p MP4",
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          }
        }
      ];
    }

    // 3. If passed an ahegao page URL directly, extract all 3dhq1 streams from page
    try {
      const targetUrl = url.startsWith("http") ? url : `${this.source.baseUrl}${url.startsWith("/") ? "" : "/"}${url}`;
      const res = await new Client().get(targetUrl, this.getHeaders(targetUrl));
      const html = res.body;
      const videos = [];
      const videoRegex = /npl\.php\/\?video=([^&"'\s<>]+)/gi;
      let m;
      let epIndex = 1;
      const seen = new Set();

      while ((m = videoRegex.exec(html)) !== null) {
        const vCode = m[1];
        if (seen.has(vCode)) continue;
        seen.add(vCode);

        videos.push({
          url: `https://3dhq1.org/video/${vCode}.mp4`,
          originalUrl: url,
          quality: `1080p MP4 (Episode ${epIndex})`,
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          }
        });
        epIndex++;
      }

      if (videos.length > 0) return videos;
    } catch (err) {
      // Continue to fallback
    }

    return [
      {
        url: url,
        originalUrl: url,
        quality: "1080p MP4",
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
        }
      }
    ];
  }
}
