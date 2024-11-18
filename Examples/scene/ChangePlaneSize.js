
// ExStart:SetRenderingPropertiesTorus
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize Scene
var scene = new aspose.threed.Scene();

//Create a plane.
var plane = new aspose.threed.Plane();
scene.getRootNode().createChildNode(plane);

//Change the length of the plane
plane.Length = 6;

//Change the width of the plane
plane.Width=7;

// Save
scene.save("ChangePlaneSize.obj");