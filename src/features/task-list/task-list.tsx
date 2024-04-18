"use client";

import { Task } from "./task";

type Props = {};

export const TaskList = (props: Props) => {
  return (
    <div>
      <Task />
      <Task />
      <Task />
    </div>
  );
};
