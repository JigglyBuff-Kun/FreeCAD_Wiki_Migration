---
title: TechDraw AnsichtTeilen
---

|                                                            |
| ---------------------------------------------------------- |
| TechDraw AnsichtTeilen                                     |
| Menüeintrag                                                |
| TechDraw → TechDraw Ansichten → Ansicht teilen             |
| Arbeitsbereich                                             |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") |
| Standardtastenkürzel                                       |
| _Keiner_                                                   |
| Eingeführt in Version                                      |
| 0.20                                                       |
| Siehe auch                                                 |
| _Keiner_                                                   |
|                                                            |

## Beschreibung

Das Werkzeug **TechDraw AnsichtTeilen** macht eine Ansicht mit all ihren abhängigen Inhalten (Hinweisfelder, Maße usw.) auf einer zweiten Seite sichtbar.

## Anwendung

1. Wahlweise eine Ansicht, eine Von-Seite und eine Nach-Seite auswählen. Die Seiten müssen in dieser Reihenfolge ausgewählt werden.
2. Es gibt mehrere Möglichkeiten das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_ShareView.svg) Ansicht teilen drücken.
   - Den Menüeintrag **TechDraw → TechDraw Ansichten → ![](/src/assets/images/TechDraw_ShareView.svg) Ansicht teilen** auswählen.
3. Es öffnet sich ein Dialog, der es erlaubt, eine Ansicht, eine Von-Seite und eine Nach-Seite auszuwählen.
4. Die Schaltfläche OK drücken.

## Hinweise

Es gibt nur ein View-Objekt nach der Verteilungsoperation. Sämtliche Änderungen, die an der Ansicht erfolgen, werden auf beiden Seiten angezeigt. Wenn die Ansicht von einer Seite gelöscht wird, wird sie auch von der anderen Seite gelöscht.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Ansicht teilen kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus genutzt werden durch Verwendung der folgenden Funktionen:

```
import TechDrawTools
#MoveView with a True parameter in the last position performs a copy
TechDrawTools.MoveView(viewName, fromPageName, toPageName, True)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ShareView/de&oldid=1500215>"
