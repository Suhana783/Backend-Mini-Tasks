# 📊 Aggregation Framework - Student Report

## 🔹 What is Aggregation?

Aggregation in MongoDB is used to **process and transform data**.

Instead of just fetching documents, it allows us to:
- Filter data
- Group data
- Perform calculations (sum, average, count)
- Reshape output

---

## 🔹 What is a Pipeline?

A pipeline is a **series of stages** where:
- Each stage processes data
- Output of one stage becomes input for the next

Flow:
Raw Data → $group → $project → Final Output

---

## 🔹 Problem Statement

Generate a student report that shows:
- Total students per class
- Average marks per class
- Highest marks per class

---

## 🔹 Input Data

```json
[
  { "name": "Amit", "class": "10", "marks": 80 },
  { "name": "Neha", "class": "10", "marks": 70 },
  { "name": "Raj", "class": "10", "marks": 90 },
  { "name": "Simran", "class": "9", "marks": 85 },
  { "name": "Karan", "class": "9", "marks": 75 }
]


## 🔹 Aggregation Pipeline

```js
db.students.aggregate([
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
])


---

## ✅ 2. Output

```md
## 🔹 Output

```json
[
  { "class": "9", "totalStudents": 2, "avgMarks": 80, "highestMarks": 85 },
  { "class": "10", "totalStudents": 3, "avgMarks": 80, "highestMarks": 90 }
]



---

## ✅ 3. Key Learnings (Very Important)

```md
## 🔹 Key Learnings

- Aggregation is used for backend data processing
- $group is used for grouping and calculations
- $project is used to format output
- Pipeline processes data step by step