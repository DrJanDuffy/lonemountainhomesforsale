export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-24" aria-busy="true" aria-live="polite">
      <p className="text-sm font-medium text-stone-600">Loading…</p>
    </div>
  );
}
