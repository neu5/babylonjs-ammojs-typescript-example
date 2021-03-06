import {
  ArcRotateCamera,
  Engine,
  HemisphericLight,
  Scene,
  Vector3,
} from "@babylonjs/core";

import Ammo from "ammojs-typed";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

(async () => {
  const engine: Engine = new Engine(canvas);
  await Ammo();
  const scene = new Scene(engine);

  const camera = new ArcRotateCamera(
    "camera",
    -Math.PI / 2,
    Math.PI / 3,
    14,
    new Vector3(0, 0, 0)
  );

  camera.attachControl(canvas, true);
  const light = new HemisphericLight("light", new Vector3(1, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  engine.runRenderLoop(() => {
    scene.render();
  });
})();
