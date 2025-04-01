
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface RoasVisualProps {
  breakEvenRoas: number;
  targetRoas: number;
}

const RoasVisual: React.FC<RoasVisualProps> = ({ breakEvenRoas, targetRoas }) => {
  // Calculate the difference between target and break-even
  const profitComponent = targetRoas - breakEvenRoas;
  
  const data = [
    { name: 'Costs Recovery', value: breakEvenRoas, color: '#245e4f' },
    { name: 'Profit Component', value: profitComponent, color: '#e9c46a' }
  ];
  
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md text-sm">
          <p className="font-medium">{`${payload[0].name}: ${payload[0].value.toFixed(2)}x`}</p>
          <p className="text-xs text-gray-600">
            {payload[0].name === 'Costs Recovery' 
              ? 'Required to cover costs'
              : 'Additional for profit target'}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full">
      <h3 className="text-lg font-semibold mb-2">ROAS Components</h3>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RoasVisual;
