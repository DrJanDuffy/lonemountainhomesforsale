import { realScoutDefaults } from "@/lib/site-contact";

type OfficeListingsProps = {
  className?: string;
};

/**
 * RealScout custom element — render via innerHTML only; do not gate on React state.
 */
function escapeAttr(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

export function RealScoutOfficeListings({ className }: OfficeListingsProps) {
  const id = escapeAttr(realScoutDefaults.agentEncodedId);
  const html = `<realscout-office-listings agent-encoded-id="${id}" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale,In Contract" property-types=",SFR,TC"></realscout-office-listings>`;

  return (
    <div className={className}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
