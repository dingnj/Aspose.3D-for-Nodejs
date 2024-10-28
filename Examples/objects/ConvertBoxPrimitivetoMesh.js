
// ExStart:ConvertBoxPrimitivetoMesh
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize object by Box class
var convertible = new aspose.threed.Box();

// Convert a Box to Mesh
var mesh = convertible.toMesh();
// ExEnd:ConvertBoxPrimitivetoMesh