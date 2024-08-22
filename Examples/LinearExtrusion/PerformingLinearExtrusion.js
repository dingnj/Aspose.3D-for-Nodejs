
// ExStart:PerformingLinearExtrusion
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize the base shape to be extruded
// Initialize the base profile to be extruded
var profile=new aspose.threed.RectangleShape();
profile.setRoundingRadius(0.3);

// Perform Linear extrusion by passing a 2D shape as input and extend the shape in the 3rd dimension
var extrusion =new aspose.threed.LinearExtrusion(profile, 10);
extrusion.setSlices(100);
extrusion.setCenter(true);
extrusion.setTwist(360);
extrusion.setTwistOffset(new aspose.threed.Vector3(10, 0, 0));

// Create a scene
var scene = new aspose.threed.Scene();

// Create a child node by passing extrusion
scene.getRootNode().createChildNode(extrusion);

// Save 3D scene
scene.save("LinearExtrusion.obj");
// ExEnd:PerformingLinearExtrusion