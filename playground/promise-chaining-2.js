require('../src/db/mongoose')
const Task = require('../src/models/task')

//5fed07ac148b2a4a9de20956

const deleteandcount = async (id)=>{
    const res = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count 
}

deleteandcount('5fed133a9cd28e5249707e2c').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log('e', e)
})