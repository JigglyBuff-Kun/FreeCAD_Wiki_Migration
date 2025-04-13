---
title: FEM RandbedingungWärmestrom
---
|  |
| --- |
| FEM RandbedingungWärmestrom |
| Menüeintrag |
| Modell → Thermische Randbedingungen und Belastungen → Wärmestrombelastung |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM-Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|  |

| Gleichungslöser |
| --- |
| CalculiX, Elmer |

## Beschreibung

Legt eine Wärmestrombelastung auf einer Oberfläche fest. Die folgenden Wärmestromarten werden unterstützt:

* Gleichförmige Wärmestrombelastung einer Oberfläche 

  q
  {\displaystyle q}
  ![{\displaystyle q}](https://wikimedia.org/api/rest_v1/media/math/render/svg/06809d64fa7c817ffc7e323f85997f783dbdf71d)
* Konvektive Wärmestrombelastung einer Oberflächeconvective bei einer Temperatur 

  T
  {\displaystyle T}
  ![{\displaystyle T}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ec7200acd984a1d3a3d7dc455e262fbe54f7f6e0) mit einem Filmkoeffizienten 

  h
  {\displaystyle h}
  ![{\displaystyle h}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b26be3e694314bc90c3215047e4a2010c6ee184a) und mit der Umgebungstemperatur (Senke/Umgebung) 

  T

  0
  {\displaystyle T\_{0}}
  ![{\displaystyle T_{0}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/55b9e7d7b96196b5a6a26f4349caa3ac82fd67e3). Der konvektive Wärmestrom 

  q
  {\displaystyle q}
  ![{\displaystyle q}](https://wikimedia.org/api/rest_v1/media/math/render/svg/06809d64fa7c817ffc7e323f85997f783dbdf71d) erfüllt: 

  q
  =
  h
  (
  T
  −

  T

  0
  )
  {\displaystyle q=h(T-T\_{0})}
  ![{\displaystyle q=h(T-T_{0})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fb7d1148b9907d518b7735374dd0288599290aa4).
* [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Wärmestrahlung einer Oberflächer. Sie erfüllt: 

  q
  =
  ϵ
  σ
  (

  T

  4
  −

  T

  0

  4
  )
  {\displaystyle q=\epsilon \sigma (T^{4}-T\_{0}^{4})}
  ![{\displaystyle q=\epsilon \sigma (T^{4}-T_{0}^{4})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9a02c63f7487161bc96756ca72fff9f2b1dada79), wobei 

  ϵ
  {\displaystyle \epsilon }
  ![{\displaystyle \epsilon }](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3837cad72483d97bcdde49c85d3b7b859fb3fd2) das Strahlungsvermögen der Oberfläche und 

  σ
  {\displaystyle \sigma }
  ![{\displaystyle \sigma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/59f59b7c3e6fdb1d0365a494b81fb9a696138c36) die Stefan-Boltzmann-Konstante ist.

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ConstraintHeatflux.svg) Wärmestrombelastung drücken.
   * Den Menüeintrag **Modell → Thermische Randbedingungen und Belastungen → ![](/images/FEM_ConstraintHeatflux.svg) Wärmestrombelastung** auswählen.
2. Die Schaltfläche Hinzufügen drücken und in der [3D-Ansicht](/3D_view/de "3D view/de") die Fläche(n) auswählen, auf die die Wärmestrombelastung angewendet werden soll. Wahlweise die Schaltfläche Entfernen drücken, um ausgewählte Flächen aus der Auswahlliste zu entfernen.
3. Die Art des Wärmeflusses auswählen und die Parameter eingeben.
   * *DFlux* - allgemeiner Wärmefluss; den Wert für *Surface Heat Flux* (Oberflächenwärmefluss) in Watt pro Fläche (Flächeninhalt der Oberfläche) (W/m^2) eingeben.
   * *Convection* (Standardwert) - Konvektionswärmefluss; die gewünschten Werte für *Film coefficient* (Randschichtbeiwert) und *Ambient temperature* (Umgebunstemperatur) eingeben.
   * [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): *Radiation* - Strahlungswärmefluss; die gewünschten Werte für *Emissivity* (Emissionsgrad) und *Ambient temperature* (Umgebunstemperatur) eingeben.

## Hinweise

* Die Wärmestrombelastung verwendet je nach gewähltem Modus die folgenden CalculiX-Karten:
  + [\*FILM](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node203.html) für *Convektion*
  + [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): [\*RADIATE](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node234.html) für *Radiation*
  + [\*DFLUX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node188.html) für *DFlux*

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintHeatflux/de&oldid=1568160>"