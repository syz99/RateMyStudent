/**    
 * Author: Cynthia Dong    
 * ONYEN:    730063332
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

// TODO: Import the classes you need to work with your Emoji
import { Group, Color, Text, Ellipse, Circle, Path, Rectangle, Line, Stroke } from "introcs/graphics";

export class FaceShape {
    /**
     * The tone of the FaceShape class is a property so that you can
     * easily change the tone of an Emoji (i.e. red FaceShape tone is angry,
     * green sick, etc);
     */
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
// TODO: Eye class
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
// TODO: Mouth class
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

    constructor(i: number, emotion: Color) {
        this.faceShape = new FaceShape(emotion);
        this.mouth = new Mouth(i);
        this.leftEye = new Eye(Color.WHITE);
        this.rightEye = new Eye(Color.WHITE);
        
    }

    shapes(): Group {
        let shapes: Group = new Group();

        let fa: Group = this.faceShape.shapes();
        let mo: Group = this.mouth.shapes();
        let le: Group = this.leftEye.shapes();
        let re: Group = this.rightEye.shapes();

        fa.transform = fa.transform.translate(-15, -15);
        mo.transform = mo.transform.translate(0, 5);
        le.transform = le.transform.translate(-6, -2);
        re.transform = re.transform.translate(6, -2);

        shapes.add(fa);
        shapes.add(le);
        shapes.add(re);
        shapes.add(mo);

        return shapes;
    }
}
// let happy: Emoji = new Emoji(1, new Color(0.676, 0.876, 0.249));
// let meh: Emoji = new Emoji(0, new Color(0.957, 0.792, 0.098));
// let mad: Emoji = new Emoji(-1, new Color(0.884, 0.088, 0.088));