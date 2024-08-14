
// ExStart:CenterInLinearExtrusion
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

// Set ground plane for reference
var box=new aspose.threed.Box(0.01, 3, 3);

// If Center property is true, the extrusion range is from -Height/2 to Height/2, otherwise the extrusion is from 0 to Height
// Perform linear extrusion on left node using center and slices property
var extrusion1 =new aspose.threed.LinearExtrusion(profile, 2);
extrusion1.setSlices(3);
extrusion1.setCenter(false);
left.createChildNode(extrusion1);
left.createChildNode(box);

// Perform linear extrusion on right node using center and slices property
var extrusion2 =new aspose.threed.LinearExtrusion(profile, 2);
extrusion2.setSlices(3);
extrusion2.setCenter(true);
right.createChildNode(extrusion2);
right.createChildNode(box);

// Save 3D scene
scene.save("CenterInLinearExtrusion.obj");
// ExEnd:CenterInLinearExtrusion