'use strict'
var java = require("java");

const os = require('os');
if (os.platform() == 'darwin') {
	java.options.push('-Djava.awt.headless=true');
}

java.asyncOptions = {
	asyncSuffix: "Async",
	syncSuffix: "",
};
java.classpath.push(__dirname + "/aspose-3d-24.7.0.jar");
java.classpath.push(__dirname + "/ThreedJavaClassBridge.jar");

exports = module.exports;

function __typeof__(objClass) {
	if (objClass != undefined && objClass.constructor) {
        var strFun = objClass.constructor.toString();
        var className = strFun.substr(0, strFun.indexOf('('));
        className = className.replace('function', '');
        return className.replace(/(^\s*)|(\s*$)/ig, '');
    }
    return typeof(objClass);
}

exports.readDataFromStream = function(readStream, callback) {
	var inputStreamBuffer = new exports.StreamBuffer();
	readStream.on('data', function(chunk) {
		inputStreamBuffer.write(chunk);
	});
	readStream.on('end', function() {
		callback(inputStreamBuffer.toInputStream());
	});
};

exports.readBytesFromStream = function(readStream, callback) {
	var inputStreamBuffer = new exports.StreamBuffer();
	readStream.on('data', function(chunk) {
		inputStreamBuffer.write(chunk);
	});
	readStream.on('end', function() {
		var array = Array.from(inputStreamBuffer.toByteArray());
        var javaArray = java.newArray('byte', array);
		callback(javaArray);
	});
};

exports.StreamBuffer = class StreamBuffer {
	constructor() {
		var self = java.newInstanceSync("com.aspose.threed.wrapper.StreamBuffer");

		self.write = function(chunk) {
			var array = Array.from(chunk);
			var javaArray = java.newArray('byte', array);
			self.__proto__.write.call(self, javaArray, 0, javaArray.length);
		}
		return self;
	}
};


