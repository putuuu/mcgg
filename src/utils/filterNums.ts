export function toNumArray(arr: (number | null)[]): number[] {
  return arr.filter((x): x is number => x !== null);
}

export function usedFromDraft(draft: {
  bans: { home: (number | null)[]; away: (number | null)[] };
  picks: { home: number[]; away: number[] };
}) {
  return new Set<number>([
    ...toNumArray(draft.bans.home),
    ...toNumArray(draft.bans.away),
    ...draft.picks.home,
    ...draft.picks.away,
  ]);
}
