import Beforeandafterphotos from "@/component/pages/project/Beforeandafterphotos";
import Completedproject from "@/component/pages/project/Completedproject";
import Description from "@/component/pages/project/Description";
import React from "react";

export default function page() {
  return (
    <div>
      <Completedproject />
      <Description />
      <Beforeandafterphotos />
    </div>
  );
}
