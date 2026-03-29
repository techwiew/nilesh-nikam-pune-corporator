import { useMemo, useState, type CSSProperties, type ElementType } from 'react';
import {
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Hospital,
  GraduationCap,
  Droplets,
  Users,
  Leaf,
  Route,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import {
  LEADER_INFO,
  ABOUT_SECTION,
  ACHIEVEMENTS,
  VISION,
  CONTACT_INFO,
  GALLERY,
  UI_TEXT,
  KEY_ISSUES,
  HERO_STATS,
  NAVIGATION_SECTIONS,
  SITE_IMAGES,
  THEME_COLORS,
} from '@/constants/leaderData';

const iconMap: Record<string, ElementType> = {
  Hospital,
  GraduationCap,
  Road: Route,
  Droplets,
  Users,
  Leaf,
};

const socialLinks = [
  { label: 'Twitter', href: CONTACT_INFO.social.twitter, icon: Twitter },
  { label: 'Facebook', href: CONTACT_INFO.social.facebook, icon: Facebook },
  { label: 'Instagram', href: CONTACT_INFO.social.instagram, icon: Instagram },
  { label: 'YouTube', href: CONTACT_INFO.social.youtube, icon: Youtube },
];

export default function HomePage() {
  const { toggleTheme, isDark } = useTheme();
  const { language, setLanguage, t, languages } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const palette = isDark ? THEME_COLORS.dark : THEME_COLORS.light;

  const cssVars = useMemo(
    () =>
      ({
        '--page-bg': palette.pageBackground,
        '--section-bg': palette.sectionBackground,
        '--card-bg': palette.cardBackground,
        '--text-1': palette.textPrimary,
        '--text-2': palette.textSecondary,
        '--border-soft': palette.borderSoft,
        '--brand-1': palette.brandPrimary,
        '--brand-2': palette.brandPrimaryStrong,
        '--accent': palette.brandAccent,
        '--hero-glow': palette.heroGlow,
        '--hero-start': palette.heroGradientStart,
        '--hero-mid': palette.heroGradientMid,
        '--hero-end': palette.heroGradientEnd,
        '--badge-bg': palette.badgeBackground,
      }) as CSSProperties,
    [palette],
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
  };

  return (
    <div
      style={cssVars}
      className="min-h-screen bg-[var(--page-bg)] text-[var(--text-1)] transition-colors duration-300"
    >
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-80">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--hero-glow)] blur-3xl" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border-soft)] bg-[color:color-mix(in_srgb,var(--page-bg),transparent_8%)] backdrop-blur-lg">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            className="flex items-center gap-3 text-left"
            onClick={() => scrollToSection("home")}
            aria-label="Go to home section"
          >
            <img
              src="/images/ncp-logo.jpg"
              alt="NCP Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-2)]">
                {t(LEADER_INFO.party)}
              </p>
              <p className="font-serif text-lg font-semibold text-[var(--brand-2)]">
                {t(LEADER_INFO.name)}
              </p>
            </div>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {NAVIGATION_SECTIONS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--text-2)] transition hover:bg-[var(--badge-bg)] hover:text-[var(--brand-2)]"
              >
                {t(item.label)}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-full border border-[var(--border-soft)] px-3 py-2 text-sm text-[var(--text-2)]"
              >
                <Globe className="h-4 w-4" />
                <span>
                  {languages.find((l) => l.code === language)?.nativeName}
                </span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-2xl border border-[var(--border-soft)] bg-[var(--card-bg)] p-1 shadow-xl">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={cn(
                        "w-full rounded-xl px-3 py-2 text-left text-sm transition",
                        language === lang.code
                          ? "bg-[var(--badge-bg)] text-[var(--brand-2)]"
                          : "text-[var(--text-2)] hover:bg-[var(--badge-bg)]",
                      )}
                    >
                      {lang.nativeName}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="rounded-full border border-[var(--border-soft)] p-2 text-[var(--text-2)] transition hover:bg-[var(--badge-bg)]"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-full border border-[var(--border-soft)] p-2 text-[var(--text-2)] md:hidden"
            aria-label="Toggle mobile navigation"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[var(--border-soft)] bg-[var(--card-bg)] px-4 py-4 md:hidden">
            <div className="space-y-2">
              {NAVIGATION_SECTIONS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full rounded-xl px-3 py-2 text-left text-[var(--text-2)] hover:bg-[var(--badge-bg)]"
                >
                  {t(item.label)}
                </button>
              ))}
              <div className="mt-4 grid grid-cols-2 gap-2 border-t border-[var(--border-soft)] pt-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm",
                      language === lang.code
                        ? "bg-[var(--badge-bg)] text-[var(--brand-2)]"
                        : "text-[var(--text-2)]",
                    )}
                  >
                    {lang.nativeName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="relative mt-16 w-full overflow-hidden md:mt-16">
        <div
          className="h-[60vw] w-full bg-[url('/images/profile-banner.jpg')] bg-no-repeat bg-cover md:h-[50vw] lg:h-[40vw]"
          style={{ backgroundPosition: "top 35%" }}
        />
        <div className="absolute inset-0 bg-black/10 md:bg-black/15" />
      </div>

      <section
        id="home"
        className="relative overflow-hidden px-4 pt-2 pb-8 sm:px-6 lg:px-8 xl:px-10"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className="hero-fade-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[var(--brand-2)] bg-[var(--badge-bg)] px-5 py-3 text-lg font-bold uppercase tracking-[0.15em] text-[var(--brand-2)] shadow-lg">
              <Sparkles className="h-5 w-5" />
              {t(LEADER_INFO.campaignBadge)}
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-[var(--text-1)] sm:text-5xl lg:text-6xl">
              {t(LEADER_INFO.name)}
            </h1>
            <p className="mt-3 text-lg text-[var(--brand-2)] sm:text-xl">
              {t(LEADER_INFO.title)} | {t(LEADER_INFO.constituency)}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-2)] sm:text-lg">
              {t(LEADER_INFO.tagline)}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="rounded-full bg-[var(--brand-1)] px-7 text-white hover:bg-[var(--brand-2)]"
              >
                {t(UI_TEXT.sendMessage)}
              </Button>
              <Button
                onClick={() => scrollToSection("about")}
                variant="outline"
                size="lg"
                className="rounded-full border-[var(--brand-1)] px-7 text-[var(--brand-2)] hover:bg-[var(--badge-bg)]"
              >
                {t(UI_TEXT.readMore)}
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-[var(--border-soft)] bg-[var(--card-bg)] p-4"
                >
                  <p className="text-2xl font-bold text-[var(--brand-2)]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--text-2)]">
                    {t(stat.label)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-fade-up relative lg:justify-self-end">
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[linear-gradient(140deg,var(--hero-start),var(--hero-mid),var(--hero-end))] p-3 shadow-2xl">
              <img
                src={SITE_IMAGES.profile}
                alt={t(LEADER_INFO.name)}
                className="h-[460px] w-full rounded-[1.6rem] object-cover"
              />
              <div className="absolute bottom-8 left-1/2 w-[calc(100%-3rem)] -translate-x-1/2 rounded-2xl bg-[color:color-mix(in_srgb,var(--card-bg),transparent_8%)] p-4 backdrop-blur-sm">
                <p className="text-sm font-semibold text-[var(--brand-2)]">
                  {t(LEADER_INFO.party)}
                </p>
                <p className="text-lg font-semibold text-[var(--text-1)]">
                  {t(LEADER_INFO.name)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-y border-[var(--border-soft)] bg-[var(--section-bg)] px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="font-serif text-3xl font-semibold text-[var(--text-1)] sm:text-4xl">
            {t(ABOUT_SECTION.title)}
          </h2>
          <p className="mt-6 whitespace-pre-line text-base leading-8 text-[var(--text-2)] sm:text-lg">
            {t(ABOUT_SECTION.biography)}
          </p>
        </div>
      </section>

      <section id="issues" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="font-serif text-3xl font-semibold text-[var(--text-1)] sm:text-4xl">
            {t(KEY_ISSUES.title)}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {KEY_ISSUES.items.map((issue) => {
              const IssueIcon = iconMap[issue.icon] ?? ArrowRight;
              return (
                <article
                  key={issue.icon}
                  className="rounded-3xl border border-[var(--border-soft)] bg-[var(--card-bg)] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-[var(--badge-bg)] p-3 text-[var(--brand-2)]">
                    <IssueIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-1)]">
                    {t(issue.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-2)]">
                    {t(issue.description)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="achievements"
        className="border-y border-[var(--border-soft)] bg-[var(--section-bg)] px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="font-serif text-3xl font-semibold text-[var(--text-1)] sm:text-4xl">
            {t(ACHIEVEMENTS.title)}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ACHIEVEMENTS.items.map((achievement, index) => {
              const AchievementIcon = iconMap[achievement.icon] ?? CheckCircle2;
              return (
                <article
                  key={`${achievement.icon}-${index}`}
                  className="rounded-3xl border border-[var(--border-soft)] bg-[var(--card-bg)] p-6"
                >
                  <AchievementIcon className="h-6 w-6 text-[var(--brand-2)]" />
                  <h3 className="mt-3 text-xl font-semibold text-[var(--text-1)]">
                    {t(achievement.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-2)]">
                    {t(achievement.description)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="vision" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl rounded-3xl border border-[var(--border-soft)] bg-[linear-gradient(125deg,var(--hero-start),var(--hero-mid),var(--hero-end))] p-8 sm:p-10">
          <h2 className="font-serif text-3xl font-semibold text-[var(--text-1)] sm:text-4xl">
            {t(VISION.title)}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {VISION.points.map((point, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[var(--border-soft)] bg-[var(--card-bg)] p-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-2)]" />
                  <p className="text-sm leading-7 text-[var(--text-2)]">
                    {t(point)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="border-y border-[var(--border-soft)] bg-[var(--section-bg)] px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="font-serif text-3xl font-semibold text-[var(--text-1)] sm:text-4xl">
            {t(GALLERY.title)}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.images.map((image, index) => (
              <figure
                key={`${image.src}-${index}`}
                className="group relative overflow-hidden rounded-3xl border border-[var(--border-soft)]"
              >
                <img
                  src={image.src}
                  alt={t(image.alt)}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm text-white opacity-0 transition group-hover:opacity-100">
                  {t(image.alt)}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text-1)] sm:text-4xl">
              {t(CONTACT_INFO.title)}
            </h2>

            <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--card-bg)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--brand-2)]">
                {t(CONTACT_INFO.office.label)}
              </p>
              <div className="mt-3 flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[var(--brand-2)]" />
                <p className="text-sm leading-7 text-[var(--text-2)]">
                  {t(CONTACT_INFO.office.value)}
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--card-bg)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--brand-2)]">
                {t(CONTACT_INFO.constituency.label)}
              </p>
              <div className="mt-3 flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[var(--brand-2)]" />
                <p className="text-sm leading-7 text-[var(--text-2)]">
                  {t(CONTACT_INFO.constituency.value)}
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--card-bg)] p-5">
                <div className="mb-2 inline-flex rounded-xl bg-[var(--badge-bg)] p-2 text-[var(--brand-2)]">
                  <Phone className="h-4 w-4" />
                </div>
                <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-2)]">
                  {t(UI_TEXT.phone)}
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--text-1)]">
                  {CONTACT_INFO.phone}
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--card-bg)] p-5">
                <div className="mb-2 inline-flex rounded-xl bg-[var(--badge-bg)] p-2 text-[var(--brand-2)]">
                  <Mail className="h-4 w-4" />
                </div>
                <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-2)]">
                  {t(UI_TEXT.email)}
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--text-1)]">
                  {CONTACT_INFO.email}
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--card-bg)] p-5">
              <p className="mb-3 text-sm font-semibold text-[var(--text-1)]">
                {t(UI_TEXT.followUs)}
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--badge-bg)] px-4 py-2 text-sm text-[var(--brand-2)]"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--card-bg)] p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-[var(--text-1)]">
              {t(UI_TEXT.sendMessage)}
            </h3>
            <form className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-[var(--text-2)]">
                  {t(UI_TEXT.yourName)}
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-[var(--border-soft)] bg-transparent px-4 py-3 text-[var(--text-1)] outline-none transition focus:border-[var(--brand-1)]"
                  placeholder={t(UI_TEXT.yourName)}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-[var(--text-2)]">
                  {t(UI_TEXT.yourEmail)}
                </label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-[var(--border-soft)] bg-transparent px-4 py-3 text-[var(--text-1)] outline-none transition focus:border-[var(--brand-1)]"
                  placeholder={t(UI_TEXT.yourEmail)}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-[var(--text-2)]">
                  {t(UI_TEXT.message)}
                </label>
                <textarea
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-[var(--border-soft)] bg-transparent px-4 py-3 text-[var(--text-1)] outline-none transition focus:border-[var(--brand-1)]"
                  placeholder={t(UI_TEXT.message)}
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-[var(--brand-1)] py-3 text-white hover:bg-[var(--brand-2)]"
              >
                {t(UI_TEXT.sendMessage)}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border-soft)] bg-[var(--section-bg)] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 text-sm text-[var(--text-2)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {t(LEADER_INFO.name)}.{" "}
            {t(UI_TEXT.allRightsReserved)}
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="hover:text-[var(--brand-2)]"
                target="_blank"
                rel="noreferrer noopener"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
