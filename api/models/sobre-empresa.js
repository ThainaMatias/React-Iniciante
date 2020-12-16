const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const sobreempresa = new Schema({ 
  name:{
    type: String
  }, 
  sobre:{
    type: String
  },
  sobreSub:{
    type: String
  },
},{
  timestamps:true,
});

mongoose.model('SobreEmpresa', sobreempresa);