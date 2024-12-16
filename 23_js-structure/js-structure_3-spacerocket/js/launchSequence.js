// Implement the launch sequence function here and export it as the default export.

import { getNewRocket } from "./core/rocket.js";
import { loadPayload } from "./core/load.js";
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

export default function launch() {
  // step 0: own rocket
  getNewRocket();
  // wrong way : const rocket = getNewRocket(); => erzeugt eine neue Variable, die sich mit der angesprochenen Rakete in Gehege kommt. Fehlersuche hat mich 20 von 33 Versuche gekostet.

  // step 1: load payload
  loadPayload(NFSAT);
  loadPayload(FISHSAT);

  // step 2: fueling
  fuel();

  // step 3: countdown
  while (rocket.countdown < rocket.requiredCountdown) {
    countdown();
  }

  // step 4: liftoff
  liftoff();

  // step 5: deploy payload
  deployPayload();
}
