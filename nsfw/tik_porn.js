const mangayomiSources = [
  {
    "name": "TikPorn",
    "id": 1004,
    "baseUrl": "https://tik-porn.com",
    "lang": "en",
    "typeSource": "single",
    "iconUrl": "https://www.google.com/s2/favicons?sz=128&domain=tik-porn.com",
    "dateFormat": "",
    "dateFormatLocale": "",
    "isNsfw": true,
    "hasCloudflare": false,
    "sourceCodeUrl": "https://raw.githubusercontent.com/dito-dev/Exten_source/main/nsfw/tik_porn.js",
    "apiUrl": "https://tik-porn.com/api/proxy",
    "version": "1.0.1",
    "isManga": false,
    "itemType": 1,
    "isFullData": false,
    "appMinVerReq": "0.5.0",
    "additionalParams": "",
    "sourceCodeLanguage": 1,
    "notes": "TikPorn short vertical adult video streaming extension",
    "pkgPath": "nsfw/tik_porn.js"
  }
];

const TIKPORN_NICHES = [
  { name: "All Categories", value: "" },
  { name: "Just Boobs", value: "just-boobs" },
  { name: "Amateur Girls", value: "amateur-girls" },
  { name: "Thick Booty", value: "thick-booty" },
  { name: "Lips That Grip", value: "lips-that-grip" },
  { name: "Legal Teens", value: "legal-teens" },
  { name: "Real Orgasms", value: "real-orgasms" },
  { name: "Tik Tok", value: "tik-tok" },
  { name: "Real Couples", value: "real-couples" },
  { name: "Rough Sex", value: "rough-sex" },
  { name: "Creampies", value: "creampies" },
  { name: "Girls Finishing The Job", value: "girls-finishing-the-job" },
  { name: "Goth Girls", value: "goth-girls" },
  { name: "Phat Ass White Girls", value: "phat-ass-white-girls" },
  { name: "Latinas", value: "latinas" },
  { name: "Anal Sex", value: "anal-sex" },
  { name: "On All Fours", value: "on-all-fours" },
  { name: "At Work", value: "at-work" },
  { name: "Money Shots", value: "money-shots" },
  { name: "Horny Cougars", value: "horny-cougars" },
  { name: "Adorable Porn", value: "adorable-porn" },
  { name: "Squirters", value: "squirters" },
  { name: "Face Fucking", value: "face-fucking" },
  { name: "Hotwife Lifestyle", value: "hotwife-lifestyle" },
  { name: "Just Pussy", value: "pussy" },
  { name: "Girls With Glasses", value: "girls-with-glasses" },
  { name: "Covered in Cum", value: "covered-in-cum" },
  { name: "Curvy Chicks", value: "curvy-chicks" },
  { name: "She Fucks Him", value: "she-fucks-him" },
  { name: "Throated", value: "throated" },
  { name: "NSFW Cosplay", value: "nsfw-cosplay" },
  { name: "Freeuse Fantasy", value: "freeuse-fantasy" },
  { name: "Hanime", value: "hanime" },
  { name: "Forced Orgasms", value: "forced-orgasms" },
  { name: "Pussy From Behind", value: "pussy-from-behind" },
  { name: "Redheads", value: "redheads" },
  { name: "Fit Girls", value: "fit-girls" },
  { name: "Rule 34", value: "rule-34" },
  { name: "Bigger Than You Thought", value: "bigger-than-you-thought" },
  { name: "Shaved Pussies", value: "shaved-pussies" },
  { name: "Girl on Girl", value: "girl-on-girl" },
  { name: "Femboys", value: "femboys" },
  { name: "Transparent Clothing", value: "transparent-clothing" },
  { name: "Trans Women", value: "trans-women" },
  { name: "Petite Chicks", value: "petite-chicks" },
  { name: "When It Goes In", value: "when-it-goes-in" },
  { name: "Busty Asians", value: "busty-asians" },
  { name: "Upskirt Tease", value: "upskirt-tease" },
  { name: "Sex Toys", value: "dildos" },
  { name: "Pale Girls", value: "pale-girls" },
  { name: "Tight Assholes", value: "tight-assholes" },
  { name: "Korean NSFW", value: "korean-nsfw" },
  { name: "Celebs", value: "celebs" },
  { name: "Hot Girls With Tattoos", value: "hot-girls-with-tattoos" },
  { name: "Facials", value: "facials" },
  { name: "Porn in 60s", value: "porn-in-a-minute" },
  { name: "Girls Playing", value: "group-of-nude-girls" },
  { name: "Sexy Lingerie", value: "sexy-lingerie" },
  { name: "Group Fucking", value: "group-fucking" },
  { name: "Girls In Yoga Pants", value: "girls-in-yoga-pants" },
  { name: "Pussy Grool", value: "pussy-grool" },
  { name: "Cute Butts", value: "cute-little-butts" },
  { name: "Bouncing Boobs", value: "bouncing-boobs" },
  { name: "Homemade", value: "homemade" }
];

