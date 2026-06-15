import { useState } from "react";
import { ChevronDown, ChevronRight, Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import { Icon, ICON_NAMES } from "@/content/icons";
import { labelFor, isIconField, isImageField, isTextareaField } from "@/content/schema";

// Build an "empty" value with the same shape as a sample, so adding new list
// items keeps the structure the public components expect.
export function makeEmptyLike(sample) {
  if (Array.isArray(sample)) return [];
  if (sample && typeof sample === "object") {
    const out = {};
    for (const [k, v] of Object.entries(sample)) out[k] = makeEmptyLike(v);
    return out;
  }
  if (typeof sample === "number") return 0;
  if (typeof sample === "boolean") return false;
  return "";
}

const inputCls =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-[#1E3A6E] focus:border-[#1E3A6E] focus:outline-none focus:ring-2 focus:ring-[#1E3A6E]/15";

function TextField({ value, onChange, multiline }) {
  if (multiline) {
    return (
      <textarea
        className={`${inputCls} min-h-[88px] resize-y`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  return <input className={inputCls} value={value} onChange={(e) => onChange(e.target.value)} />;
}

function NumberField({ value, onChange }) {
  return (
    <input
      type="number"
      className={inputCls}
      value={value}
      onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
    />
  );
}

function BoolField({ value, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className={`relative h-6 w-11 rounded-full transition-colors ${value ? "bg-[#1E3A6E]" : "bg-gray-300"}`}
    >
      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${value ? "left-[22px]" : "left-0.5"}`} />
    </button>
  );
}

function IconField({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-[#F8F9FC]">
        <Icon name={value} className="h-5 w-5 text-[#1E3A6E]" />
      </span>
      <select className={inputCls} value={value} onChange={(e) => onChange(e.target.value)}>
        {!ICON_NAMES.includes(value) && <option value={value}>{value || "—"}</option>}
        {ICON_NAMES.map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
    </div>
  );
}

function ImageField({ value, onChange }) {
  const isImg = typeof value === "string" && /\.(png|jpe?g|svg|webp|gif|avif)$/i.test(value);
  return (
    <div className="flex items-center gap-3">
      {isImg && (
        <img src={value} alt="" className="h-12 w-12 shrink-0 rounded-lg border border-gray-200 object-cover" />
      )}
      <input
        className={inputCls}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="/image.jpg or https://…"
      />
    </div>
  );
}

function Collapsible({ title, badge, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-[#1E3A6E]">
          {open ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          {title}
        </span>
        {badge != null && <span className="text-xs text-gray-400">{badge}</span>}
      </button>
      {open && <div className="border-t border-gray-100 px-4 py-4">{children}</div>}
    </div>
  );
}

function PrimitiveField({ keyName, value, onChange }) {
  if (typeof value === "number") return <NumberField value={value} onChange={onChange} />;
  if (typeof value === "boolean") return <BoolField value={value} onChange={onChange} />;
  if (isIconField(keyName)) return <IconField value={value} onChange={onChange} />;
  if (isImageField(keyName)) return <ImageField value={value} onChange={onChange} />;
  return <TextField value={value} onChange={onChange} multiline={isTextareaField(keyName, value)} />;
}

// A short preview used as the title of an array item card.
function itemTitle(item, index) {
  if (item && typeof item === "object") {
    const key = ["title", "name", "label", "q", "question", "badge"].find((k) => item[k]);
    if (key) return String(item[key]);
  }
  if (typeof item === "string" && item) return item.slice(0, 48);
  return `Item ${index + 1}`;
}

function ArrayEditor({ value, onChange }) {
  const sample = value[0];
  const isObjectList = sample && typeof sample === "object" && !Array.isArray(sample);

  const update = (i, v) => onChange(value.map((it, idx) => (idx === i ? v : it)));
  const remove = (i) => onChange(value.filter((_, idx) => idx !== i));
  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= value.length) return;
    const next = value.slice();
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };
  const add = () => onChange([...value, sample !== undefined ? makeEmptyLike(sample) : ""]);

  return (
    <div className="space-y-2">
      {value.map((item, i) => {
        const controls = (
          <div className="flex items-center gap-1">
            <IconBtn onClick={() => move(i, -1)} disabled={i === 0} title="Move up"><ArrowUp className="h-3.5 w-3.5" /></IconBtn>
            <IconBtn onClick={() => move(i, 1)} disabled={i === value.length - 1} title="Move down"><ArrowDown className="h-3.5 w-3.5" /></IconBtn>
            <IconBtn onClick={() => remove(i)} title="Delete" danger><Trash2 className="h-3.5 w-3.5" /></IconBtn>
          </div>
        );

        if (isObjectList) {
          return (
            <div key={i} className="rounded-xl border border-gray-200 bg-white">
              <ArrayItemHeader title={itemTitle(item, i)} controls={controls} index={i}>
                <div className="space-y-3 border-t border-gray-100 px-4 py-4">
                  <ObjectEditor value={item} onChange={(v) => update(i, v)} />
                </div>
              </ArrayItemHeader>
            </div>
          );
        }

        return (
          <div key={i} className="flex items-start gap-2">
            <div className="flex-1">
              <PrimitiveField keyName="" value={item} onChange={(v) => update(i, v)} />
            </div>
            {controls}
          </div>
        );
      })}
      <button
        type="button"
        onClick={add}
        className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-[#1E3A6E]/30 px-3 py-1.5 text-xs font-semibold text-[#1E3A6E] hover:bg-[#1E3A6E]/5"
      >
        <Plus className="h-3.5 w-3.5" /> Add item
      </button>
    </div>
  );
}

function ArrayItemHeader({ title, controls, index, children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between gap-2 px-4 py-2.5">
        <button type="button" onClick={() => setOpen((o) => !o)} className="flex min-w-0 items-center gap-2 text-left">
          {open ? <ChevronDown className="h-4 w-4 shrink-0 text-gray-400" /> : <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />}
          <span className="truncate text-sm font-medium text-[#1E3A6E]">{title}</span>
        </button>
        {controls}
      </div>
      {open && children}
    </>
  );
}

function IconBtn({ onClick, disabled, title, danger, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-gray-500 transition-colors disabled:opacity-30 ${
        danger ? "hover:border-red-200 hover:bg-red-50 hover:text-red-600" : "hover:bg-gray-50 hover:text-[#1E3A6E]"
      }`}
    >
      {children}
    </button>
  );
}

export function ObjectEditor({ value, onChange }) {
  return (
    <div className="space-y-4">
      {Object.entries(value).map(([key, val]) => {
        const setKey = (v) => onChange({ ...value, [key]: v });
        const isComplex = val && typeof val === "object";

        if (isComplex) {
          const count = Array.isArray(val) ? `${val.length} item${val.length === 1 ? "" : "s"}` : null;
          return (
            <Collapsible key={key} title={labelFor(key)} badge={count}>
              {Array.isArray(val) ? (
                <ArrayEditor value={val} onChange={setKey} />
              ) : (
                <ObjectEditor value={val} onChange={setKey} />
              )}
            </Collapsible>
          );
        }

        return (
          <div key={key}>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#4A4A4A]/60">
              {labelFor(key)}
            </label>
            <PrimitiveField keyName={key} value={val} onChange={setKey} />
          </div>
        );
      })}
    </div>
  );
}
