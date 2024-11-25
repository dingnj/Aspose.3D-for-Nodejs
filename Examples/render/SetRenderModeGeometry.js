
// ExStart:SetRenderModeGeometry
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

//Create a new 3D scene
var scene=new aspose.threed.Scene();

//Define material objects
var material = new aspose.threed.PhongMaterial();
material.DiffuseColor = new aspose.threed.Vector3(1, 2, 1);

// Create a cylinder child node
var node=scene.getRootNode().createChildNode("cylinder", new aspose.threed.Cylinder());
node.setMaterial(material);

//Set save options
var opt = new aspose.threed.PdfSaveOptions();

//Set up a lighting scheme
opt.setLightingScheme(aspose.threed.PdfLightingScheme.CAD);

// Set rendering mode
opt.setRenderMode(aspose.threed.PdfRenderMode.ShadedIllustration);

//Save the scene to PDF file.
scene.save("output.pdf");
//ExEnd:SetRenderModeGeometry