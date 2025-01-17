import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { weeklyData } from "@/data/studentsData";
import isMobile from "../isMobile";
const WeeklyEnrolled = () => {
  const mobilePhone = isMobile();
  return (
    <ResponsiveLine
      data={weeklyData}
      margin={{ top: 20, right: 40, bottom: 50, left: isMobile ? 40 : 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      colors="#9ef01a"
      theme={{
        grid: {
          line: {
            stroke: "#adb5bd",
            strokeWidth: 1,
          },
        },
        text: {
          fontSize: 12,
          fill: "#7f7f7f",
          outlineWidth: 0,
          outlineColor: "transparent",
        },
        axis: {
          domain: {
            line: {
              stroke: "#777777",
              strokeWidth: 1,
            },
          },
        },
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: !isMobile && "Date",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: !isMobile && "Enrolled",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
    />
  );
};

export default WeeklyEnrolled;
