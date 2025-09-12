"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  start?: number;
  durationMs?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function CountUp({
  end,
  start = 0,
  durationMs = 1500,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const [value, setValue] = useState<number>(start);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const startTsRef = useRef<number | null>(null);

  const formatter = useMemo(() => {
    return new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }, [decimals]);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startTsRef.current = null;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (ts: number) => {
      if (startTsRef.current === null) startTsRef.current = ts;
      const elapsed = ts - (startTsRef.current ?? ts);
      const progress = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(progress);
      const nextValue = start + (end - start) * eased;
      setValue(nextValue);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hasStarted, start, end, durationMs]);

  const display = useMemo(() => {
    return `${prefix}${formatter.format(value)}${suffix}`;
  }, [value, formatter, prefix, suffix]);

  return (
    <span ref={elementRef} className={className}>{display}</span>
  );
}


