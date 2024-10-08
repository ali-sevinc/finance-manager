import { useLoaderData } from "react-router-dom";
import Overview from "../layout/Overview";
import { DataType, ResDataType } from "../../lib/types";

export default function OverviewPage() {
  const data = useLoaderData() as DataType;
  return <Overview data={data} />;
}

export async function loader() {
  const res = await fetch("/data.json");
  const resData = (await res.json()) as ResDataType[];

  // console.log(resData);

  const user = resData[0].users.find((item) => item.userId === 1);
  const data = resData[0].data.find((item) => item.userId === 1);

  return { user, data };
}
