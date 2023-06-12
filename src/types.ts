import { Settings } from "./settings";

export enum WorldObjectShape
{
    Circle,
    Rectangle,
}

export const toRadians = (degrees) => { return degrees * Math.PI / 180;}
export const toDegrees = (radians) => { return radians / Math.PI * 180;}
export const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
export const wrap = (num, min, max) =>
{
    let range = max - min;
    if ( num < min )
    {
        num += range;
    }

    if ( num > max )
    {
        num -= range;
    }

    return num;
}
// takes two vectors to define a rectangle and chooses a random vector within the rectangle
export const getRandomVector = (min : Vector2, max : Vector2) =>
{
    let minX = Math.min(min.x, max.x);
    let minY = Math.min(min.y, max.y);
    let maxX = Math.max(min.x, max.x);
    let maxY = Math.max(min.y, max.y);

    return new Vector2(
        Math.random() * (maxX - minX) + minX,
        Math.random() * (maxY - minY) + minY,
    )
}

export const getUnitDirectionVectorFromRadians = (radians : number) =>
{
    return new Vector2(
        Math.cos(radians), 
        Math.sin(radians));
}

export const vectorDistanceSquared = ( v1 : Vector2, v2 : Vector2 ) =>
{
    return (v1.x - v2.x) * (v1.x - v2.x) + (v1.y - v2.y) * (v1.y - v2.y);
}


export const isPointColliding = (point : Vector2, worldObject: WorldObject) : boolean =>
{
    if ( worldObject.getShape() == WorldObjectShape.Circle)
    {
        let radius = worldObject.getRadius();
        let objectPosition = worldObject.getPosition();

        return vectorDistanceSquared(point, objectPosition) < radius * radius;
    }
    else if ( worldObject.getShape() == WorldObjectShape.Rectangle)
    {
        let width = worldObject.getWidth();
        let height = worldObject.getHeight();
        let objectPosition = worldObject.getPosition();

        let minX = objectPosition.x - width/2;
        let maxX = objectPosition.x + width/2;

        let minY = objectPosition.y - width/2;
        let maxY = objectPosition.y + width/2;
        
        return ( 
            point.x <= maxX && point.x >= minX &&
            point.y <= maxY && point.y >= minY );
    }
    
    return false;
}

// export const isObjectColliding = (object1: WorldObject, object2: WorldObject) : boolean =>
// {
//     if ( object1.getShape() == WorldObjectShape.Circle)
//     {
//     }
// }

export const isOutOfBounds = (worldPos : Vector2) : boolean =>
{
    return ( 
        worldPos.x < 0 || worldPos.x > Settings.getInstance().getWorldWidth() ||
        worldPos.y < 0 || worldPos.y > Settings.getInstance().getWorldHeight());
}

const worldWidth = Settings.getInstance().getWorldWidth();
const worldHeight = Settings.getInstance().getWorldHeight();

export class Vector2 
{
    x : number;
    y : number;

    constructor();
    constructor( x : number, y : number );
    constructor( v : Vector2 );
    constructor(...arr: any[])
    {
        this.x = 0;
        this.y = 0;

        if ( arr.length == 1 )
        {
            this.x = arr[0].x;
            this.y = arr[0].y;
        }

        if ( arr.length == 2)
        {
            this.x = arr[0];
            this.y = arr[1];
        }
    }

    add(vector : Vector2) : void
    {
        this.x += vector.x;
        this.y += vector.y;
    } 

    subtract(vector : Vector2) : void
    {
        this.x -= vector.x;
        this.y -= vector.y;
    }

    multiplyScalar(scalar : number ) : void
    {
        this.x *= scalar;
        this.y *= scalar;
    }

    getSquaredMagnitude() : number
    {
        return this.x * this.x + this.y * this.y;
    }

    // deep copy
    getVector() : Vector2
    {
        return new Vector2(this.x, this.y);
    }
}

export abstract class WorldObject 
{
    protected sprite : HTMLImageElement = new Image();
    protected worldPositionCenter : Vector2 = new Vector2(); // 
    protected worldPositionTopLeftCorner : Vector2 = new Vector2(); // 
    protected velocity : Vector2 = new Vector2(); // world units per second;
    protected rotation : number; // in degrees
    protected width : number = 0;
    protected height : number = 0;
    protected scale : number;
    protected initialRotationOffset : number;
    protected lifeCycleActive = true;

    protected shape : WorldObjectShape;

    constructor (
        spriteImageURL : string, 
        worldPos? : Vector2, 
        worldVelocity? : Vector2, 
        worldRotation? : number,
        spriteScale? : number,
        rotationOffset? : number,
        objectShape? : WorldObjectShape )
    {
        (typeof worldPos !== 'undefined') ? 
        this.worldPositionCenter = worldPos : 
        this.worldPositionCenter = new Vector2(worldWidth / 2.0, worldHeight / 2.0);

        (typeof worldVelocity !== 'undefined') ? 
        this.velocity = worldVelocity : 
        this.velocity = new Vector2(0, 0);

        (typeof worldRotation !== 'undefined') ? 
        this.rotation = worldRotation : 
        this.rotation = 0;

        (typeof spriteScale !== 'undefined') ? 
        this.scale = spriteScale :
        this.scale = 1.0;

        (typeof rotationOffset !== 'undefined') ? 
        this.initialRotationOffset = rotationOffset :
        this.initialRotationOffset = 0.0;

        this.sprite.src = spriteImageURL;
        this.sprite.addEventListener('load', () => {
            // Access the width and height after the image has loaded
            this.width = this.sprite.naturalWidth * this.scale;
            this.height = this.sprite.naturalHeight * this.scale;
          
            // Use the width and height
            console.log('Width:', this.width);
            console.log('Height:', this.height);

            this.worldPositionTopLeftCorner = new Vector2(
                this.worldPositionCenter.x - this.width/2,
                this.worldPositionCenter.y - this.height/2);    
          });


        (typeof objectShape !== 'undefined') ? 
        this.shape = objectShape:
        this.shape = WorldObjectShape.Rectangle;

        this.lifeCycleActive = true;

    }

    isLifeCycleActive = () : boolean => this.lifeCycleActive;
    getShape = () : WorldObjectShape => this.shape;
    getRadius = () : number => this.width/2;
    getWidth = () : number => this.width;
    getHeight = () : number => this.height;
    getPosition = () : Vector2 => this.worldPositionCenter;
    endLifeCycle = () => this.lifeCycleActive = false;

    abstract update(): void;

    translate(translationVector : Vector2) : void
    {
        this.worldPositionCenter.add(translationVector);
        this.worldPositionTopLeftCorner.add(translationVector);
    }

    render(canvas : HTMLCanvasElement) : void
    {
        // console.log("rendering worldobject:\n" + 
        // this.worldPositionTopLeftCorner.x + " " + this.worldPositionTopLeftCorner.y + "\n" +
        // this.width + " " + this.height + "\n" + 
        // this.worldPositionCenter.x + " " + this.worldPositionCenter.y);
        let ctx = canvas.getContext("2d");
        ctx?.save();

        //ctx?.translate(this.worldPositionCenter.x, this.worldPositionCenter.y);
        ctx?.translate(this.worldPositionCenter.x, this.worldPositionCenter.y);
        ctx?.rotate(this.rotation * Math.PI / 180);
        ctx?.drawImage(this.sprite, 
            -this.width/2, -this.height/2, 
            this.width, this.height);
        //ctx?.translate(-this.worldPositionCenter.x, -this.worldPositionCenter.y);
        ctx?.restore();
    }
}
