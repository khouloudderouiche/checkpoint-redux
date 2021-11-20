import { ADD ,EDITE,COMPLETE} from "./ActionTypes"; 


export const add= (NewTask)=>{

 return {type:ADD, payload:NewTask};
      
};

export const edit= (NewDes,id)=>{

    return {type:EDITE, payload:{NewDes,id}};
         
   };
   export const complete= (id)=>{

    return {type:COMPLETE, payload:{id}};
         
   };