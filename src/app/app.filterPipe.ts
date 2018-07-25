import { Pipe ,PipeTransform} from "@angular/core";

@Pipe(
    {
        name:'filter'
    }
)

export class FilterPipe implements PipeTransform{
 filteredData:any=[];
transform(value,search)
{
    if(search===undefined){
        return value;  
    }else{
       for(const v of value){
           console.log(v);
           if(v.indexOf(search)){
               
           }
       }
    }
    }


}