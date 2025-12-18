type Room = {
  id: string;
  homeTeam: string;
  awayTeam: string;
};

const rooms = new Map<string, Room>();

export function createRoom(homeTeam: string, awayTeam: string): Room {
  const id = crypto.randomUUID();
  const room = { id, homeTeam, awayTeam };
  rooms.set(id, room);
  return room;
}

export function getRoom(roomId: string): Room | undefined {
  return rooms.get(roomId);
}
