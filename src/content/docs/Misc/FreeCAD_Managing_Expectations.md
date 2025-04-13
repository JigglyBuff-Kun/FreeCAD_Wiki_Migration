---
title: FreeCAD Managing Expectations
---
:::caution
While we welcome and encourage community growth and participation, demands, emotional rants and wild claims are generally poorly received as our community is made up of many experienced and passionate supporters of FreeCAD who have heard similar statements many times over. If you find a feature lacking, or something which is annoying for you, we highly encourage you to consider getting engaged with the code itself. FreeCAD is largely developed by a relatively small group of talented people who all have day jobs, families and other interests beyond just programming on-demand. If you have the skills (Python/C++) and motivation to participate, your contributions can help make FreeCAD even better than it is today. You can find tracked bugs/feature requestshere.
:::

## Purpose

This wiki page is intended for new FreeCAD users coming from other CAD/CAM solutions.

## Opening statement

Many hobbyists, freelance designers and small businesses often seek refuge from the high costs and licensing restrictions of commercial software, or perhaps you merely choose FreeCAD because you believe in the philosophy behind [FOSS](https://en.wikipedia.org/wiki/FOSS). In either case, WELCOME! There are many users, just like you who have successfully made the transition to FreeCAD for their personal and professional needs. This wiki page is designed to help set you on the path to success and establish some realistic expectations while diving into the *FreeCAD Way*, which is most likely quite a bit different from what you may have grown accustomed to with other popular CAD software.

## What can I expect?

At its core, FreeCAD is a powerful parametric modeler. It uses a modular 'workbench' concept, where each workbench is responsible for specific tasks and functions. This concept is very flexible and can be successfully used for many purposes. FreeCAD is actively developed, used in production, and quite stable; but like any other CAD program, it is not 100% stable.

Coming from another CAD program you may find FreeCAD's terminology, structure and organization to be slightly foreign. You will probably need to make some adjustments to your workflows, learn functional workarounds or utilize our powerful [macro](/Macros "Macros") ecosystem, but in most cases you will be able to achieve what you want. And if you need help: we have a very active and responsive [forum](https://forum.freecad.org/index.php) willing to assist. Among the forum members there are bound to be (former) users of your current CAD program. So do not hesitate to tap into that resource.

## How can I contribute?

There are many ways: you can make a [donation](/Donate "Donate"), help with [forum](https://forum.freecad.org/index.php) questions, or write documentation or code. See [Help FreeCAD](/Help_FreeCAD "Help FreeCAD").

## Learning resources

### Official

* [This Wiki](/Main_Page "Main Page")
* [The Help Forum](https://forum.freecadweb.org/viewforum.php?f=3)
* [Workarounds for known problems](/Workarounds "Workarounds")

### Un-official

The following YouTube Channels have reasonably good quality content focused around FreeCAD (it is recommended to ignore any tutorials based on version 0.17 or earlier):

* *MangoJelly Solutions* (several beginner, intermediate and advanced video playlists)
* *Joko EngineeringHelp* (intermediate/advanced videos)
* *Brodie Fairhall* (A couple of videos helping Fusion 360 users transition to FreeCAD)
* And more...

## Questions and answers

### "Can FreeCAD do XYZ?"

FreeCAD already has the ability to do the following types of work:

* Spline-based parametric modeling using the [Part](/Part_Workbench "Part Workbench"), [Part Design](/PartDesign_Workbench "PartDesign Workbench") and [Sketcher](/Sketcher_Workbench "Sketcher Workbench") workbenches
* [Surface](/Surface_Workbench "Surface Workbench")/[Curves](/Curves_Workbench "Curves Workbench") modeling using NURBS
* [Mesh](/Mesh_Workbench "Mesh Workbench") import/modifications
* Assembly simulation (3 different approaches, [A2+](/A2plus_Workbench "A2plus Workbench"), [ASM3](/Assembly3_Workbench "Assembly3 Workbench"), and [ASM4](/Assembly4_Workbench "Assembly4 Workbench"), are all actively developed)
* [BIM](/BIM_Workbench "BIM Workbench") design
* Mechanical Stress Analysis ([FEM/FEA](/FEM_Workbench "FEM Workbench"))
* Computational Fluid Dynamic Analysis ([CFD](/Cfd_Workbench "Cfd Workbench"))
* [Technical Drawings](/TechDraw_Workbench "TechDraw Workbench")/[Drafting](/Draft_Workbench "Draft Workbench")
* And more [core](/Workbenches "Workbenches") and [external](/External_workbenches "External workbenches") workbenches...

### "User interface (UI/UX) is ugly, odd, confusing or not like XYZ Software!"

FreeCAD allows for [extensive customization](/Interface_Customization "Interface Customization") of the user interface. While we realize the default colors or arrangement of elements may not be pleasing to everyone, we encourage you to tailor it to your own specific needs and work-flows. If you feel you've come up with what could be a popular arrangement/theme/customized toolbars etc. please feel free to look into leveraging the recently added [Preference Pack](/Preference_Packs "Preference Packs") feature and share it with the community. Perhaps your efforts will help someone else in their transition to FreeCAD. FOSS software thrives on all sorts of community contributions and this is a common topic of discussion.

### "Why doesn't this feature work like in XYZ software?"

FreeCAD has a development pedigree spanning over [20 years](/History "History"). Functions and behaviors are heavily reviewed, debated and assessed before they are added or changed. Have an open mind, while it may not be apparent, there is likely a very good rationale behind such things. This isn't to say that FreeCAD is perfect, but please consider that what you've grown used to may not be the only or best way to get something done.

### "I can't figure out the workflow of FreeCAD!"

FreeCAD has a philosophy to not dictate 'how' you use it. Rather it provides tools and a wide array of options under which you 'can' use them. This means two things. First, the software isn't going to necessarily 'guide' or 'steer' you toward a certain style or workflow. Second, this means you can experiment with the tools and find what works best for you. This doesn't mean there aren't general ['best practices'](/Feature_editing "Feature editing") to keep in mind while using FreeCAD, but those best practices generally apply to any professional design software when creating stable models.

### "What the heck is with all these workbenches?"

One of the powerful features of FreeCAD is it's modularity. This is done by compartmentalizing tool development into workbenches. Once you are familiar with the tools provided they can often work synergistically to create highly complex and advanced models. A great analogy is that FreeCAD is structured similar to a mechanics rolling tool-chest, and each workbench is a drawer of specific tools. You can use these tools to build a car, but it is up to the mechanic to understand how to use them to accomplish their goal.

### "FreeCAD is fundamentally broken, my models blow-up!"

FreeCAD is built around an open-source Geometric Modeling Kernel called "[OpenCascade Technology](/OpenCASCADE "OpenCASCADE")" (or OCC). It is the most feature rich and mature open source modeling kernel available. However it does have bugs, quirks and limitations. One of these is referred to as the ["Topological Naming Problem"](/Topological_naming_problem "Topological naming problem") (or TNP). Whenever a model is modified, the internal names of faces and edges are changed by the kernel causing undesirable behavior for any model features that reference them. The current development cycle is focused around implementing a naming algorithm designed to mitigate this effect under most circumstances. However, be aware that TNP mitigation is not a replacement for [good modeling practice and techniques](/Feature_editing "Feature editing").

## OpenCascade kernel

OpenCascade (OCC) is an external CAD kernel that FreeCAD is utterly dependent on. There are many open 'upstream' bugs that the FreeCAD community has identified and tracks regarding OCC. See:

* [Bugtracker](https://github.com/FreeCAD/FreeCAD/issues?q=is%3Aopen+is%3Aissue+label%3A%223rd+Party%3A+OCC%22)
* [OCC Bugs in the Bugtracker (forum thread)](https://forum.freecad.org/viewtopic.php?t=20264)

## Additional links

* [Discussion: FreeCAD is not ready for 1.0 (forum thread)](https://forum.freecadweb.org/viewtopic.php?f=8&t=43461)
* [Why the GIMP Team Obviously\* Hates You (\*We Actually Love You. \*\*Mostly)](https://www.youtube.com/watch?v=JBmdbipkbrk) Pat David from GIMP team presentation at SCaLE16x California 2016
* [Earning Your Support Instead of Buying it: A How-to Guide to Open Source Assistance](https://vimeo.com/144089061) by [Ian Turton](https://twitter.com/ijturton) at FOSS4G Seoul 2015

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_Managing_Expectations/en&oldid=1456955>"