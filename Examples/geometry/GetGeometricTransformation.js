
// ExStart:GetGeometricTransformation
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

//Create a new 3D scene
var scene=new aspose.threed.Scene();

// Initialize object by Sphere class
var convertible = new aspose.threed.Sphere();

// Convert a Sphere to Mesh
var mesh = convertible.toMesh();

// Initialize Node class object
var n=scene.getRootNode().createChildNode("geometry");

// Point node to the Mesh geometry
n.Entity = mesh;

// Add Node to the scene
scene.getRootNode().getChildNodes().add(n);

// Set transform
n.getTransform().setGeometricTranslation(new aspose.threed.Vector3(-5, -5, -5));
// ExEnd:GetGeometricTransformation
