const mangayomiSources = [
  {
    "name": "HentaiTik",
    "id": 1005,
    "baseUrl": "https://hentaitik.com",
    "lang": "en",
    "typeSource": "single",
    "iconUrl": "https://hentaitik.com/wp-content/uploads/2025/07/cropped-favicon_1_H-2-192x192.png",
    "dateFormat": "",
    "dateFormatLocale": "",
    "isNsfw": true,
    "hasCloudflare": false,
    "sourceCodeUrl": "https://raw.githubusercontent.com/dito-dev/Exten_source/main/nsfw/hentaitik.js",
    "apiUrl": "https://hentaitik.com/wp-json/wp/v2",
    "version": "1.0.2",
    "isManga": false,
    "itemType": 1,
    "isFullData": false,
    "appMinVerReq": "0.5.0",
    "additionalParams": "",
    "sourceCodeLanguage": 1,
    "notes": "HentaiTik short vertical anime & hentai video clips",
    "pkgPath": "nsfw/hentaitik.js"
  }
];

const HENTAITIK_TAGS = [
  { name: "All Tags", value: "" },
  { name: "3D", value: "78" },
  { name: "3Some", value: "84" },
  { name: "Anal", value: "55" },
  { name: "Art", value: "85" },
  { name: "Artist", value: "76" },
  { name: "Ass", value: "38" },
  { name: "Backfuck", value: "7" },
  { name: "Big Ass", value: "14" },
  { name: "Big Boobs", value: "6" },
  { name: "Big Oppai", value: "28" },
  { name: "Big Tits", value: "13" },
  { name: "Blowjob", value: "8" },
  { name: "Blue Archive", value: "62" },
  { name: "Boobs", value: "77" },
  { name: "Bunny", value: "36" },
  { name: "Bunny Girl", value: "31" },
  { name: "Cartoon", value: "72" },
  { name: "Catgirl", value: "20" },
  { name: "Cheating", value: "92" },
  { name: "Cosplay", value: "29" },
  { name: "Creampie", value: "63" },
  { name: "Cuckolding", value: "91" },
  { name: "Cum", value: "12" },
  { name: "Cum in Pussy", value: "17" },
  { name: "Derpixon", value: "86" },
  { name: "Dick", value: "71" },
  { name: "Fate Stay Night", value: "49" },
  { name: "Feet", value: "40" },
  { name: "Fellation", value: "69" },
  { name: "Femboy", value: "22" },
  { name: "Final Fantasy", value: "9" },
  { name: "Futa", value: "67" },
  { name: "Futanari", value: "52" },
  { name: "Game", value: "73" },
  { name: "Gay", value: "21" },
  { name: "Genshin", value: "58" },
  { name: "Girl", value: "81" },
  { name: "Hentai", value: "3" },
  { name: "Housewife", value: "95" },
  { name: "Kuroneko", value: "45" },
  { name: "Lesbian", value: "53" },
  { name: "Lingerie", value: "56" },
  { name: "Loli", value: "27" },
  { name: "Mature", value: "93" },
  { name: "MHA", value: "96" },
  { name: "Milf", value: "30" },
  { name: "Mom", value: "94" },
  { name: "Monster Girl", value: "80" },
  { name: "Mortal Kombat", value: "79" },
  { name: "Netorare", value: "90" },
  { name: "Night Club", value: "18" },
  { name: "NTR", value: "89" },
  { name: "Oppai", value: "26" },
  { name: "Parody", value: "87" },
  { name: "Pokemon", value: "66" },
  { name: "Public", value: "16" },
  { name: "Pussy", value: "43" },
  { name: "Rule34", value: "99" },
  { name: "Saber", value: "50" }
];

const HENTAITIK_SORTS = [
  { name: "Latest (Date Descending)", value: "date_desc" },
  { name: "Oldest (Date Ascending)", value: "date_asc" },
  { name: "Alphabetical (Title A-Z)", value: "title_asc" },
  { name: "Relevance", value: "relevance" }
];

class DefaultExtension extends MProvider {
  getHeaders(url = "") {
    return {
      "Referer": "https://hentaitik.com/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
    };
  }

  get supportsLatest() {
    return true;
  }

  decodeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&rsquo;/g, "'")
      .replace(/&lsquo;/g, "'")
      .replace(/&ldquo;/g, '"')
      .replace(/&rdquo;/g, '"')
      .replace(/&ndash;/g, "-")
      .replace(/&mdash;/g, "--")
      .replace(/&hellip;/g, "...")
      .replace(/&nbsp;/g, " ")
      .replace(/&#038;/g, "&")
      .replace(/&#8211;/g, "-")
      .replace(/&#8212;/g, "--")
      .replace(/&#8216;/g, "'")
      .replace(/&#8217;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
      .trim();
  }

  formatDuration(isoDuration) {
    if (!isoDuration) return "";
    const m = isoDuration.match(/P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/i);
    if (!m) return isoDuration;
    const hours = parseInt(m[2] || "0", 10);
    const mins = parseInt(m[3] || "0", 10);
    const secs = parseInt(m[4] || "0", 10);
    if (hours > 0) {
      return `${hours}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  extractCover(post) {
    if (!post) return "";
    const media = post._embedded?.["wp:featuredmedia"]?.[0];
    if (!media) return "";
    const sizes = media.media_details?.sizes;
    return (
      sizes?.["ms-large"]?.source_url ||
      sizes?.full?.source_url ||
      sizes?.["ms-thumb"]?.source_url ||
      media.source_url ||
      ""
    );
  }

  deriveMp4Url(thumbUrl) {
    if (!thumbUrl) return "";
    try {
      const rawFile = thumbUrl.split("/").pop().split("?")[0];
      const cleanFile = decodeURIComponent(rawFile).replace(/-\d+x\d+(\.[a-zA-Z0-9]+)$/, "$1");
      const baseName = cleanFile.replace(/\.[a-zA-Z0-9]+$/, "");
      if (!baseName || baseName.length < 2) return "";
      return `https://vip.hentai-vostfr.online/HentaiTikTok/${encodeURIComponent(baseName)}.mp4`;
    } catch (_) {
      return "";
    }
  }

  async requestDoc(slug) {
    const url = slug.startsWith("http") ? slug : `${this.source.baseUrl}${slug}`;
    const res = await new Client().get(url, this.getHeaders(url));
    return new Document(res.body);
  }

  async requestJson(slug) {
    const url = slug.startsWith("http") ? slug : `${this.source.baseUrl}${slug}`;
    const res = await new Client().get(url, this.getHeaders(url));
    if (!res || !res.body) return null;
    return JSON.parse(res.body);
  }

  extractItemsFromDoc(doc) {
    const list = [];
    // 1. Swiper video slides
    const slides = doc.select(".swiper-slide.swiper-video-slide, .swiper-slide[data-id]");
    for (const slide of slides) {
      const h2Title = slide.selectFirst("h2, h1")?.text.trim();
      const copyLink = slide.selectFirst(".copy-link")?.getAttribute("data-clipboard-text");
      const linkEl = slide.selectFirst("a[href*='/hentai/'], a");
      const link = copyLink || linkEl?.getHref || "";
      const imgThumb = slide.selectFirst("img")?.getSrc || slide.selectFirst("img")?.getDataSrc;
      const imageUrl = imgThumb || "";
      const name = this.decodeHtml(h2Title || "");

      if (name && link && !list.some(item => item.link === link)) {
        list.push({ name, link, imageUrl });
      }
    }

    // 2. Tab content grid
    if (list.length === 0) {
      const gridItems = doc.select("ul.tab-content-grid li, .tab-content-grid li, .media-item");
      for (const item of gridItems) {
        const linkEl = item.selectFirst("a");
        const imgEl = item.selectFirst("img");
        const link = linkEl ? linkEl.getHref : "";
        const imageUrl = imgEl ? (imgEl.getSrc || imgEl.getDataSrc || imgEl.getAttribute("data-src") || "") : "";
        
        let name = "";
        if (link) {
          const slug = link.replace(/\/$/, "").split("/").pop();
          name = slug ? slug.replace(/[-_]+/g, " ").replace(/\b\w/g, c => c.toUpperCase()) : "Video Clip";
        }
        if (link && !list.some(it => it.link === link)) {
          list.push({ name, link, imageUrl });
        }
      }
    }

    return list;
  }

  async getPopular(page) {
    try {
      const posts = await this.requestJson(
        `/wp-json/wp/v2/posts?_embed=1&per_page=20&page=${page}&categories=5`
      );
      if (Array.isArray(posts) && posts.length > 0) {
        const list = [];
        for (const post of posts) {
          const name = this.decodeHtml(post.title?.rendered || `Clip ${post.id}`);
          const link = post.link || `/hentai/${post.slug}/`;
          const imageUrl = this.extractCover(post);
          if (name && link) {
            list.push({ name, link, imageUrl });
          }
        }
        const hasNextPage = posts.length >= 20;
        return { list, hasNextPage };
      }
    } catch (_) {}

    // Fallback to HTML grid scraping
    const doc = await this.requestDoc(`/category/hentai/page/${page}/?view=grid`);
    const list = this.extractItemsFromDoc(doc);
    const hasNextPage = list.length >= 10;
    return { list, hasNextPage };
  }

  async getLatestUpdates(page) {
    try {
      const posts = await this.requestJson(
        `/wp-json/wp/v2/posts?_embed=1&per_page=20&page=${page}&categories=5&orderby=date&order=desc`
      );
      if (Array.isArray(posts) && posts.length > 0) {
        const list = [];
        for (const post of posts) {
          const name = this.decodeHtml(post.title?.rendered || `Clip ${post.id}`);
          const link = post.link || `/hentai/${post.slug}/`;
          const imageUrl = this.extractCover(post);
          if (name && link) {
            list.push({ name, link, imageUrl });
          }
        }
        const hasNextPage = posts.length >= 20;
        return { list, hasNextPage };
      }
    } catch (_) {}

    // Fallback to HTML scraping on /vids/
    const doc = await this.requestDoc(`/vids/page/${page}/`);
    const list = this.extractItemsFromDoc(doc);
    const hasNextPage = list.length >= 5;
    return { list, hasNextPage };
  }

  getFilterList() {
    return [
      {
        type: "sort",
        name: "Sort Order",
        type_name: "SelectFilter",
        state: 0,
        values: HENTAITIK_SORTS.map(s => ({
          name: s.name,
          value: s.value,
          type_name: "SelectOption"
        }))
      },
      {
        type: "tag",
        name: "Tag / Topic",
        type_name: "SelectFilter",
        state: 0,
        values: HENTAITIK_TAGS.map(t => ({
          name: t.name,
          value: t.value,
          type_name: "SelectOption"
        }))
      }
    ];
  }

  async search(query, page, filters) {
    let tagId = "";
    let sortOrder = "date_desc";

    if (filters && Array.isArray(filters)) {
      for (const f of filters) {
        if (f.type === "tag" && f.values && f.values[f.state]) {
          const val = f.values[f.state].value;
          if (val) tagId = val;
        }
        if (f.type === "sort" && f.values && f.values[f.state]) {
          const val = f.values[f.state].value;
          if (val) sortOrder = val;
        }
      }
    }

    const q = (query || "").trim();

    // 1. Try WP REST API Search
    try {
      let apiEndpoint = `/wp-json/wp/v2/posts?_embed=1&per_page=20&page=${page}`;
      if (q) {
        apiEndpoint += `&search=${encodeURIComponent(q)}`;
      } else {
        apiEndpoint += `&categories=5`;
      }
      if (tagId) {
        apiEndpoint += `&tags=${tagId}`;
      }

      if (sortOrder === "date_asc") {
        apiEndpoint += `&orderby=date&order=asc`;
      } else if (sortOrder === "title_asc") {
        apiEndpoint += `&orderby=title&order=asc`;
      } else if (sortOrder === "relevance" && q) {
        apiEndpoint += `&orderby=relevance`;
      } else {
        apiEndpoint += `&orderby=date&order=desc`;
      }

      const posts = await this.requestJson(apiEndpoint);
      if (Array.isArray(posts) && posts.length > 0) {
        const list = [];
        for (const post of posts) {
          const name = this.decodeHtml(post.title?.rendered || `Clip ${post.id}`);
          const link = post.link || `/hentai/${post.slug}/`;
          const imageUrl = this.extractCover(post);
          if (name && link) {
            list.push({ name, link, imageUrl });
          }
        }
        const hasNextPage = posts.length >= 20;
        return { list, hasNextPage };
      }
    } catch (_) {}

    // 2. HTML Search fallback
    if (q) {
      try {
        const searchUrl = `/page/${page}/?s=${encodeURIComponent(q)}&view=grid`;
        const doc = await this.requestDoc(searchUrl);
        const list = this.extractItemsFromDoc(doc);
        if (list.length > 0) {
          const hasNextPage = list.length >= 10;
          return { list, hasNextPage };
        }
      } catch (_) {}
    }

    // 3. Fallback to popular videos if search returned 0 items
    return this.getPopular(page);
  }

  async getDetail(url) {
    const cleanUrl = url.startsWith("http") ? url : `https://hentaitik.com${url}`;
    const res = await new Client().get(cleanUrl, this.getHeaders(cleanUrl));
    const html = res.body || "";
    const doc = new Document(html);

    // Name
    let name = "";
    const metaNameMatch = html.match(/<meta\s+itemprop=["']name["']\s+content=["']([^"']+)["']/i) ||
                          html.match(/<meta\s+content=["']([^"']+)["']\s+itemprop=["']name["']/i) ||
                          html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i);
    if (metaNameMatch) {
      name = this.decodeHtml(metaNameMatch[1]);
    } else {
      const h1Title = doc.selectFirst("h1, h2")?.text.trim();
      name = this.decodeHtml(h1Title || "Hentai Clip");
    }

    // Cover Image
    let imageUrl = "";
    const metaThumbMatch = html.match(/<meta\s+itemprop=["']thumbnailUrl["']\s+content=["']([^"']+)["']/i) ||
                           html.match(/<meta\s+content=["']([^"']+)["']\s+itemprop=["']thumbnailUrl["']/i) ||
                           html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
    if (metaThumbMatch) {
      imageUrl = metaThumbMatch[1];
    } else {
      const imgEl = doc.selectFirst(".swiper-slide img, .single-content img, img");
      const candidate = imgEl ? (imgEl.getSrc || imgEl.getDataSrc || "") : "";
      if (candidate && !candidate.includes("favicon") && !candidate.includes("avatar")) {
        imageUrl = candidate;
      }
    }

    // Author
    let author = "";
    const authorMatch = html.match(/<span\s+itemprop=["']author["'][^>]*>[\s\S]*?<meta\s+itemprop=["']name["']\s+content=["']([^"']+)["']/i);
    if (authorMatch) {
      author = this.decodeHtml(authorMatch[1]);
    } else {
      const authorEl = doc.selectFirst(".author, .creator-name");
      author = authorEl ? this.decodeHtml(authorEl.text.trim()) : "HentaiTik Creator";
    }

    // Duration
    let duration = "";
    const durationMatch = html.match(/<meta\s+itemprop=["']duration["']\s+content=["']([^"']+)["']/i);
    if (durationMatch) {
      duration = this.formatDuration(durationMatch[1]);
    } else {
      const durEl = doc.selectFirst(".post-duration");
      duration = durEl ? durEl.text.trim() : "";
    }

    // Description
    let description = "";
    const descMatch = html.match(/<meta\s+itemprop=["']description["']\s+content=["']([^"']+)["']/i) ||
                      html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
    if (descMatch) {
      description = this.decodeHtml(descMatch[1]);
    }
    const fullDesc = [
      description && description !== name ? description : "",
      duration ? `Duration: ${duration}` : "",
      author ? `Creator: ${author}` : ""
    ].filter(Boolean).join("\n");

    // Genres / Tags
    const genre = [];
    const singleSlide = doc.selectFirst(".swiper-slide.swiper-video-slide");
    const tagElements = singleSlide ? singleSlide.select(".tags-list a") : doc.select(".tags-list a");
    for (const tagEl of tagElements) {
      const rawText = tagEl.text.replace(/\s*\d+\s*$/, "").trim();
      const tagText = this.decodeHtml(rawText);
      if (tagText && tagText.length > 1 && !genre.includes(tagText)) {
        genre.push(tagText);
      }
    }

    // Upload date
    let uploadDate = String(Date.now());
    const dateMatch = html.match(/<meta\s+itemprop=["']uploadDate["']\s+content=["']([^"']+)["']/i);
    if (dateMatch) {
      const parsedTime = new Date(dateMatch[1]).getTime();
      if (!isNaN(parsedTime)) {
        uploadDate = String(parsedTime);
      }
    }

    // Direct MP4 stream URL extraction
    let streamUrl = "";
    const contentUrlMatch = html.match(/<meta\s+itemprop=["']contentUrl["']\s+content=["']([^"']+)["']/i) ||
                            html.match(/<meta\s+content=["']([^"']+)["']\s+itemprop=["']contentUrl["']/i);
    if (contentUrlMatch && contentUrlMatch[1].startsWith("http")) {
      streamUrl = contentUrlMatch[1];
    } else {
      const vipMatch = html.match(/https?:\/\/vip\.hentai-vostfr\.online\/[^\s"'<>\\]+\.mp4/i);
      if (vipMatch) {
        streamUrl = vipMatch[0];
      }
    }

    // If stream or image not resolved, use postId WP REST fallback
    const postIdMatch = html.match(/data-postid=["'](\d+)["']/i) ||
                        html.match(/data-id=["'](\d+)["']/i) ||
                        html.match(/postid-(\d+)/i) ||
                        html.match(/wp\/v2\/posts\/(\d+)/i) ||
                        html.match(/"post_id":(\d+)/i);
    if ((!streamUrl || !imageUrl) && postIdMatch) {
      const postId = postIdMatch[1];
      try {
        const postJson = await this.requestJson(`/wp-json/wp/v2/posts/${postId}?_embed=1`);
        if (postJson) {
          if (!imageUrl) {
            imageUrl = this.extractCover(postJson);
          }
          if (!streamUrl) {
            const media = postJson._embedded?.["wp:featuredmedia"]?.[0];
            const thumbUrl = media?.source_url;
            streamUrl = this.deriveMp4Url(thumbUrl);
          }
        }
      } catch (_) {}
    }

    // If still not found, derive directly from thumbnail image URL
    if (!streamUrl && imageUrl && !imageUrl.includes("favicon")) {
      streamUrl = this.deriveMp4Url(imageUrl);
    }

    const episodes = [
      {
        name: duration ? `Full Video (${duration})` : "Full Video Clip",
        url: streamUrl || cleanUrl,
        dateUpload: uploadDate
      }
    ];

    return {
      name,
      imageUrl,
      description: fullDesc,
      author,
      genre,
      status: 1,
      episodes
    };
  }

  async getVideoList(url) {
    const cleanUrl = url.startsWith("http") ? url : `https://hentaitik.com${url}`;
    const videos = [];
    const headers = {
      "Referer": "https://hentaitik.com/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
    };

    // 1. If passed direct mp4 url directly
    if (cleanUrl.includes(".mp4")) {
      return [
        {
          url: cleanUrl,
          quality: "Original MP4 (Direct CDN)",
          originalUrl: cleanUrl,
          headers
        }
      ];
    }

    // 2. Fetch page HTML
    const res = await new Client().get(cleanUrl, this.getHeaders(cleanUrl));
    const html = res.body || "";

    // A. Check itemprop="contentUrl"
    const contentUrlMatch = html.match(/<meta\s+itemprop=["']contentUrl["']\s+content=["']([^"']+)["']/i) ||
                            html.match(/<meta\s+content=["']([^"']+)["']\s+itemprop=["']contentUrl["']/i);
    if (contentUrlMatch && contentUrlMatch[1].startsWith("http")) {
      videos.push({
        url: contentUrlMatch[1],
        quality: "Original MP4 (Direct CDN)",
        originalUrl: cleanUrl,
        headers
      });
    }

    // B. Regex scan for VIP / direct mp4 URLs
    const vipMatches = html.match(/https?:\/\/vip\.hentai-vostfr\.online\/[^\s"'<>\\]+\.mp4/gi);
    if (vipMatches) {
      for (const vUrl of vipMatches) {
        if (!videos.some(v => v.url === vUrl)) {
          videos.push({
            url: vUrl,
            quality: "Original MP4 (High Speed)",
            originalUrl: cleanUrl,
            headers
          });
        }
      }
    }

    // C. Any other MP4 URLs in HTML
    const mp4Matches = html.match(/https?:\/\/[^\s"'<>\\]+\.mp4/gi);
    if (mp4Matches) {
      for (const vUrl of mp4Matches) {
        if (!videos.some(v => v.url === vUrl)) {
          videos.push({
            url: vUrl,
            quality: "Direct MP4 Video",
            originalUrl: cleanUrl,
            headers
          });
        }
      }
    }

    // D. Check post ID and query WP REST API for authentic featured media
    if (videos.length === 0) {
      const postIdMatch = html.match(/data-postid=["'](\d+)["']/i) ||
                          html.match(/data-id=["'](\d+)["']/i) ||
                          html.match(/postid-(\d+)/i) ||
                          html.match(/wp\/v2\/posts\/(\d+)/i) ||
                          html.match(/"post_id":(\d+)/i);
      if (postIdMatch) {
        const postId = postIdMatch[1];
        try {
          const postJson = await this.requestJson(`/wp-json/wp/v2/posts/${postId}?_embed=1`);
          if (postJson) {
            const media = postJson._embedded?.["wp:featuredmedia"]?.[0];
            const thumbUrl = media?.source_url;
            const derived = this.deriveMp4Url(thumbUrl);
            if (derived && !videos.some(v => v.url === derived)) {
              videos.push({
                url: derived,
                quality: "Original MP4 (VIP CDN)",
                originalUrl: cleanUrl,
                headers
              });
            }
          }
        } catch (_) {}
      }
    }

    return videos;
  }
}
