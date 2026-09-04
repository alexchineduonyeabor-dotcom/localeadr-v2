/* Civic Atlas reminder: preserve Localeadr’s grounded local signal while introducing a cinematic, low-key glass layer; use concise editorial copy, high contrast, and restrained motion. */
import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, Globe, Instagram, Twitter } from "lucide-react";
import { toast } from "sonner";

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4";

export default function CinematicHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const animateOpacity = (target: number, duration: number) => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      const startOpacity = Number.parseFloat(video.style.opacity || "0");
      const startTime = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        video.style.opacity = String(startOpacity + (target - startOpacity) * eased);
        if (progress < 1) frameRef.current = requestAnimationFrame(tick);
        else frameRef.current = null;
      };
      frameRef.current = requestAnimationFrame(tick);
    };

    const fadeIn = () => {
      fadingOutRef.current = false;
      animateOpacity(1, 500);
    };
    const handleLoaded = () => fadeIn();
    const handleTimeUpdate = () => {
      if (!video.duration || fadingOutRef.current) return;
      if (video.duration - video.currentTime <= 0.55) {
        fadingOutRef.current = true;
        animateOpacity(0, 500);
      }
    };
    const handleEnded = () => {
      video.style.opacity = "0";
      window.setTimeout(() => {
        video.currentTime = 0;
        void video.play().catch(() => undefined);
        fadeIn();
      }, 100);
    };

    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);
    void video.play().catch(() => undefined);
    fadeIn();

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      toast("Enter an email to join the signal", { description: "We only use it for occasional Localeadr notes." });
      return;
    }
    toast("You’re on the list", { description: "The next Localeadr note will find its way to your inbox." });
    setEmail("");
  }

  return (
    <section className="cinematic-hero" aria-labelledby="cinematic-heading">
      <video ref={videoRef} className="cinematic-video" autoPlay muted playsInline preload="metadata" src={VIDEO_URL} aria-hidden="true" />
      <div className="cinematic-scrim" />
      <div className="cinematic-noise" />
      <div className="cinematic-content">
        <nav className="cinematic-nav" aria-label="Cinematic hero navigation">
          <div className="cinematic-nav-inner liquid-glass">
            <div className="cinematic-brand"><Globe size={23} strokeWidth={1.6} /><span>localeadr</span></div>
            <div className="cinematic-links">
              <a href="#featured">Directory</a>
              <a href="#marketplace">Marketplace</a>
              <a href="#insights">Insights</a>
            </div>
            <div className="cinematic-auth"><button className="cinematic-signup" onClick={() => toast("Business signup is coming soon")}>List a business</button><button className="cinematic-login liquid-glass" onClick={() => toast("Login is coming soon")}>Log in</button></div>
          </div>
        </nav>

        <div className="cinematic-center">
          <span className="cinematic-kicker">The City Experience / After dark</span>
          <h2 id="cinematic-heading" style={{ fontFamily: "'Instrument Serif', serif" }}>Built for the curious</h2>
          <div className="cinematic-form-wrap">
            <form className="cinematic-email-form liquid-glass" onSubmit={handleSubmit}>
              <input type="email" aria-label="Email address" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} />
              <button type="submit" aria-label="Subscribe"><ArrowRight size={20} /></button>
            </form>
            <p>Stay close to the latest local notes, useful places, and the small signals shaping your city.</p>
            <button className="manifesto-button liquid-glass" onClick={() => toast("Localeadr is for the people paying attention", { description: "A clearer city index is being built one place at a time." })}>Read the manifesto <ArrowRight size={16} /></button>
          </div>
        </div>

        <footer className="cinematic-socials" aria-label="Social links">
          <button className="liquid-glass" aria-label="Instagram" onClick={() => toast("Instagram is coming soon")}><Instagram size={19} /></button>
          <button className="liquid-glass" aria-label="Twitter" onClick={() => toast("Twitter is coming soon")}><Twitter size={19} /></button>
          <button className="liquid-glass" aria-label="Localeadr website" onClick={() => document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })}><Globe size={19} /></button>
        </footer>
      </div>
    </section>
  );
}
