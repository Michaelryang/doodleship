// let worldWidth = 720;
// let worldHeight = 1080;
// let gameScale = 0.25;
// let turnLeftKey = 'a';
// let turnRightKey = 'd';
// singleton
export class Settings {
    constructor() {
        this.worldWidth = 1080;
        this.worldHeight = 720;
        this.gameScale = 0.5;
        this.turnLeftKey = 'a';
        this.turnRightKey = 'd';
        this.accelerationKey = ' ';
        this.fireKey = 'Enter';
        this.playerMaxSpeed = 5; // max units per frame
        this.playerAcceleration = 0.04; // percentage per frame of max speed
        this.playerRotationSpeed = 4; // degrees per frame
        this.bulletFireInterval = 0.25; // in seconds
        this.bulletLifetime = 2; // in seconds
        this.bulletMaxSpeed = 15; // max units per frame
        this.NUM_BEGINNING_ASTEROIDS = 6;
        this.maxAsteroidSpeed = 1.5;
        this.minAsteroidSpeed = 0.5;
        this.maxAsteroidSize = 3;
        this.maxAsteroidRotationSpeed = 1;
        this.getWorldWidth = () => { return this.worldWidth; };
        this.getWorldHeight = () => { return this.worldHeight; };
        this.getGameScale = () => { return this.gameScale; };
        this.getTurnLeftKey = () => { return this.turnLeftKey; };
        this.getTurnRightKey = () => { return this.turnRightKey; };
        this.getAccelerationKey = () => { return this.accelerationKey; };
        this.getFireKey = () => { return this.fireKey; };
        this.getPlayerMaxSpeed = () => { return this.playerMaxSpeed; };
        this.getPlayerAcceleration = () => { return this.playerAcceleration; };
        this.getPlayerRotationSpeed = () => { return this.playerRotationSpeed; };
        this.getBulletFireInterval = () => { return this.bulletFireInterval; };
        this.getBulletMaxSpeed = () => { return this.bulletMaxSpeed; };
        this.getBulletLifeTime = () => { return this.bulletLifetime; };
        this.getNumBeginningAsteroids = () => { return this.NUM_BEGINNING_ASTEROIDS; };
        this.getMaxAsteroidSpeed = () => { return this.maxAsteroidSpeed; };
        this.getMinAsteroidSpeed = () => { return this.minAsteroidSpeed; };
        this.getMaxAsteroidSize = () => { return this.maxAsteroidSize; };
        this.getMaxAsteroidRotationSpeed = () => { return this.maxAsteroidRotationSpeed; };
    }
    static getInstance() {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    }
}
//# sourceMappingURL=settings.js.map