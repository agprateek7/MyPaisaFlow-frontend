import React from 'react'
import {
    PieChart,
    Pie, 
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

const CustomPieChart = ({data, label, totalAmount, colors, showTextAnchor}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
        <PieChart>
            <Pie
                data={data}
                dataKey="amount"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={130}
                innerRadius={100}
                labelLine={false}
            >
                {(data || []).map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Pie>

            <Tooltip content={<CustomTooltip />} />
            <Legend content={(props) => <CustomLegend {...props} />} />

            {showTextAnchor && (
                <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-gray-800 font-semibold text-[16px]"
                >
                <tspan x="50%" dy="-0.6em">{label}</tspan>
                <tspan x="50%" dy="1.2em">{totalAmount}</tspan>
                </text>
            )}
        </PieChart>
    </ResponsiveContainer>
  )
}

export default CustomPieChart