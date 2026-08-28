const mangayomiSources = [
  {
    "name": "Pornhub",
    "id": 1008,
    "baseUrl": "https://www.pornhub.com",
    "lang": "en",
    "typeSource": "single",
    "iconUrl": "https://ei.phncdn.com/www-static/images/pornhub_logo_straight.svg",
    "dateFormat": "",
    "dateFormatLocale": "",
    "isNsfw": true,
    "hasCloudflare": false,
    "sourceCodeUrl": "https://raw.githubusercontent.com/dito-dev/Exten_source/main/nsfw/pornhub.js",
    "apiUrl": "https://www.pornhub.com",
    "version": "1.1.0",
    "isManga": false,
    "itemType": 1,
    "isFullData": false,
    "appMinVerReq": "0.5.0",
    "additionalParams": "",
    "sourceCodeLanguage": 1,
    "notes": "Pornhub official adult video platform",
    "pkgPath": "nsfw/pornhub.js"
  }
];

const PORNHUB_SORTS = [
  { name: "Default (Hottest)", value: "ht" },
  { name: "Most Recent / Latest", value: "mr" },
  { name: "Most Viewed", value: "mv" },
  { name: "Top Rated", value: "tr" },
  { name: "Longest", value: "lg" }
];

const PORNHUB_ORIENTATIONS = [
  { name: "Straight", value: "straight" },
  { name: "Gay", value: "gay" },
  { name: "Transgender", value: "trans" }
];

const PORNHUB_CATEGORIES = [
  { name: "All Categories", value: "" },
  { name: "Amateur", value: "3" },
  { name: "Anal", value: "35" },
  { name: "Asian", value: "1" },
  { name: "Babe", value: "5" },
  { name: "Babysitter (18+)", value: "89" },
  { name: "BBW", value: "6" },
  { name: "Behind The Scenes", value: "115" },
  { name: "Big Ass", value: "4" },
  { name: "Big Dick", value: "7" },
  { name: "Big Tits", value: "8" },
  { name: "Bisexual Male", value: "76" },
  { name: "Blonde", value: "9" },
  { name: "Blowjob", value: "13" },
  { name: "Bondage", value: "10" },
  { name: "Brunette", value: "11" },
  { name: "Celebrity", value: "12" },
  { name: "Casting", value: "90" },
  { name: "College (18+)", value: "79" },
  { name: "Compilation", value: "86" },
  { name: "Cosplay", value: "201" },
  { name: "Creampie", value: "15" },
  { name: "Cuckold", value: "241" },
  { name: "Cumshot", value: "16" },
  { name: "Double Penetration", value: "72" },
  { name: "Ebony", value: "17" },
  { name: "Exclusive", value: "103" },
  { name: "Feet", value: "93" },
  { name: "Female Orgasm", value: "522" },
  { name: "Fetish", value: "18" },
  { name: "Fisting", value: "19" },
  { name: "For Women", value: "73" },
  { name: "Funny", value: "32" },
  { name: "Gangbang", value: "88" },
  { name: "Handjob", value: "20" },
  { name: "Hardcore", value: "21" },
  { name: "HD Porn", value: "38" },
  { name: "Hentai", value: "36" },
  { name: "Interracial", value: "25" },
  { name: "Japanese", value: "111" },
  { name: "JOI", value: "102" },
  { name: "Latina", value: "26" },
  { name: "Lesbian", value: "27" },
  { name: "Massage", value: "78" },
  { name: "Masturbation", value: "22" },
  { name: "Mature", value: "28" },
  { name: "MILF", value: "29" },
  { name: "Music", value: "108" },
  { name: "Old / Young (18+)", value: "89" },
  { name: "Parody", value: "99" },
  { name: "Pissing", value: "24" },
  { name: "Pornstar", value: "95" },
  { name: "POV", value: "42" },
  { name: "Public", value: "23" },
  { name: "Redhead", value: "41" },
  { name: "Role Play", value: "81" },
  { name: "Rough Sex", value: "67" },
  { name: "Small Tits", value: "59" },
  { name: "Solo Female", value: "492" },
  { name: "Solo Male", value: "491" },
  { name: "Squirt", value: "69" },
  { name: "Step Fantasy", value: "104" },
  { name: "Striptease", value: "33" },
  { name: "Tattooed Women", value: "542" },
  { name: "Teen (18+)", value: "37" },
  { name: "Threesome", value: "65" },
  { name: "Toys", value: "80" },
  { name: "Transgender", value: "83" },
  { name: "Verified Amateurs", value: "138" },
  { name: "Verified Models", value: "141" },
  { name: "Vintage", value: "43" },
  { name: "VR", value: "105" }
];

