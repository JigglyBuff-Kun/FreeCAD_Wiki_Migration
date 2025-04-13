---
title: Path DressupRampEntry
---

|                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path DressupTag                                                                                                                                                                                    |
| Menu location                                                                                                                                                                                      |
| Path → Path Dressup → RampEntry Dress-up                                                                                                                                                           |
| Workbenches                                                                                                                                                                                        |
| [Path](/Path_Workbench "Path Workbench")                                                                                                                                                           |
| Default shortcut                                                                                                                                                                                   |
| _None_                                                                                                                                                                                             |
| Introduced in version                                                                                                                                                                              |
| -                                                                                                                                                                                                  |
| See also                                                                                                                                                                                           |
| [Path_DressupTag](/Path_DressupTag "Path DressupTag"), [Path_DressupDogbone](/Path_DressupDogbone "Path DressupDogbone") , [Path_DressupDragKnife](/Path_DressupDragKnife "Path DressupDragKnife") |
|                                                                                                                                                                                                    |

## Descriere

Acest instrument utilizează o cale existentă pentru a adăuga punți/etichete de reținere pe durata așchierii.

## Utilizare

1. Selectați un contur sau profil de traiectorie [Path](/Path_Workbench "Path Workbench") objects
2. Click pe articolul din meniu ![](/images/Path_Dressup.png) [RampEntry Dress-up](/Path_DressupRampEntry "Path DressupRampEntry")

## Proprietăți

- **Ramp Feed Rate** poate fi fie rata de alimentare verticală sau orizontală curentă, fie o altă valoare personalizată
- **Angle** al rampei pe axa verticală. O valoare mai mică face rampa mai abruptă.
- **Method** este folosită pentru a selecta diferite moduri de rampă:
  - RampMethod1 coboară la un unghi de rampă și se mișcă orizontal spre punctul țintă
  - RampMethod2 merge mai întâi orizontal și apoi în jos la unghiul de rampă până la punctul țintă
  - RampMethod3 coboară în zig-zag
  - Helix coboară în spirală
- **Dressup Start Depth**este distanța deasupra nivelului țintă unde începe rampa
- **UseStartDepth** indică faptul că rampa nu pornește deasupra nivelului stocului. Dacă nu este setat la adevărat, prima ramă poate fi mai abruptă decât se aștepta.

![](/images/Ramp_method_1.png) ![](/images/Ramp_method_2.png) ![](/images/Ramp_method_3.png)

From left to right: Ramp method 1, 2 and 3

![](/images/Ramp_method_Helix.png)

Ramp method Helix

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_DressupRampEntry/ro&oldid=1386332>"
