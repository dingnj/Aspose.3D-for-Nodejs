
// ExStart:WorkingWithSphereRadius
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

 // initialize a scene
 var scene = new aspose.threed.Scene();

 // initialize a Sphere
 var sphere=new aspose.threed.Sphere();
 
  // set radius
 sphere.setRadius(10);
 
 // add sphere to the scene
 scene.getRootNode().createChildNode(sphere);
 
 // save scene
 scene.save("sphere.obj");
// ExEnd:WorkingWithSphereRadius