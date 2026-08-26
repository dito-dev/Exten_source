const mangayomiSources = [
  {
    "name": "3D Hentai",
    "id": 1003,
    "baseUrl": "https://3d-hentai.co",
    "lang": "en",
    "typeSource": "single",
    "iconUrl": "https://www.google.com/s2/favicons?sz=128&domain=3d-hentai.co",
    "dateFormat": "",
    "dateFormatLocale": "",
    "isNsfw": true,
    "hasCloudflare": false,
    "sourceCodeUrl": "https://raw.githubusercontent.com/dito-dev/Exten_source/main/nsfw/3d_hentai.js",
    "apiUrl": "https://3d-hentai.co/wp-json/wp/v2",
    "version": "1.0.0",
    "isManga": false,
    "itemType": 1,
    "isFullData": false,
    "appMinVerReq": "0.5.0",
    "additionalParams": "",
    "sourceCodeLanguage": 1,
    "notes": "3D Hentai video streaming extension",
    "pkgPath": "nsfw/3d_hentai.js"
  }
];

const THREED_SORTS = [
  { name: "Latest (Date)", value: "date" },
  { name: "Recently Updated", value: "modified" },
  { name: "Title (A-Z)", value: "title" },
  { name: "Relevance", value: "relevance" }
];

const THREED_CATEGORIES = [
  { name: "All Creators / Studios", value: "" },
  { name: "Aanix", value: "1918" },
  { name: "AlenAbyss", value: "2970" },
  { name: "Almighty Patty", value: "3547" },
  { name: "Aphy3D", value: "2273" },
  { name: "Arhoangel", value: "2070" },
  { name: "Axcellsfm", value: "4410" },
  { name: "AxenAnim", value: "633" },
  { name: "Bamh3D", value: "4703" },
  { name: "Baronstrap", value: "2221" },
  { name: "Bewyx", value: "474" },
  { name: "Blackjr", value: "1608" },
  { name: "Bouquetman", value: "1597" },
  { name: "Buckethead ero", value: "2876" },
  { name: "Bulging Senpai", value: "2305" },
  { name: "Cawneil", value: "4947" },
  { name: "Dr-Flay", value: "2444" },
  { name: "EroV", value: "3182" },
  { name: "Futa3D", value: "1919" },
  { name: "GeneralButch", value: "3052" },
  { name: "Hateha", value: "4701" },
  { name: "Japs 8005", value: "3349" },
  { name: "MadMax", value: "2231" },
  { name: "Nyl", value: "3032" },
  { name: "RadRoachHD", value: "3433" },
  { name: "Rigid3D", value: "697" },
  { name: "Theobrobine", value: "2504" },
  { name: "V11", value: "1863" }
];