exports.A3DObject = java.import("com.aspose.threed.A3DObject");
exports.A3dwSaveOptions = java.import("com.aspose.threed.A3dwSaveOptions");
exports.AmfSaveOptions = java.import("com.aspose.threed.AmfSaveOptions");
exports.AnimationClip = java.import("com.aspose.threed.AnimationClip");
exports.AnimationNode = java.import("com.aspose.threed.AnimationNode");
exports.ArbitraryProfile = java.import("com.aspose.threed.ArbitraryProfile");
exports.AssetInfo = java.import("com.aspose.threed.AssetInfo");
exports.BindPoint = java.import("com.aspose.threed.BindPoint");
exports.Bone = java.import("com.aspose.threed.Bone");
exports.BonePose = java.import("com.aspose.threed.BonePose");
exports.BoundingBox = java.import("com.aspose.threed.BoundingBox");
exports.BoundingBox2D = java.import("com.aspose.threed.BoundingBox2D");
exports.Box = java.import("com.aspose.threed.Box");
exports.Camera = java.import("com.aspose.threed.Camera");
exports.Cancellation = java.import("com.aspose.threed.Cancellation");
exports.Circle = java.import("com.aspose.threed.Circle");
exports.CircleShape = java.import("com.aspose.threed.CircleShape");
exports.ColladaSaveOptions = java.import("com.aspose.threed.ColladaSaveOptions");
exports.CompositeCurve = java.import("com.aspose.threed.CompositeCurve");
exports.CryptoUtils = java.import("com.aspose.threed.CryptoUtils");
exports.CShape = java.import("com.aspose.threed.CShape");
exports.CubeFaceData = java.import("com.aspose.threed.CubeFaceData");
exports.CullFaceMode = java.import("com.aspose.threed.CullFaceMode");
exports.CustomObject = java.import("com.aspose.threed.CustomObject");
exports.Cylinder = java.import("com.aspose.threed.Cylinder");
exports.Discreet3dsLoadOptions = java.import("com.aspose.threed.Discreet3dsLoadOptions");
exports.Discreet3dsSaveOptions = java.import("com.aspose.threed.Discreet3dsSaveOptions");
exports.Dish = java.import("com.aspose.threed.Dish");
exports.DracoSaveOptions = java.import("com.aspose.threed.DracoSaveOptions");
exports.DriverException = java.import("com.aspose.threed.DriverException");
exports.DummyFileSystem = java.import("com.aspose.threed.DummyFileSystem");
exports.Ellipse = java.import("com.aspose.threed.Ellipse");
exports.EllipseShape = java.import("com.aspose.threed.EllipseShape");
exports.EndPoint = java.import("com.aspose.threed.EndPoint");
exports.EntityRenderer = java.import("com.aspose.threed.EntityRenderer");
exports.EntityRendererFeatures = java.import("com.aspose.threed.EntityRendererFeatures");
exports.EntityRendererKey = java.import("com.aspose.threed.EntityRendererKey");
exports.ExportException = java.import("com.aspose.threed.ExportException");
exports.FbxLoadOptions = java.import("com.aspose.threed.FbxLoadOptions");
exports.FbxSaveOptions = java.import("com.aspose.threed.FbxSaveOptions");
exports.FMatrix4 = java.import("com.aspose.threed.FMatrix4");
exports.FVector2 = java.import("com.aspose.threed.FVector2");
exports.FVector3 = java.import("com.aspose.threed.FVector3");
exports.FVector4 = java.import("com.aspose.threed.FVector4");
exports.Geometry = java.import("com.aspose.threed.Geometry");
exports.GLSLSource = java.import("com.aspose.threed.GLSLSource");
exports.GltfLoadOptions = java.import("com.aspose.threed.GltfLoadOptions");
exports.GltfSaveOptions = java.import("com.aspose.threed.GltfSaveOptions");
exports.HollowCircleShape = java.import("com.aspose.threed.HollowCircleShape");
exports.HollowRectangleShape = java.import("com.aspose.threed.HollowRectangleShape");
exports.HShape = java.import("com.aspose.threed.HShape");
exports.Html5SaveOptions = java.import("com.aspose.threed.Html5SaveOptions");
exports.ImageRenderOptions = java.import("com.aspose.threed.ImageRenderOptions");
exports.ImportException = java.import("com.aspose.threed.ImportException");
exports.InitializationException = java.import("com.aspose.threed.InitializationException");
exports.JavaXImageCodec = java.import("com.aspose.threed.JavaXImageCodec");
exports.KeyFrame = java.import("com.aspose.threed.KeyFrame");
exports.KeyframeSequence = java.import("com.aspose.threed.KeyframeSequence");
exports.LambertMaterial = java.import("com.aspose.threed.LambertMaterial");
exports.License = java.import("com.aspose.threed.License");
exports.Light = java.import("com.aspose.threed.Light");
exports.Line = java.import("com.aspose.threed.Line");
exports.LinearExtrusion = java.import("com.aspose.threed.LinearExtrusion");
exports.LocalFileSystem = java.import("com.aspose.threed.LocalFileSystem");
exports.LShape = java.import("com.aspose.threed.LShape");
exports.Matrix4 = java.import("com.aspose.threed.Matrix4");
exports.MemoryFileSystem = java.import("com.aspose.threed.MemoryFileSystem");
exports.Mesh = java.import("com.aspose.threed.Mesh");
exports.Metered = java.import("com.aspose.threed.Metered");
exports.MirroredProfile = java.import("com.aspose.threed.MirroredProfile");
exports.MorphTargetChannel = java.import("com.aspose.threed.MorphTargetChannel");
exports.MorphTargetDeformer = java.import("com.aspose.threed.MorphTargetDeformer");
exports.NurbsCurve = java.import("com.aspose.threed.NurbsCurve");
exports.NurbsDirection = java.import("com.aspose.threed.NurbsDirection");
exports.NurbsSurface = java.import("com.aspose.threed.NurbsSurface");
exports.ObjLoadOptions = java.import("com.aspose.threed.ObjLoadOptions");
exports.ObjSaveOptions = java.import("com.aspose.threed.ObjSaveOptions");
exports.ParseException = java.import("com.aspose.threed.ParseException");
exports.Patch = java.import("com.aspose.threed.Patch");
exports.PatchDirection = java.import("com.aspose.threed.PatchDirection");
exports.PbrMaterial = java.import("com.aspose.threed.PbrMaterial");
exports.PbrSpecularMaterial = java.import("com.aspose.threed.PbrSpecularMaterial");
exports.PdfLoadOptions = java.import("com.aspose.threed.PdfLoadOptions");
exports.PdfSaveOptions = java.import("com.aspose.threed.PdfSaveOptions");
exports.PhongMaterial = java.import("com.aspose.threed.PhongMaterial");
exports.Plane = java.import("com.aspose.threed.Plane");
exports.PlyLoadOptions = java.import("com.aspose.threed.PlyLoadOptions");
exports.PlySaveOptions = java.import("com.aspose.threed.PlySaveOptions");
exports.PointCloud = java.import("com.aspose.threed.PointCloud");
exports.PolygonBuilder = java.import("com.aspose.threed.PolygonBuilder");
exports.Pose = java.import("com.aspose.threed.Pose");
exports.PushConstant = java.import("com.aspose.threed.PushConstant");
exports.Pyramid = java.import("com.aspose.threed.Pyramid");
exports.Quaternion = java.import("com.aspose.threed.Quaternion");
exports.Rect = java.import("com.aspose.threed.Rect");
exports.RectangleShape = java.import("com.aspose.threed.RectangleShape");
exports.RectangularTorus = java.import("com.aspose.threed.RectangularTorus");
exports.RelativeRectangle = java.import("com.aspose.threed.RelativeRectangle");
exports.RendererException = java.import("com.aspose.threed.RendererException");
exports.RenderParameters = java.import("com.aspose.threed.RenderParameters");
exports.RenderState = java.import("com.aspose.threed.RenderState");
exports.RevolvedAreaSolid = java.import("com.aspose.threed.RevolvedAreaSolid");
exports.RvmLoadOptions = java.import("com.aspose.threed.RvmLoadOptions");
exports.RvmSaveOptions = java.import("com.aspose.threed.RvmSaveOptions");
exports.Scene = java.import("com.aspose.threed.Scene");
exports.ShaderException = java.import("com.aspose.threed.ShaderException");
exports.ShaderMaterial = java.import("com.aspose.threed.ShaderMaterial");
exports.ShaderSet = java.import("com.aspose.threed.ShaderSet");
exports.ShaderStage = java.import("com.aspose.threed.ShaderStage");
exports.ShaderTechnique = java.import("com.aspose.threed.ShaderTechnique");
exports.ShaderVariable = java.import("com.aspose.threed.ShaderVariable");
exports.Shape = java.import("com.aspose.threed.Shape");
exports.Skeleton = java.import("com.aspose.threed.Skeleton");
exports.SkinDeformer = java.import("com.aspose.threed.SkinDeformer");
exports.Sphere = java.import("com.aspose.threed.Sphere");
exports.SPIRVSource = java.import("com.aspose.threed.SPIRVSource");
exports.StlLoadOptions = java.import("com.aspose.threed.StlLoadOptions");
exports.StlSaveOptions = java.import("com.aspose.threed.StlSaveOptions");
exports.SweptAreaSolid = java.import("com.aspose.threed.SweptAreaSolid");
exports.Text = java.import("com.aspose.threed.Text");
exports.Texture = java.import("com.aspose.threed.Texture");
exports.TextureBase = java.import("com.aspose.threed.TextureBase");
exports.TextureCodec = java.import("com.aspose.threed.TextureCodec");
exports.TextureData = java.import("com.aspose.threed.TextureData");
exports.Torus = java.import("com.aspose.threed.Torus");
exports.TransformBuilder = java.import("com.aspose.threed.TransformBuilder");
exports.TransformedCurve = java.import("com.aspose.threed.TransformedCurve");
exports.TrapeziumShape = java.import("com.aspose.threed.TrapeziumShape");
exports.TrialException = java.import("com.aspose.threed.TrialException");
exports.TriMesh = java.import("com.aspose.threed.TriMesh");
exports.TrimmedCurve = java.import("com.aspose.threed.TrimmedCurve");
exports.TShape = java.import("com.aspose.threed.TShape");
exports.U3dLoadOptions = java.import("com.aspose.threed.U3dLoadOptions");
exports.U3dSaveOptions = java.import("com.aspose.threed.U3dSaveOptions");
exports.UsdSaveOptions = java.import("com.aspose.threed.UsdSaveOptions");
exports.UShape = java.import("com.aspose.threed.UShape");
exports.Vector2 = java.import("com.aspose.threed.Vector2");
exports.Vector3 = java.import("com.aspose.threed.Vector3");
exports.Vector4 = java.import("com.aspose.threed.Vector4");
exports.VertexDeclaration = java.import("com.aspose.threed.VertexDeclaration");
exports.VertexElementBinormal = java.import("com.aspose.threed.VertexElementBinormal");
exports.VertexElementEdgeCrease = java.import("com.aspose.threed.VertexElementEdgeCrease");
exports.VertexElementHole = java.import("com.aspose.threed.VertexElementHole");
exports.VertexElementMaterial = java.import("com.aspose.threed.VertexElementMaterial");
exports.VertexElementNormal = java.import("com.aspose.threed.VertexElementNormal");
exports.VertexElementPolygonGroup = java.import("com.aspose.threed.VertexElementPolygonGroup");
exports.VertexElementSmoothingGroup = java.import("com.aspose.threed.VertexElementSmoothingGroup");
exports.VertexElementSpecular = java.import("com.aspose.threed.VertexElementSpecular");
exports.VertexElementTangent = java.import("com.aspose.threed.VertexElementTangent");
exports.VertexElementUserData = java.import("com.aspose.threed.VertexElementUserData");
exports.VertexElementUV = java.import("com.aspose.threed.VertexElementUV");
exports.VertexElementVertexColor = java.import("com.aspose.threed.VertexElementVertexColor");
exports.VertexElementVertexCrease = java.import("com.aspose.threed.VertexElementVertexCrease");
exports.VertexElementVisibility = java.import("com.aspose.threed.VertexElementVisibility");
exports.VertexElementWeight = java.import("com.aspose.threed.VertexElementWeight");
exports.VertexFieldDataType = java.import("com.aspose.threed.VertexFieldDataType");
exports.WeightedMode = java.import("com.aspose.threed.WeightedMode");
exports.XLoadOptions = java.import("com.aspose.threed.XLoadOptions");
exports.ZipArchiveFileSystem = java.import("com.aspose.threed.ZipArchiveFileSystem");
exports.ZShape = java.import("com.aspose.threed.ZShape");

