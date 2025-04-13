---
title: FreeCAD 1.1 Development Cycle
---
Development of FreeCAD 1.1 began after tagging [FreeCAD 1.0](https://github.com/FreeCAD/FreeCAD/releases/tag/1.0.0) on 19 November 2024.

### Minimum supported library versions

No target release date has been set for version 1.1, but is anticipated **after** the end of support for Ubuntu 20.04 LTS. As such development for the 1.1 release cycle will support Ubuntu 22.04 LTS as the oldest supported distribution.

The minimum supported infrastructure software versions are therefore:

* Boost 1.74
* GCC 10.3
* Clang 14.0
* CMake 3.22
* Python 3.10
* Qt 5.15
* OpenCASCADE 7.5
* VTK 9.1

This version of FreeCAD is compiled requiring the C++20 standard, and all C++20 features are allowed with one exception:

* std::regex is much slower than boost::regex in some important cases, so we will continue to include the Boost regex library

The developers are encouraged to review the [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines) for modern C++ coding advice. No strict coding convention has been selected for FreeCAD, though new C++ code often conforms to the [Qt coding conventions](https://wiki.qt.io/Coding_Conventions), and new Python typically conforms to [PEP 8](https://pep8.org/).

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_1.1_Development_Cycle&oldid=1545000>"