class DefaultExtension extends MProvider {
  getHeaders(url = "") {
    return {
      "Referer": "https://www.pornhub.com/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
      "Cookie": "age_verified=1; accessPH=1; cookieConsent=3; platform=pc; platform_forced=pc; bs=00000000000000001398722aa76b39b6;"
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
      .replace(/&#039;/g, "'")
      .replace(/&quest;/g, "?")
      .replace(/&excl;/g, "!")
      .replace(/&period;/g, ".")
      .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
      .trim();
  }

  async requestHtml(pathOrUrl) {
    const url = pathOrUrl.startsWith("http")
      ? pathOrUrl
      : `https://www.pornhub.com${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
    const res = await new Client().get(url, this.getHeaders(url));
    if (!res || !res.body) return "";
    return res.body;
  }

  extractVideosFromHtml(html) {
    const list = [];
    if (!html) return list;

    // Pattern 1: Parse <li ... data-video-vkey="..."> elements
    const liRegex = /<li\b[^>]*data-video-vkey=["']([^"']+)["'][^>]*>([\s\S]*?)<\/li>/gi;
    let match;
    while ((match = liRegex.exec(html)) !== null) {
      const vkey = match[1];
      const inner = match[2];

      const titleMatch = inner.match(/<a\b[^>]*class=["'][^"']*title[^"']*["'][^>]*title=["']([^"']+)["']/i) ||
                         inner.match(/<span\b[^>]*class=["']title["'][^>]*>[\s\S]*?<a[^>]*title=["']([^"']+)["']/i) ||
                         inner.match(/title=["']([^"']+)["']/i);
      const title = titleMatch ? this.decodeHtml(titleMatch[1]) : `Video ${vkey}`;

      const link = `/view_video.php?viewkey=${vkey}`;

      const imgMatch = inner.match(/<img\b[^>]*data-thumb_url=["']([^"']+)["']/i) ||
                       inner.match(/<img\b[^>]*data-mediumthumb=["']([^"']+)["']/i) ||
                       inner.match(/<img\b[^>]*data-src=["']([^"']+)["']/i) ||
                       inner.match(/<img\b[^>]*src=["']([^"']+)["']/i);
      const imageUrl = imgMatch ? imgMatch[1] : "";

      if (vkey && title && !list.some(item => item.link === link)) {
        list.push({
          name: title,
          link,
          imageUrl
        });
      }
    }

    // Pattern 2: Fallback anchor tag regex
    if (list.length === 0) {
      const aRegex = /<a\b[^>]*href=["'](\/view_video\.php\?viewkey=([a-zA-Z0-9_-]+))["'][^>]*title=["']([^"']+)["'][^>]*>[\s\S]*?<img[^>]+(?:data-src|data-thumb_url|src)=["']([^"']+)["']/gi;
      while ((match = aRegex.exec(html)) !== null) {
        const link = match[1];
        const vkey = match[2];
        const name = this.decodeHtml(match[3]);
        const imageUrl = match[4];
        if (vkey && name && !list.some(item => item.link === link)) {
          list.push({
            name,
            link,
            imageUrl
          });
        }
      }
    }

    // Pattern 3: Fallback schema.org VideoObject
    if (list.length === 0) {
      const ldMatch = html.match(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
      if (ldMatch && ldMatch[1]) {
        try {
          const ld = JSON.parse(ldMatch[1]);
          if (ld && (ld["@type"] === "VideoObject" || ld.contentUrl)) {
            const vkeyMatch = html.match(/viewkey=([a-zA-Z0-9_-]+)/);
            const vkey = vkeyMatch ? vkeyMatch[1] : "video";
            list.push({
              name: this.decodeHtml(ld.name || "Pornhub Video"),
              link: `/view_video.php?viewkey=${vkey}`,
              imageUrl: ld.thumbnailUrl || ""
            });
          }
        } catch (e) {}
      }
    }

    return list;
  }

  getFilterList() {
    return [
      {
        type: "sort",
        name: "Sort Order",
        type_name: "SelectFilter",
        state: 0,
        values: PORNHUB_SORTS.map(s => ({
          name: s.name,
          value: s.value,
          type_name: "SelectOption"
        }))
      },
      {
        type: "orientation",
        name: "Orientation",
        type_name: "SelectFilter",
        state: 0,
        values: PORNHUB_ORIENTATIONS.map(o => ({
          name: o.name,
          value: o.value,
          type_name: "SelectOption"
        }))
      },
      {
        type: "category",
        name: "Category",
        type_name: "SelectFilter",
        state: 0,
        values: PORNHUB_CATEGORIES.map(c => ({
          name: c.name,
          value: c.value,
          type_name: "SelectOption"
        }))
      }
    ];
  }

  async getPopular(page = 1) {
    const html = await this.requestHtml(`/video?page=${page}`);
    const list = this.extractVideosFromHtml(html);

    return {
      list,
      hasNextPage: list.length > 0
    };
  }

  async getLatestUpdates(page = 1) {
    const html = await this.requestHtml(`/video?o=mr&page=${page}`);
    const list = this.extractVideosFromHtml(html);

    return {
      list,
      hasNextPage: list.length > 0
    };
  }

  async search(query = "", page = 1, filters = []) {
    let selectedSort = "";
    let selectedOrientation = "straight";
    let selectedCategory = "";

    if (filters && Array.isArray(filters)) {
      for (const f of filters) {
        if (f.type === "sort" && f.values && f.values[f.state]) {
          const val = f.values[f.state].value;
          if (val) selectedSort = val;
        }
        if (f.type === "orientation" && f.values && f.values[f.state]) {
          const val = f.values[f.state].value;
          if (val) selectedOrientation = val;
        }
        if (f.type === "category" && f.values && f.values[f.state]) {
          const val = f.values[f.state].value;
          if (val) selectedCategory = val;
        }
      }
    }

    const q = (query || "").trim();
    let url = "";

    let prefix = "";
    if (selectedOrientation === "gay") prefix = "/gay";
    else if (selectedOrientation === "trans") prefix = "/transgender";

    if (q) {
      url = `${prefix}/video/search?search=${encodeURIComponent(q)}&page=${page}`;
      if (selectedSort) url += `&o=${encodeURIComponent(selectedSort)}`;
      if (selectedCategory) url += `&c=${encodeURIComponent(selectedCategory)}`;
    } else {
      url = `${prefix}/video?page=${page}`;
      if (selectedSort) url += `&o=${encodeURIComponent(selectedSort)}`;
      if (selectedCategory) url += `&c=${encodeURIComponent(selectedCategory)}`;
    }

    const html = await this.requestHtml(url);
    const list = this.extractVideosFromHtml(html);

    return {
      list,
      hasNextPage: list.length > 0
    };
  }

  async getDetail(url) {
    const cleanUrl = url.startsWith("http") ? url : `https://www.pornhub.com${url.startsWith("/") ? "" : "/"}${url}`;
    const vkeyMatch = cleanUrl.match(/viewkey=([a-zA-Z0-9_-]+)/);
    const targetVkey = vkeyMatch ? vkeyMatch[1] : "";

    const html = await this.requestHtml(cleanUrl);

    // 1. Title
    const titleMatch = html.match(/<h1[^>]*class=["'][^"']*title[^"']*["'][^>]*>([\s\S]*?)<\/h1>/i) ||
                       html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i) ||
                       html.match(/<title>([\s\S]*?)<\/title>/i);
    const name = titleMatch ? this.decodeHtml(titleMatch[1].replace(/<[^>]+>/g, "").trim()) : "Pornhub Video";

    // 2. Description
    const descMatch = html.match(/<div\b[^>]*class=["'][^"']*video-description[^"']*["'][^>]*>([\s\S]*?)<\/div>/i) ||
                      html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i);
    const description = descMatch ? this.decodeHtml(descMatch[1].replace(/<[^>]+>/g, "").trim()) : "Watch full HD video on Pornhub.";

    // 3. Author
    const authorMatch = html.match(/<span\b[^>]*class=["'][^"']*usernameBadgesWrapper[^"']*["'][^>]*>[\s\S]*?<a[^>]*>([^<]+)<\/a>/i) ||
                        html.match(/<a\b[^>]*class=["'][^"']*bolded[^"']*["'][^>]*>([^<]+)<\/a>/i) ||
                        html.match(/"author"\s*:\s*"([^"]+)"/i);
    const author = authorMatch ? this.decodeHtml(authorMatch[1].trim()) : "Pornhub";

    // 4. Genres / Tags
    const genre = [];
    const tagRegex = /<a\b[^>]*href=["']\/(?:video\/search\?search=|categories\/|tag\/)([^"']+)["'][^>]*class=["'][^"']*item[^"']*["'][^>]*>([^<]+)<\/a>/gi;
    let match;
    while ((match = tagRegex.exec(html)) !== null) {
      const g = this.decodeHtml(match[2].trim());
      if (g && !genre.includes(g) && !g.startsWith("+")) {
        genre.push(g);
      }
    }

    if (genre.length === 0) {
      const ldMatch = html.match(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
      if (ldMatch && ldMatch[1]) {
        try {
          const ld = JSON.parse(ldMatch[1]);
          if (ld.keywords && Array.isArray(ld.keywords)) {
            for (const kw of ld.keywords) {
              const cleaned = this.decodeHtml(kw.trim());
              if (cleaned && !genre.includes(cleaned)) genre.push(cleaned);
            }
          }
        } catch (e) {}
      }
    }

    if (genre.length === 0) {
      genre.push("Pornhub");
    }

    const episodes = [
      {
        name: name || "Play Video",
        url: targetVkey ? `/view_video.php?viewkey=${targetVkey}` : cleanUrl,
        dateUpload: String(Date.now())
      }
    ];

    return {
      name,
      description,
      author,
      genre,
      status: 1,
      episodes
    };
  }

  async getVideoList(url) {
    const cleanUrl = url.startsWith("http") ? url : `https://www.pornhub.com${url.startsWith("/") ? "" : "/"}${url}`;
    const html = await this.requestHtml(cleanUrl);

    const videos = [];
    const headers = {
      "Referer": "https://www.pornhub.com/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
    };

    // Primary: Parse flashvars mediaDefinitions
    const flashvarMatch = html.match(/var\s+flashvars_\d+\s*=\s*(\{[\s\S]*?\});\s*(?:var|\n)/);
    if (flashvarMatch && flashvarMatch[1]) {
      try {
        const fv = JSON.parse(flashvarMatch[1]);
        if (fv.mediaDefinitions && Array.isArray(fv.mediaDefinitions)) {
          const sortedDefs = [...fv.mediaDefinitions].sort((a, b) => {
            const hA = parseInt(a.quality || a.height || 0, 10);
            const hB = parseInt(b.quality || b.height || 0, 10);
            if (a.format === "hls" && b.format !== "hls") return -1;
            if (a.format !== "hls" && b.format === "hls") return 1;
            return hB - hA;
          });

          for (const m of sortedDefs) {
            if (m && m.videoUrl) {
              const resStr = String(m.quality || m.height || "");
              const fmt = (m.format || "hls").toUpperCase();
              let quality = "";
              if (resStr && resStr !== "Auto" && resStr !== "undefined") {
                quality = `${resStr}${/^\d+$/.test(resStr) ? "p" : ""} ${fmt}`;
              } else {
                quality = `${fmt} Video`;
              }

              videos.push({
                url: m.videoUrl,
                originalUrl: m.videoUrl,
                quality,
                headers
              });
            }
          }
        }
      } catch (e) {}
    }

    // Secondary: Fallback to shorties JSON_SHORTIES if this is a shortie URL
    if (videos.length === 0) {
      const matchShorties = html.match(/JSON_SHORTIES\s*=\s*insertAfterNthPosition\(\s*(\[[\s\S]*?\])\s*,\s*prerollObject/);
      if (matchShorties && matchShorties[1]) {
        try {
          const items = JSON.parse(matchShorties[1]);
          if (Array.isArray(items) && items.length > 0 && items[0].mediaDefinitions) {
            for (const m of items[0].mediaDefinitions) {
              if (m && m.videoUrl) {
                const resStr = String(m.quality || m.height || "");
                const fmt = (m.format || "hls").toUpperCase();
                const quality = resStr && resStr !== "Auto" ? `${resStr}${/^\d+$/.test(resStr) ? "p" : ""} ${fmt}` : `${fmt} Video`;
                videos.push({
                  url: m.videoUrl,
                  originalUrl: m.videoUrl,
                  quality,
                  headers
                });
              }
            }
          }
        } catch (e) {}
      }
    }

    // Tertiary: Direct MP4 or contentUrl fallback
    if (videos.length === 0) {
      const contentUrlMatch = html.match(/"contentUrl"\s*:\s*"([^"]+)"/);
      if (contentUrlMatch && contentUrlMatch[1]) {
        videos.push({
          url: contentUrlMatch[1].replace(/\\/g, ""),
          originalUrl: contentUrlMatch[1].replace(/\\/g, ""),
          quality: "720p Direct MP4",
          headers
        });
      }
    }

    return videos;
  }
}
