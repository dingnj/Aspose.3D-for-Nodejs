
// ExStart:SetRenderingPropertiesPlane
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

var scene = new aspose.threed.Scene();

function applyMaterial(node,color){
   var material=new aspose.threed.PhongMaterial();
   material.setDiffuseColor(new aspose.threed.Vector3(color));
   node.setMaterial(material);
   return material;
}

var plane=scene.getRootNode().createChildNode("plane",(new aspose.threed.Plane()).toMesh());
applyMaterial(plane, (0,30,40));
plane.getTransform().setTranslation(0, 0, 0);
plane.getEntity().setReceiveShadows(true);
// ExEnd:SetRenderingPropertiesPlane