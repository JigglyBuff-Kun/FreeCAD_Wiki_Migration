---
title: TechDraw AllesAnzeigen
---

|                                                                                 |
| ------------------------------------------------------------------------------- |
| TechDraw AllesAnzeigen                                                          |
| Menüeintrag                                                                     |
| TechDraw → Linien hinzufügen → Ausgeblendete Kanten ein-/ausblenden             |
| Arbeitsbereich                                                                  |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                      |
| Standardtastenkürzel                                                            |
| _Keiner_                                                                        |
| Eingeführt in Version                                                           |
| 0.19                                                                            |
| Siehe auch                                                                      |
| [LiniendarstellungÄndern](/TechDraw_DecorateLine/de "TechDraw DecorateLine/de") |
|                                                                                 |

## Beschreibung

Das Werkzeug **TechDraw AllesAnzeigen** ist dazu gedacht, unsichtbare Linien einer Ansicht zeitweilig ein- und wieder auszublenden. Linien können mit dem Werkzeug [TechDraw LiniendarstellungÄndern](/TechDraw_DecorateLine/de "TechDraw DecorateLine/de") auf unsichtbar gesetzt werden. Dabei ist zu Beachten, dass "unsichtbar" hier eine Darstellungseigenschaft ist; nicht zu verwechseln mit verdeckten Kanten, die geometrische Konstrukte sind.

## Anwendung

1. Eine Ansicht mit unsichtbaren Linien auf einem Zeichnungsblatt oder in der [Baumansicht](/Tree_view/de "Tree view/de"). auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_ShowAll.svg) Ausgeblendete Kanten ein-/ausblenden drücken.
   - Den Menüeintrag **TechDraw → Linien hinzufügen → ![](/src/assets/images/TechDraw_ShowAll.svg) Ausgeblendete Kanten ein-/ausblenden** auswählen.
3. Alle unsichtbaren (ausgeblendeten) Linien in der Ansicht werden entweder eingeblendet oder ausgeblendet.

## Hinweise

- Um unsichtbare Linien dauerhaft sichtbar zu machen, wird das Werkzeug ![](/src/assets/images/TechDraw_DecorateLine.svg) [TechDraw LiniendarstellungÄndern](/TechDraw_DecorateLine/de "TechDraw DecorateLine/de") verwendet.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Die Wirkung des AllesAnzeigen Werkzeugs kann in [Makros](/Macros/de "Macros/de") oder der [Python](/Python/de "Python/de")-Konsole dupliziert werden.

```
v = App.ActiveDocument.View
vvo = v.ViewObject
vvo.ShowAllEdges = True
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ShowAll/de&oldid=1500217>"
