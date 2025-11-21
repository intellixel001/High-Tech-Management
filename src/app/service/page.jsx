import Duplexes from "@/component/pages/services/Duplexes";
import Engineering from "@/component/pages/services/Engineering";
import Extensions from "@/component/pages/services/Extensions";
import NewHomeBuild from "@/component/pages/services/NewHomeBuild";
import Preconstruction from "@/component/pages/services/Preconstruction";
import ProjectManagement from "@/component/pages/services/ProjectManagement";
import React from "react";

export default function page() {
  return (
    <div>
      <NewHomeBuild />
      <Duplexes />
      <Extensions />
      <ProjectManagement />
      <Preconstruction />
      <Engineering />
    </div>
  );
}
