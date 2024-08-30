
// ExStart:1
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Create a scene
var scene = new aspose.threed.Scene();

// Initialize cylinder
var cylinder1 =new aspose.threed.Cylinder(2, 2, 10, 20, 1, false);

// Set OffsetTop
cylinder1.setOffsetTop(new aspose.threed.Vector3(5, 3, 0));

// Create ChildNode
var node1=scene.getRootNode().createChildNode(cylinder1);
node1.getTransform().setTranslation(new aspose.threed.Vector3(10, 0, 0));

// Initialize second cylinder without customized OffsetTop
var cylinder2 =new aspose.threed.Cylinder(2, 2, 10, 20, 1, false);

// Create ChildNode
scene.getRootNode().createChildNode(cylinder2);

// Save
scene.save("CustomizedOffsetTopCylinder.obj");
// ExEnd:1
