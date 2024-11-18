
// ExStart:SetCameraProperties
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

var scene = new aspose.threed.Scene();

var camera =new aspose.threed.Camera();

scene.getRootNode().createChildNode(camera);

camera.setNearPlane(0.1);

camera.getParentNode().getTransform().setTranslation(10, 5, 10);
// ExEnd:SetCameraProperties