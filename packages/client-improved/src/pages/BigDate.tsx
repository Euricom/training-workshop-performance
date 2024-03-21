import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const BigDate = () => {
  const date = dayjs();
  const localTime = date.format("MMMM D YYYY, h:mm:ss a"); // display  moment().format('MMMM Do YYYY, h:mm:ss a');
  const americaTime = date.tz("America/New_York");

  return (
    <div>
      <h1 className="text-2xl">Big Date</h1>
      <p>{localTime}</p>

      <p>America/New_York</p>
      <p>{americaTime.format("MMMM D YYYY, h:mm:ss a")}</p>
    </div>
  );
};

export default BigDate;
