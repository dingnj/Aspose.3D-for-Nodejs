
 // ExStart:TwistInLinearExtrusion
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

// Twist property defines the degree of the rotation while extruding the profile
// Perform linear extrusion on left node using twist and slices property
var extrusion1 =new aspose.threed.LinearExtrusion(profile, 10);
extrusion1.setSlices(100);
extrusion1.setTwist(0);
left.createChildNode(extrusion1);

// Perform linear extrusion on right node using twist and slices property
var extrusion2 =new aspose.threed.LinearExtrusion(profile, 10);
extrusion2.setSlices(100);
extrusion2.setTwist(90);
right.createChildNode(extrusion2);

// Save 3D scene
scene.save("TwistInLinearExtrusion.obj");
// ExEnd:TwistInLinearExtrusion
