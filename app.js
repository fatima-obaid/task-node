const data10= require("./data10")
const yargs = require("yargs")

// // command add
yargs.command({
  command : "add" ,
  describe : " to add an item",
  builder : {
    fname : {
       describe :"this is the first name desc in add command",
       demandOption : true ,
       type : "string"
    },
    lname : {
       describe :"this is the last name desc in add command",
       demandOption : true ,
       type : "string"
    }

  },
  handler : (x)=> { 
         data10.addPerson(x.id , x.fname , x.lname , x.city , x.age)
  }
})

// command delete  
yargs.command({
  command : "delete",
  describe: "to delete an item",
  handler : (x)=> {
      data10.deleteData(x.id)
  }
})

// command read
yargs.command ({
  command : "read",
  describe : "to read an item",
  builder : {
     id : {
        describe : "this is id desc in read command ",
        demandOption : true,
        type: "string"
     }
  },
  handler: (x) => {
     data10.readData(x.id)
  }
})

// command list 
yargs.command ({
  command : "list",
  describe : "to list data",
  handler : () =>{
     data10.listData()
  }
})

yargs.parse()



