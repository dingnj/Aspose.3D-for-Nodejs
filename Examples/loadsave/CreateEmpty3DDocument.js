
// ExStart:CreateEmpty3DDocument
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

var file="document.obj";

// Create an object of the Scene class
var scene = new aspose.threed.Scene();

// Save 3D scene document
scene.save(file);
// ExEnd:CreateEmpty3DDocument
