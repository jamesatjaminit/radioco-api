const API_BASE_URL = "https://public.radio.co/stations/";
import axios, { AxiosRequestConfig } from "axios";
import type {
  StationHistory,
  StationNextTrack,
  StationRequestableTracks,
  StationSchedule,
  StationStatus,
} from "./types";
async function makeRequest(request: AxiosRequestConfig) {
  const response = await axios.request({
    ...request,
    baseURL: API_BASE_URL,
    headers: {
      "User-Agent":
        "Radio.co API Client https://github.com/jamesatjaminit/radioco-api",
      ...request.headers,
    },
  });
  const responseJson = await response.data;
  if (responseJson.errors) {
    throw new Error(responseJson.errors[0].message);
  }
  return responseJson;
}
export class RadioCo {
  /**
   * Get the track history of a station
   * @param stationId Station ID
   * @returns Track history
   */
  async getStationHistory(stationId: string) {
    return (await makeRequest({
      method: "GET",
      url: `${stationId}/history`,
    })) as StationHistory;
  }

  /**
   * Gets the next track to be played on a station
   * @param stationId Station ID
   * @returns Next track to be played
   */
  async getNextTrack(stationId: string) {
    return (await makeRequest({
      method: "GET",
      url: `${stationId}/next`,
    })) as StationNextTrack;
  }

  /**
   * Request a track to be played on a station
   * @param stationId Station ID
   * @param trackId Requested track ID
   * @param deviceIdentifier Optional device fingerprint ID to associate with the request
   * @returns Nothing
   */
  async requestTrack(
    stationId: string,
    trackId: number,
    deviceIdentifier?: string
  ) {
    return (await makeRequest({
      method: "POST",
      url: `${stationId}/requests`,
      headers: {
        "content-type": "application/json",
        "device-identifier": deviceIdentifier ?? "",
      },
      data: JSON.stringify({
        track_id: trackId,
      }),
    })) as void;
  }

  /**
   * Get the requestable tracks of a station
   * @param stationId Station ID
   * @returns Available tracks to be requested
   */
  async getRequestableTracks(stationId: string) {
    return (await makeRequest({
      method: "GET",
      url: `${stationId}/requests/tracks`,
    })) as StationRequestableTracks;
  }

  /**
   * Get the status of a station
   * @param stationId Station ID
   * @returns Station status
   */
  async getStationStatus(stationId: string): Promise<StationStatus> {
    return (await makeRequest({
      method: "GET",
      url: `${stationId}/status`,
    })) as StationStatus;
  }

  /**
   * Get the schedule of a station
   * @param stationId Station ID
   * @returns Station schedule
   */
  async getStationSchedule(stationId: string) {
    return (await makeRequest({
      method: "GET",
      url: `${stationId}/embed/schedule`,
    })) as StationSchedule;
  }
}
