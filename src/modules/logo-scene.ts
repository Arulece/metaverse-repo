import resources from "src/resources";

export function AddAdobeLogo() : void {

    const adobeLogoEntity = new Entity();
    adobeLogoEntity.addComponent( new GLTFShape(resources.models.logo.adobe));
    adobeLogoEntity.addComponent(
        new  Transform( {
            position: new Vector3( 15, 0.3, 5),
            rotation: new Quaternion(0 , 90 , 0, -90),
            scale: new Vector3( 15, 15, 15)
        })
    )
    engine.addEntity(adobeLogoEntity);

    
    const uniLogoEntity = new Entity();
    uniLogoEntity.addComponent( new GLTFShape(resources.models.logo.uni));
    uniLogoEntity.addComponent(
        new  Transform( {
            position: new Vector3( 15, 1.45, 10),
            rotation: new Quaternion(0 , 90 , 0, -90),
            scale: new Vector3( 2, 2, 2)
        })
    )
    engine.addEntity(uniLogoEntity);
    
    
}   
