import { SVG, Group, Color, Rectangle } from "introcs/graphics";
import { Emoji } from "./Emoji";
import "introcs";

let searchBar: HTMLInputElement = document.getElementById("searchBar") as HTMLInputElement;

function main(): void {
    toggle(); // calls the emoji toggle function
    fakeSearch();

}

function initScene(): Group {
    let svgTag: SVG = new SVG("artboard");
    svgTag.autoScale = true;
    let scene: Group = new Group();
    svgTag.render(scene);
    return scene;
}

function toggle(): void {
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

function fakeSearch(): void {
    let name1: string = "Cynthia Dong";
    let name2: string = "Samuel Zhang";
    let count: number = 0;

    if (count < name1.length) {
        searchBar.onkeyup = function(event: KeyboardEvent): void {
            searchBar.value = name1.slice(0, searchBar.value.length);
            count++;
        };
    } else {
        searchBar.value = name1;
    }

    searchBar.onkeyup = function(event: KeyboardEvent): void {
        if (event.keyCode === 13) {
            // 
        }
    };
}

main();
