---
title: Preferências de exportação de importação
---
## Introdução

FreeCAD can import and export many file formats. For some formats dedicated preferences exist. These can be found in the [Preferences editor](/Preferences_Editor "Preferences Editor"). In the menu select **Edit → Preferences...** and then **Import-Export**.

Not all import and export preferences pages are available by default. For some a workbench has to be loaded first.

Esta página foi atualizada para a versão 1.0.

## Notas

### TechDraw pages

The DXF and SVG preferences listed here are not used by the ![](/images/TechDraw_ExportPageSVG.svg) [Export Page as SVG](/TechDraw_ExportPageSVG "TechDraw ExportPageSVG") and ![](/images/TechDraw_ExportPageDXF.svg) [Export Page as DXF](/TechDraw_ExportPageDXF "TechDraw ExportPageDXF") commands of the ![](/images/Workbench_TechDraw.svg) [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench"), or by the [TechDraw](/TechDraw_Workbench "TechDraw Workbench") export option: **File → Export → Technical Drawing (\*.svg \*.dxf \*.pdf)**.

### Arquivos IFC

Some NativeIFC specific IFC import and export preferences can be found under the [BIM Preferences](/BIM_Preferences "BIM Preferences").

### OpenSCAD files

The import and export preferences for OpenSCAD files can be found under the [OpenSCAD Preferences](/OpenSCAD_Preferences "OpenSCAD Preferences").

## Related

See the following pages for additional information:

* [Import Export](/Import_Export "Import Export"): A table listing all supported file formats.
* [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export"): A list of tutorials that can help users convert data from one format to another.

## Available preferences

### DAE

![](/images/Preferences_Import-Export_Page_DAE.png)

The [Collada](http://en.wikipedia.org/wiki/COLLADA) DAE (Digital Asset Exchange) format is a standard file format for exchange of Mesh data. FreeCAD can import meshes from .dae files, and export [Shape](/Part_Workbench "Part Workbench")-based objects to the .dae format.

Note for Linux users: To handle this file format FreeCAD requires the [pyCollada module](/Extra_python_modules "Extra python modules").

Nesta página você pode especificar o seguinte:

| Name | Description |
| --- | --- |
| **Scaling factor** | All dimensions in the file will be scaled with the specified factor. |
| **Mesher** | Sets the meshing program that should be used. If using *Netgen*, make sure that it is available. This can be checked by using the  [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") and [creating a mesh](/Mesh_FromPartShape "Mesh FromPartShape") using Netgen. If it is not available another version of FreeCAD, compiled with Netgen, must be installed. |
| **Tessellation** | The tessellation value to use with the *Builtin* and the *Mefisto* meshing program. |
| **Grading** | The grading value to use for meshing using *Netgen*. This value describes how fast the mesh size decreases. The gradient of the local mesh size `h(x)` is bound by `abs(Δh(x)) ≤ 1/value`. |
| **Segments per edge** | The maximum number of segments per edge. |
| **Segments per radius** | The number of segments per radius. |
| **Second order** | Allow a second order mesh. |
| **Optimize** | Allow optimization. |
| **Allow quads** | Allow [quadrilateral faces](https://en.wikipedia.org/wiki/Types_of_mesh#Two-dimensional). |

### DWG

![](/images/Preferences_Import-Export_Page_DWG.png)

DWG (from drawing) is a proprietary, closed source, binary file format for storing 2D and 3D design data and metadata. FreeCAD requires external converters to process DWG files.

**Note:** All settings for the DXF file format also apply to DWG.

Nesta página você pode especificar o seguinte:

| Name | Description |
| --- | --- |
| **Conversion method** | Select the DWG converter to use:  * **Automatic**: FreeCAD will try to find a converter automatically following the order of the rest of this list. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): For LibreDWG the OS search path is searched (`os.getenv("PATH")`), for the other converters default installation paths are assumed. * **LibreDWG**: [LibreDWG](https://www.gnu.org/software/libredwg/) is an open-source DWG reading and writing library. It lacks support for several DWG entities, and may not always give faithful results. * **ODA Converter**: The [ODA File Converter](https://www.opendesign.com/guestfiles/oda_file_converter) is a free utility provided by the Open Design Alliance. It gives very good and reliable results. * **QCAD pro**: [QCAD pro](https://qcad.org/en/qcad-command-line-tools#dwg2dwg) is the paid version of the open-source QCAD DXF-based 2D CAD platform. Its DWG converter uses the Teigha libraries from the OpenDesign Alliance and therefore gives the same good results as the ODA File Converter. |
| **Path to file converter** | If FreeCAD is unable to find a converter you need to specify a path here:  * LibreDWG: dwg2dxf or dxf2dwg on Linux and macOS, dwg2dxf.exe or dxf2dwg.exe on Windows. Either filename can be specified for both the conversion from DWG and to DWG. * ODA Converter: ODAFileConverter on Linux and macOS, ODAFileConverter.exe on Windows. * QCAD pro: dwg2dwg (a bash script) on Linux and macOS, dwg2dwg.bat on Windows.   [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): The path must contain the correct filename. |

### DXF

![](/images/Preferences_Import-Export_Page_DXF.png)

AutoCAD [DXF](/DXF "DXF") (Drawing eXchange Format) is a proprietary format to exchange CAD data between AutoCAD and other programs.

Nesta página você pode especificar o seguinte:

| Name | Description |
| --- | --- |
| **Show this dialog when importing and exporting** | If checked, this preferences dialog will be shown when importing or exporting DXF files. |
| **Use legacy python importer** | If checked, the Python importer is used, otherwise the newer C++ one. The C++ importer is faster, but has not as many features yet. The Python importer uses the **Edit → Preferences... → Draft → General settings → Internal precision level** preference. For an accurate import result set this value to 8 or higher. |
| **Use legacy python exporter** | If checked, the Python exporter is used, otherwise the newer C++ one. The C++ exporter is faster, but has not as many features yet. |
| **Allow FreeCAD to automatically download and update the DXF libraries** | By checking this, you will allow FreeCAD to download the [Python converter](/FreeCAD_and_DXF_Import "FreeCAD and DXF Import") for DXF import and export. This converter cannot be bundled with FreeCAD because it has a different software license. |
| **Import** | Select what will be imported. If **texts and dimensions** is checked, texts and [mtexts](https://www.autodesk.com/techpubs/autocad/acad2000/dxf/mtext_dxf_06.htm) will be imported too.  Se **pontos** estiver marcado, os pontos também serão importados.  If **layouts** is checked, paper space objects will be imported too.  If **\*blocks** is checked, anonymous blocks (which have names beginning with a \*) will be imported too. |
| **Create** | Select what will be created. If **simple Part shapes** is selected, only standard Part objects will be created. This is the fastest.  If **Draft objects** is selected, parametric Draft objects will be created whenever possible.  If **Sketches** is selected, sketches will be created whenever possible. |
| **Scale factor to apply to imported files** | Scale factor to apply to DXF files on import. The factor is the conversion between the units of your DXF file and millimeters. Example: for files in millimeters: 1, in centimeters: 10, in meters: 1000, in inches: 25.4, in feet: 304.8. |
| **Use colors from the DXF file** | If checked, colors will be retrieved from the DXF objects whenever possible. Otherwise default colors will be applied. |
| **Join geometry** | If checked, FreeCAD will try to join coincident objects into wires. Note that this can take a while! |
| **Group layers into blocks** | If checked, objects from the same layers will be joined into Draft Blocks, which display faster, but are less easily editable. |
| **Use standard font size for texts** | If checked, imported texts will get the standard [Draft Text](/Draft_Text "Draft Text") size, instead of the size they have in the DXF document. |
| **Use layers** | If checked, DXF layers will be imported as [Draft Layers](/Draft_Layer "Draft Layer"). |
| **Import hatch boundaries as wires** | If checked, hatches will be converted to simple wires. |
| **Render polylines with width** | If checked, if polylines have a width defined, they will be rendered as closed wires with the correct width. |
| **Treat ellipses and splines as polylines** | The export of ellipses and splines is poorly supported. Use this option to export them as polylines instead. The setting **Max Spline Segment** is then the maximum length of each of the polyline segments. If it is set to **0** the whole spline is treated as a straight segment. |
| **Export 3D objects as polyface meshes** | If checked, all objects containing faces will be exported as 3D polyfaces. |
| **Export TechDraw Views as blocks** | If this is checked, TechDraw Views will be exported as blocks. This might fail for post DXF R12 templates. |
| **Project exported objects along current view direction** | If checked, the exported objects will be projected to reflect the current view direction. This option only works if the legacy Python exporter is used. |

### IFC

[Industry Foundation Classes](http://en.wikipedia.org/wiki/Industry_Foundation_Classes) (IFC) is a wide spread format to exchange data between [BIM](http://en.wikipedia.org/wiki/Building_Information_Modeling) applications. It is used in architecture and engineering.

Note for Linux users: To handle this file format FreeCAD requires the [IfcOpenShell module](/Extra_python_modules "Extra python modules").

#### IFC import

![](/images/Preferences_Import-Export_Page_IFC_import.png)

Nesta página você pode especificar o seguinte:

| Name | Description |
| --- | --- |
| **Show this dialog when importing** | If checked, this preferences dialog will be shown when importing IFC files. |
| **Show debug messages** | Shows verbose debug messages during import and export of IFC files in the [Report view](/Report_view "Report view"). |
| **Create clones when objects have shared geometry** | IFC objects can share a same geometry definition between several objects, only their placement is different. When this option is enabled, clones are used to achieve the same result in FreeCAD. One object is the base object, the others are clones. |
| **Number of cores to use (experimental)** | Specify the number of CPU cores to use for IFC import. The maximum number should be smaller than the number of actually available cores. Use **0** to disable this feature. |
| **Import arch IFC objects as** | What will be created in FreeCAD for arch IFC objects. |
| **Import struct IFC objects as** | What will be created in FreeCAD for struct IFC objects. |
| **Root element** | Only subtypes of the specified element will be imported. Keep the predefined element [IfcProduct](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifckernel/lexical/ifcproduct.htm) to import all building elements. |
| **Separate openings** | If checked, openings will be imported as subtractions, otherwise wall shapes will already have their openings subtracted. |
| **Detect extrusions** | If checked, the importer will try to detect extrusions. Note that this might slow things down. |
| **Split multilayer walls** | Splits walls made of multiple layers. |
| **Prefix names with ID number** | If checked, object names will be prefixed with the [IFC ID](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcutilityresource/lexical/ifcgloballyuniqueid.htm) number. |
| **Merge materials with same name and same color** | If several materials with the same name are found in the IFC file, they will be treated as one. |
| **Import Ifc properties in spreadsheet** | If checked, each object will have their [IFC properties](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcpropertyresource/lexical/ifcproperty.htm) stored in a spreadsheet object. |
| **Allow invalid shapes** | If unchecked invalid shapes are not imported. |
| **Exclude list** | A comma-separated list of [IFC entities](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/toc-5.htm) to be excluded from imports. |
| **Fit view while importing** | Fit view during import on the imported objects. This will slow down the import, but one can watch the import. |
| **Import full FreeCAD parametric definitions if available** | Creates a full parametric model on import using stored FreeCAD object properties. To get the FreeCAD properties, the model must have been exported using the option **Export full FreeCAD parametric model**. |
| **Replace 'Project', 'Site', 'Building' and 'Storey' with 'Group'** | If checked, groups will be used to replace the mentioned objects. |

#### IFC export

![](/images/Preferences_Import-Export_Page_IFC_export.png)

Nesta página você pode especificar o seguinte:

| Name | Description |
| --- | --- |
| **Show this dialog when exporting** | If checked, this preferences dialog will be shown when exporting IFC files. |
| **Export type** | Select how the model should be exported: as **Standard model**, **Structural Analysis**, or **Standard + structural**. |
| **Force export as Brep** | Some IFC viewers don't like objects exported as extrusions. Use this to force all objects to be exported as [BREP](https://en.wikipedia.org/wiki/Boundary_representation) geometry. But avoid exporting as Brep if possible as this makes objects non-parametric. |
| **Use DAE triangulation options** | Use triangulation options set in the DAE options page. |
| **Join coplanar facets when triangulating** | Curved shapes that cannot be represented as curves in IFC are decomposed into flat facets. If this is checked, some additional calculation is done to join coplanar facets. |
| **Store IFC unique ID in FreeCAD objects** | When exporting objects without a [unique ID](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcutilityresource/lexical/ifcgloballyuniqueid.htm) (UID), the generated UID will be stored inside the FreeCAD object for reuse the next time the object is exported. This leads to smaller differences between file versions. |
| **Use IfcOpenShell serializer if available** | [IFCOpenShell](/Extra_python_modules#IfcOpenShell "Extra python modules") is a library for IFC files. Its *serializer* functionality can produce valid IFC geometry from [OCC](/Glossary#OCC "Glossary") shapes. Note that this is still an experimental feature. |
| **Export 2D objects as IfcAnnotations** | If checked, 2D objects will be exported as [IfcAnnotation](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcproductextension/lexical/ifcannotation.htm). |
| **Export full FreeCAD parametric model** | If checked, all FreeCAD object properties will be stored inside the exported objects, allowing to recreate a full parametric model on reimport using the option **Import full FreeCAD parametric definitions if available**. |
| **Reuse similar entities** | If checked, similar entities will be used only once in the file if possible. This can reduce the file size a lot, but will make it less easily readable. |
| **Disable IfcRectangleProfileDef** | Whenever possible, IFC objects that are extruded rectangles will be exported as [IfcRectangleProfileDef](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcprofileresource/lexical/ifcrectangleprofiledef.htm). For applications that have problems importing these entities, select this option to ensure that all profiles are exported as [IfcArbitraryClosedProfileDef](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcprofileresource/lexical/ifcarbitraryclosedprofiledef.htm) instead. |
| **Auto-detect and export as standard cases when applicable** | Some IFC types such as [IfcWall](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcsharedbldgelements/lexical/ifcwall.htm) or [IfcBeam](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcsharedbldgelements/lexical/ifcbeam.htm) have special standard versions like [IfcWallStandardCase](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcsharedbldgelements/lexical/ifcwallstandardcase.htm) or [IfcBeamStandardCase](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcsharedbldgelements/lexical/ifcbeamstandardcase.htm). If this option is selected, FreeCAD will automatically export such objects as standard cases when the necessary conditions are met. |
| **Add default site if one is not found in the document** | When exporting an IFC file, if no site is found in the FreeCAD document, a default one is added. A site is not mandatory according to the IFC standard, but it is common practice to have at least one in the file. |
| **Add default building storey if one is not found in the document** | When exporting an IFC file, if no building storey is found in the FreeCAD document, a default one is added. A building storey is not mandatory according to the IFC standard, but it is common practice to have at least one in the file. |
| **IFC file units** | Select which units will be used when exporting IFC files. |
| **Add default building if one is not found in the document** | When exporting an IFC file, if no building is found in the FreeCAD document, a default one is added. **Warning**: The IFC standard asks for at least one building in each file. By turning this option off, you will produce a non-standard IFC file.  However, at FreeCAD we believe having a building should not be mandatory, and this option is there to have a chance to demonstrate our point of view. |
| **Export nested groups as assemblies** | In FreeCAD, it is possible to nest groups inside buildings or storeys. If this option is disabled, FreeCAD groups will be saved as IfcGroups and aggregated to the building structure. Aggregating non-building elements such as IfcGroups is however not recommended by the IFC standards. It is therefore also possible to export these groups as IfcElementAssemblies, which produces an IFC-compliant file. However, at FreeCAD, we believe nesting groups inside structures should be possible, and this option is there to have a chance to demonstrate our point of view. |

### IGES

![](/images/Preferences_Import-Export_Page_IGES.png)

The [Initial Graphics Exchange Specification](https://en.wikipedia.org/wiki/IGES) (IGES) file format is a file format that allows the digital exchange of information among CAD systems. After publication of the [STEP](/Preferences_Editor#STEP "Preferences Editor") file format, IGES development was stopped in 1996, but it is still supported by many CAD programs. IGES files have the .iges or .igs extension.

This page is only shown if the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench"), ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"), or ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD Workbench](/OpenSCAD_Workbench "OpenSCAD Workbench") has been loaded in the current FreeCAD session.

Nesta página você pode especificar o seguinte:

| Name | Description |
| --- | --- |
| **Units for export of IGES** | Select what unit will be used when exporting IGES files. |
| **Write solids and shells as** | Select how solids and shells should be output. If **Groups of Trimmed Surfaces (type 144)** is selected, they will be exported as [trimmed surfaces](https://wiki.eclipse.org/IGES_file_Specification#Trimmed_Surface_.28Type_144.29).  If **Solids (type 186) and Shells (type 514) / B-REP mode** is selected, solids will be exported as [manifold solid B-Rep objects](https://wiki.eclipse.org/IGES_file_Specification#Manifold_Solid_B-Rep_Object_.28Type_186.29), shells as [shells](https://wiki.eclipse.org/IGES_file_Specification#Shell_.28Type_514.29). |
| **Skip blank entities** | If checked, blank [entities](https://wiki.eclipse.org/IGES_file_Specification#Entities) will not be imported. |
| **Company** | If not empty, the entered text will be used in the IGES file header for the company. |
| **Author** | If not empty, the entered text will be used in the IGES file header for the author. |
| **Product** | If not empty, the entered text will be used in the IGES file header for the product. |

### INP

![](/images/Preferences_Import-Export_Page_INP.png)

INP is the input file format for the FEM software [Abaqus](https://en.wikipedia.org/wiki/Abaqus). It is used for the [CalculiX](/FEM_CalculiX "FEM CalculiX") solver in the ![](/images/Workbench_FEM.svg) [FEM Workbench](/FEM_Workbench "FEM Workbench").

This page is only shown if the ![](/images/Workbench_FEM.svg) [FEM Workbench](/FEM_Workbench "FEM Workbench") has been loaded in the current FreeCAD session.

Nesta página você pode especificar o seguinte:

| Name | Description |
| --- | --- |
| **Which mesh elements to export** | Select which mesh elements should be exported. If **All** is selected, all elements will be exported.  If **Highest** is selected, only the highest elements will be exported. This means volumes for a volume mesh and faces for a shell mesh.  If **FEM** is selected, only FEM elements will be exported. This means only edges not belonging to faces and faces not belonging to volumes. |
| **Export group data** | If checked, mesh groups are exported too. Every constraint and, if there are different materials, material consists of two mesh groups, faces and nodes where the constraint or material is applied. |

### Mesh Formats

![](/images/Preferences_Import-Export_Page_Mesh_Formats.png)

Meshes are a special type of 3D object, composed of triangular faces connected by their [vertices](/Glossary#Vertex "Glossary") and edges. They are widely used for [additive manufacturing](https://en.wikipedia.org/wiki/3D_printing). FreeCAD provides the ![](/images/Workbench_Mesh.svg) [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") to create and handle meshes. FreeCAD supports several mesh file formats.

This page is only shown if the ![](/images/Workbench_Mesh.svg) [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") has been loaded in the current FreeCAD session.

Nesta página você pode especificar o seguinte:

| Name | Description |
| --- | --- |
| **Maximum mesh deviation** | Specification of the maximal deviation between the mesh and the object. |
| **Export AMF files using compression** | If checked, ZIP compression is used when writing a mesh file in AMF format. |
| **Export 3MF as model type** | If checked, meshes are always exported as model type in 3MF format, even if they are not a solid. |
| **Width** | Width of Asymptote page. |
| **Height** | Height of Asymptote page. |

### OCA

![](/images/Preferences_Import-Export_Page_OCA.png)

The [OCA](https://groups.google.com/g/open_cad_format) file format is a community project to create a free, simple and open CAD file format.
OCA is largely based on the GCAD file format generated by [gCAD3D](http://www.gcad3d.org/). Both formats can be imported in FreeCAD and the OCA files exported by FreeCAD can be opened in gCAD3D.

Nesta página você pode especificar o seguinte:

| Name | Description |
| --- | --- |
| **Import OCA areas** | If checked, the areas (3D faces) will be imported too. |

### STEP

![](/images/Preferences_Import-Export_Page_STEP.png)

The [Standard for The Exchange of Product model data](https://en.wikipedia.org/wiki/ISO_10303) (STEP) file format is an ISO standard for the computer-interpretable representation and exchange of product manufacturing information. STEP is commonly used to exchange 3D data between CAD software. STEP files have the .step or .stp extension. For compressed files the .stpz extension is used.

This page is only shown if the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench"), ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"), or ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD Workbench](/OpenSCAD_Workbench "OpenSCAD Workbench") has been loaded in the current FreeCAD session.

Nesta página você pode especificar o seguinte:

| Name | Description |
| --- | --- |
| **Write out curves in parametric space of surface** | If checked, parametric curves (curves in parametric space of surfaces) will be written into the STEP file. Unchecking the option can be helpful to minimize the size of the resulting STEP file. |
| **Export invisible objects** | Uncheck this to skip invisible object when exporting, which is useful for CAD applications that do not support invisibility STEP styling. |
| **Export single object placement** | Check this option to keep the placement information when exporting a single object. Please note that when re-importing the STEP file, the placement will be encoded into the shape geometry, instead of keeping it inside the Placement property. |
| **Use legacy export function** | Use the legacy export function. |
| **Units for export of STEP** | Select which units will be used when exporting STEP files. |
| **Scheme** | Select the STEP application protocol (AP) to be used for the export. **AP 203** is the protocol for configuration controlled 3D designs of mechanical parts and assemblies.  **AP 214** is the protocol for core data for automotive mechanical design processes. |
| **Enable STEP Compound merge** | If checked, a [compound](/Glossary#Compound "Glossary") merge will be done during file reading. This is slower but results in higher details. |
| **Use LinkGroup** | Select this to use App::LinkGroup group containers instead of App::Part group containers. |
| **Import invisible objects** | Select this to import invisible objects. |
| **Reduce number of objects** | Reduce the number of objects using Link arrays. |
| **Expand compound shape** | Expand compound shapes with multiple solids. |
| **Show progress bar when importing** | Show a progress bar when importing. |
| **Ignore instance names** | Do not use instance names. Useful for some legacy STEP files with non-meaningful auto-generated instance names. |
| **CodePage** | The encoding of STEP files can be specified here. |
| **Mode** | Select the required document structure. **Single document**  **Assembly per document**  **Assembly per document in sub-directory**  **Object per document**  **Object per document in sub-directory** |
| **Company** | If not empty, the entered text will be used in the STEP file header for the company. |
| **Author** | If not empty, the entered text will be used in the STEP file header for the author. |
| **Product** | If not empty, the entered text will be used in the STEP file header for the product. |

### SVG

![](/images/Preferences_Import-Export_Page_SVG.png)

[Scalable Vector Graphics](/SVG "SVG") (SVG) is a [vector image](https://en.wikipedia.org/wiki/Vector_graphics) format for two-dimensional graphics. A vector image can be scaled to any size without losing its shape or details. An SVG image can be converted to bitmap formats like PNG or JPEG for printing.

Nesta página você pode especificar o seguinte:

| Name | Description |
| --- | --- |
| **Import style** | Select how SVG object colors and line widths will be imported. If **None (fastest)** is selected no color or line width settings will be imported.  If **Use default color and linewidth** is selected FreeCAD will use its default color and line width.  If **Original color and linewidth** is selected FreeCAD will use the color and linewidth from the SVG objects. |
| **Disable units scaling** | If checked, no unit conversion will occur. One unit in the SVG file will translate as one millimeter. |
| **Export style** | Select how Sketches are exported to SVG. If **Translated (for print & display)** is selected, SVG objects are encapsulated in a group that is scaled and moved to the correct place in the SVG document to fit into a printable area.  If **Raw (for CAM)** is selected, SVG objects are placed as they are - at the same coordinates as in the FreeCAD model (1:1 export). |
| **Translate white line color to black** | If checked, all white lines will appear in black in the SVG for better readability against white backgrounds. |
| **Max segment length for discretized arcs** | Versions of [Open CASCADE](/Glossary#Open_CASCADE "Glossary") older than version 6.8 don't support arc projection. In this case arcs will be discretized into small line segments. This value is the maximum segment length. |

### VTK

![](/images/Preferences_Import-Export_Page_VTK.png)

The [Visualization Toolkit](https://en.wikipedia.org/wiki/VTK) (VTK) is an open-source, freely available software system for 3D computer graphics, image processing and visualization. VTK files are used by the ![](/images/Workbench_FEM.svg) [FEM Workbench](/FEM_Workbench "FEM Workbench") for the [post processing](/FEM_Post_Processing_based_on_VTK "FEM Post Processing based on VTK") of simulation results.

This page is only shown if the ![](/images/Workbench_FEM.svg) [FEM Workbench](/FEM_Workbench "FEM Workbench") has been loaded in the current FreeCAD session.

Nesta página você pode especificar o seguinte:

| Name | Description |
| --- | --- |
| **Which object to import into** | Select which objects should be imported and how. If **VTK result object** is selected, a FreeCAD FEM VTK result object will be imported (equals to the object which was exported).  If **FEM mesh object** is selected, the results in the VTK file will be omitted, only the mesh data will be imported and a FreeCAD FEM mesh object will be created.  If **FreeCAD result object** is selected, the imported data will be converted into a FreeCAD FEM Result object. **Note:** this setting needs the exact result component names and thus it only works properly with VTK files exported from FreeCAD. |

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_Export_Preferences/pt-br&oldid=1521254>"