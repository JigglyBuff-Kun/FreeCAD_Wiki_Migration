---
title: TechDraw AnsichtVerschieben
---

:::caution
Dieses Werkzeug ist veraltet und wird in1.0 und neuernicht mehr enthalten sein.Ansichten können jetzt mit Zehen und Ablegen zwischen Zeichnungsblättern in derBaumansichtverschoben werden.
:::

|                                                                          |
| ------------------------------------------------------------------------ |
| TechDraw AnsichtVerschieben                                              |
| Menüeintrag                                                              |
| TechDraw → TechDraw Ansichten → Ansicht verschieben                      |
| Arbeitsbereich                                                           |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")               |
| Standardtastenkürzel                                                     |
| _Keiner_                                                                 |
| Eingeführt in Version                                                    |
| 0.20                                                                     |
| Siehe auch                                                               |
| [TechDraw AnsichtTeilen](/TechDraw_ShareView/de "TechDraw ShareView/de") |
|                                                                          |

## Beschreibung

Das Werkzeug **TechDraw AnsichtVerschieben** bewegt eine Ansicht mit all ihren abhängigen Inhalten (Hinweisfelder, Maße usw.) auf eine andere Seite.

## Anwendung

1. Wahlweise eine Ansicht, eine Von-Seite und eine Nach-Seite auswählen. Die Seiten müssen in dieser Reihenfolge ausgewählt werden.
2. Es gibt mehrere Möglichkeiten das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/TechDraw_MoveView.svg) Ansicht verschieben drücken.
   - Den Menüeintrag **TechDraw → TechDraw Ansichten → ![](/images/TechDraw_MoveView.svg) Ansicht verschieben** auswählen.
3. Es öffnet sich ein Dialog, der es erlaubt, eine Ansicht, eine Von-Seite und eine Nach-Seite auszuwählen.
4. Die Schaltfläche OK drücken.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug AnsichtVerschieben kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen verwendet werden:

```
import TechDrawTools
TechDrawTools.MoveView(viewName, fromPageName, toPageName)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_MoveView/de&oldid=1500203>"