exports.AlphaSource = java.import("com.aspose.threed.AlphaSource");
exports.ApertureMode = java.import("com.aspose.threed.ApertureMode");
exports.Axis = java.import("com.aspose.threed.Axis");
exports.BlendFactor = java.import("com.aspose.threed.BlendFactor");
exports.BoundingBoxExtent = java.import("com.aspose.threed.BoundingBoxExtent");
exports.ColladaTransformStyle = java.import("com.aspose.threed.ColladaTransformStyle");
exports.CompareFunction = java.import("com.aspose.threed.CompareFunction");
exports.ComposeOrder = java.import("com.aspose.threed.ComposeOrder");
exports.CubeFace = java.import("com.aspose.threed.CubeFace");
exports.CurveDimension = java.import("com.aspose.threed.CurveDimension");
exports.DracoCompressionLevel = java.import("com.aspose.threed.DracoCompressionLevel");
exports.DrawOperation = java.import("com.aspose.threed.DrawOperation");
exports.ExtrapolationType = java.import("com.aspose.threed.ExtrapolationType");
exports.FileContentType = java.import("com.aspose.threed.FileContentType");
exports.FileFormat = java.import("com.aspose.threed.FileFormat");
exports.FrontFace = java.import("com.aspose.threed.FrontFace");
exports.GltfEmbeddedImageFormat = java.import("com.aspose.threed.GltfEmbeddedImageFormat");
exports.IndexDataType = java.import("com.aspose.threed.IndexDataType");
exports.Interpolation = java.import("com.aspose.threed.Interpolation");
exports.IOConfig = java.import("com.aspose.threed.IOConfig");
exports.LightType = java.import("com.aspose.threed.LightType");
exports.MappingMode = java.import("com.aspose.threed.MappingMode");
exports.MathUtils = java.import("com.aspose.threed.MathUtils");
exports.NurbsType = java.import("com.aspose.threed.NurbsType");
exports.PatchDirectionType = java.import("com.aspose.threed.PatchDirectionType");
exports.PdfLightingScheme = java.import("com.aspose.threed.PdfLightingScheme");
exports.PdfRenderMode = java.import("com.aspose.threed.PdfRenderMode");
exports.PixelFormat = java.import("com.aspose.threed.PixelFormat");
exports.PixelMapMode = java.import("com.aspose.threed.PixelMapMode");
exports.PolygonMode = java.import("com.aspose.threed.PolygonMode");
exports.PolygonModifier = java.import("com.aspose.threed.PolygonModifier");
exports.PoseType = java.import("com.aspose.threed.PoseType");
exports.PresetShaders = java.import("com.aspose.threed.PresetShaders");
exports.ProjectionType = java.import("com.aspose.threed.ProjectionType");
exports.ReferenceMode = java.import("com.aspose.threed.ReferenceMode");
exports.Renderer = java.import("com.aspose.threed.Renderer");
exports.RenderQueueGroupId = java.import("com.aspose.threed.RenderQueueGroupId");
exports.RenderStage = java.import("com.aspose.threed.RenderStage");
exports.RotationMode = java.import("com.aspose.threed.RotationMode");
exports.RotationOrder = java.import("com.aspose.threed.RotationOrder");
exports.SkeletonType = java.import("com.aspose.threed.SkeletonType");
exports.SplitMeshPolicy = java.import("com.aspose.threed.SplitMeshPolicy");
exports.StencilAction = java.import("com.aspose.threed.StencilAction");
exports.StepMode = java.import("com.aspose.threed.StepMode");
exports.TextureFilter = java.import("com.aspose.threed.TextureFilter");
exports.TextureMapping = java.import("com.aspose.threed.TextureMapping");
exports.TextureType = java.import("com.aspose.threed.TextureType");
exports.VertexElementType = java.import("com.aspose.threed.VertexElementType");
exports.VertexFieldSemantic = java.import("com.aspose.threed.VertexFieldSemantic");
exports.Watermark = java.import("com.aspose.threed.Watermark");
exports.WindowHandle = java.import("com.aspose.threed.WindowHandle");
exports.WrapMode = java.import("com.aspose.threed.WrapMode");


