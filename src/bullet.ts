import { WorldObject, isOutOfBounds, wrap } from './types.js'
import { Vector2 } from './types.js'
import { Settings } from './settings.js';
import { clamp } from './types.js';
import { toRadians } from './types.js';

//import playerImage from './assets/asteroid1.png'
import bulletImage from './assets/bullet.png';

export class Bullet extends WorldObject
{
    lifeTime = Settings.getInstance().getBulletLifeTime();
    maxSpeed = Settings.getInstance().getBulletMaxSpeed();

    constructor(
        worldPos? : Vector2,
        worldVelocity? : Vector2, 
        worldRotation? : number,
        spriteScale? : number)
    {
        super(bulletImage, worldPos, worldVelocity, worldRotation, spriteScale, 270);
    }

    update() : void
    {
        //console.log("lifetime " + this.lifeTime + "active: " + this.lifeCycleActive);
        this.lifeTime -= 1/60;

        if ( this.lifeTime < 0 )
        {
            this.lifeCycleActive = false;
        }

        let translateVector = this.velocity.getVector();
        translateVector.multiplyScalar(this.maxSpeed);
        this.translate(translateVector);

        if ( isOutOfBounds(this.worldPositionCenter))
        {
            this.worldPositionCenter.x = wrap(this.worldPositionCenter.x, 0, Settings.getInstance().getWorldWidth());
            this.worldPositionCenter.y = wrap(this.worldPositionCenter.y, 0, Settings.getInstance().getWorldHeight());
        }
    }
}
