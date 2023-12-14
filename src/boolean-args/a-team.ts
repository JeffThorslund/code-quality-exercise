type TimeSeriesPoint = {
  time: number;
  value: number;
};

const renderTimeSeriesChart = (
  timeSeriesPoints: TimeSeriesPoint[],
  isDataPointTooltipInteractionEnabled: boolean,
  isChartDataVisible: boolean
): {
  data: TimeSeriesPoint[];
  option?: string;
} => {
  if (!isChartDataVisible) {
    return {
      data: timeSeriesPoints,
      option: "SHOW_NOTHING",
    };
  }

  if (!isDataPointTooltipInteractionEnabled) {
    return { data: timeSeriesPoints };
  }

  return {
    data: timeSeriesPoints,
    option: "ENABLE_TOOLTIP_INTERACTION",
  };
};

// Conflicting boolean signature! Giving false expectation to caller.
renderTimeSeriesChart([], false, true);
