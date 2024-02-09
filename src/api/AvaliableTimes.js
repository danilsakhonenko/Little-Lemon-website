const timesByDate = {
  "2024-02-09": ["15:00", "16:00", "18:00", "20:30"],
  "2024-02-11": ["11:30", "13:30", "14:30", "16:00", "18:00"],
  "2024-02-12": ["11:00", "12:00", "13:30", "14:00", "16:00", "20:00"],
  "2024-02-13": ["11:30", "12:00", "12:30", "14:00", "14:30", "15:00", "17:00"],
  "2024-02-14": [
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "14:30",
    "15:30",
    "16:00",
    "18:30",
    "20:00",
  ],
  "2024-02-15": [
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "14:30",
    "15:30",
    "16:30",
    "19:00",
    "20:00",
    "20:30",
  ],
  "2024-02-16": ["12:00", "13:00", "15:00", "18:30", "19:00"],
  "2024-02-17": ["13:00", "14:00", "14:30", "17:30", "18:00", "19:30"],
  "2024-02-18": ["11:00", "13:00", "13:30", "14:00", "15:30", "18:30", "20:00"],
  "2024-02-19": [
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "14:30",
    "15:30",
    "16:30",
    "19:00",
    "20:00",
    "20:30",
  ],
  "2024-02-20": [
    "11:00",
    "13:00",
    "15:30",
    "16:30",
    "18:00",
    "19:00",
    "20:00",
    "20:30",
  ],
  "2024-02-21": [
    "10:00",
    "11:00",
    "12:00",
    "12:30",
    "13:30",
    "14:00",
    "15:30",
    "17:00",
    "19:00",
  ],
  "2024-02-22": ["11:30", "12:00", "12:30", "14:00", "14:30", "15:00", "17:00"],
  "2024-02-23": ["15:00", "16:00", "18:00", "20:30"],
  "2024-02-24": ["11:00", "12:00", "13:30", "14:00", "16:00", "20:00"],
  "2024-02-25": ["11:30", "12:00", "12:30", "13:00", "14:30", "15:00", "19:00"],
  "2024-02-26": [
    "11:00",
    "12:00",
    "13:00",
    "13:30",
    "14:30",
    "15:00",
    "16:30",
    "18:00",
    "20:00",
  ],
  "2024-02-27": ["10:00", "12:00", "14:00", "16:00", "19:30"],
  "2024-02-28": ["12:00", "13:00", "14:30", "15:00", "17:30", "20:00"],
  "2024-02-29": ["11:30", "13:00", "16:00", "17:30", "19:30"],
};

const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timesByDate[date]) {
        resolve(timesByDate[date]);
      } else {
        reject(new Error("No data for selected date."));
      }
    }, 500);
  });
};

const submitAPI = (formData) => {
  timesByDate[formData.date] = timesByDate[
    formData.date
  ].filter((time) => time !== formData.time);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true);
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 500);
  });
};

export { fetchAPI, submitAPI };
