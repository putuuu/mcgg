type Props = {
  children: React.ReactNode;
};

export default function BoardGrid({ children }: Props) {
  return <div className="grid grid-cols-4 gap-2 min-h-[120px]">{children}</div>;
}
