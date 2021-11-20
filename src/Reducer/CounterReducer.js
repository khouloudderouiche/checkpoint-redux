import { ADD ,EDITE,COMPLETE} from "../Action/ActionTypes"; 


const intianalState = { 
  lists:  [{id:1, content:"task1",chek:true}],    
};
export const counterReducer=(state = intianalState,{type,payload})=>{
    switch (type) {
        case EDITE:
            return{ 
                ...state,lists:state.lists.map((el)=>
                el.id===payload.id?{...el,content: payload.NewDes}:el
                ),    
    };
    case ADD :
        return{ 
            ...state,lists:[state.lists,payload]        
};
case COMPLETE :
    return{ 
        ...state,lists:state.lists.map((el)=>
        el.id===payload.id?{...el,chek:!el.chek }:el
        ),    
};
default:
    return state;
}
};