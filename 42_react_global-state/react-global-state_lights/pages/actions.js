import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  onSetLightOn,
  onSetLightOff,
  NumberOfLight,
  lightsOnNumber,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onSetLightOn={onSetLightOn}
        onSetLightOff={onSetLightOff}
        NumberOfLight={NumberOfLight}
        lightsOnNumber={lightsOnNumber}
      />
    </>
  );
}
