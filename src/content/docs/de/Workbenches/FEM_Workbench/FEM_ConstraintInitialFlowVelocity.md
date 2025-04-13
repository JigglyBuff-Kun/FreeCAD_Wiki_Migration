---
title: FEM StartbedingungStrömungsgeschwindigkeit
---
|  |
| --- |
| FEM StartbedingungStrömungsgeschwindigkeit |
| Menüeintrag |
| Model → Fluid-Randbedingungen → Startbedingung Strömungsgeschwindigkeit |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [RandbedingungStrömungsgeschwindigkeit](/FEM_ConstraintFlowVelocity/de "FEM ConstraintFlowVelocity/de"), [StartbedingungDruck](/FEM_ConstraintInitialPressure/de "FEM ConstraintInitialPressure/de") |
|  |

| Gleichungslöser |
| --- |
| Elmer |

## Beschreibung

Erstellt eine Startbedingung einer Strömungsgeschwindigkeit für die Strömungsanalyse eines Fluids.

![](/images/FEM_InitialFlowVelocity_dialog.png)

The FEM initial flow velocity task panel

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ConstraintInitialFlowVelocity.svg) Startbedingung Strömungsgeschwindigkeit drücken
   * Den Menüeintrag **Modell → Fluid-Randbedingungen → ![](/images/FEM_ConstraintInitialFlowVelocity.svg) Startbedingung Strömungsgeschwindigkeit** auswählen.
2. Einen Startwert der Strömungsgeschwindigkeit für die Analyse eingeben. Der Wert wird als Kombination der 3 kartesischen Hauptvektorkomponenten (X,Y,Z) angegeben.
3. Für eine 3D-Analyse wird ein Festkörper (Body) des Modells ausgewählt, für eine 2D-Analyse eine Fläche. Es ist aber auch möglich eine Fläche (z.B. den Einlass einer Leitung) in 3D oder eine Kante in 2D auszuwählen.

## Formeln

Eine Beschreibung, wie man Formeln einsetzt, befindet sich im Abschnitt *Formeln* auf der Seite [RandbedingungStrömungsgeschwindigkeit](/FEM_ConstraintFlowVelocity/de#Formeln "FEM ConstraintFlowVelocity/de").

## Hinweise

In einfachen Analysen ist es nicht erforderlich, einen Startwert für die Strömungsgeschwindigkeit anzugeben, wird aber als bewährte Vorgehensweise empfohlen.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintInitialFlowVelocity/de&oldid=1570700>"