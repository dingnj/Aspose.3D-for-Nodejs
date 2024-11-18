
// ExStart:SetCoordinatesSphere
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

 // Initialize Scene
var scene = new aspose.threed.Scene();

//Create a sphere.
var sphere = new aspose.threed.Sphere();

// Set the coordinates of the sphere
sphere.ThetaStart = 1;
sphere.ThetaLength = 1;
sphere.PhiLength = 5;
sphere.PhiStart = 2;

var Node=scene.getRootNode().createChildNode(sphere);

Node.getTransform().setTranslation(new aspose.threed.Vector3(2, 0, 0));

// Save
scene.save("SetCoordinatesSphere.obj");
// ExEnd:SetCoordinatesSphere