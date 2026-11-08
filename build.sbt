ThisBuild / scalaVersion := "3.10.0"

lazy val root = project
    .in(file("."))
    .enablePlugins(ScalaJSPlugin)
    .settings(
        name := "calagem",
        scalaJSUseMainModuleInitializer := true,

        libraryDependencies +=
            "org.scala-js" %%% "scalajs-dom" % "2.8.0",

        Compile / fastLinkJS / scalaJSLinkerOutputDirectory :=
            (baseDirectory.value / "js"),

        Compile / fullLinkJS / scalaJSLinkerOutputDirectory :=
            (baseDirectory.value / "js")
    )