const THREED_TAGS = [
  { name: "All Tags", value: "" },
  { name: "2D", value: "3416" },
  { name: "3D", value: "214" },
  { name: "Ahegao", value: "247" },
  { name: "Anal", value: "21" },
  { name: "Anal Creampie", value: "434" },
  { name: "Ass Focus", value: "376" },
  { name: "Balls Deep", value: "22" },
  { name: "Big Areola", value: "557" },
  { name: "Big Ass", value: "111" },
  { name: "Big Balls", value: "163" },
  { name: "Big Black Cock", value: "18" },
  { name: "Big Breasts", value: "112" },
  { name: "Big Cleavage", value: "29" },
  { name: "Big Hips", value: "626" },
  { name: "Big Penis", value: "54" },
  { name: "Big Testicles", value: "1385" },
  { name: "Blonde", value: "59" },
  { name: "Blowjob", value: "93" },
  { name: "Bondage", value: "307" },
  { name: "Bouncing Breasts", value: "706" },
  { name: "Brunette", value: "110" },
  { name: "Bukkake", value: "358" },
  { name: "Catgirl", value: "447" },
  { name: "Cheating", value: "518" },
  { name: "Chubby", value: "389" },
  { name: "Clothed", value: "268" },
  { name: "Cosplay", value: "105" },
  { name: "Cowgirl", value: "269" },
  { name: "Creampie", value: "100" },
  { name: "Cum Inside", value: "686" },
  { name: "Cum On Body", value: "1237" },
  { name: "Deepthroat", value: "97" },
  { name: "Doggy Style", value: "17" },
  { name: "Double Penetration", value: "354" },
  { name: "Elf", value: "161" },
  { name: "Exhibitionist", value: "669" },
  { name: "Facial", value: "226" },
  { name: "Femdom", value: "455" },
  { name: "Fingering", value: "548" },
  { name: "Footjob", value: "602" },
  { name: "Futa / Futanari", value: "1919" },
  { name: "Gangbang", value: "6292" },
  { name: "Glasses", value: "339" },
  { name: "Gothic", value: "896" },
  { name: "Group Sex", value: "1387" },
  { name: "Handjob", value: "1784" },
  { name: "Harem", value: "702" },
  { name: "Huge Ass", value: "49" },
  { name: "Huge Breast", value: "48" },
  { name: "Huge Dick", value: "75" },
  { name: "Impregnation", value: "877" },
  { name: "Incest", value: "411" },
  { name: "Lactation", value: "478" },
  { name: "Legwear", value: "119" },
  { name: "Lesbian", value: "399" },
  { name: "Lingerie", value: "380" },
  { name: "Maid", value: "172" },
  { name: "Masturbation", value: "66" },
  { name: "MILF", value: "13" },
  { name: "Mind Break", value: "58" },
  { name: "Monster", value: "360" },
  { name: "NTR", value: "37" },
  { name: "Nurse", value: "444" },
  { name: "Oral", value: "21" },
  { name: "Orgy", value: "94" },
  { name: "Overwatch", value: "3433" },
  { name: "Pantyhose", value: "45" },
  { name: "Paizuri", value: "212" },
  { name: "Piercing", value: "95" },
  { name: "POV", value: "109" },
  { name: "Pregnant", value: "67" },
  { name: "Public", value: "40" },
  { name: "Redhead", value: "508" },
  { name: "Schoolgirl", value: "312" },
  { name: "Sex Toys", value: "26" },
  { name: "Short Hair", value: "83" },
  { name: "Sister", value: "46" },
  { name: "Slut", value: "34" },
  { name: "Squirt", value: "30" },
  { name: "Stockings", value: "45" },
  { name: "Sweat", value: "301" },
  { name: "Swimsuit", value: "85" },
  { name: "Tan", value: "5" },
  { name: "Teacher", value: "52" },
  { name: "Tentacles", value: "61" },
  { name: "Threesome", value: "354" },
  { name: "Titsjob", value: "212" },
  { name: "Uncensored", value: "68" },
  { name: "Vanilla", value: "100" },
  { name: "Vibrator", value: "28" },
  { name: "Virgin", value: "303" },
  { name: "X-Ray", value: "255" },
  { name: "Yuri", value: "107" }
];

