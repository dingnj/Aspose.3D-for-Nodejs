
// ExStart:ConvertSpherePrimitivetoMesh
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize object by Sphere class
var convertible = new aspose.threed.Sphere();

// Convert a Sphere to Mesh
var mesh = convertible.toMesh();
// ExEnd:ConvertSpherePrimitivetoMesh