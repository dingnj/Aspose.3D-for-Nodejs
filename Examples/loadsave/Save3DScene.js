
// ExStart:Save3DScene
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize a scene
var scene = new aspose.threed.Scene();

scene.getRootNode().createChildNode(new aspose.threed.Cylinder());

var opt =new aspose.threed.Html5SaveOptions();
// Turn off the grid
opt.setShowGrid(false);
//Turn off the user interface
opt.setShowUI(false);

scene.save("html5SaveOption.html");
// ExEnd:Save3DScene