const TIKPORN_SORTS = [
  { name: "Top (Most Popular)", value: "top" },
  { name: "Trending", value: "trending" },
  { name: "Recent", value: "recent" }
];

class DefaultExtension extends MProvider {
  constructor() {
    super();
    this.popularNiches = TIKPORN_NICHES.filter(n => n.value).map(n => n.value);

    this.latestNiches = [
      "tik-tok",
      "amateur-girls",
      "nsfw-cosplay",
      "real-couples",
      "goth-girls",
      "hanime",
      "latinas",
      "face-fucking",
      "curvy-chicks",
      "hotwife-lifestyle",
      "redheads",
      "pale-girls",
      "thick-booty",
      "just-boobs",
      "adorable-porn",
      "girls-with-glasses"
    ];
  }

  getHeaders(url = "") {
    if (url && (url.includes("redgifs.com") || url.includes("userpic.redgifs.com") || url.includes("bxcdn.net"))) {
      return {
        "Referer": "https://www.redgifs.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
      };
    }
    return {
      "Referer": "https://tik-porn.com/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
    };
  }

  get supportsLatest() {
    return true;
  }

  async requestApi(path) {
    const url = `https://tik-porn.com/api/proxy?path=${encodeURIComponent(path)}`;
    const res = await new Client().get(url, this.getHeaders(url));
    if (!res || !res.body) return null;
    return JSON.parse(res.body);
  }

  formatTitle(gif) {
    if (!gif) return "Untitled Clip";
    const tagList = Array.isArray(gif.tags) && gif.tags.length > 0 ? gif.tags.slice(0, 3).join(", ") : "";
    const nicheList = Array.isArray(gif.niches) && gif.niches.length > 0 ? gif.niches[0] : "";
    const desc = tagList || nicheList || gif.id || "Short Clip";
    return gif.userName ? `[${gif.userName}] ${desc}` : desc;
  }

  formatCover(gif) {
    if (!gif || !gif.urls) return "";
    return gif.urls.poster || gif.urls.thumbnail || gif.urls.sd || "";
  }

  async getPopular(page) {
    const niche = this.popularNiches[Math.max(0, (page - 1) % this.popularNiches.length)];
    const data = await this.requestApi(`niches/${niche}/gifs?count=30&page=${page}&order=top`);
    const list = [];
    const gifs = Array.isArray(data?.gifs) ? data.gifs : [];

    for (const gif of gifs) {
      if (gif && gif.id) {
        list.push({
          name: this.formatTitle(gif),
          link: `/gifs/${gif.id}`,
          imageUrl: this.formatCover(gif)
        });
      }
    }

    const hasNextPage = gifs.length >= 10;
    return { list, hasNextPage };
  }

  async getLatestUpdates(page) {
    const niche = this.latestNiches[Math.max(0, (page - 1) % this.latestNiches.length)];
    const data = await this.requestApi(`niches/${niche}/gifs?count=30&page=${page}&order=top`);
    const list = [];
    const gifs = Array.isArray(data?.gifs) ? data.gifs : [];

    for (const gif of gifs) {
      if (gif && gif.id) {
        list.push({
          name: this.formatTitle(gif),
          link: `/gifs/${gif.id}`,
          imageUrl: this.formatCover(gif)
        });
      }
    }

    const hasNextPage = gifs.length >= 10;
    return { list, hasNextPage };
  }

