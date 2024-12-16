
// ExStart:GetGeometricScalingAndRotation
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

//Create a new 3D scene
var scene=new aspose.threed.Scene();

// Initialize object by Cylinder class
var convertible = new aspose.threed.Cylinder();

// Convert a Sphere to Mesh
var mesh = convertible.toMesh();

// Initialize Node class object
var n=scene.getRootNode().createChildNode("geometry");

// Point node to the Mesh geometry
n.Entity = mesh;

// Add Node to the scene
scene.getRootNode().getChildNodes().add(n);

// Set cylinder scaling
n.getTransform().setGeometricScaling(new aspose.threed.Vector3(0.5,0.5, 0.5));

// Set cylinder rotation
n.getTransform().setGeometricRotation(new aspose.threed.Vector3(30, 30, 30));
// ExEnd:GetGeometricScalingAndRotation
