import type { ServiceIcon as Name } from "@/data/services";

const paths: Record<Name, React.ReactNode> = {
  web: (<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></>),
  mobile: (<><rect x="7" y="2.5" width="10" height="19" rx="2" /><path d="M11 18.5h2" /></>),
  design: (<><path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 013 3L8 19l-4 1z" /><path d="M14 7l3 3" /></>),
  software: (<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14" />),
  cloud: (<path d="M7 18a4 4 0 01-.5-7.97A5.5 5.5 0 0117 9.5a4.25 4.25 0 01.5 8.5H7z" />),
  ai: (<><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" /><circle cx="12" cy="12" r="2.5" /></>),
};

export function ServiceIcon({ name }: { name: Name }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
