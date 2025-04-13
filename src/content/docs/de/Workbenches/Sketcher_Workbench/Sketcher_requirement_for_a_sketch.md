---
title: Sketcher Anforderungen an Skizzen
---

|                                   |
| --------------------------------- |
| Tutorium                          |
| Thema                             |
| Skizze                            |
| Niveau                            |
| Anfänger                          |
| Zeit zum Abschluss                |
|                                   |
| Autoren                           |
| [Maker](/User:Maker "User:Maker") |
| FreeCAD-Version                   |
|                                   |
| Beispieldateien                   |
| _None_                            |
| Siehe auch                        |
| _None_                            |
|                                   |

## Mindestanforderung an eine Skizze

Das Erzeugen eines Körpers im Arbeitsbereich PartDesign ist bereits und **nur** mit Hilfe einer geschlossenen Kurve (Profil) möglich. Die vollständige Bestimmung all ihrer Abmessungen und Eigenschaften (_vollständig beschränkt_) ist dafür noch nicht erforderlich.

Dass eine geschlossene Kurve vorliegt, ist nicht selbstverständlich und nicht erkennbar. Beim Anschluss eines Kreisbogens an eine Gerade z.B. werden die beiden Endpunkte nur übereinander liegend erstellt. Sie müssen mit dem Werkzeug ![](/src/assets/images/Constraint_PointOnPoint.svg) [Deckungsgleiche](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") Beschränkung zu einem einzigen, Gerade und Kreisbogen tatsächlich verbindenden Punkt gemacht werden.

![](/src/assets/images/Skizze2a.png)

Eine einfache Skizze.
Links: Kurve nur an vier Stellen (rot, automatische Beschränkungen beim Zeichnen mit ![](/src/assets/images/Sketcher_CreatePolyline.svg) [Polylinie](/Sketcher_CreatePolyline/de "Sketcher CreatePolyline/de")) geschlossen.
Mitte: Warnung - ... gebrochene Fläche (gebrochene Kurve).
Rechts: Kurve an den verbleibenden vier Stellen geschlossen (grün)

Konsequentes parametrisches Arbeiten bedeutet allerdings, dass die Skizze vollständig bestimmt wird.

## Vollständiges Definieren einer Skizze

Selbst eine noch relativ einfache Skizze kann schon Dutzende von Unbestimmtheiten (in der Combo-Ansicht als Zahl von "Freiheitsgraden" angegeben) enthalten. Sie erst am Ende alle gemeinsam zu beseitigen, ist eine relativ unübersichtliche Arbeit.

![](/src/assets/images/Skizze4a.png)

Eine einfache Skizze; vollständig bestimmt durch 25 Beschränkungen, von denen nur 5 Bemaßungsbeschränkungen sind.

Diese Arbeit ist übersichtlicher und einfacher, wenn man die "Freiheiten" jedes zugefügten geometrischen Elements sofort eliminiert, d.h. dieses _vermaßt_ (also Werte für Dimensionen und Platzierungen angibt). Die jeweils vorläufige Vollständigkeit ist erreicht, wenn alle Linien grün angezeigt werden.

Wenn man bis zum Ende des Zeichnens mit dem Bestimmen abwartet, so findet man verbliebene "Freiheiten", indem man die Punkte und Linien mit dem Mauszeiger anfasst und feststellt, wo sie noch nicht fixiert sind. Bei endgültiger Vollständigkeit wird die gesamte Zeichnung grün angezeigt.

Stellt man versehentlich eine _Überregelung_ her, erscheint eine Warnung in der Combo-Ansicht mit der Auffoderung, entsprechende Maßnahmen (constraints) rückgängig zu machen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_requirement_for_a_sketch/de&oldid=952039>"
