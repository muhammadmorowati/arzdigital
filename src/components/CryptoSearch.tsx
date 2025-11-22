"use client";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function CryptoSearch({ value, onChange }: Props) {
  return (
    <div className="mb-5">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-zinc-300 p-2 text-sm shadow-sm"
        placeholder="جستجو در ارزهای دیجیتال..."
      />
    </div>
  );
}
