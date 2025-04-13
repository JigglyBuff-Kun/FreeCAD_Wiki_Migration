---
title: Robot Workbench/ロボットワークベンチ
---

:::caution
The Robot Workbench is unmaintained. If you have experience with the topic and are interested in maintaining it, please state your intention in the developer's section of theFreeCAD forum.The reason this workbench is still in the master source code is because this workbench is programmed in C++. If this workbench could be programmed in Python, then it could be made anexternal workbenchand it could be moved to a separate repository.
:::

## Introduction

![](/images/Workbench_Robot.svg)

Robot workbench icon

ロボットワークベンチは[Kuka](http://kuka.com/)のような産業用[6 軸ロボット](/index.php?title=Robot_6-Axis/jp&action=edit&redlink=1 "Robot 6-Axis/jp (page does not exist)")のシミュレートのためのツールです。
以下の作業を行うことができます：

- ロボット、加工物とシミュレーション環境のセットアップ
- 軌道の作成と書き込み
- CAD 部品形状を軌道に分解
- ロボットの動作と到達可能範囲のシミュレート
- ロボットプログラムファイルへの軌道のエクスポート

You can do the following tasks:

- Set up a simulation environment with a robot and work pieces.
- Create and fill up movement trajectories.
- Decompose features of a CAD part to a trajectory.
- Simulate the robot movement and reaching distance.
- Export the trajectory to a robot program file.

以下で例を見ることができます：
[サンプルファイル](http://www.freecad-project.de/svn/ExampleData/Examples/RobotSimulation/) または [ロボットのチュートリアル](/index.php?title=Robot_tutorial/jp&action=edit&redlink=1 "Robot tutorial/jp (page does not exist)")

![](/images/Robot_Workbench_example.jpg)

## ツール

ロボット設定を作成するのに使う主要なコマンドです。

### ロボット

6 軸ロボットを作成、管理するためのツール

- ![](/images/Robot_CreateRobot.png) [ロボットを作成](/index.php?title=Robot_CreateRobot/jp&action=edit&redlink=1 "Robot CreateRobot/jp (page does not exist)"): シーンに新しいロボットを挿入します
- ![](/images/Robot_Simulate.png) [軌道をシミュレート](/index.php?title=Robot_Simulate/jp&action=edit&redlink=1 "Robot Simulate/jp (page does not exist)"): シミュレーションダイアログを開き、シミュレートを行います
- ![](/images/Robot_Export.png) [軌道をエクスポート](/index.php?title=Robot_Export/jp&action=edit&redlink=1 "Robot Export/jp (page does not exist)"): ロボットプログラムファイルをエクスポートします
- ![](/images/Robot_SetHomePos.png) [定位置を設定](/index.php?title=Robot_SetHomePos/jp&action=edit&redlink=1 "Robot SetHomePos/jp (page does not exist)"): ロボットの定位置を設定します
- ![](/images/Robot_RestoreHomePos.png) [定位置に戻す](/index.php?title=Robot_RestoreHomePos/jp&action=edit&redlink=1 "Robot RestoreHomePos/jp (page does not exist)"): ロボットを定位置に動かします

### 軌道

軌道を作成し、操作するためのツールです。パラメトリックなものと非パラメトリックなものの二種類があります。

#### 非パラメトリック

- ![](/images/Robot_CreateTrajectory.png) [軌道を作成](/index.php?title=Robot_CreateTrajectory/jp&action=edit&redlink=1 "Robot CreateTrajectory/jp (page does not exist)"): シーンに新しいロボットを挿入します
- ![](/images/Robot_SetDefaultOrientation.png) [デフォルトの方向を設定](/index.php?title=Robot_SetDefaultOrientation/jp&action=edit&redlink=1 "Robot SetDefaultOrientation/jp (page does not exist)"): デフォルトで作成される方位通過点を設定します
- ![](/images/Robot_SetDefaultValues.png) [デフォルトの速度パラメーターを設定](/index.php?title=Robot_SetDefaultValues/jp&action=edit&redlink=1 "Robot SetDefaultValues/jp (page does not exist)"): 通過点作成時に使用されるデフォルト値を設定します
- ![](/images/Robot_InsertWaypoint.png) [通過点を挿入](/index.php?title=Robot_InsertWaypoint/jp&action=edit&redlink=1 "Robot InsertWaypoint/jp (page does not exist)"): 現在のロボット位置から軌道に通過点を挿入します
- ![](/images/Robot_InsertWaypointPre.png) [通過点を挿入](/index.php?title=Robot_InsertWaypointPre/jp&action=edit&redlink=1 "Robot InsertWaypointPre/jp (page does not exist)"): 現在のマウス位置から軌道に通過点を挿入します

#### パラメトリック

- ![](/images/Robot_Edge2Trac.png) [エッジから軌道を作成](/index.php?title=Robot_Edge2Trac/jp&action=edit&redlink=1 "Robot Edge2Trac/jp (page does not exist)"): エッジを軌道に分解した新しいオブジェクトを挿入します
- ![](/images/Robot_TrajectoryDressUp.png) [軌道をドレスアップ](/index.php?title=Robot_TrajectoryDressUp/jp&action=edit&redlink=1 "Robot TrajectoryDressUp/jp (page does not exist)"): 軌道の一つ以上のプロパティを上書きします
- ![](/images/Robot_TrajectoryCompound.png) [軌道を合成](/index.php?title=Robot_TrajectoryCompound/jp&action=edit&redlink=1 "Robot TrajectoryCompound/jp (page does not exist)"): 複数の単一軌道を合成したものを作成します

## スクリプト処理

このセクションは以下のスクリプトから生成されています： <http://free-cad.svn.sourceforge.net/viewvc/free-cad/trunk/src/Mod/Robot/RobotExample.py?view=markup>
必要であればこのファイルを直接使用することもできます。

See the [Robot API example](/Robot_API_example "Robot API example") for a description of the functions used to model the robot displacements.

## チュートリアル

- [Robot 6-Axis](/Robot_6-Axis "Robot 6-Axis")
- [VRML のロボットシミュレーション準備](/VRML_Preparation_for_Robot_Simulation "VRML Preparation for Robot Simulation")

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_Workbench/ja&oldid=1068027>"
