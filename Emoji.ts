import { Group, Color, Text, Ellipse, Circle, Path, Rectangle, Line, Stroke } from "introcs/graphics";

export class FaceShape {
    tone: Color;

    constructor(tone: Color) {
        this.tone = tone;
    }

    shapes(): Group {
        let shapes: Group = new Group();

        let face: Rectangle = new Rectangle(30, 30, 0, 0);
        face.fill = this.tone;
        face.strokeOpacity = 0;

        shapes.add(face);
        return shapes;
    }
}

export class Corner {
    tone: Color;

    constructor(tone: Color) {
        this.tone = tone;
    }

    shapes(): Group {
        let shapes: Group = new Group();

        let corner: Rectangle = new Rectangle(9, 9, 0.7, 9.6);
        corner.fill = this.tone;
        corner.strokeOpacity = 0;

        shapes.add(corner);
        return shapes;
    }
}

export class Eye {
    irisColor: Color;

    constructor(irisColor: Color) {
        this.irisColor = irisColor;
    }

    shapes(): Group {
        let shapes: Group = new Group();

        let eyeball: Ellipse = new Ellipse(0, 0, 3 * 0.7, 4.7 * 0.7);
        eyeball.fill = this.irisColor;
        eyeball.strokeOpacity = 0;

        shapes.add(eyeball);
        return shapes;
    }
}

export class Mouth {
    invert: number;

    constructor (i: number) {
        this.invert = i;
    }

    shapes(): Group {
        let shapes: Group = new Group();

        let smile: Path = new Path(-5, 0);
        smile.quadraticCurveTo(0, this.invert * 3, 5, 0);
        smile.fill = Color.WHITE;
        smile.stroke = new Stroke(new Color(1, 1, 1));

        shapes.add(smile);
        return shapes;
    }
}

export class Emoji {
    faceShape: FaceShape;
    mouth: Mouth;
    leftEye: Eye;
    rightEye: Eye;
    invert: number;
    corner: Corner;

    constructor(i: number, emotion: Color) {
        this.faceShape = new FaceShape(emotion);
        this.corner = new Corner(emotion);
        this.mouth = new Mouth(i);
        this.leftEye = new Eye(Color.WHITE);
        this.rightEye = new Eye(Color.WHITE);
    }

    shapes(): Group {
        let shapes: Group = new Group();

        let fa: Group = this.faceShape.shapes();
        let c: Group = this.corner.shapes();
        let mo: Group = this.mouth.shapes();
        let le: Group = this.leftEye.shapes();
        let re: Group = this.rightEye.shapes();

        fa.transform = fa.transform.translate(-15, -15);
        c.transform = c.transform.rotate(0.9);
        mo.transform = mo.transform.translate(0, 5);
        le.transform = le.transform.translate(-6, -2);
        re.transform = re.transform.translate(6, -2);

        shapes.add(fa);
        shapes.add(c);
        shapes.add(le);
        shapes.add(re);
        shapes.add(mo);

        return shapes;
    }
}
// let happy: Emoji = new Emoji(1, new Color(0.676, 0.876, 0.249));
// let meh: Emoji = new Emoji(0, new Color(0.957, 0.792, 0.098));
// let mad: Emoji = new Emoji(-1, new Color(0.884, 0.088, 0.088));