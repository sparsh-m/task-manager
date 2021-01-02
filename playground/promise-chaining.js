require('../src/db/mongoose')
const User = require('../src/models/user')

//5fecf73d13411c3f13b9c597

const updateAgeandCount = async (id, age)=>{
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeandCount('5fecf73d13411c3f13b9c597', 3).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})
