/* Civic Atlas reminder: editorial city-guide composition; ink, bone, and saffron palette; asymmetrical wayfinding; Fraunces + IBM Plex Sans + IBM Plex Mono; restrained motion. */
import { FormEvent, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  Compass,
  ExternalLink,
  Facebook,
  Instagram,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Tag,
  TrendingUp,
  Users,
  Youtube,
} from "lucide-react";
import { toast } from "sonner";
import CinematicHero from "@/components/CinematicHero";

const heroImage = "/manus-storage/localeadr-hero_1a29d95c.jpg";
const discoveryImage = "/manus-storage/localeadr-discovery_edf432a8.jpg";
const articleImage = "/manus-storage/localeadr-article-cover_00b0942d.jpg";
const marketplaceImage = "/manus-storage/localeadr-marketplace_14eb4996.jpg";
const brandMark = "/manus-storage/localeadr-mark_38789969.png";

const categories = [
  { label: "Home services", count: 253, tone: "clay", icon: Building2 },
  { label: "Salons", count: 110, tone: "sage", icon: Sparkles },
  { label: "Hotels & events", count: 95, tone: "saffron", icon: Compass },
  { label: "Water damage", count: 55, tone: "blue", icon: MapPin },
  { label: "Solar energy", count: 54, tone: "ink", icon: TrendingUp },
  { label: "Real estate", count: 53, tone: "clay", icon: Building2 },
  { label: "Car rentals", count: 45, tone: "sage", icon: BriefcaseBusiness },
  { label: "Restaurants", count: 44, tone: "saffron", icon: Store },
];

const businesses = [
  {
    name: "Market Square",
    category: "Shopping malls & parks",
    location: "Umuahia",
    description: "A neighborhood anchor for everyday finds, groceries, and the small rituals of city life.",
    code: "MS / 014",
    tone: "clay",
    mark: "MS",
  },
  {
    name: "ECR Technology Services",
    category: "Tech institutions",
    location: "Umuahia",
    description: "Practical digital systems and support for teams building what comes next.",
    code: "ECR / 022",
    tone: "sage",
    mark: "ECR",
  },
  {
    name: "Taxidi",
    category: "Car rentals & logistics",
    location: "Umuahia",
    description: "Reliable city transfers, airport runs, and long-distance travel planned around you.",
    code: "TX / 031",
    tone: "saffron",
    mark: "TX",
  },
  {
    name: "Chicken Republic",
    category: "Restaurants",
    location: "Umuahia",
    description: "A familiar stop for quick meals, easy gatherings, and local appetite.",
    code: "CR / 044",
    tone: "ink",
    mark: "CR",
  },
  {
    name: "Realinkr",
    category: "Tech institutions",
    location: "Umuahia",
    description: "Property intelligence and digital tools for navigating a changing city.",
    code: "RL / 052",
    tone: "sage",
    mark: "RL",
  },
  {
    name: "DMD Environmental, Inc",
    category: "Solar energy installers",
    location: "Toledo",
    description: "A clear path to more resilient energy at home, at work, and across the block.",
    code: "DMD / 067",
    tone: "clay",
    mark: "DMD",
  },
];

const updates = [
  { name: "Realinkr", category: "Tech institutions", location: "Umuahia", code: "01" },
  { name: "Nobik International Event Center", category: "Hotels & event centers", location: "Aba", code: "02" },
  { name: "ECR Technology Services", category: "Tech institutions", location: "Umuahia", code: "03" },
  { name: "Hotel Royal Damgrete", category: "Hotels & event centers", location: "Umuahia", code: "04" },
  { name: "Shoprite Jabi Lake Abuja", category: "Shopping malls & parks", location: "Jabi", code: "05" },
  { name: "Planet Fitness — Uptown", category: "Gyms & fitness centers", location: "Cleveland, OH", code: "06" },
  { name: "Great Lakes Brewing Company", category: "Restaurants", location: "Cleveland, OH", code: "07" },
];

