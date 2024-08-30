
// ExStart:Primitive3DModels
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize a 3D scene
var scene = new aspose.threed.Scene();

// Create a Box model
scene.getRootNode().createChildNode("box", new aspose.threed.Box());

// Create a Cylinder model
scene.getRootNode().createChildNode("cylinder", new aspose.threed.Cylinder());

// Save drawing in the OBJ format
scene.save("test.obj");

// ExEnd:Primitive3DModels
