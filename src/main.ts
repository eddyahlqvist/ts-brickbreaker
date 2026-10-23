import p5 from 'p5';
import { Ball } from './ball';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;

new p5((p: p5) => {
    let ballRadius = 10;

    const ball = new Ball(CANVAS_WIDTH / 2, 0, ballRadius * 2);

    p.setup = () => {
        p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);                
    };

    p.draw = () => {
        p.background(30);
        ball.update();
        ball.display(p);
    };

});