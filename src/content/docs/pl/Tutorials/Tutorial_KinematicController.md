---
title: Poradnik Sterownik kinematyczny
---

|                                                      |
| ---------------------------------------------------- |
| Ćwiczenie                                            |
| Temat                                                |
| Sterownik kinematyczny utworzony w środowisku Python |
| Poziom trudności                                     |
| Przydatna jest podstawowa znajomość języka Python    |
| Czas wykonania                                       |
| 1 godzina                                            |
| Autorzy                                              |
| [FBXL5](/User:FBXL5 "User:FBXL5")                    |
| Wersja FreeCAD                                       |
| 0.20 lub nowszy                                      |
| Pliki z przykładami                                  |
| _Nie dołączono_                                      |
| Zobacz również                                       |
| _-_                                                  |
|                                                      |

## Wprowadzenie

Ten poradnik opisuje jak z kilku linijek kodu Python wygenerować prosty kontroler kinematyczny do użycia z zespołami utworzonymi za pomocą środowiska pracy [Złożenie 3](/Assembly3_Workbench/pl "Assembly3 Workbench/pl").

Do kodowania można użyć dowolnego edytora tekstu. Mój wybór to Atom, ale wbudowany edytor FreeCAD też działa dobrze.

Poniższe przykłady kodu można skopiować i wkleić do pustego pliku tekstowego, a następnie zapisać pod wybraną nazwą jako plik typu \*.py lub \*.FCMacro.

## Sekcje makrodefinicji

### Podstawowa struktura

```
#! python
# -*- coding: utf-8 -*-
# (c) 2022 Your name LGPL

def main():
    pass

if __name__ == "__main__":
    # This will be true only if the file is "executed"
    # but not if imported as a module
    main()

```

Podstawowa struktura składa się z funkcji `main()` oraz przełącznika sprawdzającego, czy makro jest używane jako kontener dla klas, metod itp. czy też jest uruchamiane samodzielnie. Tylko druga opcja powoduje uruchomienie funkcji `main()`. Funkcja ta jest na razie pusta.

### Wyznacz więzy prowadzące

Więzy prowadzące są obiektami w obrębie dokumentu FreeCAD. Należy je oznaczyć, aby można było je odnaleźć.

Dla tego kontrolera przyrostek `"Driver"` musi być dołączony do etykiety wiązania prowadzącego. Może on być oddzielony znakiem `"."` lub `"-"` dla jasności, ponieważ będziemy sprawdzać tylko czy etykieta kończy się `"Driver"`.

Funkcja, która otrzymuje obiekt dokumentu i zwraca listę więzów prowadzących _(nazwy w tym przypadku)_ wykona zadanie.

```
def findTheDrivingConstraints(document_object):
    # search through the Objects and find the driving constraint
    driver_list = []
    for each in document_object.Objects:
        if each.Label.endswith("Driver"):
            driving_constraint = each.Name
            driver_list.append(driving_constraint)
    return driver_list

```

Funkcja `main()` ładuje aktywny dokument do zmiennej `kin_doc`, a następnie wywołuje funkcję `findTheDrivingConstraints()` i przekazuje jej zawartość `kin_doc`. Zwrócona lista jest ładowana do `drivers`, która następnie jest sprawdzana, czy zawiera przynajmniej jeden element. Jeśli tak jest, lista jest ostatecznie wyświetlona w widoku [Raportu](/Report_view/pl "Report view/pl").

```
def main():
    kin_doc = App.ActiveDocument # Kinematic Document
    drivers = findTheDrivingConstraints(kin_doc)
    if len(drivers) < 1:
        print("No driver found!")
    else:
        print(drivers)

```

**Dotychczasowe makrodefinicje ...**

```
#! python
# -*- coding: utf-8 -*-
# (c) 2021 Your name LGPL

def findTheDrivingConstraints(document_object):
    # search through the Objects and find the driving constraint
    driver_list = []
    for each in document_object.Objects:
        if each.Label.endswith("Driver"):
            driving_constraint = each.Name
            driver_list.append(driving_constraint)
    return driver_list

def main():
    kin_doc = App.ActiveDocument # Kinematic Document
    drivers = findTheDrivingConstraints(kin_doc)
    if len(drivers) < 1:
        print("No driver found!")
    else:
        print(drivers)

if __name__ == "__main__":
    # This will be true only if the file is "executed"
    # but not if imported as a module
    main()

```

