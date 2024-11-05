const empModel = require("./../models/employeeModel")

exports.addNewEmployee=async(req,res)=>{
 try{
  const newEmployee =  await empModel.create(req.body)
   res.status(201).json(
     {
        status: "Success",
        msg:"Employee added Successfully",
        data:{
             employee :newEmployee
        }
     }
   )
  }
  catch(err){
      console.log("Employee failed to save")
      res.status(400).json(
          {
             status:"Failed",
             msg:"Employee Registeration Failed"
          }
      )
  }

}

exports.getAllEmployees= async(req,res)=>{
   try{
    const employees =  await empModel.find()

    res.status(200).json({
        status:"Success",
        results : employees.length,
        data:{
           employeeDetails : employees
        }
    })

  }
   catch(err)
     {
        res.status(404).json({
           status:"fail",
           message:err.message
        })
     }

}

exports.getEmployee = async (req,res)=>{
  try{
      const emp = await empModel.findById(req.params.id)
      // empModel.findOne({eid:req.params.eid})
      res.status(200).json({
        status:"Success",
        data:{
           employeeDetails : emp
        }
    })
  }
  catch(err){
    res.status(404).json({
      status:"fail",
      message:err.message,
      details: "Please check employee id"
   })

  }

}
exports.updateEmployee = async (req,res)=>{
  try{
    //findByIdAndUpdate(filter,set or update , options)
    const emp =   await empModel.findByIdAndUpdate(req.params.id,req.body,{
        // By default, findOneAndUpdate() returns the document as it was before 
        // update was applied. If you set new: true, findOneAndUpdate()
         new:true,
         runValidators:true,
         includeResultMetadata:true
         
       })

       res.status(200).json({
        status:"Success",
        data:{
           newEmployeeDetails : emp
        }
    })
    }
    catch(err){
      res.status(404).json({
        status:"fail to update",
        message:err.message,
        details: "Please check employee id"
     })

    }

}

exports.removeEmployee = async (req,res)=>{
    try{
         
         const emp =await  empModel.findByIdAndDelete(req.params.id)
         if(emp)
            {
              res.status(200).json({
                status:"Removed Successfully",
                data:{
                   removedEmployeeDetails : emp
                }

            })

    }
  }
    catch(err){
      res.status(404).json({
        status:"fail to remove employee",
        message:err.message,
        details: "Please check employee id"
     })

    }
}

exports.getAllEmployeeDetails= async(req,res)=>{
  const allEmployees = await empModel.find()
 return res.render("employees",{
    allemployeesDetails:allEmployees
  })
}