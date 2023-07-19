import { 
    Scene, 
    Engine, 
    FreeCamera, 
    Vector3, 
    HemisphericLight, 
    MeshBuilder, 
    ActionManager, 
    AbstractMesh,
    PBRMaterial,
    Color3,
    SceneLoader,
    InterpolateValueAction,
    GizmoManager,
} from '@babylonjs/core'


export class BasicScene {

    scene: Scene;
    engine: Engine;

    constructor(private canvas:HTMLCanvasElement){
        this.engine = new Engine(this.canvas, true)
        this.scene = this.CreateScene()
  
        this.engine.runRenderLoop(() => {
            this.scene.render()
        })
    }

    
    CreateScene(): Scene {
        const scene = new Scene(this.engine)
        const camera = new FreeCamera("camera", 
        new Vector3(0, 1, -7), 
        scene)

        camera.attachControl()

        const light = new HemisphericLight("light", 
        new Vector3(0, 1, 0), 
        scene)

        light.intensity = 0.5

        const ground = MeshBuilder.CreateGround("ground", 
        {width: 10, height: 10}, 
        scene);

        const sphere = MeshBuilder.CreateSphere("sphere", 
        {diameter: 2, segments: 32}, 
        scene);

        sphere.position.y = 1;

        const gizmoManager = new GizmoManager(scene)
        gizmoManager.positionGizmoEnabled = true;
        gizmoManager.rotationGizmoEnabled = true;
        gizmoManager.scaleGizmoEnabled = true;
        gizmoManager.boundingBoxGizmoEnabled = true;
        gizmoManager.attachableMeshes = [sphere]
        

        return scene
    }

}