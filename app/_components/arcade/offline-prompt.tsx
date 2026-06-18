type OfflinePromptProps = {
  cacheBusy: boolean;
  canInstall: boolean;
  gameCount: number;
  onCacheLibrary: () => void;
  onDismiss: () => void;
  onInstall: () => void;
  visible: boolean;
};

export function OfflinePrompt({ cacheBusy, canInstall, gameCount, onCacheLibrary, onDismiss, onInstall, visible }: OfflinePromptProps) {
  if (!visible) {
    return null;
  }

  return (
    <section className="offline-prompt" aria-label="Offline arcade setup">
      <button className="offline-close" onClick={onDismiss} type="button" aria-label="Dismiss offline setup prompt">
        x
      </button>
      <div>
        <span>offline mode</span>
        <strong>keep the arcade ready</strong>
        <p>Install RetroNet and cache the library so these cabinets still boot when your internet drops.</p>
      </div>
      <div className="offline-actions">
        <button disabled={!canInstall} onClick={onInstall} type="button">
          install
        </button>
        <button disabled={cacheBusy || gameCount === 0} onClick={onCacheLibrary} type="button">
          cache all
        </button>
        <button onClick={onDismiss} type="button">
          later
        </button>
      </div>
    </section>
  );
}
