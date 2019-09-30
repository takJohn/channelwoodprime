import {Ground} from 'scenery/ground';
import {TreeBuilder} from 'scenery/treebuilder';
import {HouseAndBridgeBuilder} from 'scenery/houseandbridgebuilder';
import {HumanoidTree} from 'scenery/humanoidtree';
import {Windmill} from 'scenery/windmill'
import {Manager} from 'stateengine/manager';
import {UI} from 'moduleUI/ui';
import {ParticleScenes} from 'particle/particleSys';
import {AudioAmbient, AudioWindmill} from 'sceneaudio/sceneAudio';

// Create our ground (heightmap and lake).
let ground = new Ground();

// Create the windmill on the island.
let windmill = new Windmill();

// Create our treehouses and bridges!
let houseAndBridgeBuilder = new HouseAndBridgeBuilder();
let houses = houseAndBridgeBuilder.build();

// Create our trees!
let treeBuilder = new TreeBuilder();
treeBuilder.build(houses);


// Create the small trees!
let humanoidTreeLocations = [
  new Vector3(7, 0, 40),
  new Vector3(22, 0, 6),
  new Vector3(36, 0, 28),
  new Vector3(43, 0, 19),
  new Vector3(54, 0, 42),
  new Vector3(65, 0, 17),
  new Vector3(70, 0, 34)
];

for (let i = 0; i < humanoidTreeLocations.length; i++) {
  let tree = new HumanoidTree(
    new Transform({
      position: humanoidTreeLocations[i],
      scale: new Vector3(3, 3, 3),
      rotation: Quaternion.Euler(0, i * 360 / 7, 0)
    }),
    i
  );
}

// Create our puzzles!
//let manager = new Manager();

//Create UI (journal pages)
let ui = new UI([
    new Vector3(11.4, 4.6, 12.05),
    houses.A.getPos(),
    houses.B1.getPos(),
    houses.C.getPos(),
    houses.D0.getPos(),
    houses.F.getPos(),
    houses.H.getPos(),
    houses.J.getPos(),
    houses.M.getPos(),
    houses.N.getPos()
]);

//Add fairy dust particles if needed
const pS = new ParticleScenes();

//Add audio for day ambient and windmill
let audioWindmill = new AudioWindmill()
let audioAmbient = new AudioAmbient()



// Instance the input object
const input = Input.instance

// button down event
input.subscribe("BUTTON_DOWN", ActionButton.POINTER, false, e => {
  
  log('pointer down');
  
  let physicsCast = PhysicsCast.instance

  let originPos = Camera.instance.position
  let direction = new Vector3(0, 0, 1).rotate(Camera.instance.rotation)

  let ray: Ray = {
        origin: originPos,
        direction: direction,
        distance: 10
  	}

  physicsCast.hitAll(ray, (e) => {
    log(e);
    log(e.hitPoint)
  	for (let entityHit of e.entities) {
           log(entityHit.entity.entityId)
           
      }
  })
})
