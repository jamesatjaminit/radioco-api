# Radio.co API Wrapper

A very simple
[Radio.co API](https://developers-84608658bd058c817.radio.co/api-reference/openapi_specs/public-v1)
wrapper, for Node.js and Deno.

- Documentation: <https://deno.land/x/radioco_api/mod.ts>

## Usage

### Npm

```bash
npm install radioco-api
```

### Example

```typescript
import RadioCo from "radioco-api"; // NPM
import RadioCo from "https://deno.land/x/radioco_api/mod.ts"; // Deno

const radioCo = new RadioCo();
const STATION_ID = "YOUR_STATION_ID";

const status = await radioCo.getStationStatus(STATION_ID);
const tracks = await radioCo.getRequestableTracks(STATION_ID);
const history = await radioCo.getStationHistory(STATION_ID);
const nextTrack = await radioCo.getNextTrack(STATION_ID);
const requestableTracks = await radioCo.getRequestableTracks(STATION_ID);
const schedule = await radioCo.getStationSchedule(STATION_ID);
```
