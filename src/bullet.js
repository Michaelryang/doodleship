import { WorldObject, isOutOfBounds, wrap } from './types.js';
import { Settings } from './settings.js';
//import playerImage from './assets/asteroid1.png'
import bulletImage from './assets/bullet.png';
export class Bullet extends WorldObject {
    constructor(worldPos, worldVelocity, worldRotation, spriteScale) {
        super(bulletImage, worldPos, worldVelocity, worldRotation, spriteScale, 270);
        this.lifeTime = Settings.getInstance().getBulletLifeTime();
        this.maxSpeed = Settings.getInstance().getBulletMaxSpeed();
        this.update = () => {
            //console.log("lifetime " + this.lifeTime + "active: " + this.lifeCycleActive);
            this.lifeTime -= 1 / 60;
            if (this.lifeTime < 0) {
                this.lifeCycleActive = false;
            }
            let translateVector = this.velocity.getVector();
            translateVector.multiplyScalar(this.maxSpeed);
            this.translate(translateVector);
            if (isOutOfBounds(this.worldPositionCenter)) {
                this.worldPositionCenter.x = wrap(this.worldPositionCenter.x, 0, Settings.getInstance().getWorldWidth());
                this.worldPositionCenter.y = wrap(this.worldPositionCenter.y, 0, Settings.getInstance().getWorldHeight());
            }
        };
    }
}
//# sourceMappingURL=bullet.js.map