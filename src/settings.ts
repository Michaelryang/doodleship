// let worldWidth = 720;
// let worldHeight = 1080;
// let gameScale = 0.25;

// let turnLeftKey = 'a';
// let turnRightKey = 'd';

// singleton
export class Settings
{
    private worldWidth = 1080;
    private worldHeight = 720;
    private gameScale = 0.5;
    
    private turnLeftKey = 'a';
    private turnRightKey = 'd';
    private accelerationKey = ' ';
    private fireKey = 'Enter';

    private playerMaxSpeed = 5; // max units per frame
    private playerAcceleration = 0.04; // percentage per frame of max speed
    private playerRotationSpeed = 4; // degrees per frame
    private bulletFireInterval = 0.25; // in seconds

    private bulletLifetime = 2; // in seconds
    private bulletMaxSpeed = 15; // max units per frame

    private static instance : Settings;

    private NUM_BEGINNING_ASTEROIDS = 6;
    private maxAsteroidSpeed = 1.5;
    private minAsteroidSpeed = 0.5;
    private maxAsteroidSize = 3;

    private maxAsteroidRotationSpeed = 1;

    public static getInstance(): Settings {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }

        return Settings.instance;
    }

    getWorldWidth = () : number => { return this.worldWidth; }
    getWorldHeight = () : number => { return this.worldHeight; }
    getGameScale = () : number => { return this.gameScale; }
    getTurnLeftKey = () : string => { return this.turnLeftKey; }
    getTurnRightKey = () : string => { return this.turnRightKey; }
    getAccelerationKey = () : string => { return this.accelerationKey; }
    getFireKey = () : string => { return this.fireKey; }
    getPlayerMaxSpeed = () : number => { return this.playerMaxSpeed; }
    getPlayerAcceleration = () : number => { return this.playerAcceleration; }
    getPlayerRotationSpeed = () : number => { return this.playerRotationSpeed; }

    getBulletFireInterval = () : number => { return this.bulletFireInterval; }
    getBulletMaxSpeed = () : number => { return this.bulletMaxSpeed; }

    getBulletLifeTime = () : number => { return this.bulletLifetime; }

    getNumBeginningAsteroids = () : number => { return this.NUM_BEGINNING_ASTEROIDS; }
    getMaxAsteroidSpeed = () : number => { return this.maxAsteroidSpeed; }
    getMinAsteroidSpeed = () : number => { return this.minAsteroidSpeed; }
    getMaxAsteroidSize = () : number => { return this.maxAsteroidSize; }
    getMaxAsteroidRotationSpeed = () : number => { return this.maxAsteroidRotationSpeed; }
}



