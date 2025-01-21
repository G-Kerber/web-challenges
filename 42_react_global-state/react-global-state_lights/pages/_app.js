import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: "1", name: "Living Room", isOn: false },
  { id: "2", name: "Kitchen", isOn: false },
  { id: "3", name: "Bedroom", isOn: false },
  { id: "4", name: "Bathroom", isOn: false },
  { id: "5", name: "Garage", isOn: false },
  { id: "6", name: "Porch", isOn: false },
  { id: "7", name: "Garden", isOn: false },
  { id: "8", name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  const lightsOnNumber = lights.filter((light) => light.isOn === true).length;
  const NumberOfLight = lights.length;

  function toggleLight(lightId) {
    setLights((lights) =>
      lights.map((light) =>
        light.id === lightId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleAllLightOn() {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
  }

  function handleAllLightOff() {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
  }

  return (
    <Layout isDimmed={lightsOnNumber === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        lightsOnNumber={lightsOnNumber}
        onSetLightOn={handleAllLightOn}
        onSetLightOff={handleAllLightOff}
        NumberOfLight={NumberOfLight}
      />
    </Layout>
  );
}
