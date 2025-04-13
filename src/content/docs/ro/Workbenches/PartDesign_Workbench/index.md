---
title: PartDesign Workbench/Atelierul de PartDesign
---

![](/images/Workbench_PartDesign.svg)

PartDesign workbench icon

## Introduction

## Introducere

"Atelierul Part Design" oferă instrumente avansate pentru modelarea componentelor solide complexe și se bazează pe o metodă de [feature-editing methodology](#Feature_Editing_Methodology). Se concentrează în cea mai mare parte pe, dar nu se limitează la, crearea de piese mecanice. Este strâns legată de [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").

În timp ce [Part Workbench](/Part_Workbench "Part Workbench") se bazează pe o metodologie [constructive solid geometry](https://en.wikipedia.org/wiki/Constructive_solid_geometry) (CSG) pentru forme de construcție, Atelierul de lucru PartDesign utilizează o editare parametrică, ceea ce înseamnă că un solid de bază este transformat secvențial prin adăugarea de caracteristici deasupra până la obținerea formei finale. Consultați pagina [feature editing](/Feature_editing "Feature editing") pentru o explicație mai completă a acestui proces și apoi a se vedea [Creating a simple part with PartDesign](/Creating_a_simple_part_with_PartDesign "Creating a simple part with PartDesign") pentru a începe să creați solide.

See the [feature editing](/Feature_editing "Feature editing") page for a more complete explanation of this process, and then see [Creating a simple component with PartDesign](/Creating_a_simple_part_with_PartDesign "Creating a simple part with PartDesign") to get started with creating solids.

The ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench") provides an alternative [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") (CSG) methodology for building shapes. For a detailed discussion of the Part Workbench versus the Part Design Workbench see [Part and Part Design](/Part_and_PartDesign "Part and PartDesign").

![](/images/PartDesign_Workbench_Example.jpg)

## Instrumente

Instrumentele de proiectare a componentelor sunt amplasate în meniul **Design Part** și în bara de instrumente PartDesign care apare atunci când încărcați atelierul Part Design.

### Instrumente Help pentru Part Design

- ![](/images/PartDesign_Body.png) [Create body](/PartDesign_Body/ro "PartDesign Body/ro"): Creează un corp în documentul activ și îl activează.

- ![](/images/PartDesign_NewSketch.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create Sketch:

- ![](/images/PartDesign_NewSketch.png) [Creare schiță](/PartDesign_NewSketch "PartDesign NewSketch"): creează o schiță nouă pe o față sau pe un plane selectat. Dacă nu este selectată nicio față în timp ce această unealtă este executată, utilizatorul este chemat să selecteze un plan din panoul Activități. Interfața trece apoi în modul [Sketcher_Workbench](/Sketcher_Workbench "Sketcher Workbench") în modul de editare a schițelor.

- ![](/images/Sketcher_MapSketch.png) [Mapează o schiță pe o fațetă](/Sketcher_MapSketch "Sketcher MapSketch") : Mapează o schiță pe un plan selectat anterior sau o fațetă a corpului activ.

- ![](/images/Sketcher_EditSketch.png) [Edit sketch](/Sketcher_EditSketch "Sketcher EditSketch"): Editează Sketch selectat.

- ![](/images/Sketcher_ValidateSketch.svg) [Validate sketch](/Sketcher_ValidateSketch "Sketcher ValidateSketch"): verifies the tolerance of different points and adjusts them.

- ![](/images/Part_CheckGeometry.svg) [Check geometry](/Part_CheckGeometry "Part CheckGeometry"): Checks the geometry of selected objects for errors.

- ![](/images/PartDesign_ShapeBinder.svg) [Create a shape binder](/PartDesign_ShapeBinder "PartDesign ShapeBinder"): creates a shape binder referencing geometry from a single parent object.

- ![](/images/PartDesign_SubShapeBinder.svg) [Create a sub-object(s) shape binder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder"): creates a shape binder referencing geometry from one or more parent objects.

- ![](/images/PartDesign_Clone.png) [Create a clone](/PartDesign_Clone "PartDesign Clone"): creează o clonă a corpului selectat.

- ![](/images/PartDesign_Plane.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create a datum (1.0 and below):

- ![](/images/PartDesign_Plane.png) [Create a datum plane](/PartDesign_Plane "PartDesign Plane"): creează un plan de referință în corpul activ.

- ![](/images/PartDesign_Line.png) [Create a datum line](/PartDesign_Line "PartDesign Line"): creează o linie de referință în corpul activ.

- ![](/images/PartDesign_Point.png) [Create a datum point](/PartDesign_Point "PartDesign Point"): creează un punct de referință în corpul activ.

- ![](/images/PartDesign_CoordinateSystem.png) [Create a local coordinate system](/PartDesign_CoordinateSystem "PartDesign CoordinateSystem"): creează un sistem de coordonate local atașat la referința geometrică în corpul activ.

: [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): these tools have been replaced by new [datum tools](/Std_Base#Part_Datums "Std Base").

### Part Design Modeling tools

#### Instrumente Aditive

Acestea sunt instrumente pentru crearea de caracteristici de bază sau adăugarea de materiale unui corp solid existent.

- ![](/images/PartDesign_Pad.png) [Pad](/PartDesign_Pad "PartDesign Pad"): extrudează un solid dintr-o schiță selectată.

- ![](/images/PartDesign_Revolution.png) [Revolution](/PartDesign_Revolution "PartDesign Revolution"): creează un solid prin rotirea unei schițe în jurul unei axe. Schița trebuie să formeze un profil închis.

- ![](/images/PartDesign_AdditiveLoft.png) [Additive loft](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft"): creează un solid prin efectuarea unei tranziții între două sau mai multe schițe.

- ![](/images/PartDesign_AdditivePipe.png) [Additive pipe](/PartDesign_AdditivePipe "PartDesign AdditivePipe"):creează un solid baleind una sau mai multe schițe de-a lungul unei traiectorii deschise sau închise.

- ![](/images/PartDesign_AdditiveHelix.svg) [Additive helix](/PartDesign_AdditiveHelix "PartDesign AdditiveHelix"): creates a solid by sweeping a sketch along a helix.

- ![](/images/PartDesign_AdditiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create an additive primitive:

: \- ![](/images/PartDesign_AdditiveBox.png) [Additive box](/PartDesign_AdditiveBox "PartDesign AdditiveBox"): creează un paralelipiped aditiv.

: \- ![](/images/PartDesign_AdditiveCylinder.png) [Additive cylinder](/PartDesign_AdditiveCylinder "PartDesign AdditiveCylinder"): creează un cilindru aditiv.

: \- ![](/images/PartDesign_AdditiveSphere.png) [Additive sphere](/PartDesign_AdditiveSphere "PartDesign AdditiveSphere"): creează o sferă aditivă.

: \- ![](/images/PartDesign_AdditiveCone.png) [Additive cone](/PartDesign_AdditiveCone "PartDesign AdditiveCone"): creează un con aditiv.

: \- ![](/images/PartDesign_AdditiveEllipsoid.png) [Additive ellipsoid](/PartDesign_AdditiveEllipsoid "PartDesign AdditiveEllipsoid"): creează un elipsoid aditiv.

: \- ![](/images/PartDesign_AdditiveTorus.png) [Additive torus](/PartDesign_AdditiveTorus "PartDesign AdditiveTorus"): creează un tor aditiv.

: \- ![](/images/PartDesign_AdditivePrism.png) [Additive prism](/PartDesign_AdditivePrism "PartDesign AdditivePrism"): creează o prismă aditivă.

: \- ![](/images/PartDesign_AdditiveWedge.png) [Additive wedge](/PartDesign_AdditiveWedge "PartDesign AdditiveWedge"): creează o pană aditivă.

#### Instrumente substractive

Acestea sunt instrumente pentru îndepărtarea materialului dintr-un corp existent.

- ![](/images/PartDesign_Pocket.png) [Pocket](/PartDesign_Pocket "PartDesign Pocket"): creează o gaură dreptunghiulară/un buzunar din schița selectată.

- ![](/images/PartDesign_Hole.png) [Hole](/PartDesign_Hole "PartDesign Hole"): creează o funcționalitate tip gaură din schița selectată. Schița trebuie să conțină unul sau mai multe cercuri.

- ![](/images/PartDesign_Groove.png) [Groove](/PartDesign_Groove "PartDesign Groove"): creează o canelură prin rotirea schiței în jurul unei axe.

- ![](/images/PartDesign_SubtractiveLoft.png) [Subtractive loft](/PartDesign_SubtractiveLoft "PartDesign SubtractiveLoft"):

creează o formă solidă făcând o tranziție/extrudere între două sau mai multe schițe și o scade din corpul activ.

- ![](/images/PartDesign_SubtractivePipe.png) [Subtractive pipe](/PartDesign_SubtractivePipe "PartDesign SubtractivePipe"): creează o formă solidă prin baleierea uneia sau a mai multor schițe de-a lungul unei traiectorii deschise sau închise și o scade din corpul activ.

- ![](/images/PartDesign_SubtractiveHelix.svg) [Subtractive helix](/PartDesign_SubtractiveHelix "PartDesign SubtractiveHelix"): creates a solid shape by sweeping a sketch along a helix and subtracts it from the active body.

- ![](/images/PartDesign_SubtractiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create a subtractive primitive:

: \- ![](/images/PartDesign_SubtractiveBox.png) [Subtractive box](/PartDesign_SubtractiveBox "PartDesign SubtractiveBox"): adaugă un paralelipiped substractiv la corpul activ.

: \- ![](/images/PartDesign_SubtractiveCylinder.png) [Subtractive cylinder](/PartDesign_SubtractiveCylinder "PartDesign SubtractiveCylinder"): adaugă un cilindru substractiv la corpul activ.

: \- ![](/images/PartDesign_SubtractiveSphere.png) [Subtractive sphere](/PartDesign_SubtractiveSphere "PartDesign SubtractiveSphere"): adaugă o sferă substractivă la corpul activ.

: \- ![](/images/PartDesign_SubtractiveCone.png) [Subtractive cone](/PartDesign_SubtractiveCone "PartDesign SubtractiveCone"): adaugă un con subtractiv la corpul activ.

: \- ![](/images/PartDesign_SubtractiveEllipsoid.png) [Subtractive ellipsoid](/PartDesign_SubtractiveEllipsoid "PartDesign SubtractiveEllipsoid"): adaugă un elipsoid substractiv la corpul activ.

: \- ![](/images/PartDesign_SubtractiveTorus.png) [Subtractive torus](/PartDesign_SubtractiveTorus "PartDesign SubtractiveTorus"): adaugă un tor substractiv la corpul activ.

: \- ![](/images/PartDesign_SubtractivePrism.png) [Subtractive prism](/PartDesign_SubtractivePrism "PartDesign SubtractivePrism"): adaugă o prismă substractivă la corpul activ.

: \- ![](/images/PartDesign_SubtractiveWedge.png) ‎[Subtractive wedge](/PartDesign_SubtractiveWedge "PartDesign SubtractiveWedge"): adaugă o pană substractivă la corpul activ.

#### Boolean

- ![](/images/PartDesign_Boolean.png) [Boolean operation](/PartDesign_Boolean "PartDesign Boolean"): importă unul sau mai multe Corpuri sau Clone PartDesign în corpul activ și le aplică o operație booleană.

#### Instrumente pentru traiectorie suplimentară

Aceste instrumente se aplică tratării marginilor sau fațetelor selectate.

- ![](/images/PartDesign_Fillet.png) [Fillet](/PartDesign_Fillet "PartDesign Fillet"): rotunjirea marginilor/colțurilor corpului activ

- ![](/images/PartDesign_Chamfer.png) [Chamfer](/PartDesign_Chamfer "PartDesign Chamfer"): șanfrenarea marginilor corpului activ.

- ![](/images/PartDesign_Draft.png) [Draft](/PartDesign_Draft "PartDesign Draft"): se aplică conicitate la fațetele corpului activ.

- ![](/images/PartDesign_Thickness.png) [Thickness](/PartDesign_Thickness "PartDesign Thickness"):

creează o cochilie/coajă groasă din corpul activ și deschide fațeta(ele) selectate.

#### instrumente de Transformare

Acestea sunt instrumente pentru transformarea caracteristicilor existente. Acestea vă vor permite să alegeți caracteristicile care trebuie transformate.

- ![](/images/PartDesign_Mirrored.png) [Mirrored](/PartDesign_Mirrored "PartDesign Mirrored"): simetrizați una sau mai multe caracteristici față de un plan sau o fațetă.

- ![](/images/PartDesign_LinearPattern.png) [Linear Pattern](/PartDesign_LinearPattern "PartDesign LinearPattern"): creează un model liniar bazat pe una sau mai multe caracteristici.

- ![](/images/PartDesign_PolarPattern.png) [Polar Pattern](/PartDesign_PolarPattern "PartDesign PolarPattern"): creează un model circular/polar bazat pe una sau mai multe caracteristici.

- ![](/images/PartDesign_MultiTransform.png) [Create MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform"): creează un model bazat pe orice combinație a altor transformări.

#### Suplimentar

Unele funcționalități suplimentare găsite în meniul PartDesign:

- ![](/images/PartDesign_Sprocket.svg) [Sprocket](/PartDesign_Sprocket "PartDesign Sprocket"): creates a sprocket profile that can be padded.

- ![](/images/PartDesign_InternalExternalGear.png) [Involute gear](/PartDesign_InvoluteGear "PartDesign InvoluteGear"):creează un profil de angrenaj cu profil în evolventă care poate fi utilizat de un PAD.

- ![](/images/PartDesign_WizardShaft.png) [Shaft design wizard](/PartDesign_WizardShaft "PartDesign WizardShaft"): Generă un arbore dintr-o tabelă de valori și permite analizarea forțelor și momentelor. Arborele este realizat cu o schiță de revoluție care poate fi editată.

### Meniu Contextual de Instrumente

- [Suppressed](/index.php?title=PartDesign_Suppressed&action=edit&redlink=1 "PartDesign Suppressed (page does not exist)"): checkbox to disable a specific feature without deleting it. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/PartDesign_MoveTip.svg) [Set tip](/PartDesign_MoveTip "PartDesign MoveTip"): redefines the tip, which is the feature exposed outside of the Body.

- ![](/images/PartDesign_MoveFeature.svg) [Move object to other body](/PartDesign_MoveFeature "PartDesign MoveFeature"): moves the selected sketch, datum geometry or feature to another Body.

- ![](/images/PartDesign_MoveFeatureInTree.svg) [Move object after other object](/PartDesign_MoveFeatureInTree "PartDesign MoveFeatureInTree"): allows reordering of the Body tree by moving the selected sketch, datum geometry or feature to another position in the list of features.

- ![](/images/PartDesign_MoveTip.png) [Set tip](/PartDesign_MoveTip "PartDesign MoveTip"): redefinește vârful, care este caracteristica expusă în afara corpului.

- ![](/images/Std_SetAppearance.svg) [Appearance](/Std_SetAppearance "Std SetAppearance"): determines appearance of the whole part (color transparency etc.).

- ![](/images/Part_ColorPerFace.svg) [Color per face](/Part_ColorPerFace "Part ColorPerFace"): Assigns colors to individual faces of objects.

### Obsolete tools

- ![](/images/PartDesign_Migrate.svg) [Migrate](/PartDesign_Migrate "PartDesign Migrate"): migrates files from FreeCAD versions below 0.17 to version 0.17. This tool is not available in 1.0 and above.

### Preferințe

- ![](/images/Std_DlgParameter.png) [Preferences...](/PartDesign_Preferences "PartDesign Preferences"): Preferințele sunt disponibile în Instrumente partDesign.

## Tutoriale

- [How to use FreeCAD](http://help-freecad-jpg87.fr/), a website describing the workflow for mechanical design.
- [Creating a simple part with PartDesign v0.17](/Creating_a_simple_part_with_PartDesign "Creating a simple part with PartDesign")
- [Tutorial de proiectare a pieselor de baza 017](/Basic_Part_Design_Tutorial_017 "Basic Part Design Tutorial 017")
- [Tutorial PartDesign de Rulmenți I](/PartDesign_Bearingholder_Tutorial_I "PartDesign Bearingholder Tutorial I") (are nevoie de actualizare)
- [Tutorial PartDesign de Rulmenți II](/PartDesign_Bearingholder_Tutorial_II "PartDesign Bearingholder Tutorial II") (are nevoie de actualizare)

## Examples

For some ideas of what can be achieved with Part Design tools, have a look at: [PartDesign examples](/PartDesign_Examples "PartDesign Examples").

![](/images/PartDesign_ExampleSphere-02.png)
![](/images/PartDesign_ExampleTorus-01.png)
![](/images/PartDesign_ExamplePad-09.png)
![](/images/PartDesign_ExampleSweep-02.png)
![](/images/PartDesign_ExampleSweep-05.png)
![](/images/PartDesign_ExampleSpring-04.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Workbench/ro&oldid=1529332>"
