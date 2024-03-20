import dayjs from "dayjs";

const BigDate = () => {
  const formattedDate = dayjs().format("MMMM D YYYY, h:mm:ss a"); // display  moment().format('MMMM Do YYYY, h:mm:ss a');

  return (
    <div>
      <h1 className="text-2xl">Big Date</h1>
      <p>{formattedDate}</p>
    </div>
  );
};

export default BigDate;
