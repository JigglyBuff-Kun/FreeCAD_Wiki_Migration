---
title: Panel zadań Umiejscowienie
---
## Opis

Polecenie modyfikujące **Umiejscowienie**.
Opcje te odnoszą się tylko do położenia i orientacji obiektu w przestrzeni, nie wpływają na inne atrybuty kształtu. Umiejscowienie jest przechowywane wewnętrznie jako pozycja i obrót *(oś obrotu i kąt przekształcone w [kwaternion](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation))*. Chociaż istnieje kilka metod określania obrotu, na przykład za pomocą środka obrotu, jest on używany tylko do wpływania na obliczenia obrotu i nie jest przechowywany do późniejszych operacji. Podobnie, jeśli określono oś obrotu *(1,1,1)*, może ona zostać znormalizowana po zapisaniu w kwaternionie i pojawić się jako *(0,58, 0,58, 0,58)* podczas późniejszego przeglądania parametrów obiektu.

## Użycie

Dostęp do funkcji **Umiejscowienie** można uzyskać na kilka sposobów:

* poprzez [skrypty](/Python_scripting_tutorial#Vecteurs_et_Positions "Python scripting tutorial") Python w konsoli i jego [API](/Placement_API "Placement API").

:   ![Tworzenie skryptów Umiejscowienie jako y/p/r i macierz](/images/PlacePyConv10.png)

* lub w oknie **Widoku połączonego → Właściwości → Dane → Umiejscowienie → ...**,

:   ![Task_Placement/pl](/images/Tache_Placement_fr_01.png)

* lub przez menu **Edycja → Umiejscowienie …**.

### Włączenie umiejscowienia w Widoku połączonym

* Kliknij kształt, aby go zaznaczyć.
* Kliknij Umiejscowienie ***(tytuł, nie małą strzałkę)*, a pojawi się przycisk z wielokropkiem …: ![Rozmieszczenie detali](/images/Tache_Placement_01_fr_00.png)**
* Kliknięcie wielokropka spowoduje wyświetlenie okna dialogowego **Umiejscowienie**:

:   ![](/images/Tache_Placement_en_02.png)

### Opcje

Przesunięcie

* TASKS **X** [![Przemieszczenie w kierunku X (kliknij, aby powiększyć)](/images/Tache_Placement_Translation_X_fr.gif)](/File:Tache_Placement_Translation_X_fr.gif  "Przemieszczenie w kierunku X (kliknij, aby powiększyć)") Przesuwa układ współrzędnych obiektu w kierunku **X** w odniesieniu do współrzędnych początku osi 0, 0, 0.
* TASKS **Y** [![Przemieszczenie w kierunku Y (kliknij, aby powiększyć)](/images/Tache_Placement_Translation_Y_fr.gif)](/File:Tache_Placement_Translation_Y_fr.gif  "Przemieszczenie w kierunku Y (kliknij, aby powiększyć)") Przesuwa układ współrzędnych obiektu w kierunku **Y** w odniesieniu do współrzędnych początku osi 0, 0, 0.
* TASKS **Z** [![Przemieszczenie w kierunku Z (kliknij, aby powiększyć)](/images/Tache_Placement_Translation_Z_fr.gif)](/File:Tache_Placement_Translation_Z_fr.gif  "Przemieszczenie w kierunku Z (kliknij, aby powiększyć)") Przesuwa układ współrzędnych obiektu w kierunku **Z** w odniesieniu do współrzędnych początku osi 0, 0, 0.

Środek

* TASKS **X**: Przesuwa środek obrotu w kierunku **X**, od współrzędnych wybranego obiektu. *(domyślnie: 0,0,0)*
* TASKS **Y**: Przesuwa środek obrotu w kierunku **Y**, od współrzędnych wybranego obiektu. *(domyślnie: 0,0,0)*
* TASKS **Z**: Przesuwa środek obrotu w kierunku **Z**, od współrzędnych wybranego obiektu. *(domyślnie: 0,0,0)*
* TASKS **User Defined...**: Umożliwia modyfikację wartości współrzędnych trzech osi *(**X, Y, Z**)* w jednej operacji ![Określony przez użytkownika](/images/Part_Revolve_fr_06.png).

Obrót

Aby dostosować nasze **parametry obrotu**, mamy do dyspozycji dwie metody.

* Pierwsza opcja. Wybierz  **Oś obrotu z zadanym kątem** ![Detale umiejscowienia. Opcja osi obrotu i kąta](/images/Tache_Placement_fr_05.png) *(Domyślnie)*.
  + TASKS **Oś: X**: Obrót nastąpi na osi **X**.
  + TASKS **Oś: Y**: Obrót będzie na osi *Y*.
  + TASKS **Oś: Z**: Obrót nastąpi na osi *Z*. (Oś domyślna).
  + TASKS **Oś:**. Kąt obrotu w stopniach od **-360.00°** do **360.00°** *(Domyślnie: **0.00°**)*.

* Druga opcja. Wybierz **Kąty Eulera** ![Detale umiejscowienia. Opcja kątów Eulera](/images/Tache_Placement_fr_04.png).

Ta opcja może być łatwiejsza w użyciu, jednak nawet w tym trybie należy pamiętać o ważnych rzeczach: Dodatnie obroty są w kierunku zgodnym z **ruchem wskazówek zegara**, patrząc **na zewnątrz** od początku wzdłuż dodatniej osi. Mówiąc inaczej, obroty są dodatnie w kierunku **przeciwnym do ruchu wskazówek zegara**, patrząc **do środka** do początku wzdłuż dodatniej osi.

:   * **[Yaw](https://en.wikipedia.org/wiki/Flight_dynamics_(fixed-wing_aircraft))** : to poziomy obrót Zawartości wokół osi pionowej.
    * **[Pitch](https://en.wikipedia.org/wiki/Flight_dynamics_(fixed-wing_aircraft))** : definiuje się jako oscylacyjny ruch statku do przodu i do tyłu.
    * **[Roll](https://en.wikipedia.org/wiki/Flight_dynamics_(fixed-wing_aircraft))** : jest to ruch obrotowy ciała wokół jego osi wzdłużnej *(osi obrotu)*.

Odchylenie *(yaw)*, wychylenie *(pitch)* i przechylenie *(roll)* odnoszą się do "położenia" obiektu w przestrzeni 3D. Terminy te są powszechnie używane w lotnictwie. Kąty te są **kątami Taita-Bryana**. Więcej informacji można znaleźć na stronie [Kąty Eulera](https://en.wikipedia.org/wiki/Euler_angles).

![Opcja Kąty Eulera](/images/Tache_Placement_en_03.png)

![Yaw](/images/Tache_Placement_Lacet_fr_Mini.gif)

* TASKS **oś yaw** **Yaw to obrót wokół osi Z**, czyli obrót od lewej do prawej. *(Kąt odchylenia to* Psi ψ*)*. Wartość **-180,00°** do **180, 00°** *(domyślnie, **0,00°**)*.

![Pitch](/images/Tache_Placement_Tangage_fr_Mini.gif)

* TASKS **oś pitch** **Pitch to obrót wokół osi Y**, czyli nos w górę i nos w dół. *(Kąt nachylenia to **Phi φ**)*. Wartość **-90,00°** do **90, 00°** *(domyślnie **0,00°**)*.

![Obrót](/images/Tache_Placement_Roulis_fr_Mini.gif)

* TASKS **oś roll** **Roll oznacza obrót wokół osi X**, czyli inaczej mówiąc skrzydło w górę i w dół. *(Kąt obrotu to **Thêta θ**)*. Przyjmuje wartość **-180.00°** do **180, 00°** *(domyślnie, **0.00°**)*.

* TASKS **Zastosuj zmiany przyrostowe** do umieszczenia obiektu: Po wybraniu, ta opcja **wirtualnie** ustawia wszystkie parametry na zero, aby umożliwić wprowadzenie wartości bez konieczności obliczania z oryginalnymi parametrami formularza. Po potwierdzeniu przyciskiem OK, wprowadzone wartości zostaną dodane do wartości w formularzu.

* Przycisk Reset przywraca wszystkie wartości do **0,0,0**.

## Odnośniki internetowe i przykłady

Praktyczny przykład użycia tego polecenia znajduje się w poradniku [Samolot](/Aeroplane/pl "Aeroplane/pl").

Inne wyjaśnienie dotyczące [Umiejscowienie](/Placement/pl "Placement/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Tasks_Placement/pl&oldid=1551673>"