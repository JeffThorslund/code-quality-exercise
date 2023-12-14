type AnalysisKey = "svd" | "mvd" | "cap";

const getAnalysisName = (analysisKey: AnalysisKey): string => {
  switch (analysisKey) {
    case "svd": {
      return "Single Variate Anomaly";
    }
    case "mvd": {
      return "Multi Variate Anomaly";
    }
    case "cap": {
      return "Capability Metrics";
    }
  }
};

const getAnalysisAverageWaitTime = (analysisKey: AnalysisKey): string => {
  let numberOfSeconds: number;

  switch (analysisKey) {
    case "svd": {
      numberOfSeconds = 4;
      break;
    }
    case "mvd": {
      numberOfSeconds = 6;
      break;
    }
    case "cap": {
      numberOfSeconds = 2;
      break;
    }
  }

  return `${numberOfSeconds} seconds`;
};

const buildAnalysisProfile = (
  key: AnalysisKey
): { name: string; waitTime: string } => {
  const analysisName = getAnalysisName(key);
  const analysisWaitTime = getAnalysisAverageWaitTime(key);

  return {
    name: analysisName,
    waitTime: analysisWaitTime,
  };
};

export {};
