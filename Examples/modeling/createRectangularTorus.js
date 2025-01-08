
// ExStart:createRectangularTorus
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize a 3D scene
var scene = new aspose.threed.Scene();

//Create a Rectangular Torus object
var rt =new aspose.threed.RectangularTorus();

//Set internal radius
rt.setInnerRadius(17);

//Set outer radius
rt.setOuterRadius(22);

//Set height
rt.setHeight(30);

//Set arc
rt.setArc( Math.PI * 0.5);

scene.getRootNode().createChildNode(rt);

scene.save("rtorus.obj");

// ExEnd:createRectangularTorus
