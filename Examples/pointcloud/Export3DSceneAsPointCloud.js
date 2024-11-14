
// ExStart:SetRenderingPropertiesTorus
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize Scene
var scene = new aspose.threed.Scene(new aspose.threed.Sphere());

// Initialize  ObjSaveOptions
var opt=new aspose.threed.ObjSaveOptions();

// To export 3D scene as point cloud setPointCould
opt.setPointCloud(true);

// Save
scene.save("export3DSceneAsPointCloud.obj");