ThisBuild / scalaVersion := "3.10.0"

lazy val root = project
    .in(file("."))
    .enablePlugins(ScalaJSPlugin)
    .settings(
        name := "calagem",
        scalaJSUseMainModuleInitializer := true
    )