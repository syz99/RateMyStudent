import { SVG, Group, Color, Rectangle } from "introcs/graphics";
import { Emoji } from "./Emoji";
import "introcs";

function main(): void {
    let scene: Group = initScene();

    let count: number = 0;
    let happy: Emoji = new Emoji(1, new Color(0.676, 0.876, 0.249));
    let base: Rectangle = new Rectangle(20, 20, -15, -30);
    // base.opacity = 0;
    base.onclick = function (event: MouseEvent): void {
        count++;
        if (count % 3 === 1) {
            happy = new Emoji(0, new Color(0.957, 0.792, 0.098));
            scene.add(happy.shapes());
        } else if (count % 3 === 2) {
            happy = new Emoji(-1, new Color(0.884, 0.088, 0.088));
            scene.add(happy.shapes());
        } else {
            happy = new Emoji(1, new Color(0.676, 0.876, 0.249));
            scene.add(happy.shapes());
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
