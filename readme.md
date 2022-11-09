# Radio.co API Wrapper

A very simple API wrapper, in typescript for the [Radio.co API](https://developers-84608658bd058c817.radio.co/api-reference/openapi_specs/public-v1).  
Basic docs are linked below but for more information/help please join the discord server.

- Support Discord Server: [https://discord.gg/DTcwugcgZ2](https://discord.gg/DTcwugcgZ2)
- Documentation: [https://jamesatjaminit.github.io/radioco-api/](https://jamesatjaminit.github.io/radioco-api/)

## Usage

```bash
npm install radioco-api
```

```typescript
import RadioCo from "radioco-api";

const radioCo = new RadioCo();
const STATION_ID = "YOUR_STATION_ID";

const status = await radioCo.getStationStatus(STATION_ID);
const tracks = await radioCo.getRequestableTracks(STATION_ID);
const history = await radioCo.getStationHistory(STATION_ID);
const nextTrack = await radioCo.getNextTrack(STATION_ID);
const requestableTracks = await radioCo.getRequestableTracks(STATION_ID);
const schedule = await radioCo.getStationSchedule(STATION_ID);
```
