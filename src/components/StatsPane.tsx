import React, { useState, useEffect } from 'react';

interface StatsPaneItemKpi {
  title: string;
  value: string;
  type: 'percentage' | 'discreet';
  is_resume?: boolean;
}

export interface StatsPaneItemAttributes {
  title: string;
  icon: string;
  color: string;
  kpis: StatsPaneItemKpi[];
}


export default function StatsPaneItem(params: StatsPaneItemAttributes) {

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full">
      <div className="bg-gray-200 rounded-full flex justify-center items-center w-16 h-16">
        <img src={params.icon} alt="Icon description" className="size-10" />
      </div>
      <div className="divide-y">
        <h2 className="text-4xl font-semibold">{params.title}</h2>
        {params.kpis.map((item) => {
          if (item.type === 'discreet') {
            return (
              <div className="mt-4 flex items-center" style={{ backgroundColor: item.is_resume ? "#F5F8FA" : "#FFFFFF" }} >
                <p className="text-gray-500 flex-1 text-base">{item.title} </p>
                <p className="text-3xl flex-1 text-right font-bold" style={{ color: params.color }}>{item.value}</p>
              </div>
            );
          } else if (item.type === 'percentage') {
            return (
              <div className="mt-4" style={{ color: item.is_resume ? "#F5F8FA" : "#FFFFFF" }} >
                <p className="text-gray-500 text-base">{item.title}</p>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 h-2 flex rounded-full">
                    <div className="h-2 bg-blue-600 rounded-full" style={{ width: item.value as number + "%" }} />
                  </div>
                  <p className="text-sm font-bold text-[{params.color}] ml-2">
                    {item.value}
                  </p>
                </div>
              </div>)
          };
        })}
      </div>
    </div>
  );
}
