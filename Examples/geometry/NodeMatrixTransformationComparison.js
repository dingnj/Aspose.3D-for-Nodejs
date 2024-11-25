
// ExStart:NodeMatrixTransformationComparison
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

//Create a new 3D scene
var scene=new aspose.threed.Scene();

// Initialize object by Torus class
var convertible = new aspose.threed.Torus();

//Convert a Torus to Mesh
var mesh = convertible.toMesh();

// Initialize cube node object
var cube=scene.getRootNode().createChildNode("cube");

//Point node to the Mesh geometry
cube.Entity = mesh;

//Set translation
cube.getTransform().setTranslation(new aspose.threed.Vector3(-4, 0, 0));

// Add cube node to a scene
scene.getRootNode().getChildNodes().add(cube);

// Initialize another node class object
var cube2=scene.getRootNode().createChildNode("cube2");

// Point node to the Mesh geometry
cube2.Entity = mesh;

// Set custom translation matrix
cube2.getTransform().setTransformMatrix(new aspose.threed.Matrix4(
    1, -0.9, 0.4, 0,
    0.4, 1.2, 0.4, 0.1,
    0.3, 0.3, 3.4, 0.3,
    0, 2, 0.4, 1
    ));     

//Set translation
cube2.getTransform().setTranslation(new aspose.threed.Vector3(3, -1, 0));

// Add cube2 to the scene
scene.getRootNode().getChildNodes().add(cube2);
// ExEnd:NodeMatrixTransformationComparison
