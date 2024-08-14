
// ExStart:DirectionInLinearExtrusion
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

// Direction property defines the direction of the extrusion.
// Perform linear extrusion on left node using twist and slices property
var extrusion1 =new aspose.threed.LinearExtrusion(profile, 10);
extrusion1.setSlices(100);
extrusion1.setTwist(360);
left.createChildNode(extrusion1);

// Perform linear extrusion on right node using twist, slices, and direction property
var extrusion2 =new aspose.threed.LinearExtrusion(profile, 10);
extrusion2.setSlices(100);
extrusion2.setTwist(360);
extrusion2.setDirection(new aspose.threed.Vector3(0.3, 0.2, 1));
right.createChildNode(extrusion2);

// Save 3D scene
scene.save("DirectionInLinearExtrusion.obj");
// ExEnd:DirectionInLinearExtrusion