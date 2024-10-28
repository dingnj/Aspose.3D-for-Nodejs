
 //ExStart: 1
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize scene object
var scene = new aspose.threed.Scene();

// Initialize cylinder
var cylinder =new aspose.threed.Cylinder();

// Create ChildNode
var Node=scene.getRootNode().createChildNode(cylinder);

// Get Geometric Translation
Node.getTransform().setGeometricTranslation(new aspose.threed.Vector3(10, 0, 0));

// The first Console.WriteLine will output the transform matrix that includes the geometric transformation
// while the second one will not.
console.log(Node.evaluateGlobalTransform(true));
console.log(Node.evaluateGlobalTransform(false));
//ExEnd: 1
