import {Treehouse} from 'treehouse';
import {Tree} from 'tree';

export class TreeBuilder {
  constructor() {
    
  }
  
  build(houses: {[index: string]: Treehouse}) {
    
    // Create the big trees!
    let trees = [
      new Tree(
        'trunk3', // Put trunk2 - trunk5
        new Transform({ // Transform for the trunk
          position: new Vector3(13, 35, 30),
          rotation: Quaternion.Euler(0, 60, 0)
        }),
        // Array of treehouse branch positions
        [
          {
            centerPos: new Vector3(14, houses.B0.getPos().y - 10, 32), // Starting point of the branch (the shoulder)
            treehousePos: houses.B0.getPos(),                          // Ending point of the branch (wrist) - should be treehosue position!
            scale: 1                                                   // Scale (1 = the native beefy thick branch. Just scales the diameter of the branch, not length.)
          }
        ],
        // Array of foliage branch positions. Same drill as above, except here, you can pick the foliage position to be wherever you want.
        [
          {
            folType: 'fol11',  // Pick a foliage type. 1-11.
            centerPos: new Vector3(13, 30, 32),
            folPos: new Vector3(9, 35, 40),
            scale: 0.3
          }
        ]
      ),
      new Tree(
        'trunk2',
        new Transform({
          position: new Vector3(26, 35, 21.5),
          rotation: Quaternion.Euler(0, 0, 0)
        }),
        [
          {
            centerPos: new Vector3(26.4, houses.C.getPos().y - 15, 22),
            treehousePos: houses.C.getPos(),
            scale: 0.5
          },
          {
            centerPos: new Vector3(25.5, houses.D0.getPos().y - 8, 21),
            treehousePos: houses.D0.getPos(),
            scale: 0.4
          }
        ],
        []
      ),
      new Tree(
        'trunk4',
        new Transform({
          position: new Vector3(30, 35, 8),
          rotation: Quaternion.Euler(0, 90, 0)
        }),
        [],
        []
      ),
      new Tree(
        'trunk4',
        new Transform({
          position: new Vector3(38, 35, 36),
          rotation: Quaternion.Euler(0, 50, 0)
        }),
        [],
        []
      ),
      new Tree(
        'trunk5',
        new Transform({
          position: new Vector3(51, 35, 33),
          rotation: Quaternion.Euler(0, 290, 0)
        }),
        [],
        []
      ),
      new Tree(
        'trunk3',
        new Transform({
          position: new Vector3(52, 48, 13),
          rotation: Quaternion.Euler(0, 90, 0)
        }),
        [],
        []
      ),
      new Tree(
        'trunk2',
        new Transform({
          position: new Vector3(67, 35, 11),
          rotation: Quaternion.Euler(0, 0, 0)
        }),
        [],
        []
      ),
      new Tree(
        'trunk2',
        new Transform({
          position: new Vector3(67, 35, 32),
          rotation: Quaternion.Euler(0, 15, 0)
        }),
        [],
        []
      )
    ];
  }
}
