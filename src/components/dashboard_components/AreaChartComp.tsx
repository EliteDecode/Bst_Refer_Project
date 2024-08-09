import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

type AreaChartCompProps = {
  data: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
    cnt?: number;
  }[];
  stroke: string;
  fill: string;
};

const AreaChartComp = ({ data, stroke, fill }: AreaChartCompProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="amt" fill={fill} stroke={stroke} />
        <Bar dataKey="pv" barSize={20} fill={fill} />
        <Line type="monotone" dataKey="uv" stroke={stroke} />
        <Scatter dataKey="cnt" fill="red" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComp;