exports.License.setLicenseFromStream = function(license, licenseStream, callback) {
	var inputStreamBuffer = new exports.StreamBuffer();
	licenseStream.on('data', function(chunk) {
		inputStreamBuffer.write(chunk);
	});
	licenseStream.on('end', function() {
		var error;
		try {
			license.setLicense(inputStreamBuffer.toInputStream());
		}
		catch (err) {
			error = err;
		}
		callback(error);
	});
};

exports.MathUtils.toRadian=function(angdeg){
	const E = 2.7182818284590452354;
	const PI =3.14159265358979323846;
	return angdeg / 180.0 * PI;
}

exports.Scene.createSceneFromStream = function(arg1, arg2, arg3) {
	var readStream, loadOptions, callback, params;
	readStream = arg1;

	if (arguments.length == 2) {
		loadOptions = null;
		callback = arg2;
		params = 2;
	}
	else if (arguments.length == 3) {
		loadOptions = arg2;
		callback = arg3;
		params = 3;
	}
	else {
		throw new Error("Invalid arguments");
	}

	if (__typeof__(readStream) != "ReadStream") {
		throw new Error("Invalid stream");
	}
	if (__typeof__(callback) != "Function") {
		throw new Error("Invalid callback function");
	}

	var inputStreamBuffer = new exports.StreamBuffer();
	readStream.on('data', function(chunk) {
		inputStreamBuffer.write(chunk);
	});
	readStream.on('end', function() {
		var scene, error;
		try {
			if (params == 2) {
				scene = java.newInstanceSync("com.aspose.threed.Scene", inputStreamBuffer.toInputStream());
			}
			else {
				scene = java.newInstanceSync("com.aspose.threed.Scene", inputStreamBuffer.toInputStream(), loadOptions);
			}
		}
		catch (err) {
			error = err;
		}
		callback(scene, error);
	});
};

