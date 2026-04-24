const Student = require('../models/student.model');


exports.createStudent = async (req, res) => {

    try {

        const newStudent = await Student.create(req.body);

        res.status(201).json({
            success : true,
            data : newStudent
        });
    } catch (error) {

        res.status(400).json ({
            success : false,
            message : error.message
        })
    }
};


exports.getAllStudents = async (req, res) => {

    try {

        const getStudents = await Student.find();

        res.status(200).json({
            success : true,
            data : getStudents
        })
    } catch (error) {
        res.status(500).json ({
            success : false,
            message : "Server Error"
        })
    }
};


exports.updateStudent = async (req, res) => {

    try {

        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            data: updatedStudent
        })
    } catch (error) {
        res.status(400).json ({
            success : false,
            message : error.message
        });
    }
};


exports.deleteStudent = async (req, res) => {

    try {

        const deletedStudent = await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        });
    } catch (error) {
        res.status(400).json ({
            success : false,
            message : error.message
        });
    }
};



const getStudentStats = async (req, res) => {
  
    try {
        const stats = await Student.aggregate([

            {
                $match: {marks: {$gte: 33}}
            },

            {
                $group: {
                    _id: "$class",
                    numStudents : {$sum: 1},
                    avgMarks : {min : "$marks"},
                    minMarks: {$min : "$marks"},
                    maxMarks : {$min : "$marks"}

                }
            },

            {
                $sort: {avgMarks: -1}
            }
        ]);

        res.status(200).json({
            success : true,
            data : stats
        });
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        });
    }
};