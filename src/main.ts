import p5 from 'p5';
import { Ball } from './ball';
import { Paddle } from './paddle';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const BALL_RADIUS = 10;
const PADDLE_WIDTH = 120;
const PADDLE_HEIGHT = 12;
const BALL_SPEED = 5;

new p5((p: p5) => {
    const ball = new Ball(CANVAS_WIDTH / 2, BALL_RADIUS, BALL_RADIUS, BALL_SPEED);
    const paddle = new Paddle(CANVAS_WIDTH / 2 - PADDLE_WIDTH / 2, CANVAS_HEIGHT - 40, PADDLE_WIDTH, PADDLE_HEIGHT);

    p.setup = () => {
        p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);                
    };

    p.draw = () => {
        p.background(30);
        
        paddle.update(p);
        ball.update();

        if (ball.checkPaddleCollision(p, paddle) || ball.checkRoofCollision()) {
            ball.bounce();
        }

        ball.display(p);
        paddle.display(p);
    };
});