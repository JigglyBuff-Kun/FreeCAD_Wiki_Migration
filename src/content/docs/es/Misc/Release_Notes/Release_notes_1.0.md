---
title: Notas del lanzamiento 1.0
---
**FreeCAD 1.0** fue liberado el **18 de noviembre del 2024**, consíguelo desde la página [Descarga](/Download/es "Download/es"). Este es un resumen de las nuevas características y los cambios más interesantes.

Las notas de lanzamiento de versiones anteriores de FreeCAD se pueden encontrar en la [Lista de características](/Feature_list/es#Notas_de_lanzamiento "Feature list/es").

## In memoriam: Bradley McLean (bgbsww)

Por mucho que estemos encantados de presentarles esta nueva versión, también nos entristece anunciar que nuestro amigo y prolífico desarrollador de FreeCAD [bgbsww](https://github.com/bgbsww) falleció unas semanas antes de que saliera esta versión. Fue uno de los principales arquitectos del esfuerzo de corrección de nombres topológicos, escribió una gran cantidad de código y pruebas adicionales y se convirtió en el especialista en TNP de FreeCAD. También ayudó a prácticamente todos los demás desarrolladores a adaptarse al nuevo algoritmo. Este lanzamiento está dedicado a él.

## General

|  |  |
| --- | --- |
|  | The long-standing [Topological naming problem](/Topological_naming_problem "Topological naming problem") has finally been addressed thanks to the joint effort and hard work of several developers. [Realthunder's algorithm](https://github.com/realthunder/FreeCAD_assembly3/wiki/Topological-Naming-Algorithm) has been carefully implemented and improved to work in the master version of FreeCAD. The project took over a year, and the initial implementation has been finalized with the following PR enabling the improvements. The TNP problem is not completely solved and further improvements will follow in the next version. [Pull request #13705](https://github.com/FreeCAD/FreeCAD/pull/13705) |

|  |  |
| --- | --- |
|  | FreeCAD has a new built-in [Assembly Workbench](/Assembly_Workbench "Assembly Workbench"), based on the original work done for what we used to call "[the other FreeCAD](https://www.askoh.com/freecad/what_is_freecad/index.html)", another software, also named FreeCAD, with motion simulation capabilities created at the same time as ours. The porting has been done by the other FreeCAD's author himself, [Dr. Aik-Siong Koh](https://www.askoh.com), and with this dramatic move both FreeCADs are now finally united. Read below for [more information](#Assembly_Workbench). [Pull request #10427](https://github.com/FreeCAD/FreeCAD/pull/10427) |

|  |  |
| --- | --- |
|  | FreeCAD has a new logo. It was selected from the 5 winners of the public contest. Usage guidelines and a logo kit are available on the [FreeCAD brand guidelines page](https://fpa.freecad.org/handbook/process/logo.html). [Pull request #14284](https://github.com/FreeCAD/FreeCAD/pull/14284) |

## Interfaz de usuario

|  |  |
| --- | --- |
|  | Se ha agregado un indicador del centro de rotación. Este indicador se muestra cuando se gira la vista arrastrando el mouse. Opcionalmente se puede desactivar en las preferencias. También hay configuraciones para su color, transparencia y tamaño. [Pull request #9909](https://github.com/FreeCAD/FreeCAD/pull/9909) y [Pull request #10790](https://github.com/FreeCAD/FreeCAD/pull/10790) |

|  |  |
| --- | --- |
| Haga clic en la imagen si la animación no inicia. | Se agregaron filtros de selección, facilitando la selección de vértices, aristas y caras. [Pull request #10271](https://github.com/FreeCAD/FreeCAD/pull/10271) |

|  |  |
| --- | --- |
|  | Para mayor flexibilidad, el panel de tareas ahora es un widget acoplable independiente, pero el diseño anterior se ha mantenido como predeterminado. [Pull request #10681](https://github.com/FreeCAD/FreeCAD/pull/10681) y [Pull request #10848](https://github.com/FreeCAD/FreeCAD/pull/10848) |

|  |  |
| --- | --- |
|  | Se ha mejorado la apariencia de la herramienta de arrastre [Transformar](/index.php?title=Std_TransformManip/es&action=edit&redlink=1 "Std TransformManip/es (page does not exist)"). Ahora también tiene un conjunto de arrastradores planos para mover objetos a lo largo de los 3 planos predeterminados. [Pull request #10706](https://github.com/FreeCAD/FreeCAD/pull/10706) |

|  |  |
| --- | --- |
|  | Realthunder's feature allowing for the overlay of dock widgets (tree and task transparency) has been added. [Pull request #7888](https://github.com/FreeCAD/FreeCAD/pull/7888) |

|  |  |
| --- | --- |
|  | The light source position can now be set in the preferences (*Preferences → Display*). [Pull request #11146](https://github.com/FreeCAD/FreeCAD/pull/11146) and [Pull request #15877](https://github.com/FreeCAD/FreeCAD/pull/15877) |

|  |  |
| --- | --- |
|  | The Preferences window was redesigned to replace the tabs with a tree view. [Pull request #11018](https://github.com/FreeCAD/FreeCAD/pull/11018) |

|  |  |
| --- | --- |
|  | TabBar workbench selector was added. It can be enabled and configured in *Preferences → Workbenches*. [Pull request #12270](https://github.com/FreeCAD/FreeCAD/pull/12270) |

|  |  |
| --- | --- |
|  | A new [universal measurement tool](/Std_Measure "Std Measure") was added, replacing the old [Part Measure tools](/Part_Workbench#Measure "Part Workbench"). [Pull request #9750](https://github.com/FreeCAD/FreeCAD/pull/9750) and following |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | The [Align to selection](/Std_AlignToSelection "Std AlignToSelection") tool was added, making it possible to enter views normal to faces or following edge directions. [Pull request #13906](https://github.com/FreeCAD/FreeCAD/pull/13906) |

### Otras mejoras de la interfaz de usuario

* A project unit system was introduced. [Pull request #9521](https://github.com/FreeCAD/FreeCAD/pull/9521)
* The [Section Cut](/Part_SectionCut "Part SectionCut") tool now also works in a perspective view. [Pull request #10143](https://github.com/FreeCAD/FreeCAD/pull/10143)
* An option to sort workbenches alphabetically (available after right-clicking in *Preferences → Workbenches*) was added. [Pull request #10363](https://github.com/FreeCAD/FreeCAD/pull/10363)
* A **Find file** filter and a **Find in files** filter were added to the [Std DlgMacroExecute](/Std_DlgMacroExecute "Std DlgMacroExecute") dialog. [Pull request #10714](https://github.com/FreeCAD/FreeCAD/pull/10714)
* The [View menu](/Std_View_Menu "Std View Menu") and the View toolbar have been revised. [Pull request #10761](https://github.com/FreeCAD/FreeCAD/pull/10761)
* The stop button was removed from the [Macro toolbar](/Macros "Macros"). The [record button](/Std_DlgMacroRecord "Std DlgMacroRecord") now switched to a stop button when recording is in progress. [Pull request #10836](https://github.com/FreeCAD/FreeCAD/pull/10836)
* The reset button in the Preferences now shows a menu with options to reset the settings at different levels: all, in the current group or in the current tab. [Pull request #10688](https://github.com/FreeCAD/FreeCAD/pull/10688) and [Pull request #11038](https://github.com/FreeCAD/FreeCAD/pull/11038)
* The Help Module was merged so that it's no longer necessary to download an add-on to make use of it. [Pull request #11008](https://github.com/FreeCAD/FreeCAD/pull/11008)
* Preferences to customize the current theme were added. [Pull request #10238](https://github.com/FreeCAD/FreeCAD/pull/10238)
* Default selection settings were changed to make the selection of objects in the 3D window easier. [Pull request #11187](https://github.com/FreeCAD/FreeCAD/pull/11187)
* A meters-only unit scheme named **Meter decimal** was added since the MKS (m/kg/s/degree) system doesn't always result in dimensions being displayed in meters - millimeters are still used for values below 0.1 m while for some applications (e.g. civil engineering) a unit system that actually changes the display of all dimensions to meters is useful. [Pull request #11365](https://github.com/FreeCAD/FreeCAD/pull/11365)
* Additional marker sizes (20, 25 and 30px) were added to *Preferences → Display → 3D View → Marker size* in order to assist users of 4K screens. [Pull request #11524](https://github.com/FreeCAD/FreeCAD/pull/11524)
* A *Toggle transparency* option was added to the View and context menus to quickly switch transparency on or off for selected objects. [Pull request #10805](https://github.com/FreeCAD/FreeCAD/pull/10805)
* A Lock toolbars command was added. With it toolbar positions can be locked or unlocked. It is available in the View menu and the toolbar area context menu. [Pull request #11596](https://github.com/FreeCAD/FreeCAD/pull/11596)
* Default shape color was adjusted to improve the appearance of the models. [Pull request #12380](https://github.com/FreeCAD/FreeCAD/pull/12380) and [Pull request #12488](https://github.com/FreeCAD/FreeCAD/pull/12488)
* Items within Part and Group containers can now be sorted by drag and drop. [Pull request #12293](https://github.com/FreeCAD/FreeCAD/pull/12293)
* Visibility icons (eye symbol) are added to tree objects if the Show visibility icon option is checked in *Preferences → Display → UI*. [Pull request #12298](https://github.com/FreeCAD/FreeCAD/pull/12298)
* A [frozen](/Std_ToggleFreeze "Std ToggleFreeze") status (*Toggle freeze* option in the context menu in the [tree](/Tree_view "Tree view")) was added, making it possible to turn off the parametric behavior of an object (so that it doesn't change even if the objects it depends on change). [Pull request #12580](https://github.com/FreeCAD/FreeCAD/pull/12580)
* Navigation animations have been improved. Animations now use an easing function and have a fixed duration which can be changed in *Preferences → Display → Navigation*. [Pull request #10881](https://github.com/FreeCAD/FreeCAD/pull/10881) and [Pull request #12205](https://github.com/FreeCAD/FreeCAD/pull/12205)
* The buttons for the default views are now grouped under a single button. The individual buttons are still available in the additional *Individual views* toolbar. [Pull request #12878](https://github.com/FreeCAD/FreeCAD/pull/12878)
* The name of the current active document is now also displayed in the window title bar. [Pull request #12035](https://github.com/FreeCAD/FreeCAD/pull/12035)
* A command to display the [Property View](/Property_editor "Property editor") panel was added. [Pull request #12024](https://github.com/FreeCAD/FreeCAD/pull/12024)
* The integration of 3Dconnexion devices with FreeCAD on Windows was improved. [Pull request #12929](https://github.com/FreeCAD/FreeCAD/pull/12929)
* A Quick Measure feature was added. It uses the [Status bar](/Status_bar "Status bar") to display key measurement information (edge length, face area, distance/angle between points/edges and radius of circular edges/cylindrical faces) about the current selection in the 3D view. [Pull request #12217](https://github.com/FreeCAD/FreeCAD/pull/12217)
* Toolbars can now be dragged and dropped to the status and menu bars. [Pull request #13571](https://github.com/FreeCAD/FreeCAD/pull/13571)
* A *Reload stylesheet* button was added to aid the stylesheet development. It doesn't belong to any toolbar by default, it has to be added manually from *Tools → Customize → Toolbars → View*. [Pull request #13982](https://github.com/FreeCAD/FreeCAD/pull/13982)
* Document icons (including the [Open](/Std_Open "Std Open") and [Save](/Std_Save "Std Save") ones, among others) were improved and unified. [Pull request #13865](https://github.com/FreeCAD/FreeCAD/pull/13865)
* The [Fit all](/Std_ViewFitAll "Std ViewFitAll") icon was replaced for clarity. [Pull request #14180](https://github.com/FreeCAD/FreeCAD/pull/14180)
* Multiple core icons (such as [New](/Std_New "Std New")) were improved. [Pull request #14278](https://github.com/FreeCAD/FreeCAD/pull/14278), [Pull request #14434](https://github.com/FreeCAD/FreeCAD/pull/14434) and [Pull request #14154](https://github.com/FreeCAD/FreeCAD/pull/14154)
* Icons of the Sketcher and Part Design task panel headers were improved. [Pull request #13968](https://github.com/FreeCAD/FreeCAD/pull/13968)
* In [headless mode](/Headless_FreeCAD "Headless FreeCAD") the interactive Python console now features tab-completion, provided the [readline](https://docs.python.org/3/library/readline.html) module is available. [Pull request #14213](https://github.com/FreeCAD/FreeCAD/pull/14213)
* An option to display internal names in the tree view was added. It's disabled by default and can be activated in *Preferences → Display → UI → Hide Internal Names*. [Pull request #14237](https://github.com/FreeCAD/FreeCAD/pull/14237)
* The Help button was removed from the Preferences because it was non-functional. [Pull request #14695](https://github.com/FreeCAD/FreeCAD/pull/14695)
* Default stylesheets were improved significantly and are now offered in two variants other than classic - light and dark. [Pull request #13772](https://github.com/FreeCAD/FreeCAD/pull/13772)
* The Theme and UI pages in the Display group of the Preferences have been reorganized and combined. Some preferences have been moved to the new Advanced page. [Pull request #14974](https://github.com/FreeCAD/FreeCAD/pull/14974)
* The Part/Part Design check and refine preferences are now activated by default. [Pull request #14406](https://github.com/FreeCAD/FreeCAD/pull/14406)
* A new parameter was added - **BaseApp/Preferences/Bitmaps/Theme/UseIconTheme** (boolean): Set to true to force Qt to use icons from the system's icon theme. The default is false so FreeCAD will use its own icons. It does not affect other Qt icon theme mechanisms such as system dialogs, buttons and others. Those should always use the icons from the system theme. [Pull request #16018](https://github.com/FreeCAD/FreeCAD/pull/16018)
* Stylesheet, theme and QtStyle information is now included in *Help → About FreeCAD*. [Pull request #16281](https://github.com/FreeCAD/FreeCAD/pull/16281)
* Splash screen is now randomly selected on startup from multiple images including user models and presentations of some of the add-on workbenches. [Pull request #16071](https://github.com/FreeCAD/FreeCAD/pull/16071)
* A safe mode was added and can be activated via *Help → Restart in safe mode*. It temporarily disables user configurations, addons, themes and other customizations to run FreeCAD in a "factory reset" state for debugging. [Pull request #16858](https://github.com/FreeCAD/FreeCAD/pull/16858)

## File format changes

Although precautions have been taken to guarantee that files created with the new 1.0 version can still be opened in older versions of FreeCAD, some new features introduced in 1.0 cannot be understood by earlier versions, and can cause models saved with 1.0 to break or present problems when opened in earlier versions of FreeCAD. Here is a summary of possible issues you might encounter and their solution. The forum community can also provide help in fixing compatibility issues.

* the **Attachment** property has been renamed to **AttachmentSupport**. This means features relying on that property (most notably models using the Assembly4 addon) will need to be fixed to be opened in an earlier version of FreeCAD. A [macro is available here](/Macro_Convert_021 "Macro Convert 021") to fix those files.

## Núcleo del sistema y API

### Core

* Vector functions from the [Vector API](/Vector_API "Vector API") can now be used in [Expressions](/Expressions "Expressions"). [Pull request #8603](https://github.com/FreeCAD/FreeCAD/pull/10237).
* The Python editor now matches indentation of the previous line when pressing the enter key. [Pull request #11356](https://github.com/FreeCAD/FreeCAD/pull/11356).
* The name of the property holding the reference object(s) of an attachment has changed from Datos**Support** to Datos**AttachmentSupport**. [Pull request #12714](https://github.com/FreeCAD/FreeCAD/pull/12714).
* A property container, App::VarSet, has been introduced as a core feature. A VarSet allows users to define properties that can be used in models just as spreadsheet aliases and other previous property containers (Dynamic Data, Path PropertyBags, and Assembly 4 Variables). [Pull Request #12135](https://github.com/FreeCAD/FreeCAD/pull/12135)

### API

#### Nueva API de Python

* `getUpDirection`: Gets the up-direction from a View3DInventor view. [Pull request #10060](https://github.com/FreeCAD/FreeCAD/pull/10060)

#### Changed Python API

* To save/restore custom data from a Python feature, the previously called methods `__getstate__`/`__setstate__` have been renamed to `dumps`/`loads`. This is due to internal changes in Python-3.11. [Pull request #10769](https://github.com/FreeCAD/FreeCAD/pull/10769) and [Pull request #12243](https://github.com/FreeCAD/FreeCAD/pull/12243).

## Start

The Start Workbench has been replaced by a Start page, a QtWidgets-based app. It can be displayed using the *Help → Start* option. [Pull request #13134](https://github.com/FreeCAD/FreeCAD/pull/13134)

The first two pull requests mentioned below belong to the Start Workbench, but have informed the design of the Start page.

|  |  |
| --- | --- |
|  | A **New file** section that includes a number of quick-start buttons has been added to the Start Page. [Pull request #10171](https://github.com/FreeCAD/FreeCAD/pull/10171) |

|  |  |
| --- | --- |
|  | The visual design of the Start Page has been overhauled. It now looks more modern and consistent. [Pull request #10391](https://github.com/FreeCAD/FreeCAD/pull/10391) |

|  |  |
| --- | --- |
|  | A simple first start widget was added and will be extended in the near future. [Pull request #13650](https://github.com/FreeCAD/FreeCAD/pull/13650) |

## Assembly Workbench

|  |  |
| --- | --- |
|  | A built-in [Assembly workbench](/Assembly_Workbench "Assembly Workbench") was finally added to FreeCAD. It uses the open-source [Ondsel solver](https://github.com/Ondsel-Development/OndselSolver). Basic functionalities (joints) are already available. Further development is in progress. [Pull request #10427](https://github.com/FreeCAD/FreeCAD/pull/10427), [Pull request #10764](https://github.com/FreeCAD/FreeCAD/pull/10764), [Pull request #12406](https://github.com/FreeCAD/FreeCAD/pull/12406) and more |

### Further Assembly improvements

* An [Exploded View](/Assembly_CreateView "Assembly CreateView") was added. [Pull request #12419](https://github.com/FreeCAD/FreeCAD/issues/12419)
* Assembly icons were updated and the experimental features exposed. [Pull request #13866](https://github.com/FreeCAD/FreeCAD/pull/13866)
* Angle, Perpendicular and Parallel joints were added. [Pull request #14008](https://github.com/FreeCAD/FreeCAD/pull/14008)
* A [Bill of Materials](/Assembly_CreateBom "Assembly CreateBom") feature was added. [Pull request #14198](https://github.com/FreeCAD/FreeCAD/pull/14198)
* Support for the [TNP](/Topological_naming_problem "Topological naming problem") mitigation code was added. [Pull request #14674](https://github.com/FreeCAD/FreeCAD/pull/14674)
* Flexible sub-assemblies support was added. Sub-assemblies added to a parent assembly can be defined as rigid (a solid unit) or flexible (allow movement of their individual components). Manual steps are required for those sub-assemblies added during the development cycle prior to merging this feature. Those assemblies will need to be removed and re-added to their parent assembly. [Pull request #15629](https://github.com/FreeCAD/FreeCAD/pull/15629)

## Entorno de Trabajo Arch

|  |  |
| --- | --- |
|  | The Arch Workbench has finally been merged with [BIM](/BIM_Workbench "BIM Workbench"), becoming the new BIM workbench. The new BIM workbench keeps all the tools from Arch, and adds a few more, and brings many refinements to the whole BIM and architectural design workflow, plus better setup and management tools, and better IFC support. [Pull request #13783](https://github.com/FreeCAD/FreeCAD/pull/13783) |

### Further BIM improvements

* Coming from the BIM workbench, some "all-in-one" Arch tools have been split into different use cases: The [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart") tool has been split into the [BIM Building](/Arch_Building "Arch Building") and [BIM Level](/Arch_Floor "Arch Floor") tools, the [Arch Structure](/Arch_Structure "Arch Structure") tool has been split into [BIM Column](/BIM_Column "BIM Column"), [BIM Beam](/BIM_Beam "BIM Beam") and [BIM Slab](/BIM_Slab "BIM Slab"), and the [Arch Window](/Arch_Window "Arch Window") tool has been split into [BIM Window](/Arch_Window "Arch Window") and [BIM Door](/BIM_Door "BIM Door"). Internally, those tools still produce the same object, only with different IFC types and presets applied. [Pull request #13783](https://github.com/FreeCAD/FreeCAD/pull/13783)
* [NativeIFC](https://github.com/yorikvanhavre/FreeCAD-NativeIFC) has also been merged into the new BIM workbench. With NativeIFC, you can now work on IFC files in FreeCAD natively, with no more translation to and from the FreeCAD file format. Read more on the [NativeIFC](/NativeIFC "NativeIFC") page. [Pull request #13783](https://github.com/FreeCAD/FreeCAD/pull/13783)
* The [Arch CutPlane](/Arch_CutPlane "Arch CutPlane") command has been improved. It is now nesting and link aware and the selection is more flexible. Edges can also be selected making the Arch CutLine command obsolete. [Pull request #11254](https://github.com/FreeCAD/FreeCAD/pull/11254) and [Pull request #11792](https://github.com/FreeCAD/FreeCAD/pull/11792)
* The BIM preferences have been checked and improved. The pages in the [Preferences Editor](/Preferences_Editor "Preferences Editor") have a new layout. [Pull request #11940](https://github.com/FreeCAD/FreeCAD/pull/11940) and [Pull request #12038](https://github.com/FreeCAD/FreeCAD/pull/12038)
* An *Opening only* preset has been added to the [Arch Window](/Arch_Window "Arch Window") command. [Pull request #12209](https://github.com/FreeCAD/FreeCAD/pull/12209)
* The [Arch Roof](/Arch_Roof "Arch Roof") object now has a *Subvolume* property. This allows to use a custom solid object as the subtraction volume for a roof. [Pull request #12346](https://github.com/FreeCAD/FreeCAD/pull/12346)
* Furthermore for an [Arch Roof](/Arch_Roof "Arch Roof") object that uses a solid object as its *Base* an appropriate subtraction volume is now automatically generated. Just as a wire-based roof, such a roof can be subtracted from the walls of a building with [Arch Remove](/Arch_Remove "Arch Remove"). [Pull request #13221](https://github.com/FreeCAD/FreeCAD/pull/13221)
* The [Arch Reference](/Arch_Reference "Arch Reference") tool has been upgraded: reference objects can now use whole file contents instead of having to choose a part, support for DXF and IFC files has been added. [Pull request #13287](https://github.com/FreeCAD/FreeCAD/pull/13287)
* FreeCAD now has a new BIM example file. [Pull request #14937](https://github.com/FreeCAD/FreeCAD/pull/14937)
* The new BIM workbench also offers a series of new management tools, to help you set up your project, or bulk manage IFC properties of your objects. Read more on the [BIM Workbench](/BIM_Workbench "BIM Workbench") page.
* [IfcOpenShell](/IfcOpenShell "IfcOpenShell"), another piece of open-source software needed to work with IFC files in FreeCAD, is now bundled in all official installer packages offered by the FreeCAD team. If you get FreeCAD from a third-party provider, such as your Linux distribution, where IfcOpenShell has not made it yet as an official package, the BIM workbench offers a utility tool to download and install IfcOpenShell. And if you have no use for IFC, the BIM workbench still works 100% without IfcOpenShell.
* The toolbars and menus of the BIM Workbench were reworked. [Pull request #14087](https://github.com/FreeCAD/FreeCAD/pull/14087)

## CAM Workbench

* The Path Workbench is now named CAM. [Pull request #12665](https://github.com/FreeCAD/FreeCAD/pull/12665)

### Further CAM improvements

* Rest machining was reimplemented to take input from the G-code of earlier operations (instead of using the internals of [Area](/CAM_Area "CAM Area") operations). This enables support for rest machining in Area operations after non-Area ones (most notably Adaptive). [Pull request #11939](https://github.com/FreeCAD/FreeCAD/pull/11939)
* G43 tool height compensation was added to the centroid CAM post-processor. [Pull request #12652](https://github.com/FreeCAD/FreeCAD/pull/12652)
* A *Feed retract* option was added to drilling operation settings for reaming and boring. [Pull request #13254](https://github.com/FreeCAD/FreeCAD/pull/13254)
* A new CAM simulator based on low-level OpenGL functions (faster and more precise) was added. [Pull request #13884](https://github.com/FreeCAD/FreeCAD/pull/13884) and [Pull request #15597](https://github.com/FreeCAD/FreeCAD/pull/15597)
* The [Vcarve](/CAM_Vcarve "CAM Vcarve") operation was reworked to include features commonly available in other CAM software (Step down, Finishing pass, Head movement optimization and debugVoronoi method) making it possible to drastically improve the carved surface quality while increasing the carving speed up to 50%. [Pull request #14093](https://github.com/FreeCAD/FreeCAD/pull/14093)
* Machinability material models were added along with several materials. [Pull request #14460](https://github.com/FreeCAD/FreeCAD/pull/14460), [Pull request #15910](https://github.com/FreeCAD/FreeCAD/pull/15910) and [Pull request #16021](https://github.com/FreeCAD/FreeCAD/pull/16021)

## Entorno de Trabajo Draft

* A justification option and several related properties have been added to [Draft ShapeStrings](/Draft_ShapeString "Draft ShapeString"). [Pull request #10233](https://github.com/FreeCAD/FreeCAD/pull/10233)
* [Radial dimensions](/Draft_Dimension#Usage_radial_dimension "Draft Dimension") now only show a single arrow. [Pull request #10655](https://github.com/FreeCAD/FreeCAD/pull/10655)
* An *Oblique Angle* property has been added to [Draft ShapeStrings](/Draft_ShapeString "Draft ShapeString"). [Pull request #10783](https://github.com/FreeCAD/FreeCAD/pull/10783)
* Support for hyperlinks has been added. Hyperlinks, to local and remote files and URLs, in [Draft Texts](/Draft_Text "Draft Text") and [Draft Labels](/Draft_Label "Draft Label") can be opened from the their [Tree view](/Tree_view "Tree view") or [3D view](/3D_view "3D view") context menu. [Pull request #10878](https://github.com/FreeCAD/FreeCAD/pull/10878)
* The [Draft working plane](/Draft_SelectPlane "Draft SelectPlane") code has been reworked. There is now a working plane per 3D view. [Pull request #11010](https://github.com/FreeCAD/FreeCAD/pull/11010)
* The history feature and the alignment options of the [Draft SelectPlane](/Draft_SelectPlane "Draft SelectPlane") command have been improved. [Pull request #11062](https://github.com/FreeCAD/FreeCAD/pull/11062)
* The behavior of the [grid](/Draft_ToggleGrid "Draft ToggleGrid") has been improved. Its visibility is now stored per 3D view. When switching to a different workbench all grids are hidden (a [fine-tuning](/Fine-tuning "Fine-tuning") parameter is available to disable this). [Pull request #11336](https://github.com/FreeCAD/FreeCAD/pull/11336)
* The Draft preferences have been checked and improved. Some preferences have been added, obsolete preferences have been removed. The pages in the [Preferences Editor](/Preferences_Editor "Preferences Editor") have a new layout and show units where applicable. Restarting FreeCAD after changing a Draft preference is no longer required. [Pull request #11379](https://github.com/FreeCAD/FreeCAD/pull/11379), [Pull request #11503](https://github.com/FreeCAD/FreeCAD/pull/11503), [Pull request #11512](https://github.com/FreeCAD/FreeCAD/pull/11512), [Pull request #11550](https://github.com/FreeCAD/FreeCAD/pull/11550), [Pull request #11579](https://github.com/FreeCAD/FreeCAD/pull/11579), [Pull request #11585](https://github.com/FreeCAD/FreeCAD/pull/11585), [Pull request #11677](https://github.com/FreeCAD/FreeCAD/pull/11677), [Pull request #11694](https://github.com/FreeCAD/FreeCAD/pull/11694) and [Pull request #16603](https://github.com/FreeCAD/FreeCAD/pull/16603)
* A new *Mouse delay* setting has been added to the General Draft preferences. If it's non-zero (default is 1 s), after entering a number in one of the task panel input fields, mouse movement will be disabled, and thus won't change the value in the input field, for a given time in seconds. Setting a very large value practically disables mouse movement until the command is finished. [Pull request #12624](https://github.com/FreeCAD/FreeCAD/pull/12624)
* A button to quickly change the color of the grid has been added to the task panel of the [Draft SelectPlane](/Draft_SelectPlane "Draft SelectPlane") command. [Pull request #13051](https://github.com/FreeCAD/FreeCAD/pull/13051)
* A *Fuse* property has been added to [Draft PointArrays](/Draft_PointArray "Draft PointArray"), [Draft PathArrays](/Draft_PathArray "Draft PathArray") and Draft PathTwistedArrays. [Pull request #13172](https://github.com/FreeCAD/FreeCAD/pull/13172) and [Pull request #13191](https://github.com/FreeCAD/FreeCAD/pull/13191)
* The button of the [Toggle grid command](/Draft_ToggleGrid "Draft ToggleGrid") now behaves like a toggle button, providing visual feedback of the grid status (visible or hidden). [Pull request #14452](https://github.com/FreeCAD/FreeCAD/pull/14452)

### Further Draft improvements

* [Draft Facebinders](/Draft_Facebinder "Draft Facebinder") can now handle faces belonging to links and faces nested in [Std Parts](/Std_Part "Std Part"). [Pull request #11081](https://github.com/FreeCAD/FreeCAD/pull/11081)
* Several settings have been added to the [Draft SetStyle](/Draft_SetStyle "Draft SetStyle") command. [Pull request #11593](https://github.com/FreeCAD/FreeCAD/pull/11593), [Pull request #11694](https://github.com/FreeCAD/FreeCAD/pull/11694) and [Pull request #13914](https://github.com/FreeCAD/FreeCAD/pull/13914)
* Settings have also been added to the [Draft ApplyStyle](/Draft_ApplyStyle "Draft ApplyStyle") command. [Pull request #11610](https://github.com/FreeCAD/FreeCAD/pull/11610) and [Pull request #13914](https://github.com/FreeCAD/FreeCAD/pull/13914)
* Snap, edit and tracker markers now use the [Marker size](/Preferences_Editor#3D_View "Preferences Editor") preference. [Pull request #11688](https://github.com/FreeCAD/FreeCAD/pull/11688) and [Pull request #16603](https://github.com/FreeCAD/FreeCAD/pull/16603)
* Some Draft icons were changed to improve their appearance. [Pull request #13585](https://github.com/FreeCAD/FreeCAD/pull/13585)
* The [Draft Layer object](/Draft_Layer "Draft Layer") has been updated for the new material handling system. It now has a *Shape Appearance* property and a *Override Shape Appearance Children* property. [Pull request #13949](https://github.com/FreeCAD/FreeCAD/pull/13949)
* [Draft Fillets](/Draft_Fillet "Draft Fillet") can now also be applied to arcs. [Pull request #14774](https://github.com/FreeCAD/FreeCAD/pull/14774)

## FEM Workbench

|  |  |
| --- | --- |
|  | The position of the color legend labels was adjusted to make the top ones less likely to be covered by the navigation cube. The default font and color of the labels was changed to increase the visibility and preferences were added to allow label color and size modification. [Pull request #10552](https://github.com/FreeCAD/FreeCAD/pull/10552) |

|  |  |
| --- | --- |
|  | The [FEM PostFilterLinearizedStresses](/FEM_PostFilterLinearizedStresses "FEM PostFilterLinearizedStresses") command can now use the stress tensor components for linearized stress computations. Previously, only Von Mises, Tresca and principal (major/intermediate/minor) stresses could be used for this. [Pull request #11724](https://github.com/FreeCAD/FreeCAD/pull/11724) |

|  |  |
| --- | --- |
|  | Support for cyclic symmetry via [tie constraint](/FEM_ConstraintTie "FEM ConstraintTie") in CalculiX was added, making it possible to analyze models with rotational periodic symmetry using a single repetitive sector. [Pull request #12289](https://github.com/FreeCAD/FreeCAD/pull/12289) |

|  |  |
| --- | --- |
|  | Support for 2D (plane stress, plane strain and axisymmetric) analyses was added for the [CalculiX solver](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools"). They are configured in the same way as simulations with shell elements but there are some additional restrictions described on the aforementioned wiki page. The new *Model Space* option has to be set properly. [Pull request #12562](https://github.com/FreeCAD/FreeCAD/pull/12562) |

|  |  |
| --- | --- |
|  | As the first step towards the support for hexahedral elements, their generation using Gmsh subdivision technique is now possible thanks to the new Gmsh property *Subdivision Algorithm*. It can also be used to create quadrilateral elements. [Pull request #12698](https://github.com/FreeCAD/FreeCAD/pull/12698) |

|  |  |
| --- | --- |
|  | New View properties were added to the results pipeline objects. Mesh edge color and width can now be changed for the *Surface with Edges* display mode. Node size can be modified for the *Nodes* mode. There is also a transparency setting for all modes. [Pull request #13066](https://github.com/FreeCAD/FreeCAD/pull/13066) |

|  |  |
| --- | --- |
|  | FEM constraints can now be suppressed (right-click on a constraint and select *Suppress*) and thus ignored by the solvers. This way, it's possible to modify the analysis setup without having to delete the currently not needed constraints. [Pull request #12359](https://github.com/FreeCAD/FreeCAD/pull/12359) |

|  |  |
| --- | --- |
|  | Support for the CalculiX's [rigid body constraint](/FEM_ConstraintRigidBody "FEM ConstraintRigidBody") was added, finally making it possible to simulate torsion of arbitrary components and apply remote loads, among others. [Pull request #13900](https://github.com/FreeCAD/FreeCAD/pull/13900) |

### Further FEM improvements

* The *Model → Constraints without solver* menu was removed from the GUI. The listed constraints could not be used. [Pull request #10457](https://github.com/FreeCAD/FreeCAD/pull/10457) and [Pull request #10459](https://github.com/FreeCAD/FreeCAD/pull/10459)
* The word "constraint" was removed from the names and descriptions of most features in the FEM workbench to ensure the correct nomenclature. The names were changed in such a way to fit the standards in the FEA industry and to make them intuitive for new users. [Pull request #10519](https://github.com/FreeCAD/FreeCAD/pull/10519) and [Pull request #10799](https://github.com/FreeCAD/FreeCAD/pull/10799)
* New icons were added for [Solver CalculiX Standard](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools"), [Solver job control](/FEM_SolverControl "FEM SolverControl") and [Run solver calculations](/FEM_SolverRun "FEM SolverRun") for greater intuitiveness. [Pull request #10885](https://github.com/FreeCAD/FreeCAD/pull/10885)
* Solver CalculiX (new framework) was removed from the GUI since it's unfinished and unnecessary at the moment. Its examples were also removed. [Pull request #10823](https://github.com/FreeCAD/FreeCAD/pull/10823) and [Pull request #12876](https://github.com/FreeCAD/FreeCAD/pull/12876)
* The layout of some postprocessing tool task panels was improved to reduce the size of the horizontal space occupied by them. [Pull request #11066](https://github.com/FreeCAD/FreeCAD/pull/11066)
* The [FEM ConstraintTemperature](/FEM_ConstraintTemperature "FEM ConstraintTemperature") task panel was reworked to fix issues when editing this feature. [Pull request #11126](https://github.com/FreeCAD/FreeCAD/pull/11126)
* An old issue with the [FEM PostFilterDataAlongLine](/FEM_PostFilterDataAlongLine "FEM PostFilterDataAlongLine") being able to plot only magnitude, not vector components of a selected output variable was finally fixed. [Pull request #10992](https://github.com/FreeCAD/FreeCAD/pull/10992)
* The [FEM ConstraintForce](/FEM_ConstraintForce "FEM ConstraintForce") and [FEM ConstraintPressure](/FEM_ConstraintPressure "FEM ConstraintPressure") were overhauled to make them work better on the source code side. [Pull request #10935](https://github.com/FreeCAD/FreeCAD/pull/10935) and [Pull request #10923](https://github.com/FreeCAD/FreeCAD/pull/10923)
* The [FEM PostFilterDataAtPoint](/FEM_PostFilterDataAtPoint "FEM PostFilterDataAtPoint") now has a PointSize property to set the size of the point symbol for more visibility. [Pull request #11054](https://github.com/FreeCAD/FreeCAD/pull/11054)
* For clarity, the [FEM mesh region](/FEM_MeshRegion "FEM MeshRegion") command was relabeled to *FEM mesh refinement* in the GUI (the command name remains unchanged). [Pull request #11489](https://github.com/FreeCAD/FreeCAD/pull/11489)
* The magnitude of gravity acceleration can now be changed using the properties of [FEM ConstraintSelfWeight](/FEM_ConstraintSelfWeight "FEM ConstraintSelfWeight"). [Pull request #12044](https://github.com/FreeCAD/FreeCAD/pull/12044)
* [Contact](/FEM_ConstraintContact "FEM ConstraintContact") and [tie constraint](/FEM_ConstraintTie "FEM ConstraintTie") were significantly improved. Contact stiffness now uses the correct unit and stick slope value can be specified for friction in contact. Moreover, clearance adjustment can be specified for contact while tie constraint may have adjustment enabled or disabled. [Pull request #12133](https://github.com/FreeCAD/FreeCAD/pull/12133)
* PaStiX and Pardiso were added to supported [CalculiX matrix solvers](/FEM_SolverCalculixCxxtools#Properties "FEM SolverCalculixCxxtools"). They are the fastest ccx solvers but the possibility of using them depends on the CalculiX binary version and available additional libraries. [Pull request #12478](https://github.com/FreeCAD/FreeCAD/pull/12478)
* The *Beam Reduced Integration* property (set to *true* by default) was added to [CalculiX solver settings](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools"). It enables a reduced integration scheme for beam elements, making it possible to use the pipe beam section and eliminating accuracy issues in analyses with plasticity, among others. [Pull request #12513](https://github.com/FreeCAD/FreeCAD/pull/12513)
* The unfinished [Nodes set](/FEM_CreateNodesSet "FEM CreateNodesSet") tool was removed from the GUI. It couldn't be used. [Pull request #12611](https://github.com/FreeCAD/FreeCAD/pull/12611)
* The Check Mesh CalculiX analysis procedure now generates the results mesh properly. [Pull request #12612](https://github.com/FreeCAD/FreeCAD/pull/12612)
* It was clarified in the task panel that the diameter used by the pipe beam section is the outer diameter. [Pull request #12609](https://github.com/FreeCAD/FreeCAD/pull/12609)
* The *Beam Shell Result Output 3D* property of the [CalculiX solver](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") is now set to *true* by default to provide results for beam elements and provide meaningful results for shell elements. [Pull request #12493](https://github.com/FreeCAD/FreeCAD/pull/12493)
* Symbols of analysis features are now properly positioned when the Body (or Part container) has modified placement property. [Pull request #12527](https://github.com/FreeCAD/FreeCAD/pull/12527)
* [Pressure load](/FEM_ConstraintPressure "FEM ConstraintPressure") is now working properly for shells regardless of the mesh groups setting. This setting can be changed in the Preferences. [Pull request #12437](https://github.com/FreeCAD/FreeCAD/pull/12437)
* Simple hardening in [FEM MaterialMechanicalNonlinear](/FEM_MaterialMechanicalNonlinear "FEM MaterialMechanicalNonlinear") was renamed to isotropic hardening. Moreover, kinematic hardening was added. [Pull request #12666](https://github.com/FreeCAD/FreeCAD/pull/12666)
* Now geometric nonlinearity is not automatically activated and required when a nonlinear material is used. Those are independent forms of nonlinearity. [Pull request #12703](https://github.com/FreeCAD/FreeCAD/pull/12703)
* Mixed meshes consisting of both triangular and quadrilateral elements are now displayed properly in the results pipeline. [Pull request #12740](https://github.com/FreeCAD/FreeCAD/pull/12740)
* The *Output Frequency* property was added to [CalculiX solver settings](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools"). It defines the frequency of output writing in increments. [Pull request #12672](https://github.com/FreeCAD/FreeCAD/pull/12672)
* Second-order quadrilateral elements can now be generated. Previously, the 2nd order Gmsh setting was generating 1st order quad elements because of the lack of a *SecondOrderIncomplete* Gmsh command which is now used internally. Those elements can also be used for 2D analyses. [Pull request #12698](https://github.com/FreeCAD/FreeCAD/pull/12698) and [Pull request #12774](https://github.com/FreeCAD/FreeCAD/pull/12774)
* The determination of beam cross-section orientation was partially fixed. Due to a bug in the current release of CalculiX, there may still be issues with some orientations. [Pull request #12833](https://github.com/FreeCAD/FreeCAD/pull/12833)
* Cantilever FEM examples on the Start page were updated and a new one using 1D elements was added. [Pull request #12871](https://github.com/FreeCAD/FreeCAD/pull/12871)
* The format in which FreeCAD writes the [force constraint](/FEM_ConstraintForce "FEM ConstraintForce") is now compatible with the CalculiX format, eliminating rare issues with too long numbers. [Pull request #12932](https://github.com/FreeCAD/FreeCAD/pull/12932)
* It is now possible to export the [results pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult") to the VTK format. [Pull request #12987](https://github.com/FreeCAD/FreeCAD/pull/12987)
* New incrementation control properties were added to [CalculiX solver settings](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools"). Currently, in addition to the initial increment size and time period of the step, one can specify minimum and maximum increment size. Also, the *Iterations Thermo Mech Maximum* property was renamed to *Iterations Maximum* as it can now be used for static (non-thermomechanical) analyses too. [Pull request #12662](https://github.com/FreeCAD/FreeCAD/pull/12662)
* Default [2D element thickness](/FEM_ElementGeometry2D "FEM ElementGeometry2D") was changed from 20 mm to 1 mm as it makes more sense in practice. [Pull request #13077](https://github.com/FreeCAD/FreeCAD/pull/13077)
* Many FEM icons were significantly improved to reduce their similarity and make it more clear what the tools do. [Pull request #13130](https://github.com/FreeCAD/FreeCAD/pull/13130)
* The *Thermo Mech Type* property was added to [CalculiX solver settings](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools"). It makes it possible to switch a regular (coupled) thermomechanical analysis to uncoupled or a pure heat transfer one. [Pull request #13296](https://github.com/FreeCAD/FreeCAD/pull/13296)
* *Min. Size* property was added for [Netgen mesher](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape") to prevent the generation of too small elements when meshing more complex geometries. [Pull request #12794](https://github.com/FreeCAD/FreeCAD/pull/12794)
* An old issue with a non-functioning symbol scale property for FEM constraints was finally fixed and the *Scale* property can now be used to adjust the size of symbols of a selected constraint. [Pull request #13274](https://github.com/FreeCAD/FreeCAD/pull/13274)
* Automatic scaling of FEM constraints was improved to better handle very small and very large objects. [Pull request #13586](https://github.com/FreeCAD/FreeCAD/pull/13586)
* [Heat flux load](/FEM_ConstraintHeatflux "FEM ConstraintHeatflux") now has a radiation heat flux mode to model surface radiation to ambient. [Pull request #13466](https://github.com/FreeCAD/FreeCAD/pull/13466)
* A few unused constraint symbol View properties were removed. [Pull request #13569](https://github.com/FreeCAD/FreeCAD/pull/13569)
* New view properties (with the main one being *Color Mode*) were added to FEM mesh objects so that custom color and transparency settings for meshes can be saved and restored. [Pull request #13698](https://github.com/FreeCAD/FreeCAD/pull/13698)
* Now only the last added filter under each results pipeline object is visible by default. [Pull request #13820](https://github.com/FreeCAD/FreeCAD/pull/13820)
* The task panel tips of several constraints were changed to actually reflect the rules of the geometry selection for those constraints. [Pull request #13921](https://github.com/FreeCAD/FreeCAD/pull/13921) and [Pull request #14002](https://github.com/FreeCAD/FreeCAD/pull/14002)
* Support for heat flux results from thermomechanical analyses was added to the results pipeline. [Pull request #14019](https://github.com/FreeCAD/FreeCAD/pull/14019)
* The [Section print feature](/FEM_ConstraintSectionPrint "FEM ConstraintSectionPrint") was improved, adding support for heat flux and drag stress (not yet available as 3D fluid analyses with CalculiX haven't been implemented yet) results. [Pull request #14046](https://github.com/FreeCAD/FreeCAD/pull/14046)
* [Body heat source](/FEM_ConstraintBodyHeatSource "FEM ConstraintBodyHeatSource") can now be used with CalculiX and has two input modes - dissipation rate [W/kg] and total power [W]. [Pull request #14417](https://github.com/FreeCAD/FreeCAD/pull/14417)
* The rotation properties of the [Local coordinate system](/FEM_ConstraintTransform "FEM ConstraintTransform") were replaced with a single *Rotation* property for consistency. [Pull request #14353](https://github.com/FreeCAD/FreeCAD/pull/14353)
* An [Erase Elements](/FEM_CreateElementsSet "FEM CreateElementsSet") tool was added to make it possible to hide elements of a mesh selected with a polygon. [Pull request #11492](https://github.com/FreeCAD/FreeCAD/pull/11492)
* The three FEM examples on the Start page were replaced with one, containing all three variants of the cantilever beam model (1D, 2D and 3D) in [Group](/Std_Group "Std Group") containers. [Pull request #15786](https://github.com/FreeCAD/FreeCAD/pull/15786)
* The redundant *Fix* properties and checkboxes of the [FEM ConstraintDisplacement](/FEM_ConstraintDisplacement "FEM ConstraintDisplacement") were removed. [Pull request #15531](https://github.com/FreeCAD/FreeCAD/pull/15531)
* The behavior of the Cancel buttons in the task panels of the [Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape") and [Netgen](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape") meshers was fixed so that they can be used to abort ongoing meshing which is particularly important when an initial guess regarding element size is too low. Moreover, the Netgen mesher was implemented, finally making it possible to use it on all systems, including Linux. [Pull request #16515](https://github.com/FreeCAD/FreeCAD/pull/16515) and [Pull request #16433](https://github.com/FreeCAD/FreeCAD/pull/16433)
* The *Quasi-structured Quad* 2D algorithm missing in the Gmsh mesher was added to it along with other fixes. [Pull request #15624](https://github.com/FreeCAD/FreeCAD/pull/15624)

## Material Workbench

|  |  |
| --- | --- |
|  | The material handling system, including the editor, has been completely reworked. Further improvements in this regard will follow. [Pull request #10690](https://github.com/FreeCAD/FreeCAD/pull/10690) |

|  |  |
| --- | --- |
|  | Appearance preview was added to show the materials in the same way they will be shown in documents. [Pull request #11628](https://github.com/FreeCAD/FreeCAD/pull/11628) |

|  |  |
| --- | --- |
|  | The new material system is now used for appearance properties. [Pull request #13294](https://github.com/FreeCAD/FreeCAD/pull/13294) |

### Further Material improvements

* Dialogs to view the Appearance and Material properties of an object were added and available as *Inspect Appearance* and *Inspect Material* tools. [Pull request #13967](https://github.com/FreeCAD/FreeCAD/pull/13967)

## Part Workbench

|  |  |
| --- | --- |
|  | [Part Scale](/Part_Scale "Part Scale") tool was added to allow for easy scaling of shapes without having to use tools from the Draft Workbench. [Pull request #10583](https://github.com/FreeCAD/FreeCAD/pull/10583) |

|  |  |
| --- | --- |
|  | [Part Mirror](/Part_Mirror "Part Mirror") now supports reference objects, such as a [Part Plane](/Part_Plane "Part Plane") to define an arbitrary mirror plane in addition to the standard XY, XZ, and YZ planes. [Pull request #11535](https://github.com/FreeCAD/FreeCAD/pull/11535) |

### Further Part improvements

* The *Frenet* property is now enabled by default for the [Part Sweep](/Part_Sweep "Part Sweep") tool to avoid a common rendering issue. [Pull request #11590](https://github.com/FreeCAD/FreeCAD/pull/11590)
* A new [attachment mode](/Part_EditAttachment#Attachment_modes "Part EditAttachment") called *Intersection* was added to the Engine Line. It finds the intersection of two planar faces. [Pull request #12328](https://github.com/FreeCAD/FreeCAD/pull/12328)
* The [Part ProjectionOnSurface](/Part_ProjectionOnSurface "Part ProjectionOnSurface") tool is parametric now. [Pull request #13158](https://github.com/FreeCAD/FreeCAD/pull/13158)
* Now all the Part icons use the blue theme and the primitives use the same icon for the toolbar and the tree. [Pull request #14074](https://github.com/FreeCAD/FreeCAD/pull/14074)
* The [Create sketch](/Sketcher_NewSketch "Sketcher NewSketch") command was added to the Part toolbar and menu since operations such as extrusion typically use sketches as input. [Pull request #14318](https://github.com/FreeCAD/FreeCAD/pull/14318)
* A new [attachment mode](/Part_EditAttachment#Attachment_modes "Part EditAttachment") called *XY parallel to plane* was added to the Engine Plane and Engine 3D. It results in an attachment similar to *Object's XY* but with the XY plane translated to pass through a selected vertex. In contrast to the *Translate origin* attachment mode, it does not move the origin in 2D/Sketcher. It can be used with origin planes, datum planes and sketches, but also with any object with a *Placement* property. [Pull request #14372](https://github.com/FreeCAD/FreeCAD/pull/14372)

## PartDesign Workbench

|  |  |
| --- | --- |
|  | More modes were added to the [revolution](/PartDesign_Revolution "PartDesign Revolution") and [groove](/PartDesign_Groove "PartDesign Groove") features - to first/last, up to face and two dimensions. [Pull request #7193](https://github.com/FreeCAD/FreeCAD/pull/7193) |

|  |  |
| --- | --- |
|  | [Pad](/PartDesign_Pad "PartDesign Pad") and [pocket](/PartDesign_Pocket "PartDesign Pocket") task panels were improved (reordered UI elements, **Select face** option hidden when unnecessary and so on). [Pull request #10392](https://github.com/FreeCAD/FreeCAD/pull/10392) |

|  |  |
| --- | --- |
|  | Offset mode was added for [linear](/PartDesign_LinearPattern "PartDesign LinearPattern") and [polar pattern](/PartDesign_PolarPattern "PartDesign PolarPattern"). The previous mode was renamed **Overall Length**. [Pull request #10377](https://github.com/FreeCAD/FreeCAD/pull/10377) |

|  |  |
| --- | --- |
|  | Experimental support for multiple solids within a [Body](/PartDesign_Body "PartDesign Body") was added. It can be enabled in the preferences (for new Bodies) or in the properties of an existing Body. [Pull request #13960](https://github.com/FreeCAD/FreeCAD/pull/13960) |

|  |  |
| --- | --- |
|  | *Up to shape* mode was added for Pad and Pocket, making it possible to end them on multiple faces, as opposed to *Up to face* mode which allows the selection of only a single face. [Pull request #11392](https://github.com/FreeCAD/FreeCAD/pull/11392) and [Pull request #14433](https://github.com/FreeCAD/FreeCAD/pull/14433) |

### Further PartDesign improvements

* The *Make thickness inwards* option is now enabled by default for the [Thickness](/PartDesign_Thickness "PartDesign Thickness") tool. [Pull request #7488](https://github.com/FreeCAD/FreeCAD/pull/7488)
* Datum points now change color when highlighted or selected (like other datums). [Pull request #12439](https://github.com/FreeCAD/FreeCAD/pull/12439)
* Part Design icons where slightly improved for consistency. [Pull request #13109](https://github.com/FreeCAD/FreeCAD/pull/13109)
* A *Suppressed* property was added to temporarily disable a feature. [Pull request #12096](https://github.com/FreeCAD/FreeCAD/pull/12096) and [Pull request #12412](https://github.com/FreeCAD/FreeCAD/pull/12412)
* The Part Design toolbars have been updated - datums and sketch-based actions are grouped now, [Part CheckGeometry](/Part_CheckGeometry "Part CheckGeometry") was added to the toolbar and menu, and the toolbars were split into individual ones to make it possible to rearrange them. [Pull request #13833](https://github.com/FreeCAD/FreeCAD/pull/13833)
* Now all the Part Design features use the same icons for the toolbar and the tree. [Pull request #14074](https://github.com/FreeCAD/FreeCAD/pull/14074)
* A new *Transform body* mode was added to Part Design mirror and pattern tools, making it possible to transform the whole base feature's shape instead of the individual tool shapes of additive and subtractive features. [Pull request #12589](https://github.com/FreeCAD/FreeCAD/pull/12589)
* The layout of the [Hole](/PartDesign_Hole "PartDesign Hole") tool dialog was improved. [Pull request #14031](https://github.com/FreeCAD/FreeCAD/pull/14031)
* The [Migrate](/PartDesign_Migrate "PartDesign Migrate") tool was removed from GUI since it was only useful for migrations between versions that are now highly outdated. [Pull request #15196](https://github.com/FreeCAD/FreeCAD/pull/15196)

## Sketcher Workbench

|  |  |
| --- | --- |
|  | Implementation of a circle overlay for arcs (to solve the issue of constraints appearing away from them) was completed with a [command to switch them](/Sketcher_ArcOverlay "Sketcher ArcOverlay"). [Pull request #9703](https://github.com/FreeCAD/FreeCAD/pull/9703) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | A contextual [Dimension](/Sketcher_Dimension "Sketcher Dimension") constraint tool was added to enable quick and intuitive dimensioning with a single versatile tool. [Pull request #9810](https://github.com/FreeCAD/FreeCAD/pull/9810) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | [Tool parameters](/Sketcher_Workbench#On-View-Parameters "Sketcher Workbench") were added to allow dimensioning on the go (when drawing shapes). Depending on the preference setting On-View-Parameters, they can be disabled, reduced to dimensions only (no initial coordinates) or fully enabled. Moreover, modes were added for the shape tools. They can be selected using the M key or a drop-down list in the task panel. Some tools have additional settings in the form of checkboxes in the task panel and additional keyboard shortcuts. Currently, the new features are available for points, lines, arcs, ellipses, rectangles, polygons, slots and B-splines. [Pull request #11048](https://github.com/FreeCAD/FreeCAD/pull/11048), [Pull request #11174](https://github.com/FreeCAD/FreeCAD/pull/11174) and following |

|  |  |
| --- | --- |
|  | An [Offset](/Sketcher_Offset "Sketcher Offset") tool was added to allow offsetting curves. [Pull request #11174](https://github.com/FreeCAD/FreeCAD/pull/11174) |

|  |  |
| --- | --- |
|  | Three-point [rectangle](/Sketcher_CompCreateRectangles "Sketcher CompCreateRectangles") mode was added in two versions - 3 corners or center and 2 corners. [Pull request #11174](https://github.com/FreeCAD/FreeCAD/pull/11174) |

|  |  |
| --- | --- |
|  | An [Arc slot](/Sketcher_CreateArcSlot "Sketcher CreateArcSlot") tool was added with two modes (arc ends and flat ends) to allow for the creation of curved slots [Pull request #11174](https://github.com/FreeCAD/FreeCAD/pull/11174) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | A [Horizontal/Vertical constraint](/Sketcher_ConstrainHorVer "Sketcher ConstrainHorVer") was added. It automatically applies horizontal constraint if a line is closer to horizontal orientation or vertical constraint if it's closer to vertical orientation. [Pull request #11538](https://github.com/FreeCAD/FreeCAD/pull/11538) |

|  |  |
| --- | --- |
|  | Rendering of angle and radius constraints was improved. Angle constraints have full extension lines now. [Pull request #11507](https://github.com/FreeCAD/FreeCAD/pull/11507) |

|  |  |
| --- | --- |
|  | A [Polar transform](/Sketcher_Rotate "Sketcher Rotate") tool was added to allow rotation and circular patterns of sketcher geometries. [Pull request #11264](https://github.com/FreeCAD/FreeCAD/pull/11264) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | It is now possible to copy/cut and paste sketch geometry (with constraints) using typical keyboard shortcuts: Ctrl+C, Ctrl+X and Ctrl+V. Not only within a single sketch but also between different sketches or even different instances of FreeCAD. The geometry is copied in the form of Python commands so it can be used in other ways too (e.g. shared on the forum). [Pull request #11537](https://github.com/FreeCAD/FreeCAD/pull/11537) |

|  |  |
| --- | --- |
|  | A [Scale transform](/Sketcher_Scale "Sketcher Scale") tool was added, making it possible to scale the geometry in the sketch using a selected center point and a scale factor or two reference points. [Pull request #11265](https://github.com/FreeCAD/FreeCAD/pull/11265) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | Tangency to B-spline edge was added, eliminating the need to use endpoints and various workarounds instead. [Pull request #11853](https://github.com/FreeCAD/FreeCAD/pull/11853) |

|  |  |
| --- | --- |
|  | The [RectangularArray](/Sketcher_RectangularArray "Sketcher RectangularArray"), [Move](/Sketcher_Move "Sketcher Move"), [Copy](/Sketcher_Copy "Sketcher Copy") and [Clone](/Sketcher_Clone "Sketcher Clone") tools were replaced with a single [Array transform](/Sketcher_Translate "Sketcher Translate") tool. [Pull request #11267](https://github.com/FreeCAD/FreeCAD/pull/11267) |

|  |  |
| --- | --- |
|  | A [Chamfer](/Sketcher_CreateChamfer "Sketcher CreateChamfer") tool was added with an option to switch to the [Fillet](/Sketcher_CreateFillet "Sketcher CreateFillet") mode. Moreover, there is no longer a separate Corner-preserving fillet tool. A *Preserve corner* option (checked by default) has been added to the [Sketcher CreateFillet](/Sketcher_CreateFillet "Sketcher CreateFillet") tool. [Pull request #12898](https://github.com/FreeCAD/FreeCAD/pull/12898) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | The [Symmetry](/Sketcher_Symmetry "Sketcher Symmetry") tool has been reworked. Now it works by preselecting the geometry and picking a line or point about which the geometry will be mirrored. A preview is shown and the behavior of the tool can be controlled through tool settings. [Pull request #11853](https://github.com/FreeCAD/FreeCAD/pull/11853) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | [Symmetric constraint](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric") is now applied automatically when the midpoint of a line is picked. [Pull request #13147](https://github.com/FreeCAD/FreeCAD/pull/13147) |

|  |  |
| --- | --- |
|  | [Distance dimension constraint](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance") can now be used for arc length constraints (circular arc has to be preselected). [Pull request #12602](https://github.com/FreeCAD/FreeCAD/pull/12602) |

|  |  |
| --- | --- |
|  | The rendering color of points is now different depending on whether it's a normal point/endpoint (white, now created by default when using the [CreatePoint](/Sketcher_CreatePoint "Sketcher CreatePoint") tool), a construction point/center point (blue) or a point coincident with another one (red). [Pull request #13098](https://github.com/FreeCAD/FreeCAD/pull/13098) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | The [Trim edge](/Sketcher_Trimming "Sketcher Trimming") tool can now be used in hold and drag mode. [Pull request #13188](https://github.com/FreeCAD/FreeCAD/pull/13188) |

### Further Sketcher improvements

* Frame mode was added for the Rectangle tool. [Pull request #11174](https://github.com/FreeCAD/FreeCAD/pull/11174)
* Two new modes were added for the Line tool: *Point, length, angle* and *Point, width, height*. [Pull request #11174](https://github.com/FreeCAD/FreeCAD/pull/11174)
* [ToggleConstruction](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction") and [ToggleDrivingConstraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") icons were changed. Now the former is not so similar to [CarbonCopy](/Sketcher_CarbonCopy "Sketcher CarbonCopy") and both toggle icons change when clicked. [Pull request #11500](https://github.com/FreeCAD/FreeCAD/pull/11500)
* Sketcher icons were overhauled to unify their appearance (stroke widths, colors and point sizes). [Pull request #11785](https://github.com/FreeCAD/FreeCAD/pull/11785)
* A new, optional, [unified Coincident constraint tool](/Sketcher_ConstrainCoincidentUnified "Sketcher ConstrainCoincidentUnified") was introduced. This tool combines the [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") and [PointOnObject](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") constraint tools. [Pull request #11494](https://github.com/FreeCAD/FreeCAD/pull/11494)
* Rendering of arc-angle, line-angle and arc-distance constraints was improved. [Pull request #12012](https://github.com/FreeCAD/FreeCAD/pull/12012)
* Edge types can now be customized not only by changing the color but also pattern and size. This allows e.g. dashed construction lines. [Pull request #11996](https://github.com/FreeCAD/FreeCAD/pull/11996)
* The right-click menu is now contextual and also includes B-spline commands. [Pull request #11884](https://github.com/FreeCAD/FreeCAD/pull/11884) and [Pull request #11973](https://github.com/FreeCAD/FreeCAD/pull/11973)
* Double-clicking an edge now selects all the geometry connected with it. [Pull request #11925](https://github.com/FreeCAD/FreeCAD/pull/11925)
* The Sketcher toolbars were slightly reorganized for clarity and consistency. [Pull request #13407](https://github.com/FreeCAD/FreeCAD/pull/13407) and [Pull request #13763](https://github.com/FreeCAD/FreeCAD/pull/13763)
* The [Carbon copy](/Sketcher_CarbonCopy "Sketcher CarbonCopy") tool icons were improved for better visibility. [Pull request #15074](https://github.com/FreeCAD/FreeCAD/pull/15074)

## Spreadsheet Workbench

### Further Spreadsheet improvements

* Double-clicking a spreadsheet in the Tree view now switches to this workbench. [Pull request #13137](https://github.com/FreeCAD/FreeCAD/pull/13137)
* The Spreadsheet icons were improved. [Pull request #13996](https://github.com/FreeCAD/FreeCAD/pull/13996)

## TechDraw Workbench

|  |  |
| --- | --- |
|  | The [CosmeticCircle](/TechDraw_CosmeticCircle "TechDraw CosmeticCircle") tool was added to allow for the creation of cosmetic circles by selecting the center and inputting the radius. [Pull request #10763](https://github.com/FreeCAD/FreeCAD/pull/10763) |

|  |  |
| --- | --- |
|  | The [ArcLengthAnnotation](/TechDraw_ExtensionArcLengthAnnotation "TechDraw ExtensionArcLengthAnnotation") tool was added to create dimension-like annotations of arc length of selected edges. [Pull request #11532](https://github.com/FreeCAD/FreeCAD/pull/11532) |

|  |  |
| --- | --- |
|  | The [AddOffsetVertex](/TechDraw_CommandAddOffsetVertex "TechDraw CommandAddOffsetVertex") tool was added to create cosmetic vertices as offsets from selected vertices. [Pull request #11655](https://github.com/FreeCAD/FreeCAD/pull/11655) |

|  |  |
| --- | --- |
|  | The [BrokenView](/TechDraw_BrokenView "TechDraw BrokenView") tool was added to depict long objects easily. [Pull request #13331](https://github.com/FreeCAD/FreeCAD/pull/13331) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | A new context dimension tool was added based on [the one introduced in the Sketcher](/Sketcher_Dimension "Sketcher Dimension"). [Pull request #13525](https://github.com/FreeCAD/FreeCAD/pull/13525) |

### Further TechDraw improvements

* Sections based on other sections now use the original (uncut) shape by default. This can be changed in section settings to use the previous section instead. [Pull request #10281](https://github.com/FreeCAD/FreeCAD/pull/10281)
* Cosmetic objects and centerlines can now be deleted by selecting them and pressing the Delete key. Previously, this resulted in the whole view being deleted. [Pull request #10695](https://github.com/FreeCAD/FreeCAD/pull/10695) and [Pull request #10813](https://github.com/FreeCAD/FreeCAD/pull/10813)
* A new, more intuitive icon was added for the [WeldSymbol](/TechDraw_WeldSymbol "TechDraw WeldSymbol") tool. [Pull request #10936](https://github.com/FreeCAD/FreeCAD/pull/10936)
* The behavior of the point + edge mode of the [LengthDimension](/TechDraw_LengthDimension "TechDraw LengthDimension") was corrected. [Pull request #10860](https://github.com/FreeCAD/FreeCAD/pull/10860)
* A checked state was added for the [ToggleFrame](/TechDraw_ToggleFrame "TechDraw ToggleFrame") button so that a user can see whether the button is activated or not. [Pull request #11240](https://github.com/FreeCAD/FreeCAD/pull/11240)
* The behavior of the [DecorateLine](/TechDraw_DecorateLine "TechDraw DecorateLine") tool was improved. Now double-clicking a line invokes this tool. And line styles are correctly restored if the user presses *Cancel*. Previously, there was no difference between pressing *OK* and *Cancel*. [Pull request #11188](https://github.com/FreeCAD/FreeCAD/pull/11188)
* Color and transparency of faces can now be set per view. [Pull request #11315](https://github.com/FreeCAD/FreeCAD/pull/11315)
* Multiselection mode was added and can be enabled in Preferences. In this mode, multiple vertices, edges and faces can be selected by left-clicking on them, without having to keep the Ctrl key pressed. [Pull request #11417](https://github.com/FreeCAD/FreeCAD/pull/11417)
* [ExtensionAreaAnnotation](/TechDraw_ExtensionAreaAnnotation "TechDraw ExtensionAreaAnnotation") can now calculate areas of arbitrary faces. [Pull request #11473](https://github.com/FreeCAD/FreeCAD/pull/11473)
* Non-continuous lines will now follow the ISO/ANSI standards instead of a Qt line style. A new preference was added to select the standard. [Pull request #11594](https://github.com/FreeCAD/FreeCAD/pull/11594)
* The behavior of the [AxoLengthDimension](/TechDraw_AxoLengthDimension "TechDraw AxoLengthDimension") tool was improved. Now, when dimensioning edges parallel to the global coordinate system axes, the actual (3D) value is calculated automatically and inserted into the Format Spec property (as text). [Pull request #11678](https://github.com/FreeCAD/FreeCAD/pull/11678)
* The [ExtensionPositionSectionView](/TechDraw_ExtensionPositionSectionView "TechDraw ExtensionPositionSectionView") tool can now be used by selecting an edge in a section view and a vertex in the source view. [Pull request #11797](https://github.com/FreeCAD/FreeCAD/pull/11797)
* The [ExtensionInsertRepetition](/TechDraw_ExtensionInsertRepetition "TechDraw ExtensionInsertRepetition") tool, to insert a repeated feature count, was added. [Pull request #12509](https://github.com/FreeCAD/FreeCAD/pull/12509)
* Small but important usability improvements were made - double-clicking on the TechDraw page now enters this workbench and the TechDraw MoveView tool was replaced by simple drag and drop in the [tree](/Tree_view "Tree view"). The TechDraw ClipGroupAdd and TechDraw ClipGroupRemove tools were also replaced by tree drag and drop behavior. [Pull request #13063](https://github.com/FreeCAD/FreeCAD/pull/13063)
* The drawing templates are now automatically filled with available information (like date and title). [Pull request #13005](https://github.com/FreeCAD/FreeCAD/pull/13005)
* The [Project shape](/TechDraw_ProjectShape "TechDraw ProjectShape") tool was removed from TechDraw as it's inherited from the old Drawing workbench and has nothing to do with a TechDraw page. [Pull request #13655](https://github.com/FreeCAD/FreeCAD/pull/13655)
* The [Insert View](/TechDraw_View "TechDraw View") tool was improved so that it can handle more object types and settings. This allowed the following tools to be removed from the toolbar: [SpreadsheetView](/TechDraw_SpreadsheetView "TechDraw SpreadsheetView"), [ArchView](/TechDraw_ArchView "TechDraw ArchView"), [Symbol](/TechDraw_Symbol "TechDraw Symbol"), [Image](/TechDraw_Image "TechDraw Image") and [ProjectionGroup](/TechDraw_ProjectionGroup "TechDraw ProjectionGroup"). [Pull request #13219](https://github.com/FreeCAD/FreeCAD/pull/13219)
* Snapping was added to allow automatic alignment of views and dimensions. Snapping can be temporarily disabled with the Alt key modifier. [Pull request #13659](https://github.com/FreeCAD/FreeCAD/pull/13659)
* Handling of cosmetics was improved in various ways. [Pull request #14216](https://github.com/FreeCAD/FreeCAD/pull/14216)
* Many TechDraw icons were improved. [Pull request #14873](https://github.com/FreeCAD/FreeCAD/pull/14873) and following
* The task panel of the [SurfaceFinishSymbols](/TechDraw_SurfaceFinishSymbols "TechDraw SurfaceFinishSymbols") tool was significantly improved visually. [Pull request #16147](https://github.com/FreeCAD/FreeCAD/pull/16147)

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_1.0/es&oldid=1509345>"