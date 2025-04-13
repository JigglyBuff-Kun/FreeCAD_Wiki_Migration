---
title: PartDesign Additive Pipe
---
|  |
| --- |
| PartDesign AdditivePipe |
| poziția meniului |
| PartDesign → Additive pipe |
| Ateliere |
| [PartDesign](/PartDesign_Workbench/ro "PartDesign Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| 0.17 |
| A se vedea, de asemenea, |
| [PartDesign Additive Loft](/PartDesign_AdditiveLoft/ro "PartDesign AdditiveLoft/ro") |
|  |

## Descriere

**Additive Pipe** creează un solid în corpul activ, prin baleierea uneia sau a mai multor schițe (denumite și secțiuni transversale) de-a lungul unei căi deschise sau închise. Dacă corpul conține deja funcții(onalități), conductele aditive vor fi îmbinate cu ele.

![](/images/PartDesign_AdditivePipe_example.svg)

*On the left: cross-sections (A) and (B) to be swept along path (C); resulting Additive pipe on the right.*

## Usage

## Cum se folosește

1. Press the ![](/images/PartDesign_AdditivePipe.png) **Additive pipe** button.
2. In the **Select feature** dialog, select a sketch to be used as first cross-section and click OK.
   * Alternatively, a single sketch can be selected prior to pressing the Additive pipe button.
3. In the **Pipe parameters** under **Profile**, press the Object button.
4. Select the sketch to be used as path in the 3D view:
   * Alternatively, edges of the body can be selected by pressing Add Edge and selecting edges in the 3D view.
5. To use more than one cross-section, under **Section transformation** set the Transform mode to *Multisection*; press Add Section then select a sketch in the 3D view. Repeat for each additional cross-section.
6. Set options if needed and click OK.

To use more than one cross-section, start with the first cross-section sketch as described above. Then under **Section transformation** set the Transform mode to *Multisection*; press Add Section then select a sketch in the [3D view](/3D_view "3D view"). Repeat for each additional cross-section.

## Options

## Opţiuni

## Proprietăți

See also: [Property editor](/Property_editor "Property editor").

A PartDesign AdditivePipe object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Date (Hidden)**Add Sub Shape** (`PartShape`):
* Date (Hidden)**Base Feature** (`Link`):
* Date (Hidden)**\_Body** (`LinkHidden`):

Part Design

* Date**Refine**: true or false. If set to true, cleans the solid from residual edges left by features. See [Part RefineShape](/Part_RefineShape "Part RefineShape") for more details.

Sketch Based

* Date**Profile** (`LinkSub`): reference to sketch.
* Date**Midplane** (`Bool`): extrude symmetrically to sketch face.
* Date**Reversed** (`Bool`): reverses extrusion direction.
* Date**Up To Face** (`LinkSub`): face where feature will end.
* Date**Allow Multi Face** (`Bool`): allow multiple faces in profile.

Sweep

* Date**Sections** (`LinkSubList`): lists the sections used.
* Date**Spine** (`LinkSub`): spine (path) to sweep along.
* Date**Spine Tangent** (`Bool`): true or false (default). True extends the spine to include tangent edges.
* Date (Hidden)**Auxiliary Spine** (`LinkSub`): secondary spine (path) to orient the Sweep.
* Date**Auxiliary Spine Tangent** (`Bool`): true or false (default). True extends the auxiliary spine to include tangent edges.
* Date**Auxiliary Curvelinear** (`Bool`): true or false (default). True calculates the normal between equidistant points on both spines.
* Date**Mode** (`Enumeration`): profile mode. Options are *Fixed*, *Frenet*, *Auxiliary* or *Binormal*. See [Options](#Options).
* Date**Binormal** (`Vector`): binormal vector for corresponding orientation mode.
* Date**Transition** (`Enumeration`): transition mode. Options are *Transformed*, *Right Corner* or *Round Corner*.
* Date**Transformation** (`Enumeration`): *Constant* uses a single cross-section. *Multisection* uses two or more cross-sections. *Linear*, *S-shape* and *Interpolation* are currently not functional.

## Notes

* Schițele utilizate pentru secțiunile transversale trebuie să formeze profile închise.
* Nu este posibil să se utilizeze un vertex ca secțiune transversală.
* O secțiune transversală nu poate fi așezată pe același plan ca cea precedentă.
* Pentru a controla mai bine forma conductei/țevii, se recomandă ca toate secțiunile transversale să aibă același număr de segmente. De exemplu, pentru o țeavă între un dreptunghi și un cerc, cercul poate fi împărțit în 4 arce conectate.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditivePipe/ro&oldid=1305535>"