
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CalculatorResults } from './CalculatorForm';

interface ResultChartProps {
  results: CalculatorResults;
}

const ResultChart: React.FC<ResultChartProps> = ({ results }) => {
  const data = [
    {
      name: 'Break-even',
      value: results.breakEvenRoas,
      color: '#245e4f'
    },
    {
      name: 'Target (20% Profit)',
      value: results.targetRoas,
      color: '#e9c46a'
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md text-sm">
          <p className="font-medium">{`${label}: ${payload[0].value.toFixed(2)}x`}</p>
          <p className="text-xs text-gray-600">ROAS Multiple</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full">
      <h3 className="text-lg font-semibold mb-2">ROAS Targets Comparison</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis 
            label={{ value: 'ROAS Multiple (x)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} 
            domain={[0, Math.ceil(Math.max(results.breakEvenRoas, results.targetRoas) * 1.2)]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultChart;
