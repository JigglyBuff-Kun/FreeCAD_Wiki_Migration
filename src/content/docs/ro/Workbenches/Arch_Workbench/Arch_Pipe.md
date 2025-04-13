---
title: Arch Pipe/Țeavă
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Arch: Pipe/Țeavă                                                                                                                                                                           |
| poziția meniului                                                                                                                                                                           |
| Arch → Pipe Tools → Pipe                                                                                                                                                                   |
| Ateliere                                                                                                                                                                                   |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                                                                                                                             |
| scurtătură                                                                                                                                                                                 |
| P I                                                                                                                                                                                        |
| Prezentat în versiune                                                                                                                                                                      |
| 0.17                                                                                                                                                                                       |
| A se vedea, de asemenea,                                                                                                                                                                   |
| [Arch PipeConnector](/Arch_PipeConnector/ro "Arch PipeConnector/ro"), [Arch Equipment](/index.php?title=Arch_Equipment/ro&action=edit&redlink=1 "Arch Equipment/ro (page does not exist)") |
|                                                                                                                                                                                            |

## Descriere

[introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")
Acest instrument permite crearea de țevi/conducte de la zero, sau din obiectele selectate. Obiectele selectate trebui esă fie bzate pe Piese/Part-based (Draft, Sketch, etc..) și să conțină doar un filament deschis.

## Cum se folosește

1. Optional, selectați o formă lineară [Part](/Part_Workbench "Part Workbench") ca de ex o [Draft Line](/Draft_Line "Draft Line"), un [Draft Wire](/Draft_Wire "Draft Wire") sau o [Sketch](/Sketcher_NewSketch "Sketcher NewSketch") deschisă
2. Apăsați butonul ![](/images/Arch_Pipe.png) [Arch Pipe](/Arch_Pipe "Arch Pipe"), sau apăsați în ordine tastele P apoi I

## Opțiuni

## Proprietăți

An Arch Pipe object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Component

- Date**Base** (`Link`): The base wire of this pipe, if any.

For the other properties in the group see [Arch Component](/Arch_Component#Properties "Arch Component").

Pipe

- Date**Length**: Setează lungimea acestei țevi,când nu se bazează pe un filament
- Date**Diameter**: Diametrul acestei țevi, când nu se bazează pe un profil
- Date**Base**: Filamentul de bază al acestei țevi, dacă există unul
- Date**Profile**: Profilul de bază a acestei țevi. Dacă nu este specificat, țeava este cilindrică.

## Fluxul de lucru tipic

- Începeți prin a plasa obiecte sanitare / hidraulice (mai jos este un fișier importat pas). Transformați aceste obiecte în Echipamente Arch, selectând-le și apăsând butonul [Arbor Equipment](/Arch_Equipment "Arch Equipment").

![](/images/Arch_pipe_example_01.jpg)

- Echipamentele Arch au acum o proprietate nouă **SnapPoints**, care este o listă de vectori 3D. Acest lucru vă permite să adăugați puncte de fixare personalizate, pe care le puteți activa când noul buton [Draft Special](/Draft_Snap_Special "Draft Snap Special") este activat. În prezent, această proprietate este disponibilă numai pentru Python. În cazul de mai sus am adăugat un nou punct de fixare la ieșirea aparatului de spălare. Vectorii din SnapPoints apar pe model ca puncte albe:

```
FreeCAD.ActiveDocument.Equipment.SnapPoints=[FreeCAD.Vector(0,0,100)]

```

![](/images/Arch_pipe_example_02.jpg)

- Cu noul Snap Snap Special Snap Special, puteți acum să accesați aceste puncte personalizate:

![](/images/Arch_pipe_example_03.jpg)

- Acum, putem trage tuburile noastre folosind Linii de Proiectare, Proiectoare sau Schițe. Cea mai bună metodă, totuși, este utilizarea numai a liniilor de proiectare:

![](/images/Arch_pipe_example_04.jpg)

- Acum există un nou instrument [Proiect Slope](/Draft_Slope/ro "Draft Slope/ro") care permite modificarea pantei liniilor de proiectare, spre exemplu, 5% (0,05). Așadar, putem da rapid liniei noastre de deșeuri o pantă corectă. Numai coordonatele z sunt modificate de acest instrument, așa că trebuie doar să le înșurubăm unul în celălalt, proiecția de sus va rămâne neschimbată.

![](/images/Arch_pipe_example_05.jpg)

- Trebuie doar să selectăm toate liniile noastre și să apăsăm butonul [Pipe Arch](/Arch_Pipe "Arch Pipe"). Arch Pipe funcționează cu orice obiect bazat pe componente care conține un singur fir deschis.

![](/images/Arch_pipe_example_06.jpg)

- Acum putem crea conexiuni selectând 2 sau 3 tuburi coincidente și apăsați butonul [Arch PipeConnector](/Arch_PipeConnector "Arch PipeConnector"). Dacă sunt selectate 3 țevi, două dintre ele trebuie să fie aliniate pentru a crea un element (T):

![](/images/Arch_pipe_example_07.jpg)

- Schimbarea razei conectorilor nu modifică lungimea liniei de bază subiacente, numai tubul rezultat (prin schimbarea proprietății OffsetStart sau OffsetEnd). Deci, puteți să vă traseți linia doar cu linii drepte, fără a fi nevoie să vă îngrijiți de curbele și razele lor.

Este de asemenea posibil să se creeze Arch Pipes fără o linie de bază, în acest caz utilizați proprietatea "Length" pentru a defini lungimea sa.

## Scripting

## Scrip-Programare

Instrumentul Pipe poate fi utilizat în [macros](/Macros "Macros") și de la consola python utilizând următoarele funcții:

```
pipe = makePipe(baseobj=None, diameter=0, length=0, placement=None, name="Pipe")

```

- Creates a `pipe` object from the given `baseobj` and `diameter`.
  - `baseobj` is a [Draft Line](/Draft_Line "Draft Line") or [Draft Wire](/Draft_Wire "Draft Wire").
  - If `baseobj` is omitted, a straight pipe can be created with just the `diameter` and the `length` in the Z direction.
- If a `placement` is given, it is used.

```
import Draft, Arch

p1 = FreeCAD.Vector(1000, 0, 0)
p2 = FreeCAD.Vector(2500, 200, 0)
p3 = FreeCAD.Vector(3100, 1000, 0)
p4 = FreeCAD.Vector(3500, 500, 0)
line = Draft.make_wire([p1, p2, p3, p4])

pipe = Arch.makePipe(line, 200)
FreeCAD.ActiveDocument.recompute()

pipe2 = Arch.makePipe(diameter=120, length=3000)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Pipe/ro&oldid=1539709>"
