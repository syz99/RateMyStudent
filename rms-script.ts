import { SVG, Group, Color } from "introcs/graphics";
import { Emoji } from "./Emoji";

function main(): void {
    let scene: Group = initScene();
}

function initScene(): Group {
    let svgTag: SVG = new SVG("artboard");
    svgTag.autoScale = true;
    let scene: Group = new Group();
    svgTag.render(scene);
    return scene;
}

main();