import { permanentRedirect } from "next/navigation";

export default function OldActivitiesPage() {
  permanentRedirect("/packages");
}