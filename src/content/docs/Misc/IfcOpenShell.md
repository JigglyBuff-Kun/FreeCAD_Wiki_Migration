---
title: IfcOpenShell
---
## Description

[IfcOpenShell](/IfcOpenShell "IfcOpenShell") is an open source (LGPL 3) software library that helps developers work with the [industry foundation classes](http://www.buildingsmart-tech.org/specifications/ifc-overview) ([IFC](/Arch_IFC "Arch IFC")) file format. The IFC file format can be used to describe building and construction data. The format is commonly used for [building information modelling](https://en.wikipedia.org/wiki/Building_information_modeling) (BIM), for example, mechanical loading analysis, and thermal and energy efficiency studies. IfcOpenShell is primarily a collection of C++ libraries, however, as it has [Python](/Python "Python") bindings, it can be integrated with programs like FreeCAD and Blender.

IfcOpenShell uses [OpenCASCADE](/OpenCASCADE "OpenCASCADE") internally to convert the implicit geometry in IFC files into explicit geometry that other CAD packages can understand, for example, STEP, [OBJ](/Arch_OBJ "Arch OBJ"), and [DAE](/Arch_DAE "Arch DAE").

As of v0.19, FreeCAD is able to import IFC files as long as the `ifcopenshell` [Python](/Python "Python") module is available in the system. Likewise, the [BIM Workbench](/BIM_Workbench "BIM Workbench") can export a building model to the IFC format so that it can be used in other applications.

To verify that IfcOpenShell is installed in your system, try to import it from the [Python console](/Python_console "Python console"); the library is correctly installed if no error message is returned.

```
import ifcopenshell

```

## Installation

IfcOpenShell can be installed in various ways depending on your operating system and Python environment. In the past, IfcOpenShell was a bit difficult to install as it needed to be compiled for your specific system; however, as of this writing (2020) it is easier to start using it, as it is now included together with FreeCAD in many FreeCAD distributions. In general, it is advisable to use one of these pre-compiled distributions, and only compile it yourself if you are an advanced user.

### From BlenderBIM

[BlenderBIM](https://blenderbim.org) is another project that uses IfcOpenShell. They provide up-to-date IfcOpenShell packages for several platforms. This is the best way to make sure you have a recent version of IfcOpenShell.

BlenderBIM IfcOpenShell install page: <https://blenderbim.org/docs-python/ifcopenshell-python/installation.html>

### Pip

The easiest way to install IfcOpenShell is using [pip](https://pypi.org/project/pip/). Once pip is installed on your system, you can [install](https://datatofish.com/install-package-python-using-pip/) IfcOpenShell easily by issuing from a terminal window:

```
pip install ifcopenshell

```

### Conda

For Windows and MacOS systems, FreeCAD distributions put together with the [Conda](/Conda "Conda") package manager usually include IfcOpenShell already so no further installation is necessary. Get the appropriate distribution from the [Download](/Download "Download") page.

The [AppImage](/AppImage "AppImage") for Linux is also based on [Conda](/Conda "Conda"), and it also includes IfcOpenShell.

### Linux

If it is available, you may install IfcOpenShell using your distribution's package manager.

```
sudo apt install ifcopenshell

```

However, please notice that packages provided by many Linux repositories tend to be old, and may not contain the latest developments in the software. If you want to be sure you are using the newest software, use a [Conda](/Conda "Conda")-based distribution of FreeCAD, a pre-compiled IfcOpenShell distribution, or compile IfcOpenShell yourself.

### Using a pre-compiled IfcOpenShell package

There is a special repository of the IfcOpenShell project that compiles regularly the IfcOpenShell libraries for various systems (Linux, Windows, MacOS), architectures (32-bit and 64-bit), and Python versions (2.7, 3.x). To use these pre-compiled libraries, you must pick the right version that matches your operating system, architecture, and the major and minor numbers for the [Python](/Python "Python") that is used with FreeCAD. This means that the first two numbers must match (Python 3.6 and 3.7 are considered distinct versions) while the third one (micro) does not matter (Python 3.6.5 and 3.6.12 are considered to be the same for compatibility purposes).

1. Head to the build repository [IfcOpenBot/IfcOpenShell](https://github.com/IfcOpenBot/IfcOpenShell). This repository is not for development, it only contains a copy of the main repository as well as pre-compiled packages.
2. As of this writing (2020), the master branch of the IfcOpenShell project does not contain the latest code, so we need to select the desired branch, for example, `v0.6.0`.
3. Click on the commit number, which will take you to the list of commits for the branch, for example, `IfcOpenBot/IfcOpenShell/commits/v0.6.0`.
4. Go back in the history until you find a commit that has a comment. This will indicate the moment when pre-compiled libraries were released.
5. Click on the commit. You will see a comment by IfcOpenBot showing a table of combinations of operating system, architecture, and Python version. Choose the right link for "Python" to match your [version of FreeCAD](/Std_About "Std About"). The "Blender", "IfcConvert", and "IfcGeomServer" packages are not needed for FreeCAD usage.
6. The downloaded package needs to be extracted, and the extracted directory needs to be placed in the Python search path in order to find the new modules.

*Note:* the following examples assume a Debian/Ubuntu based system, but the general procedure should work for other operating systems.

:   * Unzipping the downloaded package creates an `ifcopenshell/` folder.

```
unzip ifcopenshell-python-36-v0.6.0-4baec57-linux64.zip

```

:   * The search path can be found by inspecting the `sys.path` variable in the [Python console](/Python_console "Python console").

```
import sys
print(sys.path)

```

:   * If you'd like to install the IfcOpenShell library only for your user, and not affect system directories, you should place the extracted `ifcopenshell/` folder in your own user's home directory.

```
mv -t $HOME/.local/lib/python3.6/site-packages/ ifcopenshell/

```

:   * If you'd like to install the IfcOpenShell library system-wide, you typically need superuser privileges to write to system directories; this is usually a `site-packages/` directory, or a `dist-packages/` directory for Debian/Ubuntu distributions.

```
sudo mv -t /usr/local/lib/python3.6/dist-packages/ ifcopenshell/

```

If the directory is correctly moved, test that the `ifcopenshell` module is accessible from the [Python console](/Python_console "Python console").

```
>>> import ifcopenshell
>>> print(ifcopenshell.version)
0.6.0b0
>>> print(ifcopenshell.__path__)
['/home/user/.local/lib/python3.6/site-packages/ifcopenshell']

```

To remove the installed library, just remove the corresponding directory with all modules inside.

```
rm -rf $HOME/.local/lib/python3.6/site-packages/ifcopenshell/
sudo rm -rf /usr/local/lib/python3.6/dist-packages/ifcopenshell/

```

## Compiling

Compiling IfcOpenShell is recommended only for advanced users. The process is similar to [compiling FreeCAD on Linux](/Compile_on_Linux "Compile on Linux"), so if you have done this already, then you may already have the necessary requisites like the [OpenCASCADE's](/OpenCASCADE "OpenCASCADE") development files. The process uses the CMake configuration tool to produce a custom `Makefile` for use with the Make tool.

The general instructions are outlined in the [IfcOpenShell repository](https://github.com/IfcOpenShell/IfcOpenShell), and are as follows:

1. Get the source code of IfcOpenShell from its main repository.
2. Gather all dependencies for compiling, including a C++ compiler, CMake, and Make, and the development files for Boost, libxml2, [OpenCASCADE](/OpenCASCADE "OpenCASCADE"), SWIG, Python, and OpenCOLLADA (optional). Most of these components are strictly optional, however, for use with FreeCAD they should all be installed. OpenCOLLADA is optional as it only provides [DAE](/Arch_DAE "Arch DAE") support for the `IfcConvert` binary.
3. Run `cmake` to generate a `Makefile`, then start the compilation by running `make`.
4. Install the `ifcopenshell` [Python](/Python "Python") module in the appropriate `site-packages/` directory so that it is found by FreeCAD.

*Note:* the following examples assume a Debian/Ubuntu based system, but the general procedure should work for other operating systems. For example, in Debian shared libraries are normally located in `/usr/lib/x86_64-linux-gnu/` while in other distributions this may be `/usr/lib64/` so the paths should be adjusted accordingly.

### Prerequisites

Install the basic compilation tools.

```
sudo apt install git cmake gcc g++ libboost-all-dev

```

Get the source code of the project and place it in a custom directory to which you have full write access.

As of this writing (2020), the master branch of the IfcOpenShell project does not contain the latest code, so we need to clone a specific branch.

```
git clone https://github.com/IfcOpenShell/IfcOpenShell -b v0.6.0 IfcOpenShell-source

```

### OpenCASCADE

Install the development files of [OpenCASCADE](/OpenCASCADE "OpenCASCADE").

```
sudo apt install libocct*-dev

```

Which expands to

```
sudo apt install libocct-data-exchange-dev libocct-draw-dev libocct-foundation-dev libocct-modeling-algorithms-dev libocct-modeling-data-dev libocct-ocaf-dev libocct-visualization-dev

```

You may use the community edition (OCE) of OpenCASCADE as well, however, please notice that this version is old and no longer recommended by FreeCAD as of 2020.

### OpenCOLLADA

Install the development files of OpenCOLLADA.

```
sudo apt install opencollada-dev

```

If the files are too old in your distribution, you may also compile the libraries yourself. The procedure is outlined in the main repository, [KhronosGroup/OpenCOLLADA](https://github.com/KhronosGroup/OpenCOLLADA), and it's very straight forward as it only requires the `libpcre3` and `libxml2` development files.

```
sudo apt install libpcre3-dev libxml2-dev
git clone https://github.com/KhronosGroup/OpenCOLLADA OpenCOLLADA-source

mkdir -p OpenCOLLADA-build
cd OpenCOLLADA-build
cmake ../OpenCOLLADA-source

make -j 3
sudo make install

```

### Python wrapper

For usage with FreeCAD you need the [Python](/Python "Python") wrapper which uses SWIG to generate the proper interfaces from the C++ classes.

```
sudo apt-get install python-all-dev swig

```

### CMake configuration

It is recommended to perform the configuration and compilation in a specific build directory separate from the source directory.

```
mkdir -p IfcOpenShell-build
cd IfcOpenShell-build

cmake ../IfcOpenShell-source/cmake/

```

Notice that the `CMakeLists.txt` file that drives CMake is inside the `cmake/` subdirectory in the source directory.

Depending on your Linux distribution, and the way you installed the dependencies, you may have to define some CMake variables so that the libraries are found properly.

#### Specifying the OpenCASCADE libraries

If you manually compiled OpenCASCADE, or if the libraries are not in a standard directory, you may have to set the proper variables.

```
cmake \
    -DOCC_INCLUDE_DIR=/usr/include/opencascade \
    -DOCC_LIBRARY_DIR=/usr/lib/x86_64-linux-gnu \
    ../IfcOpenShell-source/cmake/

```

By default the build system expects the community edition (OCE) of OpenCASCADE (`/usr/include/oce/`), however, please notice that this version is old and no longer recommended by FreeCAD as of 2020. For this reason installing the development files of the main version of [OpenCASCADE](/OpenCASCADE "OpenCASCADE") (OCCT) is recommended.

#### Without OpenCOLLADA

If you don't need OpenCOLLADA support ([DAE](/Arch_DAE "Arch DAE") files) you need to turn it off explicitly with the `COLLADA_SUPPORT` variable.

```
cmake \
    ...
    -DCOLLADA_SUPPORT=FALSE \
    ../IfcOpenShell-source/cmake/

```

#### With OpenCOLLADA

If you manually compiled OpenCOLLADA, or if the libraries are not in a standard directory, you may have to set the proper variables for OpenCOLLADA and for the `libpcre` library.

```
cmake \
    ...
    -DOPENCOLLADA_INCLUDE_DIR=/usr/include/opencollada \
    -DOPENCOLLADA_LIBRARY_DIR=/usr/lib/opencollada \
    -DPCRE_LIBRARY_DIR=/usr/lib/x86_64-linux-gnu \
    ../IfcOpenShell-source/cmake/

```

#### Specifying the libxml2 libraries

If the `libxml2` libraries are not found during compilation and linking, or if the libraries are not in a standard directory, you may have to set the proper variables.

```
cmake \
    ...
    -DLIBXML2_INCLUDE_DIR=/usr/include/libxml2 \
    -DLIBXML2_LIBRARIES=/usr/lib/x86_64-linux-gnu/libxml2.so \
    ../IfcOpenShell-source/cmake/

```

#### Specifying installation in the user's home directory

By default, the Python module `ifcopenshell` will be installed in a system `site-packages/` directory, so it requires superuser privileges. By setting the `USERSPACE_PYTHON_PREFIX` variable, the installation of the Python module will be done to the user's home directory.

```
cmake \
    ...
    -DUSERSPACE_PYTHON_PREFIX=ON \
    ../IfcOpenShell-source/cmake/

```

#### Specifying Python version

If you want to generate a binding for a particular Python version, set the `PYTHON_EXECUTABLE` variable to the specific executable. Remember that this version must be the same Python version against which FreeCAD was compiled.

```
cmake \
    ...
    -DPYTHON_EXECUTABLE=/usr/bin/python3.6 \
    ../IfcOpenShell-source/cmake/

```

#### Single configuration line

In a typical Debian/Ubuntu system you may use this line to configure the compilation. Adjust it as necessary.

```
cmake -DOCC_INCLUDE_DIR=/usr/include/opencascade -DOCC_LIBRARY_DIR=/usr/lib/x86_64-linux-gnu -DLIBXML2_INCLUDE_DIR=/usr/include/libxml2 -DLIBXML2_LIBRARIES=/usr/lib/x86_64-linux-gnu/libxml2.so -DUSERSPACE_PYTHON_PREFIX=ON ../IfcOpenShell-source/cmake/

```

Without OpenCOLLADA:

```
cmake -DOCC_INCLUDE_DIR=/usr/include/opencascade -DOCC_LIBRARY_DIR=/usr/lib/x86_64-linux-gnu -DCOLLADA_SUPPORT=FALSE -DLIBXML2_INCLUDE_DIR=/usr/include/libxml2 -DLIBXML2_LIBRARIES=/usr/lib/x86_64-linux-gnu/libxml2.so -DUSERSPACE_PYTHON_PREFIX=ON ../IfcOpenShell-source/cmake/

```

### Actual compilation

If there were no error messages during configuration with CMake, a `Makefile` should have been created in the build directory, so you can proceed to compile the libraries by running `make`.

```
make -j N

```

`N` is the number of processors that you assign to the compilation process; choose at least one fewer than the total number of CPU cores that you have.

### Troubleshooting and other options

All configuration options are available in the `CMakeLists.txt` file located inside the `IfcOpenShell-source/cmake/` directory. If there are problems when running CMake or Make, look here for other options that may need to be set.

In all instructions above, instead of `cmake`, the graphical interface `cmake-gui` can be used. This will quickly show the available options in the configuration.

```
cmake-gui ../IfcOpenShell-source/cmake/

```

### Testing the compilation in the build directory

If the build was successful you should have an `examples/` subdirectory with the newly compiled `IfcOpenHouse` executable. Run this utility from the build directory to generate a sample IFC file.

```
example/IfcOpenHouse

```

The sample [IFC](/Arch_IFC "Arch IFC") file should appear in the build directory, and can be used as input to the also newly compiled `IfcConvert` executable. This utility takes as input an IFC file, and produces as output a different format including [OBJ](/Arch_OBJ "Arch OBJ"), [DAE](/Arch_DAE "Arch DAE") if OpenCOLLADA support was enabled, STEP, IGS, XML, [SVG](/Draft_SVG "Draft SVG"), or another [IFC](/Arch_IFC "Arch IFC").

```
./IfcConvert IfcOpenHouse.ifc

```

If no output file is specified, by default it will create an [OBJ](/Arch_OBJ "Arch OBJ") file and its accompanying material table (MTL).

### Installation of the compiled libraries

If the compilation doesn't report any errors, you may run `make install` to copy the headers, compiled libraries, and binaries to their corresponding installation directories.

```
sudo make install

```

By default, the `CMAKE_INSTALL_PREFIX` is `/usr/local/`, so all compiled files will be placed under this directory, which normally requires elevated privileges.

```
/usr/local/bin/IfcConvert
/usr/local/bin/IfcGeomServer
/usr/local/include/ifcparse/*.h
/usr/local/include/ifcgeom/*.h
/usr/local/include/ifcgeom_schema_agnostic/*.h
/usr/local/include/serializers/{*.h,*.cpp}
/usr/local/include/serializers/schema_dependent/{*.h,*.cpp}
/usr/local/lib/libIfcGeom*.a
/usr/local/lib/libIfcParse.a
/usr/local/lib/libSerializers*.a

```

The `ifcopenshell` Python module that is required for FreeCAD is not actually present in the build directory; this package is created only when `make install` is run. The resulting package is placed in a `site-packages/` directory, or a `dist-packages/` directory for Debian/Ubuntu distributions.

```
/usr/lib/python3/dist-packages/ifcopenshell/

```

If the `USERSPACE_PYTHON_PREFIX` variable was set during the CMake configuration step, `ifcopenshell` will be placed in the user's `site-packages/` directory.

```
$HOME/.local/lib/python3.6/site-packages/ifcopenshell/

```

### Removing the compiled libraries

To remove the installed libraries, just remove the corresponding files that were installed, and the `ifcopenshell/` directory with all modules inside.

```
sudo rm -rf /usr/local/bin/IfcConvert
sudo rm -rf /usr/local/bin/IfcGeomServer
sudo rm -rf /usr/local/include/ifcparse/
sudo rm -rf /usr/local/include/ifcgeom/
sudo rm -rf /usr/local/include/ifcgeom_schema_agnostic/
sudo rm -rf /usr/local/lib/libIfcGeom*
sudo rm -rf /usr/local/lib/libIfcParse*
sudo rm -rf /usr/local/lib/libSerializers*

```

```
sudo rm -rf /usr/lib/python3/dist-packages/ifcopenshell/

```

Or if the `USERSPACE_PYTHON_PREFIX` variable was set.

```
sudo rm -rf $HOME/.local/lib/python3.6/site-packages/ifcopenshell/

```

### Manual installation

Compilation of the entire IfcOpenShell distribution produces binaries like `IfcConvert` and `IfcGeomServer`, as well as many static libraries (`lib*.a`) in the build directory. However, for FreeCAD we only need the `ifcopenshell` Python module. This module is not a single file, but a "package", that is, a directory with various files. This `ifcopenshell` package is put together from the Python wrappers built inside `IfcOpenShell-build/ifcwrap/`, and from the Python modules in the original source directory `IfcOpenShell-source/src/ifcopenshell-python/ifcopenshell/`.

* Produced by the compilation process:

```
../IfcOpenShell-build/ifcwrap/ifcopenshell_wrapper.py
../IfcOpenShell-build/ifcwrap/_ifcopenshell_wrapper.so

```

* Existing in the source directory:

```
../IfcOpenShell-source/src/ifcopenshell-python/ifcopenshell/

```

The `ifcopenshell` module is created by copying the original source directory, and adding the two `*ifcopenshell_wrapper*` files to it.

```
cp -rt . ../IfcOpenShell-source/src/ifcopenshell-python/ifcopenshell/
cp -t ifcopenshell/ ifcwrap/ifcopenshell_wrapper.py ifcwrap/_ifcopenshell_wrapper.so

```

Now this directory can be moved to the user-specific or system `site-packages/` (`dist-packages/` for Debian/Ubuntu) to make it available for all Python applications.

```
mv -t $HOME/.local/lib/python3.6/site-packages/ ifcopenshell/

```

Or for system-wide installation:

```
sudo mv -t /usr/lib/python3/dist-packages/ ifcopenshell/

```

Now the `ifcopenshell` module should be available to be imported from a [Python console](/Python_console "Python console").

```
>>> import ifcopenshell
>>> print(ifcopenshell.version)
0.6.0b0
>>> print(ifcopenshell.__path__)
['/home/user/.local/lib/python3.6/site-packages/ifcopenshell']

```

## IFC viewer application

The IfcOpenShell library actually includes a small graphical viewer for IFC files that uses PyQt5 and PythonOCC.

To launch this viewer from the Python console, the `application` class needs to be instantiated and started:

```
from ifcopenshell.geom.app import application
application().start()

```

If the library is already installed, the entire module can also be run from the terminal:

```
python3 /home/user/.local/lib/python3.6/site-packages/ifcopenshell/geom/app.py

```

At the time of writing (2020), only the [PythonOCC](/PythonOCC "PythonOCC") version compiled for the [OpenCASCADE](/OpenCASCADE "OpenCASCADE") community edition (OCE) was supported.

## IFC online viewer

The IfcOpenShell project has also developed "IFC Pipeline", a self-hosted IFC processing and visualization program. It also provides a small web application that accepts file uploads, which anybody can use. This means that to visualize IFC data you don't need to have IfcOpenShell, or other viewers, installed locally; you can just load your IFC file into this system to see the result.

* Online viewer: <https://view.ifcopenshell.org/>
* Repository: [AECgeeks/ifc-pipeline](https://github.com/AECgeeks/ifc-pipeline)

## More information

* Website: [ifcopenshell.org](http://ifcopenshell.org/)
* Code repository: [IfcOpenShell/IfcOpenShell](https://github.com/IfcOpenShell/IfcOpenShell)
* Academy with examples and articles: [academy.ifcopenshell.org](http://academy.ifcopenshell.org/)
* [IfcOpenShell online viewer](https://view.ifcopenshell.org/)
* OSArch community with resources for open source architecture: [wiki.OSArch.org](https://wiki.osarch.org/index.php?title=Main_Page)
* [Installation of IfcOpenShell](https://forum.freecadweb.org/viewtopic.php?f=39&t=48971); main discussion in the forum.
* [IFC installation](https://forum.freecadweb.org/viewtopic.php?f=39&t=12368&start=10#p117883); old discussion in the forum.
* [IfcPlusPlus compiled on Gentoo - questions and alternatives?](https://forum.freecadweb.org/viewtopic.php?f=39&t=33254)
* [Compiling IfcOpenShell for MacOS](/Import/Export_IFC_-_compiling_IfcOpenShell "Import/Export IFC - compiling IfcOpenShell"); an older guide that describes the general process. It may not be needed any more as IfcOpenShell is now distributed together with FreeCAD thanks to [Conda](/Conda "Conda").
* What pages link to [this page](/Special:WhatLinksHere/IfcOpenShell "Special:WhatLinksHere/IfcOpenShell").

Retrieved from "<http://wiki.freecad.org/index.php?title=IfcOpenShell/en&oldid=1433911>"