import ProfileSection from "@/components/settings/ProfileSection";
import APIKeysSection from "@/components/settings/APIKeysSection";

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="space-y-6 max-w-3xl">
        <ProfileSection />
        <APIKeysSection />
      </div>
    </div>
  );
}
