
 // ExStart:SlicesInLinearExtrusion
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize the base profile to be extruded
var profile=new aspose.threed.RectangleShape();
profile.setRoundingRadius(0.3);

// Create a scene
var scene = new aspose.threed.Scene();

// Create left node
var left=scene.getRootNode().createChildNode();
// Create right node
var right=scene.getRootNode().createChildNode();
left.getTransform().setTranslation(new aspose.threed.Vector3(5, 0, 0));

// Slices parameter defines the number of intermediate points along the path of the extrusion
// Perform linear extrusion on left node using slices property
var extrusion1 =new aspose.threed.LinearExtrusion(profile, 2);
extrusion1.setSlices(2);
left.createChildNode(extrusion1);

// Perform linear extrusion on right node using slices property
var extrusion2 =new aspose.threed.LinearExtrusion(profile, 2);
extrusion2.setSlices(10);
right.createChildNode(extrusion2);

// Save 3D scene
scene.save("SlicesInLinearExtrusion.obj");
// ExEnd:SlicesInLinearExtrusion
