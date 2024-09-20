
// ExStart:ApplyPBRMaterialToBox
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// initialize a scene
var scene = new aspose.threed.Scene();

// initialize PBR material object
var mat = new aspose.threed.PbrMaterial();

// an almost metal material
mat.setMetallicFactor(0.9);

// material surface is very rough
mat.setRoughnessFactor(0.9);

// create a box to which the material will be applied
var boxNode = scene.getRootNode().createChildNode("box", new aspose.threed.Box());
boxNode.setMaterial(mat);

// save 3d scene into STL format
scene.save("PBR_Material_Box_Out.stl");

// ExEnd:ApplyPBRMaterialToBox
