
// ExStart:AddTransformationToNodeByEulerAngles
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize scene object
var scene = new aspose.threed.Scene();

// Initialize cylinder
var cylinder =new aspose.threed.Cylinder(2, 2, 10, 20, 1, false);

// Create ChildNode
var Node=scene.getRootNode().createChildNode(cylinder);

// Euler angles
Node.getTransform().setEulerAngles(new aspose.threed.Vector3(30, 40, 50));

// Set translation
Node.getTransform().setTranslation(new aspose.threed.Vector3(0, 0, 20));

// Save
scene.save("TransformationToNode.obj");
// ExEnd:AddTransformationToNodeByEulerAngles
