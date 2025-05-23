---
title: OSE Piping Workbench
---

# Introduction

OSE Piping Workbench creates pipes and fittings. It is a part of [Open Source Ecology](https://www.opensourceecology.org/) and [Open Source Ecology Germany](https://www.ose-germany.de/). To use all its features install the [Dodo Workbench](/Flamingo_Workbench "Flamingo Workbench").

![](/images/OSE_Piping_workbench_screenshot.png)

# Customization

OSE Piping stores dimensions in CSV-files in the _table_ directory in the workbench directory. Edit these CSV files if you want to add new or to change dimensions of the fitting.

# Pipe

A pipe is described by its outer diameter **OD**, its wall thickness **Thk** and its height **H**.

To create a pipe, click ![](/images/OSE_Piping_create_pipe_icon.svg) in OSE piping workbench. Select pipe dimensions and click "OK".

![](/images/OSE_Pining_create_pipe_screenshot.png)

To add new dimensions adjust CSV **pipe.csv** file.

Wikipedia on [Nominal Pipe Size (NPS)](https://en.wikipedia.org/wiki/Nominal_Pipe_Size).

# Elbow

An elbow is described by an angle alpha, outer pipe diameter **POD**, inner pipe diameter **PID**, **H**, **J**, and **M**.

To create an elbow, click ![](/images/OSE_Piping_create_elbow_icon.svg).

![](/images/OSE_Piping_create_elbow_screenshot.png)

![](/images/OSE_Piping_elbow_CAD_screenshot.png)

To add new elbows, adjust **elbow.csv** file.

# Sweep Elbow

A sweep elbow is a special elbow with larger radius of the bent part. It is described by outer pipe diameter POD, pipe thickness **PThk**, **G**, **H**, and **M**. To create a sweep elbow, click ![](/images/OSE_Piping_create_sweep_elbow_icon.svg).

![](/images/OSE_Piping_create_sweep_elbow_screenshot.png)

![](/images/OSE_Piping_sweep_elbow_CAD_screenshot.png)

To add new sweep elbows, adjust **sweep-elbow.csv** file.

Retrieved from "<http://wiki.freecad.org/index.php?title=OSE_Piping_Workbench/en&oldid=1205666>"
