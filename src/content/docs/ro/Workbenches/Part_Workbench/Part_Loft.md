---
title: Part Instrumentul Loft
---
|  |
| --- |
| Part Loft |
| poziția meniului |
| Part → Loft... |
| Ateliere |
| [Part](/Part_Workbench/ro "Part Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Part Sweep](/Part_Sweep/ro "Part Sweep/ro") |
|  |

## Description

The ![](/images/Part_Loft.svg) [Part Loft](/Part_Loft "Part Loft") command creates a face, a shell, or a solid shape from two or more profiles (cross-sections).

![](/images/Part_Loft_solid_ruled_from3profiles_example_FreeCAD_0_13.jpg)

Loft from three profiles which are two [Part Circles](/Part_Circle "Part Circle") and one [Part Ellipse](/Part_Ellipse "Part Ellipse"). Parameters are Solid "True" and Ruled "True".

## Usage

1. There are several ways to invoke the command:
   * Press the ![](/images/Part_Loft.svg) [Loft...](/Part_Loft "Part Loft") button.
   * Select the **Part → ![](/images/Part_Loft.svg) Loft...** option from the menu.
2. The Loft [task panel](/Task_panel "Task panel") opens.
3. In the *Available Profiles* list on the left select the first profile and click on the right arrow to place it in the *Selected profiles* list on the right.
4. Repeat for the second profile and again if more than two profiles are desired.
5. Optionally use the up and down arrows to reorder the selected profiles.
6. Define options [Create solid](#Data), [Ruled surface](#Data), and [Closed](#Data).
7. Click OK.

### Accepted geometry

## Prezentare generală

Instrumentul Loft din Atelierul (Part Workbench) este utilizat pentru a crea o fațetă, o cochilie sau o formă solidă (corp) plecând de la două sau mai multe profiluri. Profilele pot fi un punct (vertex), o linie (margine), o polilinie sau o fațetă. Muchiile și poliliniile pot fi deschise sau închise. Există mai multe limitări și complicații [limitations and complications](/Part_Loft#limitations_and_complications "Part Loft") , vezi mai jos, însă profilurile pot proveni de la primitivele geometrice din Atelierul Part/Piese, de la funcționalitățile Aelierului Draft Workbench și de la Atelierul Sketch.

* [App Link](/App_Link "App Link") objects linked to the appropriate object types and [App Part](/App_Part "App Part") containers with the appropriate visible objects inside can also be used as profiles. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## Options

#### Create solid

Dacă "Solid" are valoarea "true" FreeCAD creează un solid dacă profilele sunt forme geometrice închise, dacă valorea este "false" FreeCAD creează o fațetă sau (dacă are mi mult de o fațetă) o cochilie dacă este un profil închis sau deschis.

#### Ruled surface

Dacă este true" , "Ruled" FreeCAD creează o fațetă, fațetele sau solidele din suprafețele riglate. [Ruled surface page on Wikipedia.](http://en.wikipedia.org/wiki/Ruled_surface)

#### Closed

FreeCAD încearcă să atașeze ultimul profil la primul profil pentru a crea o figură închisă.

Pentru mai multe informații supra modului cum profilele sunt legate împreună , referiți-vă la pagina [Part Loft Technical Details](/Part_Loft_Technical_Details "Part Loft Technical Details") .

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Part Loft object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Loft

* Date**Sections** (`LinkList`): Lists the sections used.
* Date**Solid** (`Bool`): False (default). True creates a solid.
* Date**Ruled** (`Bool`): False (default). True creates a ruled surface.
* Date**Closed** (`Bool`): False (default). True creates a closed loft by connecting last to first profile.
* Date**Max Degree** (`IntegerConstraint`): Maximum degree.

## Limitations

A Part Loft has the same limitations as a [Part Sweep](/Part_Sweep#Limitations "Part Sweep").

### Closed Lofts

* Closed Lofts
  + Rezultatele loft-urilor închise pot fi neașteptate - mansarda/loft ul poate dezvolta răsuciri sau deformări. Lofting-ul este foarte sensibil la Plasamentul profilurilor și la complexitatea curbelor necesare pentru conectarea Vârfurilor corespunzătoare în toate profilurile.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Loft/ro&oldid=1438627>"