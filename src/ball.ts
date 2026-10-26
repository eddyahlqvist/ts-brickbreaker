import type p5 from 'p5';
import type { Paddle } from './paddle';

export class Ball {
    private x: number;
    private y: number;
    private r: number;
    private speed: number;

    constructor(x: number, y: number, r: number, speed: number) {
        this.x = x;
        this.y = y; 
        this.r = r;
        this.speed = speed;
    }

    update(): void{
        this.y += this.speed;
    }

    bounce(): void{
        this.speed = -this.speed;
    }

    checkRoofCollision(): boolean {
        return this.y - this.r <= 0;
    }

    checkPaddleCollision(p: p5, paddle: Paddle): boolean {
        // Find the closest point on the paddle to the circle's center
        const closestX = p.constrain(this.x, paddle.left, paddle.right);
        const closestY = p.constrain(this.y, paddle.top, paddle.bottom);

        // Calculate the distance from the circle center to this closest point
        const distX = this.x - closestX;
        const distY = this.y - closestY;
        const distanceSquared = (distX * distX) + (distY * distY);

        // If the distance is less than the radius, a collision happened
        return distanceSquared <= (this.r * this.r);
    }

    
    display(p: p5): void {
        p.circle(this.x, this.y, this.r * 2);
    }    
}