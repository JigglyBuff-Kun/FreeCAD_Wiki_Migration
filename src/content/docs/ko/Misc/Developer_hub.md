---
title: 개발자 허브
---

![](/images/Crystal_Clear_app_tutorials.png)

---

이곳은 FreeCAD 개발에 기여하고 싶다면 올 장소입니다.

These pages are in the early stage of development. If you can't find the information you are looking for, or have found useful information somewhere we have not linked to, then please leave a comment on the [forum](http://forum.freecadweb.org/index.php?sid=5f84150e79db8842e277b042077097ff) and someone will look into it (or, if you are feeling bold, why not edit this page directly!).

## Developer Documentation

## 개발자 문서

The developer documentation comprises the following sections:

### Compiling FreeCAD

### 여러분 스스로: FreeCAD 컴파일

- [Source code management](/Source_code_management "Source code management")
- [Find assistance](/Tracker "Tracker") when you have a problem or think you may have found a bug
- [Compiling on Windows](/Compile_on_Windows "Compile on Windows")
- [Compiling on Unix](/Compile_on_Linux "Compile on Linux")
- [Compiling on Mac OS X](/Compile_on_MacOS "Compile on MacOS")
- [License details](/License "License") about the FreeCAD licences
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

### 지원 도구 만들기

- The [FreeCAD Build Tool](/FreeCAD_Build_Tool "FreeCAD Build Tool")
  - [Adding an application module](/Workbench_creation "Workbench creation") to FreeCAD
- [Debugging](/Debugging "Debugging") FreeCAD
- [Testing](/Testing "Testing") FreeCAD
- [Compiling (Speeding up)](</Compiling_(Speeding_up)> "Compiling (Speeding up)") FreeCAD
- [Continuous Integration](/Continuous_Integration "Continuous Integration")

### Modifying FreeCAD

### FreeCAD 바꾸기

- Understanding [The FreeCAD source code](/The_FreeCAD_source_code "The FreeCAD source code")
- [Submitting patches](/Tracker#Submitting_patches "Tracker")
- Add [Features](/Gui_Command "Gui Command") to FreeCAD or a Workbench
- [Branding](/Branding "Branding") or _how to give FreeCAD a unique look_
- [Artwork](/Artwork "Artwork") we made for FreeCAD, that you can freely reuse
- [Artwork_Guidelines](/Artwork_Guidelines "Artwork Guidelines") standards for icons
- [Translating FreeCAD](/Localisation "Localisation")
- [Extra python modules](/Extra_python_modules "Extra python modules"), or _how to extend python functionality within FreeCAD_
- [Google Summer of Code](/Google_Summer_of_Code "Google Summer of Code") get involved via Google's student support program

- [Translating an external workbench](/Translating_an_external_workbench "Translating an external workbench")

### Module developer's guide

### 모둘 개발자 가이드

[FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide): This is an ebook under writing on github, please fork and send pull request to contribute.

챕터:

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

### OpenCascade Documentation

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

## 로드맵

FreeCAD, though usable in certain areas, is at the beginning of a long way into the CAD mainstream. There is still a lot to do
to reach a state where we can compete with commercial software.

[FreeCAD 1.0 Development Cycle](/FreeCAD_1.0_Development_Cycle "FreeCAD 1.0 Development Cycle")

## Community

- [IRC channel](ircs://irc.libera.chat:6697/freecad) ,synchronized with [gitter channel](https://gitter.im/FreeCAD/FreeCAD)
- [Development forum](https://forum.freecad.org/viewforum.php?f=6)

- [Development roadmap](/Development_roadmap "Development roadmap")

## Credits

[Contributors](/Contributors "Contributors")

Retrieved from "<http://wiki.freecad.org/index.php?title=Developer_hub/ko&oldid=1392804>"
