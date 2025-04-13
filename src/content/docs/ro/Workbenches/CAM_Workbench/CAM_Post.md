---
title: Path Post Procesare
---

|                                          |
| ---------------------------------------- |
| Path PostProcess                         |
| Menu location                            |
| Path → Post Process                      |
| Workbenches                              |
| [Path](/Path_Workbench "Path Workbench") |
| Default shortcut                         |
| P,P                                      |
| Introduced in version                    |
| -                                        |
| See also                                 |
| _None_                                   |
|                                          |

## Descriere

Această comandă exporta [Job](/Path_Job "Path Job") selectat într-un fișier cu cod G.

Fiecare controler CNC vorbește într-un dialect specific G-Cod, care necesită un Postprocesor corect pe dialect pentru a traduce ieșirea finală din dialectul agnostic intern al codului G FreeCAD.

### Typical functions of the Postprocessor include

Funcțiile tipice ale postprocesorului includ:

- Utilizarea unei extensii de fișiere G-Cod de ieșire corectă.
- Selectarea comenzilor codului G. Controlerele CNC suportă în mod obișnuit un subset de comenzi G-Code disponibile. Supersetul de comenzi pentru codul G conține comenzi puternice și specializate care altfel trebuie procesate folosind mai multe comenzi simple. Postprocesoarele sunt scrise pentru a selecta cel mai bun cod G pentru o operație disponibilă în țintă.
- Formatarea sintaxei G-Code prin reordonarea intrărilor Feed, X, Y, Z, A și B și a preciziei.
- Introducerea unui Pre-amble pentru a seta unitățile, formatul unităților, planul de lucru, sistemul de coordonate etc.
- Introducerea unui Post-amble pentru parcarea mașinii, oprirea acesteia, procesarea oricăror argumente.
- Introducerea modificărilor instrumentului sau suprimarea acestora între operațiile ulterioare utilizând același instrument.
- Formatarea informațiilor referitoare la feed și viteză la revoluțiile pe minut sau pe secundă.
- Funcție de formatare Apelați denumirea și apelarea.

### Postprocessor Customization

Câteva postprocesoare furnizate generează codul adecvat pentru mai multe controlere CNC sau pot fi utilizate ca șabloane pentru modificare

**Note:** Several provided Postprocessors generate suitable code for many CNC controllers, or can be used as templates for modification

Postprocesoarele conțin steaguri de configurare și sunt proiectate pentru a fi reglate prin adăugarea codurilor G și M-Codurilor la definițiile furnizate pentru:

- Initializarea mașinii
- Finalizarea locurilor de muncă
- Instrument Modificări
- Răcire pornită / oprită
- Etc ...

Postprocesoarele utilizează: [[Path Job Operations FreeCAD G-Code dialect](https://www.freecadweb.org/wiki/Path_scripting#FreeCAD.27s_internal_GCode_format) ], în combinație cu definițiile de configurare Postprocessor, pentru a genera G-Codul corect pentru diagramele pentru mașinile țintă. Acest lucru permite ca Atelierul Path să genereze codul G corect pentru a viza diferite controlere de mașini CNC invocând diferite postprocesoare.

CNC Machine Controller types include:

- CNC mills
- CNC lathes
- 3D Printers
- DragKnife Cutters
- Laser Cutters
- Engravers
- Plasma Torch Cutters
- Wire Benders
- EDM Cutters
- Etc...

If only one CNC machine is used, or if all CNC machines share a common Postprocesor, the Path workbench would need to include only a single Postprocessor. If a single Postprocessor is inadequate to output G-Code for all target CNC controllers, then multiple Postprocessors must be installed.

## Utilizare

1. Select the [Job](/Path_Job "Path Job") you wish to export
2. Press the ![](/images/Path_PostProcess.png) [Post Process](/Path_Post "Path Post") button
3. Confirm the **Output File** name and directory

## Opţiuni

Fișierul de ieșire și proprietățile postprocesor pot fi setate în [Job](/Path_Job "Path Job"), în orice moment, înainte de a invoca postprocesorul.

Postprocesoarele furnizate sunt scrise cu comentarii care indică zone care conțin Flaguri, Variabile de configurare și Secțiuni de G-Coduri și M-Coduri care vor fi utilizate de Postprocesor pentru a configura ieșirea.

Typical Configuration True/False Flags include:

- OUTPUT_COMMENTS (True = Allow, False = Suppress), Used to insert Text Comments in the output G-Code file.
- OUTPUT_HEADER (True = Allow, False = Suppress), Used to insert Text Headers in the output G-Code file.
- OUTPUT_LINE_NUMBERS (True = Allow, False = Suppress), Used to insert Line Numbers in the output G-Code file.
- SHOW_EDITOR (True = Allow, False = Suppress), Used to show the output G-Code in a Pop-up window when invoking the Postprocessor.
- MODAL (True = Allow, False = Suppress), Used to reduce the number of output G-Code lines by stripping Mode information when the Mode is not changing.

Typical Configuration Variables include:

- LINENR (Line Number), Used to Set the Line Number index.
- UNITS (G20 or G21), Used to explicitly communicate to the target CNC controller what Units to use to interpret the final output file.
- MACHINE_NAME (Name of Target CNC Mill), Used to Insert a machine name label in the final output file.
- PRECISION, Used to Set the number of digits to include after the decimal place in final output file

Typical Configuration Sections include:

- PREAMBLE (Code configuration inserted at beginning of the Job)
- POSTAMBLE (Code configuration appended to the Job, providing for parking the machine, etc...)
- TOOL_CHANGE (Code inserted with each tool change in the Job)

The Edit->Preferences...->Path->Job Preferences tab, Defaults->Path is used to set the default Postprocessor selected on Job creation. This allows Path workbench to be configured to only display desired Postprocessors, and to set a default.

Included Postprocessors are saved in the FreeCAD.Mod.Path.Pathscripts.Post by default:

- centroid
- comparams
- dynapath
- grbl
- [linuxcnc](http://linuxcnc.org/docs/html/gcode/g-code.html#gcode:g17-g19.1)
- opensbp
- phillips
- rml
- smoothie

## Limitations

**Nu** utilizați meniul **File->Export** pentru a exporta G-code, va produce un G-code deteriorat!

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Post/ro&oldid=1386559>"
