export interface Collaborator {
  id: string;
  name: string;
  status: "streaming" | "pending";
}
export interface Relay {
  id: number;
  url: string;
  status: "connected";
}
export interface Track {
  title: string;
  start_time: string;
  artwork_url: string;
  artwork_url_large: string;
}
export interface RequestableTrack {
  id: number;
  artist: string;
  title: string;
  artwork: {
    url: string;
    large_url: string;
  };
}
export interface Output {
  name: string;
  format: "MP3" | "AAC";
  bitrate: 16 | 32 | 48 | 64 | 96 | 128 | 192 | 256 | 320;
}
export interface ScheduleItem {
  start: string;
  end: string;
  playlist: {
    name: string;
    colour: string;
    artist: string;
    title: string;
    artwork: string | null;
  };
}
export interface StationHistory {
  tracks: Omit<Track, "artwork_url_large">[];
}
export interface StationNextTrack {
  station_name: string;
  next_track: Omit<Track, "artwork_url">;
}
export interface StationRequestableTracks {
  tracks: RequestableTrack[];
}
export interface StationStatus {
  status: string;
  source: {
    type: "automated" | "live";
    collaborator: Collaborator | null;
    relay: Relay | null;
  };
  collaborators: Collaborator[];
  relays: Relay[];
  current_track: Track;
  history: string[];
  logo_url: string;
  streaming_hostname: string;
  outputs: Output[];
}

export interface StationSchedule {
  data: ScheduleItem[];
}
