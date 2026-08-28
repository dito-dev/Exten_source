const mangayomiSources = [
  {
    "name": "Tik.Porn",
    "id": 1007,
    "baseUrl": "https://tik.porn",
    "lang": "en",
    "typeSource": "single",
    "iconUrl": "https://tik.porn/apple-touch-icon.png",
    "dateFormat": "",
    "dateFormatLocale": "",
    "isNsfw": true,
    "hasCloudflare": false,
    "sourceCodeUrl": "https://raw.githubusercontent.com/dito-dev/Exten_source/main/nsfw/tikporn.js",
    "apiUrl": "https://apiv2.tik.porn",
    "version": "1.0.0",
    "isManga": false,
    "itemType": 1,
    "isFullData": false,
    "appMinVerReq": "0.5.0",
    "additionalParams": "",
    "sourceCodeLanguage": 1,
    "notes": "Tik.Porn short vertical adult video platform",
    "pkgPath": "nsfw/tikporn.js"
  }
];

const TIKPORN_SORTS = [
  { name: "Popular (Most Liked & Viewed)", value: "popular" },
  { name: "Latest / Recent", value: "latest" },
  { name: "Trending", value: "trending" }
];

const TIKPORN_TAGS = [
  { name: "All Tags", value: "" },
  { name: "Amateur", value: "/tag/amateur.hti" },
  { name: "Arab", value: "/tag/arab.evf" },
  { name: "Asian", value: "/tag/asian.fxo" },
  { name: "Asmr", value: "/tag/asmr.ewr" },
  { name: "Bbw", value: "/tag/bbw.iied" },
  { name: "Beach", value: "/tag/beach.gjg" },
  { name: "Big Ass", value: "/tag/big-ass.krqb" },
  { name: "Big Boobs", value: "/tag/big-boobs.lsra" },
  { name: "Big Dick", value: "/tag/big-dick.jqp" },
  { name: "Black", value: "/tag/black.gqg" },
  { name: "Black Booty", value: "/tag/black-booty.pzpc" },
  { name: "Blonde", value: "/tag/blonde.jtxb" },
  { name: "Brazilian", value: "/tag/brazilian.kak" },
  { name: "Brunette", value: "/tag/brunette.jzd" },
  { name: "Cfnm", value: "/tag/cfnm.gjs" },
  { name: "Compilation", value: "/tag/compilation.nzy" },
  { name: "Cosplay", value: "/tag/cosplay.dput" },
  { name: "Creamy Pussy", value: "/tag/creamy-pussy.pesa" },
  { name: "Cuckold", value: "/tag/cuckold" },
  { name: "Curvy Thick", value: "/tag/curvy-thick.ogea" },
  { name: "Domination", value: "/tag/domination.nyx" },
  { name: "Ebony", value: "/tag/ebony.olze" },
  { name: "European", value: "/tag/european.mca" },
  { name: "Exhibitionist", value: "/tag/exhibitionist.slwa" },
  { name: "Extreme", value: "/tag/extreme.mfca" },
  { name: "Female Friendly", value: "/tag/female-friendly.utc" },
  { name: "Femdom", value: "/tag/femdom.lkt" },
  { name: "Fetish", value: "/tag/fetish" },
  { name: "French", value: "/tag/french" },
  { name: "Funny", value: "/tag/funny.kzt" },
  { name: "Gangbang", value: "/tag/gangbang.oiw" },
  { name: "German", value: "/tag/german" },
  { name: "Glasses", value: "/tag/glasses.nsi" },
  { name: "Gloryhole", value: "/tag/gloryhole" },
  { name: "Emo Gothic", value: "/tag/emo-gothic.owz" },
  { name: "Grandma", value: "/tag/grandma" },
  { name: "Hairy Pussy", value: "/tag/hairy-pussy.wpyd" },
  { name: "Hardcore", value: "/tag/hardcore.pia" },
  { name: "Hentai", value: "/tag/hentai" },
  { name: "Hentai Uncensored", value: "/tag/hentai-uncensored.yvf" },
  { name: "Hentai 3d", value: "/tag/hentai-3d" },
  { name: "Hijab", value: "/tag/hijab" },
  { name: "Indian", value: "/tag/indian" },
  { name: "Interracial", value: "/tag/interracial.tyf" },
  { name: "Latina", value: "/tag/latina.rga" },
  { name: "Leaked", value: "/tag/leaked.xqnf" },
  { name: "Lesbian", value: "/tag/lesbian.uncb" },
  { name: "Solo Man", value: "/tag/solo-man" },
  { name: "Mature", value: "/tag/mature" },
  { name: "Mature And Young Guy", value: "/tag/mature-and-young-guy.guo" },
  { name: "Midgets", value: "/tag/midgets.tpl" },
  { name: "Milf", value: "/tag/milf.qmq" },
  { name: "Naked", value: "/tag/naked.sfq" },
  { name: "Natural Big Tits", value: "/tag/natural-big-tits.erla" },
  { name: "Nude", value: "/tag/nude.ryi" },
  { name: "Nurse", value: "/tag/nurse" },
  { name: "Old Man Young Girl", value: "/tag/old-man-young-girl" },
  { name: "Orgy", value: "/tag/orgy.svl" },
  { name: "Outdoor", value: "/tag/outdoor.xddb" },
  { name: "Pawg", value: "/tag/pawg.whec" },
  { name: "Petite", value: "/tag/petite.wlba" },
  { name: "Piercing", value: "/tag/piercing.xqn" },
  { name: "Porn Casting", value: "/tag/porn-casting.bae" },
  { name: "Pov", value: "/tag/pov.utbb" },
  { name: "Pregnant", value: "/tag/pregnant.xzn" },
  { name: "Redhead", value: "/tag/redhead" },
  { name: "Sextape", value: "/tag/sextape.zlfz" },
  { name: "Sexy", value: "/tag/sexy.wic" },
  { name: "Sexy Lingerie", value: "/tag/sexy-lingerie.gsma" },
  { name: "Shaved Pussy", value: "/tag/shaved-pussy.fuoa" },
  { name: "Small Tits", value: "/tag/small-tits.dxma" },
  { name: "Solo", value: "/tag/solo.wsq" },
  { name: "Step Family", value: "/tag/step-family.deq" },
  { name: "Stockings", value: "/tag/stockings.bcy" },
  { name: "Tattoo", value: "/tag/tattoo.zga" },
  { name: "Threesome", value: "/tag/threesome" },
  { name: "Uniforms", value: "/tag/uniforms.cvr" },
  { name: "Upskirt", value: "/tag/upskirt" },
  { name: "Vintage", value: "/tag/vintage" },
  { name: "Violent Sex", value: "/tag/violent-sex.gta" },
  { name: "Virgin Pussy", value: "/tag/virgin-pussy" },
  { name: "Webcam", value: "/tag/webcam.cki" },
  { name: "Young Black", value: "/tag/young-black" },
  { name: "Teen", value: "/tag/teen.xij" }
];

