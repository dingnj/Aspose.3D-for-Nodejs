
// ExStart:AddTransformationToNodeByTransformationMatrix
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize scene object
var scene = new aspose.threed.Scene();

// Initialize cylinder
var cylinder =new aspose.threed.Cylinder(2, 2, 10, 20, 1, false);

// Create ChildNode
var Node=scene.getRootNode().createChildNode(cylinder);

// Set custom translation matrix
Node.getTransform().setTransformMatrix(new aspose.threed.Matrix4(
    1, -0.3, 0, 0,
    0.4, 1, 0.3, 0,
    0, 0, 1, 0,
    0, 20, 0, 1
));

// Save
scene.save("TransformationToNode.obj");
// ExEnd:AddTransformationToNodeByTransformationMatrix
