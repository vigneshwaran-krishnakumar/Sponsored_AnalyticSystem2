import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApp } from "@/context/AppContext";

const Settings = () => {
  const { user } = useApp();
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your account preferences</p>
      </div>

      <div className="max-w-lg rounded-xl border border-border bg-card p-6 shadow-card">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Profile</h2>
        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit" variant="hero" size="sm">Save Changes</Button>
            {saved && <span className="text-sm text-chart-4">Saved successfully!</span>}
          </div>
        </form>
      </div>

      <div className="max-w-lg rounded-xl border border-border bg-card p-6 shadow-card">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Notifications</h2>
        <div className="space-y-3">
          {["Campaign updates", "Weekly reports", "Influencer activity", "Billing alerts"].map((item) => (
            <label key={item} className="flex items-center gap-3 text-sm text-foreground">
              <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-border text-primary accent-primary" />
              {item}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
