import EventList from "../models/list-model";

export const EVENTS = [
  // id, icon, title, location, time, price, date, image, attendees
  new EventList(
    "he-1",
    "gift",
    "Today Brar Birthday",
    "Ikeja",
    "12:00pm",
    "100000",
    "12/02/2020",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    ["simi", "tega", "amakiri", "ibrahim", "ochuko"]
  ),
  new EventList(
    "he-2",
    "drinks",
    "Night Party",
    "Lekki",
    "11:00pm",
    "100000",
    "15/02/2020",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    ["simi", "tega", "amakiri", "esther", "ochuko"]
  ),
  new EventList(
    "he-3",
    "food",
    "Dinner",
    "Ikeja",
    "12:00",
    "130000",
    "18/02/2020",
    "https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg",
    ["simi", "tega"]
  ),
  new EventList(
    "he-4",
    "party",
    "Carnival Festival",
    "VI",
    "12:00",
    "150000",
    "21/02/2020",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    ["simi", "tega", "amakiri", "ibrahim"]
  )
];
