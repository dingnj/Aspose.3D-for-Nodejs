
// ExStart:Triangulate3DMesh
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

var mesh= new aspose.threed.Cylinder().toMesh();

//Triangulate this quadrangle-based mesh to triangle-based
mesh = mesh.triangulate();

var scene = new aspose.threed.Scene(mesh);
// ExEnd:Triangulate3DMesh