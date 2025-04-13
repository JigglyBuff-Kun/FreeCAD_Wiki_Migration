---
title: MES Wiązanie ciała sztywnego
---

|                                                                                                    |
| -------------------------------------------------------------------------------------------------- |
| MES: Wiązanie ciała sztywnego                                                                      |
| Lokalizacja w menu                                                                                 |
| Model → Warunki brzegowe i obciążenia mechaniczne → Wiązanie ciała sztywnego                       |
| Środowisko pracy                                                                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                        |
| Domyślny skrót                                                                                     |
| _brak_                                                                                             |
| Wprowadzono w wersji                                                                               |
| 1.0                                                                                                |
| Zobacz także                                                                                       |
| [Warunek brzegowy przemieszczenia](/FEM_ConstraintDisplacement/pl "FEM ConstraintDisplacement/pl") |
|                                                                                                    |

| Solvery  |
| -------- |
| CalculiX |

## Opis

Definiuje wiązanie ciała sztywnego dostępne w CalculiX, które wiąże ruch węzłów należących do wskazanego obiektu geometrycznego z ruchem węzła referencyjnego, którego położenie jest definiowane przez użytkownika. W praktyce, można z tego skorzystać do przyłożenia warunków brzegowych lub obciążeń, które będą propagowane na wybrany obiekt. Ponieważ węzeł referencyjny ma obrotowe stopnie swobody, można w ten sposób przyłożyć na dowolną ścianę obciążenie momentem lub warunek brzegowy rotacji. Położenie węzła referencyjnego można zdefiniować, jeśli jest on odsunięty od obiektu geometrycznego to przykłada się w ten sposób siłę działającą na ramieniu.

## Użycie

1. Jest kilka sposobów wywołania tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_ConstraintRigidBody.svg) **Wiązanie ciała sztywnego**.
   - Wybierz opcję **Model → Warunki brzegowe i obciążenia mechaniczne → ![](/images/FEM_ConstraintRigidBody.svg) Wiązanie ciała sztywnego** z menu.
2. Wciśnij przycisk Dodaj.
3. W [widoku 3D](/3D_view/pl "3D view/pl") wskaż obiekty geometryczne (wierzchołki, krawędzie lub ściany, ale nie różne typy na raz), na które ma być nałożone wiązanie. Aby usunąć obiekty z zaznaczenia, wciśnij przycisk Usuń i kliknij na nich.
4. Wprowadź współrzędne węzła referencyjnego. Symbol w postaci kuli będzie pokazywał jego położenie.
5. Wybierz tryby dla 3 przemieszczeniowych i 3 obrotowych stopni swobody:
   - _Free_ - domyślnie, bez warunku brzegowego ani obciążenia na tym stopniu swobody
   - _Constraint_ - warunek brzegowy przemieszczenia/rotacji z podaną wartością (domyślnie: 0=utwierdzone) na tym stopniu swobody - dla obrotów należy ustawić oś (X, Y lub Z) i podać kąt (_Angle_)
   - _Load_ - obciążenie siłą/momentem o określonej wartości na tym stopniu swobody

![](/images/FEM_rigid_body_torsion.PNG)

Belka wspornikowa poddana skręcaniu. Zielone symbole w kształcie pinezki wskazują ścianę, na którą nałożone jest wiązanie ciała sztywnego, zaś duża zielona kula to węzeł referencyjny. Moment jest zdefiniowany we właściwej osi.

![](/images/FEM_rigid_body_bending_and_torsion.PNG)

Belka wspornikowa poddana obciążeniu złożonemu (zginanie ze skręcaniem) poprzez tzw. odległą siłę. Węzeł referencyjny jest odsunięty od belki i przyłożona jest do niego siła skierowana w dół.

## Ograniczenia

- Obecnie jednostki momentu mogą być mylące. Aby przyłożyć 1 N\*m należy ustawić 1 J w polu do wprowadzania wartości momentu (te jednostki są równoważne).
- To wiązanie można póki co przypisywać tylko do wierzchołków, krawędzi i ścian. Wsparcie dla brył (aby usztywniać całe objętości/części) powinno zostać dodane w przyszłości.
- Wskazany obiekt jest usztywniany. Aby przyłożyć obciążenia w bardziej podatny sposób, należałoby skorzystać z więzów distributing coupling dostępnych w CalculiX, ale nie w module MES programu FreeCAD.

## Uwagi

- To wiązanie jest standardowym sposobem przykładania momentu na dowolne części. Inne opcje to [Lokalny układ współrzędnych](/FEM_ConstraintTransform/pl "FEM ConstraintTransform/pl") (tylko dla ścian cylindrycznych) lub para sił, ale wiązanie ciała sztywnego powinno być wystarczające w praktycznie wszystkich przypadkach.
- Nie należy przykładać żadnych innych wiązań/warunków brzegowych na węzły biorące udział w wiązaniu ciała sztywnego.
- Przykładając to wiązanie na wierzchołek lub krawędź należy ustawić odpowiedni obrotowy stopień swobody (w przypadku krawędzi, ten który zapobiegnie jej obrotowi wokół własnej osi) na zero.
- To narzędzie korzysta ze [słowa kluczowego \*RIGID BODY w CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node236.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintRigidBody/pl&oldid=1544172>"
