export interface StatRowProps {
  label: string;
  value: React.ReactNode;
}

export const StatRow = ({ label, value }: StatRowProps) => {
  if (!value) return null;

  return (
    <div className="statRow">
      <span className="statLabel">{label}: </span>
      <span className="statValue">{value}</span>
    </div>
  );
};
