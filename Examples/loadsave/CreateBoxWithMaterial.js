
// ExStart:CreateBoxWithMaterial
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

//Create a new 3D scene
var scene = new aspose.threed.Scene();

var boxNode = scene.getRootNode().createChildNode("box", new aspose.threed.Box());

var mat = new aspose.threed.PbrMaterial();

mat.setMetallicFactor(0.9);

mat.setAlbedo(new aspose.threed.Vector3(0.3, 0.8, 0.8));

mat.setRoughnessFactor(0.4);

boxNode.setMaterial(mat);
// ExEnd:CreateBoxWithMaterial