const products = [
  { name: "Super Studio Room", type: "Room stay", provider: "Rapha Hotels", price: "From ₦40,000", tone: "room" },
  { name: "Toyota Highlander", type: "Vehicle hire", provider: "Taxidi", price: "From ₦170,000", tone: "car" },
  { name: "Interstate Travel", type: "Custom quote", provider: "Taxidi", price: "Request a quote", tone: "travel" },
  { name: "Airport Shuttle Service", type: "Transfer", provider: "Taxidi", price: "From ₦80,000", tone: "shuttle" },
];

const popularSearches = ["Home service contractors", "Car rentals & logistics", "Pest control", "Professional house painters"];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All businesses");
  const [showAllCategories, setShowAllCategories] = useState(false);

  const visibleBusinesses = useMemo(() => {
    const normalized = submittedSearch.trim().toLowerCase();
    return businesses.filter((business) => {
      const matchesSearch = !normalized || [business.name, business.category, business.location].some((value) => value.toLowerCase().includes(normalized));
      const matchesCategory = activeCategory === "All businesses" || business.category.toLowerCase().includes(activeCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, submittedSearch]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedSearch(search);
    scrollToId("featured");
  }

  function selectCategory(category: string) {
    setActiveCategory(category);
    setSubmittedSearch("");
    setSearch("");
    scrollToId("featured");
  }

  function showComingSoon(label: string) {
    toast(`${label} is coming soon`, {
      description: "We are shaping this part of the city index now.",
    });
  }

  return (
    <div className="site-shell">
      <aside className="wayfinding-rail" aria-label="Localeadr wayfinding">
        <div className="rail-mark">
          <img src={brandMark} alt="Localeadr compass mark" />
        </div>
        <span className="rail-word">LOCALEADR</span>
        <div className="rail-line" />
        <span className="rail-note">LOCAL /<br />VERIFIED /<br />NOW</span>
        <span className="rail-note rail-version">CITY INDEX<br />V.02 / 2026</span>
      </aside>

      <div className="site-main">
        <main id="top">
          <CinematicHero />
          <section className="hero-section">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> The City Experience / 01</div>
              <h1>Find the places<br /><em>your city</em> keeps<br />talking about.</h1>
              <p className="hero-intro">A clearer way to discover trusted local businesses, useful services, and the people shaping your neighborhood.</p>
              <form className="search-box" onSubmit={handleSearch}>
                <Search size={19} strokeWidth={2.1} aria-hidden="true" />
                <input aria-label="Search businesses, services, or places" placeholder="Search a business, service, or place" value={search} onChange={(event) => setSearch(event.target.value)} />
                <button type="submit">Search <ArrowUpRight size={16} /></button>
              </form>
              <div className="popular-row">
                <span>Try looking for</span>
                <div className="popular-links">
                  {popularSearches.map((item) => <button key={item} onClick={() => { setSearch(item); setSubmittedSearch(item); scrollToId("featured"); }}>{item}</button>)}
                </div>
              </div>
            </div>
            <div className="hero-art" style={{ backgroundImage: `url(${heroImage})` }}>
              <div className="hero-art-overlay" />
              <div className="hero-art-top"><span>09° 23′ N</span><span>07° 29′ E</span></div>
              <div className="hero-caption"><span className="caption-rule" /> <span>Umuahia / Abia State<br />A living index of local life</span></div>
              <div className="hero-stamp"><ShieldCheck size={17} /> VERIFIED<br /><strong>LOCAL</strong></div>
            </div>
            <div className="hero-footnote">Scroll to explore <span>↓</span></div>
          </section>

          <section className="trust-strip" aria-label="Localeadr at a glance">
            <div className="trust-heading"><span className="micro-label">Why Localeadr</span><strong>A better signal<br />for local.</strong></div>
            <div className="trust-stat"><span className="stat-number">1,000<span>+</span></span><span className="stat-label">Businesses indexed<br />across growing cities</span></div>
            <div className="trust-stat"><span className="stat-number">20<span>+</span></span><span className="stat-label">Cities in the<br />Localeadr atlas</span></div>
            <div className="trust-stat trust-stat-emphasis"><ShieldCheck size={20} /><span className="stat-label">Clear business profiles.<br /><strong>Less guesswork.</strong></span></div>
          </section>

          <section className="section-block featured-section" id="featured">
            <div className="section-heading-row">
              <div>
                <span className="micro-label">Top businesses / 02</span>
                <h2>Handpicked<br /><em>for you.</em></h2>
              </div>
              <div className="section-aside"><p>Start with businesses worth knowing, then follow the thread to everything your city has to offer.</p><button className="arrow-link" onClick={() => showComingSoon("The full directory")}>Browse full directory <ArrowUpRight size={15} /></button></div>
            </div>
            <div className="filter-row" aria-label="Business filters">
              {["All businesses", "Restaurants", "Tech institutions", "Car rentals", "Hotels & events"].map((filter) => <button key={filter} className={`filter-chip ${activeCategory === filter ? "active" : ""}`} onClick={() => selectCategory(filter)}>{filter}</button>)}
            </div>
            <div className="business-grid">
              {visibleBusinesses.map((business, index) => (
                <article className={`business-card ${index === 0 ? "business-card-featured" : ""}`} key={business.name}>
                  <div className={`business-art tone-${business.tone}`}><span className="card-index">0{index + 1}</span><span className="business-monogram">{business.mark}</span><span className="business-coordinate">{business.code}</span></div>
                  <div className="business-content">
                    <div className="business-meta"><span>{business.category}</span><span className="meta-divider" /><span>{business.location}</span></div>
                    <h3>{business.name}</h3>
                    <p>{business.description}</p>
                    <div className="business-footer"><span className="verified-label"><ShieldCheck size={14} /> Profile noted</span><button onClick={() => showComingSoon(`${business.name} details`)}>View details <ArrowUpRight size={15} /></button></div>
                  </div>
                </article>
              ))}
            </div>
            {visibleBusinesses.length === 0 && <div className="empty-state"><Search size={22} /><strong>No exact match yet.</strong><span>Try a broader city, category, or business name.</span><button className="arrow-link" onClick={() => { setActiveCategory("All businesses"); setSubmittedSearch(""); setSearch(""); }}>Reset search</button></div>}
          </section>

          <section className="about-section section-block" id="about">
            <div className="about-image" style={{ backgroundImage: `url(${discoveryImage})` }}><span className="about-image-label">The city is a<br />collection of signals.</span></div>
            <div className="about-copy">
              <span className="micro-label">About the City Experience / 03</span>
              <h2>Trust should be<br /><em>easy to see.</em></h2>
              <p>Localeadr brings the scattered pieces of local discovery into one considered place: the business, the context, the next step. No overcomplicated profiles. No fog around who is behind the service.</p>
              <p className="small-copy">We are building a more useful local internet—one that helps people choose with confidence and helps independent businesses show up with clarity.</p>
              <div className="about-signature"><span>LA</span><div><strong>City Experience</strong><small>Observed locally / shared openly</small></div></div>
            </div>
          </section>

          <section className="business-cta section-block">
            <div className="cta-rail">FOR<br />BUSINESS<br />OWNERS</div>
            <div className="cta-copy"><span className="micro-label">Make your signal clearer</span><h2>Give good work<br /><em>somewhere to land.</em></h2><p>Put your business in front of people already looking for what you do. Build a profile that earns a second look, a message, and a visit.</p><button className="button-dark" onClick={() => showComingSoon("Business profiles")}>List your business <ArrowUpRight size={17} /></button></div>
            <div className="cta-mark"><Compass size={64} strokeWidth={1.1} /><span>LIST / VERIFY / GROW</span></div>
          </section>

          <section className="section-block updates-section" id="updates">
            <div className="section-heading-row compact-heading"><div><span className="micro-label">Inside updates / 04</span><h2>What’s happening<br /><em>right now.</em></h2></div><div className="section-aside"><p>Direct updates and inside stories, shared in full by the people who make local places worth visiting.</p><button className="arrow-link" onClick={() => showComingSoon("Reels")}>See all updates <ArrowUpRight size={15} /></button></div></div>
            <div className="updates-scroller">{updates.map((update) => <button className="update-card" key={update.name} onClick={() => showComingSoon(`${update.name} update`)}><div className="update-visual"><span className="play-glyph">▶</span><span className="update-code">YT / {update.code}</span></div><div className="update-copy"><strong>{update.name}</strong><span>{update.category}</span><span><MapPin size={12} /> {update.location}</span></div><ExternalLink size={15} className="update-arrow" /></button>)}</div>
          </section>

          <section className="marketplace-section section-block" id="marketplace">
            <div className="marketplace-image" style={{ backgroundImage: `url(${marketplaceImage})` }}><div className="marketplace-overlay"><span>MARKETPLACE / 05</span><strong>Useful things.<br /><em>Nearby.</em></strong></div></div>
            <div className="marketplace-copy"><span className="micro-label">Marketplace</span><h2>Explore products<br /><em>& services.</em></h2><p>Rooms, rides, local expertise, and the practical offers that make a city easier to move through.</p><button className="arrow-link" onClick={() => showComingSoon("The marketplace")}>Explore offerings <ArrowUpRight size={15} /></button></div>
            <div className="product-list">{products.map((product, index) => <button className="product-row" key={product.name} onClick={() => showComingSoon(product.name)}><span className={`product-thumb product-${product.tone}`}><Tag size={16} /></span><span className="product-info"><strong>{product.name}</strong><small>{product.type} / {product.provider}</small></span><span className="product-price">{product.price}</span><ChevronRight size={16} /></button>)}</div>
          </section>

          <section className="categories-section section-block" id="categories">
            <div className="section-heading-row"><div><span className="micro-label">Category / 06</span><h2>Explore by<br /><em>industry.</em></h2></div><div className="section-aside"><p>A shorter path to the exact space, service, or specialist you need next.</p><button className="arrow-link" onClick={() => setShowAllCategories((show) => !show)}>{showAllCategories ? "Show less" : "Browse all categories"} <ArrowUpRight size={15} /></button></div></div>
            <div className="category-grid">{categories.slice(0, showAllCategories ? categories.length : 6).map((category) => { const Icon = category.icon; return <button className="category-card" key={category.label} onClick={() => selectCategory(category.label)}><span className={`category-icon category-${category.tone}`}><Icon size={20} /></span><span className="category-name">{category.label}</span><span className="category-count">{category.count} listings <ArrowUpRight size={13} /></span></button>; })}</div>
          </section>

          <section className="insights-section section-block" id="insights">
            <div className="section-heading-row compact-heading"><div><span className="micro-label">Insights / 07</span><h2>Notes from<br /><em>the field.</em></h2></div><div className="section-aside"><p>Regional spotlights and useful advice for navigating local markets with a little more context.</p><button className="arrow-link" onClick={() => showComingSoon("All insights")}>Read the archive <ArrowUpRight size={15} /></button></div></div>
            <article className="feature-article"><div className="article-image" style={{ backgroundImage: `url(${articleImage})` }}><span className="article-date">25 / 08 / 26</span></div><div className="article-copy"><span className="article-kicker">Local business marketing</span><h3>How to add your business to local guides and directories</h3><p>Google Local Guides are people, not businesses. Here’s the clearer path to showing up where they discover, review, and recommend local places.</p><div className="article-byline"><span>Victor Irozuru</span><button onClick={() => showComingSoon("This article")}>Read note <ArrowUpRight size={15} /></button></div></div></article>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-top"><div className="footer-brand"><img src={brandMark} alt="" className="brand-mark" /><span className="brand-name">localeadr</span><p>The trusted city index for people who want to choose local with confidence.</p></div><div className="footer-links"><div><span className="footer-label">Explore</span><a href="#featured">Directory</a><a href="#marketplace">Marketplace</a><a href="#insights">Insights</a></div><div><span className="footer-label">For business</span><button onClick={() => showComingSoon("Business profiles")}>List your business</button><button onClick={() => showComingSoon("Verification")}>Get verified</button><button onClick={() => showComingSoon("Support")}>Support</button></div><div><span className="footer-label">Follow the signal</span><div className="social-row"><button aria-label="Instagram" onClick={() => showComingSoon("Instagram")}><Instagram size={16} /></button><button aria-label="YouTube" onClick={() => showComingSoon("YouTube")}><Youtube size={16} /></button><button aria-label="Facebook" onClick={() => showComingSoon("Facebook")}><Facebook size={16} /></button></div></div></div></div>
          <div className="footer-bottom"><span>© 2026 Localeadr / The City Experience</span><span>Made for the places that make a city.</span><span>Privacy / Terms</span></div>
        </footer>
      </div>
    </div>
  );
}
