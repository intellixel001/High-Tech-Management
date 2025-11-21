// data/services.js
import dynamic from "next/dynamic";

// Dynamic imports
const BuildingInspector = dynamic(() =>
  import("@/component/pages/services/Engineering")
);
const BuildingPest = dynamic(() =>
  import("@/component/pages/services/Extensions")
);
const NewHome = dynamic(() =>
  import("@/component/pages/services/NewHomeBuild")
);
const PrePurchase = dynamic(() =>
  import("@/component/pages/services/Preconstruction")
);
const PreSale = dynamic(() =>
  import("@/component/pages/services/ProjectManagement")
);
const PreAuction = dynamic(() =>
  import("@/component/pages/services/Preconstruction")
);
const PracticalCompletion = dynamic(() =>
  import("@/component/pages/services/ProjectManagement")
);
const Residential = dynamic(() =>
  import("@/component/pages/services/Duplexes")
);

// Export array of objects with slug and component
export const services = [
  { slug: "building-inspector", component: BuildingInspector },
  { slug: "building-pest", component: BuildingPest },
  { slug: "new-home", component: NewHome },
  { slug: "pre-purchase", component: PrePurchase },
  { slug: "pre-sale", component: PreSale },
  { slug: "pre-auction", component: PreAuction },
  { slug: "practical-completion", component: PracticalCompletion },
  { slug: "residential", component: Residential },
];
