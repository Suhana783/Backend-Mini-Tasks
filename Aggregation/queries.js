// Student Report Aggregation

// Goal:
// - Total students per class
// - Average marks per class
// - Highest marks per class


const studentReportPipeline = [
  {
    $group: {
      _id: "$class",
      totalStudents: { $sum: 1 },
      avgMarks: { $avg: "$marks" },
      highestMarks: { $max: "$marks" }
    }
  },
  {
    $project: {
      class: "$_id",
      totalStudents: 1,
      avgMarks: 1,
      highestMarks: 1,
      _id: 0
    }
  }
];

