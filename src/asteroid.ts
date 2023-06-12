import { Vector2, WorldObject, WorldObjectShape, getRandomVector, getUnitDirectionVectorFromRadians, isOutOfBounds, toRadians, wrap } from "./types";

import asteroidImage1 from './assets/asteroid1.png';
import asteroidImage2 from './assets/asteroid2.png';
import asteroidImage3 from './assets/asteroid3.png';
import { Settings } from "./settings";

let asteroidImages : string[] = [
    asteroidImage1,
    asteroidImage2,
    asteroidImage3,]

export class AsteroidFactory
{
    worldPosTopLeft = new Vector2(0, 0);
    worldPosBottomRight = new Vector2(
        Settings.getInstance().getWorldWidth(),
        Settings.getInstance().getWorldHeight());

    createAsteroid = (size? : number, worldPos? : Vector2) : Asteroid =>
    {
        let asteroidImageIndex = Math.floor(Math.random() * asteroidImages.length);
        let newWorldPos : Vector2;

        (typeof worldPos !== 'undefined') ? 
        newWorldPos = worldPos :
        newWorldPos = getRandomVector(this.worldPosTopLeft, this.worldPosBottomRight);


        let newSize : number;
        (typeof size !== 'undefined') ? 
        newSize = size :
        newSize = Settings.getInstance().getMaxAsteroidSize();
        
        console.log("newWorldPos: ", newWorldPos);

        let worldRotation = Math.floor(Math.random() * 360);
        let rotationOffset = 0;
        let worldVelocity = getUnitDirectionVectorFromRadians(toRadians(wrap(worldRotation + rotationOffset, 0, 360)));

        return new Asteroid(
            asteroidImages[asteroidImageIndex],
            newWorldPos,
            worldVelocity,
            worldRotation,
            Settings.getInstance().getGameScale() * (newSize/Settings.getInstance().getMaxAsteroidSize()),
            rotationOffset,
            WorldObjectShape.Circle,
            newSize
        )
    }
}

export class Asteroid extends WorldObject
{
    speed : number; 
    size : number; 
    rotationSpeed : number;

    constructor(
        spriteImageURL : string,
        worldPos? : Vector2, 
        worldVelocity? : Vector2, 
        worldRotation? : number,
        spriteScale? : number,
        rotationOffset? : number,
        objectShape? : WorldObjectShape,
        size? : number )
    {
        super(spriteImageURL, worldPos, worldVelocity, worldRotation, spriteScale, rotationOffset, objectShape);
    
        let maxSpeed = Settings.getInstance().getMaxAsteroidSpeed();
        let minSpeed = Settings.getInstance().getMinAsteroidSpeed();

        this.speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        console.log("constructing asteroid with speed: " + this.speed);
        (typeof size !== 'undefined') ? 
        this.size = size :
        this.size = Settings.getInstance().getMaxAsteroidSize();

        this.rotationSpeed = Math.random() * Settings.getInstance().getMaxAsteroidRotationSpeed() - 2.0 * Settings.getInstance().getMaxAsteroidRotationSpeed();
    }
    
    splitAsteroid = () : Asteroid[] =>
    {
        let asteroids : Asteroid[] = [];
        this.endLifeCycle();
        if ( this.size > 1 )
        {
            console.log("random 1: " + Math.random());
            console.log("random 2: " + Math.random());

            let asteroidFactory = new AsteroidFactory();

            let newPosMin = new Vector2(this.getPosition());
            newPosMin.subtract(new Vector2(this.getWidth()/2, this.getHeight()/2));
            let newPosMax = new Vector2(this.getPosition());
            newPosMax.add(new Vector2(this.getWidth()/2, this.getHeight()/2));

            asteroids.push(asteroidFactory.createAsteroid(this.size - 1, 
                getRandomVector(newPosMin, newPosMax)));
            asteroids.push(asteroidFactory.createAsteroid(this.size - 1, 
                getRandomVector(newPosMin, newPosMax)));
            }
        return asteroids;
    }

    update = () : void => 
    {
        this.rotation += this.rotationSpeed;

        let translateVector = this.velocity.getVector();
        translateVector.multiplyScalar(this.speed);
        this.translate(translateVector);

        if ( isOutOfBounds(this.worldPositionCenter))
        {
            this.worldPositionCenter.x = wrap(this.worldPositionCenter.x, 0, Settings.getInstance().getWorldWidth());
            this.worldPositionCenter.y = wrap(this.worldPositionCenter.y, 0, Settings.getInstance().getWorldHeight());
        }
    }
}