  findMatchingNiche(query) {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    const words = q.split(/\s+/);

    for (const niche of TIKPORN_NICHES) {
      if (!niche.value) continue;
      const nicheId = niche.value.toLowerCase();
      const nicheName = niche.name.toLowerCase();
      const cleanId = nicheId.replace(/-/g, " ");

      if (nicheId === q || nicheName === q || cleanId === q) return nicheId;
      if (nicheId.startsWith(q) || cleanId.startsWith(q) || nicheName.startsWith(q)) return nicheId;
      if (words.every(w => cleanId.includes(w) || nicheId.includes(w) || nicheName.includes(w))) return nicheId;
    }

    for (const niche of TIKPORN_NICHES) {
      if (!niche.value) continue;
      const nicheId = niche.value.toLowerCase();
      const nicheName = niche.name.toLowerCase();
      const cleanId = nicheId.replace(/-/g, " ");
      if (words.some(w => cleanId.includes(w) || nicheId.includes(w) || nicheName.includes(w))) return nicheId;
    }

    return null;
  }

  getFilterList() {
    return [
      {
        type: "sort",
        name: "Sort Order",
        type_name: "SelectFilter",
        state: 0,
        values: TIKPORN_SORTS.map(s => ({
          name: s.name,
          value: s.value,
          type_name: "SelectOption"
        }))
      },
      {
        type: "niche",
        name: "Category / Niche",
        type_name: "SelectFilter",
        state: 0,
        values: TIKPORN_NICHES.map(n => ({
          name: n.name,
          value: n.value,
          type_name: "SelectOption"
        }))
      }
    ];
  }

  async search(query, page, filters) {
    let targetNiche = "";
    let sortOrder = "top";

    // Parse filters
    if (filters && Array.isArray(filters)) {
      for (const f of filters) {
        if (f.type === "niche" && f.values && f.values[f.state]) {
          const val = f.values[f.state].value;
          if (val) targetNiche = val;
        }
        if (f.type === "sort" && f.values && f.values[f.state]) {
          const val = f.values[f.state].value;
          if (val) sortOrder = val;
        }
      }
    }

    const q = (query || "").trim();

    // If no filter niche selected, try matching search query
    if (!targetNiche && q) {
      targetNiche = this.findMatchingNiche(q);
      if (!targetNiche) {
        targetNiche = q.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      }
    }

    // Default niche if still empty
    if (!targetNiche) {
      targetNiche = this.popularNiches[Math.max(0, (page - 1) % this.popularNiches.length)];
    }

    let data = null;
    try {
      data = await this.requestApi(`niches/${targetNiche}/gifs?count=30&page=${page}&order=${sortOrder}`);
    } catch (_) {}

    let gifs = Array.isArray(data?.gifs) ? data.gifs : [];

    // Fallback to top popular niche if niche returned empty
    if (gifs.length === 0) {
      try {
        const fallbackNiche = this.popularNiches[0];
        const fallbackData = await this.requestApi(`niches/${fallbackNiche}/gifs?count=30&page=${page}&order=top`);
        if (Array.isArray(fallbackData?.gifs)) {
          gifs = fallbackData.gifs;
        }
      } catch (_) {}
    }

    const list = [];
    for (const gif of gifs) {
      if (gif && gif.id) {
        list.push({
          name: this.formatTitle(gif),
          link: `/gifs/${gif.id}`,
          imageUrl: this.formatCover(gif)
        });
      }
    }

    const hasNextPage = gifs.length >= 10;
    return { list, hasNextPage };
  }

