"use client";

import { services } from "@/data/services";
import { useParams } from "next/navigation";

export default function ServicePage() {
  const { slug } = useParams();

  console.log(slug);

  // Find the service by slug
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="w-full text-center relative">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
      </div>
    );
  }

  const ServiceComponent = service.component;

  return (
    <section className="w-full">
      {ServiceComponent && <ServiceComponent slug={slug} />}
    </section>
  );
}
