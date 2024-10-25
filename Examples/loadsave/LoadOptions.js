
// ExStart:Discreet3DSOption
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

var loadOpts = new aspose.threed.Discreet3dsLoadOptions();

// Sets wheather to use the transformation defined in the first frame of animation track.
loadOpts.setApplyAnimationTransform(true);

// Flip the coordinate system
loadOpts.setFlipCoordinateSystem(true);

// Prefer to use gamma-corrected color if a 3ds file provides both original color and gamma-corrected color.
loadOpts.setGammaCorrectedColor(true);
// ExEnd:Discreet3DSOption



// ExStart:ObjLoadOption
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

var loadObjOpts  = new aspose.threed.ObjLoadOptions();

// Import materials from external material library file
loadObjOpts.setEnableMaterials(true);

// Flip the coordinate system.
loadObjOpts.setFlipCoordinateSystem(true);
// ExEnd:ObjLoadOption



// ExStart:STLLoadOption
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize an object
var loadSTLOpts = new aspose.threed.StlLoadOptions();

// Flip the coordinate system.
loadSTLOpts.setFlipCoordinateSystem(true);
// ExEnd:STLLoadOption



// ExStart:U3DLoadOption
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Initialize an object
var loadU3DOpts = new aspose.threed.U3dLoadOptions();

// Flip the coordinate system.
loadU3DOpts.setFlipCoordinateSystem(true);
// ExEnd:U3DLoadOption



// ExStart:glTFLoadOptions
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// Set load options
var loadOpt = new aspose.threed.GltfLoadOptions();

// The default value is true, usually we don't need to change it. Aspose.3D will automatically flip the V/T texture coordinate during load and save.
loadOpt.setFlipTexCoordV(true);
// ExEnd:glTFLoadOptions



// ExStart:PlyLoadOptions
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// initialize Scene class object
var scene = new aspose.threed.Scene();

// initialize an object
var loadPLYOpts  = new aspose.threed.PlyLoadOptions();

// Flip the coordinate system.
loadPLYOpts.setFlipCoordinateSystem(true);

// load 3D Ply model
scene.open("vase-v2.ply", loadPLYOpts);
// ExEnd:PlyLoadOptions



// ExStart:XLoadOptions
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

// initialize Scene class object
var scene = new aspose.threed.Scene();

// initialize an object
var loadXOpts = new aspose.threed.XLoadOptions(aspose.threed.FileContentType.ASCII);

// flip the coordinate system.
loadXOpts.setFlipCoordinateSystem(true);

// load 3D X file
scene.open("warrior.x", loadXOpts);
// ExEnd:XLoadOptions



//ExStart: FBXLoadOptions
var aspose = aspose || {};

aspose.threed = require("../../lib/aspose.threed");

//This will output all properties defined in GlobalSettings in FBX file.
var opt = new aspose.threed.FbxLoadOptions();

opt.setKeepBuiltinGlobalSettings(true);
 //ExEnd: FBXLoadOptions