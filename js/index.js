// Transform function to rename keys to { label, value }

const data = [
  {
    name: 'Sophia U',
    Type: 'Non-Productive',
    Duration: 732.925,
  },
  {
    name: 'Ethan U',
    Type: 'Non-Productive',
  },
  {
    name: 'Irfan Sayeed',
    Type: 'Non-Productive',
  },
  {
    name: 'Jones U',
    Type: 'Non-Productive',
  },
  {
    name: 'Susan U',
    Type: 'Non-Productive',
  },
  {
    name: 'Thomas U',
    Type: 'Non-Productive',
  },
  {
    name: 'Ethan U',
    Type: 'Non-Productive',
  },
  {
    name: 'Irfan Sayeed',
    Type: 'Non-Productive',
  },
  {
    name: 'Thomas U',
    Type: 'Non-Productive',
  },
];
// Usage
const chartData = transformForChart(data);
console.log(chartData);
