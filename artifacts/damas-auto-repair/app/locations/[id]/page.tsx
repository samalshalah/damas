import LocationDetail from "@/views/location-detail";
import { locations } from "@/lib/data";

export function generateStaticParams() {
  return locations.map((l) => ({ id: l.id }));
}

type Props = { params: Promise<{ id: string }> };

export default async function Page({ params }: Props) {
  const { id } = await params;
  return <LocationDetail id={id} />;
}
