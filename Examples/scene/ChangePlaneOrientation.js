
 // ExStart:ChangePlaneOrientation
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize Scene
var scene = new aspose.threed.Scene();

// Initialize Plane
var plane=new aspose.threed.Plane();

// Set Vector
plane.setUp(new aspose.threed.Vector3(1, 1, 3));
scene.getRootNode().createChildNode(plane);

//This will generate a plane that has customized orientation
scene.save("ChangePlaneOrientation.obj");
// ExEnd:ChangePlaneOrientation
