---
title: Path Personalizată
---

|                                          |
| ---------------------------------------- |
| Path Custom                              |
| Menu location                            |
| Path → Partial Commands → Custom         |
| Workbenches                              |
| [Path](/Path_Workbench "Path Workbench") |
| Default shortcut                         |
| _None_                                   |
| Introduced in version                    |
| -                                        |
| See also                                 |
| _None_                                   |
|                                          |

## Descriere

Acest instrument introduce un obiect traiectorie care constă din cod G personalizat și codificat manual.

Deoarece comanda G-Code personalizată nu oferă nicio legătură cu un controler de scule, dacă o sculă este utilizată de codul G personalizat, indicele instrumentului trebuie să fie scris împreună cu codul de pornire M, pentru a fi transmis Postprocesorul. Acest lucru asigură că modificările și pornirea instrumentului vor fi generate în mod corespunzător.

De exemplu, pentru a transmite Postprocesorului că instrumentul utilizat în operațiunea G-Cod personalizat are indicele Tool 6 și o viteză a arborelui de 10.000, introduceți următorul cod la începutul operațiunii Custom G Code:

(T6: 4mm Endmill)

M6 T6

M3 S10000

Rețineți că ratele de feed vor fi generate în mod corect de către Postprocessor, numai dacă ratele de feed G-Cod personalizat sunt scrise în Unități / secundă.

## Utilizare

1. Apăsați butonul ![](/images/Path_Custom.png) [Custom](/Path_Custom "Path Custom")
2. Scrieți codul G personalizat cu proprietatea **G Code**

```
a noului obiect creat. Consulatați pagina Path scripting pentru comenzile G-Code acceptae.

```

## Proprietăți

- Date**G Code**: Comenzile G Code personalizate pentru a construi calea

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Custom/ro&oldid=1386283>"
