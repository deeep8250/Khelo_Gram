export interface Tournament {
  id: string;
  title: string;
  organizer: string;
  organizerId: string;
  location: string;
  dateRange: string;
  entryFee: string;
  prizePool: string;
  status: 'Open' | 'Filling Fast' | 'Invitational' | 'Live' | 'Completed' | 'Paused';
  tags: string[];
  game: string;
  participants: number;
  teams: number;
  image: string;
}

export interface Member {
  id: string;
  name: string;
  email?: string;
  role: string;
  status: 'Active' | 'Pending';
  avatar: string;
}

export interface OrganizerStats {
  tournaments: number;
  prizeDistributed: string;
  members: number;
  teams: number;
}
