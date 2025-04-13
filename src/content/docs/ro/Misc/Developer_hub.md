---
title: Hub Dezvoltatori
---

![](/images/Crystal_Clear_app_tutorials.png)

---

Acesta este locul unde veți veni dacă doriți să contribuiți la dezvoltarea software-ului FreeCAD.

Aceste pagini sunt în stadiu incipient de dezvoltare. Dacă nu găsiți informațiile pe care le căutați, sau aveți invormații utile undeva unde nu am făcut link-ul, atunci vă rog lăsați un comentariu pe [forum](http://forum.freecadweb.org/index.php?sid=5f84150e79db8842e277b042077097ff) și cineva se va uita acole la el (sau, dacă te simți îndrăzneț, de ce să nu editezi direct această pagină!).

## Developer Documentation

## Documentație Dezvoltatori

Documentația dezvoltatorului a inclus următoarele secțiuni:

### Compiling FreeCAD

### Fă-o singur: Compilare FreeCAD

- [Source code management](/Source_code_management "Source code management")
- [Find assistance](/Tracker "Tracker") când aveți o problemă sau credeți că poate ați găsit un bug
- [Compiling on Windows](/Compile_on_Windows "Compile on Windows")
- [Compiling on Unix](/Compile_on_Linux "Compile on Linux")
- [Compiling on Mac OS X](/Compile_on_MacOS "Compile on MacOS")
- [License details](/License "License") despre licența FreeCAD
- [Third Party Libraries](/Third_Party_Libraries "Third Party Libraries")
- [Third Party Tools](/Third_Party_Tools "Third Party Tools")
- [Start up and Configuration](/Start_up_and_Configuration "Start up and Configuration")
- [Source documentation](/Source_documentation "Source documentation")

### Packaging

[Packaging](/Packaging "Packaging") consists in taking the compiled binaries and Python source files of FreeCAD, and distributing them for use in a particular system.

- [Linux packaging](/Linux_packaging "Linux packaging")
  - [Debian development](/Debian_development "Debian development")
  - [Debian Unstable](/Debian_Unstable "Debian Unstable")
  - [Git buildpackage](/Git_buildpackage "Git buildpackage")
- [Windows packaging](/Windows_packaging "Windows packaging")
- [MacOS packaging](/MacOS_packaging "MacOS packaging")

### Build Support Tools

### Construiți instrumente de sprijin

- The [FreeCAD Build Tool](/FreeCAD_Build_Tool/ro "FreeCAD Build Tool/ro")
  - [Adding an application module](/Workbench_creation/ro "Workbench creation/ro") to FreeCAD
- [Debugging](/Debugging/ro "Debugging/ro") FreeCAD
- [Testing](/Testing/ro "Testing/ro") FreeCAD
- [Compiling (Speeding up)](</Compiling_(Speeding_up)/ro> "Compiling (Speeding up)/ro") FreeCAD
- [Continuous Integration](/Continuous_Integration/ro "Continuous Integration/ro")

### Modifying FreeCAD

### Modificarea FreeCAD

- Înțelegerea codului sursă [The FreeCAD source code](/The_FreeCAD_source_code "The FreeCAD source code")
- Adaugă caracteristici GUI [Features](/Gui_Command "Gui Command") la FreeCAD sau Ateliere
- [Branding](/Branding "Branding") sau _cum să-i dați un aspect unic la FreeCAD_
- [Artwork](/Artwork "Artwork") ce am făcut pentru FreeCAD ca să-l puteți reutiliza în mod liber
- [Artwork_Guidelines](/Artwork_Guidelines "Artwork Guidelines") standarde pentru iconițe
- [Translating FreeCAD](/Localisation "Localisation")
- [Extra python modules](/Extra_python_modules "Extra python modules"), sau _cum să extindeți funcționalitatea Python în interiorul FreeCAD_
- [Google Summer of Code](/Google_Summer_of_Code "Google Summer of Code") implicați-vă prin intermediul programului Google de asistență pentru studenți

- [Translating an external workbench](/Translating_an_external_workbench "Translating an external workbench")

### Module developer's guide

### Ghidul deszvoltatorului de Module

[FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide): Aceasta este o carte electronică scrisă pe github.
"Este un proiect colaborativ și sunteți binevenit să adăugați îmbunătățiri" Vă rugăm să ne trimiteți cererea dvs. de a vă aduce contribuția.

Capitole:

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

Cel mai recent preview pdf poate fi descărcat din depozitul: git[pdf folder](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide/tree/master/pdf)

### Internals

### Documentație OpenCascade

- [Roman Lygin's tutorials](http://opencascade.wikidot.com/romansarticles)
- [Full Online Documentation](https://dev.opencascade.org/doc/overview/html/index.html)
- [Reference Manual](https://dev.opencascade.org/doc/refman/html/index.html)
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

## Foaie de parcurs

FreeCAD, deși utilizabilă în anumite domenii, este la începutul unei lungi drumuri în marele curent CAD. Mai sunt încă multe de făcut
pentru a ajunge la o stare în care putem concura cu software comercial.

[FreeCAD 1.0 Development Cycle](/FreeCAD_1.0_Development_Cycle "FreeCAD 1.0 Development Cycle")

## Community

- [IRC channel](ircs://irc.libera.chat:6697/freecad) ,synchronized with [gitter channel](https://gitter.im/FreeCAD/FreeCAD)
- [Development forum](https://forum.freecad.org/viewforum.php?f=6)

- [Development roadmap](/Development_roadmap "Development roadmap")

## Credits

[Contributors](/Contributors "Contributors")

Retrieved from "<http://wiki.freecad.org/index.php?title=Developer_hub/ro&oldid=1392798>"
