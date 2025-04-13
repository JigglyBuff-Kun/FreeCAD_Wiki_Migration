---
title: MOOC Workbench
---

![](/src/assets/images/MOOC_workbench_icon.svg)

The FreeCAD MOOC External Workbench Icon

## Overview

The MOOC Workbench is an [external workbench](/External_workbenches "External workbenches") with which you can follow interactive tutorials and make evaluation of your work directly within the FreeCAD interface. The MOOC workbench offers 2 tools: interactive tutorials and evaluations.

- Currently only in French (and hard-coded).
- Only compatible with FreeCAD Py3 and Qt5 (PySide2)
- LGPLv2 (or similar) code funded by Europe through IMT and EESAB.
- Modular: This workbench was created with the intention that the addition of tutorials and evaluations was modular. In other words, one has to add a tutorial in the lessons folder or an evaluation in the exercises folder to show up in the respective tool.

### Interactive

**Interactive** tutorials (AKA ![](/src/assets/images/MOOC_Player.svg) Player) are step-by-step guided exercises with objective checks. It launches directly into FreeCAD and allows you to advance one step at a time of modeling of an object. The user has a text, a video and above all a check that the objectives have been achieved.

![](/src/assets/images/MOOC_Player_Dialog_Context.png)

MOOC Player Dialog within FreeCAD GUI

![](/src/assets/images/MOOC_Player_Dialog.png)

MOOC Player Dialog close up

### Evaluations

**Evaluations** (AKA ![](/src/assets/images/MOOC_Grader.svg) Grader) consist of a small program that checks certain criteria of a FreeCAD document, for example, the presence of a part body, a sketch or the final volume.
![](/src/assets/images/MOOC_Grader_Dialog.png)

The MOOC Grader Dialog

## Installation

This workbench can be installed from the [Addon Manager](/Std_AddonMgr "Std AddonMgr"). For manual installation see [Installing more workbenches](/Installing_more_workbenches "Installing more workbenches").

## Limitations

ATM this workbench is only available in the French language.

## Technical Details

From a technical point of view, the workbench is composed of:

- an "API" that contains the code that analyzes the document (MoocChecker.py)
- the code that executes the tutorials in the "lessons" folder (MoocPlayer.py)
- the code that executes the evaluations in the "exercises" folder (MoocGrader.py)

## Roadmap

- internationalization of the workbench
- Integration of videos in FreeCAD (PySide2.QtWebEngineWidgets?)
- ~~request the integration of the workbench in the list of the addon manager~~ DONE

## Links

- Source code hosted on Framagit: [[1]](https://framagit.org/freecad-france/mooc-workbench)
- Official complete [[2]](https://framagit.org/freecad-france/mooc-workbench#mooc-workbench)
- Discussion threads: [English](https://forum.freecadweb.org/viewtopic.php?f=9&t=37584) / [French](https://forum.freecadweb.org/viewtopic.php?f=12&t=37322)

## External workbenches

FreeCAD workbenches are easy to program in [Python](/Python "Python"), there are therefore many people developing additional workbenches outside of the FreeCAD main developers.

The [external workbenches](/External_workbenches "External workbenches") page has some information and tutorials on some of them, and the [FreeCAD Addons](https://github.com/FreeCAD/FreeCAD-addons) project aims at gathering them and making them easily installable from within FreeCAD.

New workbenches are in development, stay tuned!

Retrieved from "<http://wiki.freecad.org/index.php?title=MOOC_Workbench/en&oldid=836724>"