class DefaultExtension extends MProvider {
  getHeaders(url) {
    return {
      "Referer": "https://3d-hentai.co/",
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
      let catParam = "";
      let orderbyParam = "date";
      let orderParam = "desc";

      if (filters && Array.isArray(filters)) {
        for (const f of filters) {
          if (f.type === "sort" && f.values && f.values[f.state]) {
            const val = f.values[f.state].value;
            if (val) {
              orderbyParam = val;
              if (val === "title") orderParam = "asc";
            }
          }
          if (f.type === "category" && f.values && f.values[f.state]) {
            const val = f.values[f.state].value;
            if (val) catParam = `&categories=${val}`;
          }
          if (f.type === "tag" && f.values && f.values[f.state]) {
            const val = f.values[f.state].value;
            if (val) tagParam = `&tags=${val}`;
          }
        }
      }

      const q = (query || "").trim();
      let endpoint = `/wp-json/wp/v2/posts?page=${page}&per_page=20&orderby=${orderbyParam}&order=${orderParam}&_embed=1`;
      if (q) {
        endpoint += `&search=${encodeURIComponent(q)}`;
      }
      if (catParam) {
        endpoint += catParam;
      }
      if (tagParam) {
        endpoint += tagParam;
      }

      const posts = await this.requestJson(endpoint);
      if (!Array.isArray(posts)) return { list: [], hasNextPage: false };

      const list = [];
      for (const p of posts) {
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
    const articles = doc.select("article, div.post, div.video-item");

    for (const art of articles) {
      const linkEl = art.selectFirst("h2 a, h3 a, a.video-title, a");
      const name = linkEl ? this.decodeHtml(linkEl.text.trim()) : "";
      const link = linkEl ? linkEl.getHref : "";

      let imageUrl = "";
      const imgEl = art.selectFirst("img");
      if (imgEl) {
        imageUrl = imgEl.getSrc || imgEl.getDataSrc || "";
      }

      if (name && link && !list.some(item => item.link === link)) {
        list.push({ name, link, imageUrl });
      }
    }

    const hasNextPage = doc.selectFirst("a.next.page-numbers, div.nav-previous a, a[rel='next']") != null;
    return { list, hasNextPage };
  }

  getFilterList() {
    return [
      {
        type: "sort",
        name: "Sort Order",
        type_name: "SelectFilter",
        state: 0,
        values: THREED_SORTS.map(s => ({
          name: s.name,
          value: s.value,
          type_name: "SelectOption"
        }))
      },
      {
        type: "category",
        name: "Creator / Studio",
        type_name: "SelectFilter",
        state: 0,
        values: THREED_CATEGORIES.map(c => ({
          name: c.name,
          value: c.value,
          type_name: "SelectOption"
        }))
      },
      {
        type: "tag",
        name: "Tag / Theme",
        type_name: "SelectFilter",
        state: 0,
        values: THREED_TAGS.map(t => ({
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
    const h1El = doc.selectFirst("h1.entry-title, h1.video-title, h1");
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
      const entryContent = doc.selectFirst("div.entry-content, div.video-description");
      if (entryContent) {
        description = this.decodeHtml(entryContent.text.trim());
      }
    }

    // Author / Studio / Creator
    let author = "3D Hentai";
    const authorBracketMatch = name.match(/\[([^\]]+)\]$/);
    if (authorBracketMatch) {
      author = authorBracketMatch[1].trim();
    } else {
      const authorEl = doc.selectFirst("span.author.vcard a, span.byline a, a[rel='category']");
      if (authorEl) {
        author = this.decodeHtml(authorEl.text.trim());
      }
    }

    // Genres / Tags
    const tagElements = doc.select("a[rel='tag'], div.video-tags a");
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

    // Episode list extraction: extract genuine 3dhq1.org/video/3d/ streams
    const episodes = [];
    const videoRegex = /npl\.php\/\?[^"']*video=([^&"'\s<>]+)/gi;
    let match;
    let epIndex = 1;
    const seen = new Set();

    while ((match = videoRegex.exec(html)) !== null) {
      let videoCode = match[1];
      if (!videoCode.endsWith(".mp4")) {
        videoCode = `${videoCode}.mp4`;
      }
      if (seen.has(videoCode)) continue;
      seen.add(videoCode);

      episodes.push({
        name: `Full Video`,
        url: `https://3dhq1.org/video/3d/${videoCode}`,
        dateUpload: String(Date.now())
      });
      epIndex++;
    }

    // Fallback: If no npl.php regex matched, check for direct 3dhq1 /3d/ streams
    if (episodes.length === 0) {
      const direct3dMatches = [...html.matchAll(/https?:\/\/3dhq1\.org\/video\/3d\/([^"'\s<>]+\.mp4)/gi)];
      for (const m of direct3dMatches) {
        const streamUrl = `https://3dhq1.org/video/3d/${m[1]}`;
        if (!seen.has(streamUrl)) {
          seen.add(streamUrl);
          episodes.push({
            name: `Full Video`,
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
        name: "Full Video",
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
    // 1. If direct 3dhq1.org 3d full episode stream
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
      let videoCode = videoParamMatch[1];
      if (!videoCode.endsWith(".mp4")) {
        videoCode = `${videoCode}.mp4`;
      }
      const videoUrl = `https://3dhq1.org/video/3d/${videoCode}`;
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

    // 3. If passed a 3d-hentai post URL directly, extract stream from page
    try {
      const targetUrl = url.startsWith("http") ? url : `${this.source.baseUrl}${url.startsWith("/") ? "" : "/"}${url}`;
      const res = await new Client().get(targetUrl, this.getHeaders(targetUrl));
      const html = res.body;
      const videos = [];
      const videoRegex = /npl\.php\/\?[^"']*video=([^&"'\s<>]+)/gi;
      let m;
      const seen = new Set();

      while ((m = videoRegex.exec(html)) !== null) {
        let vCode = m[1];
        if (!vCode.endsWith(".mp4")) {
          vCode = `${vCode}.mp4`;
        }
        if (seen.has(vCode)) continue;
        seen.add(vCode);

        videos.push({
          url: `https://3dhq1.org/video/3d/${vCode}`,
          originalUrl: url,
          quality: "1080p MP4",
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          }
        });
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
