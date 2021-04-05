import { createSlice } from "@reduxjs/toolkit";

import * as earthquakeService from "../services/EarthquakeService";

export const earthquakeData = createSlice({
  name: "mainstore",
  initialState: {
    earthquakes: [
      {
        key: "1",
        id: "9c894370-2ce3-4218-fs68-2176401e3fa1",
        date: "3/27/2021, 2:09:11 PM",
        status: 1,
        mag: 2.5,
        place: "10km SSW of Idyllwild, CA",
        title: "M 4.4 - south of the Fiji Islands",
        lat: 33.6633333,
        long: -116.7776667,
        rowColor: "default",
      },
    ],
    mapCoordinates: {
      lat: 0,
      long: 0,
      zoom: 3,
    },
    mapObject: {},
  },
  reducers: {
    setMapCoordinates: (state, action) => {
      state.mapCoordinates = action.payload;
    },
    changeColor: (state, action) => {
      console.log("changeColor");
      for (let i = 0; i < state.earthquakes.length; i++) {
        if (state.earthquakes[i].id === action.payload) {
          state.earthquakes[i].rowColor = "#99e6ff"; //needs to be past and not be hardcoded 
        }else{
          if(state.earthquakes[i].rowColor !== "default"){
            state.earthquakes[i].rowColor =  "default";
          }
        }
      }
    },
    test: (state, action) => {
      console.log("test");
      console.log(action.payload);

      state.mapObject = action.payload;
    },
    setEarthquakes: (state, action) => {
      state.earthquakes = action.payload;
    },
  },
});

export const {
  setMapCoordinates,
  changeColor,
  test,
  setEarthquakes,
} = earthquakeData.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const setEarthquakesAction = () => (dispatch) => {
  console.log("setEarthquakesAction");
  earthquakeService
    .get()
    .then((r) => {
      let sortedProducts = [...r.data.body];
      sortedProducts.sort((a, b) => {
        if (a.date > b.date) {
          return -1;
        }
        if (a.date < b.date) {
          return 1;
        }
        return 0;
      });
      sortedProducts.forEach((element) => {
        const milliseconds = element.date * 1000; // 1575909015000
        const dateObject = new Date(milliseconds);
        element.date = dateObject.toLocaleString(); //2019-12-9 10:30:15
        element["key"] = element.id;
        element["rowColor"] = "default";
      });
      dispatch(setEarthquakes(sortedProducts));
    })
    .catch((r) => {});
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.mainstore.value)`
export const selectCount = (state) => state.mainstore.value;
export const getEarthquakes = (state) => state.mainstore.earthquakes;
export const getMapCoordinates = (state) => state.mainstore.mapCoordinates;

export default earthquakeData.reducer;
