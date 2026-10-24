import type p5 from 'p5';
import type { Paddle } from './paddle';

export class Ball {
    private x: number;
    private y: number;
    private r: number;

    constructor(x: number, y: number, r: number) {
        this.x = x;
        this.y = y; 
        this.r = r;
    }

    update(p: p5): void{
        // this.y += 5;
        this.x = p.mouseX;
        this.y = p.mouseY;
    }

    checkPaddleCollision(paddle: Paddle): boolean {
        return this.y + this.r >= paddle.top &&
            this.y - this.r <= paddle.bottom &&
            this.x + this.r >= paddle.left &&
            this.x - this.r <= paddle.right;
    }
    
    display(p: p5): void {
        p.circle(this.x, this.y, this.r * 2);
    }    
}