[Przewiń na górę strony](#top)

### Panel sterowania

Panel sterowania jest zbudowany z widżetów Qt, jedno główne okno zawierające kilka widżetów wejścia / wyjścia.

Każdy widżet musi zostać zaimportowany, zanim będzie można go użyć, ale można je zaimportować jako pojedynczy zestaw. Linia importu jest umieszczona w pobliżu górnej części pliku.

#### Okno główne

W głównym oknie linia importu wygląda tak:

```
from PySide2.QtWidgets import (QDialog)

```

Okno główne o nazwie `ControlPanel` to obiekt klasy utworzony z widżetu `QDialog`.

Posiada ona dwie metody init. Metoda `__init__()` inicjalizuje nowy obiekt klasy, obsługuje przychodzące argumenty oraz uruchamia metodę `initUI()`, która zarządza wszystkimi widżetami w obrębie okna głównego.

```
class ControlPanel(QDialog):
    """
    docstring for ControlPanel.
    """
    def __init__(self, document, actuator):
        super(ControlPanel, self).__init__()
        self.initUI(document, actuator)

    def initUI(self, document, actuator):
        # Setting up class parameters
        # the window has 640 x 480 pixels and is centered by default
        # now make the window visible
        self.show()

```

Aby uruchomić pojedynczy panel sterowania, zostanie utworzona instancja tej klasy o nazwie `panel`, z `kin_doc` _(obiekt dokumentu)_ oraz `drivers[0]` _(pierwsze z listy wiązań dotyczących prowadzenia)_ przekazanymi do tej instancji. Na koniec metoda `exec_()` klasy otwiera okno dialogowe.

```
panel = ControlPanel(kin_doc, drivers[0])
panel.exec_()

```

Aby obsłużyć więcej niż jeden sterownik, musimy sprawdzić listę sterowników i utworzyć instancję dla każdej pozycji na liście i przenieść bieżącą pozycję.

```
panel_list = []
for each_driver in drivers:
    panel = ControlPanel(kin_doc, each_driver)
    panel_list.append(panel)
panel.exec_()

```

Te linie zastępują polecenie `print()` w gałęzi _else_ funkcji `main()`.

Uwaga: Zebranie `panel_list` pozwala na uruchomienie wszystkich paneli jednocześnie. _(Nie potrafię jeszcze wyjaśnić tego zachowania...)_

Uruchomienie makra spowoduje wyświetlenie nowego, pustego okna dialogowego czekającego na widżety:

![Puste okno dialogowe](/images/Tutorial_KinCon-01.png)

**Dotychczasowe makrodefinicje ...**

```
#! python
# -*- coding: utf-8 -*-
# (c) 2021 Your name LGPL

# imports and constants
from PySide2.QtWidgets import (QDialog)

class ControlPanel(QDialog):
    """
    docstring for ControlPanel.
    """
    def __init__(self, document, actuator):
        super(ControlPanel, self).__init__()
        self.initUI(document, actuator)

    def initUI(self, document, actuator):
        # Setting up class parameters
        # the window has 640 x 480 pixels and is centered by default
        # now make the window visible
        self.show()

def findTheDrivingConstraints(document_object):
    # search through the Objects and find the driving constraint
    driver_list = []
    for each in document_object.Objects:
        if each.Label.endswith("Driver"):
            driving_constraint = each.Name
            driver_list.append(driving_constraint)
    return driver_list

def main():
    kin_doc = App.ActiveDocument # Kinematic Document
    drivers = findTheDrivingConstraints(kin_doc)
    if len(drivers) < 1:
        print("No driver found!")
    else:
        panel_list = []
        for each_driver in drivers:
            panel = ControlPanel(kin_doc, each_driver)
            panel_list.append(panel)
        panel.exec_()

if __name__ == "__main__":
    # This will be true only if the file is "executed"
    # but not if imported as a module
    main()

```

[Przewiń na górę strony](#top)

#### Ustawienie parametrów

Teraz przyszedł czas na wypełnienie metody `initUI()`:

```
...
    def initUI(self, document, actuator):
        # Setting up class parameters
        self.actuator = document.getObject(actuator)
        self.driver_type = self.getDriverType(self.actuator)
        # the window has 640 x 480 pixels and is centered by default
        # now make the window visible
        self.show()
...

```

`self.actuator` reprezentuje wiązanie napędowe, a `self.driver_type` przechowuje słowo kluczowe dla jego typu. To ostatnie jest używane do wyboru odpowiedniej właściwości z każdym wiązaniem.

##### Metoda getDriverType()

Do późniejszego użycia potrzebujemy typ sterownika _(Kąt, Odległość, Długość)_ i dlatego należy zdefiniować metodę `getDriverType()`:

```
...
    def getDriverType(self, constraint):
        ANGLE_CONSTRAINTS = [
            "PlaneCoincident",
            "AxialAlignment",
            "PlaneAlignment"
            ] # Angel constraints that use negative values, too
        ANGLE_DEG_CONSTRAINTS = [
            "Angle",
            ] # Angel constraints that use positive values only
        DISTANCE_CONSTRAINTS = [
            "PointDistance",
            "PointsDistance"
            ] # Lenght constraints that use positive values only
        if constraint.ConstraintType in ANGLE_CONSTRAINTS:
            return "Angle"
        elif constraint.ConstraintType in ANGLE_DEG_CONSTRAINTS:
            return "AnglePos"
        elif constraint.ConstraintType in DISTANCE_CONSTRAINTS:
            return "Distance"
        else:
            return "Length"
...

```

Metoda ta sprawdza, czy typ podanego wiązania można znaleźć na jednej z list i zwraca, który rodzaj wymiaru ma być kontrolowany.

Zakłada się, że w dokumencie kinematycznym sterownik jest zaznaczony poprawnie i działa, jeśli jest edytowany ręcznie. W tym przypadku nie ma potrzeby filtrowania wiązań geometrycznych takich jak Współliniowość czy Zbieżność punktu _(ale tutaj byłoby to uzasadnione ...)_.

##### Ustawienia okna

Rozmiar okna jest określony przez jego minimalny i maksymalny wymiar. Użycie tych samych wartości powoduje, że rozmiar jest stały.

Tytuł pokazuje nazwę sterownika i czy jest to kąt, odległość czy długość. Wreszcie okno ma pozostać na wierzchu wszystkich okien.

```
...
        # the window has 640 x 480 pixels and is centered by default
        #- set window dimensions
        self.setMaximumWidth(400)
        self.setMaximumHeight(200)
        self.setMinimumWidth(400)
        self.setMinimumHeight(200)
        self.setWindowTitle(self.actuator.Label + ": " + self.driver_type)
        self.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
        # now make the window visible
...

```

[Przewiń na górę strony](#top)

#### Ustawienie dodatkowych parametrów

Kolejnym krokiem jest wyodrębnienie aktualnej wartości sterownika i ustawienie domyślnych wartości początkowych i końcowych w zależności od typu sterownika.

Odległość nie może być ujemna i dokładnie zero stanowi zagadkę dla rozwiązania, dlatego wartość początkowa jest ustawiona na 0,001. Kąty przyjmują wartości ujemne i otrzymują wartości symetryczne. _(Czy długości przyjmują wartości ujemne trzeba ostatecznie udowodnić ...)_

Przyrostek jednostki musi zostać zachowany, aby na końcu zwrócić wartość do właściwości wiązanie. Odległości i długości wymagają wartości z jednostkami.

Radzenie sobie z jednostkami i wyświetlanie wartości jako ciągów w kilku widżetach wymaga dość często konwersji liczb na ciągi i odwrotnie.

Aby uzupełnić parametry ustawiamy domyślną liczbę kroków, które powinny być obliczane podczas automatyzacji ruchu, a jeśli przełącznik `self.sequence` jest ustawiony na wartość `True`, to przy każdym kroku ruchu będzie robione zdjęcie.

```
...
        self.steps_value = 10
        self.sequence = False
        if self.driver_type == "Angle":
            self.current_value = self.actuator.Angle
            self.start_value = (self.current_value - 15)
            self.end_value = (self.current_value + 15)
            self.unit_suffix = (" °")
        elif self.driver_type == "AnglePos":
            self.current_value = float(str(self.actuator.Angle)[:-4])
            self.start_value = 0.001 # Angle must not be <= 0 and >=180
            self.end_value = 179.999
            self.unit_suffix = (" °")
        elif self.driver_type == "Distance":
            self.current_value = float(str(self.actuator.Distance)[:-3])
            self.start_value = 0.001 # Distance must not be <= 0
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")
        else:
            self.current_value = float(str(self.actuator.Offset)[:-3])
            self.start_value = (self.current_value - 10)
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")
...

```

[Przewiń na górę strony](#top)

#### Etykiety

Teraz dodano trzy etykiety, które wyświetlają wartość początkową, końcową i bieżącą.

Najpierw należy zaimportować klasę `QLabel`, tzn. rozszerzyć listę importu w sposób następujący:

```
from PySide2.QtWidgets import (QDialog, QLabel)

```

Wracając do metody `initUI()` wstawiamy:

```
...
        # create some labels
        self.label_start = QLabel("", self)
        self.label_start.setFont("osifont") # set to a non-proportional font
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        self.label_start.setGeometry(QtCore.QRect(30, 15, 60, 25))

        self.label_end = QLabel("", self)
        self.label_end.setFont("osifont")
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        self.label_end.setGeometry(QtCore.QRect(320, 15, 60, 25))

        self.label_current = QLabel("", self)
        self.label_current.setFont("osifont")
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        self.label_current.setGeometry(QtCore.QRect(130, 15, 150, 25))
...

```

Umieszczenie odbywa się za pomocą dziedziczonej metody `setGeometry()`. W tym przypadku wykorzystywany jest opis prostokąta _(pozycja X, pozycja Y, szerokość, wysokość)_.

Pierwszy i trzeci wiersz można by połączyć, ale nie jest to zalecane ze względu na przejrzystość:

```
self.label_end = QLabel((str(round(self.end_value, 1)) + self.unit_suffix), self)

```

Uruchomienie makra z dokumentem zespołu kinematycznego spowoduje powstanie okna dialogowego jak poniżej:

![Okno dialogowe wyświetlające wartość początkową, wartość bieżącą i wartość końcową](/images/Tutorial_KinCon-02.png)

Okno dialogowe wyświetlające etykietę wiązania i typ sterownika w tytule oraz wartość początkową, wartość bieżącą i wartość końcową w pierwszej linii w obszarze głównym

**Dotychczasowe makrodefinicje ...**

```
#! python
# -*- coding: utf-8 -*-
# (c) 2021 Your name LGPL

# imports and constants
from PySide2.QtWidgets import (QDialog, QLabel)

class ControlPanel(QDialog):
    """
    docstring for ControlPanel.
    """
    def __init__(self, document, actuator):
        super(ControlPanel, self).__init__()
        self.initUI(document, actuator)

    def initUI(self, document, actuator):
        # Setting up class parameters
        self.actuator = document.getObject(actuator)
        self.driver_type = self.getDriverType(self.actuator)
        self.steps_value = 10
        self.sequence = False
        if self.driver_type == "Angle":
            self.current_value = self.actuator.Angle
            self.start_value = (self.current_value - 15)
            self.end_value = (self.current_value + 15)
            self.unit_suffix = (" °")
        elif self.driver_type == "AnglePos":
            self.current_value = float(str(self.actuator.Angle)[:-4])
            self.start_value = 0.001 # Angle must not be <= 0 and >=180
            self.end_value = 179.999
            self.unit_suffix = (" °")
        elif self.driver_type == "Distance":
            self.current_value = float(str(self.actuator.Distance)[:-3])
            self.start_value = 0.001 # Distance must not be <= 0
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")
        else:
            self.current_value = float(str(self.actuator.Offset)[:-3])
            self.start_value = (self.current_value - 10)
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")

        # the window has 640 x 480 pixels and is centered by default
        #- set window dimensions
        self.setMaximumWidth(400)
        self.setMaximumHeight(200)
        self.setMinimumWidth(400)
        self.setMinimumHeight(200)
        self.setWindowTitle(self.actuator.Label + ": " + self.driver_type)
        self.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)

        # create some labels
        self.label_start = QLabel("", self)
        self.label_start.setFont("osifont") # set to a non-proportional font
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        self.label_start.setGeometry(QtCore.QRect(30, 15, 60, 25))

        self.label_end = QLabel("", self)
        self.label_end.setFont("osifont")
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        self.label_end.setGeometry(QtCore.QRect(320, 15, 60, 25))

        self.label_current = QLabel("", self)
        self.label_current.setFont("osifont")
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        self.label_current.setGeometry(QtCore.QRect(130, 15, 150, 25))

        # now make the window visible
        self.show()

    def getDriverType(self, constraint):
        ANGLE_CONSTRAINTS = [
            "PlaneCoincident",
            "AxialAlignment",
            "PlaneAlignment"
            ] # Angel constraints that use negative values, too
        ANGLE_DEG_CONSTRAINTS = [
            "Angle",
            ] # Angel constraints that use positive values only
        DISTANCE_CONSTRAINTS = [
            "PointDistance",
            "PointsDistance"
            ]
        if constraint.ConstraintType in ANGLE_CONSTRAINTS:
            return "Angle"
        elif constraint.ConstraintType in ANGLE_DEG_CONSTRAINTS:
            return "AnglePos"
        elif constraint.ConstraintType in DISTANCE_CONSTRAINTS:
            return "Distance"
        else:
            return "Length"

# End of ControlPanel()
# Main section below:

def findTheDrivingConstraints(document_object):
    # search through the Objects and find the driving constraint
    driver_list = []
    for each in document_object.Objects:
        if each.Label.endswith("Driver"):
            driving_constraint = each.Name
            driver_list.append(driving_constraint)
    return driver_list

def main():
    kin_doc = App.ActiveDocument # Kinematic Document
    drivers = findTheDrivingConstraints(kin_doc)
    if len(drivers) < 1:
        print("No driver found!")
    else:
        panel_list = []
        for each_driver in drivers:
            panel = ControlPanel(kin_doc, each_driver)
            panel_list.append(panel)
        panel.exec_()

if __name__ == "__main__":
    # This will be true only if the file is "executed"
    # but not if imported as a module
    main()

```

[Przewiń na górę strony](#top)

#### Suwak

Aby zmienić bieżącą wartość na dowolną liczbę między wartością początkową a końcową, przydatny byłby widżet suwaka.

Najpierw należy zaimportować klasę `QSlider`, tzn. rozszerzyć listę importu w sposób następujący:

```
from PySide2.QtWidgets import (QDialog, QLabel, QSlider)

```

Wracając do metody `initUI()` i zaraz po sekcji _labels_ wstawiamy:

```
...
        # Horizontal slider
        self.actuator_slider = QSlider(self)                             # create horizontalSlider
        self.actuator_slider.setOrientation(QtCore.Qt.Horizontal)        # orientation horizontal
        self.actuator_slider.setGeometry(QtCore.QRect(30, 50, 330, 25))  # position coordinates
        self.actuator_slider.setObjectName("horizontalSlider")           # object name
        self.actuator_slider.setInvertedAppearance(False)                # default: right to left
        self.actuator_slider.setRange(0, 100)                            # default: (0, 99)
        self.actuator_slider.setValue(self.current_value / self.stepRatio())
        self.actuator_slider.valueChanged.connect(self.onActuatorSlider)
...

```

Przycisk suwaka jest umieszczany za pomocą metody `setValue()`. Jego wartość musi być obliczona z bieżącej wartości i współczynnika kroku. Stosunek ten musi być obliczany przy każdej zmianie wartości początkowej lub końcowej, dlatego po metodzie `getDriverType()` wstawiamy kolejną metodę.

Praca z proporcją zamiast zmiany wartości minimalnych i maksymalnych suwaka ma tę zaletę, że pozwala na uzyskanie większej rozdzielczości dla małych wartości.

```
...
    def stepRatio(self):
        ratio = (self.end_value - self.start_value) / 100
        return ratio
...

```

A po niej przychodzi kolejna metoda określająca, co zrobić, gdy zmieni się pozycja suwaka lub jego wartość. Metoda `onActuatorSlider()` jest wywoływana przez metodę `connect()`, która jako argument przekazuje również wartość suwaka.

Przelicza bieżącą wartość z pozycji suwaka, przepisuje tekst etykiety `self.label_current` i zmienia właściwość wiązania zgodnie z typem sterownika.

Uruchomienie polecenia `"asm3CmdQuickSolve"` uruchamia solver do ponownego ułożenia części zespołu ze zmienioną wartością.

```
...
    def onActuatorSlider(self, slider_value):
        self.current_value = slider_value * self.stepRatio() + self.start_value
        if self.driver_type == "Angle":
            self.actuator.Angle = self.current_value
        elif self.driver_type == "AnglePos":
            self.actuator.Angle = self.current_value
        elif self.driver_type == "Distance":
            self.actuator.Distance = self.current_value
        else:
            self.actuator.Offset = self.current_value
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        Gui.runCommand("asm3CmdQuickSolve", 0)
...

```

Okno dialogowe z suwakiem powinno wyglądać tak i jest gotowe do sterowania ruchem:

![Dwa okna dialogowe z suwakiem](/images/Tutorial_KinCon-03.png)

Okna dialogowez dodanym suwakiem, jedno dla sterownika _Angle_ i jedno dla sterownika _Distance_.

Możemy uruchomić okno dialogowe dla dowolnego otwartego dokumentu, nie będą one ze sobą kolidować.

[Przewiń na górę strony](#top)

#### Pola tekstowe wprowadzania danych

Do ustawienia wartości początkowej i końcowej używamy widżetu edycji linii.

Najpierw należy zaimportować klasę `QLineEdit`, tzn. rozszerzyć listę importu w sposób następujący:

```
from PySide2.QtWidgets import (QDialog, QLabel, QSlider, QLineEdit)

```

Z powrotem w metodzie `initUI()` i pomiędzy etykietami a sekcjami suwaków wstawiamy:

```
...
        # text input field - Start value
        self.entry_start = QLineEdit(self)
        self.entry_start.setText(str(round(self.start_value, 1)))
        self.entry_start.setGeometry(QtCore.QRect(30, 80, 50, 25))
        self.entry_start.textChanged[str].connect(self.onEntryStart)

        # text input field - End value
        self.entry_end = QLineEdit(self)
        self.entry_end.setText(str(round(self.end_value, 1)))
        self.entry_end.setGeometry(QtCore.QRect(320, 80, 50, 25))
        self.entry_end.textChanged[str].connect(self.onEntryEnd)
...

```

Pola wpisów wyświetlają domyślne wartości początkowe i końcowe. Nie są one kompletne, dopóki nie dodamy metod radzących sobie ze zmienionymi wpisami. Zrobią to metody `self.onEntryStart()` i `self.onEntryEnd()`, które są wstawione pomiędzy metody `self.stepRatio()` i `self.onActuatorSlider()`.

```
...
    def onEntryStart(self, new_start):
        self.start_value = float(new_start)
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        # Update the slider
        slider_value = ((self.current_value - self.start_value) / self.stepRatio())
        self.actuator_slider.setValue(slider_value)

    def onEntryEnd(self, new_end):
        self.end_value = float(new_end)
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        # Update the slider
        slider_value = ((self.current_value - self.start_value) / self.stepRatio())
        self.actuator_slider.setValue(slider_value)
...

```

Oba konwertują otrzymaną wartość łańcuchową na liczbę zmiennoprzecinkową i odpowiednio zmieniają `self.start_value` lub `self.end_value` oraz odpowiadającą im etykietę. Po tym wartość suwaka jest aktualizowana.

Okno dialogowe z polami do wprowadzania tekstu powinno wyglądać tak i jest gotowe do zmiany zakresu ruchu:

![Dwa okna dialogowe z polami do edycji linii](/images/Tutorial_KinCon-04.png)

Okna dialogowe z polami edycji linii, ponownie dla sterownika kąta i odległości.

**Dotychczasowe makrodefinicje ...**

```
#! python
# -*- coding: utf-8 -*-
# (c) 2021 Your name LGPL

# imports and constants
from PySide2.QtWidgets import (QDialog, QLabel, QSlider, QLineEdit)

class ControlPanel(QDialog):
    """
    docstring for ControlPanel.
    """
    def __init__(self, document, actuator):
        super(ControlPanel, self).__init__()
        self.initUI(document, actuator)

    def initUI(self, document, actuator):
        # Setting up class parameters
        self.actuator = document.getObject(actuator)
        self.driver_type = self.getDriverType(self.actuator)
        self.steps_value = 10
        self.sequence = False
        if self.driver_type == "Angle":
            self.current_value = self.actuator.Angle
            self.start_value = (self.current_value - 15)
            self.end_value = (self.current_value + 15)
            self.unit_suffix = (" °")
        elif self.driver_type == "AnglePos":
            self.current_value = float(str(self.actuator.Angle)[:-4])
            self.start_value = 0.001 # Angle must not be <= 0 and >=180
            self.end_value = 179.999
            self.unit_suffix = (" °")
        elif self.driver_type == "Distance":
            self.current_value = float(str(self.actuator.Distance)[:-3])
            self.start_value = 0.001 # Distance must not be <= 0
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")
        else:
            self.current_value = float(str(self.actuator.Offset)[:-3])
            self.start_value = (self.current_value - 10)
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")

        # the window has 640 x 480 pixels and is centered by default
        #- set window dimensions
        self.setMaximumWidth(400)
        self.setMaximumHeight(200)
        self.setMinimumWidth(400)
        self.setMinimumHeight(200)
        self.setWindowTitle(self.actuator.Label + ": " + self.driver_type)
        self.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)

        # create some labels
        self.label_start = QLabel("", self)
        self.label_start.setFont("osifont") # set to a non-proportional font
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        self.label_start.setGeometry(QtCore.QRect(30, 15, 60, 25))

        self.label_end = QLabel("", self)
        self.label_end.setFont("osifont")
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        self.label_end.setGeometry(QtCore.QRect(320, 15, 60, 25))

        self.label_current = QLabel("", self)
        self.label_current.setFont("osifont")
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        self.label_current.setGeometry(QtCore.QRect(130, 15, 150, 25))

        # create some input elements

        # text input field - Start value
        self.entry_start = QLineEdit(self)
        self.entry_start.setText(str(round(self.start_value, 1)))
        self.entry_start.setGeometry(QtCore.QRect(30, 80, 50, 25))
        self.entry_start.textChanged[str].connect(self.onEntryStart)

        # text input field - End value
        self.entry_end = QLineEdit(self)
        self.entry_end.setText(str(round(self.end_value, 1)))
        self.entry_end.setGeometry(QtCore.QRect(320, 80, 50, 25))
        self.entry_end.textChanged[str].connect(self.onEntryEnd)

        # Horizontal slider
        self.actuator_slider = QSlider(self)                             # create horizontalSlider
        self.actuator_slider.setOrientation(QtCore.Qt.Horizontal)        # orientation horizontal
        self.actuator_slider.setGeometry(QtCore.QRect(30, 50, 330, 25))  # position coordinates
        self.actuator_slider.setObjectName("horizontalSlider")           # object name
        self.actuator_slider.setInvertedAppearance(False)                # default: right to left
        self.actuator_slider.setRange(0, 100)                            # default: (0, 99)
        self.actuator_slider.setValue(self.current_value / self.stepRatio())
        self.actuator_slider.valueChanged.connect(self.onActuatorSlider)

        # now make the window visible
        self.show()

    def getDriverType(self, constraint):
        ANGLE_CONSTRAINTS = [
            "PlaneCoincident",
            "AxialAlignment",
            "PlaneAlignment"
            ] # Angel constraints that use negative values, too
        ANGLE_DEG_CONSTRAINTS = [
            "Angle",
            ] # Angel constraints that use positive values only
        DISTANCE_CONSTRAINTS = [
            "PointDistance",
            "PointsDistance"
            ] # Lenght constraints that use positive values only
        if constraint.ConstraintType in ANGLE_CONSTRAINTS:
            return "Angle"
        elif constraint.ConstraintType in ANGLE_DEG_CONSTRAINTS:
            return "AnglePos"
        elif constraint.ConstraintType in DISTANCE_CONSTRAINTS:
            return "Distance"
        else:
            return "Length"

    def stepRatio(self):
        ratio = (self.end_value - self.start_value) / 100
        return ratio

    def onEntryStart(self, new_start):
        self.start_value = float(new_start)
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        # Update the slider
        slider_value = ((self.current_value - self.start_value) / self.stepRatio())
        self.actuator_slider.setValue(slider_value)

    def onEntryEnd(self, new_end):
        self.end_value = float(new_end)
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        # Update the slider
        slider_value = ((self.current_value - self.start_value) / self.stepRatio())
        self.actuator_slider.setValue(slider_value)

    def onActuatorSlider(self, slider_value):
        self.current_value = slider_value * self.stepRatio() + self.start_value
        if self.driver_type == "Angle":
            self.actuator.Angle = self.current_value
        elif self.driver_type == "AnglePos":
            self.actuator.Angle = self.current_value
        elif self.driver_type == "Distance":
            self.actuator.Distance = self.current_value
        else:
            self.actuator.Offset = self.current_value
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        Gui.runCommand("asm3CmdQuickSolve", 0)
        print(slider_value, self.current_value)

# End of ControlPanel()
# Main section below:

def findTheDrivingConstraints(document_object):
    # search through the Objects and find the driving constraint
    driver_list = []
    for each in document_object.Objects:
        if each.Label.endswith("Driver"):
            driving_constraint = each.Name
            driver_list.append(driving_constraint)
    return driver_list

def main():
    kin_doc = App.ActiveDocument # Kinematic Document
    drivers = findTheDrivingConstraints(kin_doc)
    if len(drivers) < 1:
        print("No driver found!")
    else:
        panel_list = []
        for each_driver in drivers:
            panel = ControlPanel(kin_doc, each_driver)
            panel_list.append(panel)
        panel.exec_()

if __name__ == "__main__":
    # This will be true only if the file is "executed"
    # but not if imported as a module
    main()

```

[Przewiń na górę strony](#top)

### Ruch

Aby wprawić zespół w ruch potrzebujemy:

- Przyciski do wyzwalania ruchu w pożądanym kierunku.
- Pole wejściowe do zmiany liczby kroków dla szybszych lub bardziej płynnych ruchów.
- Pole wyboru do wskazania, czy chcemy wykonać sekwencję zdjęć.

#### Przyciski w przód i w tył

Aby automatycznie przesuwać części montażowe, potrzebujemy dwóch przycisków do wyzwalania ruchów, jednego w kierunku pozycji początkowej i jednego w kierunku pozycji końcowej. Te dwa oraz przycisk zamykający wykorzystają widżet `QPushButton`.

Małe złożenia obliczają się trochę za szybko i pokazują skoki zamiast płynnego ruchu. Aby go spowolnić, używamy metody `sleep()` modułu `time`, który najpierw trzeba zaimportować.

Kolejny import i kolejny widżet:

```
import time
from PySide2.QtWidgets import (QDialog, QLabel, QSlider, QLineEdit, QPushButton)

```

Wracając do metody `initUI()` wstawiamy przyciski po sekcji _slider_:

```
...
        # forward button
        self.forward_button = QPushButton(">->", self)
        self.forward_button.setGeometry(QtCore.QRect(240, 80, 50, 25))
        self.forward_button.setAutoDefault(False)
        self.forward_button.clicked.connect(self.onForward)
        # backward button
        self.backward_button = QPushButton("<-<", self)
        self.backward_button.setGeometry(QtCore.QRect(100, 80, 50, 25))
        self.backward_button.setAutoDefault(False)
        self.backward_button.clicked.connect(self.onBackward)
        # close button
        self.close_button = QPushButton("Close window", self)
        self.close_button.setGeometry(QtCore.QRect(120, 160, 130, 25))
        self.close_button.setAutoDefault(False)
        self.close_button.clicked.connect(self.onClose)
...

```

Metody zajmujące się wciskanymi przyciskami to `self.onForward()`, `self.onBackward()` oraz `self.onClose()`. Są one wstawiane po metodzie `onActuatorSlider()`.

```
...
    def onForward(self):
        steps_left = self.steps_value
        print(self.steps_value)
        step = ((self.end_value - self.current_value) / steps_left)
        while steps_left > 0:
            self.current_value += step
            slider_value = ((self.current_value - self.start_value) / self.stepRatio())
            self.actuator_slider.setValue(slider_value)
            time.sleep(0.2)
            steps_left -= 1
        self.actuator_slider.setValue(100)

    def onBackward(self):
        steps_left = self.steps_value
        step = ((self.current_value - self.start_value) / steps_left)
        while steps_left > 0:
            self.current_value -= step
            slider_value = ((self.current_value - self.start_value) / self.stepRatio())
            self.actuator_slider.setValue(slider_value)
            time.sleep(0.2)
            steps_left -= 1
        self.actuator_slider.setValue(0)

    def onClose(self):
        self.result = "Closed"
        self.close()
...

```

Metoda `self.onClose()` wywołuje dziedziczoną metodę `self.close()`, która po prostu zamyka okno dialogowe i tym samym kończy działanie makrodefinicji.

Zarówno `self.onForward()` jak i `self.onBackward()` liczą kroki, które pozostały do wykonania, aby osiągnąć żądaną pozycję i obliczają długość kroku zgodnie na podstawie ich liczby. Wstępnie przyjmiemy domyślną liczbę 10 kroków.

Każda runda pętli _while_ zwiększa / zmniejsza bieżącą wartość i aktualizuje wartości suwaków, co powoduje uruchomienie `onActuatorSlider()` w tle _(patrz [Akapit Suwak](#Suwak))_. Po przerwie, aby komputer dostarczył kolejny zaktualizowany widok 3D, odliczanie kroków pozostałych do przejścia kończy pętlę.

Gdy nie ma już żadnych kroków, suwak jest ustawiany na pierwszą / ostatnią pozycję, tak na wszelki wypadek, gdyby wystąpił błąd zaokrąglenia.

Okno dialogowe z przyciskami powinno wyglądać tak i można teraz przesunąć zespół o 10 kroków w kierunku żądanej pozycji początkowej / końcowej:

![Okno dialogowe z przyciskami](/images/Tutorial_KinCon-05.png)

Okno dialogowe z przyciskami.

**Dotychczasowe makrodefinicje ...**

```
#! python
# -*- coding: utf-8 -*-
# (c) 2021 Your name LGPL

# imports and constants
import time
from PySide2.QtWidgets import (QDialog, QLabel, QSlider, QLineEdit, QPushButton)

class ControlPanel(QDialog):
    """
    docstring for ControlPanel.
    """
    def __init__(self, document, actuator):
        super(ControlPanel, self).__init__()
        self.initUI(document, actuator)

    def initUI(self, document, actuator):
        # Setting up class parameters
        self.actuator = document.getObject(actuator)
        self.driver_type = self.getDriverType(self.actuator)
        self.steps_value = 10
        self.sequence = False
        if self.driver_type == "Angle":
            self.current_value = self.actuator.Angle
            self.start_value = (self.current_value - 15)
            self.end_value = (self.current_value + 15)
            self.unit_suffix = (" °")
        elif self.driver_type == "AnglePos":
            self.current_value = float(str(self.actuator.Angle)[:-4])
            self.start_value = 0.001 # Angle must not be <= 0 and >=180
            self.end_value = 179.999
            self.unit_suffix = (" °")
        elif self.driver_type == "Distance":
            self.current_value = float(str(self.actuator.Distance)[:-3])
            self.start_value = 0.001 # Distance must not be <= 0
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")
        else:
            self.current_value = float(str(self.actuator.Offset)[:-3])
            self.start_value = (self.current_value - 10)
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")

        # the window has 640 x 480 pixels and is centered by default
        #- set window dimensions
        self.setMaximumWidth(400)
        self.setMaximumHeight(200)
        self.setMinimumWidth(400)
        self.setMinimumHeight(200)
        self.setWindowTitle(self.actuator.Label + ": " + self.driver_type)
        self.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)

        # create some labels
        self.label_start = QLabel("", self)
        self.label_start.setFont("osifont") # set to a non-proportional font
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        self.label_start.setGeometry(QtCore.QRect(30, 15, 60, 25))

        self.label_end = QLabel("", self)
        self.label_end.setFont("osifont")
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        self.label_end.setGeometry(QtCore.QRect(320, 15, 60, 25))

        self.label_current = QLabel("", self)
        self.label_current.setFont("osifont")
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        self.label_current.setGeometry(QtCore.QRect(130, 15, 150, 25))

        # create some input elements

        # text input field - Start value
        self.entry_start = QLineEdit(self)
        self.entry_start.setText(str(round(self.start_value, 1)))
        self.entry_start.setGeometry(QtCore.QRect(30, 80, 50, 25))
        self.entry_start.textChanged[str].connect(self.onEntryStart)

        # text input field - End value
        self.entry_end = QLineEdit(self)
        self.entry_end.setText(str(round(self.end_value, 1)))
        self.entry_end.setGeometry(QtCore.QRect(320, 80, 50, 25))
        self.entry_end.textChanged[str].connect(self.onEntryEnd)

        # Horizontal slider
        self.actuator_slider = QSlider(self)                             # create horizontalSlider
        self.actuator_slider.setOrientation(QtCore.Qt.Horizontal)        # orientation horizontal
        self.actuator_slider.setGeometry(QtCore.QRect(30, 50, 330, 25))  # position coordinates
        self.actuator_slider.setObjectName("horizontalSlider")           # object name
        self.actuator_slider.setInvertedAppearance(False)                # default: right to left
        self.actuator_slider.setRange(0, 100)                            # default: (0, 99)
        self.actuator_slider.setValue(self.current_value / self.stepRatio())
        self.actuator_slider.valueChanged.connect(self.onActuatorSlider)

        # forward button
        self.forward_button = QPushButton(">->", self)
        self.forward_button.setGeometry(QtCore.QRect(240, 80, 50, 25))
        self.forward_button.setAutoDefault(False)
        self.forward_button.clicked.connect(self.onForward)
        # backward button
        self.backward_button = QPushButton("<-<", self)
        self.backward_button.setGeometry(QtCore.QRect(100, 80, 50, 25))
        self.backward_button.setAutoDefault(False)
        self.backward_button.clicked.connect(self.onBackward)
        # close button
        self.close_button = QPushButton("Close window", self)
        self.close_button.setGeometry(QtCore.QRect(120, 160, 130, 25))
        self.close_button.setAutoDefault(False)
        self.close_button.clicked.connect(self.onClose)

        # now make the window visible
        self.show()

    def getDriverType(self, constraint):
        ANGLE_CONSTRAINTS = [
            "PlaneCoincident",
            "AxialAlignment",
            "PlaneAlignment"
            ] # Angel constraints that use negative values, too
        ANGLE_DEG_CONSTRAINTS = [
            "Angle",
            ] # Angel constraints that use positive values only
        DISTANCE_CONSTRAINTS = [
            "PointDistance",
            "PointsDistance"
            ] # Lenght constraints that use positive values only
        if constraint.ConstraintType in ANGLE_CONSTRAINTS:
            return "Angle"
        elif constraint.ConstraintType in ANGLE_DEG_CONSTRAINTS:
            return "AnglePos"
        elif constraint.ConstraintType in DISTANCE_CONSTRAINTS:
            return "Distance"
        else:
            return "Length"

    def stepRatio(self):
        ratio = (self.end_value - self.start_value) / 100
        return ratio

    def onEntryStart(self, new_start):
        self.start_value = float(new_start)
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        # Update the slider
        slider_value = ((self.current_value - self.start_value) / self.stepRatio())
        self.actuator_slider.setValue(slider_value)

    def onEntryEnd(self, new_end):
        self.end_value = float(new_end)
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        # Update the slider
        slider_value = ((self.current_value - self.start_value) / self.stepRatio())
        self.actuator_slider.setValue(slider_value)

    def onActuatorSlider(self, slider_value):
        self.current_value = slider_value * self.stepRatio() + self.start_value
        if self.driver_type == "Angle":
            self.actuator.Angle = self.current_value
        elif self.driver_type == "AnglePos":
            self.actuator.Angle = self.current_value
        elif self.driver_type == "Distance":
            self.actuator.Distance = self.current_value
        else:
            self.actuator.Offset = self.current_value
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        FreeCADGui.updateGui() # screen update between steps
        Gui.runCommand("asm3CmdQuickSolve", 0)

    def onForward(self):
        steps_left = self.steps_value
        print(self.steps_value)
        step = ((self.end_value - self.current_value) / steps_left)
        while steps_left > 0:
            self.current_value += step
            slider_value = ((self.current_value - self.start_value) / self.stepRatio())
            self.actuator_slider.setValue(slider_value)
            time.sleep(0.2)
            steps_left -= 1
        self.actuator_slider.setValue(100)

    def onBackward(self):
        steps_left = self.steps_value
        step = ((self.current_value - self.start_value) / steps_left)
        while steps_left > 0:
            self.current_value -= step
            slider_value = ((self.current_value - self.start_value) / self.stepRatio())
            self.actuator_slider.setValue(slider_value)
            time.sleep(0.2)
            steps_left -= 1
        self.actuator_slider.setValue(0)

    def onClose(self):
        self.result = "Closed"
        self.close()

# End of ControlPanel()
# Main section below:

def findTheDrivingConstraints(document_object):
    # search through the Objects and find the driving constraint
    driver_list = []
    for each in document_object.Objects:
        if each.Label.endswith("Driver"):
            driving_constraint = each.Name
            driver_list.append(driving_constraint)
    return driver_list

def main():
    kin_doc = App.ActiveDocument # Kinematic Document
    drivers = findTheDrivingConstraints(kin_doc)
    if len(drivers) < 1:
        print("No driver found!")
    else:
        panel_list = []
        for each_driver in drivers:
            panel = ControlPanel(kin_doc, each_driver)
            panel_list.append(panel)
        panel.exec_()

if __name__ == "__main__":
    # This will be true only if the file is "executed"
    # but not if imported as a module
    main()

```

[Przewiń na górę strony](#top)

#### Liczba kroków

Domyślnym ustawieniem jest uzyskanie szybkiego wrażenia, czy zespół porusza się zgodnie z oczekiwaniami, bez marnowania zbyt wiele czasu obliczeniowego.

Jeśli części skaczą, a nie poruszają się płynnie, lub jeśli sterowniki oparte na kątach mają tendencję do powodowania problemów, gdy różnica między dwoma kątami jest zbyt duża, to oba te przypadki można naprawić poprzez zwiększenie liczby kroków.

I tak kolejny widżet edycji linii jest używany do zmiany liczby kroków _(umieszczony po istniejących widżetach edycji linii)_:

```
...
        # text input field - number of steps
        self.entry_steps = QLineEdit(self)
        self.entry_steps.setText(str(int(self.steps_value)))
        self.entry_steps.setGeometry(QtCore.QRect(180, 80, 50, 25))
        self.entry_steps.textChanged[str].connect(self.onEntrySteps)
...

```

Powiązana metoda `self.onEntrySteps()` po prostu wypełnia parametr `self.step_value` wprowadzoną wartością. Jest ona wstawiana po metodzie `onEntryEnd()`.

```
...
    def onEntrySteps(self, new_steps):
        self.steps_value = int(new_steps)
...

```

Okno dialogowe umożliwiające zmianę liczby kroków powinno wyglądać następująco:

![Okno dialogowe z kolejnym polem do wpisywania tekstu](/images/Tutorial_KinCon-06.png)

Okno dialogowe z następnym polem do wpisywania tekstu

[Przewiń na górę strony](#top)

#### Sekwencja obrazów

Gdy ruch wykonywany przez złożenie spełnia nasze oczekiwania, możemy zrobić zdjęcie każdego kroku. Powstała sekwencja zdjęć może posłużyć do stworzenia krótkiej animacji gif.

Do realizacji tej funkcjonalności potrzebujemy widżetu `QCheckBox`, oraz katalogu do przechowywania obrazków.

Jeszcze jeden import i widżet:

```
import time
from PySide2.QtWidgets import (QDialog, QLabel, QSlider, QLineEdit, QPushButton, QCheckBox)

```

Wracając do metody `initUI()` wstawiamy pole wyboru po sekcji suwaka:

```
...
        # output check box
        self.output_check = QCheckBox(self)
        self.output_check.setGeometry(QtCore.QRect(40, 120, 300, 25))
        self.output_check.setChecked(False)
        self.output_check.setText("Check to record an image sequence")
        self.output_check.setObjectName("checkBoxOutput")
        self.output_check.clicked.connect(self.onOutputClicked)
...

```

Metoda `onOutputClicked()` synchronizuje parametr `self.sequence` i wyświetlenie znaku kontrolnego.

```
...
    def onOutputClicked(self):
        if self.sequence == True:
            self.sequence = False
            self.output_check.setChecked(False)
        else:
            self.sequence = True
            self.output_check.setChecked(True)
...

```

Do określenia parametrów wyjściowych używamy metody `output()`:

```
...
    def output(self, counter):
        if (self.sequence == True):
            image_path = ".../FreeCAD/ScreenShots/Sequence"
            file_tag = ".png"
            height = 640
            width = 480
            background = "Transparent"
            # dealing with leading zeros
            if (counter > 999) or (counter < 0):
                print("Out of Range")
            elif (counter < 10):
                number = "00" + str(counter)
            elif (counter < 100):
                number = "0" + str(counter)
            else:
                number = str(counter)
            # Screen shot
            Gui.activeDocument().activeView().saveImage(image_path + number + file_tag, height, width, background)
...

```

Przede wszystkim ścieżka do obrazów musi być dostosowana do Twojego systemu operacyjnego. Ostatnią częścią jest określenie nazwy obrazu bez numeru bieżącego i tagu pliku. Na razie trzeba to zrobić samodzielnie.

Następnie podążaj za tagiem pliku, aby zakończyć nazwę obrazu, nadać wysokość i szerokość obrazu oraz sposób wypełnienia tła (`"Bieżące"` _(tło widoku 3D)_, `"Białe"`, `"Czarne"` lub `"Przezroczyste"`).

Aby zawsze mieć trzycyfrową liczbę, należy przed parametrem licznika umieścić wiodące zera.

W końcu oskryptowana wersja polecenia ![](/images/Std_ViewScreenShot.svg) [Zrzut ekranu](/Std_ViewScreenShot/pl "Std ViewScreenShot/pl") jest używana do robienia zdjęcia na podstawie wspomnianych parametrów.

Nadal nie zrobiono zdjęć!!! Nie ma problemu, ponieważ ta metoda nie została jeszcze wywołana, a więc musimy wstawić wywołanie w pętli _while_ `onForward()` i `onBackward()`. Zaraz po `time.sleep(0,2)` wstawiamy tę linię:

```
...
            self.output(steps_left)
...

```

Teraz makrodefinicja powinno być gotowa do sterowania złożeniem oraz do robienia zdjęć do animowanego gifa.

Końcowa wersja okna dialogowego:

![Dialog window finished](/images/Tutorial_KinCon-07.png)

Ukończone okno dialogowe.

**I wreszcie całe makro**

**Nie zapomnij ustawić ścieżki w metodzie output()!**

```
#! python
# -*- coding: utf-8 -*-
# (c) 2021 Your name LGPL

# imports and constants
import time
from PySide2.QtWidgets import (QDialog, QLabel, QSlider, QLineEdit, QPushButton, QCheckBox)

class ControlPanel(QDialog):
    """
    docstring for ControlPanel.
    """
    def __init__(self, document, actuator):
        super(ControlPanel, self).__init__()
        self.initUI(document, actuator)

    def initUI(self, document, actuator):
        # Setting up class parameters
        self.actuator = document.getObject(actuator)
        self.driver_type = self.getDriverType(self.actuator)
        self.steps_value = 10
        self.sequence = False
        if self.driver_type == "Angle":
            self.current_value = self.actuator.Angle
            self.start_value = (self.current_value - 15)
            self.end_value = (self.current_value + 15)
            self.unit_suffix = (" °")
        elif self.driver_type == "AnglePos":
            self.current_value = float(str(self.actuator.Angle)[:-4])
            self.start_value = 0.001 # Angle must not be <= 0 and >=180
            self.end_value = 179.999
            self.unit_suffix = (" °")
        elif self.driver_type == "Distance":
            self.current_value = float(str(self.actuator.Distance)[:-3])
            self.start_value = 0.001 # Distance must not be <= 0
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")
        else:
            self.current_value = float(str(self.actuator.Offset)[:-3])
            self.start_value = (self.current_value - 10)
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")

        # the window has 640 x 480 pixels and is centered by default
        #- set window dimensions
        self.setMaximumWidth(400)
        self.setMaximumHeight(200)
        self.setMinimumWidth(400)
        self.setMinimumHeight(200)
        self.setWindowTitle(self.actuator.Label + ": " + self.driver_type)
        self.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)

        # create some labels
        self.label_start = QLabel("", self)
        self.label_start.setFont("osifont") # set to a non-proportional font
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        self.label_start.setGeometry(QtCore.QRect(30, 15, 60, 25))

        self.label_end = QLabel("", self)
        self.label_end.setFont("osifont")
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        self.label_end.setGeometry(QtCore.QRect(320, 15, 60, 25))

        self.label_current = QLabel("", self)
        self.label_current.setFont("osifont")
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        self.label_current.setGeometry(QtCore.QRect(130, 15, 150, 25))

        # create some input elements

        # text input field - Start value
        self.entry_start = QLineEdit(self)
        self.entry_start.setText(str(round(self.start_value, 1)))
        self.entry_start.setGeometry(QtCore.QRect(30, 80, 50, 25))
        self.entry_start.textChanged[str].connect(self.onEntryStart)

        # text input field - End value
        self.entry_end = QLineEdit(self)
        self.entry_end.setText(str(round(self.end_value, 1)))
        self.entry_end.setGeometry(QtCore.QRect(320, 80, 50, 25))
        self.entry_end.textChanged[str].connect(self.onEntryEnd)

        # text input field - number of steps
        self.entry_steps = QLineEdit(self)
        self.entry_steps.setText(str(int(self.steps_value)))
        self.entry_steps.setGeometry(QtCore.QRect(180, 80, 50, 25))
        self.entry_steps.textChanged[str].connect(self.onEntrySteps)

        # Horizontal slider
        self.actuator_slider = QSlider(self)                             # create horizontalSlider
        self.actuator_slider.setOrientation(QtCore.Qt.Horizontal)        # orientation horizontal
        self.actuator_slider.setGeometry(QtCore.QRect(30, 50, 330, 25))  # position coordinates
        self.actuator_slider.setObjectName("horizontalSlider")           # object name
        self.actuator_slider.setInvertedAppearance(False)                # default: right to left
        self.actuator_slider.setRange(0, 100)                            # default: (0, 99)
        self.actuator_slider.setValue(self.current_value / self.stepRatio())
        self.actuator_slider.valueChanged.connect(self.onActuatorSlider)

        # output check box
        self.output_check = QCheckBox(self)
        self.output_check.setGeometry(QtCore.QRect(40, 120, 300, 25))
        self.output_check.setChecked(False)
        self.output_check.setText("Check to record an image sequence")
        self.output_check.setObjectName("checkBoxOutput")
        self.output_check.clicked.connect(self.onOutputClicked)

        # forward button
        self.forward_button = QPushButton(">->", self)
        self.forward_button.setGeometry(QtCore.QRect(240, 80, 50, 25))
        self.forward_button.setAutoDefault(False)
        self.forward_button.clicked.connect(self.onForward)
        # backward button
        self.backward_button = QPushButton("<-<", self)
        self.backward_button.setGeometry(QtCore.QRect(100, 80, 50, 25))
        self.backward_button.setAutoDefault(False)
        self.backward_button.clicked.connect(self.onBackward)
        # close button
        self.close_button = QPushButton("Close window", self)
        self.close_button.setGeometry(QtCore.QRect(120, 160, 130, 25))
        self.close_button.setAutoDefault(False)
        self.close_button.clicked.connect(self.onClose)

        # now make the window visible
        self.show()

    def getDriverType(self, constraint):
        ANGLE_CONSTRAINTS = [
            "PlaneCoincident",
            "AxialAlignment",
            "PlaneAlignment"
            ] # Angel constraints that use negative values, too
        ANGLE_DEG_CONSTRAINTS = [
            "Angle",
            ] # Angel constraints that use positive values only
        DISTANCE_CONSTRAINTS = [
            "PointDistance",
            "PointsDistance"
            ] # Lenght constraints that use positive values only
        if constraint.ConstraintType in ANGLE_CONSTRAINTS:
            return "Angle"
        elif constraint.ConstraintType in ANGLE_DEG_CONSTRAINTS:
            return "AnglePos"
        elif constraint.ConstraintType in DISTANCE_CONSTRAINTS:
            return "Distance"
        else:
            return "Length"

    def stepRatio(self):
        ratio = (self.end_value - self.start_value) / 100
        return ratio

    def onEntryStart(self, new_start):
        self.start_value = float(new_start)
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        # Update the slider
        slider_value = ((self.current_value - self.start_value) / self.stepRatio())
        self.actuator_slider.setValue(slider_value)

    def onEntryEnd(self, new_end):
        self.end_value = float(new_end)
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        # Update the slider
        slider_value = ((self.current_value - self.start_value) / self.stepRatio())
        self.actuator_slider.setValue(slider_value)

    def onEntrySteps(self, new_steps):
        self.steps_value = int(new_steps)

    def onActuatorSlider(self, slider_value):
        self.current_value = slider_value * self.stepRatio() + self.start_value
        if self.driver_type == "Angle":
            self.actuator.Angle = self.current_value
        elif self.driver_type == "AnglePos":
            self.actuator.Angle = self.current_value
        elif self.driver_type == "Distance":
            self.actuator.Distance = self.current_value
        else:
            self.actuator.Offset = self.current_value
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        FreeCADGui.updateGui() # screen update between steps
        Gui.runCommand("asm3CmdQuickSolve", 0)

    def onForward(self):
        steps_left = self.steps_value
        print(self.steps_value)
        step = ((self.end_value - self.current_value) / steps_left)
        while steps_left > 0:
            self.current_value += step
            slider_value = ((self.current_value - self.start_value) / self.stepRatio())
            self.actuator_slider.setValue(slider_value)
            time.sleep(0.2)
            self.output(steps_left)
            steps_left -= 1
        self.actuator_slider.setValue(100)

    def onBackward(self):
        steps_left = self.steps_value
        step = ((self.current_value - self.start_value) / steps_left)
        while steps_left > 0:
            self.current_value -= step
            slider_value = ((self.current_value - self.start_value) / self.stepRatio())
            self.actuator_slider.setValue(slider_value)
            time.sleep(0.2)
            self.output(steps_left)
            steps_left -= 1
        self.actuator_slider.setValue(0)

    def onClose(self):
        self.result = "Closed"
        self.close()

    def onOutputClicked(self):
        if self.sequence == True:
            self.sequence = False
            self.output_check.setChecked(False)
        else:
            self.sequence = True
            self.output_check.setChecked(True)

    def output(self, counter):
        if (self.sequence == True):
            image_path = ".../FreeCAD/ScreenShots/Sequence"
            file_tag = ".png"
            height = 640
            width = 480
            background = "Transparent"
            # dealing with leading zeros
            if (counter > 999) or (counter < 0):
                print("Out of Range")
            elif (counter < 10):
                number = "00" + str(counter)
            elif (counter < 100):
                number = "0" + str(counter)
            else:
                number = str(counter)
            # Screen shot
            Gui.activeDocument().activeView().saveImage(image_path + number + file_tag, height, width, background)

# End of ControlPanel()
# Main section below:

def findTheDrivingConstraints(document_object):
    # search through the Objects and find the driving constraint
    driver_list = []
    for each in document_object.Objects:
        if each.Label.endswith("Driver"):
            driving_constraint = each.Name
            driver_list.append(driving_constraint)
    return driver_list

def main():
    kin_doc = App.ActiveDocument # Kinematic Document
    drivers = findTheDrivingConstraints(kin_doc)
    if len(drivers) < 1:
        print("No driver found!")
    else:
        panel_list = []
        for each_driver in drivers:
            panel = ControlPanel(kin_doc, each_driver)
            panel_list.append(panel)
        panel.exec_()

if __name__ == "__main__":
    # This will be true only if the file is "executed"
    # but not if imported as a module
    main()

```

[Przewiń na górę strony](#top)

## Kilka niedoskonałości

- Kolejność sekwencji obrazów jest odwrócona, ponieważ używamy zmiennej steps_left, która jest odliczana.
- Katalog obrazów i nazwa obrazu są zakodowane na sztywno.
- Wiele kontrolerów nie jest zsynchronizowanych.

Retrieved from "<http://wiki.freecad.org/index.php?title=Tutorial_KinematicController/pl&oldid=1396654>"
