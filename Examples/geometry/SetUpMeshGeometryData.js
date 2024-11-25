
// ExStart:SetUpMeshGeometryData
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

// Add cube node to a scene
scene.getRootNode().getChildNodes().add(cube);

//Initialize Lambert material object
var mat=new aspose.threed.LambertMaterial();

//Set color
mat.DiffuseColor=new aspose.threed.Vector3(0,30,40);

//Set material
cube.Material = mat;

//Set translation
cube.getTransform().setTranslation(new aspose.threed.Vector3(2, 0, 0));
// ExEnd:SetUpMeshGeometryData