exports.Scene.saveToStream = function(scene, writeStream, arg3) {
	if (arguments.length != 3) {
		throw new Error("Invalid arguments");
	}

	if (__typeof__(writeStream) != "WriteStream") {
		throw new Error("Invalid stream");
	}

	var outputStreamBuffer = new exports.StreamBuffer();
	scene.save(outputStreamBuffer, arg3);
	var buf;
	while ((buf = outputStreamBuffer.read(4096)) != null) {
		writeStream.write(new Buffer(buf));
	}
	writeStream.end();
};

exports.FileFormat.detectFileFormatFromStream = function(readStream, callback) {
	var readStream, callback;
	if (arguments.length != 2) {
		throw new Error("Invalid arguments");
	}

	if (__typeof__(readStream) != "ReadStream") {
		throw new Error("Invalid stream");
	}
	if (__typeof__(callback) != "Function") {
		throw new Error("Invalid callback function");
	}
	
	var inputStreamBuffer = new exports.StreamBuffer();
	readStream.on('data', function(chunk) {
		inputStreamBuffer.write(chunk);
	});
	readStream.on('end', function() {
		var result;
		var error;
		try {
			result = exports.FileFormatUtil.detectFileFormat(inputStreamBuffer.toInputStream());
		}
		catch (err) {
			error = err;
		}
		callback(result, error);
	});
};

exports.Shape.toPdfStream = function(shape, writeStream) {
	if (arguments.length != 2) {
		throw new Error("Invalid arguments");
	}

	if (__typeof__(writeStream) != "WriteStream") {
		throw new Error("Invalid stream");
	}
	
	var outputStreamBuffer = new exports.StreamBuffer();
	shape.toPdf(outputStreamBuffer);
	var buf;
	while ((buf = outputStreamBuffer.read(4096)) != null) {
		writeStream.write(new Buffer(buf));
	}
	writeStream.end();
};

exports.Shape.toImageStream = function(shape, writeStream, options) {
	if (arguments.length != 3) {
		throw new Error("Invalid arguments");
	}

	if (__typeof__(writeStream) != "WriteStream") {
		throw new Error("Invalid stream");
	}
	
	var outputStreamBuffer = new exports.StreamBuffer();
	shape.toImage(outputStreamBuffer, options);
	var buf;
	while ((buf = outputStreamBuffer.read(4096)) != null) {
		writeStream.write(new Buffer(buf));
	}
	writeStream.end();
};

