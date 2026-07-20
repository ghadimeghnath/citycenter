import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Download, Plus, RotateCcw, Save, Trash2, Upload } from "lucide-react";
import { defaultMenu, saveMenu, STORAGE_KEY, type Menu, type MenuItem } from "@/lib/menu";

// Exported as a normal React page component for React Router

function loadInitial(): Menu {
  if (typeof window === "undefined") return defaultMenu;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Menu;
  } catch {
    /* fall through */
  }
  return defaultMenu;
}

function MenuAdmin() {
  useEffect(() => {
    document.title = 'Menu editor — City Centre Cafe'
    const meta = document.querySelector('meta[name=robots]') || document.createElement('meta')
    meta.setAttribute('name', 'robots')
    meta.setAttribute('content', 'noindex, nofollow')
    if (!document.querySelector('meta[name=robots]')) document.head.appendChild(meta)
  }, [])
  const [menu, setMenu] = useState<Menu>(defaultMenu);
  const [status, setStatus] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMenu(loadInitial());
  }, []);

  function flash(msg: string) {
    setStatus(msg);
    window.setTimeout(() => setStatus(""), 2200);
  }

  function updateItem(cat: string, idx: number, patch: Partial<MenuItem>) {
    setMenu((prev) => {
      const items = [...prev[cat]];
      items[idx] = { ...items[idx], ...patch };
      return { ...prev, [cat]: items };
    });
  }

  function addItem(cat: string) {
    setMenu((prev) => ({
      ...prev,
      [cat]: [...prev[cat], { name: "New item", desc: "", price: "₹0" }],
    }));
  }

  function removeItem(cat: string, idx: number) {
    setMenu((prev) => ({ ...prev, [cat]: prev[cat].filter((_, i) => i !== idx) }));
  }

  function renameCategory(oldName: string, newName: string) {
    if (!newName.trim() || newName === oldName) return;
    setMenu((prev) => {
      const entries = Object.entries(prev).map(([k, v]) =>
        k === oldName ? [newName, v] : [k, v],
      );
      return Object.fromEntries(entries) as Menu;
    });
  }

  function addCategory() {
    const name = window.prompt("New category name?");
    if (!name?.trim()) return;
    setMenu((prev) => ({ ...prev, [name.trim()]: [] }));
  }

  function removeCategory(cat: string) {
    if (!window.confirm(`Delete category "${cat}" and all its items?`)) return;
    setMenu((prev) => {
      const next = { ...prev };
      delete next[cat];
      return next;
    });
  }

  function handleSave() {
    saveMenu(menu);
    flash("Saved. The homepage now shows this menu.");
  }

  function handleReset() {
    if (!window.confirm("Reset to the original menu? Your edits will be lost.")) return;
    setMenu(defaultMenu);
    saveMenu(defaultMenu);
    flash("Reset to default menu.");
  }

  function handleExport() {
    const blob = new Blob([JSON.stringify(menu, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `city-centre-cafe-menu-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    file.text().then((text) => {
      try {
        const parsed = JSON.parse(text) as Menu;
        if (!parsed || typeof parsed !== "object") throw new Error("bad");
        setMenu(parsed);
        saveMenu(parsed);
        flash("Menu imported and saved.");
      } catch {
        flash("That file didn't look like a valid menu JSON.");
      }
    });
    e.target.value = "";
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Back to site
            </a>
            <h1 className="mt-3 font-display text-3xl md:text-4xl">Menu editor</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Edit categories, items and prices. Changes save to this browser and update the live site instantly.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={handleSave} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              <Save className="h-4 w-4" /> Save
            </button>
            <button onClick={handleExport} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary">
              <Download className="h-4 w-4" /> Export
            </button>
            <button onClick={() => fileRef.current?.click()} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary">
              <Upload className="h-4 w-4" /> Import
            </button>
            <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={handleImport} />
            <button onClick={handleReset} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:bg-secondary">
              <RotateCcw className="h-4 w-4" /> Reset
            </button>
          </div>
        </div>

        {status && (
          <div className="mt-6 rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
            {status}
          </div>
        )}

        <div className="mt-8 space-y-8">
          {Object.entries(menu).map(([cat, items]) => (
            <section key={cat} className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <input
                  value={cat}
                  onChange={(e) => renameCategory(cat, e.target.value)}
                  className="flex-1 border-b border-transparent bg-transparent font-display text-2xl text-primary focus:border-primary focus:outline-none"
                />
                <button onClick={() => removeCategory(cat)} className="text-muted-foreground hover:text-destructive" aria-label={`Delete ${cat}`}>
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-3">
                {items.map((item, idx) => (
                  <div key={idx} className="grid gap-2 rounded-md border border-border/60 p-3 md:grid-cols-[1.2fr_2fr_100px_auto] md:items-center">
                    <input
                      value={item.name}
                      onChange={(e) => updateItem(cat, idx, { name: e.target.value })}
                      placeholder="Name"
                      className="rounded border border-border bg-background px-3 py-2 text-sm"
                    />
                    <input
                      value={item.desc}
                      onChange={(e) => updateItem(cat, idx, { desc: e.target.value })}
                      placeholder="Description"
                      className="rounded border border-border bg-background px-3 py-2 text-sm"
                    />
                    <input
                      value={item.price}
                      onChange={(e) => updateItem(cat, idx, { price: e.target.value })}
                      placeholder="₹0"
                      className="rounded border border-border bg-background px-3 py-2 text-sm"
                    />
                    <button onClick={() => removeItem(cat, idx)} className="justify-self-end text-muted-foreground hover:text-destructive" aria-label="Remove item">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              <button onClick={() => addItem(cat)} className="mt-4 inline-flex items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground hover:border-primary hover:text-primary">
                <Plus className="h-4 w-4" /> Add item
              </button>
            </section>
          ))}
        </div>

        <button onClick={addCategory} className="mt-6 inline-flex items-center gap-2 rounded-full border border-dashed border-border px-5 py-3 text-sm text-muted-foreground hover:border-primary hover:text-primary">
          <Plus className="h-4 w-4" /> Add category
        </button>

        <p className="mt-10 text-xs text-muted-foreground">
          Note: edits are stored in this browser. Use <strong>Export</strong> to back up the menu or move it to another device via <strong>Import</strong>. Click <strong>Save</strong> after making changes.
        </p>
      </div>
    </div>
  );
}

export default MenuAdmin
