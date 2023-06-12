import { Settings } from "./settings";
export var WorldObjectShape;
(function (WorldObjectShape) {
    WorldObjectShape[WorldObjectShape["Circle"] = 0] = "Circle";
    WorldObjectShape[WorldObjectShape["Rectangle"] = 1] = "Rectangle";
})(WorldObjectShape || (WorldObjectShape = {}));
export const toRadians = (degrees) => { return degrees * Math.PI / 180; };
export const toDegrees = (radians) => { return radians / Math.PI * 180; };
export const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
export const wrap = (num, min, max) => {
    let range = max - min;
    if (num < min) {
        num += range;
    }
    if (num > max) {
        num -= range;
    }
    return num;
};
// takes two vectors to define a rectangle and chooses a random vector within the rectangle
export const getRandomVector = (min, max) => {
    let minX = Math.min(min.x, max.x);
    let minY = Math.min(min.y, max.y);
    let maxX = Math.max(min.x, max.x);
    let maxY = Math.max(min.y, max.y);
    return new Vector2(Math.random() * (maxX - minX) + minX, Math.random() * (maxY - minY) + minY);
};
export const getUnitDirectionVectorFromRadians = (radians) => {
    return new Vector2(Math.cos(radians), Math.sin(radians));
};
export const vectorDistanceSquared = (v1, v2) => {
    return (v1.x - v2.x) * (v1.x - v2.x) + (v1.y - v2.y) * (v1.y - v2.y);
};
export const isPointColliding = (point, worldObject) => {
    if (worldObject.getShape() == WorldObjectShape.Circle) {
        let radius = worldObject.getRadius();
        let objectPosition = worldObject.getPosition();
        return vectorDistanceSquared(point, objectPosition) < radius * radius;
    }
    else if (worldObject.getShape() == WorldObjectShape.Rectangle) {
        let width = worldObject.getWidth();
        let height = worldObject.getHeight();
        let objectPosition = worldObject.getPosition();
        let minX = objectPosition.x - width / 2;
        let maxX = objectPosition.x + width / 2;
        let minY = objectPosition.y - width / 2;
        let maxY = objectPosition.y + width / 2;
        return (point.x <= maxX && point.x >= minX &&
            point.y <= maxY && point.y >= minY);
    }
    return false;
};
// export const isObjectColliding = (object1: WorldObject, object2: WorldObject) : boolean =>
// {
//     if ( object1.getShape() == WorldObjectShape.Circle)
//     {
//     }
// }
export const isOutOfBounds = (worldPos) => {
    return (worldPos.x < 0 || worldPos.x > Settings.getInstance().getWorldWidth() ||
        worldPos.y < 0 || worldPos.y > Settings.getInstance().getWorldHeight());
};
const worldWidth = Settings.getInstance().getWorldWidth();
const worldHeight = Settings.getInstance().getWorldHeight();
export class Vector2 {
    constructor(...arr) {
        this.add = (vector) => {
            this.x += vector.x;
            this.y += vector.y;
        };
        this.subtract = (vector) => {
            this.x -= vector.x;
            this.y -= vector.y;
        };
        this.multiplyScalar = (scalar) => {
            this.x *= scalar;
            this.y *= scalar;
        };
        this.getSquaredMagnitude = () => {
            return this.x * this.x + this.y * this.y;
        };
        // deep copy
        this.getVector = () => {
            return new Vector2(this.x, this.y);
        };
        this.x = 0;
        this.y = 0;
        if (arr.length == 1) {
            this.x = arr[0].x;
            this.y = arr[0].y;
        }
        if (arr.length == 2) {
            this.x = arr[0];
            this.y = arr[1];
        }
    }
}
export class WorldObject {
    constructor(spriteImageURL, worldPos, worldVelocity, worldRotation, spriteScale, rotationOffset, objectShape) {
        this.sprite = new Image();
        this.worldPositionCenter = new Vector2(); // 
        this.worldPositionTopLeftCorner = new Vector2(); // 
        this.velocity = new Vector2(); // world units per second;
        this.width = 0;
        this.height = 0;
        this.lifeCycleActive = true;
        this.isLifeCycleActive = () => { return this.lifeCycleActive; };
        this.getShape = () => { return this.shape; };
        this.getRadius = () => { return this.width / 2; };
        this.getWidth = () => { return this.width; };
        this.getHeight = () => { return this.width; };
        this.getPosition = () => { return this.worldPositionCenter; };
        this.endLifeCycle = () => { this.lifeCycleActive = false; };
        this.translate = (translationVector) => {
            this.worldPositionCenter.add(translationVector);
            this.worldPositionTopLeftCorner.add(translationVector);
        };
        this.render = (canvas) => {
            // console.log("rendering worldobject:\n" + 
            // this.worldPositionTopLeftCorner.x + " " + this.worldPositionTopLeftCorner.y + "\n" +
            // this.width + " " + this.height + "\n" + 
            // this.worldPositionCenter.x + " " + this.worldPositionCenter.y);
            let ctx = canvas.getContext("2d");
            ctx === null || ctx === void 0 ? void 0 : ctx.save();
            //ctx?.translate(this.worldPositionCenter.x, this.worldPositionCenter.y);
            ctx === null || ctx === void 0 ? void 0 : ctx.translate(this.worldPositionCenter.x, this.worldPositionCenter.y);
            ctx === null || ctx === void 0 ? void 0 : ctx.rotate(this.rotation * Math.PI / 180);
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(this.sprite, -this.width / 2, -this.height / 2, this.width, this.height);
            //ctx?.translate(-this.worldPositionCenter.x, -this.worldPositionCenter.y);
            ctx === null || ctx === void 0 ? void 0 : ctx.restore();
        };
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
            this.worldPositionTopLeftCorner = new Vector2(this.worldPositionCenter.x - this.width / 2, this.worldPositionCenter.y - this.height / 2);
        });
        (typeof objectShape !== 'undefined') ?
            this.shape = objectShape :
            this.shape = WorldObjectShape.Rectangle;
        this.lifeCycleActive = true;
    }
}
//# sourceMappingURL=types.js.map