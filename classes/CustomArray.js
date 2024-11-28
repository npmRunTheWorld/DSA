class CustomArray {
   constructor() {
      this.length = 0;
      this.data = {};
   }
   
   
   push(item){
      this.data[this.length] = item;
      this.length++;
   }
   
   unshift(item){
      let previousItem = this.data[0];
      this.data[0]  = item;
      for (let i = 1; i < this.length; i++) {
        // your code here
        let currentItem = this.data[i];
        this.data[i] = previousItem;
        previousItem = currentItem;
              
        
      }
      
      this.data[this.length + 1] = previousItem;
      this.length++;
      
   }
   
   pop(){
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
      
   }
   
   
   shift(){
      /* 
      //my solution
      const firstItem = this.data[0];
      delete this.data[0];
      this.length--;
      let newData = {  };
      Object.entries(this.data).forEach(([key, value]) =>{
         console.log('the key is' , key, value, typeof key);
         key = parseInt(key) - 1;
         newData[key] = value;
         console.log(key)
      })
            
      this.data = newData;
      newData = null;
      return firstItem; */
      
      
      const firstItem = this.data[0];
      
      for(let i = 0; i < this.length - 1; i++){
         this.data[i] = this.data[i+1];
      }
      
      delete this.data[this.length - 1];
      this.length--;
      
      console.log(this.data);
      return firstItem;
   }
   
   
   
   getData(){
      console.log(this.data);
      return this.data;
   }
   
   delete(index){
      for (let i = index; i < this.length; i++) {
        this.data[i] = this.data[i+1];
        if(this.data[i] == undefined){
         delete this.data[i];
        }
      }
      
      this.length--;
      
   }
}

export default CustomArray;