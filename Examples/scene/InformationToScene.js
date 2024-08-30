
  // ExStart:AddAssetInformationToScene
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize a 3D scene
var scene = new aspose.threed.Scene();

// Initialize the Box object
var box=new aspose.threed.Box();

// Add the Box object to the scene
scene.getRootNode().createChildNode(box);

// Set application/tool name
scene.getAssetInfo().setApplicationName("Egypt");

// Set application/tool vendor name
scene.getAssetInfo().setApplicationVendor("Manualdesk");

// We use ancient egyption measurement unit Pole
scene.getAssetInfo().setUnitName("pole");

// One Pole equals to 60cm
scene.getAssetInfo().setUnitScaleFactor(0.6);

scene.save("InformationToScene.obj");

 // ExEnd:AddAssetInformationToScene
