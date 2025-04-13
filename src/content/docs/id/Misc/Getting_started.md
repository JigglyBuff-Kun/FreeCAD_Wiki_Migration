---
title: Getting started
---
## Pendahuluan

FreeCAD adalah aplikasi parametrik modeling CAD/CAE. FreeCAD masih dalam tahap awal pengembang, jadi jangan berharap dapat menggunakannya untuk menghasilkan pekerjaan seperti aplikasi CAD yang telah populer.

Tapi, jika kamu ingin tahu seperti FreeCAD itu dan fitur apa saja yang sedang dikembangkan, Anda dipersilakan untuk mengunduhnya dan mencobanya. Pada saat ini, banyak fungsi yang sudah ada, tapi masih banyak antarmuka pengguna yang belum dibuat. Namun jika kamu tahu sedikit tentang Python, kamu akan mampu menghasilkan dan memodifikasi geometri yang kompleks dengan relatif mudah. Jika tidak, mungkin kamu akan menemukan bahwa FreeCAD masih belum sempurna untukmu. Tapi, bersabarlah, hal ini diharapkan segera berubah.

Dan jika setelah mencoba kamu punya saran, ide atau opini, silahkan dibagi dengan kami di [FreeCAD discussion forum](http://forum.freecadweb.org/index.php)!

See also:

* [Migrating to FreeCAD from Fusion360](/Migrating_to_FreeCAD_from_Fusion360 "Migrating to FreeCAD from Fusion360")
* [Which workbench should I choose?](/Which_workbench_should_I_choose "Which workbench should I choose")
* [Tutorials](/Tutorials "Tutorials")
* [Video tutorials](/Video_tutorials "Video tutorials")

## Instalasi

Pertama (jika belum) unduh dan instal FreeCAD. Lihat halaman [Download](/Download "Download") untuk informasi tentang versi terbaru dan updatenya. Terdapat paket instalasi siap pakai untuk Windows (.msi), Ubuntu & Debian (.deb), openSUSE (.rpm) dan Mac OSX. See the [Instal](/Installing/id "Installing/id") page for information about how to install FreeCAD.

## Explorasi FreeCAD

![](/images/Freecad09-empty.jpg)

The FreeCAD interface when you start it for the first time. See more [screenshots](/Screenshots "Screenshots") here.

FreeCAD adalah aplikasi 3D modeling untuk semua kebutuhan, difokuskan pada teknik mesin dan bidang terkait, seperti spesialisasi teknik lain atau arsitektur. Hal ini dijadikan dasar sebagai platform untuk mengembangkan berbagai jenis aplikasi 3D, tetapi juga untuk melakukan tugas-tugas yang sangat spesifik. Untuk tujuan itu, antarmuka dibagi menjadi beberapa [Workbenches](/Workbenches "Workbenches"). Workbenches memungkinkan untuk mengubah isi antarmuka untuk menampilkan semua dan hanya alat yang diperlukan untuk tugas tertentu, atau kelompok tugas.

Antarmuka FreeCAD dapat digambarkan sebagai wadah yang sangat sederhana, dengan menu bar, area tampilan 3D, dan beberapa panel samping untuk menampilkan gambaran isi atau properti obyek. Semua isi dari panel ini dapat diubah tergantung pada workbench.

Ketika kamu mulai FreeCAD untuk pertama kalinya, kamu akan disajikan sebuah workbench "umum", yang kita sebut "complete workbench". Workbench ini hanya menampilkan alat yang paling matang dari workbenches lainnya. Karena FreeCAD cukup muda dan belum digunakan untuk pekerjaan yang sangat khusus, workbench ini sangat berguna untuk menjadikan FreeCAD lebih mudah. Pada dasarnya, semua alat disini sudah cukup baik untuk menghasilkan geometri.

![](/images/FreeCAD_interface_base_divisions.svg)

![](/images/Freecad_default.jpg)

*See a full explanation in [Interface](/Interface "Interface").*

:   1. The [main view area](/Main_view_area "Main view area"), which can contain different tabbed windows, principally the [3D view](/3D_view "3D view").
:   2. The [3D view](/3D_view "3D view"), showing the geometrical objects in the document.
:   3. The [tree view](/Tree_view "Tree view") (part of the [combo view](/Combo_view "Combo view")), showing the hierarchy and construction history of objects in the document; it can also display the [task panel](/Task_panel "Task panel") for active commands.
:   4. The [property editor](/Property_editor "Property editor") (part of the [combo view](/Combo_view "Combo view")), which allows viewing and modifying properties of the selected objects.
:   5. The [selection view](/Selection_view "Selection view"), which indicates the objects or sub-elements of objects (vertices, edges, faces) that are selected.
:   6. The [report view](/Report_view "Report view") (or output window), where messages, warnings and errors are shown.
:   7. The [Python console](/Python_console "Python console"), where all the commands executed are printed, and where you can enter [Python](/Python "Python") code.
:   8. The [status bar](/Status_bar "Status bar"), where some messages and tooltips appear.
:   9. The toolbar area, where the toolbars are docked.
:   10. The [workbench selector](/Std_Workbench "Std Workbench"), where you select the active [workbench](/Workbenches "Workbenches").
:   11. The [standard menu](/Standard_Menu "Standard Menu"), which holds basic operations of the program.

The main concept behind the FreeCAD interface is that it is separated into [workbenches](/Workbenches "Workbenches"). A workbench is a collection of tools suited for a specific task, such as working with [meshes](/Mesh_Workbench "Mesh Workbench"), or drawing [2D objects](/Draft_Workbench "Draft Workbench"), or [constrained sketches](/Sketcher_Workbench "Sketcher Workbench"). You can switch the current workbench with the [workbench selector](/Std_Workbench "Std Workbench"). You can [customize](/Interface_Customization "Interface Customization") the tools included in each workbench, add tools from other workbenches or even self-created tools, that we call [macros](/Macros "Macros"). Widely used starting points are the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") and [Part Workbench](/Part_Workbench "Part Workbench").

When you start FreeCAD for the first time, you are presented with the Start page. Here is what it looks like for version 0.19:

![](/images/Start_center_0.19_screenshot.png)

The Start page allows you to quickly jump to one of the most common workbenches, open one of the recent files, or see the latest news from the FreeCAD world. You can change the default workbench in the [preferences](/Preferences_Editor "Preferences Editor").

### Navigasi di Area 3D

FreeCAD memiliki tiga [mode navigasi](/Mouse_Model/id "Mouse Model/id") berbeda yang tersedia, yang dapat diatur dalam dialog pengaturan preferensi atau diubah dengan mengklik kanan dalam tampilan 3D. Untuk informasi lengkap tentang mode, lihat [Mouse Model](/Mouse_Model/id "Mouse Model/id") page. Untuk mode default ("CAD Navigation"), perintah adalah sebagai berikut,

Anda juga memiliki beberapa pandangan(view) yang tersedia (tampak atas, tampak depan, dll) yang tersedia di menu View dan pada toolbar View, dan dengan cara jalan pintas numerik ( 1,  2, dll. .)

## First steps with FreeCAD

FreeCAD's focus is to allow you to make high-precision 3D models, to keep tight control over those models (being able to go back into modelling history and change parameters), and eventually to build those models (via 3D printing, CNC machining or even construction worksite). It is therefore very different from some other 3D applications made for other purposes, such as animation film or gaming. Its learning curve can be steep, especially if this is your first contact with 3D modeling. If you are stuck at some point, don't forget that the friendly community of users on the [FreeCAD forum](http://forum.freecad.org/index.php) might be able to get you out in no time.

The workbench you will start using in FreeCAD depends on the type of job you need to do: If you are going to work on mechanical models, or more generally any small-scale objects, you'll probably want to try the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"). If you will work in 2D, then switch to the [Draft Workbench](/Draft_Workbench "Draft Workbench"), or the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") if you need constraints. If you want to do BIM, launch the [BIM Workbench](/BIM_Workbench "BIM Workbench"). And if you come from the OpenSCAD world, try the [OpenSCAD Workbench](/OpenSCAD_Workbench "OpenSCAD Workbench"). There are also many community-developed [external workbenches](/External_workbenches "External workbenches") available.

You can switch workbenches at any time, and also [customize](/Interface_Customization "Interface Customization") your favorite workbench to add tools from other workbenches.

## Working with the PartDesign and Sketcher workbenches

The [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") is made to build complex objects, starting from simple shapes, and adding or removing pieces (called "features"), until you get to your final object. All the features you applied during the modelling process are stored in a separate view called the [tree view](/Document_structure "Document structure"), which also contains the other objects in your document. You can think of a PartDesign object as a succession of operations, each one applied to the result of the preceding one, forming one big chain. In the tree view, you see your final object, but you can expand it and retrieve all preceding states, and change any of their parameter, which automatically updates the final object.

The PartDesign workbench makes heavy use of another workbench, the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"). The sketcher allows you to draw 2D shapes, which are defined by applying Constraints to the 2D shape. For example, you might draw a rectangle and set the size of a side by applying a length constraint to one of the sides. That side then cannot be resized anymore (unless the constraint is changed).

Those 2D shapes made with the sketcher are used a lot in the PartDesign workbench, for example to create 3D volumes, or to draw areas on the faces of your object that will then be hollowed from its main volume. This is a typical PartDesign workflow:

1. Create a new sketch
2. Draw a closed shape (make sure all points are joined)
3. Close the sketch
4. Expand the sketch into a 3D solid by using the pad tool
5. Select one face of the solid
6. Create a second sketch (this time it will be drawn on the selected face)
7. Draw a closed shape
8. Close the sketch
9. Create a pocket from the second sketch, on the first object

Which gives you an object like this:

![](/images/Partdesign_example.jpg)

At any moment, you can select the original sketches and modify them, or change the extrusion parameters of the pad or pocket operations, which will update the final object.

## Working with the Draft and BIM workbenches

The [Draft Workbench](/Draft_Workbench "Draft Workbench") and [BIM Workbench](/BIM_Workbench "BIM Workbench") behave a bit differently than the other workbenches above, although they follow the same rules, which are common to all of FreeCAD. In short, while the Sketcher and PartDesign are made primarily to design single pieces, Draft and BIM are made to ease your work when working with several, simpler objects.

The [Draft Workbench](/Draft_Workbench "Draft Workbench") offers you 2D tools somewhat similar to what you can find in traditional 2D CAD applications such as [AutoCAD](https://en.wikipedia.org/wiki/AutoCAD). However, 2D drafting being far away from the scope of FreeCAD, don't expect to find there the full array of tools that these dedicated applications offer. Most of the Draft tools work not only in a 2D plane but also in the full 3D space, and benefit from special helper systems such as [Work planes](/Draft_SelectPlane "Draft SelectPlane") and [object snapping](/Draft_Snap "Draft Snap").

The [BIM Workbench](/BIM_Workbench "BIM Workbench") adds [BIM](http://en.wikipedia.org/wiki/Building_Information_Modeling) tools to FreeCAD, allowing you to build architectural models with parametric objects. The BIM workbench relies extensively on other modules such as Draft and Sketcher. All the Draft tools are also present in the BIM workbench, and most BIM tools make use of the Draft helper systems.

A typical workflow with BIM and Draft workbenches might be:

1. Draw a couple of lines with the Draft Line tool
2. Select each line and press the Wall tool to build a wall on each of them
3. Join the walls by selecting them and pressing the BIM Add tool
4. Create a floor object, and in the Tree view drag your walls into the floor object
5. Create a building object, and in the Tree view drag your floor (which now includes the walls) into the building object
6. Create a window by clicking the Window tool, select a preset in its panel, then click on a face of a wall
7. Add dimensions by first setting the working plane if necessary, then using the Draft Dimension tool

Which will give you this:

![](/images/Arch_workflow_example.jpg)

More on the [Tutorials](/Tutorials "Tutorials") page.

## [Scripting](/Scripting "Scripting")

Dan terakhir, satu dari banyak fitur yang paling handal di FreeCAD adalah [scripting](/Scripting/id "Scripting/id") . Dari integrasi konsol python (atau dari eksternal skrip python yang lain), kamu dapat mengakses ke hampir semua bagian dari FreeCAD, membuat atau modifikasi geometri, memodifikasi representasi dari objek - objek dalam tampilan 3D atau akses dan memodifikasi antarmuka FreeCAD. Python scripting juga dapat digunakan dalam [macro](/Macros/id "Macros/id"), yang menyediakan metode yang mudah untuk membuat perintah sesuai keinginkan kita.

Any user can develop their own new features for FreeCAD and make them available to the FreeCAD community as an [addon](/Addon "Addon").

There are three types of addons:

* [Macros](/Macros "Macros"): short snippet of [Python](/Python "Python") code that provides a new tool or functionality in a single file ending with `.FCMacro`.
* [Workbenches](/External_workbenches "External workbenches"): collections of Python files that provide related [Gui Commands](/Gui_Command "Gui Command") (tools) centered around a particular topic.
* [Preference Packs](/Preference_Packs "Preference Packs"): distributable collections of user preferences.

## Scripting

And finally, one of the most powerful features of FreeCAD is the [scripting](/Power_users_hub#Scripting_in_FreeCAD "Power users hub") environment. From the integrated python console (or from any other external Python script), you can gain access to almost any part of FreeCAD, create or modify geometry, modify the representation of those objects in the 3D scene or access and modify the FreeCAD interface. Python scripting can also be used in [macros](/Macros "Macros"), which provide an easy method to create custom commands.

## Apa yang baru

* [Version 0.17 Release notes](/Release_notes_0.17 "Release notes 0.17") : Lihat apa yang baru di rilis 0.17
* [Version 0.16 Release notes](/Release_notes_0.16 "Release notes 0.16") : Lihat apa yang baru di rilis 0.16
* [Version 0.15 Release notes](/Release_notes_0.15 "Release notes 0.15") : Lihat apa yang baru di rilis 0.15
* [Version 0.14 Release notes](/Release_notes_0.14 "Release notes 0.14") : Lihat apa yang baru di rilis 0.14
* [Version 0.13 Release notes](/Release_notes_0.13 "Release notes 0.13") : Lihat apa yang baru di rilis 0.13
* [Version 0.12 Release notes](/Release_notes_0.12 "Release notes 0.12") : Lihat apa yang baru di rilis 0.12
* [Version 0.11 Release notes](/Release_notes_0.11 "Release notes 0.11") : Lihat apa yang baru di rilis 0.11

Retrieved from "<http://wiki.freecad.org/index.php?title=Getting_started/id&oldid=1480485>"