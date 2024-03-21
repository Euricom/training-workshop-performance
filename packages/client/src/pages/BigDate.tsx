import moment from "moment-timezone";

// Tip: Remove moment & moment-timezone and replace from dayjs

const BigDate = () => {
  const date = moment();
  const localTime = date.format("MMMM Do YYYY, h:mm:ss a");
  const newYork = moment.tz(date, "America/New_York");

  return (
    <div>
      <h1 className="text-2xl">Big Date</h1>
      <p>{localTime}</p>

      <br />
      <p>Time in New York:</p>
      <p>{newYork.format("MMMM Do YYYY, h:mm:ss a")}</p>
    </div>
  );
};

export default BigDate;
