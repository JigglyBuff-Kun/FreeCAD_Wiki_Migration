---
title: Vývojářské centrum
---

![](/images/Crystal_Clear_app_tutorials.png)

---

Toto je místo kam jít, jestliže se chcete zúčastnit vývoje software FreeCADu.

Tyto stránky jsou zatím v ranném vývoji. Nemůžete-li najít informace, které hledáte nebo jste našli informace, na které zatím nemáme odkazy, přidejte prosím komentář na [forum](http://forum.freecadweb.org/index.php?sid=5f84150e79db8842e277b042077097ff) a někdo se na to podívá (nebo jste-li dost smělí, můžete upravit tyto stránky přímo sami!).

## Developer Documentation

## Dokumentace pro vývojáře

Dokumentace pro vývojáře zahrnuje následující sekce:

### Compiling FreeCAD

### Udělejte sami: Kompilace FreeCADu

- [Správa zdrojového kódu](/Source_code_management "Source code management")
- [Vyledání podpory](/Tracker "Tracker") máte-li problém nebo si myslíte, že jste odhalili chybu
- [Kompilace na Windows](/Compile_on_Windows "Compile on Windows")
- [Kompilace na Unixu](/Compile_on_Linux "Compile on Linux")
- [Kompilace na Mac OS X](/Compile_on_MacOS "Compile on MacOS")
- [Detaily licence](/License "License") - o licenci FreeCADu
- [Knihovny třetích stran](/Third_Party_Libraries "Third Party Libraries")
- [Nástroje třetích stran](/Third_Party_Tools "Third Party Tools")
- [Spuštění a konfigurace](/Start_up_and_Configuration "Start up and Configuration")
- [Zdrojová dokumentace](/Source_documentation "Source documentation")

### Packaging

[Packaging](/Packaging "Packaging") consists in taking the compiled binaries and Python source files of FreeCAD, and distributing them for use in a particular system.

- [Linux packaging](/Linux_packaging "Linux packaging")
  - [Debian development](/Debian_development "Debian development")
  - [Debian Unstable](/Debian_Unstable "Debian Unstable")
  - [Git buildpackage](/Git_buildpackage "Git buildpackage")
- [Windows packaging](/Windows_packaging "Windows packaging")
- [MacOS packaging](/MacOS_packaging "MacOS packaging")

### Build Support Tools

### Nástroje pro podporu buildu

- [Nástroj pro build FreeCADu](/FreeCAD_Build_Tool "FreeCAD Build Tool")
- [Přidávání aplikačního modulu](/Workbench_creation "Workbench creation") do FreeCADu
- [Ladění](/Debugging/cs "Debugging/cs") FreeCADu
- [Testování](/Testing "Testing") FreeCADu

### Modifying FreeCAD

### Modifikace FreeCADu

- Vylepšování [vzhledu](/Gui_Command "Gui Command") FreeCADu nebo pracovní plochy
- [Branding](/Branding "Branding") aneb _jak dát FreeCADu unikátní vzhled_
- [Předloha](/Artwork "Artwork") - směrujeme FreeCAD k tomu aby mohl být opakovaně využitelný
- [Překlad FreeCADu](/Localisation "Localisation")
- [Dodatečné moduly Pythonu](/Extra_python_modules "Extra python modules"), aneb _jak rozšířit funkcionalitu Pythonu ve FreeCADu_

- [Translating an external workbench](/Translating_an_external_workbench "Translating an external workbench")

### Module developer's guide

[FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide): This is an ebook under writing on github, please fork and send pull request to contribute.

Chapters:

- Overview and Software Architecture
- Source code structure
- Base and App module
- Gui module
- Python wrapping
- Modular design
- Fem module source analysis (mixed C++ and Python)
- Development of CFD Module (pure Python)
- Module testing and debugging
- Contribute code with git

Latest pdf preview can be downoaded from [pdf folder](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide/tree/master/pdf) of this git repo

### Internals

### Dokumentace OpenCascade

- [Roman Lygin's tutorials](http://opencascade.wikidot.com/romansarticles)
- [Online class reference](http://opencascade.sourcearchive.com/documentation/6.3.0.dfsg.1-1/classes.html). Poslední verze online nápovědy která je dostupná tímto způsobem, je sice už trochu zastaralá, ale stále ještě odpovídající. Je to asi výhodnější než muset stahovat jeden veliký soubor, což byste museli udělat, pokud byste chtěli nejnovější verzi.
- [The openCascade wiki](http://opencascade.wikidot.com)

OpenCascade is a software development platform for 3D surface and solid modeling, CAD data exchange, and visualization, mostly in the form of C++ libraries.

- [Roman Lygin's tutorials](http://opencascade.wikidot.com/romansarticles)
- [Full Online Documentation](https://dev.opencascade.org/cdoc/overview/html/index.html)
- [Reference Manual](https://dev.opencascade.org/doc/refman/html/index.html)
- [The openCascade wiki](http://opencascade.wikidot.com) (currently containing ?? Chinese spam)

#### File format

[File Format FCStd](/File_Format_FCStd "File Format FCStd"). The files created with FreeCAD are `.zip` files that include the [BREP](https://en.wikipedia.org/wiki/Boundary_representation) geometry, as well as XML data that describes the document.

#### Sketcher solver

- [Sketcher Solver Architecture Booklet](https://forum.freecadweb.org/viewtopic.php?f=10&t=36355) (forum thread), [source](https://github.com/abdullahtahiriyo/FreeCADBooks/tree/master/FreeCAD_Solver_Architecture) in GitHub.
- [PlaneGCS solver](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/) in the FreeCAD source code; important files are [GCS.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/GCS.cpp) and [SubSystem.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/SubSystem.cpp).
- [Recent Several Sketcher improvements](https://forum.freecadweb.org/viewtopic.php?f=9&t=29192).

The sketcher solver isn't perfect, as there are some issues with numerical precision when using large values, see [Adventure of fixing sketcher solver for large sketches](https://forum.freecadweb.org/viewtopic.php?f=10&t=40502).

The development of a new solver architecture could improve the way the solver is used both in the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), and for assembly of 3D bodies. See [Reimplementing constraint solver](https://forum.freecadweb.org/viewtopic.php?f=20&t=40525).

## Roadmap

## Plány FreeCADu

FreeCAD, ačkoli už je použitelný v určité oblasti, je na začátku dlouhé cesty mezi významné CADy. Je toho potřeba ještě mnoho udělat pro dosažení stavu kdy bychom se mohli srovnávat s komerčními softwary.

[FreeCAD 1.0 Development Cycle](/FreeCAD_1.0_Development_Cycle "FreeCAD 1.0 Development Cycle")

## Community

- [IRC channel](ircs://irc.libera.chat:6697/freecad) ,synchronized with [gitter channel](https://gitter.im/FreeCAD/FreeCAD)
- [Development forum](https://forum.freecad.org/viewforum.php?f=6)

- [Vývojářské plány](/Development_roadmap "Development roadmap")

## Příspěvky

[Přispěvatelé](/Contributors "Contributors")

Retrieved from "<http://wiki.freecad.org/index.php?title=Developer_hub/cs&oldid=1392794>"
