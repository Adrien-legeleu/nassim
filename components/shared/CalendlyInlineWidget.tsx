// components/shared/CalendlyInlineWidget.tsx
'use client';

import { useEffect, useRef } from 'react';

// ✅ Typage global
declare global {
  interface CalendlyNamespace {
    initInlineWidget: (options: {
      url: string;
      parentElement: HTMLElement;
      prefill?: Record<string, unknown>;
      utm?: Record<string, unknown>;
    }) => void;
  }

  interface Window {
    Calendly?: CalendlyNamespace;
  }
}

type CalendlyInlineWidgetProps = {
  url: string;
  height?: number;
};

export function CalendlyInlineWidget({
  url,
  height = 700,
}: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const initWidget = () => {
      if (!window.Calendly || !containerRef.current) return;
      if (initializedRef.current) return; // 🔒 évite la double init (StrictMode)

      initializedRef.current = true;
      containerRef.current.innerHTML = ''; // reset pour être sûr
      window.Calendly.initInlineWidget({
        url,
        parentElement: containerRef.current,
        prefill: {},
        utm: {},
      });
    };

    if (window.Calendly) {
      initWidget();
    } else {
      const scriptId = 'calendly-widget-script';
      let script = document.getElementById(
        scriptId
      ) as HTMLScriptElement | null;

      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = initWidget;
        document.body.appendChild(script);
      } else {
        // script déjà là → on tente l’init
        if (script.getAttribute('data-loaded') === 'true') {
          initWidget();
        } else {
          script.addEventListener('load', initWidget, { once: true });
        }
      }

      script?.setAttribute('data-loaded', 'true');
    }

    return () => {
      initializedRef.current = false;
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{ minWidth: '320px', height: `${height}px` }}
    />
  );
}
