import { Suspense } from "react";
import Contact from "@/views/contact";
export default function Page() {
  return (
    <Suspense>
      <Contact />
    </Suspense>
  );
}
