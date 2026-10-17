const asyncHandler = (func) => (req, res, next) =>
   {
    Promise.resolve(func(req,res,next)).catch((err) =>  next(err))
   }

export {asyncHandler}



// const asyncHandler = (func) => async (req,res,next) =>{
//     //error hadnling middleare for async function
//     try{
//          await func(req,res,next);
//     }catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
  

// }