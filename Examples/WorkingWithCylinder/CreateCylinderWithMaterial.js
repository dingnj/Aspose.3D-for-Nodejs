
// ExStart:1
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize Scene
var scene = new aspose.threed.Scene();

// Initialize cylinder
var cylinder =new aspose.threed.Cylinder();
cylinder.RadiusBottom = 5;

// Create ChildNode
var node=scene.getRootNode().createChildNode(cylinder);

//create a new material and apply it to the node
var material = new aspose.threed.PbrMaterial();
material.setAlbedo(new aspose.threed.Vector3(0, 1, 0));
node.Material = material;
// ExEnd:1