const TIKPORN_ACTIONS = [
  { name: "All Actions", value: "" },
  { name: "Ahegao", value: "/action/ahegao" },
  { name: "Anal Cowgirl", value: "/action/anal-cowgirl.mzn" },
  { name: "Anal Cumshot", value: "/action/anal-cumshot.mzn" },
  { name: "Anal Doggystyle", value: "/action/anal-doggystyle.resb" },
  { name: "Anal Fisting", value: "/action/anal-fisting" },
  { name: "Anal Gaping", value: "/action/anal-gaping.lym" },
  { name: "Anal Plug", value: "/action/anal-plug.jwk" },
  { name: "Anal", value: "/action/anal.erf" },
  { name: "Anal Sextoy", value: "/action/anal-sextoy.mzna" },
  { name: "Anal Sextoy On Man", value: "/action/anal-sextoy-on-man" },
  { name: "Assjob", value: "/action/assjob" },
  { name: "Ass Fingering", value: "/action/ass-fingering.nfg" },
  { name: "Ass To Mouth", value: "/action/ass-to-mouth" },
  { name: "Ballbusting", value: "/action/ballbusting" },
  { name: "Ball Gag", value: "/action/ball-gag.jiu" },
  { name: "Blowjob", value: "/action/blowjob.isw" },
  { name: "Boob Drop", value: "/action/boob-drop.lyza" },
  { name: "Boob Grab", value: "/action/boob-grab.obcd" },
  { name: "Bouncing Boobs", value: "/action/bouncing-boobs.pcj" },
  { name: "Bukkake", value: "/action/bukkake.ibs" },
  { name: "Choke", value: "/action/choke.hmu" },
  { name: "Clothes Ripped Off", value: "/action/clothes-ripped-off.veia" },
  { name: "Covering Mouth", value: "/action/covering-mouth" },
  { name: "Cowgirl", value: "/action/cowgirl.jve" },
  { name: "Creampie", value: "/action/creampie.kzn" },
  { name: "Cumshot", value: "/action/cumshot.jbu" },
  { name: "Cum In Mouth", value: "/action/cum-in-mouth.yqjj" },
  { name: "Cum Licking", value: "/action/cum-licking" },
  { name: "Cum On Ass", value: "/action/cum-on-ass.mex" },
  { name: "Cum On Body", value: "/action/cum-on-body.nfy" },
  { name: "Cum On Feet", value: "/action/cum-on-feet" },
  { name: "Cum On Pussy", value: "/action/cum-on-pussy.ogz" },
  { name: "Cum On Tits", value: "/action/cum-on-tits.ewpq" },
  { name: "Cum Swallow", value: "/action/cum-swallow.ogza" },
  { name: "Cum Swap", value: "/action/cum-swap" },
  { name: "Dancing", value: "/action/dancing.khv" },
  { name: "Deepthroat", value: "/action/deepthroat.nop" },
  { name: "Dick Slap", value: "/action/dick-slap" },
  { name: "Doggystyle", value: "/action/doggystyle.rcvd" },
  { name: "Double Anal", value: "/action/double-anal" },
  { name: "Double Fist", value: "/action/double-fist" },
  { name: "Double Handjob", value: "/action/double-handjob" },
  { name: "Double Penetration", value: "/action/double-penetration.vgn" },
  { name: "Double Vaginal", value: "/action/double-vaginal" },
  { name: "Downblouse", value: "/action/downblouse" },
  { name: "Drinking Piss", value: "/action/drinking-piss" },
  { name: "Facesitting", value: "/action/facesitting" },
  { name: "Facial Cum", value: "/action/facial-cum.qloa" },
  { name: "Showing Feet", value: "/action/showing-feet" },
  { name: "Masturbation Solo", value: "/action/masturbation-solo.esla" },
  { name: "Finger In Mouth", value: "/action/finger-in-mouth" },
  { name: "Flexible", value: "/action/flexible.ntn" },
  { name: "Food Porn", value: "/action/food-porn.oxy" },
  { name: "Footjob", value: "/action/footjob" },
  { name: "French Kiss", value: "/action/french-kiss.qcq" },
  { name: "Fucking Machine", value: "/action/fucking-machine.gvel" },
  { name: "Full Length", value: "/action/full-length.xmeg" },
  { name: "Full Nelson", value: "/action/full-nelson" },
  { name: "Full Nelson Anal", value: "/action/full-nelson-anal" },
  { name: "Giant Sextoys", value: "/action/giant-sextoys.uwpa" },
  { name: "Hair Pulling", value: "/action/hair-pulling.tmv" },
  { name: "Handjob", value: "/action/handjob.ohv" },
  { name: "Joi Jerk Off Instructions", value: "/action/joi-jerk-off-instructions.kpkb" },
  { name: "Just Chatting", value: "/action/just-chatting.xiha" },
  { name: "Lesbian Anal Masturbation", value: "/action/lesbian-anal-masturbation" },
  { name: "Lesbian Anal Sextoy", value: "/action/lesbian-anal-sextoy" },
  { name: "Lesbian Piss", value: "/action/lesbian-piss" },
  { name: "Lesbian Pussy Licking", value: "/action/lesbian-pussy-licking.gzo" },
  { name: "Lesbian Rimjob", value: "/action/lesbian-rimjob" },
  { name: "Lesbian Strapon", value: "/action/lesbian-strapon" },
  { name: "Lesbian 69", value: "/action/lesbian-69.vod" },
  { name: "Licking Balls", value: "/action/licking-balls" },
  { name: "Licking Feet", value: "/action/licking-feet" },
  { name: "Lifted Anal", value: "/action/lifted-anal" },
  { name: "Lifted Double", value: "/action/lifted-double" },
  { name: "Lifted Vaginal", value: "/action/lifted-vaginal.zwu" },
  { name: "Male Sextoy", value: "/action/male-sextoy" },
  { name: "Man Masturbating", value: "/action/man-masturbating" },
  { name: "Massage", value: "/action/massage.tha" },
  { name: "Men Pissing", value: "/action/men-pissing" },
  { name: "Missionary", value: "/action/missionary.wsd" },
  { name: "Missionary Anal", value: "/action/missionary-anal.bxi" },
  { name: "Motorboating", value: "/action/motorboating" },
  { name: "Nipple Play", value: "/action/nipple-play.ytb" },
  { name: "Oil", value: "/action/oil.rlp" },
  { name: "Orgasm", value: "/action/orgasm.uxn" },
  { name: "Piledriver", value: "/action/piledriver" },
  { name: "Piledriver Anal", value: "/action/piledriver-anal" },
  { name: "Pinch", value: "/action/pinch.unt" },
  { name: "Pissing", value: "/action/pissing" },
  { name: "Pissing On Men", value: "/action/pissing-on-men" },
  { name: "Prolapse", value: "/action/prolapse" },
  { name: "Prone Bone", value: "/action/prone-bone" },
  { name: "Prostate Massage", value: "/action/prostate-massage.fhf" },
  { name: "Pussy Fingering", value: "/action/pussy-fingering.qvul" },
  { name: "Pussy Fisting", value: "/action/pussy-fisting" },
  { name: "Pussy Fuck", value: "/action/pussy-fuck.otso" },
  { name: "Pussy Gaping", value: "/action/pussy-gaping.chga" },
  { name: "Pussy Licking", value: "/action/pussy-licking.fkjc" },
  { name: "Reverse Cowgirl", value: "/action/reverse-cowgirl.zmes" },
  { name: "Reverse Cowgirl Anal", value: "/action/reverse-cowgirl-anal.lyq" },
  { name: "Rimjob", value: "/action/rimjob" },
  { name: "Rimming", value: "/action/rimming" },
  { name: "Saliva", value: "/action/saliva" },
  { name: "Sextoys", value: "/action/sextoys.amga" },
  { name: "Sextoy In The Mouth", value: "/action/sextoy-in-the-mouth.lxr" },
  { name: "Shower Sex", value: "/action/shower-sex.fucc" },
  { name: "Showing Boobs", value: "/action/showing-boobs.fuc" },
  { name: "Slap", value: "/action/slap" },
  { name: "Smoking Girl", value: "/action/smoking-girl" },
  { name: "Spanking", value: "/action/spanking.axj" },
  { name: "Spooning", value: "/action/spooning" },
  { name: "Spooning Anal", value: "/action/spooning-anal" },
  { name: "Squirt", value: "/action/squirt.ywb" },
  { name: "Standing Anal", value: "/action/standing-anal" },
  { name: "Standing Vaginal", value: "/action/standing-vaginal.mqub" },
  { name: "Stockings Sex", value: "/action/stockings-sex.qsua" },
  { name: "Strapon", value: "/action/strapon" },
  { name: "Striptease", value: "/action/striptease.lyea" },
  { name: "Sucking Dildo", value: "/action/sucking-dildo" },
  { name: "Swallow Spits", value: "/action/swallow-spits" },
  { name: "Swallow Spits On Men", value: "/action/swallow-spits-on-men" },
  { name: "Teasing", value: "/action/teasing.cnkb" },
  { name: "Tentacles", value: "/action/tentacles" },
  { name: "Tickling", value: "/action/tickling" },
  { name: "Titjob", value: "/action/titjob.rto" },
  { name: "Titjob Cumshot", value: "/action/titjob-cumshot.vyn" },
  { name: "Tribbing", value: "/action/tribbing" },
  { name: "Twerking", value: "/action/twerking.lsf" },
  { name: "Underwater", value: "/action/underwater.zfq" },
  { name: "Vibrator", value: "/action/vibrator.eoc" },
  { name: "Virtual Reality", value: "/action/virtual-reality.lsm" },
  { name: "Vomit", value: "/action/vomit" },
  { name: "Watersports", value: "/action/watersports" },
  { name: "Wet Clothes", value: "/action/wet-clothes.jta" },
  { name: "69 Sex Position", value: "/action/69-sex-position.wla" }
];

