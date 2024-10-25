
// ExStart:ConvertCylinderPrimitivetoMesh
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize object by Cylinder class
var convertible = new aspose.threed.Cylinder();

// Convert a Cylinder to Mesh
var mesh = convertible.toMesh();
// ExEnd:ConvertCylinderPrimitivetoMesh