import React from "react";
import CourseModulesWithProps from "../../components/exercises/03_props";

export default {
  title: "Exercises/03 - component with props",
  component: CourseModulesWithProps,
};

export const Basic = () => {
  const name = "BSc Computer Forensic and Security - Modules table";
  const sixModules = [
    {
      name: "WAD 2",
      noLectures: 2,
      noPracticals: 2,
    },
    {
      name: "LPoCFS",
      noLectures: 4,
      noPracticals: 0,
    },
    {
      name: "NF",
      noLectures: 2,
      noPracticals: 2,
    },
    {
      name: "DO",
      noLectures: 1,
      noPracticals: 3,
    },
    {
      name: "PP",
      noLectures: 3,
      noPracticals: 0,
    },
    {
      name: "NoSQL D",
      noLectures: 2,
      noPracticals: 2,
    }
  ];
  return <CourseModulesWithProps modules={sixModules} course={name} />;
};
