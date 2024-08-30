
// ExStart:1
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Create a scene
var scene = new aspose.threed.Scene();

// Create cylinder 1
var cylinder1 =new aspose.threed.Cylinder(2, 2, 10, 20, 1, false);

// Customized shear bottom for cylinder 1
cylinder1.setShearBottom(new aspose.threed.Vector2(0, 0.83));

// Add cylinder 1 to the scene
var node1=scene.getRootNode().createChildNode(cylinder1);
node1.getTransform().setTranslation(new aspose.threed.Vector3(10, 0, 0));

// Create cylinder 2
var cylinder2 =new aspose.threed.Cylinder(2, 2, 10, 20, 1, false);

// Add cylinder to without a ShearBottom to the scene
scene.getRootNode().createChildNode(cylinder2);

// Save scene
scene.save("CustomizedShearBottomCylinder.obj");
// ExEnd:1
