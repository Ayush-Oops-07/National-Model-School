import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.3c0-.87.24-1.46 1.5-1.46h1.6V4.14C16.3 4.1 15.28 4 14.1 4c-2.44 0-4.1 1.49-4.1 4.22V10.5H7.5v3H10V21h3.5Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="M10.5 9.6 15 12l-4.5 2.4Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.02 2c-5.5 0-9.98 4.48-9.98 9.98 0 1.76.46 3.45 1.34 4.95L2 22l5.2-1.36a9.94 9.94 0 0 0 4.82 1.23h.01c5.5 0 9.98-4.48 9.98-9.98S17.52 2 12.02 2Zm5.86 14.1c-.25.7-1.24 1.28-1.99 1.44-.53.11-1.22.2-3.55-.76-2.98-1.23-4.9-4.24-5.05-4.44-.15-.2-1.21-1.6-1.21-3.06s.75-2.17 1.02-2.47c.25-.28.55-.35.74-.35.19 0 .37.002.54.01.17.008.4-.065.63.48.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.32-.13.62.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.66-.08.18-.21.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.73.82 2.02.97.29.15.49.22.56.35.08.13.08.75-.17 1.45Z" />
    </svg>
  );
}
