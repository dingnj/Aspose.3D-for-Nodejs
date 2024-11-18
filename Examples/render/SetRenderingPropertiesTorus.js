
// ExStart:SetRenderingPropertiesTorus
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

var scene = new aspose.threed.Scene();

function applyMaterial(node,color){
   var material=new aspose.threed.PhongMaterial();
   material.setDiffuseColor(new aspose.threed.Vector3(color));
   node.setMaterial(material);
   return material;
}

var torus=scene.getRootNode().createChildNode("torus",(new aspose.threed.Torus("", 1, 0.4, 50, 50, Math.PI*2)).toMesh());
applyMaterial(torus, (0,30,40)).setTransparency(0.3);
torus.getTransform().setTranslation(2, 1, 1);
//ExEnd:SetRenderingPropertiesTorus