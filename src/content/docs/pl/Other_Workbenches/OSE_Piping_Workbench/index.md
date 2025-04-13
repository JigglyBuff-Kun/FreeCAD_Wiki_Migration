---
title: Środowisko pracy Rurociągi OSE
---
# Wprowadzenie

Środowisko Rurociągi OSE tworzy rury i kształtki. Jest częścią [Open Source Ecology](https://www.opensourceecology.org/) i [Open Source Ecology Germany](https://www.ose-germany.de/). Aby korzystać ze wszystkich jego funkcji, należy zainstalować środowisko pracy [Dodo](/Flamingo_Workbench/pl "Flamingo Workbench/pl").

![](/images/OSE_Piping_workbench_screenshot.png)

## Dostosowywanie

Środowisko pracy Rurociągi OSE przechowuje wymiary w plikach .CSV w katalogu "table", katalogu środowiska pracy. Edytuj te pliki CSV, jeśli chcesz dodać nowe lub zmienić wymiary złączki.

## Rury

Rura jest opisana przez jej średnicę zewnętrzną **OD**, grubość ścianki **Thk** i wysokość **H**.

Aby utworzyć rurę, kliknij ![](/images/OSE_Piping_create_pipe_icon.svg) w oknie środowiska roboczego rurociągi OSE. Wybierz wymiary rury i kliknij przycisk OK.

![](/images/OSE_Pining_create_pipe_screenshot.png)

Aby dodać nowe wymiary, dostosuj plik CSV **pipe.csv**.

Wikipedia [Nominalny rozmiar rury *(**N**ominal **P**ipe **S**ize NPS)*](https://en.wikipedia.org/wiki/Nominal_Pipe_Size)

# Kolanko

Kolanko jest opisane przez kąt alfa, zewnętrzną średnicę rury **POD**, wewnętrzną średnicę rury **PID**, **H**, **J** i **M**.

Aby utworzyć kolanko, kliknij na ![](/images/OSE_Piping_create_elbow_icon.svg).

![](/images/OSE_Piping_create_elbow_screenshot.png)

![](/images/OSE_Piping_elbow_CAD_screenshot.png)

Aby dodać nowe kolanka, dostosuj plik **elbow.csv**.

# Długie kolanko

Kolanko długie to specjalne kolanko o większym promieniu wygiętej części. Jest ono opisane przez zewnętrzną średnicę rury POD, grubość rury **PThk**, **G**, **H** i **M**. Aby utworzyć kolano długie, kliknij ![](/images/OSE_Piping_create_sweep_elbow_icon.svg).

![](/images/OSE_Piping_create_sweep_elbow_screenshot.png)

![](/images/OSE_Piping_sweep_elbow_CAD_screenshot.png)

Aby dodać nowe kolanka długie, dostosuj plik **sweep-elbow.csv**.

Retrieved from "<http://wiki.freecad.org/index.php?title=OSE_Piping_Workbench/pl&oldid=1286140>"