import { Vector2, WorldObject, WorldObjectShape } from "./types";
import explosionImage1 from './assets/explosion1.png';
import explosionImage2 from './assets/explosion2.png';
import { Settings } from "./settings";
let explosionImages = [
    explosionImage1,
    explosionImage2,
];
export class ExplosionFactory {
    createExplosion(worldPos, size) {
        let explosionImageIndex = Math.floor(Math.random() * explosionImages.length);
        return new Explosion(explosionImages[explosionImageIndex], worldPos, new Vector2(0, 0), Math.floor(Math.random() * 360), 1.5 * Settings.getInstance().getGameScale() * (size / Settings.getInstance().getMaxAsteroidSize()), 0, WorldObjectShape.Circle);
    }
}
export class Explosion extends WorldObject {
    constructor(spriteImageURL, worldPos, worldVelocity, worldRotation, spriteScale, rotationOffset, objectShape) {
        super(spriteImageURL, worldPos, worldVelocity, worldRotation, spriteScale, rotationOffset, objectShape);
        this.update = () => {
            this.lifeTime -= 1.0 / 60.0;
            if (this.lifeTime < 0) {
                this.endLifeCycle();
            }
        };
        this.lifeTime = 0.6;
    }
}
//# sourceMappingURL=explosion.js.map