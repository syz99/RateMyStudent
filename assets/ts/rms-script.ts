import "introcs";
import { SVG, Group, Color, Rectangle } from "introcs/graphics";
import { Emoji } from "./Emoji";

const searchBar: HTMLInputElement = document.getElementById("searchBar") as HTMLInputElement;

function main(): void {
    toggle(); // calls the emoji toggle function
    // pageSwitch();
    fakeSearch();
}

// function pageSwitch(): void {
//     searchBar.onsubmit = function(event: KeyboardEvent): void {
//         alert("hey");
//     };
// }

function toggle(): void {
    let scene: Group = initScene();

    let clicks: number = -1;
    let icon: Emoji = new Emoji(-1, new Color(0.884, 0.088, 0.088));
    scene.add(icon.shapes());

    document.onclick = function(event: MouseEvent): void {
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
}

function fakeSearch(): void {
    let name1: string = "Cynthia Dong";
    let name2: string = "Samuel Zhang";
    let name: string = "";
    let count: number = 0;

    if (window.location.href === "http://localhost:3000/RateMyStudent/assets/html/page2.html") {
        name = name2;
    } else {
        name = name1;
    }

    if (count < name.length) {
        searchBar.onkeyup = function(event: KeyboardEvent): void {
            searchBar.value = name.slice(0, searchBar.value.length);
            count++;
        };
    } else {
        searchBar.value = name;
    }
}

function initScene(): Group {
    let svgTag: SVG = new SVG("artboard");
    svgTag.autoScale = true;
    let scene: Group = new Group();
    svgTag.render(scene);
    return scene;
}

main();
