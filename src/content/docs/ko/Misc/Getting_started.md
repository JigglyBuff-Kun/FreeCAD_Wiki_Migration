---
title: 시작하기
---
## 머리말

FreeCAD는 3D CAD/CAE 중 [변수 기반형 모델링 프로그램](/About_FreeCAD "About FreeCAD") 입니다. 이것은 주로 기계 설계를 위해 만들어 졌지만, 변수에 치수를 입력하여 정밀하게 조절 하면서 모델링 된 이력을 가진 3D 개체의 모델링이 필요한 다른 분야들에도 이용 됩니다.

FreeCAD는 2002년에 시작하여 발전되어 왔으며, [features](/Feature_list "Feature list") 목록에 수록된 많은 기능들을 제공합니다. 아직 미비된 성능들이 있지만 취미 용도나 소규모 업무 등 에는 충분한 상태입니다.
급성장 하고 있는 [FreeCAD 포럼](http://forum.freecadweb.org/index.php)에 참여하는 열정적인 사용자 커뮤니티가 있고, 품질 관리를 위해, FreeCAD 로 만들어진 것을 [많은 예제들](https://forum.freecadweb.org/viewforum.php?f=24) 에서 찾아 볼 수 있습니다.

모든 오픈 소스 프로젝트와 마찬가지로 FreeCAD 프로젝트는 개발자가 제공하는 단방향 작업이 아닙니다. 커뮤니티 성장에 따라 기능을 늘리고 안정화됩니다 (버그 수정). FreeCAD를 사용할 때 이것을 잊지 마십시오. 원한다면 FreeCAD에 직접적인 영향을 미치고 [FreeCAD 돕기](/Help_FreeCAD "Help FreeCAD") 할 수 있습니다!

See also:

* [Migrating to FreeCAD from Fusion360](/Migrating_to_FreeCAD_from_Fusion360 "Migrating to FreeCAD from Fusion360")
* [Which workbench should I choose?](/Which_workbench_should_I_choose "Which workbench should I choose")
* [Tutorials](/Tutorials "Tutorials")
* [Video tutorials](/Video_tutorials "Video tutorials")

## 설치

우선, FreeCAD를 내려받고 설치하세요. 현재 버전과 업데이트 정보는 [Download](/Download "Download") 페이지를 보고, 설치 명령은 [설치](/Installing "Installing") 페이지를 보세요. 윈도(.msi), 데비안 및 우분투(.deb), 오픈수세(.rpm) 및 맥 OSX에 사용할 수 있는 설치 패키지가 있습니다. FreeCAD는 다른 많은 Linux 배포판의 패키지 관리자로부터 구할 수 있습니다. 가장 최근의 64 비트 Linux 시스템에서 실행되는 독립 실행형 [AppImage](https://appimage.org/) 실행 파일도 사용할 수 있습니다. FreeCAD는 오픈 소스이므로, 소스 코드를 가져 와서 직접 [컴파일](/Compiling "Compiling") 할 수도 있습니다.

## FreeCAD 탐험

![](/images/FreeCAD_interface_base_divisions.svg)

![](/images/FreeCAD_interface.png)

1. 3D view는 문서의 내용을 보여줌
2. [tree view](/Document_structure "Document structure")는 문서 안의 모든 계체의 계층과 구조 역사를 보여줌
3. [property editor](/Property_editor "Property editor")는 선택한 개체의 properties를 보고 바꾸는 것을 허용
4. report view(즉 output window)는 FreeCAD 가 메시지, 경고, 에러를 보여주는 곳
5. The Python console, FreeCAD가 실행하는 모든 명령이 출력되고, python 코드를 입력하는 곳
6. The [workbench selector](/Workbenches "Workbenches"), where you select the active workbench

FreeCAD 인터페이스의 기본 개념은 [workbenches](/Workbenches "Workbenches")로 분리된다는 것입니다. A workbench is a collection of tools suited for a specific task, such as working with [meshes](/Mesh_Workbench "Mesh Workbench"), or drawing [2D objects](/Draft_Workbench "Draft Workbench"), or [constrained sketches](/Sketcher_Workbench "Sketcher Workbench"). You can switch the current workbench with the workbench selector (6). You can [customize](/Interface_Customization "Interface Customization") the tools included in each workbench, add tools from other workbenches or even self-created tools, that we call [macros](/Macros "Macros"). Widely used starting points are the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") and [Part Workbench](/Part_Workbench "Part Workbench").

FreeCAD를 처음 시작하면, start center에 있습니다. 여기는 버전 0.16:

![](/images/Start_center_0.19_screenshot.png)

The Start page allows you to quickly jump to one of the most common workbenches, open one of the recent files, or see the latest news from the FreeCAD world. You can change the default workbench in the [preferences](/Preferences_Editor "Preferences Editor").

## 3D 공간 항해하기

FreeCAD has several [navigation modes](/Mouse_navigation "Mouse navigation") available, that change the way you use your mouse to interact with the objects in the 3D view and the view itself. One of them is specifically made for [touchpads](/Mouse_navigation#Touchpad_navigation "Mouse navigation"), where the middle mouse button is not used. The default navigation mode is [CAD navigation](/Mouse_navigation#CAD_navigation "Mouse navigation"). You can quickly change the current navigation mode by using the ![](/images/NavigationCAD_dark.svg) button in the [Status bar](/Status_bar "Status bar") or by right-clicking an empty area of the [3D view](/3D_view "3D view").

You also have several view presets (top view, front view, etc) available in the View menu, on the View toolbar, and by numeric shortcuts (1, 2, etc...). By right-clicking on an object or on an empty area of the 3D view, you have quick access to some common operations, such as setting a particular view, or locating an object in the Tree view.

## FreeCAD와 함께하는 첫 단계

FreeCAD's focus is to allow you to make high-precision 3D models, to keep tight control over those models (being able to go back into modelling history and change parameters), and eventually to build those models (via 3D printing, CNC machining or even construction worksite). It is therefore very different from some other 3D applications made for other purposes, such as animation film or gaming. Its learning curve can be steep, especially if this is your first contact with 3D modeling. If you are stuck at some point, don't forget that the friendly community of users on the [FreeCAD forum](http://forum.freecad.org/index.php) might be able to get you out in no time.

The workbench you will start using in FreeCAD depends on the type of job you need to do: If you are going to work on mechanical models, or more generally any small-scale objects, you'll probably want to try the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"). If you will work in 2D, then switch to the [Draft Workbench](/Draft_Workbench "Draft Workbench"), or the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") if you need constraints. If you want to do BIM, launch the [BIM Workbench](/BIM_Workbench "BIM Workbench"). And if you come from the OpenSCAD world, try the [OpenSCAD Workbench](/OpenSCAD_Workbench "OpenSCAD Workbench"). There are also many community-developed [external workbenches](/External_workbenches "External workbenches") available.

아무 때나 workbenches 전환할 수 있으며, and also [customize](/Interface_Customization "Interface Customization") your favorite workbench to add tools from other workbenches.

## PartDesign 및 Sketcher workbenches와 함께 일하기

The [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") is made to build complex objects, starting from simple shapes, and adding or removing pieces (called "features"), until you get to your final object. All the features you applied during the modelling process are stored in a separate view called the [tree view](/Document_structure "Document structure"), which also contains the other objects in your document. You can think of a PartDesign object as a succession of operations, each one applied to the result of the preceding one, forming one big chain. In the tree view, you see your final object, but you can expand it and retrieve all preceding states, and change any of their parameter, which automatically updates the final object.

The PartDesign workbench makes heavy use of another workbench, the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"). The sketcher allows you to draw 2D shapes, which are defined by applying Constraints to the 2D shape. For example, you might draw a rectangle and set the size of a side by applying a length constraint to one of the sides. That side then cannot be resized anymore (unless the constraint is changed).

Those 2D shapes made with the sketcher are used a lot in the PartDesign workbench, for example to create 3D volumes, or to draw areas on the faces of your object that will then be hollowed from its main volume. This is a typical PartDesign workflow:

1. 새 sketch 만들기
2. Draw a closed shape (make sure all points are joined)
3. sketch 닫기
4. Expand the sketch into a 3D solid by using the pad tool
5. Select one face of the solid
6. 두번째 sketch 만들기(this time it will be drawn on the selected face)
7. 닫힘 shape 그리기
8. sketch 닫기
9. Create a pocket from the second sketch, on the first object

Which gives you an object like this:

![](/images/Partdesign_example.jpg)

At any moment, you can select the original sketches and modify them, or change the extrusion parameters of the pad or pocket operations, which will update the final object.

## Working with the Draft and BIM workbenches

The [Draft Workbench](/Draft_Workbench "Draft Workbench") and [BIM Workbench](/BIM_Workbench "BIM Workbench") behave a bit differently than the other workbenches above, although they follow the same rules, which are common to all of FreeCAD. In short, while the Sketcher and PartDesign are made primarily to design single pieces, Draft and BIM are made to ease your work when working with several, simpler objects.

The [Draft Workbench](/Draft_Workbench "Draft Workbench") offers you 2D tools somewhat similar to what you can find in traditional 2D CAD applications such as [AutoCAD](https://en.wikipedia.org/wiki/AutoCAD). However, 2D drafting being far away from the scope of FreeCAD, don't expect to find there the full array of tools that these dedicated applications offer. Most of the Draft tools work not only in a 2D plane but also in the full 3D space, and benefit from special helper systems such as [Work planes](/Draft_SelectPlane "Draft SelectPlane") and [object snapping](/Draft_Snap "Draft Snap").

The [BIM Workbench](/BIM_Workbench "BIM Workbench") adds [BIM](http://en.wikipedia.org/wiki/Building_Information_Modeling) tools to FreeCAD, allowing you to build architectural models with parametric objects. The BIM workbench relies extensively on other modules such as Draft and Sketcher. All the Draft tools are also present in the BIM workbench, and most BIM tools make use of the Draft helper systems.

전형적 workflow 와 Arch 및 Draft workbenches 는:

1. Draw a couple of lines with the Draft Line tool
2. Select each line and press the Wall tool to build a wall on each of them
3. Join the walls by selecting them and pressing the BIM Add tool
4. Create a floor object, and in the Tree view drag your walls into the floor object
5. Create a building object, and in the Tree view drag your floor (which now includes the walls) into the building object
6. Create a window by clicking the Window tool, select a preset in its panel, then click on a face of a wall
7. Add dimensions by first setting the working plane if necessary, then using the Draft Dimension tool

Which will give you this:

![](/images/Arch_workflow_example.jpg)

[Tutorials](/Tutorials "Tutorials") 페이지 더.

## Scripting

Any user can develop their own new features for FreeCAD and make them available to the FreeCAD community as an [addon](/Addon "Addon").

There are three types of addons:

* [Macros](/Macros "Macros"): short snippet of [Python](/Python "Python") code that provides a new tool or functionality in a single file ending with `.FCMacro`.
* [Workbenches](/External_workbenches "External workbenches"): collections of Python files that provide related [Gui Commands](/Gui_Command "Gui Command") (tools) centered around a particular topic.
* [Preference Packs](/Preference_Packs "Preference Packs"): distributable collections of user preferences.

## Scripting

마지막으로, FreeCAD의 가장 강력한 기능 중 하나는 [scripting](/Scripting "Scripting") 환경입니다. From the integrated python console (or from any other external Python script), you can gain access to almost any part of FreeCAD, create or modify geometry, modify the representation of those objects in the 3D scene or access and modify the FreeCAD interface. Python scripting can also be used in [macros](/Macros "Macros"), which provide an easy method to create custom commands.

## 새로운 점

* 자세한 특징 목록은 [release notes](/Feature_list#Release_notes "Feature list")를 보세요.

Retrieved from "<http://wiki.freecad.org/index.php?title=Getting_started/ko&oldid=1480470>"