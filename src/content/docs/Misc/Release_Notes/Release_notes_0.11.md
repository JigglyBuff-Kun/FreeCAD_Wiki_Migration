---
title: Release notes 0.11
---

This is a summary of the most important changes and new features available in the 0.11 release of FreeCAD. The complete list can be found [here](http://www.freecadweb.org/tracker/changelog_page.php).

![](/src/assets/images/FreeCAD011.png)

A screenshot of the 0.11 version

### General

- The [FreeCAD translation project](http://crowdin.net/project/freecad) has received huge help from many people around the world and FreeCAD now ships with no less than 15 languages: English, German, French, Italian, Swedish, Spanish, Portuguese, Russian, Ukrainian, Norwegian, Afrikaans, Finnish, Simplified Chinese, Croatian and Dutch. And many more languages are being worked on for the next releases.

![](/src/assets/images/Release011-translation.jpg)

- Several improvements have been brought all over FreeCAD, for example the hierarchy tree now allows complex object stacks, keeping all your geometry history clean and easily accessible and modifiable. New Python API improvements also allow objects to interact better with the tree, defining their own behaviour, icons, etc.

![](/src/assets/images/Release011-dependency.jpg)

- The copy/paste mechanism has also been much improved, now allowing easy copy/pasting of objects between documents.
- The [Part Workbench](/Part_Workbench "Part Workbench") features new tools such as mirroring and edge fillets and chamfers.

### Sketch and part design

- The constraint solver of the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") has been totally rewritten and the Sketcher, even if still not complete, features already a good array of tools such as lines, rectangles, and constraints such as point coincidence, parallelism, fixed length or horizontal or vertical constraints.

- In addition to the Sketcher, a new PartDesign workbench now allow you to quickly build solids on top of Sketches. As a rule now in FreeCAD, everything is parametric, you can go back anytime to change your sketch, and all geometry that depends on it will be adapted automatically

![](/src/assets/images/Release011-sketcher.jpg)

![](/src/assets/images/Movie.png) Examples: [Sketcher demo](http://www.youtube.com/watch?v=hvXupH5bA0E) • [PartDesign demo](http://www.youtube.com/watch?v=7ih9Jp3OAwA)

### Robot simulation

- The [Robot Workbench](/Robot_Workbench "Robot Workbench") has been extended with many GUI tools and is now fairly functional and allows you to easily simulate industrial robot movements

![](/src/assets/images/Release011-robot.jpg)

### 2D drafting

- Snapping has been greatly optimized and now works pretty fast, even on complex objects
- The "Trim/Extend" tool can now be called "Trim/Extend/Extrude", since it allows you to quickly extrude single faces, offering a convenient shortcut to the standard Part Extrude tool
- The Draft-to-Drawing sheet workflow has also been enhanced, all the Draft workbench objects can now be placed on a Drawing page, and they all offer the same level of comfort as standard Part objects, offering the ability to change their position, rotation and scale on the fly. They also offer some extra features, such as hatch pattern fillings

![](/src/assets/images/Release011-draft-drawing.jpg)

- The Draft workbench also offers new tools such as regular polygons and bSplines
- There is also a new Edit tool, allowing to edit the geometry of most of the Draft objects

![](/src/assets/images/Release011-draft.jpg)

- Dimensions can now have their text edited and moved, and wires can have an end arrow, allowing to use them as leaders
- Several commands such as move, rotate or dimensioning now allow you to do several copies without exiting the tool
- The Draft workbench also gained a Python [API](/Draft_API "Draft API").
- The DXF importer now support block attributes

![](/src/assets/images/Movie.png) Examples: [Draft module demo](http://www.youtube.com/watch?v=Q7cG-LQK8Ps)

### Images

- The image workbench now features an ImagePlane object, allowing you to display an image file inside the 3D scene, that can be used for example to construct geometry on top of scanned blueprints

### Documentation

- The [FreeCAD manual](/Online_Help_Toc "Online Help Toc") now has several well advanced translations. Check the main page!

Available translations of this page: [![](/src/assets/images/Flag-de.jpg)](de/Release_notes_0.11 "Release notes 0.11/de ") [![](/src/assets/images/Flag-es.jpg)](/Release_notes_0.11/es "Release notes 0.11/es") [![](/src/assets/images/Flag-fr.jpg)](/Release_notes_0.11/fr "Release notes 0.11/fr ") [![](/src/assets/images/Flag-it.jpg)](/Release_notes_0.11/it "Release notes 0.11/it") [![](/src/assets/images/Flag-pl.jpg)](/Release_notes_0.11/pl "Release notes 0.11/pl ") [![](/src/assets/images/Flag-ru.jpg)](/Release_notes_0.11/ru "Release notes 0.11/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_0.11&oldid=1016322>"
