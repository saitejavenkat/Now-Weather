
const data_handler={
    user:(val)=>{
        if(val.endsWith("@gmail.com")|| val.endsWith("@outlook.com"))
        {
            return true;
        }
        return false;
    },
   
}
module.exports=data_handler;