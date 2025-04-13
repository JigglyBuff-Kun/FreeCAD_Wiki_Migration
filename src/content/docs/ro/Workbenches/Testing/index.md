---
title: Testing/Testare
---
![](/images/Workbench_Test.svg)

Test workbench icon

## Introducere

Aceasta este lista de aplicații de testare de la 0,15 Git 4207:

FreeCAD vine cu un cadru vast de testare. Bazele de testare se bazează pe un set de scripturi. Îngrijirea Python se află în modulul de testare.

You can run the tests from the command line, by using the `-t` or `--run-test` options.

Run all tests:

```
freecad --run-test 0

```

Run only some the specified unit test, for example:

```
freecad -t TestDraft

```

If a test does not need the GUI, it can also be executed in console mode by setting the `-c` or `--console` option in addition. This usually results in much faster startup time as the GUI is not loaded. For example:

```
freecad -c -t TestPartDesignApp

```

## Test menu

Each top level directory in FreeCAD should have a file with the tests that can be run for that particular workbench or module. The file usually starts with the word `Test`.

To run a test from within FreeCAD, switch to the Test Workbench, then **Test commands → TestToolsGui → Self test → Select test name**, then enter the name of the Python file with the tests; for example, for the [Draft Workbench](/Draft_Workbench "Draft Workbench"), this would be **TestDraft**, then press Start.

## Test functions

This is the list of test apps as of 0.15 git 4207:

### TestAPP.All

Adăugați funcția de testare

Add test function

### BaseTests

Adăugați funcția de testare

Add test function

### UnitTests

Adăugați funcția de testare

Add test function

### Document

Adăugați funcția de testare

Add test function

### UnicodeTests

Adăugați funcția de testare

Add test function

### MeshTestsApp

Adăugați funcția de testare

Add test function

### TestDraft

Add test function

### TestSketcherApp

Adăugați funcția de testare

Add test function

### TestPartApp

Adăugați funcția de testare

Add test function

### TestPartDesignApp

Adăugați funcția de testare

Add test function

### TestCAMApp

Path workbench test cases:

* depthTestCases:
* PathTestUtils:
* TestDressupDogbone: Test functionality of Dogbone dressup.
* TestHoldingTags: Test functionality of Holding Tags dressup.
* TestPathAdaptive: Test selection capability of Adaptive operation.
* TestPathCore: Test core functionality of Path workbench.
* TestPathDeburr: Test general functionality of Deburr operation.
* TestPathGeom: Test various functions available in the PathGeom module.
* TestPathHelix: Test general functionality of Helix operation.
* TestPathLog: Test various functions available in the PathLog debugging and feedback module.
* TestPathOpTools:
* TestPathPreferences: Test various functions available in the PathPreferences module.
* TestPathPropertyBag:
* TestPathSetupSheet:
* TestPathStock:
* TestPathThreadMilling:
* TestPathTool:
* TestPathToolBit:
* TestPathToolController:
* TestPathTooltable:
* TestPathUtil: Test various functions available in the PathUtil module.
* TestPathVcarve: Test general functionality of Vcarve operation.
* TestPathVoronoi:

### Workbench

Adăugați funcția de testare

Add test function

### Meniu

Adăugați funcția de testare

Add test function

### Menu.MenuDeleteCases

Adăugați funcția de testare

Add test function

### Menu.MenuCreateCases

Adăugați funcția de testare

Add test function

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

### Get a list of all top-level test modules

```
FreeCAD.__unit_test__

```

Note that the test modules returned here depend on whether a GUI available or not. I.e. when executed in console mode, various tests ending in "Gui" are missing.

### Run specific tests

There are various ways of running tests using [Python's unittest library](https://docs.python.org/3/library/unittest.html). FreeCAD's test framework removes some of the boiler plate for the most common cases.

Run all tests defined in a Python module:

```
import Test, TestFemApp
Test.runTestsFromModule(TestFemApp)

```

Run all tests defined in a Python class:

```
import Test, femtest.app.test_solver_calculix
Test.runTestsFromClass(femtest.app.test_solver_calculix.TestSolverCalculix)

```

### Example 1

Within the Python Console of FreeCAD, the following code format may be used to run built-in tests. Replace the red "**TestFem**" text in the code below with the desired module test name.

* For example, use "**TestPathApp**" to run all unit tests for the Path workbench unit test framework.
* Submodules are available using dot notation, like "**TestPathApp.TestPathAdaptive**" to only run the Adaptive unit tests within the greater Path workbench test framework.
* Multiple test modules or submodules may be combined by adding another `**suite.addTest(...)**` method call just like the one in the code below, but with a different module or submodule reference.
* Output for the code below will be in the Report View panel within the FreeCAD GUI.
* Code source is copied from post by FreeCAD forum user, *sgrogan*, in the [unit tests per python](https://forum.freecadweb.org/viewtopic.php?style=3&p=153251#p153251) topic, with credit there given to forum user, *wmayer*.

```
import unittest
suite = unittest.TestSuite()
suite.addTest(unittest.defaultTestLoader.loadTestsFromName("TestFem"))
r = unittest.TextTestRunner()
r.run(suite)

```

## Additional Resources

### Forum Topics

* [Support for running specific unit tests with --run-test #331](https://forum.freecadweb.org/viewtopic.php?style=3&f=27&t=18379)

Retrieved from "<http://wiki.freecad.org/index.php?title=Testing/ro&oldid=1404414>"