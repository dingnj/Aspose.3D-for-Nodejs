
// ExStart:ConvertPlanePrimitivetoMesh
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize object by Plane class
var convertible = new aspose.threed.Plane();

// Convert a Plane to Mesh
var mesh = convertible.toMesh();
// ExEnd:ConvertPlanePrimitivetoMesh