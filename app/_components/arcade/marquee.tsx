type MarqueeProps = {
  playerStatus: string;
  ruffleReady: boolean;
};

export function Marquee({ playerStatus, ruffleReady }: MarqueeProps) {
  return (
    <section className="marquee">
      <div className="brand-lockup">
        <img className="brand-logo" src="/icons/flashback-machine-192.png" alt="FlashBack Machine arcade logo" width="96" height="96" />
        <div>
          <p className="eyebrow">CLASSIC FLASH ARCADE</p>
          <h1>FlashBack Machine</h1>
        </div>
      </div>
      <div className="marquee-status">
        <span>{ruffleReady ? "RUFFLE ONLINE" : "RUFFLE BOOTING"}</span>
        <strong>{playerStatus}</strong>
      </div>
    </section>
  );
}