class DefaultExtension extends MProvider {
  getHeaders(url = "") {
    return {
      "Referer": "https://tik.porn/",
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

  formatApiTitle(item) {
    if (!item) return "Video Clip";
    const textTitle = item.video_text?.meta_title?.default?.text ||
                      item.video_text?.display_title_listing_creator?.default?.text ||
                      item.video_text?.display_title_listing_action?.default?.text;
    if (textTitle) return this.decodeHtml(textTitle);

    const userName = item.user_name || (Array.isArray(item.creator) && item.creator[0]?.name) || "";
    const actionName = item.action_name || "Short Clip";
    return userName ? `[${userName}] ${actionName}` : actionName;
  }

  formatApiCover(item) {
    if (!item) return "";
    return item.small_thumb || item.medium_thumb || item.thumbnail_url || item.poster_url || "";
  }

  async requestDoc(slug) {
    const url = slug.startsWith("http") ? slug : `https://tik.porn${slug.startsWith("/") ? "" : "/"}${slug}`;
    const res = await new Client().get(url, this.getHeaders(url));
    return new Document(res.body);
  }

  async requestJson(slug) {
    const url = slug.startsWith("http") ? slug : `https://apiv2.tik.porn${slug.startsWith("/") ? "" : "/"}${slug}`;
    const res = await new Client().get(url, this.getHeaders(url));
    if (!res || !res.body) return null;
    return JSON.parse(res.body);
  }

  extractItemsFromHtml(html) {
    const list = [];
    if (!html) return list;

    // A. Parse video cards with picture/img tags
    const cardRegex = /<a\b[^>]*href=["'](\/video\/(\d+))["'][^>]*title=["']([^"']*)["'][^>]*>[\s\S]*?<img[^>]+src=["']([^"']+)["']/gi;
    let match;
    while ((match = cardRegex.exec(html)) !== null) {
      const link = match[1];
      const name = this.decodeHtml(match[3] || `Video ${match[2]}`);
      const imageUrl = match[4];
      if (link && name && !list.some(i => i.link === link)) {
        list.push({ name, link, imageUrl });
      }
    }

    // B. Parse title links <a href="/video/123">Title</a>
    const titleRegex = /<a\b[^>]*href=["'](\/video\/(\d+))["'][^>]*>([^<]+)<\/a>/gi;
    while ((match = titleRegex.exec(html)) !== null) {
      const link = match[1];
      const rawTitle = match[3].trim();
      if (rawTitle && !rawTitle.toLowerCase().includes("video") && !rawTitle.match(/^\d+$/) && !rawTitle.toLowerCase().includes("see more")) {
        const existing = list.find(i => i.link === link);
        if (existing) {
          if (!existing.name || existing.name.startsWith("Video ")) {
            existing.name = this.decodeHtml(rawTitle);
          }
        } else {
          const id = match[2];
          const thumbDir = id.length >= 4 ? id.slice(0, 4) : id;
          const imageUrl = `https://image-cdn.tik.porn/video/${thumbDir}/${id}/list-sm.jpg?ver=2`;
          list.push({
            name: this.decodeHtml(rawTitle),
            link,
            imageUrl
          });
        }
      }
    }

    // C. Parse standalone /video/\d+ links if list still empty
    if (list.length === 0) {
      const genericRegex = /href=["'](\/video\/(\d+))["']/gi;
      while ((match = genericRegex.exec(html)) !== null) {
        const link = match[1];
        const id = match[2];
        if (!list.some(i => i.link === link)) {
          const thumbDir = id.length >= 4 ? id.slice(0, 4) : id;
          const imageUrl = `https://image-cdn.tik.porn/video/${thumbDir}/${id}/list-sm.jpg?ver=2`;
          list.push({
            name: `Clip ${id}`,
            link,
            imageUrl
          });
        }
      }
    }

    return list;
  }

  async getPopular(page) {
    // 1. Primary: High-speed REST API on apiv2.tik.porn
    try {
      const data = await this.requestJson(`https://apiv2.tik.porn/videos/popular?page=${page}`);
      const items = Array.isArray(data?.data) ? data.data : [];
      if (items.length > 0) {
        const list = [];
        for (const item of items) {
          if (item && item.video_id) {
            list.push({
              name: this.formatApiTitle(item),
              link: `/video/${item.video_id}`,
              imageUrl: this.formatApiCover(item)
            });
          }
        }
        const hasNextPage = items.length >= 10;
        return { list, hasNextPage };
      }
    } catch (_) {}

    // 2. Fallback: HTML Scraping on homepage or paginated page
    try {
      const targetUrl = page > 1 ? `https://tik.porn/page/${page}` : `https://tik.porn/`;
      const res = await new Client().get(targetUrl, this.getHeaders(targetUrl));
      const list = this.extractItemsFromHtml(res.body || "");
      if (list.length > 0) {
        const hasNextPage = list.length >= 10;
        return { list, hasNextPage };
      }
    } catch (_) {}

    return { list: [], hasNextPage: false };
  }

  async getLatestUpdates(page) {
    // 1. Primary: HTML Scraping
    try {
      const targetUrl = page > 1 ? `https://tik.porn/page/${page}` : `https://tik.porn/`;
      const res = await new Client().get(targetUrl, this.getHeaders(targetUrl));
      const list = this.extractItemsFromHtml(res.body || "");
      if (list.length > 0) {
        const hasNextPage = list.length >= 10;
        return { list, hasNextPage };
      }
    } catch (_) {}

    // 2. Fallback to getPopular
    return this.getPopular(page);
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
        type: "action",
        name: "Action / Category",
        type_name: "SelectFilter",
        state: 0,
        values: TIKPORN_ACTIONS.map(a => ({
          name: a.name,
          value: a.value,
          type_name: "SelectOption"
        }))
      },
      {
        type: "tag",
        name: "Tag / Topic",
        type_name: "SelectFilter",
        state: 0,
        values: TIKPORN_TAGS.map(t => ({
          name: t.name,
          value: t.value,
          type_name: "SelectOption"
        }))
      }
    ];
  }

  async search(query, page, filters) {
    let actionPath = "";
    let tagPath = "";
    let sortOrder = "popular";

    if (filters && Array.isArray(filters)) {
      for (const f of filters) {
        if (f.type === "action" && f.values && f.values[f.state]) {
          const val = f.values[f.state].value;
          if (val) actionPath = val;
        }
        if (f.type === "tag" && f.values && f.values[f.state]) {
          const val = f.values[f.state].value;
          if (val) tagPath = val;
        }
        if (f.type === "sort" && f.values && f.values[f.state]) {
          const val = f.values[f.state].value;
          if (val) sortOrder = val;
        }
      }
    }

    const q = (query || "").trim();

    // 1. If text query provided -> Query search endpoint
    if (q) {
      try {
        const searchUrl = `https://tik.porn/?s=${encodeURIComponent(q)}&page=${page}`;
        const res = await new Client().get(searchUrl, this.getHeaders(searchUrl));
        const list = this.extractItemsFromHtml(res.body || "");
        if (list.length > 0) {
          const hasNextPage = list.length >= 10;
          return { list, hasNextPage };
        }
      } catch (_) {}
    }

    // 2. If Action category filter selected
    if (actionPath) {
      try {
        const path = page > 1 ? `${actionPath}/page/${page}` : actionPath;
        const targetUrl = `https://tik.porn${path}`;
        const res = await new Client().get(targetUrl, this.getHeaders(targetUrl));
        const list = this.extractItemsFromHtml(res.body || "");
        if (list.length > 0) {
          const hasNextPage = list.length >= 10;
          return { list, hasNextPage };
        }
      } catch (_) {}
    }

    // 3. If Tag filter selected
    if (tagPath) {
      try {
        const path = page > 1 ? `${tagPath}/page/${page}` : tagPath;
        const targetUrl = `https://tik.porn${path}`;
        const res = await new Client().get(targetUrl, this.getHeaders(targetUrl));
        const list = this.extractItemsFromHtml(res.body || "");
        if (list.length > 0) {
          const hasNextPage = list.length >= 10;
          return { list, hasNextPage };
        }
      } catch (_) {}
    }

    // 4. Default / Fallback: Popular feed
    return this.getPopular(page);
  }

  async getDetail(url) {
    const cleanUrl = url.startsWith("http") ? url : `https://tik.porn${url}`;
    const res = await new Client().get(cleanUrl, this.getHeaders(cleanUrl));
    const html = res.body || "";
    const doc = new Document(html);

    // 1. JSON-LD structured VideoObject extraction
    let videoObj = null;
    const ldRegex = /<script type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
    let match;
    while ((match = ldRegex.exec(html)) !== null) {
      try {
        const parsed = JSON.parse(match[1]);
        if (parsed["@type"] === "VideoObject") {
          videoObj = parsed;
          break;
        }
        if (Array.isArray(parsed.hasPart)) {
          const part = parsed.hasPart.find(p => p["@type"] === "VideoObject");
          if (part) {
            videoObj = part;
            break;
          }
        }
      } catch (_) {}
    }

    // Title
    let name = "";
    if (videoObj && videoObj.name) {
      name = this.decodeHtml(videoObj.name);
    } else {
      const ogTitle = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i);
      if (ogTitle) {
        name = this.decodeHtml(ogTitle[1]);
      } else {
        const pageTitle = doc.selectFirst("title")?.text.trim() || "";
        name = this.decodeHtml(pageTitle || "Adult Video Clip");
      }
    }

    // Duration
    let durationStr = "";
    if (videoObj && videoObj.duration) {
      durationStr = this.formatDuration(videoObj.duration);
    }

    // Author
    let author = "";
    if (videoObj && Array.isArray(videoObj.actor) && videoObj.actor.length > 0) {
      author = videoObj.actor[0].name || "";
    }
    if (!author) {
      const authorMatch = html.match(/class=["'][^"']*author[^"']*["'][^>]*>([^<]+)</i);
      author = authorMatch ? this.decodeHtml(authorMatch[1]) : "Tik.Porn Creator";
    }

    // Interaction stats
    let views = "";
    let likes = "";
    if (videoObj && Array.isArray(videoObj.interactionStatistic)) {
      for (const stat of videoObj.interactionStatistic) {
        if (stat.interactionType?.includes("ViewAction")) {
          views = Number(stat.userInteractionCount || 0).toLocaleString();
        }
        if (stat.interactionType?.includes("LikeAction")) {
          likes = Number(stat.userInteractionCount || 0).toLocaleString();
        }
      }
    }

    // Description
    const rawDesc = videoObj?.description ? this.decodeHtml(videoObj.description) : "";
    const description = [
      rawDesc && rawDesc !== name ? rawDesc : "",
      durationStr ? `Duration: ${durationStr}` : "",
      views ? `Views: ${views}` : "",
      likes ? `Likes: ${likes}` : "",
      author ? `Creator: ${author}` : ""
    ].filter(Boolean).join("\n");

    // Genre / Tags
    const genre = [];
    if (videoObj) {
      if (Array.isArray(videoObj.keywords)) {
        for (const kw of videoObj.keywords) {
          const cleanKw = this.decodeHtml(kw);
          if (cleanKw && !genre.includes(cleanKw)) genre.push(cleanKw);
        }
      }
      if (Array.isArray(videoObj.genre)) {
        for (const g of videoObj.genre) {
          const cleanG = this.decodeHtml(g);
          if (cleanG && !genre.includes(cleanG)) genre.push(cleanG);
        }
      }
    }

    // Fallback tags from HTML
    if (genre.length === 0) {
      const tagLinks = doc.select("a[href*='/tag/'], a[href*='/action/']");
      for (const t of tagLinks) {
        const tagText = this.decodeHtml(t.text.trim());
        if (tagText && tagText.length > 1 && !genre.includes(tagText)) {
          genre.push(tagText);
        }
      }
    }

    // Cover Image
    let imageUrl = "";
    if (videoObj && videoObj.thumbnailUrl) {
      if (Array.isArray(videoObj.thumbnailUrl) && videoObj.thumbnailUrl.length > 0) {
        imageUrl = videoObj.thumbnailUrl[0];
      } else if (typeof videoObj.thumbnailUrl === "string") {
        imageUrl = videoObj.thumbnailUrl;
      }
    }
    if (!imageUrl) {
      const ogImg = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
      imageUrl = ogImg ? ogImg[1] : "";
    }

    // Upload Date
    let dateUpload = String(Date.now());
    if (videoObj && videoObj.uploadDate) {
      const parsedTime = new Date(videoObj.uploadDate).getTime();
      if (!isNaN(parsedTime)) {
        dateUpload = String(parsedTime);
      }
    }

    const episodes = [
      {
        name: durationStr ? `Full Video Clip (${durationStr})` : "Full Video Clip",
        url: cleanUrl,
        dateUpload
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
    const cleanUrl = url.startsWith("http") ? url : `https://tik.porn${url}`;
    const res = await new Client().get(cleanUrl, this.getHeaders(cleanUrl));
    const html = res.body || "";
    const videos = [];
    const headers = {
      "Referer": "https://tik.porn/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
    };

    // 1. JSON-LD contentUrl extraction (Target Video's Direct CDN MP4)
    let primaryContentUrl = "";
    const ldRegex = /<script type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
    let match;
    while ((match = ldRegex.exec(html)) !== null) {
      try {
        const parsed = JSON.parse(match[1]);
        if (parsed["@type"] === "VideoObject" && parsed.contentUrl) {
          primaryContentUrl = parsed.contentUrl;
          break;
        } else if (Array.isArray(parsed.hasPart)) {
          const part = parsed.hasPart.find(p => p["@type"] === "VideoObject" && p.contentUrl);
          if (part) {
            primaryContentUrl = part.contentUrl;
            break;
          }
        }
      } catch (_) {}
    }

    if (primaryContentUrl) {
      // 1. SD Fast CDN Stream (Zero-buffering cold start)
      videos.push({
        url: primaryContentUrl,
        quality: "SD (Fast CDN Instant Start)",
        originalUrl: cleanUrl,
        headers
      });

      // 2. HD Quality Stream
      videos.push({
        url: primaryContentUrl,
        quality: "HD (High Quality 1080p/720p)",
        originalUrl: cleanUrl,
        headers
      });

      // 3. Adaptive Master HLS stream (.m3u8)
      const hlsUrl = primaryContentUrl.replace(/\/[^\/]+\.mp4$/, "/master.m3u8");
      videos.push({
        url: hlsUrl,
        quality: "Adaptive HLS (Master M3U8)",
        originalUrl: cleanUrl,
        headers
      });
    }

    // 2. Primary <video> tag in player DOM (if distinct)
    const videoTagMatch = html.match(/<video[^>]*>[\s\S]*?<source[^>]+src=["']([^"']+)["']/i);
    if (videoTagMatch && videoTagMatch[1]) {
      const tagStream = videoTagMatch[1];
      if (!videos.some(v => v.url === tagStream)) {
        videos.push({
          url: tagStream,
          quality: "SD (Player Stream)",
          originalUrl: cleanUrl,
          headers
        });
      }
    }

    // 3. Fallback if none resolved yet
    if (videos.length === 0) {
      const firstMp4 = html.match(/https:\/\/video-cdn\.tik\.porn\/videos\/[^\s"'<>\\]+\.mp4/i);
      if (firstMp4) {
        videos.push({
          url: firstMp4[0],
          quality: "SD (Direct CDN)",
          originalUrl: cleanUrl,
          headers
        });
        videos.push({
          url: firstMp4[0],
          quality: "HD (Direct CDN)",
          originalUrl: cleanUrl,
          headers
        });
      }
    }

    return videos;
  }
}

