import { WorldObject, getUnitDirectionVectorFromRadians, isOutOfBounds, wrap } from './types.js'
import { Vector2 } from './types.js'
import { Settings } from './settings.js';
import { clamp } from './types.js';
import { toRadians } from './types.js';
import { Bullet } from './bullet.js';

//import playerImage from './assets/asteroid1.png'
import playerImage from './assets/player.png';



// const width = Settings.getInstance().getWorldWidth();
// const height = Settings.getInstance().getWorldHeight();
const turnLeftKey = Settings.getInstance().getTurnLeftKey();
const turnRightKey = Settings.getInstance().getTurnRightKey();
const accelerationKey = Settings.getInstance().getAccelerationKey();
const fireKey = Settings.getInstance().getFireKey();

export class Player extends WorldObject
{
    isTurningLeft = false;
    isTurningRight = false;
    
    isAccelerating = false;
    speedMultiplier = 0.0; // this is a multiplier of the velocity vector
    maxSpeed = Settings.getInstance().getPlayerMaxSpeed();
    acceleration = Settings.getInstance().getPlayerAcceleration();

    isFiring = false;
    canFireBullet = false;
    bulletFireInterval = Settings.getInstance().getBulletFireInterval();
    bulletFireTimer = 0.0; // in seconds
    
    constructor(
        worldPos? : Vector2,
        worldVelocity? : Vector2, 
        worldRotation? : number,
        spriteScale? : number)
    {
        console.log("listeners");
        addEventListener('keydown', (e) => {this.keyPressed(e)} )
        addEventListener('keyup', (e) => {this.keyReleased(e)}); 

        super(playerImage, worldPos, worldVelocity, worldRotation, spriteScale, 270);
    }

    keyPressed(e : KeyboardEvent) : void
    {
        //console.log("(e as KeyboardEvent).key: " + (e as KeyboardEvent).key);
        //console.log("fireKey: " + fireKey); 

        if ((e as KeyboardEvent).key === turnLeftKey || 
            (e as KeyboardEvent).key === turnLeftKey.toUpperCase()) 
        {
            if ( !this.isTurningLeft)
            {
                this.isTurningLeft = true;
                //console.log("left key pressed");
            }
        }

        if ((e as KeyboardEvent).key === turnRightKey || 
            (e as KeyboardEvent).key === turnRightKey.toUpperCase()) 
        {
            if ( !this.isTurningRight)
            {
                this.isTurningRight = true;
                //console.log("right key pressed");
            }
        }

        if ((e as KeyboardEvent).key === accelerationKey || 
            (e as KeyboardEvent).key === accelerationKey.toUpperCase()) 
        {
            if ( !this.isAccelerating)
            {
                this.isAccelerating = true;
                //console.log("right key pressed");
            }
        }

        if ((e as KeyboardEvent).key === fireKey || 
            (e as KeyboardEvent).key === fireKey.toUpperCase()) 
        {
            if ( !this.isFiring)
            {
                this.isFiring = true;
                //console.log("fire key pressed");
            }
        }
    }

    keyReleased(e : KeyboardEvent) : void
    {
        if ((e as KeyboardEvent).key === turnLeftKey || 
            (e as KeyboardEvent).key === turnLeftKey.toUpperCase()) 
        {
            this.isTurningLeft = false;
            //console.log("left key released");
        }

        if ((e as KeyboardEvent).key === turnRightKey || 
            (e as KeyboardEvent).key === turnRightKey.toUpperCase()) 
        {
            this.isTurningRight = false;      
            //console.log("right key released");
        }

        if ((e as KeyboardEvent).key === accelerationKey || 
            (e as KeyboardEvent).key === accelerationKey.toUpperCase()) 
        {
            this.isAccelerating = false;      
            //console.log("right key released");
        }

        if ((e as KeyboardEvent).key === fireKey || 
            (e as KeyboardEvent).key === fireKey.toUpperCase()) 
        {
            this.isFiring = false;      
            //console.log("right key released");
        }
    }

    tryFireBullet = () : Bullet | null =>
    {
        if ( this.canFireBullet)
        {
            console.log("bullet fired");
            this.canFireBullet = false;
            this.bulletFireTimer = 0.0;
            return new Bullet(this.worldPositionCenter.getVector(), 
            this.velocity.getVector(), this.rotation, this.scale)
        }

        return null;
    }

    update = () : void =>
    {
        if ( this.isTurningLeft)
        {
            this.rotation -= Settings.getInstance().getPlayerRotationSpeed();
        }

        if ( this.isTurningRight)
        {
            this.rotation += Settings.getInstance().getPlayerRotationSpeed();
        }

        this.rotation = wrap(this.rotation, 0, 360);
        
        if ( this.isAccelerating )
        {
            this.speedMultiplier += this.acceleration;
        }
        else
        {
            this.speedMultiplier -= this.acceleration;
        }

        if ( this.isFiring)
        {
            this.bulletFireTimer += 1.0/60.0;
            //console.log("bullet timer" + this.bulletFireTimer);

            if ( this.bulletFireTimer > this.bulletFireInterval)
            {
                this.canFireBullet = true;
            }
        }

        this.speedMultiplier = clamp(this.speedMultiplier, 0, 1.0);
        this.velocity = getUnitDirectionVectorFromRadians(toRadians(wrap(this.rotation + this.initialRotationOffset, 0, 360)));
        
        //console.log("velocity: " + this.velocity.x + " " + this.velocity.y);

        let translateVector = new Vector2(this.velocity.getVector());
        translateVector.multiplyScalar(this.speedMultiplier * this.maxSpeed);

        //console.log("translateVector: " + translateVector.x + " " + translateVector.y);
        // vector is a unit vector in the direction of rotation.

        this.translate(translateVector);

        if ( isOutOfBounds(this.worldPositionCenter))
        {
            this.worldPositionCenter.x = wrap(this.worldPositionCenter.x, 0, Settings.getInstance().getWorldWidth());
            this.worldPositionCenter.y = wrap(this.worldPositionCenter.y, 0, Settings.getInstance().getWorldHeight());
        }
    }
}