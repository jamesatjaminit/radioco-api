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
  });
  const responseJson = await response.data;
  if (responseJson.errors) {
    throw new Error(responseJson.errors[0].message);
  }
  return responseJson;
}
export class RadioCo {
  async getStationHistory(stationId: string) {
    return (await makeRequest({
      method: "GET",
      url: `${stationId}/history`,
    })) as StationHistory;
  }
  async getNextTrack(stationId: string) {
    return (await makeRequest({
      method: "GET",
      url: `${stationId}/next`,
    })) as StationNextTrack;
  }
  async requestTrack(stationId: string, trackId: number) {
    return (await makeRequest({
      method: "POST",
      url: `${stationId}/requests`,
      headers: {
        "content-type": "application/json",
      },
      data: JSON.stringify({
        track_id: trackId,
      }),
    })) as void;
  }
  async getRequestableTracks(stationId: string) {
    return (await makeRequest({
      method: "GET",
      url: `${stationId}/requests/tracks`,
    })) as StationRequestableTracks;
  }
  async getStationStatus(stationId: string): Promise<StationStatus> {
    return (await makeRequest({
      method: "GET",
      url: `${stationId}/status`,
    })) as StationStatus;
  }
  async getStationSchedule(stationId: string) {
    return (await makeRequest({
      method: "GET",
      url: `${stationId}/embed/schedule`,
    })) as StationSchedule;
  }
}
