Aspose.3D for Node.js via Java is an extensible and feature rich API that integrates 3D file generation, manipulation, conversion, and processing functions into your own Node.js application.API supports Discreet3DS, WavefrontOBJ, FBX (ASCII, Binary), STL (ASCII, Binary), Universal3D, Collada, glTF, GLB, PLY, DirectX, Google Draco file formats and more. Developers can create, read, convert, modify and control the substance of 3D document formats easily.

## Node.js 3D API Features 
- Generate 3D  files via API or using templates.
- Convert 3D files to other supported formats.
- Create 3D model and change its size.
- Change the position of the 3D model.

## Read & Write 3D Files Formats

**3D:** 3DS, 3MF, AMF, ASE, DAE, DXF, DRC, FBX, GLTF, GLB, JT, OBJ, PLY, RVM, STL, U3D, VRML, X 
**Images:** JPG, JPEG, PNG, BMP, TIFF, GIF, TGA

## Save 3D Files As

**Fixed Layout:** PDF
**3D:** 3DS, AMF, RVM, GLTF, GLB, DRC, DAE, FBX, OBJ, STL, U3D, PLY, USD, USDZ
**Microsoft:** DOCX, XLSX, PPTX
**Web:** HTML
	
### Create 3D STL File from Scratch using Node.js
``` js

var aspose = aspose || {};
aspose.threed = require("aspose.threed");

var scene = new aspose.threed.Scene();

var box=new aspose.threed.Box();
scene.getRootNode().createChildNode(box);

scene.save("out.stl");
```

### Changing plane orientation using Node.js
``` js
var aspose = aspose || {};

aspose.threed = require("./lib/aspose.threed");

var scene = new aspose.threed.Scene();

var plane=new aspose.threed.Plane();
plane.setUp(new aspose.threed.Vector3(1, 1, 3));
scene.getRootNode().createChildNode(plane);

scene.save("ChangePlaneOrientation.obj");
```

[Product Page](https://products.aspose.com/3d/nodejs-java) |  [Blog](https://blog.aspose.com/category/3d/) | [API Reference](https://reference.aspose.com/3d/nodejs-java/) | [Source Code Samples](https://github.com/aspose-3d/Aspose.3D-for-Java) | [Free Support](https://forum.aspose.com/c/3d) | [Temporary License](https://purchase.aspose.com/temporary-license)
