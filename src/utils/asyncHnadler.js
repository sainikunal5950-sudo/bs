const asyncHnadler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(next);
    };
}

export { asyncHnadler }


// const asyncHnadler=()=>{}
// const asyncHnadler=(func)=>()=>{}
// const asyncHnadler=(func)=>async()=>{}

// const asyncHnadler = (fn) => async (req, res, next) => {
//     try {
//         await (fn(req, res, next));
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }