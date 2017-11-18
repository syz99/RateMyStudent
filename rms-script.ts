import { SVG, Group, Color, Rectangle } from "introcs/graphics";
import { Emoji } from "./Emoji";
import "introcs";

function main(): void {
    let scene: Group = initScene();

    let clicks: number = -1;
    let icon: Emoji = new Emoji(-1, new Color(0.884, 0.088, 0.088));
    scene.add(icon.shapes());
    let base: Rectangle = new Rectangle(30, 5, -15, -30);
    base.opacity = 1;

    base.onclick = function (event: MouseEvent): void {
        clicks++;
        if (clicks % 3 === 1) { // happy
            icon = new Emoji(0, new Color(0.957, 0.792, 0.098));
            scene.add(icon.shapes());
        } else if (clicks % 3 === 2) { // meh
            icon = new Emoji(-1, new Color(0.884, 0.088, 0.088));
            scene.add(icon.shapes());
        } else { // mad
            icon = new Emoji(1, new Color(0.676, 0.876, 0.249));
            scene.add(icon.shapes());
        }
    };
    scene.add(base);
}

function initScene(): Group {
    let svgTag: SVG = new SVG("artboard");
    svgTag.autoScale = true;
    let scene: Group = new Group();
    svgTag.render(scene);
    return scene;
}

main();
