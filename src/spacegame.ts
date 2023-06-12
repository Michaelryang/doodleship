import { Vector2, WorldObject, isPointColliding } from './types.js'
import { Player } from './player.js'
import { Settings } from './settings.js';
import { Bullet } from './bullet.js';
import { AsteroidFactory, Asteroid } from './asteroid.js';
import { ExplosionFactory } from './explosion.js';


//npx parcel index.html   
const width = Settings.getInstance().getWorldWidth();
const height = Settings.getInstance().getWorldHeight();
const scale = Settings.getInstance().getGameScale();


class SpaceGame
{
    deltaTime = 0;
    currentTimeStamp = 0;
    previousTimeStamp = 0;
    canvas : HTMLCanvasElement;
    ctx : CanvasRenderingContext2D;

    player : Player;
    //bullets : Bullet[] = [];
    asteroidFactory : AsteroidFactory = new AsteroidFactory();
    explosionFactory : ExplosionFactory = new ExplosionFactory();
    worldObjects : WorldObject[] = [];

    constructor()
    {
        this.player = new Player(new Vector2(width/2, height/2), new Vector2(), 0.0, scale);
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

        this.worldObjects.push(this.player);
    }
    
    begin() : void
    {
        this.previousTimeStamp = Date.now();
        this.currentTimeStamp = Date.now();
        window.requestAnimationFrame(this.tick);

        for ( let x = 0; x < Settings.getInstance().getNumBeginningAsteroids(); ++x)
        {
            this.worldObjects.push(this.asteroidFactory.createAsteroid());
        }

        addEventListener('mousedown', (e) => {
            this.getCursorPosition(e);
        })
    }

    update() : void
    {
        //console.log("update called\ntimestamp: " + this.currentTimeStamp + "\nframe time: " + this.deltaTime );
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
        // this.ctx.strokeStyle = "lime";
        // this.ctx.beginPath();
        // this.ctx.moveTo(0, height/2);
        // this.ctx.lineTo(width, height/2);
        // this.ctx.stroke();

        // this.ctx.beginPath();
        // this.ctx.moveTo(width/2, 0);
        // this.ctx.lineTo(width/2, height);
        // this.ctx.stroke(); 
        //console.log("draw line");

        // create
        let bullet = this.player.tryFireBullet();

        if ( bullet != null)
        {
            console.log("bullet added");
            this.worldObjects.push(bullet);
        }

        // update
        for ( let x = 0; x < this.worldObjects.length; ++x )
        {
            this.worldObjects[x].update();
        }

        // check collisions
        for ( let x = this.worldObjects.length - 1; x >=0; --x )
        {
            if ( this.worldObjects[x] instanceof Bullet)
            {
                for ( let y = this.worldObjects.length - 1; y >=0; --y )
                {
                    if ( this.worldObjects[y] instanceof Asteroid)
                    {
                        if ( isPointColliding(this.worldObjects[x].getPosition(), this.worldObjects[y]))
                        {
                            this.worldObjects[x].endLifeCycle();
                            let newExplosion = this.explosionFactory.createExplosion(
                                (this.worldObjects[y] as Asteroid).getPosition(),
                                (this.worldObjects[y] as Asteroid).size);
                            let newAsteroids : Asteroid[] = (this.worldObjects[y] as Asteroid).splitAsteroid();
                            
                            for ( let z = 0; z < newAsteroids.length; ++z)
                            {
                                this.worldObjects.push(newAsteroids[z]);
                            }

                            this.worldObjects.push(newExplosion);
                        }
                    }
                }
            }
        }

        console.log(this.worldObjects.length);
        // delete
        for ( let x = this.worldObjects.length - 1; x >=0; --x )
        {
            if ( !this.worldObjects[x].isLifeCycleActive())
            {
                console.log("delete");
                this.worldObjects.splice(x, 1);
            }
        }
        
        // render
        for ( let x = 0; x < this.worldObjects.length; ++x )
        {
            this.worldObjects[x].render(this.canvas);
        }
    }

    tick() : void
    {
        this.currentTimeStamp = Date.now();
        this.deltaTime = (this.currentTimeStamp - this.previousTimeStamp) / 1000.0;
        this.previousTimeStamp = this.currentTimeStamp;
      
        this.update();
      
        window.requestAnimationFrame(this.tick);
    }

    getCursorPosition(event) 
    {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        console.log("x: " + x + " y: " + y);
    }
    
    

    
}

let game = new SpaceGame();
game.begin();