  async getDetail(url) {
    const cleanUrl = url.startsWith("http") ? url : `https://tik-porn.com${url}`;
    const idMatch = cleanUrl.match(/\/gifs\/([a-zA-Z0-9_-]+)/);
    const gifId = idMatch ? idMatch[1] : cleanUrl.split("/").filter(Boolean).pop();

    let gif = null;
    try {
      const data = await this.requestApi(`gifs/${gifId}`);
      gif = data?.gif || data;
    } catch (_) {}

    const name = gif ? this.formatTitle(gif) : `Clip ${gifId}`;
    const author = (gif && gif.userName) ? gif.userName : "TikPorn Creator";
    const duration = (gif && gif.duration) ? Math.round(gif.duration) : 0;
    const views = (gif && gif.views) ? gif.views.toLocaleString() : "N/A";
    const likes = (gif && gif.likes) ? gif.likes.toLocaleString() : "N/A";
    const imageUrl = this.formatCover(gif);

    const description = [
      gif?.description ? gif.description : "",
      `Duration: ${duration}s`,
      `Views: ${views} | Likes: ${likes}`,
      `Creator: ${author}`
    ].filter(Boolean).join("\n");

    const genre = [];
    if (Array.isArray(gif?.tags)) {
      for (const t of gif.tags) {
        if (t && !genre.includes(t)) genre.push(t);
      }
    }
    if (Array.isArray(gif?.niches)) {
      for (const n of gif.niches) {
        if (n && !genre.includes(n)) genre.push(n);
      }
    }

    const episodes = [
      {
        name: duration > 0 ? `Full Clip (${duration}s)` : "Full Video Clip",
        url: `/gifs/${gifId}`,
        dateUpload: gif?.createDate ? String(gif.createDate * 1000) : String(Date.now())
      }
    ];

    return {
      name,
      imageUrl,
      description,
      author,
      genre,
      status: 1,
      episodes
    };
  }

  async getVideoList(url) {
    const cleanUrl = url.startsWith("http") ? url : `https://tik-porn.com${url}`;
    const idMatch = cleanUrl.match(/\/gifs\/([a-zA-Z0-9_-]+)/);
    const gifId = idMatch ? idMatch[1] : cleanUrl.split("/").filter(Boolean).pop();

    let gif = null;
    try {
      const data = await this.requestApi(`gifs/${gifId}`);
      gif = data?.gif || data;
    } catch (_) {}

    const videos = [];
    const proxyBase = "https://media.tik-porn.com/api/video?url=";
    const redgifsHeaders = {
      "Referer": "https://www.redgifs.com/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
    };
    const tikpornHeaders = {
      "Referer": "https://tik-porn.com/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
    };

    if (gif && gif.urls) {
      // 1. Direct Fast Global CDN Streams (Zero-buffering cold start)
      if (gif.urls.hd) {
        videos.push({
          url: gif.urls.hd,
          quality: "HD (Fast CDN 1080p/720p)",
          originalUrl: url,
          headers: redgifsHeaders
        });
      }
      if (gif.urls.sd) {
        videos.push({
          url: gif.urls.sd,
          quality: "SD (Fast CDN Mobile 480p/360p)",
          originalUrl: url,
          headers: redgifsHeaders
        });
      }

      // 2. Proxied Mirrors (Alternative fallback routes)
      if (gif.urls.hd) {
        videos.push({
          url: `${proxyBase}${encodeURIComponent(gif.urls.hd)}`,
          quality: "HD (TikPorn Mirror)",
          originalUrl: url,
          headers: tikpornHeaders
        });
      }
      if (gif.urls.sd) {
        videos.push({
          url: `${proxyBase}${encodeURIComponent(gif.urls.sd)}`,
          quality: "SD (TikPorn Mirror)",
          originalUrl: url,
          headers: tikpornHeaders
        });
      }
      if (gif.urls.silent) {
        videos.push({
          url: gif.urls.silent,
          quality: "Silent HD",
          originalUrl: url,
          headers: redgifsHeaders
        });
      }
    }

    // Fallback if detail did not return URLs
    if (videos.length === 0) {
      videos.push({
        url: `https://media.redgifs.com/${gifId}.mp4`,
        quality: "Default MP4 (Fast CDN)",
        originalUrl: url,
        headers: redgifsHeaders
      });
      videos.push({
        url: `${proxyBase}${encodeURIComponent(`https://media.redgifs.com/${gifId}.mp4`)}`,
        quality: "Default MP4 (Mirror)",
        originalUrl: url,
        headers: tikpornHeaders
      });
    }

    return videos;
  }
}
