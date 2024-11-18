
// ExStart:SetLightProperty
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

var scene = new aspose.threed.Scene();

var light =new aspose.threed.Light();

var node=scene.getRootNode().createChildNode(light);

light.setNearPlane(0.1);

light.setColor(new aspose.threed.Vector3(0,30,40));

node.getTransform().setTranslation(new aspose.threed.Vector3(9.4785, 5, 3.18));

light.setFalloff(90);
// ExEnd:SetLightProperty