import React, { useState, useEffect } from 'react';

interface StatsPaneItemKpi {
  title: string;
  value: string;
  type: 'percentage' | 'discreet' | 'resume';
}

export interface StatsPaneItemAttributes {
  title: string;
  icon: string;
  color: string;
  kpis: StatsPaneItemKpi[];
}


export default function StatsPaneItem(params: StatsPaneItemAttributes) {

  return (
    <div className="bg-white rounded-sm border h-full  w-full">
      <div className="ml-4 mt-4 bg-gray-200 rounded-full flex justify-center items-center w-16 h-16">
        <img src={params.icon} alt="Icon description" className="size-10" />
      </div>
      <div className="">
        <h2 className="ml-4 mt-4 pb-4 text-4xl font-semibold">{params.title}</h2>
        {params.kpis.map((item, index) => {
          return (
            <div className={(item.type != 'resume' ? "flex border-dashed " : "bg-gray-100 ") + (index != params.kpis.length - 1 && "border-b ") + "pt-1 pb-1 pl-4 pr-4 items-center"}>
              <div className="flex-1">
                <p className={(item.type == 'resume' ? "text-right " : "text-left ") + "font-medium text-base"}>{item.title} </p>
              </div>
              <div className="flex-1">
                <p className={(index === 0 ? "text-3xl font-bold " : "text-2xl font-semibold ") + "flex-1 text-right"} style={{ color: params.color }}>{item.value}</p>
                {item.type == 'percentage' && (
                  <p className="text-xs text-right" style={{ color: params.color }}>({item.value}%) </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div >
  );
}
