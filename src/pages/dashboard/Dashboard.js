import React from "react";
import { ResponsiveGeoMapCanvas } from "@nivo/geo";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";

import { Divider } from "@material-ui/core";
import AssessmentIcon from "@material-ui/icons/AssessmentOutlined";
import ErrorIcon from "@material-ui/icons/ErrorOutlineOutlined";
import CheckIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

import undraw from "../../assets/about/undraw2.svg";
import "./Dashboard.scss";
import { barChartData, NigeiraFeatures, pieChartData } from "../../utils";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="navigation">
        <div className="dashboard-header">
          <div className="texts">
            <h2>Hello Ibrahim</h2>
            <p className="subtext">
              Lorem ipsum dolor sit amet, ei duo everti iuvaret
            </p>
          </div>
          <img src={undraw} alt="undraw" width="350" />
        </div>
      </div>
      <section className="summary-card">
        <div className="custom-card card-1">
          <div>
            <h5 className="reported">
              <span>
                <AssessmentIcon fontSize="large" />
              </span>{" "}
              Reported Cases
            </h5>
            <h4>400</h4>
          </div>
          <Divider className="divider" orientation="vertical" flexItem />
          <div>
            <h5 className="failed">
              <span>
                <ErrorIcon fontSize="large" style={{ color: "#B4391E" }} />
              </span>{" "}
              Failed Cases
            </h5>
            <h4>100</h4>
          </div>
          <Divider className="divider" orientation="vertical" flexItem />
          <div>
            <h5 className="finalized">
              <span>
                <CheckIcon fontSize="large" style={{ color: "#4BD37B" }} />
              </span>{" "}
              Finalized Cases
            </h5>
            <h4>300</h4>
          </div>
        </div>
        <div className="custom-card card-2">
          <h5>Average Turnover Time</h5>
          <h4>6 Days</h4>
          <h5>Top Local Government</h5>
          <h4>Eti-Osa</h4>
        </div>
      </section>
      <section className="custom-card graph-1">
        <ResponsiveGeoMapCanvas
          features={NigeiraFeatures}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          fillColor="#eeeeee"
          borderWidth={0.5}
          borderColor="#333333"
          enableGraticule={true}
          graticuleLineColor="#666666"
        />
      </section>
      <section className="graph-2">
        <div className="bar-chart custom-card">
          <ResponsiveLine
            data={barChartData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "transportation",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "count",
              legendOffset: -40,
              legendPosition: "middle",
            }}
            colors={{ scheme: "set1" }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </div>
        <div className="pie-chart custom-card">
          <ResponsivePie
            data={pieChartData}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: "nivo" }}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor={{ from: "color" }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "ruby",
                },
                id: "dots",
              },
              {
                match: {
                  id: "c",
                },
                id: "dots",
              },
              {
                match: {
                  id: "go",
                },
                id: "dots",
              },
              {
                match: {
                  id: "python",
                },
                id: "dots",
              },
              {
                match: {
                  id: "scala",
                },
                id: "lines",
              },
              {
                match: {
                  id: "lisp",
                },
                id: "lines",
              },
              {
                match: {
                  id: "elixir",
                },
                id: "lines",
              },
              {
                match: {
                  id: "javascript",
                },
                id: "lines",
              },
            ]}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
