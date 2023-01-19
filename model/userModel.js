const mongoose=require("mongoose")
const bcrypt=require("bcrypt")

const userSchema=mongoose.Schema({
    email:{
        type:String,
        require:[true,"Please enter an email"],
        unique:true
    },
    password:{
        type:String,
        require:[true,"Please enter an email"],
      
        minLength:[6,"Password must be atleast 6 characters long"]
    }
})
userSchema.pre("save",async function(next){
    const salt=await bcrypt.genSalt(10)
const hashedPassword=await bcrypt.hash(this.password,salt)
this.password=hashedPassword
next()
})

const User=mongoose.model("User",userSchema)
module.exports=User