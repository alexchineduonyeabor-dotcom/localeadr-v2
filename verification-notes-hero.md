# Cinematic Hero Verification

The updated site renders the full-screen video hero with the requested crop, dark overlay, live video background, Instrument Serif heading, liquid-glass email bar, manifesto CTA, and social icon footer. The single top masthead remains readable on desktop and mobile, and the desktop rail visibly carries LOCAL / VERIFIED / NOW alongside the Localeadr mark.

The mobile screenshot confirms the heading wraps cleanly, the email form remains usable, and the social controls stay within the viewport. The live browser smoke test confirmed the empty subscription submission produces a concise toast: “Enter an email to join the signal.” The preserved Localeadr directory and search input remain present below the new hero.

`pnpm check` and `pnpm build` pass. The build emits only the existing bundle-size advisory.
