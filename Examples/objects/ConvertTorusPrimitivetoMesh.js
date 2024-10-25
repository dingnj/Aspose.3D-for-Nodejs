
// ExStart:ConvertTorusPrimitivetoMesh
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize object by Torus class
var convertible = new aspose.threed.Torus();

// Convert a Torus to Mesh
var mesh = convertible.toMesh();
// ExEnd:ConvertTorusPrimitivetoMesh