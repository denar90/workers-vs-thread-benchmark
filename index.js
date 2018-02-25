const element = document.querySelectorAll('body')[0];

const measureUserInputLatencyStart = (type, asyncCb) => {
  performance.mark(`user-input-with-${type}-start`);
  // don't await for execution of `asyncCb` but pretend that user clicked on any element
  asyncCb();
  element.click();
};

const measureUserInputLatencyEnd = type => {
  performance.mark(`user-input-with-${type}-end`);
  performance.measure(
    `user-input-with-${type}`,
    `user-input-with-${type}-start`,
    `user-input-with-${type}-end`
  );
  const measures = performance.getEntriesByName(`user-input-with-${type}`);
  const measure = measures[0];
  console.log(`When user input while ${type} handle heavy stuff, main thread is busy for ${measure.duration} milliseconds`);
  performance.clearMarks();
  performance.clearMeasures();
};

const runAndMeasure = async (type, asyncCb) => {
  measureUserInputLatencyStart(type, asyncCb);
  measureUserInputLatencyEnd(type);
};