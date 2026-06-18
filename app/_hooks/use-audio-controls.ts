"use client";

import { useEffect, useMemo, useState } from "react";
import { AUDIO_MUTED_KEY, AUDIO_VOLUME_KEY } from "../_lib/constants";

const DEFAULT_VOLUME = 70;

const clampVolume = (value: number) => Math.min(100, Math.max(0, Math.round(value)));

export function useAudioControls() {
  const [volume, setVolumeState] = useState(DEFAULT_VOLUME);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const storedVolume = Number(window.localStorage.getItem(AUDIO_VOLUME_KEY));
    const storedMuted = window.localStorage.getItem(AUDIO_MUTED_KEY);

    if (Number.isFinite(storedVolume)) {
      setVolumeState(clampVolume(storedVolume));
    }

    setMuted(storedMuted === "true");
  }, []);

  const effectiveVolume = useMemo(() => (muted ? 0 : volume), [muted, volume]);

  const setVolume = (nextVolume: number) => {
    const clamped = clampVolume(nextVolume);

    setVolumeState(clamped);
    window.localStorage.setItem(AUDIO_VOLUME_KEY, String(clamped));

    if (clamped > 0 && muted) {
      setMuted(false);
      window.localStorage.setItem(AUDIO_MUTED_KEY, "false");
    }
  };

  const toggleMuted = () => {
    setMuted((current) => {
      const next = !current;
      window.localStorage.setItem(AUDIO_MUTED_KEY, String(next));

      return next;
    });
  };

  return {
    effectiveVolume,
    muted,
    setVolume,
    toggleMuted,
    volume,
  };
}
