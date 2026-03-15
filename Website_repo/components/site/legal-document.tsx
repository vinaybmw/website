import { readFileSync } from "fs";
import path from "path";

type LegalDocumentProps = {
  filePath: string;
  title: string;
};

export function LegalDocument({ filePath, title }: LegalDocumentProps) {
  const absolutePath = path.join(process.cwd(), filePath);
  const raw = readFileSync(absolutePath, "utf8");
  const lines = raw.replace(/\r\n/g, "\n").split("\n");

  return (
    <section className="bg-gradient-to-b from-white to-bodiqo-light/22 pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="section-shell">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-bodiqo-charcoal sm:text-4xl">{title}</h1>
        <div className="mt-8 rounded-3xl border border-bodiqo-electric/16 bg-white p-6 shadow-[0_10px_24px_rgba(17,22,31,0.05)] sm:p-8">
          <div className="space-y-3 text-sm leading-relaxed text-bodiqo-charcoal/84 sm:text-[0.95rem]">
            {lines.map((line, index) => {
              const trimmed = line.trim();
              if (!trimmed) {
                return <div key={`${index}-blank`} className="h-2" />;
              }

              const isHeading =
                /^BODIQO/i.test(trimmed) ||
                /^Effective/i.test(trimmed) ||
                /^Brand:/i.test(trimmed) ||
                /^Operator/i.test(trimmed) ||
                /^App:/i.test(trimmed) ||
                /^\d+(\.\d+)*\s+/.test(trimmed);

              const labelMatch = trimmed.match(/^([A-Za-z][A-Za-z0-9 /&()+.'-]{1,80}:)\s*(.*)$/);
              const hasLabel = Boolean(labelMatch) && !/^https?:/i.test(trimmed);
              const lineClass = isHeading ? "font-semibold text-bodiqo-charcoal" : "";

              return (
                <p key={`${index}-${trimmed.slice(0, 20)}`} className={lineClass}>
                  {hasLabel && labelMatch ? (
                    <>
                      <span className="font-semibold text-bodiqo-charcoal">{labelMatch[1]}</span>{" "}
                      <span>{labelMatch[2]}</span>
                    </>
                  ) : (
                    line
                  )}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
