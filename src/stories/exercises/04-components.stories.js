import React from "react";
import CourseModulesCollections from "../../components/exercises/04_iteration";

export default {
  title: "Exercises/04 - iteration",
  component: CourseModulesCollections,
};

export const Basic = () => {
  const name = "BSc Computer Forensic and Security - Modules table";
  const modules = [
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
    },
  ];
  return <CourseModulesCollections modules={modules} course={name} />;
};