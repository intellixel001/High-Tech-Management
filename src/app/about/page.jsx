import Companyhistory from "@/component/pages/about/Companyhistory";
import Experience from "@/component/pages/about/Experience";
import Projectmanagement from "@/component/pages/about/Projectmanagement";
import Values from "@/component/pages/about/Values";
import React from "react";

export default function page() {
  return (
    <div>
      <Companyhistory />
      <Experience />
      <Values />
      <Projectmanagement />
    </div>
  );
}
