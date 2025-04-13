---
title: Part Attachment
---
|  |
| --- |
| Part Attachment |
| poziția meniului |
| Part → Attachment... |
| Ateliere |
| [Part](/Part_Workbench "Part Workbench"), [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| 0.17 |
| A se vedea, de asemenea, |
| [Placement](/Placement "Placement") |
|  |

## Descriere

**Attachment** este un utilitar pentru asocierea unui obiect cu altul. Obiectul asociat este legat de celălalt obiect, ceea ce înseamnă că dacă poziționarea acestuia este modificată ulterior, obiectul asociat se actualizează în noua sa poziție.

## Attacher engines

The attachment of an object is controlled by one of four attacher engines. The default engine that is used for an object depends on its type. An object's attacher engine can be changed via its Date**Attacher Engine** property ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) or its [hidden](/Property_editor#Context_menu "Property editor") Date**Attacher Type** property.

The available engines are listed in the table below. Attacher engines control the Date**Placement** of objects. All engines can be used for all objects that have this property. But the results of the last three make the most sense if the shape of the object matches the mentioned 'Logical Shape'.

| Attacher Engine | Attacher Type | Logical Shape |
| --- | --- | --- |
| [Engine 3D](#Engine_3D) | Attacher::AttachEngine3D |  |
| [Engine Plane](#Engine_Plane) | Attacher::AttachEnginePlane | Planar face coincident with the XY plane of the Placement |
| [Engine Line](#Engine_Line) | Attacher::AttachEngineLine | Straight edge collinear with the Z axis of the Placement |
| [Engine Point](#Engine_Point) | Attacher::AttachEnginePoint | Vertex coincident with the origin of the Placement |

The rest of this page focuses on the Engine 3D. The modes of the other engines are only listed. Note that the modes of Engine Plane are in fact identical to those of Engine 3D.

## Cum se foloseste

1. Selectați obiectul de atașat.
2. Mergeți la meniul **Part → Attachment...**.

   :   **Notă**: Atunci când se lucrează în [PartDesign](/PartDesign_Workbench "PartDesign Workbench") pentru a crea schițe, geometrie de referință sau primitive, etapele 1 și 2 nu sunt necesare: caseta de dialog Atașamentul este activat automat.
3. Mai jos, în parametrii **Attachment**, *Not attached* poate fi citit. Primul buton de jos este etichetat Selecting… pentru a indica că se așteaptă o selecție în vizualizarea 3D .
4. Selectați un element topologic pe obiectul care urmează să fie asociat: un vârf, o margine, o fațetă sau un plan. De asemenea, pot fi selectate geometrii de referință ale unei piese [Part containers](/Std_Part "Std Part") .
5. Eticheta primului buton adoptă acum tipul de topologie selectat. În câmpul alb spre dreapta, se adaugă obiectul de referință și elementul său de referință. De exemplu, dacă o fațetă este selectată pe o primitivă tip cub, câmpul arată Box:Face6.
6. Selectați un [Attachment mode](#Attachment_mode) din listă. Modurile disponibile sunt filtrate prin referințele selectate. Sub titlul *Attached with mode <mode description>* este afișat sub antetul/headerul **Attachment**.

   :   Pentru informații în timp real despre modul de asociere, plasați cursorul mouse-ului peste unul dintre modurile în listă pentru a afișa un indiciu.
7. Opțional, adăugați până la 3 referințe apăsând butoanele Reference2, Reference3, și Reference4 și repetând pasul 4.
8. Optional deefiniți un [Attachment Offset](#Attachment_Offset).
9. Apăsați OK.

## Attachment modes

### Engine 3D

![](/images/Part_Offset_Tasks.png)

#### Dezactivat

Attachment is disabled. The object can be moved by editing its [Placement](/Placement "Placement") property.

#### Translatarea originii

Object's origin is aligned to matched vertex. Orientation is controlled by [Placement](/Placement "Placement") property.

:   Reference combinations
:   Vertex.

#### Object's XY

Plane is aligned to XY local plane of linked object .

:   Reference combinations
:   Any, Conic.

#### Object's XZ

Plane is aligned to XZ local plane of linked object .

:   Reference combinations
:   Any, Conic.

#### Object's YZ

Plane is aligned to YZ local plane of linked object .

:   Reference combinations
:   Any, Conic

#### Plane face

Plane is aligned to coincide to planar face .

:   Reference combinations
:   Plane

#### Tangent to surface

Plane is made tangent to surface at vertex .

:   Reference combinations
:   Face, Vertex
:   Vertex, Face

#### Muchie Normal

Object is made perpendicular to edge. Optional vertex reference defines location .

If no vertex is linked the Date**Map Path Parameter** property determines the point.

:   Reference combinations
:   Edge
:   Edge, Vertex
:   Vertex, Edge

#### Frenet NB

![](/images/Attacher_mode_FrenetNB.png)

Plane is set to normal-binormal (NB) axes of [Frenet-Serret coordinates](https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas)  at the point of the edge's curve that is closest to the vertex (or defined by MapPathParameter property, if vertex is not linked). The object's origin is translated to the vertex if the vertex is first, or kept at the curve if edge is first. This mode is similar to *Normal to edge*, except that X axis is well-defined.

If no vertex is linked the Date**Map Path Parameter** property determines the point. The object's origin is translated to the vertex if the vertex is first, or kept at the curve if the curve is first.

*Frenet NBT* is similar to *Z tangent to edge*, except that the X axis is well-defined.

:   Reference combinations
:   Curve
:   Curve, Vertex
:   Vertex, Curve
:   ![](/images/Attacher_mode_FrenetNB.png)

#### Frenet TN

![](/images/Attacher_mode_FrenetTN.png)

Plane is set to tangent-normal (TN) axes of [Frenet-Serret coordinates](https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas)  at the point of the edge's curve that is closest to the vertex (or defined by MapPathParameter property, if vertex is not linked). The origin of sketch is translated to the vertex if the vertex is first, or kept at the curve if edge is first. Effectively, if the curve is planar, the sketching plane is the plane of the curve.

See [Frenet NBT](#Frenet_NBT).

#### Frenet TB

![](/images/Attacher_mode_FrenetTB.png)

Plane is set tangent-binormal (TB) axes of [Frenet-Serret coordinates](https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas) at the point of the edge's curve that is closest to the vertex (or defined by MapPathParameter property, if vertex is not linked). The origin of sketch is translated to the vertex if the vertex is first, or kept at the curve if edge is first.

See [Frenet NBT](#Frenet_NBT).

#### Concentric

Aligns to plane to osculating circle of an edge. Optional Vertex link defines where .

If no vertex is linked the Date**Map Path Parameter** property determines the point.

:   Reference combinations
:   Curve
:   Circle
:   Curve, Vertex
:   Circle, Vertex
:   Vertex, Curve
:   Vertex, Circle

#### Revolution Section

Plane is perpendicular to edge, and Y axis is matched with axis of osculating circle. Optional Vertex link defines where .

See [Concentric](#Concentric).

#### Plane by 3 points

Aligns XY plane to pass through three vertices .

:   Reference combinations
:   Vertex, Vertex, Vertex
:   Line, Vertex
:   Vertex, Line
:   Line, Line

#### Normal to 3 points

Aligns plane to pass through first two vertices, and perpendicular to plane that passes through 3 vertices .

See [XY plane by 3 points](#XY_plane_by_3_points).

#### Folding

![](/images/Attacher_mode_Folding.png)

Specialty mode for folding polyhedra. Select 4 edge in order: foldable edge, fold line, other fold line, other foldable edge. Plane will be aligned to folding the first edge. In the picture below, it is not required that both leafs to fold together be the same .

:   Reference combinations
:   Line, Line, Line, Line
:   ![](/images/Attacher_mode_Folding.png)

#### Inertia 2-3

Object will be attached to a plane passing through second and third principal axes of inertia (passes through center of mass) .

:   Reference combinations
:   Any
:   Any, Any
:   Any, Any, Any
:   Any, Any, Any, Any

#### Align O-N-X

Matches object's origin with first referenced vertex, then aligns its normal and horizontal plane axis toward vertex/along line .

See [Align O-X-Y Type Attachment Modes](/O-X-Y_Type_Attachment_Modes "O-X-Y Type Attachment Modes") for more details.

:   Reference combinations
:   Vertex, Vertex, Vertex
:   Vertex, Vertex, Edge
:   Vertex, Edge, Vertex
:   Vertex, Edge, Edge
:   Vertex, Vertex
:   Vertex, Edge

#### Align O-N-Y

Matches object's origin with first referenced vertex and aligns its normal and vertical plane axis toward vertex/along line .

See [Align O-Z-X](#Align_O-Z-X).

#### Align O-X-Y

Matches object's origin with first referenced vertex and aligns its horizontal and vertical plane axes toward vertex/along line .

See [Align O-Z-X](#Align_O-Z-X).

#### Align O-X-N

Matches object's origin with first referenced vertex and aligns its horizontal plane axis and normal toward vertex/along line .

See [Align O-Z-X](#Align_O-Z-X).

#### Align O-Y-N

Matches object's origin with first referenced vertex and aligns its vertical plane axis and normal toward vertex/along line .

See [Align O-Z-X](#Align_O-Z-X).

#### Align O-Y-X

Matches object's origin with first referenced vertex and aligns its vertical and horizontal plane axes toward vertex/along line .

See [Align O-Z-X](#Align_O-Z-X).

#### XY parallel to plane

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

The XY plane is aligned to be plane-parallel to the XY plane of the Placement of a linked object, and pass through a vertex. The origin is matched with the projection of the origin of the linked object onto the XY plane.

Note that you have to select a whole object and not a subelement such as a face or plane.

:   Reference combinations
:   Any whole object (with a Date**Placement** property), Vertex

### Engine Plane

* Deactivated
* Translate origin
* Object's XY
* Object's XZ
* Object's YZ
* Plane face
* Tangent to surface
* Normal to edge
* Frenet NB
* Frenet TN
* Frenet TB
* Concentric
* Revolution Section
* Plane by 3 points
* Normal to 3 points
* Folding
* Inertia 2-3
* Align O-N-X
* Align O-N-Y
* Align O-X-Y
* Align O-X-N
* Align O-Y-N
* Align O-Y-X
* XY parallel to plane [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

### Engine Line

* Deactivated
* Object's X
* Object's Y
* Object's Z
* Axis of curvature
* Directrix1
* Directrix2
* Asymptote1
* Asymptote2
* Tangent
* Normal to edge
* Binormal
* Through two points
* Intersection [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* Proximity line
* 1st principal axis
* 2nd principal axis
* 3rd principal axis
* Normal to surface

### Engine Point

* Deactivated
* Object's origin
* Focus1
* Focus2
* On edge
* Center of curvature
* Center of mass
* Vertex
* Proximity point 1
* Proximity point 2

### Attachment Offset

Attachment Offset is used to apply a linear or rotary offset from the referenced object. It becomes active when an attachment mode other than *Deactivated* has been selected .

* **X**: sets an offset distance in the X axis of the reference object .

* **Y**: sets an offset distance in the Y axis of the reference object .

* **Z**: sets an offset distance in the Z axis of the reference object .

* **Roll**: rotates the attached object along the reference object's X axis .

* **Pitch**: rotates the attached object along the reference object's Y axis .

* **Yaw**: rotates the attached object along the reference object's Z axis .

* **Flip sides**: if checked, the attached object is reversed from its XY plane .

## Limite

* Containerele [Part](/Std_Part "Std Part") și [Body](/PartDesign_Body "PartDesign Body") nu sunt suportate. În timp ce este posibil să se utilizeze Atașament pentru a le alinia, atașamentul nu va fi legat parametric.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_EditAttachment/ro&oldid=1466521>"